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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/landing' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
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
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
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
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_20__["ScrollToModule"].forRoot()
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

module.exports = ".row{\n    margin-left:0 !important;\n}\n.icon{\n    width:1.25rem;\n}\n.icon{\n    font-size:1rem;\n}\n.side-text{\n    font-size: 1rem;\n}\n.nav-item{\n    padding:1.25rem;\n    display:block;\n}\n#search-container{\n    height: 4rem;\n}\n#searchbar{\n    border-radius:0;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABSUlEQVR4AezTM3hYURjG8X9t27btdspW27a2ut1r21iqYImtKVOMJbZtfs+Jc5+LOb+z3e897zWWdeqPDee4zj4WYNlC3Kiitmmlc4+emNSTx1RT225FsQITehGkNlYRwi8e40F205G9GPZTbfJhPChdOE+RHC1hPoYsVzWP6EJrM0iUiSuGOEnYgY4sVY9/ObqGSLSSMXTstRQ9R9dOCQaixUbmoei6IsG3aBkp82x03ZTgQ7T0kXkFuk5K8A9aZss8EV2r1O+g5bzM7dFHikT305FuhMr0CPq4LdEcptDeC/Woe6GP/qRJPI1NbR7zW/XNX8GgjerPr+ETO5lGf9ZzlThVE4MJO8mntqOlrtaFnhg0Dtt2JUU8oTu1ZqtgHQ8IJJViQvnKFvWIXdpUWdYLb9NVnVV1qwXyKDUK5iLKjWqBGkN/MAoAi3W/YOTXNloAAAAASUVORK5CYII=);\n    background-repeat:no-repeat;\n    background-size: 1.25rem;\n    background-position-y:center;\n    background-position-x:.5rem;\n    padding-left:2rem;\n\n\n}\n#dashboard-container{\n    padding-left:0 !important;\n    background-color:#F8F9FA;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"dashboard-container\">\n\n  <div class=\"row\" id=\"search-container\">\n      <nav class=\"navbar navbar-light  bg-light flex-md-nowrap col\" style=\" padding:0 !important\">\n        <div class=\"col-2 h-100\" style=\"background-color: #3A8CEB\">\n          <a href=\"#\">Logo</a>\n        </div>\n        \n        <input class=\"form-control form-control-light w-100 h-100 shadow-sm \" type=\"text\" placeholder=\"Search\" id=\"searchbar\" style=\"border-radius:0;\"/>\n        <ul class=\"navbar-nav px-3\">\n          <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"#\">Sign Out</a>\n          </li>\n        </ul>\n      </nav>\n  </div>\n\n  <div class=\"row\" style=\"padding-top:0; height:100vh;\">\n    <nav class=\"col-md-2 d-none d-md-block bg-white sidebar\" style=\"margin-right:1rem; padding-right: 0; padding-left:0; padding-top:0; background-color:white;\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\" style=\"background-color:white;\">\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/home-4x copy.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goHome()\" class=\"side-text\"> Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/bar-chart-4x.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goOrders()\" class=\"side-text\"> Orders</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/product-2x.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goProduct()\" class=\"side-text\"> Products</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/person-4x.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goCustomers()\" class=\"side-text\"> Customers</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/baseline_settings_black_18dp.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goSetting()\" class=\"side-text\"> Settings</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <main role=\"main\" class=\" col-9\" style=\" background-color: #F8F9FA; margin-left:.41rem; \">\n      <app-home *ngIf=\"home\"></app-home>\n      <app-products *ngIf=\"product\" (sendProduct)=\"getProduct($event)\" (sendAddProduct)=\"goAddProduct($event)\"></app-products>\n      <app-orders *ngIf=\"order\"></app-orders>\n      <app-customers *ngIf=\"customer\"></app-customers>\n      <app-settings *ngIf=\"setting\"></app-settings>\n      <app-product-edit *ngIf=\"showEditProduct\" (backToProduct)=\"goBack($event)\" [getProduct]=\"sendProductId\"></app-product-edit>\n      <app-product-add *ngIf=\"showAddProduct\" (backToProduct)=\"goBack($event)\" ></app-product-add>\n    </main>\n  </div>\n</div>\n"

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
        this.showAddProduct = null;
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
        this.showEditProduct = null;
        this.showAddProduct = null;
    }; //when called, create a value for variable home and set rest to null
    DashboardComponent.prototype.goOrders = function () {
        this.order = "order";
        this.home = null;
        this.product = null;
        this.customer = null;
        this.setting = null;
        this.showEditProduct = null;
        this.showAddProduct = null;
    }; //when called, create value for variable order and set rest to null
    DashboardComponent.prototype.goProduct = function () {
        this.product = "product";
        this.home = null;
        this.order = null;
        this.customer = null;
        this.setting = null;
        this.showEditProduct = null;
        this.showAddProduct = null;
    }; // when called, create value for variable product and set rest to null
    DashboardComponent.prototype.goCustomers = function () {
        this.customer = "customer";
        this.home = null;
        this.order = null;
        this.setting = null;
        this.product = null;
        this.showEditProduct = null;
        this.showAddProduct = null;
    }; //wen called, create value for variable customer and set rest to null
    DashboardComponent.prototype.goSetting = function () {
        this.setting = "setting";
        this.home = null;
        this.order = null;
        this.product = null;
        this.customer = null;
        this.showEditProduct = null;
        this.showAddProduct = null;
    }; //when called, create value for setting and set rest to null
    DashboardComponent.prototype.getProduct = function (data) {
        console.log("product here" + data);
        this.showEditProduct = data;
        this.home = null;
        this.order = null;
        this.product = null;
        this.customer = null;
        this.setting = null;
        this.showAddProduct = null;
        this.sendProductId = data[0];
    };
    DashboardComponent.prototype.goBack = function () {
        this.product = "product";
        this.home = null;
        this.showEditProduct = null;
        this.order = null;
        this.customer = null;
        this.setting = null;
        this.showAddProduct = null;
    };
    DashboardComponent.prototype.goAddProduct = function () {
        this.showAddProduct = "show add";
        this.home = null;
        this.showEditProduct = null;
        this.product = null;
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

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
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

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
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
    HttpService.prototype.postNewProduct = function (newProduct) {
        return this._http.post('/new', newProduct);
    };
    HttpService.prototype.postNewProductToOrder = function (order_id, newproduct) {
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
    HttpService.prototype.getOneCategory = function (category_id) {
        return this._http.get('/category/' + category_id);
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

module.exports = "ul > li{\n    margin: 10px;\n}\n#main-info-l{\n    padding-top:7rem;\n    padding-bottom:7rem;\n    text-align:center;\n}\n#main-info-r{\n    vertical-align:center;\n    padding-top:7rem;\n\n}\n#description{\n    text-align:center;\n    padding-top:5rem;\n    padding-bottom:5rem;\n}\n.col-top{\n    text-align:center;\n    margin-right:2rem;\n    padding-top:1rem;\n    padding-bottom:1rem;\n}\n.col-top-last{\n    text-align:center;\n    padding-top:1rem;\n    padding-bottom:1rem;\n}\n.icon{\n    width:5rem;\n    padding:1rem;\n}\n#how-it-works{\n    background-color: #F8f9fd;\n    text-align:center;\n    vertical-align:middle;\n    \n}\n.process-list-item{\n    vertical-align:top;\n}\n.hold{\n    color:#F8f9fd;\n}\n#table{\n    text-align:center;\n    display:table;\n    width:100%;\n}\n.navbar-expand-lg{\n    justify-content:center !important;\n\n}\n.nav-item{\n    padding:1rem;\n    margin:0 !important;\n}\n#bottom{\n    background-color: #6cc1fd\n}\n#bot-options{\n    text-align:center;\n    padding:5rem;\n}\n#bot-options h4{\n    padding-bottom:1rem;\n    color:white;\n}\n#bot-options p{\n    padding-bottom:1rem;\n    color: white;\n}\n#start-button{\n    background-color:white;\n    color:#157ffb;\n    margin-right:1rem;\n    border:white;\n}\n#footer{\n    text-align:center;\n    justify-content: center;\n    padding:5rem;\n}\n#map-col-1{\n    text-align:right;\n}\n#map-col-2{\n    text-align:left;\n}\n.col-3 input{\n    font-size:.75rem;\n    margin-right:.5rem;\n    \n}\n.col-3 button{\n    font-size:.75rem;\n    padding: .55rem .75rem;\n}\n#faq{\n    padding: .35rem 2.3rem;\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Landing</title>\n\n</head>\n<body>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <nav class=\"navbar navbar-expand-lg navbar-light w-100\"  style=\"background-color: #3D99E6;\">\n                <div class=\"d-flex flex-grow-1\">\n                    <span class=\"w-100 d-lg-none d-block\"><!-- hidden spacer to center brand on mobile --></span>\n                    <a class=\"navbar-brand d-none d-lg-inline-block text-white\" href=\"#\">\n                        Logo  <!-- Logo title goes here -->\n                    </a>\n                    <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n                        <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n                    </a>\n                    <div class=\"w-100 text-right\">\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                            <span class=\"navbar-toggler-icon\"></span>  <!-- Mobile dynamic button -->\n                        </button>\n                    </div>\n                </div>\n                <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n                    <ul class=\"navbar-nav ml-auto flex-nowrap\">\n                        <li class=\"nav-item\">\n                            <a role=\"button\" class=\"nav-link m-2 menu-item nav-active text-white\" [ngx-scroll-to]=\"'#how-it-works'\">How it works</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" >FAQs</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" [ngx-scroll-to]=\"'#bottom'\">Get Cash Now</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button class=\"btn btn-light\">Sign Up</button>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button class=\"btn btn-primary\">Login</button>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4 offset-md-2\" id=\"main-info-l\">\n                <h2>Sell your gadgets for cash!</h2>\n                <p>GadgetBank is the easiest and most trusted place <br> to sell your old phones, tablets, and smart devices <br> for cash</p>\n            </div>\n            <div class=\"col-6\" id=\"main-info-r\">\n                <p>Image goes here</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\" id=\"description\">\n                <h3>Why GadgetBank?</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas ipsum urna. Maecenas nec suscipit urna.\n                    Mauris\n                    nec neque id ligula auctor consequat. Suspendisse vehicula nulla ut massa placerat iaculis. Nullam dignissim, quam\n                    at\n                    porttitor placerat, lorem ex dictum turpis, non eleifend orci nisl at magna. Duis eget sem ornare\n                </p>\n            </div>\n            <div class=\"col-2\"></div>\n            \n        </div>\n        <div class=\"row\" style=\"padding-right:2rem;padding-bottom:5rem;\">\n            <div class=\"col-2 offset-md-3 col-top shadow\">\n                <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\" class=\"icon\">\n                <h4>Clarity</h4>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n            </div>\n            <div class=\"col-2 col-top shadow\">\n                <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\" class=\"icon\">\n                <h4>Trust</h4>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n            </div>\n            <div class=\"col-2 col-top-last shadow\">\n                <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\" class=\"icon\">\n                <h4>Ease</h4>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n            </div>\n        </div>\n        <div class=\"row\" id=\"how-it-works\">\n            <div class=\"col\" style=\"padding:5rem;\">\n                <h5>How GadgetBank Works</h5>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n                <div id=\"table\">\n                    <ul class=\"navbar navbar-expand-lg w-60\">\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Select <br>your device</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Receive <br>Instant Offer</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Free <br>Shipping Label</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Send <br>in Device</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Processing<br><p class=\"hold\">placeholder</p></p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Send Money<br><p class=\"hold\">placeholder</p></p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" id=\"bottom\">\n            <div class=\"col\">\n                <div class=\"row\">\n                    <div class=\"col\" id=\"bot-options\">\n                        <h4>SELL YOUR DEVICE NOW</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ullamcorper massa, <br>nec hendrerit dui pretium\n                            quis. Pellentesque scelerisque orci.</p>\n                        <a class=\"btn btn-primary\" role=\"button\" href=\"#\" id=\"start-button\">Get Started</a>\n                        <a class=\"btn btn-primary\" role=\"button\" href=\"#\" id=\"faq\">FAQ</a>\n                    </div>\n                    \n                </div>\n                <div class=\"row\" id=\"footer\">\n                    <div class=\"col-3\">\n                        <h6>About us</h6>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ullamcorper massa, nec hendrerit dui pretium\n                        quis. Pellentesque scelerisque orci.</p>\n                    </div>\n                    <div class=\"col-3\">\n                        <h6>Site Map</h6>\n                        <div class=\"row\">\n                            <div class=\"col-6\" id=\"map-col-1\">\n                                <a href=\"#\">Sign Up</a>\n                                <br>\n                                <a href=\"#\">Login</a>\n                            </div>\n                            <div class=\"col-6\" id=\"map-col-2\">\n                                <a href=\"#\">How it works</a>\n                                <br>\n                                <a href=\"#\">Get Cash Now</a>\n                                <br>\n                                <a href=\"#\">FAQs</a>\n                            </div>\n                        </div>   \n                    </div>\n                    <div class=\"col-3\">\n                        <h6>Newsletter</h6>\n                        <p>Subsribe to receive updates and access to exclusive deals, and more.</p>\n                        <input type=\"text\" class=\"form-control w-50 d-inline-block\" placeholder=\"Your email address\">\n                        <button type=\"submit\" value=\"submit\" class=\"btn btn-primary\">Subscribe</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> \n\n</body>\n</html>"

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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "<p>\n  orders works!\n</p>\n<div class=\"btn-group btn-group-toggle active\" data-toggle=\"buttons\">\n            \n            <label class=\"btn btn-primary\"  data-toggle=\"button\">\n              <input type=\"radio\" value=\"64\" id=\"product.size1\" [(ngModel)]=\"product.size\" name=\"product.size\" autocomplete=\"off\" checked/>64GB</label>\n            <label class=\"btn btn-primary\">\n              <input type=\"radio\" value=\"240\" [(ngModel)]=\"product.size\" name=\"product.size\"  autocomplete=\"off\"/>240GB\n            </label>\n          </div>\n<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n  <label class=\"btn btn-secondary active\">\n    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Active\n  </label>\n  <label class=\"btn btn-secondary\">\n    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Radio\n  </label>\n  <label class=\"btn btn-secondary\">\n    <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio\n  </label>\n</div>"

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

module.exports = "#form-container{\n    background-color:white;\n    padding:4rem;\n}\n.add-input{\n    margin-bottom:1rem;\n}\n#wrapper{\n    padding-top:1rem;\n}\n.disabled-select{\n    color:black;\n}\n#submit-contain\n{\n    padding-top:2rem;\n}\n"

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" id=\"wrapper\">\n  <p>\n    <button class=\"btn-sm btn-primary\" (click)=\"goBackToProducts()\">\n      Back To Products</button> \n      <h2>Add Product</h2>\n      <div class=\"container-fluid shadow-sm rounded\" id=\"form-container\">\n        \n        <form class=\"postForm\" (submit)=\"addProduct(newProduct)\">\n          <div class=\"row\">\n            <div class=\"col-3 offset-md-1\">\n              <div class=\"row\">\n                <input type=\"text\" class=\"form-control add-input\" placeholder=\"Title\" name=\"newProduct.title\" [(ngModel)]=\"newProduct.title\">\n                <select class=\"form-control add-input\" [(ngModel)]=\"newProduct.manufacturer\" name=\"newProduct.manufacturer\">\n                  <option value=\"\" disabled selected>\n                    <p class=\"disabled-select\">Manufacturer</p>\n                  </option>\n                  <option value=\"Apple\">Apple</option>\n                  <option value=\"SamSung\">SamSung</option>\n                </select>\n                <select class=\"form-control add-input\" [(ngModel)]=\"newProduct.category_id\" name=\"category_id\">\n                  <option value=\"Device Type\" disabled selected>\n                 Device Type\n                  </option>\n\n                  <option *ngFor=\"let c of allCategories\" value=\"{{c.id}}\">{{c.name}}</option>\n                </select>\n                \n              </div>\n            </div>\n            <div class=\"col-6 offset-md-1\">\n              <input type=\"file\" class=\"form-control-file\"/>\n            </div>\n          </div>\n          <div class=\"row\" id=\"submit-contain\">\n            <div class=\"col-10\"></div>\n            <div class=\"col-2\">\n              <button type=\"submit\" class=\"btn btn-primary\" value=\"submit\">Add Product</button>\n            </div>\n          </div>\n          \n          \n        </form>\n      </div>\n      \n</div>\n<script>\n  \n</script>"

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
        this.backToProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.newProduct = { title: "", condition: "", manufacturer: "", category_id: "Device Type" };
        this.getAllCategories();
        this.targetCategory = "";
    };
    ProductAddComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._httpService.getCategories().subscribe(function (data) {
            _this.allCategories = data;
        });
    };
    ProductAddComponent.prototype.goBackToProducts = function () {
        this.backToProduct.emit("data");
    };
    ProductAddComponent.prototype.addProduct = function (product) {
        var _this = this;
        console.log(product);
        this._httpService.postNewProduct(product).subscribe(function (data) {
            console.log(data);
            _this.goBackToProducts();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAddComponent.prototype, "backToProduct", void 0);
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

module.exports = ".container-fluid{\n    padding-top:1rem;\n}\n.btn-sm{\n    font-size:.65rem;\n}\n.disabled-select{\n    color: #6C757D\n}\n.edit-top-box{\n    margin-bottom:2rem;\n}\n.card-body{\n    padding:0 !important;\n}\nlabel {\n border:1px solid #ccc;\n padding:10px;\n margin:0 0 10px;\n display:block; \n}\nlabel:active{\n    background:white;\n    cursor:pointer;\n\n}\nlabel:hover {\n background:#eee;\n cursor:pointer;\n}\n.edit-top-box{\n    background-color:white;\n    height: 15rem;\n    padding-top:2.5rem;\n}\n.input-top{\n    margin-bottom:1rem;\n}\ninput[type=\"radio\"]:checked + label{\n    background-color:red !important;\n}\n#price_container{\n    padding-left: 0;\n    padding-top:1rem;\n    padding-bottom:1rem;\n}\n.col-3{\n    padding-left: 0;\n}\n#submit_button{\n    width:50%\n}\n#carrier-select{\n    \n    padding-right:0;\n}\n#price-header{\n    border:none !important;\n    background-color:white;\n}"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <p>\n    <button class=\"btn-sm btn-primary\"  (click)=\"goBackToProducts()\">Products</button>\n  </p>\n  <h4>Edit Product</h4>\n  <form class=\"postForm\" (submit)=\"editProduct(product)\">\n    <div class=\"row edit-top-box shadow-sm rounded\">\n      \n        <div class=\"col-3 offset-md-1 h-30\">\n          <div class=\"row\">\n            <input type=\"text\" class=\"form-control input-top\" placeholder=\"{{getProduct.title}}\" [(ngModel)]=\"product.title\" name=\"title\">\n            <select class=\"form-control input-top\" [(ngModel)]=\"product.manufacturer\" name=\"manufacturer\">\n              <option value=\"\" disabled selected><p class=\"disabled-select\" >{{getProduct.manufacturer}}</p></option>\n              <option value=\"Apple\">Apple</option>\n              <option value=\"SamSung\">SamSung</option>\n            </select>\n            <select class=\"form-control input-top\" [(ngModel)]=\"product.category_id\" name=\"category_id\">\n              <option value=\"\" disabled selected><p class=\"disabled-select\">{{currentCategory}}</p></option>\n              <option *ngFor=\"let c of allCategories\" value=\"{{c.id}}\">{{c.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-6 offset-md-1\">\n          <input type=\"file\" class=\"form-control-file\"/>\n        </div>\n      </div>\n    <h4>Pricing</h4>\n    <div class=\"row card text-center shadow-sm\">\n      <div class=\"card-header\" id=\"price-header\">\n        <ul class=\"nav nav-tabs card-header-tabs\">\n          <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"product.size\" [(ngModel)]=\"product.size\">\n            <label ngbButtonLabel class=\"btn-primary\">\n              <input ngbButton type=\"radio\" value=\"64\">64GB\n            </label>\n            <label ngbButtonLabel class=\"btn-primary\">\n              <input ngbButton type=\"radio\" value=\"240\">240GB\n            </label>\n          </div>\n        </ul>\n      </div>\n      <div class=\"card-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Carrier</th>\n              <th>Handset Only</th>\n              <th>Sealed</th>\n              <th>Open-Sealed</th>\n              <th>Good LCD</th>\n              <th>Cracked Front</th>\n              <th>Bad LCD/Copy</th>\n              <th>Dead</th>\n              <th>Cracked Back (Minus)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td id=\"carrier-select\">\n                <select class=\"form-control\" [(ngModel)]=\"product.carrier\" name=\"product.carrier\">\n                  <option value=\"\" disabled selected>\n                    <p class=\"disabled-select\">{{getProduct.carrier}}</p>\n                  </option>\n                  <option value=\"AT&T\">AT&T</option>\n                  <option value=\"T-mobile\">T-mobile</option>\n                  <option value=\"Verizon\">Verizon</option>\n                  <option value=\"Sprint\">Sprint</option>\n                  <option value=\"Unlocked\">Unlocked</option>\n                </select>\n              </td>\n              <td><input type=\"radio\" value=\"Handset Only\" name=\"product.condition\" [(ngModel)]=\"product.condition\"></td>\n              <td><input type=\"radio\" value=\"Sealed\" name=\"product.condition\" [(ngModel)]=\"product.condition\"></td>\n              <td><input type=\"radio\" value=\"Open-Sealed\" name=\"product.condition\" [(ngModel)]=\"product.condition\"></td>\n              <td><input type=\"radio\" value=\"Good LCD\" name=\"product.condition\" [(ngModel)]=\"product.condition\"></td>\n              <td><input type=\"radio\" value=\"Cracked Front\" name=\"product.condition\" [(ngModel)]=\"product.condition\"></td>\n              <td><input type=\"radio\" value=\"Bad LCD/Copy\" name=\"product.condition\" [(ngModel)]=\"product.condition\"> </td>\n              <td><input type=\"radio\" value=\"Dead\" name=\"product.condition\" [(ngModel)]=\"product.condition\"></td>\n              <td><input type=\"radio\" value=\"Cracked Back\" name=\"product.has_cracked_back\" [(ngModel)]=\"product.has_cracked_back\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    \n    <div class=\"row\" id=\"price_container\">\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Price\" [(ngModel)]=\"product.price\" name=\"product.price\">\n      </div>\n      <div class=\"col-6\"></div>\n      <div class=\"col-3\" style=\"text-align:right\">\n        <button id=\"submit_button\" type=\"submit\" class=\"btn btn-primary\" value=\"submit\">Save</button>\n      </div>\n    </div> \n  </form>\n</div>\n"

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
        this.product = { title: "", manufacturer: "", category_id: "", size: "", carrier: "", condition: "", has_cracked_back: "", price: "" };
        //initialize model to be used on template to submit form
        this.getAllCategories();
        //on load call function to grab all current categories
        this.getCategoryName();
    };
    ProductEditComponent.prototype.goBackToProducts = function () {
        this.backToProduct.emit("data");
    };
    //function called ot send output event to signal dashboard component to go to the products component
    ProductEditComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._httpService.getCategories().subscribe(function (data) {
            _this.allCategories = data;
        });
    };
    //function that calls service to communicated with backend to grab all categories
    ProductEditComponent.prototype.editProduct = function (product_id, targetProduct) {
        var _this = this;
        console.log(this.product.has_cracked_back);
        if (this.product.has_cracked_back == "Cracked Back") {
            this.product.has_cracked_back = true;
            this.product.condition += "/Cracked Back";
        }
        if (this.product.title == "") {
            this.product.title = this.getProduct.title;
        }
        if (this.product.carrier == "") {
            this.product.carrier = this.getProduct.carrier;
        }
        if (this.product.category_id == "") {
            this.product.category_id = this.getProduct.category_id;
        }
        if (this.product.size == "") {
            this.product.size = this.getProduct.size;
        }
        if (this.product.manufacturer == "") {
            this.product.manufacturer = this.getProduct.manufacturer;
        }
        if (this.product.condition == "") {
            this.product.condition = this.getProduct.condition;
        }
        targetProduct = this.product;
        product_id = this.getProduct.id;
        this._httpService.postEditProduct(product_id, targetProduct).subscribe(function (data) {
            console.log(data);
            _this.goBackToProducts();
        });
    };
    // this function calls service to the update product back end route
    ProductEditComponent.prototype.getCategoryName = function () {
        var _this = this;
        this._httpService.getOneCategory(this.getProduct.category_id).subscribe(function (data) {
            _this.currentCategory = data[0]['name'];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "backToProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "getProduct", void 0);
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

module.exports = "<div class=\"container\">\n  <button class=\"btn btn-primary\" (click)=\"showAdd()\">New Product</button>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Manufacturer</th>\n        <th>Condition</th>\n        <th>Size</th>\n        <th>Price</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let p of products\">\n          <td>{{p.title}}</td>\n          <td>{{p.manufacturer}}</td>\n          <td>{{p.condition}}</td>\n          <td>{{p.size}}</td>\n          <td>{{p.price}}</td>\n          <td>\n            <button (click)=\"showEdit(p.id)\">Edit</button>\n            <!-- <button [routerLink]=\"['/edit/'+p.id+'']\">Edit</button> -->\n          </td>\n        </tr>\n    </tbody>\n  </table>\n</div>\n"

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
        this.sendAddProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
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
    ProductsComponent.prototype.showAdd = function () {
        this.sendAddProduct.emit("show");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sendProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sendAddProduct", void 0);
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

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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