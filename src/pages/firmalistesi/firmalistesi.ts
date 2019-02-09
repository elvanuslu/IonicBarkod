import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StatusBar } from '@ionic-native/status-bar';
import { Injectable } from '@angular/core';

/**
 * Generated class for the FirmalistesiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firmalistesi',
  templateUrl: 'firmalistesi.html',
})
  @Injectable()
export class FirmalistesiPage {
  
  loading: Loading;
  users: any = [];
  link= 'http://demo.veribiscrm.com/api/web/listtable';


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();
    this.presentLoadingDefault();
    this.getList();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Yükleniyor...'
    });
    this.loading.present();
   /* setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
    */
  }
 getList() {
   
    try {
     
      let data: Observable<any>;
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      //headers.append('Content-Type', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers});
      
     
      let body = {
        "ApiKey": "TEST",
        "Table": "Company",
       "Fields": ["Name", "TaxNo", "Web"],
        "Page": "1",
        "PageSize": "15",
        "Sort": { "Field": "Name", "Dir": "asc" },
        "Filter": { "Field": "Type", "Op": "eq", "Val1": "55" }
      };
/*
      let body = new FormData();
      body.append("ApiKey","TEST");
      body.append("Api","Company");
      body.append("Fields","['Name','TaxNo','Web']");
      body.append("PageSize","15");
    //  let body = 'ApiKey=TEST' + '&Api=Company' + '&Fields=Name' + '&Page=1' +'&PageSize=15';
     */
      console.log(this.link);
      /*
      this.http.post(this.link, body, options).subscribe(
        data => {
          console.log(data);
          this.users = data.text();
        },
        err => {
          console.log("Communication Error - Please verify connection and try again")
          console.log('Error: ' + err.error);
          console.log('Name: ' + err.name);
          console.log('Message: ' + err.message);
          console.log('Status: ' + err.status);
        }
      );
  */
      this.http.post(this.link, body, options)
        .map(res => res.json())
        .subscribe(data => {
          //this.users = JSON.stringify(data.Items);
          this.users = data.Data;
          //console.log(this.users[1].Name);
          // console.log(this.users);
          console.log(data);

        // alert(data.Data);
          this.loading.dismiss();
        }, err => {
          console.log("Communication Error - Please verify connection and try again")
          console.log('Error: ' + err.error);
          console.log('Name: ' + err.name);
          console.log('Message: ' + err.message);
          console.log('Status: ' + err.status);
        });
        
    }
    catch (ex) {
      console.log(ex);
      alert(ex);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FirmalistesiPage');
  }

}
