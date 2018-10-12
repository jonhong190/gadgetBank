(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/landing' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'edit/:product_id', component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
    { path: 'new/product', component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '/landing' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_10__["OrdersComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_12__["CustomersComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_14__["ProductEditComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__["ProductAddComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customers works!\n</p>\n<div class=\"container-fluid\">\n  <h2>Customers</h2>\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let c of customers\">\n        <td>{{ c.first_name }}</td>\n        <td>{{ c.last_name }}</td>\n        <td>{{ c.email }}</td>\n        <td>\n          View Orders\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getAllCustomers(); //upon load immediately call to grab customers
    };
    CustomersComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._httpService.getCustomers().subscribe(function (data) {
            _this.customers = data;
        });
    }; //grabs all customers from db
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n    margin-left:0 !important;\n}\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:#F8F9FA \">\n\n  <div class=\"row\">\n      <nav class=\"navbar navbar-light  bg-light flex-md-nowrap col\" style=\" padding:0 !important\">\n        <div class=\"nav-brand col-2 h-100\" style=\"background-color: #3A8CEB\">\n          <a href=\"#\">Logo</a>\n        </div>\n        <input class=\"form-control form-control-light w-100 h-100 shadow-sm \" type=\"text\" placeholder=\"Search\" style=\"border-radius:0;\"/>\n        <ul class=\"navbar-nav px-3\">\n          <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"#\">Sign Out</a>\n          </li>\n        </ul>\n      </nav>\n  </div>\n\n  <div class=\"row\" style=\" padding-top:0\">\n    <nav class=\"navbar-brand col-2 d-none d-md-block bg-light sidebar\" style=\"margin-right:1rem; padding-right: 0; padding-left:0; padding-top:0\">\n      <div>\n        <ul class=\"nav flex-column\" style=\"background-color:white; height: 100vh\">\n          <li class=\"nav-item\">\n            <a (click)=\"goHome()\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a (click)=\"goOrders()\">Orders</a>\n          </li>\n          <li class=\"nav-item\">\n            <a (click)=\"goProduct()\">Products</a>\n          </li>\n          <li class=\"nav-item\">\n            <a (click)=\"goCustomers()\">Customers</a>\n          </li>\n          <li class=\"nav-item\">\n            <a (click)=\"goSetting()\">Settings</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <main role=\"main\" class=\" col-9\" style=\"height:100vh; background-color: #F8F9FA; margin-left:.41rem; \">\n      <app-home *ngIf=\"home\"></app-home>\n      <app-products *ngIf=\"product\" (sendProduct)=\"getProduct($event)\"></app-products>\n      <app-orders *ngIf=\"order\"></app-orders>\n      <app-customers *ngIf=\"customer\"></app-customers>\n      <app-settings *ngIf=\"setting\"></app-settings>\n      <app-product-edit *ngIf=\"showEditProduct\" (backToProduct)=\"goBack($event)\"></app-product-edit>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.home = null; //initialization of variables we will use to switch between sidebar components
        this.order = null;
        this.product = null;
        this.customer = null;
        this.setting = null;
        this.showEditProduct = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.goHome(); //on first load, show the home screen
    };
    DashboardComponent.prototype.goHome = function () {
        this.home = "home";
        this.product = null;
        this.order = null;
        this.customer = null;
        this.setting = null;
    }; //when called, create a value for variable home and set rest to null
    DashboardComponent.prototype.goOrders = function () {
        this.order = "order";
        this.home = null;
        this.product = null;
        this.customer = null;
        this.setting = null;
    }; //when called, create value for variable order and set rest to null
    DashboardComponent.prototype.goProduct = function () {
        this.product = "product";
        this.home = null;
        this.order = null;
        this.customer = null;
        this.setting = null;
    }; // when called, create value for variable product and set rest to null
    DashboardComponent.prototype.goCustomers = function () {
        this.customer = "customer";
        this.home = null;
        this.order = null;
        this.setting = null;
        this.product = null;
    }; //wen called, create value for variable customer and set rest to null
    DashboardComponent.prototype.goSetting = function () {
        this.setting = "setting";
        this.home = null;
        this.order = null;
        this.product = null;
        this.customer = null;
    }; //when called, create value for setting and set rest to null
    DashboardComponent.prototype.getProduct = function (data) {
        console.log("product here" + data['data']);
        this.showEditProduct = data;
        this.home = null;
        this.order = null;
        this.product = null;
        this.customer = null;
        this.setting = null;
    };
    DashboardComponent.prototype.goBack = function () {
        this.product = "product";
        this.home = null;
        this.showEditProduct = null;
        this.order = null;
        this.customer = null;
        this.setting = null;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-col-t{\n    background:white;\n    width:30% !important;\n    margin:1rem;\n}\n.home-col{\n    background:white;\n    margin-bottom:1rem !important;\n    \n    \n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<div class=\"container-fluid\">\n  <h2>Home</h2>\n  <div class=\"row\">\n    <div class=\"col-3 home-col\">\n      Total Revenue\n    </div>\n    <div class=\"col-3 offset-md-1 home-col \">\n      Today's Sales\n    </div>\n    <div class=\"col-3 offset-md-1 home-col\">\n      Enhance\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-7 home-col \" id=\"col-m-l\">\n      Top Product\n    </div>\n    <div class=\"col-3 home-col offset-md-1\">\n      Quick Details\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3 home-col\">\n      Money Stats\n    </div>\n    <div class=\"col-7 home-col offset-md-1\">\n      Net Income\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    } //connecting to the backend routes
    HttpService.prototype.getCustomers = function () {
        return this._http.get('/customers');
    }; //this route will return allUsers.
    HttpService.prototype.getThisCustomer = function (username) {
        return this._http.get('/customer/' + username);
    }; //this route will return getOneUser. Specific user is queried here
    HttpService.prototype.postNewCustomer = function (newcustomer) {
        return this._http.post('customer/new', newcustomer);
    }; //this route will create a new user through createUser
    HttpService.prototype.getLoginCustomer = function (username) {
        return this._http.get('customer/login/' + username);
    }; //this route logs in the user through loginUser
    HttpService.prototype.getOrders = function (id) {
        return this._http.get('/customer/' + id + 'orders');
    }; //this route will return all of the orders from a specific customer
    HttpService.prototype.getThisOrder = function (order_id) {
        return this._http.get('/order/' + order_id);
    }; //this route will return oneOrder. Specific order is queried here
    HttpService.prototype.postNewOrder = function (username, newOrder) {
        return this._http.post('/customer/' + username + '/order/new', newOrder);
    }; //this route will post a new order through newOrder
    HttpService.prototype.getDeleteOrder = function (order_id) {
        return this._http.get('/order/' + order_id + '/delete');
    }; //this route will delete the order through deleteOrder
    HttpService.prototype.getAllProducts = function () {
        return this._http.get('/allProducts');
    };
    HttpService.prototype.getOneProduct = function (product_id) {
        return this._http.get('/product/' + product_id);
    };
    HttpService.prototype.postNewProduct = function (order_id, newproduct) {
        return this._http.post('/order/' + order_id + '/product/new', newproduct);
    }; //this route will add a new product base on the order id through newProduct
    HttpService.prototype.postEditProduct = function (product_id, product) {
        return this._http.post('/product/edit/' + product_id, product);
    }; //this route should allow the user to edit the product info through editProduct
    HttpService.prototype.getDeleteProduct = function (product_id) {
        return this._http.get('/product/' + product_id + '/delete');
    }; //this route will delete the selected product through deleteProduct
    HttpService.prototype.postNewCategory = function (category) {
        return this._http.post('/category/new', category);
    }; //this route will add new category through addCategory
    HttpService.prototype.getCategories = function () {
        return this._http.get('/categories');
    }; // this route will get all categorie through allCategories
    HttpService.prototype.getDeleteCategory = function (category_id) {
        return this._http.get('/category/' + category_id + '/delete');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul > li{\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Landing</title>\n\n</head>\n<body>\n    \n        <div class=\"container-fluid\">\n            <nav class=\"navbar navbar-expand-lg navbar-light\"  style=\"background-color: #3D99E6;\">\n                <div class=\"d-flex flex-grow-1\">\n                    <span class=\"w-100 d-lg-none d-block\"><!-- hidden spacer to center brand on mobile --></span>\n                    <a class=\"navbar-brand d-none d-lg-inline-block text-white\" href=\"#\">\n                        Logo  <!-- Logo title goes here -->\n                    </a>\n                    <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n                        <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n                    </a>\n                    <div class=\"w-100 text-right\">\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                            <span class=\"navbar-toggler-icon\"></span>  <!-- Mobile dynamic button -->\n                        </button>\n                    </div>\n                </div>\n                <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n                    <ul class=\"navbar-nav ml-auto flex-nowrap\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link m-2 menu-item nav-active text-white\">How it works</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link m-2 menu-item text-white\">FAQs</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link m-2 menu-item text-white\">Get Cash Now</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button class=\"btn btn-light\">Sign Up</button>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button class=\"btn btn-primary\">Login</button>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-add works!\n</p>\n<div class=\"container-fluid\">\n  <p>\n    <a [routerLink]=\"['/products']\">\n      <Products</a> </p> <h2>Add Product</h2>\n        <form>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"row\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Title\">\n                <select class=\"form-control\">\n                  <option value=\"\" disabled selected>\n                    <p class=\"disabled-select\">Manufacturer</p>\n                  </option>\n                </select>\n                <select class=\"form-control\">\n                  <option value=\"\" disabled selected>\n                    <p class=\"disabled-select\">Device Type</p>\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col\">\n              <input type=\"file\" class=\"form-control-file\" />\n            </div>\n          </div>\n          <h2>Pricing</h2>\n          <div class=\"card text-center\">\n            <div class=\"card-header\">\n              <ul class=\"nav nav-tabs card-header-tabs\">\n                <li class=\"nav-item\">\n                  <label><input type=\"radio\" value=\"64\" id=\"six-four\" name=\"size_choice\" />64BG</label>\n\n                </li>\n                <li class=\"nav-item\">\n                  <label><input type=\"radio\" value=\"240\" id=\"two-four\" name=\"size_choice\" />240GB</label>\n                </li>\n              </ul>\n            </div>\n            <div class=\"card-body\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Carrier</th>\n                    <th>Handset Only</th>\n                    <th>Sealed</th>\n                    <th>Open-Sealed</th>\n                    <th>Good LCD</th>\n                    <th>Cracked Front</th>\n                    <th>Bad LCD/Copy</th>\n                    <th>Dead</th>\n                    <th>Cracked Back (Minus)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <select class=\"form-control\">\n                        <option value=\"AT&T\">AT&T</option>\n                        <option value=\"T-mobile\">T-mobile</option>\n                        <option value=\"Verizon\">Verizon</option>\n                        <option value=\"Sprint\">Sprint</option>\n                        <option value=\"Unlocked\">Unlocked</option>\n                      </select>\n                    </td>\n                    <td><input type=\"radio\" value=\"Handset Only\" name=\"condition\"></td>\n                    <td><input type=\"radio\" value=\"Sealed\" name=\"condition\"></td>\n                    <td><input type=\"radio\" value=\"Open-Sealed\" name=\"condition\"></td>\n                    <td><input type=\"radio\" value=\"Good LCD\" name=\"condition\"></td>\n                    <td><input type=\"radio\" value=\"Cracked Front\" name=\"condition\"></td>\n                    <td><input type=\"radio\" value=\"Bad LCD/Copy\" name=\"condition\"> </td>\n                    <td><input type=\"radio\" value=\"Dead\" name=\"condition\"></td>\n                    <td><input type=\"radio\" value=\"Cracked Back\" name=\"minus\"></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" value=\"submit\">Save</button>\n        </form>\n</div>"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.newProduct = { title: "", condition: "", manufacturer: "", size: "" };
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disabled-select{\n    color: #6C757D\n}\nlabel {\n border:1px solid #ccc;\n padding:10px;\n margin:0 0 10px;\n display:block; \n}\nlabel:active{\n    background:white;\n    cursor:pointer;\n\n}\nlabel:hover {\n background:#eee;\n cursor:pointer;\n}\n.edit-top-box{\n    background-color:white;\n    height: 15rem;\n    padding-top:2.5rem;\n}\n.input-top{\n    margin-bottom:1rem;\n}"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <p>\n    <a (click)=\"goBackToProducts()\">Products</a>\n  </p>\n  <h4>Edit Product</h4>\n  <form>\n    <div class=\"row edit-top-box\">\n      \n        <div class=\"col-3 offset-md-1 h-30\">\n          <div class=\"row\">\n            <input type=\"text\" class=\"form-control input-top\" placeholder=\"Title\">\n            <select class=\"form-control input-top\">\n              <option value=\"\" disabled selected><p class=\"disabled-select\" >Manufacturer</p></option>\n            </select>\n            <select class=\"form-control input-top\">\n              <option value=\"\" disabled selected><p class=\"disabled-select\">Device Type</p></option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-6 offset-md-1\">\n          <input type=\"file\" class=\"form-control-file\"/>\n        </div>\n      </div>\n    <h4>Pricing</h4>\n    <div class=\"row card text-center\">\n      <div class=\"card-header\">\n        <ul class=\"nav nav-tabs card-header-tabs\">\n          <li class=\"nav-item\">\n            <label><input type=\"radio\" value=\"64\" id=\"six-four\" name=\"size_choice\"/>64BG</label>\n              \n          </li>\n          <li class=\"nav-item\">\n            <label><input type=\"radio\" value=\"240\" id=\"two-four\" name=\"size_choice\"/>240GB</label>\n          </li>\n        </ul>\n      </div>\n      <div class=\"card-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Carrier</th>\n              <th>Handset Only</th>\n              <th>Sealed</th>\n              <th>Open-Sealed</th>\n              <th>Good LCD</th>\n              <th>Cracked Front</th>\n              <th>Bad LCD/Copy</th>\n              <th>Dead</th>\n              <th>Cracked Back (Minus)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>\n                <select class=\"form-control\">\n                  <option value=\"AT&T\">AT&T</option>\n                  <option value=\"T-mobile\">T-mobile</option>\n                  <option value=\"Verizon\">Verizon</option>\n                  <option value=\"Sprint\">Sprint</option>\n                  <option value=\"Unlocked\">Unlocked</option>\n                </select>\n              </td>\n              <td><input type=\"radio\" value=\"Handset Only\" name=\"condition\"></td>\n              <td><input type=\"radio\" value=\"Sealed\" name=\"condition\"></td>\n              <td><input type=\"radio\" value=\"Open-Sealed\" name=\"condition\"></td>\n              <td><input type=\"radio\" value=\"Good LCD\" name=\"condition\"></td>\n              <td><input type=\"radio\" value=\"Cracked Front\" name=\"condition\"></td>\n              <td><input type=\"radio\" value=\"Bad LCD/Copy\" name=\"condition\"> </td>\n              <td><input type=\"radio\" value=\"Dead\" name=\"condition\"></td>\n              <td><input type=\"radio\" value=\"Cracked Back\" name=\"minus\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" value=\"submit\">Save</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.backToProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.editProduct = {};
    };
    ProductEditComponent.prototype.goBackToProducts = function () {
        this.backToProduct.emit("data");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "backToProduct", void 0);
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/new/product']\">New Product</button>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Manufacturer</th>\n        <th>Condition</th>\n        <th>Size</th>\n        <th>Price</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let p of products\">\n          <td>{{p.title}}</td>\n          <td>{{p.manufacturer}}</td>\n          <td>{{p.condition}}</td>\n          <td>{{p.size}}</td>\n          <td>{{p.price}}</td>\n          <td>\n            <button (click)=\"showEdit(p.id)\">Edit</button>\n            <!-- <button [routerLink]=\"['/edit/'+p.id+'']\">Edit</button> -->\n          </td>\n        </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.sendProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.allProducts();
    };
    ProductsComponent.prototype.allProducts = function () {
        var _this = this;
        this._httpService.getAllProducts().subscribe(function (data) {
            _this.products = data;
            console.log(data);
        });
    };
    ProductsComponent.prototype.showEdit = function (product_id) {
        var _this = this;
        this._httpService.getOneProduct(product_id).subscribe(function (data) {
            _this.sendProduct.emit(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sendProduct", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jon/Desktop/gadget_bank/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map