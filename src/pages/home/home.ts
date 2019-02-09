import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ActivitePage} from '../activite/activite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  date: any;
  IrsaliyeNo:any;
  Santiye:any;

  
  constructor(public navCtrl: NavController,
    private statusBar: StatusBar,
    private alertCtrl: AlertController) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();
  }
 
  DataAl(){
   console.log("Irsaliye="+this.IrsaliyeNo,"Santiye="+this.Santiye);
   
   if((this.IrsaliyeNo!==undefined)&& (this.Santiye!==undefined))
   {
    this.navCtrl.push(ActivitePage,{IrsaliyeNO:this.IrsaliyeNo,Santiye:this.Santiye});
   }
   else
   {
     let alert = this.alertCtrl.create({
       title: 'Eksik Bilgi!',
       subTitle: 'Belge No Yada Personel No Boş Bırakılamaz!..',
       buttons: ['Tamam']
     });
     alert.present();
   }
  }
}
