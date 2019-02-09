import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, LoadingController, Loading, Platform, ToastController, IonicApp} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AktiviteMenuPage } from '../aktivite-menu/aktivite-menu';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the ActivitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activite',
  templateUrl: 'activite.html',
})
export class ActivitePage {
  public base64Image: string;
  data={FirmaKisi:"", Konu:"",YapacakKisi:"",AktiviteTipi:"",NeZaman:"",Sure:"",Baslangic:"",
Bitis:"",Proje:"",Sonuc:"",Nerede:"",YoldaGecenSure:""};
bjson:any;
Irsaliye:any;
Santiyeler:any;
  loading: Loading;
  link1 = 'http://demo.veribiscrm.com/api/web/updatedata';
  BarcodeData:any;
  bData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private popoverCtrl: PopoverController,
    private barcodeScanner: BarcodeScanner,
    private camera: Camera, 
    public platform: Platform,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public http: Http) {
    this.Irsaliye = navParams.get("IrsaliyeNO");
    this.Santiyeler = navParams.get("Santiye");
    platform = platform;
    
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Gönderildi...',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Gönderiliyor...'
    });
    this.loading.present();
     setTimeout(() => {
       this.loading.dismiss();
     }, 5000);
    
  }
  activiteListe(){
    let headers = new Headers();
     headers.append('Content-Type', 'application/json');
    let body = {
      "ApiKey": "305ba54428e94cf0a50eeb27abac81c9",
      "Api": "Company",
      "TransferID": null,
      "Page": 0
    };
    var link = 'http://crmtransfer.veribiscrm.com/api/list';
    this.http.post(link,JSON.stringify(body),{headers:headers})
    .map(res=>res.json())
    .subscribe(data=>{console.log(data)});    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitePage');
  }
  clickKaydet() {
    console.log('Clicked Kaydet Menü');
  }
  
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(AktiviteMenuPage);
    popover.present({
      ev: ev
    });
  }
  takePictures() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
    });
  }
barkodjson(){
  this.BarcodeData = "7892222"
   let bdy ={
     "Table": "Barcode",
     "ApiKey":"TEST",
     "Data": {
       "Code": this.Irsaliye,
       "Barcode": this.BarcodeData,
       "Status":0,
       "SiteCode":this.Santiyeler
     }
   };
   this.bData = this.BarcodeData;
   console.log(bdy);
  this.Gonder(bdy);
}
  scanBarcode() {
    
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.BarcodeData=barcodeData.text;
      this.bData =this.BarcodeData;
      let bdy = {
        "Table": "Barcode",
        "ApiKey": "TEST",
        "Data": {
          "Code": this.Irsaliye,
          "Barcode": barcodeData.text,
          "Status": 0,
          "SiteCode": this.Santiyeler
        }
      };
      this.Gonder(bdy);
      console.log(barcodeData.text + " Format=" + barcodeData.format,"Json Data="+bdy,"Barcode Data ="+this.BarcodeData);
    }, (err) => {
      // An error occurred
      alert(err);
    });
  }
  
  Gonder(body:any){
    try {
      this.presentLoadingDefault();
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.link1, body, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.loading.dismiss();
          this.presentToast();
         // alert("Başarılı");
        }, err => {
          console.log("Communication Error - Please verify connection and try again")
          console.log('Error: ' + err.error);
          console.log('Name: ' + err.name);
          console.log('Message: ' + err.message);
          console.log('Status: ' + err.status);
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  Cikis()
  {
    if (this.platform.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
      this.platform.exitApp();
    }
    if (this.platform.is('android')) {
      console.log('I am an android device!');
      this.platform.ready().then(() => {
        this.platform.registerBackButtonAction(() => {
          navigator['app'].exitApp();
        });
      });
      
    }
   
  }
}
