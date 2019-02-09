webpackJsonp([10],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AktiviteMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AktiviteMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AktiviteMenuPage = (function () {
    function AktiviteMenuPage(navCtrl, navParams, camera, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
    }
    AktiviteMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AktiviteMenuPage');
    };
    AktiviteMenuPage.prototype.takePicture = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            console.log(err);
        });
        /*
        Camera.getPicture({
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
        }).then((imageData) => {
          // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
          console.log(err);
        });
        */
    };
    AktiviteMenuPage.prototype.barcodeScann = function () {
        this.barcodeScanner.scan().then(function (barcodeData) {
            // Success! Barcode data is here
            alert(barcodeData.text + " Format=" + barcodeData.format);
        }, function (err) {
            console.log(err);
        });
    };
    AktiviteMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aktivite-menu',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/aktivite-menu/aktivite-menu.html"*/'<!--\n  Generated template for the AktiviteMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content  color="positive">\n  <ion-list-header color="primary">Menü</ion-list-header>\n  <ion-list>\n    <ion-item>\n      <button ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="save"></ion-icon>Kaydet/Kapat</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="contact"></ion-icon> İptal</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="basket"></ion-icon> Sepete Ekle</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear color="dark" class="text-button text-larger" (click)="takePicture()">\n        <ion-icon name="camera"></ion-icon>Foto Çek</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear detail-none color="dark" class="text-button text-larger" (click)="barcodeScann()">\n        <ion-icon name="barcode"></ion-icon> Raf Sayımı</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear detail-none color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="contacts"></ion-icon> Aktüel</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/aktivite-menu/aktivite-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AktiviteMenuPage);
    return AktiviteMenuPage;
}());

//# sourceMappingURL=aktivite-menu.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AktivitelistePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activite_activite__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HTTP } from '@ionic-native/http';





/**
 * Generated class for the AktivitelistePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AktivitelistePage = (function () {
    function AktivitelistePage(navCtrl, navParams, restProvider, statusBar, http, httpclient, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.statusBar = statusBar;
        this.http = http;
        this.httpclient = httpclient;
        this.loadingCtrl = loadingCtrl;
        this.users = [];
        this.urlstr = [];
        this.link = 'http://crmtransfer.veribiscrm.com/api/list';
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent(); // .backgroundColorByHexString('#ffffff');
        this.presentLoadingDefault();
        this.getList();
        // this.getListe();
        //this.getPost();
    }
    AktivitelistePage.prototype.presentLoadingDefault = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Yükleniyor...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 5000);
    };
    AktivitelistePage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__activite_activite__["a" /* ActivitePage */]);
    };
    AktivitelistePage.prototype.getList = function () {
        var _this = this;
        try {
            var data = void 0;
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', 'http://crmtransfer.veribiscrm.com/api/list');
            headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
            headers.append('Content-Type', 'application/json'); //'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var body = {
                ApiKey: "305ba54428e94cf0a50eeb27abac81c9",
                Api: "Company",
                TransferID: null,
                Page: 0
            };
            this.http.post(this.link, JSON.stringify(body), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                //this.users = JSON.stringify(data.Items);
                _this.users = data.Items;
                //console.log(this.users[1].Name);
                // console.log(this.users);
                //alert(data.Items);
                _this.loading.dismiss();
            });
        }
        catch (ex) {
            console.log(ex);
            alert(ex);
        }
    };
    AktivitelistePage.prototype.logResponse = function (res) {
        console.log(res);
    };
    AktivitelistePage.prototype.extractData = function (res) {
        return res.json();
    };
    AktivitelistePage.prototype.getPost = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Allow-Origin': 'http://crmtransfer.veribiscrm.com/api/list'
            })
        };
        var body = {
            ApiKey: "305ba54428e94cf0a50eeb27abac81c9",
            Api: "Company",
            TransferID: null,
            Page: 0
        };
        return this.httpclient.post(this.link, JSON.stringify(body), httpOptions)
            .map(function (res) { return res; })
            .subscribe(function (data) {
            var Liste = JSON.stringify(data);
            console.log(JSON.stringify(data));
        });
    };
    AktivitelistePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aktiviteliste',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/aktiviteliste/aktiviteliste.html"*/'<!--\n  Generated template for the AktivitelistePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="positive">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button (click)="goToOtherPage()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Aktivite Liste</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- absolute-drag align="center" -->\n<ion-content padding="true" class="outer-content">\n<!--<ion-spinner name="bubbles" *ngIf="this.users==0" style="align:center"></ion-spinner> -->\n  <ion-list  >\n   \n   <ion-card  *ngFor="let list of this.users;let i = index" >\n    \n    <ion-card-header style="background-color: #3b5998 !important; height:10; color: white;">\n        <p  style="font-weight: bold; font-size: 14px; color: white;" >\n          <ion-badge item-start color="dark">{{i}}</ion-badge>\n          <span absolute-drag align="center">  {{ list.Name }}</span> \n     </ion-card-header>\n    <ion-item class="item-remove-animate item-avatar item-icon-right" style="background-color: #F2F2F2 !important" ng-repeat="detail in\n    details" type="item-text-wrap" (click)="goToOtherPage()">\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/logo.png">\n    </ion-thumbnail>\n    <span>\n      <p>Transfer ID : {{ list.TransferID }} </p>\n      <p>Vergi Dairesi: {{ list.TaxDepartment }}</p>\n       <p>TaxNo: {{list.TaxNo}}</p>\n      <p>Web: {{list.Web}}</p>\n      <p>CommercialCode: {{list.CommercialCode}}</p>\n      <p>Mail: {{list.Mail}}</p>\n    </span>\n    </ion-item>\n   </ion-card>\n  </ion-list>\n</ion-content>\n\n<!--\n<ion-item-options side="right">\n\n  <button ion-button color="secondary" (click)="goToOtherPage()">\n    <ion-icon name="call"></ion-icon>\n    Ara\n  </button>\n</ion-item-options>\n</ion-item-sliding>\n<ion-item (click)="goToOtherPage()">\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 2</h2>\n  <h3>12.02.2018 </h3>\n  <p>Steven Spielberg • 1981</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n\n<ion-item (click)="goToOtherPage()">\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 3</h2>\n  <h3>14.02.2018 </h3>\n  <p>Ivan Reitman • 1984</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 5</h2>\n  <h3>15.02.2018 </h3>\n  <p>Tim Burton • 1988</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 6</h2>\n  <h3>16.02.2018 </h3>\n  <p>Robert Zemeckis • 1985</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 7</h2>\n  <h3>17.02.2018 </h3>\n  <p>Irvin Kershner • 1980</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 8</h2>\n  <h3>18.02.2018 </h3>\n  <p>James Cameron • 1984</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n<ion-item>\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 9</h2>\n  <h3>19.02.2018 </h3>\n  <p>James Cameron • 1984</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n<ion-item>\n  <ion-thumbnail item-start>\n    <img src="assets/imgs/logo.png">\n  </ion-thumbnail>\n  <h2>Aktivite Başlık 10</h2>\n  <h3>20.02.2018 </h3>\n  <p>James Cameron • 1984</p>\n  <button ion-button clear item-end>View</button>\n</ion-item>\n-->'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/aktiviteliste/aktiviteliste.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AktivitelistePage);
    return AktivitelistePage;
}());

//# sourceMappingURL=aktiviteliste.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyarlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AyarlarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AyarlarPage = (function () {
    function AyarlarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AyarlarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyarlarPage');
    };
    AyarlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ayarlar',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/ayarlar/ayarlar.html"*/'<!--\n  Generated template for the AyarlarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="positive">\n    <ion-title>Ayarlar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/ayarlar/ayarlar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AyarlarPage);
    return AyarlarPage;
}());

//# sourceMappingURL=ayarlar.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmalarPopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FirmalarPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirmalarPopPage = (function () {
    function FirmalarPopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FirmalarPopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirmalarPopPage');
    };
    FirmalarPopPage.prototype.mesaj = function () {
        alert("pop butonu çalıştı..");
    };
    FirmalarPopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-firmalar-pop',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/firmalar-pop/firmalar-pop.html"*/'<!--\n  Generated template for the FirmalarPopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Menü</ion-title>\n  </ion-navbar>\n\n</ion-header>\n-->\n\n\n  <ion-content style="height: 320px" color="positive">\n    <ion-list-header color="primary">Menü</ion-list-header>\n    <ion-list > \n      <ion-item >\n        <button  ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n          <ion-icon name="locate"></ion-icon>  Lokasyon Ekle</button>\n      </ion-item>\n      <ion-item >\n      <button  ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="contact"></ion-icon>  Kişiler</button>\n      </ion-item>\n      <ion-item >\n      <button  ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="barcode"></ion-icon>  Aktüel</button>\n      </ion-item>\n      <ion-item >\n      <button  ion-button clear color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="navigate"></ion-icon>  Haritaya Git</button>\n      </ion-item>\n      <ion-item >\n      <button  ion-button clear detail-none color="dark" class="text-button text-larger" (click)="mesaj()">\n        <ion-icon name="contacts"></ion-icon>  Rehber</button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/firmalar-pop/firmalar-pop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FirmalarPopPage);
    return FirmalarPopPage;
}());

//# sourceMappingURL=firmalar-pop.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopoverPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmalarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firmalar_pop_firmalar_pop__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firmalistesi_firmalistesi__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FirmalarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navParams) {
        this.navParams = navParams;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
    }
    PopoverPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    };
    PopoverPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == background) {
                colorName = key;
            }
        }
        return colorName;
    };
    PopoverPage.prototype.setFontFamily = function () {
        if (this.textEle.style.fontFamily) {
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
        }
    };
    PopoverPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    PopoverPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    PopoverPage.prototype.changeFontFamily = function () {
        if (this.fontFamily)
            this.textEle.style.fontFamily = this.fontFamily;
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list radio-group [(ngModel)]=\"fontFamily\" (ionChange)=\"changeFontFamily()\" class=\"popover-page\">\n      <ion-row>\n        <ion-col>\n          <button (click)=\"changeFontSize('smaller')\" ion-item detail-none class=\"text-button text-smaller\">A</button>\n        </ion-col>\n        <ion-col>\n          <button (click)=\"changeFontSize('larger')\" ion-item detail-none class=\"text-button text-larger\">A</button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row-dots\">\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('white')\" class=\"dot-white\" [class.selected]=\"background == 'white'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('tan')\" class=\"dot-tan\" [class.selected]=\"background == 'tan'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('grey')\" class=\"dot-grey\" [class.selected]=\"background == 'grey'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('black')\" class=\"dot-black\" [class.selected]=\"background == 'black'\"></button>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"text-athelas\">\n        <ion-label>Athelas</ion-label>\n        <ion-radio value=\"Athelas\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-charter\">\n        <ion-label>Charter</ion-label>\n        <ion-radio value=\"Charter\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-iowan\">\n        <ion-label>Iowan</ion-label>\n        <ion-radio value=\"Iowan\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-palatino\">\n        <ion-label>Palatino</ion-label>\n        <ion-radio value=\"Palatino\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-san-francisco\">\n        <ion-label>San Francisco</ion-label>\n        <ion-radio value=\"San Francisco\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-seravek\">\n        <ion-label>Seravek</ion-label>\n        <ion-radio value=\"Seravek\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-times-new-roman\">\n        <ion-label>Times New Roman</ion-label>\n        <ion-radio value=\"Times New Roman\"></ion-radio>\n      </ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PopoverPage);
    return PopoverPage;
}());

var FirmalarPage = (function () {
    function FirmalarPage(popoverCtrl, nav, statusBar) {
        this.popoverCtrl = popoverCtrl;
        this.nav = nav;
        this.statusBar = statusBar;
        this.statusBar.styleLightContent();
    }
    FirmalarPage.prototype.presentPopover = function (ev) {
        /*
            let popover = this.popoverCtrl.create(PopoverPage, {
              contentEle: this.content.nativeElement,
              textEle: this.text.nativeElement
            });
        */
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__firmalar_pop_firmalar_pop__["a" /* FirmalarPopPage */]);
        popover.present({
            ev: ev
        });
    };
    FirmalarPage.prototype.mesaj = function () {
        alert("button Çalıştı");
    };
    FirmalarPage.prototype.Kaydet = function () {
        console.log(this.FirmaAdi + " ", this.VergiDairesi + " ", this.VergiNo, " ", this.TelNo);
    };
    FirmalarPage.prototype.FirmalarListe = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__firmalistesi_firmalistesi__["a" /* FirmalistesiPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FirmalarPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FirmalarPage.prototype, "text", void 0);
    FirmalarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-firmalar',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/firmalar/firmalar.html"*/'<!--\n  Generated template for the FirmalarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="positive">\n    <ion-title>Firmalar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-fab bottom right>\n    <button ion-fab>Kaydet</button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="Kaydet()">\n        <ion-icon name="create"></ion-icon>\n        <ion-label>Kaydet</ion-label>\n      </button>\n      <button ion-fab (click)="clickKaydet()">\n        <ion-icon name="hand"></ion-icon>\n        <ion-label>Sil</ion-label>\n      </button>\n      <button ion-fab (click)="clickKaydet()">\n        <ion-icon name="paper"></ion-icon>\n        <ion-label>Düzenle</ion-label>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n    <button ion-button color="secondary" (click)="FirmalarListe()">\n      <ion-icon name="locate"></ion-icon>  Firmalar Listesi</button>\n    \n\n      <ion-list>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Firma Adı</p>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="FirmaAdi" [ngModelOptions]="{standalone: true}" name="VergiNo" name="FirmaAdi"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Vergi Dairesi</p>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="VergiDairesi" [ngModelOptions]="{standalone: true}" name="VergiNo" name="VergiDairesi"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Vergi No</p>\n          </ion-label>\n          <ion-input type="number" [(ngModel)]="VergiNo" [ngModelOptions]="{standalone: true}" name="VergiNo"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Telefon</p>\n          </ion-label>\n          <ion-input type="tel" id="TelNo" name="TelNo" [(ngModel)]="TelNo" [ngModelOptions]="{standalone: true}"></ion-input>\n          <button ion-button color="secondary" (click)="phoneCall(TelNo1)" item-right>\n            <ion-icon name="call"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Fax</p>\n          </ion-label>\n          <ion-input type="tel" [(ngModel)]="Fax" [ngModelOptions]="{standalone: true}" name="Fax"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Web</p>\n          </ion-label>\n          <ion-input type="url" [(ngModel)]="Web" [ngModelOptions]="{standalone: true}" name="Web"></ion-input> \n        </ion-item>\n\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>E-Posta</p>\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="Eposta" [ngModelOptions]="{standalone: true}" name="Eposta"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Ülke</p>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="Ulke" [ngModelOptions]="{standalone: true}" name="Ulke"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>İl</p>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="IL" [ngModelOptions]="{standalone: true}" name="IL"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>İlçe</p>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="Ilce" [ngModelOptions]="{standalone: true}" name="Ilce"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class="item item-input item-stacked-label" floating>\n            <p>Adres</p>\n          </ion-label>\n          <ion-textarea id="txtAdres" [(ngModel)]="Adres" [ngModelOptions]="{standalone: true}" name="Adres"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/firmalar/firmalar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
    ], FirmalarPage);
    return FirmalarPage;
}());

//# sourceMappingURL=firmalar.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KisilerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the KisilerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KisilerPage = (function () {
    function KisilerPage(navCtrl, navParams, callNumber, dialogs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.dialogs = dialogs;
    }
    KisilerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KisilerPage');
    };
    KisilerPage.prototype.phoneCall = function (num) {
        /*  var call ="tel:"+num;
          alert('Aranıyor...'+num);
          document.location.href =call;
          */
        console.log(num);
        this.callNumber.callNumber(num, true)
            .then(function () { return console.log(num); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    KisilerPage.prototype.Tamam = function (mesaj) {
        this.dialogs.confirm('Please enter your name', // message              
        'Registration', // title
        ['Tamam', 'Çıkış'] // buttonLabels
        );
    };
    KisilerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kisiler',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/kisiler/kisiler.html"*/'<!--\n  Generated template for the KisilerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="positive">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Kisiler</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-fab top right>\n      <button ion-fab>Kaydet</button>\n      <ion-fab-list side="bottom">\n        <button ion-fab (click)="clickKaydet()">Kaydet\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n        <button ion-fab>Sil</button>\n        <button ion-fab>Düzenle</button>\n      </ion-fab-list>\n    </ion-fab>\n<ion-card>\n  <ion-card-content>\n  <ion-list>\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating><p>İsim</p></ion-label>\n    <ion-input type="text"></ion-input>\n    <button ion-button color="first" (click)="Tamam(\'Pekiiii\')" item-right></button>\n  </ion-item>\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating><p>Soyad</p></ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating><p>Firma Adı</p></ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating><p>E-Posta</p></ion-label>\n    <ion-input type="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating>\n      <p>Özel E-Posta</p>\n    </ion-label>\n    <ion-input type="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating>\n      <p>Şirket Cep Telefonu</p>\n    </ion-label>\n    <ion-input type="tel" type="tel" id="TelNo1" name="TelNo1" [(ngModel)]="TelNo1"></ion-input>\n    <button ion-button color="secondary" (click)="phoneCall(TelNo1)" item-right>\n      <ion-icon name="call"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating>\n      <p>Özel Cep Telefonu</p>\n    </ion-label>\n    <ion-input type="tel" id="TelNo" name="TelNo" [(ngModel)]="TelNo"></ion-input>\n    <button ion-button color="secondary" (click)="phoneCall(TelNo)" item-right><ion-icon name="call"></ion-icon>\n    </button>\n  </ion-item>\n  </ion-list>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n '/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/kisiler/kisiler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */]])
    ], KisilerPage);
    return KisilerPage;
}());

//# sourceMappingURL=kisiler.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaporlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RaporlarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RaporlarPage = (function () {
    function RaporlarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RaporlarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RaporlarPage');
    };
    RaporlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-raporlar',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/raporlar/raporlar.html"*/'<!--\n  Generated template for the RaporlarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="positive"> \n    <ion-title>Raporlar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="has-header">\n\n<ion-list>\n  <ion-card>\n    <ion-card-header >\n     <h1 align="center">Açık Aktivitelerim</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item class="item item-input item-stacked-label" id="raporlar-list-item54">\n        <p>Bugün</p>\n        <ion-badge item-end>26</ion-badge>\n      </ion-item>\n      <ion-item class="item item-input item-stacked-label">\n        <p>Bu Hafta</p>\n        <ion-badge item-end>6</ion-badge>\n      </ion-item>\n      <ion-item class="item item-input item-stacked-label">\n        <p>Bu Ay</p>\n        <ion-badge item-end>26</ion-badge>\n      </ion-item>\n      <ion-item class="item item-input item-stacked-label">\n        <p>Dün</p>\n        <ion-badge item-end>2</ion-badge>\n      </ion-item>\n      <ion-item class="item item-input item-stacked-label">\n        <p>Geçen Hafta</p>\n        <ion-badge item-end>16</ion-badge>\n      </ion-item>\n      <ion-item class="item item-input item-stacked-label">\n        <p>Geçmiş</p>\n        <ion-badge item-end>6</ion-badge>\n      </ion-item>\n      <ion-item class="item item-input item-stacked-label">\n        <p>Gelecek Hafta</p>\n        <ion-badge item-end>12</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n<ion-card>\n  <ion-card-header>\n    <h1 align="center">Kapalı Aktivitelerim</h1>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-item class="item item-input item-stacked-label" id="raporlar-list-item54">\n      <p>Bugün</p>\n    <ion-badge color="dark" item-end>5</ion-badge>\n    </ion-item>\n    <ion-item class="item item-input item-stacked-label">     \n        <p>Bu Hafta</p>\n      <ion-badge color="dark" item-end>14</ion-badge>\n    </ion-item>\n    <ion-item class="item item-input item-stacked-label">\n        <p>Bu Ay</p>\n      <ion-badge color="dark" item-end>21</ion-badge>\n    </ion-item>\n    <ion-item class="item item-input item-stacked-label">\n        <p>Dün</p>\n        <ion-badge color="dark" item-end>9</ion-badge>\n    </ion-item>\n  <ion-item class="item item-input item-stacked-label">\n    <p>Geçen Hafta</p>\n    <ion-badge color="dark" item-end>8</ion-badge>\n  </ion-item>\n    <ion-item class="item item-input item-stacked-label">\n      <p>Geçmiş</p>\n    <ion-badge color="dark" item-end>7</ion-badge>\n    </ion-item>\n    <ion-item class="item item-input item-stacked-label">\n      <p>Gelecek Hafta</p>\n    <ion-badge color="dark" item-end>17</ion-badge>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/raporlar/raporlar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RaporlarPage);
    return RaporlarPage;
}());

//# sourceMappingURL=raporlar.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activite/activite.module": [
		690,
		9
	],
	"../pages/aktivite-menu/aktivite-menu.module": [
		691,
		8
	],
	"../pages/aktiviteliste/aktiviteliste.module": [
		692,
		7
	],
	"../pages/ayarlar/ayarlar.module": [
		693,
		6
	],
	"../pages/event-modal/event-modal.module": [
		694,
		0
	],
	"../pages/firmalar-pop/firmalar-pop.module": [
		695,
		5
	],
	"../pages/firmalar/firmalar.module": [
		696,
		4
	],
	"../pages/firmalistesi/firmalistesi.module": [
		697,
		3
	],
	"../pages/kisiler/kisiler.module": [
		698,
		2
	],
	"../pages/raporlar/raporlar.module": [
		699,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { RequestOptions } from '@angular/http';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    // apiUrl = 'http://crmtransfer.veribiscrm.com/list';
    function RestProvider(http) {
        this.http = http;
        //console.log('Hello RestServiceProvider Provider');
    }
    RestProvider.prototype.aktiviteList = function (urlstr) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        //let options = new RequestOptions({headers:headers, withCredentials: true });
        var body = {
            ApiKey: '305ba54428e94cf0a50eeb27abac81c9',
            Api: 'Company',
            TransferID: null,
            Page: 0
        };
        this.http.post(urlstr, JSON.stringify(body), {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .append('Content-Type', 'application/json')
                .append('Access-Control-Allow-Origin', '*')
                .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
                .append('Accept', 'application/json')
            //.set('Content-Type', 'application/json'),
        })
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    RestProvider.prototype.activiteListe = function () {
        console.log("Aliste");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = {
            "ApiKey": "305ba54428e94cf0a50eeb27abac81c9",
            "Api": "Company",
            "TransferID": null,
            "Page": 0
        };
        var link = 'http://crmtransfer.veribiscrm.com/api/list';
        this.http.post(link, JSON.stringify(body), {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
        })
            .map(function (res) { return res; })
            .subscribe(function (data) { console.log(data); });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activite_activite__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, statusBar, alertCtrl) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent();
    }
    HomePage.prototype.DataAl = function () {
        console.log("Irsaliye=" + this.IrsaliyeNo, "Santiye=" + this.Santiye);
        if ((this.IrsaliyeNo !== undefined) && (this.Santiye !== undefined)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__activite_activite__["a" /* ActivitePage */], { IrsaliyeNO: this.IrsaliyeNo, Santiye: this.Santiye });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Eksik Bilgi!',
                subTitle: 'Belge No Yada Personel No Boş Bırakılamaz!..',
                buttons: ['Tamam']
            });
            alert_1.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="positive">\n    <ion-title>Giriş</ion-title>\n  <!--  <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content has-header" >\n  <!--\n <ion-row class="item">\n    <ion-label class="item item-input item-stacked-label" floating>\n      <p>Veribis mobile - www.veribis.com.tr</p>\n    </ion-label>\n </ion-row>\n-->\n  <ion-row class="logo-row">\n    <ion-col>\n      \n    </ion-col>\n    <ion-col width-67>\n    \n      <img src="http://www.veribis.com.tr/wp-content/uploads/2016/05/veribisLogo.png" />\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box" >\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Belge No Giriniz..." [(ngModel)]="this.IrsaliyeNo" name="email" [ngModelOptions]="{standalone: true}" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Personel No Giriniz..." [(ngModel)]="Santiye" name="password" [ngModelOptions]="{standalone: true}" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full (click)="DataAl()" >Tamam</button>\n         \n        </ion-col>\n      </ion-row>\n\n  </div>\n</ion-content>\n\n<!--<ion-content padding>\n\n\n<button ion-button primary (click)="calenderOlustur()">Event</button>\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n  \n</ion-content>-->\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_dialogs__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aktiviteliste_aktiviteliste__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_activite_activite__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_kisiler_kisiler__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_firmalar_firmalar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_raporlar_raporlar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ayarlar_ayarlar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_firmalar_pop_firmalar_pop__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_aktivite_menu_aktivite_menu__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_http_http__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_firmalistesi_firmalistesi__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aktiviteliste_aktiviteliste__["a" /* AktivitelistePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_activite_activite__["a" /* ActivitePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_kisiler_kisiler__["a" /* KisilerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_firmalar_firmalar__["a" /* FirmalarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_raporlar_raporlar__["a" /* RaporlarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ayarlar_ayarlar__["a" /* AyarlarPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_firmalar_pop_firmalar_pop__["a" /* FirmalarPopPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_aktivite_menu_aktivite_menu__["a" /* AktiviteMenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_firmalistesi_firmalistesi__["a" /* FirmalistesiPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activite/activite.module#ActivitePageModule', name: 'ActivitePage', segment: 'activite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aktivite-menu/aktivite-menu.module#AktiviteMenuPageModule', name: 'AktiviteMenuPage', segment: 'aktivite-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aktiviteliste/aktiviteliste.module#AktivitelistePageModule', name: 'AktivitelistePage', segment: 'aktiviteliste', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayarlar/ayarlar.module#AyarlarPageModule', name: 'AyarlarPage', segment: 'ayarlar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firmalar-pop/firmalar-pop.module#FirmalarPopPageModule', name: 'FirmalarPopPage', segment: 'firmalar-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firmalar/firmalar.module#FirmalarPageModule', name: 'PopoverPage', segment: 'firmalar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firmalistesi/firmalistesi.module#FirmalistesiPageModule', name: 'FirmalistesiPage', segment: 'firmalistesi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kisiler/kisiler.module#KisilerPageModule', name: 'KisilerPage', segment: 'kisiler', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/raporlar/raporlar.module#RaporlarPageModule', name: 'RaporlarPage', segment: 'raporlar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aktiviteliste_aktiviteliste__["a" /* AktivitelistePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_activite_activite__["a" /* ActivitePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_kisiler_kisiler__["a" /* KisilerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_firmalar_firmalar__["a" /* FirmalarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_raporlar_raporlar__["a" /* RaporlarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ayarlar_ayarlar__["a" /* AyarlarPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_firmalar_pop_firmalar_pop__["a" /* FirmalarPopPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_aktivite_menu_aktivite_menu__["a" /* AktiviteMenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_firmalistesi_firmalistesi__["a" /* FirmalistesiPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__["a" /* RestProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_aktiviteliste_aktiviteliste__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_kisiler_kisiler__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_firmalar_firmalar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_raporlar_raporlar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ayarlar_ayarlar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_firmalistesi_firmalistesi__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Ana Sayfa', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Aktiviteler', component: __WEBPACK_IMPORTED_MODULE_5__pages_aktiviteliste_aktiviteliste__["a" /* AktivitelistePage */] },
            { title: 'Kişiler', component: __WEBPACK_IMPORTED_MODULE_6__pages_kisiler_kisiler__["a" /* KisilerPage */] },
            { title: 'Firmalar', component: __WEBPACK_IMPORTED_MODULE_7__pages_firmalar_firmalar__["a" /* FirmalarPage */] },
            { title: 'Raporlar', component: __WEBPACK_IMPORTED_MODULE_8__pages_raporlar_raporlar__["a" /* RaporlarPage */] },
            { title: 'Ayarlar', component: __WEBPACK_IMPORTED_MODULE_9__pages_ayarlar_ayarlar__["a" /* AyarlarPage */] },
            { title: 'Firmalar Listesi', component: __WEBPACK_IMPORTED_MODULE_10__pages_firmalistesi_firmalistesi__["a" /* FirmalistesiPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.show();
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page.component);
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openKisiler = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_kisiler_kisiler__["a" /* KisilerPage */]);
    };
    MyApp.prototype.openAktivitelistePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_aktiviteliste_aktiviteliste__["a" /* AktivitelistePage */]);
    };
    MyApp.prototype.openHomePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openFirmalarPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_firmalar_firmalar__["a" /* FirmalarPage */]);
    };
    MyApp.prototype.openRaporlarPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_raporlar_raporlar__["a" /* RaporlarPage */]);
    };
    MyApp.prototype.openAyarlarPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_ayarlar_ayarlar__["a" /* AyarlarPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/app/app.html"*/'<ion-menu [content]="content" class="my-side-menu">\n  <ion-header>\n    <ion-toolbar color="positive">\n      <ion-title>Ana Sayfa</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="my-side-menu">\n    <ion-card text-center color="positive">\n      <img src="../assets/imgs/logo.png" class="custom-avatar"/>\n      <h2>Veribis Crm</h2>\n      <p>www.veribis.com.tr</p>\n      <hr>\n    </ion-card>\n  \n    <button menuClose ion-item detail-none (click)="openHomePage()" color="positive">\n      <ion-icon name="home"></ion-icon> Ana Sayfa\n    </button>\n    <button menuClose ion-item detail-none (click)="openAktivitelistePage()" color="positive">\n      <ion-icon name="people"></ion-icon> Aktiviteler\n    </button>\n    <button menuClose ion-item detail-none (click)="openKisiler()" color="positive">\n      <ion-icon name="contact"></ion-icon> Kişiler\n    </button>\n    <button menuClose ion-item detail-none (click)="openFirmalarPage()" color="positive">\n      <ion-icon name="briefcase"></ion-icon> Firmalar\n    </button>\n    <button menuClose ion-item detail-none (click)="openRaporlarPage()" color="positive">\n      <ion-icon name="paper"></ion-icon> Raporlar\n    </button>\n    \n    <button menuClose ion-item detail-none (click)="openAyarlarPage()" color="positive">\n      <ion-icon name="settings"></ion-icon> Ayarlar\n    </button>\n  <!--    <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color="positive">\n      <ion-icon name="home"></ion-icon> {{p.title}}\n      </button> -->\n\n  </ion-content>\n<ion-footer>\n<ion-toolbar color="positive">\n  <ion-title>veribis.com.tr</ion-title>\n</ion-toolbar>\n</ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="positive">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        // console.log('Hello HttpProvider Provider');
    }
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aktivite_menu_aktivite_menu__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ActivitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitePage = (function () {
    function ActivitePage(navCtrl, navParams, popoverCtrl, barcodeScanner, camera, platform, toastCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.barcodeScanner = barcodeScanner;
        this.camera = camera;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.data = { FirmaKisi: "", Konu: "", YapacakKisi: "", AktiviteTipi: "", NeZaman: "", Sure: "", Baslangic: "",
            Bitis: "", Proje: "", Sonuc: "", Nerede: "", YoldaGecenSure: "" };
        this.link1 = 'http://demo.veribiscrm.com/api/web/updatedata';
        this.Irsaliye = navParams.get("IrsaliyeNO");
        this.Santiyeler = navParams.get("Santiye");
        platform = platform;
    }
    ActivitePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Gönderildi...',
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ActivitePage.prototype.presentLoadingDefault = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Gönderiliyor...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 5000);
    };
    ActivitePage.prototype.activiteListe = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "ApiKey": "305ba54428e94cf0a50eeb27abac81c9",
            "Api": "Company",
            "TransferID": null,
            "Page": 0
        };
        var link = 'http://crmtransfer.veribiscrm.com/api/list';
        this.http.post(link, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log(data); });
    };
    ActivitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitePage');
    };
    ActivitePage.prototype.clickKaydet = function () {
        console.log('Clicked Kaydet Menü');
    };
    ActivitePage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__aktivite_menu_aktivite_menu__["a" /* AktiviteMenuPage */]);
        popover.present({
            ev: ev
        });
    };
    ActivitePage.prototype.takePictures = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    ActivitePage.prototype.barkodjson = function () {
        this.BarcodeData = "7892222";
        var bdy = {
            "Table": "Barcode",
            "ApiKey": "TEST",
            "Data": {
                "Code": this.Irsaliye,
                "Barcode": this.BarcodeData,
                "Status": 0,
                "SiteCode": this.Santiyeler
            }
        };
        this.bData = this.BarcodeData;
        console.log(bdy);
        this.Gonder(bdy);
    };
    ActivitePage.prototype.scanBarcode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // Success! Barcode data is here
            _this.BarcodeData = barcodeData.text;
            _this.bData = _this.BarcodeData;
            var bdy = {
                "Table": "Barcode",
                "ApiKey": "TEST",
                "Data": {
                    "Code": _this.Irsaliye,
                    "Barcode": barcodeData.text,
                    "Status": 0,
                    "SiteCode": _this.Santiyeler
                }
            };
            _this.Gonder(bdy);
            console.log(barcodeData.text + " Format=" + barcodeData.format, "Json Data=" + bdy, "Barcode Data =" + _this.BarcodeData);
        }, function (err) {
            // An error occurred
            alert(err);
        });
    };
    ActivitePage.prototype.Gonder = function (body) {
        var _this = this;
        try {
            this.presentLoadingDefault();
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(this.link1, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.loading.dismiss();
                _this.presentToast();
                // alert("Başarılı");
            }, function (err) {
                console.log("Communication Error - Please verify connection and try again");
                console.log('Error: ' + err.error);
                console.log('Name: ' + err.name);
                console.log('Message: ' + err.message);
                console.log('Status: ' + err.status);
            });
        }
        catch (error) {
            console.log(error);
            alert(error);
        }
    };
    ActivitePage.prototype.Cikis = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            // This will only print when on iOS
            console.log('I am an iOS device!');
            this.platform.exitApp();
        }
        if (this.platform.is('android')) {
            console.log('I am an android device!');
            this.platform.ready().then(function () {
                _this.platform.registerBackButtonAction(function () {
                    navigator['app'].exitApp();
                });
            });
        }
    };
    ActivitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activite',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/activite/activite.html"*/'<!--\n  Generated template for the ActivitePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar  color="positive">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Barkod Oku</ion-title>\n  <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  -->\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding  style="vertical-align:center" class="has-header">\n  <ion-fab bottom right>\n    <button ion-fab (click)="scanBarcode()">Oku</button>\n<!--    <ion-fab-list side="top">\n      <button ion-fab (click)="scanBarcode()">\n        <ion-icon name="barcode"></ion-icon>\n        <ion-label>Barkod Oku</ion-label>\n      </button>\n    </ion-fab-list>\n  -->\n  </ion-fab>\n<ion-list style="height:200">\n\n</ion-list>\n<ion-list>\n  <ion-card>\n\n <!--   <ion-card-header style="background-color: #3b5998 !important; height:10; color: white;">\n      <p style="font-weight: bold; font-size: 14px; color: white;">\n        <ion-badge item-start color="dark">1}</ion-badge>\n        <span absolute-drag align="center"> Adı</span>\n    </ion-card-header>\n  -->\n    <ion-item class="item-remove-animate item-avatar item-icon-right" style="background-color: #F2F2F2 !important"  >\n      <ion-label floating>Okunan Barkod</ion-label>\n      <ion-input type="text" [(ngModel)]="bData" ></ion-input>\n\n      <span>\n        <p>Transfer ID : {{this.BarcodeData}} </p>\n        <p>Vergi Dairesi: Kadı</p>\n       \n      </span>\n    </ion-item>\n  </ion-card>\n  <button ion-button ion-button block color="secondary" (click)="scanBarcode()">Barkod Oku</button>\n\n</ion-list>\n\n<!--\n<ion-list id="aktiviteListe-list11">\n  <ion-item>\n    <ion-label floating>Firma Kişi</ion-label>\n    <ion-input type="text" [(ngModel)]="data.FirmaKisi" name="FirmaKisi" [ngModelOptions]="{standalone: true}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="item item-input item-stacked-label" floating>Konu</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Konu" [ngModelOptions]="{standalone: true}" name="Konu"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Yapacak Kişi</ion-label>\n    <ion-input type="text" [(ngModel)]="data.YapacakKisi" [ngModelOptions]="{standalone: true}" name="YapacakKisi"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Aktivite Tipi</ion-label>\n    <ion-input type="text" [(ngModel)]="data.AktiviteTipi" [ngModelOptions]="{standalone: true}" name="AktiviteTipi"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Ne Zaman</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Nezaman"  [ngModelOptions]="{standalone: true}" name="NeZaman"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Süre</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Sure" [ngModelOptions]="{standalone: true}" name ="Sure"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Başlangıç</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Baslangic" [ngModelOptions]="{standalone: true}" name="Baslangic"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Bitiş</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Bitis" [ngModelOptions]="{standalone: true}" name="Bitis"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Proje</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Proje" [ngModelOptions]="{standalone: true}"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Sonuç</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Sonuc" [ngModelOptions]="{standalone: true}" name="Sonuc"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Nerede</ion-label>\n    <ion-input type="text" [(ngModel)]="data.Nerede" [ngModelOptions]="{standalone: true}" name="Nerede"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Yolda Geçen Süre</ion-label>\n    <ion-input type="text" [(ngModel)]="data.YoldaGecenSure" [ngModelOptions]="{standalone: true}" name="YoldaGecenSure"></ion-input>\n  </ion-item>\n</ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/activite/activite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], ActivitePage);
    return ActivitePage;
}());

//# sourceMappingURL=activite.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmalistesiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FirmalistesiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirmalistesiPage = (function () {
    function FirmalistesiPage(navCtrl, navParams, http, statusBar, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.users = [];
        this.link = 'http://demo.veribiscrm.com/api/web/listtable';
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent();
        this.presentLoadingDefault();
        this.getList();
    }
    FirmalistesiPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Yükleniyor...'
        });
        this.loading.present();
        /* setTimeout(() => {
           this.loading.dismiss();
         }, 5000);
         */
    };
    FirmalistesiPage.prototype.getList = function () {
        var _this = this;
        try {
            var data = void 0;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            //headers.append('Content-Type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var body = {
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
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                //this.users = JSON.stringify(data.Items);
                _this.users = data.Data;
                //console.log(this.users[1].Name);
                // console.log(this.users);
                console.log(data);
                // alert(data.Data);
                _this.loading.dismiss();
            }, function (err) {
                console.log("Communication Error - Please verify connection and try again");
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
    };
    FirmalistesiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirmalistesiPage');
    };
    FirmalistesiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-firmalistesi',template:/*ion-inline-start:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/firmalistesi/firmalistesi.html"*/'<!--\n  Generated template for the FirmalistesiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="positive">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button (click)="goToOtherPage()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Firmalar Listesi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding="true" class="outer-content">\n  <!--<ion-spinner name="bubbles" *ngIf="this.users==0" style="align:center"></ion-spinner> -->\n  <ion-list>\n    <ion-card *ngFor="let list of this.users;let i = index">\n\n      <ion-card-header style="background-color: #3b5998 !important; height:10; color: white;">\n        <p style="font-weight: bold; font-size: 14px; color: white;">\n          <ion-badge item-start color="dark">{{i}}</ion-badge>\n          <span absolute-drag align="center"> {{ list.Name }}</span>\n      </ion-card-header>\n      <ion-item class="item-remove-animate item-avatar item-icon-right" style="background-color: #F2F2F2 !important" ng-repeat="detail in\n    details" type="item-text-wrap" (click)="goToOtherPage()">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-thumbnail>\n        <span>\n          <p>Transfer ID : {{ list.TransferID }} </p>\n          <p>Vergi Dairesi: {{ list.TaxDepartment }}</p>\n          <p>TaxNo: {{list.TaxNo}}</p>\n          <p>Web: {{list.Web}}</p>\n          <p>CommercialCode: {{list.CommercialCode}}</p>\n          <p>Mail: {{list.Mail}}</p>\n        </span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/elvanuslu/Documents/VeribisBarkod/src/pages/firmalistesi/firmalistesi.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], FirmalistesiPage);
    return FirmalistesiPage;
}());

//# sourceMappingURL=firmalistesi.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map