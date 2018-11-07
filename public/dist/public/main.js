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

/***/ "./src/app/address/address.component.css":
/*!***********************************************!*\
  !*** ./src/app/address/address.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/address/address.component.html":
/*!************************************************!*\
  !*** ./src/app/address/address.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add an Address</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\"> -->\n    <!-- <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    <form (submit)=\"submitNewAddress(address)\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Your name or company\" [(ngModel)]=\"address.name\" name=\"address.name\"\n        required>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Street 1\" [(ngModel)]=\"address.street1\" name=\"address.street1\"\n        required>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Street 2\" [(ngModel)]=\"address.street2\" name=\"address.street2\"\n        required>\n      <input type=\"text\" class=\"form-control\" placeholder=\"City\" [(ngModel)]=\"address.city\" name=\"address.city\" required>\n      <select class=\"form-control\" [(ngModel)]=\"address.state\" name=\"address.state\" required>\n        <option value=\"\" disabled selected>\n          <p class=\"disabled-select\">State</p>\n        </option>\n        <option *ngFor=\"let s of states\" value={{s}}>{{s}}</option>\n      </select>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Zip Code\" [(ngModel)]=\"address.zip\" name=\"address.zip\"\n        minlength=\"5\" maxlength=\"5\" required>\n      <button type=\"submit\" class=\"btn btn-primary btn-block \" value=\"submit\">Add</button>\n    </form>\n    <div *ngIf=\"address_error\">\n      <p>Address already exists, please enter a new address or select an exisiting one</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressComponent = /** @class */ (function () {
    function AddressComponent(_httpService, _router, _route, modalService) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.modalService = modalService;
        this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
        this.sendAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.address = { name: "", street1: "", street2: "", city: "", state: "", zip: "", country: "USA" };
        console.log(this.getUser);
    };
    AddressComponent.prototype.submitNewAddress = function (address) {
        var _this = this;
        console.log("in address", address);
        address['user_id'] = this.getUser[0].id;
        this._httpService.postNewAddressToUser(address, this.getUser[0].id).subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.address_error = "error";
            }
            _this.sendAddress.emit(data);
            _this.modalService.dismissAll();
        });
    };
    AddressComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = 'Closed with:${result}';
        }, function (reason) {
            _this.closeResult = 'Dismissed ${this.getDismissreason(reason)}';
        });
    };
    AddressComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return 'with: ${reason}';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressComponent.prototype, "getUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddressComponent.prototype, "sendAddress", void 0);
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], AddressComponent);
    return AddressComponent;
}());



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
/* harmony import */ var _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-select/product-select.component */ "./src/app/product-select/product-select.component.ts");
/* harmony import */ var _customer_portal_customer_portal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-portal/customer-portal.component */ "./src/app/customer-portal/customer-portal.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
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
    { path: 'create-account', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'trade-in', component: _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_6__["ProductSelectComponent"] },
    { path: 'portal/:username', component: _customer_portal_customer_portal_component__WEBPACK_IMPORTED_MODULE_7__["CustomerPortalComponent"] },
    { path: 'iphone', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_8__["SellComponent"] },
    { path: 'samsung', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_8__["SellComponent"] },
    { path: 'ipad', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_8__["SellComponent"] },
    { path: 'watch', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_8__["SellComponent"] },
    { path: ':model/:size/:carrier', component: _question_question_component__WEBPACK_IMPORTED_MODULE_9__["QuestionComponent"] },
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
/* harmony import */ var _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product-select/product-select.component */ "./src/app/product-select/product-select.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _customer_portal_customer_portal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customer-portal/customer-portal.component */ "./src/app/customer-portal/customer-portal.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
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
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"],
                _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_21__["ProductSelectComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileSelectDirective"],
                _customer_portal_customer_portal_component__WEBPACK_IMPORTED_MODULE_24__["CustomerPortalComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileSelectDirective"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_25__["SellComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_26__["QuestionComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_27__["AddressComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__["FileDropModule"],
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

/***/ "./src/app/customer-portal/customer-portal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customer-portal/customer-portal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-portal/customer-portal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/customer-portal/customer-portal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-expand-lg navbar-light w-100\" style=\"background-color: #3D99E6;\">\n      <div class=\"d-flex flex-grow-1\">\n        <span class=\"w-100 d-lg-none d-block\">\n          <!-- hidden spacer to center brand on mobile --></span>\n        <a class=\"navbar-brand d-none d-lg-inline-block text-white\" [routerLink]=\"['/landing']\">\n          Logo\n          <!-- Logo title goes here -->\n        </a>\n        <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n          <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n        </a>\n        <div class=\"w-100 text-right\">\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"navbar-toggler-icon\"></span> <!-- Mobile dynamic button -->\n          </button>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n        <ul class=\"navbar-nav ml-auto flex-nowrap\">\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item nav-active text-white\" [ngx-scroll-to]=\"'#how-it-works'\">How\n              it\n              works</a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\">FAQs</a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" [ngx-scroll-to]=\"'#bottom'\">Get Cash Now</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-light\" [routerLink]=\"['/create-account']\">Sign Up</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['/create-account']\">Login</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-2\"></div>\n      <div class=\"col-8\">\n        <ngb-tabset #t=\"ngbTabset\">\n          <ngb-tab title=\"Your Order\" id=\"tab-selectbyid1\">\n            <ng-template ngbTabContent>\n              <!-- <div *ngIf=\"activeProductList.length == 0\">\n                <p>Nothing here</p>\n                <a class=\"btn btn-priimary\" [routerLink]=\"['/trade-in']\">Click here to add a product</a>\n              </div> -->\n              <table class=\"table\">\n                <tr *ngFor=\"let o of allOrders\">\n                  <td>{{ o.id }}</td>\n                  <td>{{ o.total_payment }}</td>\n                  <td>\n                    <div ngbDropdown class=\"d-inline-block\">\n                      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>{{activeProductList.length}} items</button>\n                      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                          <tr class=\"dropdown-item\" *ngFor=\"let p of activeProductList; index as i\">\n                            <td><p class=\"cart-text\">{{p[0].title}}/{{p.size}}GB/{{p.carrier}}</p></td>\n                            <td>\n                              <button type=\"button\" class=\"btn btn-danger btn-sm\">\n                                <img src=\"../../assets/icons/baseline_clear_black_18dp.png\" style=\"width:1rem;\">\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a role=\"button\" class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/trade-in']\">Sell Another Item</a>\n                            </td>\n                          </tr>\n                      </div>\n                    </div>\n                  </td>\n                  <!-- {{activeProductList[2][0].title}} -->\n                </tr>\n               \n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n            \n              </table>\n              <!-- <span *ngFor=\"let p of activeProductList; index as i\">\n                {{p[0].title}}\n              </span> -->\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Shipping\" id=\"tab-selectbyid2\">\n            <ng-template ngbTabContent>\n                <table class=\"table\" >\n                  \n                  <tr *ngFor=\"let add of allAddresses\">\n                    <td>\n                      <p>{{add.street1}}</p>\n                      <p>{{add.street2}}</p>\n                      <p>{{add.city}}, {{add.state}}, {{add.zip}}</p>\n                    </td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectAddress(add)\" (click)=\"t.select('tab-selectbyid3')\">Use this Address</button>\n                    </td>\n                  </tr>    \n                </table>\n                <ng-template #content let-modal>\n                  <app-address (sendAddress)=\"getAddress($event)\" [getUser]=\"user\"></app-address>\n                </ng-template>\n                <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Add an Address</button>\n           \n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Final Details\" id=\"tab-selectbyid3\">\n            <ng-template ngbTabContent>\n              <h4>Order Details</h4>\n             \n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Products</th>\n                      <th>Total Payment</th>\n                      <th>Address</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                     \n                        <td>\n                          <tr *ngFor=\"let p of activeProductList\">\n                            <td>{{p[0].title}}/{{p.size}}/{{p.carrier}}</td>\n                          </tr>\n                        </td>\n                     \n                      <td>\n                        {{allOrders[0].total_payment}}\n                     \n                      </td>\n                      <td *ngIf=\"noAddress\">\n                        <p>Please select an address before continuing</p>\n                      </td>\n                      <td *ngIf=\"noAddress == false\">\n                        <p>{{user[0].first_name}} {{user[0].last_name}}</p>\n                        <p>{{activeAddress.street1}}</p>\n                        <p>{{activeAddress.street2}}</p>\n                        <p>{{activeAddress.city}}, {{activeAddress.state}}, {{activeAddress.zip}}</p>\n                      </td>\n                    </tr>\n                  </tbody> \n                </table>\n        \n              <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"noAddress\" (click)=\"submitOrder()\">Request Shipping Label</button>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n        \n      </div>\n      <div class=\"col-2\"></div>\n  </div>    \n</div>"

/***/ }),

/***/ "./src/app/customer-portal/customer-portal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-portal/customer-portal.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerPortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPortalComponent", function() { return CustomerPortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerPortalComponent = /** @class */ (function () {
    function CustomerPortalComponent(_httpService, _router, _route, modalService) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.modalService = modalService;
        this.activeProductList = [];
        this.noAddress = true;
        this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    }
    CustomerPortalComponent.prototype.ngOnInit = function () {
        this.checkforSession();
    };
    CustomerPortalComponent.prototype.checkforSession = function () {
        var _this = this;
        this._httpService.getSession().subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this._router.navigate(['/landing']);
            }
            else {
                _this.getAllUserOrders(data['user']);
            }
        });
    };
    CustomerPortalComponent.prototype.getAllUserOrders = function (user) {
        var _this = this;
        //get user
        this._httpService.getThisCustomer(user).subscribe(function (data) {
            _this.user = data;
            _this._httpService.getAllAddressesByUserId(data[0]['id']).subscribe(function (add) {
                _this.allAddresses = add;
            });
            //get all orders
            _this._httpService.getOrderByUserId(data[0]['id']).subscribe(function (order) {
                _this.allOrders = order;
                for (var i in order) {
                    if (order[i]['active'] == true) {
                        _this._httpService.getAllProductsByOrderId(order[i]['id']).subscribe(function (products) {
                            _this.activeProducts = products;
                            console.log("active products", products);
                            for (var j in products) {
                                _this._httpService.getOneProduct(products[j]['product_id']).subscribe(function (product) {
                                    // this._httpService.g(product[0][])
                                    _this._httpService.getOnePriceById(products[j]['price_id']).subscribe(function (price) {
                                        console.log(price);
                                        _this._httpService.getOneSize(price[0]['size_id']).subscribe(function (size) {
                                            product['size'] = size[0]['value'];
                                        });
                                        _this._httpService.getOneCarrier(price[0]['carrier_id']).subscribe(function (carrier) {
                                            product['carrier'] = carrier[0]['carrier_name'];
                                        });
                                    });
                                    _this.activeProductList.push(product);
                                });
                            }
                        });
                    }
                    console.log(_this.activeProductList);
                }
            });
        });
    };
    CustomerPortalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = 'Closed with:${result}';
        }, function (reason) {
            _this.closeResult = 'Dismissed ${this.getDismissreason(reason)}';
        });
    };
    CustomerPortalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return 'with: ${reason}';
        }
    };
    CustomerPortalComponent.prototype.goShipping = function () {
        this.shipping = "shipping";
    };
    CustomerPortalComponent.prototype.getAddress = function (e) {
        var _this = this;
        console.log(e);
        this._httpService.getAllAddressesByUserId(this.user[0]['id']).subscribe(function (data) {
            _this.allAddresses = data;
        });
    };
    CustomerPortalComponent.prototype.selectAddress = function (address) {
        this.activeAddress = address;
        this.noAddress = false;
    };
    CustomerPortalComponent.prototype.submitOrder = function () {
        this._httpService.postFromAddressAndCreateLabel(this.activeAddress, this.user[0].id).subscribe(function (data) {
            console.log(data);
        });
    };
    CustomerPortalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-portal',
            template: __webpack_require__(/*! ./customer-portal.component.html */ "./src/app/customer-portal/customer-portal.component.html"),
            styles: [__webpack_require__(/*! ./customer-portal.component.css */ "./src/app/customer-portal/customer-portal.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], CustomerPortalComponent);
    return CustomerPortalComponent;
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

module.exports = "<div class=\"container-fluid\" id=\"dashboard-container\">\n\n  <div class=\"row\" id=\"search-container\">\n      <nav class=\"navbar navbar-light  bg-light flex-md-nowrap col\" style=\" padding:0 !important\">\n        <div class=\"col-2 h-100\" style=\"background-color: #3A8CEB\">\n          <a href=\"#\">Logo</a>\n        </div>\n        \n        <input class=\"form-control form-control-light w-100 h-100 shadow-sm \" type=\"text\" placeholder=\"Search\" id=\"searchbar\" style=\"border-radius:0;\"/>\n        <ul class=\"navbar-nav px-3\" style=\"padding:0 !important\">\n          <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"#\">Sign Out</a>\n          </li>\n        </ul>\n      </nav>\n  </div>\n\n  <div class=\"row\" style=\"padding-top:0; height:100vh;\">\n    <nav class=\"col-md-2 d-none d-md-block bg-white sidebar\" style=\"margin-right:1rem; padding-right: 0; padding-left:0; padding-top:0; background-color:white;\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\" style=\"background-color:white;\">\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/home-4x copy.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goHome()\" class=\"side-text\"> Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/bar-chart-4x.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goOrders()\" class=\"side-text\"> Orders</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/product-2x.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goProduct()\" class=\"side-text\"> Products</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/person-4x.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goCustomers()\" class=\"side-text\"> Customers</a>\n          </li>\n          <li class=\"nav-item\">\n            <img src=\"../../assets/icons/baseline_settings_black_18dp.png\" class=\"icon\">\n            <a class=\"sidebar-link\" (click)=\"goSetting()\" class=\"side-text\"> Settings</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <main role=\"main\" class=\" col-9\" style=\" background-color: rgb(248, 249, 250); overflow:scroll\">\n      <app-home *ngIf=\"home\"></app-home>\n      <app-products *ngIf=\"product\" (sendProduct)=\"getProduct($event)\" (sendAddProduct)=\"goAddProduct($event)\" (sendDeleteProduct)=\"goProduct($event)\"></app-products>\n      <app-orders *ngIf=\"order\"></app-orders>\n      <app-customers *ngIf=\"customer\"></app-customers>\n      <app-settings *ngIf=\"setting\"></app-settings>\n      <app-product-edit *ngIf=\"showEditProduct\" (backToProduct)=\"goBack($event)\" [getProduct]=\"sendProductId\"></app-product-edit>\n      <app-product-add *ngIf=\"showAddProduct\" (backToProduct)=\"goBack($event)\" ></app-product-add>\n    </main>\n  </div>\n</div>\n"

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
    DashboardComponent.prototype.refreshProduct = function () {
        this.product = "product";
        this.home = null;
        this.showEditProduct = null;
        this.order = null;
        this.customer = null;
        this.setting = null;
        this.showAddProduct = null;
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
    HttpService.prototype.postLoginCustomer = function (user) {
        return this._http.post('/login', user);
    }; //this route logs in the user through loginUser
    HttpService.prototype.getSession = function () {
        return this._http.get('/session');
    };
    HttpService.prototype.getOrders = function (id) {
        return this._http.get('/orders');
    }; //this route will return all of the orders from a specific customer
    HttpService.prototype.getThisOrder = function (order_id) {
        return this._http.get('/order/' + order_id);
    }; //this route will return oneOrder. Specific order is queried here
    HttpService.prototype.getOrderByUserId = function (user_id) {
        return this._http.get('/orders/' + user_id);
    };
    HttpService.prototype.getActiveOrderByUserId = function (user_id) {
        return this._http.get('/order-active/' + user_id);
    }; //return the active order
    HttpService.prototype.postNewProductToActiveOrderByUserId = function (user_id, product_id) {
        return this._http.post('/order/active/new/' + user_id, product_id);
    };
    HttpService.prototype.postNewOrder = function (username, newOrder) {
        return this._http.post('/customer/' + username + '/order/new', newOrder);
    }; //this route will post a new order through newOrder
    HttpService.prototype.getDeleteOrder = function (order_id) {
        return this._http.get('/order/' + order_id + '/delete');
    }; //this route will delete the order through deleteOrder
    HttpService.prototype.getAllProducts = function () {
        return this._http.get('/allProducts');
    };
    HttpService.prototype.getAllProductsLikeTitle = function (title) {
        return this._http.get('/products-contain/' + title);
    };
    HttpService.prototype.getAllProductsByTitle = function (title) {
        return this._http.get('/allProducts/' + title);
    };
    HttpService.prototype.getOneProduct = function (product_id) {
        return this._http.get('/product/' + product_id);
    };
    HttpService.prototype.postNewProduct = function (newProduct) {
        return this._http.post('/new', newProduct);
    };
    HttpService.prototype.postNewProductToNewOrder = function (order_id, product) {
        return this._http.post('/order/' + order_id + '/product/new', product);
    }; //this route will add a new product base on the order id through newProduct
    HttpService.prototype.postEditProduct = function (id, product) {
        return this._http.post('/product/edit/' + id + '/', product);
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
    HttpService.prototype.getAllConditions = function () {
        return this._http.get('/conditions');
    };
    HttpService.prototype.getOneCondition = function (condition_id) {
        return this._http.get('/condition/' + condition_id);
    };
    HttpService.prototype.getAllCarriers = function () {
        return this._http.get('/carriers');
    };
    HttpService.prototype.postNewCarrier = function (carrier) {
        return this._http.post('/new/carrier', carrier);
    };
    HttpService.prototype.getOneCarrier = function (carrier_id) {
        return this._http.get('/carrier/' + carrier_id);
    };
    HttpService.prototype.getOneCarrierByName = function (name) {
        return this._http.get('/carrier/name/' + name);
    };
    HttpService.prototype.getCarriersByCategory = function (category_id) {
        return this._http.get('/carriers/' + category_id);
    };
    HttpService.prototype.getAllSizes = function () {
        return this._http.get('/sizes');
    };
    HttpService.prototype.postNewSize = function (size) {
        return this._http.post('/size/new', size);
    };
    HttpService.prototype.getOneSize = function (size_id) {
        return this._http.get('/size/' + size_id);
    };
    HttpService.prototype.getOneSizeByValue = function (value) {
        return this._http.get('/size/value/' + value);
    };
    HttpService.prototype.getSizesByCategory = function (category_id) {
        return this._http.get('/sizes/' + category_id);
    };
    HttpService.prototype.getAllPrices = function () {
        return this._http.get('/prices');
    };
    HttpService.prototype.postNewPrice = function (price, product_id) {
        return this._http.post('/price/new/' + product_id, price);
    };
    HttpService.prototype.getPriceForProduct = function (product_id) {
        return this._http.get('/price/' + product_id);
    };
    HttpService.prototype.getPriceByProductAndSize = function (product_id, size_id) {
        return this._http.get('/price/' + product_id + '/' + size_id);
    };
    HttpService.prototype.getPriceBySizeAndCarrier = function (product_id, size_id) {
        return this._http.get('/prices/group/' + product_id + '/' + size_id);
    };
    HttpService.prototype.getPriceBySizeAndConditions = function (product_id, size_id) {
        return this._http.get('/prices/condition/' + product_id + '/' + size_id);
    };
    HttpService.prototype.getOnePriceById = function (price_id) {
        return this._http.get('/price/one/' + price_id);
    };
    HttpService.prototype.postEditPrice = function (id, body) {
        return this._http.post('/price/edit/' + id + '/', body);
    };
    HttpService.prototype.upload = function (uri, body) {
        return this._http.post('/' + uri, body);
    };
    HttpService.prototype.getDeleteOneProduct = function (product_id) {
        return this._http.get('/product/' + product_id + '/delete');
    };
    HttpService.prototype.getPriceByAllConditions = function (product_id, size_id, condition_id, carrier_id, category_id) {
        return this._http.get('/price/all-conditions/' + product_id + '/' + size_id + '/' + condition_id + '/' + carrier_id + '/' + category_id);
    };
    HttpService.prototype.getAllProductsByOrderId = function (order_id) {
        return this._http.get('/order/' + order_id + '/products');
    };
    HttpService.prototype.postProductToOrder = function (product, order_id) {
        return this._http.post('/order/' + order_id + '/product/new', product);
    };
    //address routes
    HttpService.prototype.getAllAddressesByUserId = function (user_id) {
        return this._http.get('/addresses/' + user_id);
    };
    HttpService.prototype.postNewAddressToUser = function (address, user_id) {
        return this._http.post('/address/' + user_id + '/new', address);
    };
    HttpService.prototype.postUpdateAddressToUser = function (user_id, address_id, address) {
        return this._http.post('/address/update/' + user_id + '/' + address_id, address);
    };
    HttpService.prototype.deleteAddress = function (address_id) {
        return this._http.get('/address/delete/' + address_id);
    };
    //shipping routes
    HttpService.prototype.postFromAddressAndCreateLabel = function (address, user_id) {
        return this._http.post('/create-shipping/' + user_id, address);
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

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Landing</title>\n\n</head>\n<body>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <nav class=\"navbar navbar-expand-lg navbar-light w-100\"  style=\"background-color: #3D99E6;\">\n                <div class=\"d-flex flex-grow-1\">\n                    <span class=\"w-100 d-lg-none d-block\"><!-- hidden spacer to center brand on mobile --></span>\n                    <a class=\"navbar-brand d-none d-lg-inline-block text-white\" href=\"#\">\n                        Logo  <!-- Logo title goes here -->\n                    </a>\n                    <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n                        <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n                    </a>\n                    <div class=\"w-100 text-right\">\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                            <span class=\"navbar-toggler-icon\"></span>  <!-- Mobile dynamic button -->\n                        </button>\n                    </div>\n                </div>\n                <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n                    <ul class=\"navbar-nav ml-auto flex-nowrap\">\n                        <li class=\"nav-item\">\n                            <a role=\"button\" class=\"nav-link m-2 menu-item nav-active text-white\" [ngx-scroll-to]=\"'#how-it-works'\">How it works</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" >FAQs</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" [ngx-scroll-to]=\"'#bottom'\">Get Cash Now</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"btn btn-light\" [routerLink]=\"['/create-account']\">Sign Up</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"btn btn-primary\" [routerLink]=\"['/create-account']\">Login</a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4 offset-md-2\" id=\"main-info-l\">\n                <h2>Sell your gadgets for cash!</h2>\n                <p>GadgetBank is the easiest and most trusted place <br> to sell your old phones, tablets, and smart devices <br> for cash</p>\n            </div>\n            <div class=\"col-6\" id=\"main-info-r\">\n                <p>Image goes here</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\" id=\"description\">\n                <h3>Why GadgetBank?</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas ipsum urna. Maecenas nec suscipit urna.\n                    Mauris\n                    nec neque id ligula auctor consequat. Suspendisse vehicula nulla ut massa placerat iaculis. Nullam dignissim, quam\n                    at\n                    porttitor placerat, lorem ex dictum turpis, non eleifend orci nisl at magna. Duis eget sem ornare\n                </p>\n            </div>\n            <div class=\"col-2\"></div>\n            \n        </div>\n        <div class=\"row\" style=\"padding-right:2rem;padding-bottom:5rem;\">\n            <div class=\"col-2 offset-md-3 col-top shadow\">\n                <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\" class=\"icon\">\n                <h4>Clarity</h4>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n            </div>\n            <div class=\"col-2 col-top shadow\">\n                <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\" class=\"icon\">\n                <h4>Trust</h4>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n            </div>\n            <div class=\"col-2 col-top-last shadow\">\n                <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\" class=\"icon\">\n                <h4>Ease</h4>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n            </div>\n        </div>\n        <div class=\"row\" id=\"how-it-works\">\n            <div class=\"col\" style=\"padding:5rem;\">\n                <h5>How GadgetBank Works</h5>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue lorem, ac sollicitudin odio.</p>\n                <div id=\"table\">\n                    <ul class=\"navbar navbar-expand-lg w-60\">\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Select <br>your device</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Receive <br>Instant Offer</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Free <br>Shipping Label</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Send <br>in Device</p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Processing<br><p class=\"hold\">placeholder</p></p>\n                        </li>\n                        <li class=\"nav-item d-none d-lg-inline-block process-list-item\">\n                            <img src=\"../../assets/icons/sharp_data_usage_black_36dp.png\">\n                            <p>Send Money<br><p class=\"hold\">placeholder</p></p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" id=\"bottom\">\n            <div class=\"col\">\n                <div class=\"row\">\n                    <div class=\"col\" id=\"bot-options\">\n                        <h4>SELL YOUR DEVICE NOW</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ullamcorper massa, <br>nec hendrerit dui pretium\n                            quis. Pellentesque scelerisque orci.</p>\n                        <a class=\"btn btn-primary\" role=\"button\" [routerLink]=\"['/trade-in']\" id=\"start-button\">Get Started</a>\n                        <a class=\"btn btn-primary\" role=\"button\" href=\"#\" id=\"faq\">FAQ</a>\n                    </div>\n                    \n                </div>\n                <div class=\"row\" id=\"footer\">\n                    <div class=\"col-3\">\n                        <h6>About us</h6>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ullamcorper massa, nec hendrerit dui pretium\n                        quis. Pellentesque scelerisque orci.</p>\n                    </div>\n                    <div class=\"col-3\">\n                        <h6>Site Map</h6>\n                        <div class=\"row\">\n                            <div class=\"col-6\" id=\"map-col-1\">\n                                <a href=\"#\">Sign Up</a>\n                                <br>\n                                <a href=\"#\">Login</a>\n                            </div>\n                            <div class=\"col-6\" id=\"map-col-2\">\n                                <a href=\"#\">How it works</a>\n                                <br>\n                                <a href=\"#\">Get Cash Now</a>\n                                <br>\n                                <a href=\"#\">FAQs</a>\n                            </div>\n                        </div>   \n                    </div>\n                    <div class=\"col-3\">\n                        <h6>Newsletter</h6>\n                        <p>Subsribe to receive updates and access to exclusive deals, and more.</p>\n                        <input type=\"text\" class=\"form-control w-50 d-inline-block\" placeholder=\"Your email address\">\n                        <button type=\"submit\" value=\"submit\" class=\"btn btn-primary\">Subscribe</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> \n\n</body>\n</html>"

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

module.exports = "#login-container{\n    padding:2rem;\n}\n#login-container form{\n    padding-top:2rem;\n}\n#register-container{\n    padding: 2rem;\n}\n#register-container form{\n    padding-top:2rem;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-expand-lg navbar-light w-100\" style=\"background-color: #3D99E6;\">\n      <div class=\"d-flex flex-grow-1\">\n        <span class=\"w-100 d-lg-none d-block\">\n          <!-- hidden spacer to center brand on mobile --></span>\n        <a class=\"navbar-brand d-none d-lg-inline-block text-white\" [routerLink]=\"['/landing']\">\n          Logo\n          <!-- Logo title goes here -->\n        </a>\n        <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n          <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n        </a>\n        <div class=\"w-100 text-right\">\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"navbar-toggler-icon\"></span> <!-- Mobile dynamic button -->\n          </button>\n        </div>\n      </div>\n    </nav>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3 offset-md-1\" id=\"login-container\">\n      <h2>Log In</h2>\n      <small>Please enter email and password for your GadgetBank account below</small>\n      <form class=\"postForm\" (submit)=\"loginUser(logUser)\">\n        <label>Email address</label>\n        <input type=\"text\" \n          class=\"form-control\" \n          placeholder=\"Ex. JohnSmith@yahoo.com\"\n          required \n          [(ngModel)]=\"logUser.email\" \n          name=\"logUser.email\"\n          #logemail=\"ngModel\">\n        <div *ngIf=\"logemail.invalid && (logemail.dirty || logemail.touched)\">\n          <div *ngIf=\"logemail.errors.required\">\n            Email is required\n          </div>\n        </div>\n        <label>Password</label>\n        <input type=\"password\" \n          class=\"form-control\" \n          required\n          [(ngModel)]=\"logUser.password\" \n          name=\"logUser.password\"\n          #logPass=\"ngModel\"\n          >\n        <div *ngIf=\"logPass.invalid && (logPass.dirty || logPass.touched)\">\n          <div *ngIf=\"logemail.errors.required\">\n            Password is required\n          </div>\n        </div>\n        <br>\n        <button type=\"submit\" value=\"submit\" class=\"btn btn-primary\" [disabled]=\"logemail.errors || logPass.errors\">Log In</button>\n        <div *ngIf=\"loginErrors\">{{loginErrors}}</div>\n      </form>\n    </div>\n    <div class=\"col-2\"></div> \n    <!-- create empty space -->\n    <div class=\"col-3\" id=\"register-container\">\n      <h2>Register a new account</h2>\n      <form (submit)=\"registerUser(newUser)\" >\n        <label>First name</label>\n        <input type=\"text\" \n          class=\"form-control\"\n          required\n          minlength=\"3\"\n          [(ngModel)]=\"newUser.first_name\"\n          name=\"newUser.first_name\"\n          #first_name=\"ngModel\"\n          >\n        <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\">\n          <div *ngIf=\"first_name.errors.required\">First Name is required</div>\n          <div *ngIf=\"first_name.errors.minlength\">First Name must be at least 3 characters long</div>\n        </div>\n        <label>Last name</label>\n        <input type=\"text\" \n          class=\"form-control\"\n          required\n          minlength=\"3\"\n          name=\"newUser.last_name\"\n          [(ngModel)]=\"newUser.last_name\"\n          #last_name=\"ngModel\"\n          >\n        <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\">\n          <div *ngIf=\"last_name.errors.required\">Last Name is required</div>\n          <div *ngIf=\"last_name.errors.minlength\">Last Name must be at least 3 characters long</div>\n        </div>\n        <label>Username</label>\n        <input type=\"text\" \n          class=\"form-control\"\n          required\n          minlength=\"5\"\n          [(ngModel)]=\"newUser.username\"\n          name=\"newUser.username\"\n          #username=\"ngModel\"\n          >\n        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n          <div *ngIf=\"username.errors.minlength\">Username must be at least 5 characters long</div>\n        </div>\n        <label>Email address</label>\n        <input type=\"text\" \n          class=\"form-control\" \n          placeholder=\"Ex. JohnSmith@yahoo.com\" \n          required\n          pattern=\"^[^@]+@[^@]+\\.[^@]+$\"\n          [(ngModel)]=\"newUser.email\" \n          name=\"newUser.email\" \n          #email=\"ngModel\">\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n          <div *ngIf=\"email.errors.required\" class=\"invalid\">Email required</div>\n          <div *ngIf=\"email.errors.pattern\" class=\"invalid\">Invalid Email </div>\n        </div>\n        <label>Password</label>\n        <input type=\"password\" \n          class=\"form-control\" \n          required \n          minlength=\"8\" \n          [(ngModel)]=\"newUser.password\" \n          name=\"password\" \n          #password=\"ngModel\">\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n          <div *ngIf=\"password.errors.required\" class=\"invalid\">Password required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 8 characters long</div>\n        </div>\n        <br>\n          <button type=\"submit\" value=\"submit\" class=\"btn btn-primary\" [disabled]=\"first_name.invalid || last_name.invalid || email.invalid || password.invalid ||username.invalid\">Create Account</button>\n          <div *ngIf=\"regErrors\">{{regErrors}}</div>\n\n        \n        \n      </form>\n    </div>\n    <div class=\"col-2\"></div>\n    <!-- create empy space -->\n  </div>\n\n</div>"

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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.newUser = { first_name: "", last_name: "", email: "", password: "", username: "", admin: false };
        this.logUser = { email: "", password: "" };
    };
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        // user = this.logUser;
        console.log(user);
        this._httpService.postLoginCustomer(user).subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.loginErrors = data['errors'];
                return;
            }
            if (data[0].admin == true) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this._router.navigate(['/portal/' + data[0]['username']]);
            }
        });
    };
    LoginComponent.prototype.registerUser = function () {
        var _this = this;
        this._httpService.postNewCustomer(this.newUser).subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.regErrors = data['errors'];
                return;
            }
            else {
                _this._router.navigate(['/portal/' + data['username']]);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "\n<div class=\"container-fluid\" id=\"wrapper\">\n  <p>\n    <button class=\"btn-sm btn-primary\" (click)=\"goBackToProducts()\">\n      Back To Products</button> \n      <h2>Add Product</h2>\n      <div class=\"container-fluid shadow-sm rounded\" id=\"form-container\">\n        \n        <form class=\"postForm\" (submit)=\"addProduct(newProduct)\">\n          <div class=\"row\">\n            <div class=\"col-3 offset-md-1\">\n              <div class=\"row\">\n                <input type=\"text\" class=\"form-control add-input\" placeholder=\"Title\" name=\"newProduct.title\" [(ngModel)]=\"newProduct.title\">\n                <select class=\"form-control add-input\" [(ngModel)]=\"newProduct.manufacturer\" name=\"newProduct.manufacturer\">\n                  <option value=\"\" disabled selected>\n                    <p class=\"disabled-select\">Manufacturer</p>\n                  </option>\n                  <option value=\"Apple\">Apple</option>\n                  <option value=\"SamSung\">SamSung</option>\n                </select>\n                <select class=\"form-control add-input\" [(ngModel)]=\"newProduct.category_id\" name=\"category_id\">\n                  <option value=\"Device Type\" disabled selected>\n                 Device Type\n                  </option>\n\n                  <option *ngFor=\"let c of allCategories\" value=\"{{c.id}}\">{{c.name}}</option>\n                </select>\n                \n              </div>\n            </div>\n            <div class=\"col-6 offset-md-1\">\n              <input type=\"file\"  class=\"form-control-file\" ng2FileSelect [uploader]=\"uploader\"/>\n            </div>\n          </div>\n          <div class=\"row\" id=\"submit-contain\">\n            <div class=\"col-10\"></div>\n            <div class=\"col-2\">\n              <button type=\"submit\" class=\"btn btn-primary\" value=\"submit\" (click)=\"uploader.uploadAll()\">Add Product</button>\n            </div>\n          </div>\n          \n          \n        </form>\n      </div>\n      \n</div>\n<script>\n  \n</script>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var uri = 'http://localhost:8888/upload';
var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(_httpService, _router, _route, http, el) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.http = http;
        this.el = el;
        this.backToProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: uri });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload: uploaded:", item, status, response);
            //built in function of uploader
        };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.newProduct = { title: "", manufacturer: "", category_id: "Device Type" };
        //initialize our model used in the template form
        this.getAllCategories();
        this.targetCategory = "";
    };
    ProductAddComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._httpService.getCategories().subscribe(function (data) {
            _this.allCategories = data;
        });
    };
    //grabs all categories from db
    ProductAddComponent.prototype.goBackToProducts = function () {
        this.backToProduct.emit("data");
    };
    ProductAddComponent.prototype.addProduct = function (product) {
        var _this = this;
        product['image'] = this.uploader.queue[0].file.name;
        console.log(product);
        var title = product.title.split("");
        var newTitle = "";
        if (title[0] != title[0].toUpperCase()) {
            title[0] = title[0].toUpperCase();
        }
        for (var i = 0; i < title.length; i++) {
            if (title[i] == " ") {
                title[i] = "-";
            }
            newTitle += title[i];
        }
        console.log(newTitle);
        product.title = newTitle;
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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

module.exports = ".container-fluid{\n    padding-top:1rem;\n    background-color: #F8F9FA\n}\n.btn-sm{\n    font-size:.65rem;\n}\n.disabled-select{\n    color: #6C757D\n}\n.edit-top-box{\n    margin-bottom:2rem;\n}\n.card-body{\n    padding:0 !important;\n}\nlabel {\n border:1px solid #ccc;\n padding:10px;\n margin:0 0 10px;\n display:block; \n}\nlabel:active{\n    background:white;\n    cursor:pointer;\n\n}\nlabel:hover {\n background:#eee;\n cursor:pointer;\n}\n.edit-top-box{\n    background-color:white;\n    height: 15rem;\n    padding-top:2.5rem;\n}\n.input-top{\n    margin-bottom:1rem;\n}\n#price_container{\n    padding-left: 0;\n    padding-top:1rem;\n    padding-bottom:1rem;\n}\n.col-3{\n    padding-left: 0;\n}\n#submit_button{\n    width:50%\n}\n#carrier-select{\n    \n    padding-right:0;\n}\n#price-header{\n    border:none !important;\n    background-color:white;\n}\nth{\n    text-align:center;\n}"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <p>\n    <button class=\"btn-sm btn-primary\"  (click)=\"goBackToProducts()\">Products</button>\n  </p>\n  <h4>Edit Product</h4>\n  <form class=\"postForm\" (submit)=\"editProduct(product)\">\n    <div class=\"row edit-top-box shadow-sm rounded\">\n      \n        <div class=\"col-3 offset-md-1 h-30\">\n          <div class=\"row\">\n            <input type=\"text\" class=\"form-control input-top\" placeholder=\"{{getProduct.title}}\" [(ngModel)]=\"product.title\" name=\"title\">\n            <select class=\"form-control input-top\" [(ngModel)]=\"product.manufacturer\" name=\"manufacturer\">\n              <option value=\"\" disabled selected><p class=\"disabled-select\" >{{getProduct.manufacturer}}</p></option>\n              <option value=\"Apple\">Apple</option>\n              <option value=\"SamSung\">SamSung</option>\n            </select>\n            <select class=\"form-control input-top\" [(ngModel)]=\"product.category_id\" name=\"category_id\">\n              <option value=\"\" disabled selected><p class=\"disabled-select\">{{currentCategory}}</p></option>\n              <option *ngFor=\"let c of allCategories\" value=\"{{c.id}}\">{{c.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-6 offset-md-1\">\n          <input type=\"file\" class=\"form-control-file\" ng2FileSelect [uploader]=\"uploader\"/>\n          <button type=\"button\" class=\"btn-small btm-primary\" (click)=\"uploader.uploadAll()\">Upload</button>\n        </div>\n      </div>\n    <h4>Pricing</h4>\n    <div class=\"row card text-center shadow-sm\">\n      <div class=\"card-header\" id=\"price-header\" style=\"text-align:left;\">\n            <div class=\"btn-group btn-group-toggle\" ngbRadioGroup *ngFor=\"let s of sizes\">\n              <label ngbButtonLabel class=\"btn-primary\" >\n                <input ngbButton type=\"radio\" [(ngModel)]=\"product.size_id\" name=\"product.size_id\" value=\"s.id\" (click)=\"toggleSize(s.id)\">{{s.value}}GB\n              </label>\n            </div>\n              <table>\n                <thead>\n                  <tr>\n                    <th>Carrier</th>\n                    <th>Handset Only</th>\n                    <th>Sealed</th>\n                    <th>Open-Sealed</th>\n                    <th>Good LCD</th>\n                    <th>Cracked Front</th>\n                    <th>Bad LCD/Copy</th>\n                    <th>Dead</th>\n                    <th>Cracked Back (Minus)</th>\n                  </tr>\n                </thead>\n                \n                <tbody>\n                  <tr *ngFor=\"let c of carrierPriceGroup; index as i\">\n                    <td>{{c.name}} \n                      <input type=\"hidden\" value=\"{{c.carrier_id}}\">\n                    </td>\n                    <td *ngFor=\"let p of conditionPriceGroup; let cur of currentSizes; index as j\">\n                        <input type=\"text\"  class=\"form-control\"  #box (keyup)=\"onKey(box.value, i,j)\"> \n                        \n                    </td>                                      \n                    <td>\n                    \n                      <input type=\"text\" class=\"form-control\" #minus (keyup)=\"minusKey(minus.value, i )\">\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n        </div>\n      </div>\n\n    \n    <div class=\"row\" id=\"price_container\">\n      <div class=\"col-3\">\n      </div>\n      <div class=\"col-6\"></div>\n      <div class=\"col-3\" style=\"text-align:right\">\n        <button id=\"submit_button\" type=\"submit\" class=\"btn btn-primary\" value=\"submit\" >Save</button>\n      </div>\n    </div> \n  </form>\n</div>\n"

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
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var uri = 'http://localhost:8888/upload';
var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.backToProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: uri });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload: uploaded:", item, status, response);
            //built in function of uploader
        };
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.product = { title: "", manufacturer: "", category_id: "" };
        this.price = [];
        this.getAllSizes();
        //initialize model to be used on template to submit form
        this.getAllCategories();
        //on load call function to grab all current categories
        this.getCategoryName();
        this.getAllCarriers();
        this.getAllConditions();
        this.getPricesBySize(this.getProduct.id, 1);
        this.getPricesBySizeAndCarrier(this.getProduct.id, 1);
        this.getPricesBySizeAdCondition(this.getProduct.id, 1);
    };
    ProductEditComponent.prototype.getAllConditions = function () {
        var _this = this;
        this._httpService.getAllConditions().subscribe(function (data) {
            _this.allConditions = data;
            console.log("all conditions", data);
        });
    };
    ProductEditComponent.prototype.getAllCarriers = function () {
        var _this = this;
        this._httpService.getAllCarriers().subscribe(function (data) {
            _this.allCarriers = data;
            console.log("all carriers", data);
        });
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
    ProductEditComponent.prototype.getAllSizes = function () {
        var _this = this;
        this._httpService.getAllSizes().subscribe(function (data) {
            _this.sizes = data;
        });
    };
    ProductEditComponent.prototype.getPricing = function () {
        var _this = this;
        this._httpService.getPriceForProduct(this.getProduct.id).subscribe(function (data) {
            for (var i in data) {
                if (data[i]['price_value'] == null) {
                    data[i]['price_value'] = 0;
                }
            }
            _this.prices = data;
            console.log("pricing table", _this.prices);
        });
    };
    //function that calls service to communicated with backend to grab all categories
    ProductEditComponent.prototype.editProduct = function (targetProduct) {
        var _this = this;
        if (targetProduct == "") {
            targetProduct = this.getProduct.title;
        }
        else {
            var title = targetProduct.title.split("");
            var newTitle = "";
            if (title[0] != title[0].toUpperCase()) {
                title[0] = title[0].toUpperCase();
            }
            for (var i = 0; i < title.length; i++) {
                if (title[i] == " ") {
                    title[i] = "-";
                }
                newTitle += title[i];
            }
            targetProduct.title = newTitle;
        }
        if (targetProduct.category_id == "") {
            targetProduct.category_id = this.getProduct.category_id;
        }
        if (targetProduct.manufacturer == "") {
            targetProduct.manufacturer = this.getProduct.manufacturer;
        }
        //if statements allow the product to keep it's original attributes if nothing was entered through the form
        // id from getProduct.id is used to send to backend so correct querry can occur
        this.editPrices(this.price);
        //call editPrice to individually edit all price objects associated with this product
        //check if a file has been uploaded
        if (this.uploader.queue[0] == null) {
            targetProduct['image'] = this.product.image;
        }
        else {
            targetProduct['image'] = this.uploader.queue[0].file.name;
        }
        this._httpService.postEditProduct(this.getProduct.id, targetProduct).subscribe(function (data) {
            console.log(data);
            _this.goBackToProducts();
        });
    };
    // this function calls service to the update product back end route
    ProductEditComponent.prototype.getCategoryName = function () {
        var _this = this;
        this._httpService.getOneCategory(this.getProduct.category_id).subscribe(function (data) {
            _this.currentCategory = data[0]['name'];
            console.log("category", data);
        });
    };
    // this function will get the current category of the target product and display the name as a placeholder in our form input
    ProductEditComponent.prototype.toggleSize = function (id) {
        var _this = this;
        this._httpService.getPriceByProductAndSize(this.getProduct.id, id).subscribe(function (data) {
            for (var i in data) {
                if (data[i]['price_value'] == null) {
                    data[i]['price_value'] = 0;
                }
            }
            _this.prices = data;
            _this.currentSize = data[0]['size_id'];
            console.log("current prices", data);
            _this.currentSizePrices = data;
        });
    };
    ProductEditComponent.prototype.nextItem = function (arr) {
        arr = this.sizes;
        var i = i + 1;
        i = i % arr.length;
        return arr[i];
    };
    ProductEditComponent.prototype.startgetPrices = function (product, size) {
        var _this = this;
        return this._httpService.getPriceByProductAndSize(product, size).subscribe(function (data) {
            _this.prices = data;
            console.log("Prices", data);
            _this.currentSizePrices = data;
        });
    };
    ProductEditComponent.prototype.getPricesBySize = function (product_id, size_id) {
        var _this = this;
        return this._httpService.getPriceByProductAndSize(product_id, size_id).subscribe(function (data) {
            for (var i in data) {
                if (data[i]['price_value'] == null) {
                    data[i]['price_value'] = 0;
                }
            }
            _this.prices = data;
            _this.generatePriceArray(data);
        });
    };
    ProductEditComponent.prototype.getPricesBySizeAndCarrier = function (product_id, size_id) {
        var _this = this;
        return this._httpService.getPriceBySizeAndCarrier(product_id, size_id).subscribe(function (data) {
            _this.carrierPriceGroup = data;
            for (var i in _this.allCarriers) {
                _this.carrierPriceGroup[i]['name'] = _this.allCarriers[i]['carrier_name'];
            }
            console.log("grouped carrier prices", data);
        });
    };
    ProductEditComponent.prototype.getPricesBySizeAdCondition = function (product_id, size_id) {
        var _this = this;
        return this._httpService.getPriceBySizeAndConditions(product_id, size_id).subscribe(function (data) {
            _this.conditionPriceGroup = data;
            console.log("grouped condition prices", data);
        });
    };
    ProductEditComponent.prototype.generatePriceArray = function (prices) {
        var length = Object.keys(prices).length;
        var p = this.currentSizePrices;
        console.log("Length ", length);
        for (var i = 0; i < length; i++) {
            var x = { "price_value": "", "id": "", "minus_value": "" };
            this.price.push(x);
        }
        console.log("price  here", this.price);
    };
    ProductEditComponent.prototype.onKey = function (value, x, y) {
        console.log(value);
        if (x == 0 && y < 7) {
            if (value == "") {
            }
            this.price[y]['price_value'] = value;
        }
        if (x == 1) {
            this.price[y + 7]['price_value'] = value;
        }
        if (x == 2) {
            this.price[y + 14]['price_value'] = value;
        }
        if (x == 3) {
            this.price[y + 21]['price_value'] = value;
        }
        if (x == 4) {
            this.price[y + 28]['price_value'] = value;
        }
    };
    ProductEditComponent.prototype.minusKey = function (value, x) {
        this.minusVal = value;
        if (x == 0) {
            for (var i = 0; i < this.allConditions.length; i++) {
                this.price[i]['minus_value'] = value;
            }
        }
        if (x == 1) {
            for (var i = 0; i < this.allConditions.length; i++) {
                this.price[i + 7]['minus_value'] = value;
            }
        }
        if (x == 2) {
            for (var i = 0; i < this.allConditions.length; i++) {
                this.price[i + 14]['minus_value'] = value;
            }
        }
        if (x == 3) {
            for (var i = 0; i < this.allConditions.length; i++) {
                this.price[i + 21]['minus_value'] = value;
            }
        }
        if (x == 4) {
            for (var i = 0; i < this.allConditions.length; i++) {
                this.price[i + 28]['minus_value'] = value;
            }
        }
    };
    ProductEditComponent.prototype.editPrices = function (prices) {
        var arr = this.currentSizePrices;
        for (var i = 0; i < arr.length; i++) {
            if (prices[i]['price_value'] != "") {
                var body = prices[i];
                this._httpService.postEditPrice(arr[i]['id'], body).subscribe(function (data) {
                    console.log(data);
                });
            }
            else {
                continue;
            }
        }
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

/***/ "./src/app/product-select/product-select.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-select/product-select.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#select_list{\n    list-style:none;\n    padding-left: 0;\n\n}\n#select_list li{\n    display:inline-block;\n    width:20%;\n    text-align:center;\n\n}\n#select_container{\n    text-align:center;\n    height: 15rem;\n    padding-top:3rem;\n    background-color: #F8f9fd;\n}\n#select_container h2 {\n    font-size: 3rem;\n    \n}\n#select_container p {\n    font-size: 1.5rem;\n}\n#select-row{\n    padding-top:2rem;\n    padding-bottom:2rem;\n}\n.placeholder{\n    height: 10rem;\n    background-color: black;\n    padding:1rem;\n}"

/***/ }),

/***/ "./src/app/product-select/product-select.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-select/product-select.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-expand-lg navbar-light w-100\" style=\"background-color: #3D99E6;\">\n      <div class=\"d-flex flex-grow-1\">\n        <span class=\"w-100 d-lg-none d-block\">\n          <!-- hidden spacer to center brand on mobile --></span>\n        <a class=\"navbar-brand d-none d-lg-inline-block text-white\" [routerLink]=\"['/landing']\">\n          Logo\n          <!-- Logo title goes here -->\n        </a>\n        <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n          <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n        </a>\n        <div class=\"w-100 text-right\">\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"navbar-toggler-icon\"></span> <!-- Mobile dynamic button -->\n          </button>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n        <ul class=\"navbar-nav ml-auto flex-nowrap\">\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item nav-active text-white\" [ngx-scroll-to]=\"'#how-it-works'\">How it\n              works</a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\">FAQs</a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" [ngx-scroll-to]=\"'#bottom'\">Get Cash Now</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-light\" [routerLink]=\"['/create-account']\">Sign Up</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['/create-account']\">Login</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"row\" > \n    <div class=\"col-md\" id=\"select_container\">\n      <h2>Select your Device</h2>\n      <p>Sell your device to the most trusted professionals</p>\n    </div>\n  </div>\n  <div class=\"row\" id=\"select-row\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-8\">\n      <ul id=\"select_list\">\n        <li>\n          <div class=\"placeholder\"></div>\n          <a class=\"btn btn-primary \" [routerLink]=\"['/iphone']\">Sell Iphone</a>\n        </li>\n        <li>\n          <div class=\"placeholder\"></div>\n          <a class=\"btn btn-primary \" [routerLink]=\"['/samsung']\">Sell Samsung</a>\n        </li>\n        <li >\n          <div class=\"placeholder\"></div>\n          <a class=\"btn btn-primary \" [routerLink]=\"['/ipad']\">Sell Tablet</a>\n        </li>\n        <li >\n          <div class=\"placeholder\"></div>\n          <a class=\"btn btn-primary \" [routerLink]=\"\">Sell Laptop</a>\n        </li>\n        <li>\n          <div class=\"placeholder\"></div>\n          <a class=\"btn btn-primary\" [routerLink]=\"\">Sell Watch</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-2\" ></div>\n  </div>\n  <div class=\"row\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <div class=\"collapse navbar-collapse flex-grow-1 text-left\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item col\">\n            <p><b>Sell</b></p>\n            <p>Resources</p>\n            <p>Resources</p>\n            <p>About</p>\n            <p>Contact Us</p>\n          </li>\n          <li class=\"nav-item col\">\n            <p><b>Resources</b></p>\n            <p>Resources</p>\n            <p>Resources</p>\n            <p>About</p>\n            <p>Contact Us</p>\n          </li>\n          <li class=\"nav-item col\">\n            <p><b>About Gadgetbank</b></p>\n            <p>Resources</p>\n            <p>About</p>\n            <p>Contact Us</p>\n          </li>\n          <li class=\"nav-item col\">\n            <p><b>Contact Us</b></p>\n            <p>Resources</p>\n            <p>Resources</p>\n            <p>About</p>\n            <p>Contact Us</p>\n          </li>\n          <li class=\"nav-item col\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper justo eget feugiat vestibulum.\n              Fusce eget\n              dapibus metus, sed rutrum.</p>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-select/product-select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-select/product-select.component.ts ***!
  \************************************************************/
/*! exports provided: ProductSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSelectComponent", function() { return ProductSelectComponent; });
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



var ProductSelectComponent = /** @class */ (function () {
    function ProductSelectComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ProductSelectComponent.prototype.ngOnInit = function () {
    };
    ProductSelectComponent.prototype.getAllProducts = function () {
        var _this = this;
        this._httpService.getAllProducts().subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-select',
            template: __webpack_require__(/*! ./product-select.component.html */ "./src/app/product-select/product-select.component.html"),
            styles: [__webpack_require__(/*! ./product-select.component.css */ "./src/app/product-select/product-select.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductSelectComponent);
    return ProductSelectComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product_image{\n    width:3.5rem;\n}\n#newProduct{\n    margin-bottom:1rem;\n}\n.container-fluid{\n    padding-top:1rem;\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <button class=\"btn btn-primary\" id=\"newProduct\" (click)=\"showAdd()\">New Product</button>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Image</th>\n        <th>Title</th>\n        <th>Manufacturer</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let p of products; let c of condition_names; index as i\">\n          <td><img class=\"product_image\" src=\"../../assets/uploads/{{p.image}}\"></td>\n          <td>{{p.title}}</td>\n          <td>{{p.manufacturer}}</td>\n          <td>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-small btn-secondary\" (click)=\"showEdit(p.id)\">Edit</button>\n              <button class=\"btn btn-small btn-danger\" (click)=\"delete(p.id, i)\">Delete</button>\n            </div>\n          </td>\n            <!--\n          </td> <button [routerLink]=\"['/edit/'+p.id+'']\">Edit</button> -->\n        </tr>\n    </tbody>\n  </table>\n</div>\n"

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
        this.condition_names = [];
        this.sendProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.sendAddProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.sendDeleteProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.allProducts();
    };
    ProductsComponent.prototype.allProducts = function () {
        var _this = this;
        this._httpService.getAllProducts().subscribe(function (data) {
            console.log(data);
            _this.products = data;
            console.log(data);
        });
    };
    //function to get all products
    ProductsComponent.prototype.showEdit = function (product_id) {
        var _this = this;
        this._httpService.getOneProduct(product_id).subscribe(function (data) {
            _this.sendProduct.emit(data);
            console.log("IN PRODUCT SHOW EDIT", data);
        });
    };
    //function to emit product Id to the product edit component
    ProductsComponent.prototype.showAdd = function () {
        this.sendAddProduct.emit("show");
    };
    //function to let dashboard component know to switch ot product add component
    ProductsComponent.prototype.delete = function (product_id, index) {
        var _this = this;
        this._httpService.getDeleteOneProduct(product_id).subscribe(function (data) {
            _this.sendDeleteProduct.emit("delete");
            _this._router.navigate(['/dashboard']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sendProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sendAddProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sendDeleteProduct", void 0);
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

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#question-header{\n    font-size:2rem;\n}\n#question-table{\n    background-color: #f8f9fb;\n    font-size: 1.5rem;\n}\n#product-details{\n    vertical-align:top;\n    padding-left: 1rem;\n    font-size: 1.25rem;\n}\n#select_container{\n    text-align:center;\n    height: 15rem;\n    padding-top:3rem;\n    background-color: #F8f9fd;\n}\n#select_container h2 {\n    font-size: 3rem;\n}\n#select_container p {\n    font-size: 1.5rem;\n}\n#product-detail-container{\n    padding-top:5rem;\n    padding-bottom: 2rem;\n}\n#price-card{\n    text-align:center;\n}\n#price{\n    font-size:2rem;\n}\n#apply{\n    border-radius:0rem 0rem 0.25rem 0.25rem;\n    font-size: 2rem;\n}\n#price-contain{\n    padding-top: 1rem;\n    padding-left: 2rem;\n    padding-right:0rem;\n}\n#price-title{\n    color: #c3c3c3;\n    font-size: 1.5rem;\n}\n#question-contain{\n    padding-bottom: 10rem;\n}"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-expand-lg navbar-light w-100\" style=\"background-color: #3D99E6;\">\n      <div class=\"d-flex flex-grow-1\">\n        <span class=\"w-100 d-lg-none d-block\">\n         </span>\n        <a class=\"navbar-brand d-none d-lg-inline-block text-white\" [routerLink]=\"['/landing']\">\n          Logo\n         \n        </a>\n        <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n          <img src=\"\" alt=\"logo\"> \n        </a>\n        <div class=\"w-100 text-right\">\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"navbar-toggler-icon\"></span> \n          </button>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n        <ul class=\"navbar-nav ml-auto flex-nowrap\">\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item nav-active text-white\" [ngx-scroll-to]=\"'#how-it-works'\">How\n              it\n              works</a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\">FAQs</a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" [ngx-scroll-to]=\"'#bottom'\">Get Cash Now</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-light\" [routerLink]=\"['/create-account']\">Sign Up</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['/create-account']\">Login</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n    <div class=\"row\" >\n      <div class=\"col-md\" id=\"select_container\">\n        <h2>Select your Device</h2>\n        <p>Sell your device to the most trusted professionals</p>\n      </div>\n    </div>\n    <div class=\"row\" id=\"product-detail-container\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-7\">\n        <td>\n          <img src=\"../../assets/uploads/{{product.image}}\">\n        </td>\n        <td id=\"product-details\" >\n          <p class=\"product-info\"><b>{{productTitle}}/{{productSize}}GB/{{productCarrier}}</b></p>\n        </td>\n        \n      </div>\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-1\"></div>\n    </div>\n    <div class=\"row\" id=\"question-contain\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-6\">\n        <p id=\"question-header\"><b>Help us give you an accurate price</b></p>\n        <table class=\"table\" id=\"question-table\">\n          <tr>\n            <td>\n              Is the device new? \n            </td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"isNew\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" [value]=\"true\">Yes\n                </label>\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" [value]=\"false\">No\n                </label>\n              </div>\n            </td>\n          </tr>\n          <!-- New -->\n          <tr *ngIf=\"isNew == true\"> \n            <td>Device sealed in box?</td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"sealed\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" [value]=\"true\">Yes\n                </label>\n                <!-- Handset Only -->\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\"  (click)=\"getPrice(1)\">No\n                </label>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"sealed == true\">\n            <td>Device been activated?</td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"activated\">\n                <!-- Open Sealed -->\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" (click)=\"getPrice(3)\">Yes\n                </label>\n                <!-- Sealed -->\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" (click)=\"getPrice(2)\">No\n                </label>\n              </div>\n            </td>\n          </tr> \n          <!-- Used -->\n          <tr *ngIf=\"isNew == false\">\n            <td>Device power on?</td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"power\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" [value]=\"true\">Yes\n                </label>\n                <!-- Dead -->\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" (click)=\"getPrice(7)\">No\n                </label>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"power == true\">\n            <td>\n              Are there any marks (not cracks) on the LCD?\n            </td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"defects\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" [value]=\"true\">Yes\n                </label>\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" [value]=\"false\">No\n                </label>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"defects == true\">\n            <td>Cracks on back glass?</td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"crackedBack\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <!-- Bad LCD Minus -->\n                  <input ngbButton type=\"radio\" (click)=\"getPriceMinus(6)\">Yes\n                </label>\n                <!-- Bad LCD -->\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" (click)=\"getPrice(6)\">No\n                </label>\n                <pre></pre>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"defects == false\">\n            <td>\n              Does the device have cracks on the front?\n            </td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"crackedFront\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" [value]=\"true\">Yes\n                </label>\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" [value]=\"false\">No\n                </label>\n                <pre></pre>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"crackedFront == true\">\n            <td>\n              Does the device have cracks on the back?\n            </td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"crackedBack\">\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <!-- Cracked Front Minus -->\n                  <input ngbButton type=\"radio\" (click)=\"getPriceMinus(5)\">Yes\n                </label>\n                <!-- Cracked Front -->\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" (click)=\"getPrice(5)\">No\n                </label>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"crackedFront == false\">\n            <td>\n              Does the device have cracks on the back?\n            </td>\n            <td>\n              <div class=\" btn-group-toggle\" ngbRadioGroup>\n                <!-- Good LCD Minus -->\n                <label ngbButtonLabel class=\"btn-primary button-label\" style=\"margin-right:.5rem;\">\n                  <input ngbButton type=\"radio\" (click)=\"getPriceMinus(4)\">Yes\n                </label>\n                <!-- Good LCD -->\n                <label ngbButtonLabel class=\"btn-primary button-label\">\n                  <input ngbButton type=\"radio\" (click)=\"getPrice(4)\">No\n                </label>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"col-md-3\" id=\"price-contain\">\n        <div class=\"card shadow\" id=\"price-card\">\n          <div class=\"card-body\">\n            <p id=\"price-title\" class=\"card-title\"><b>Offer Price</b></p>\n            <p id=\"price\" *ngIf=\"currentPrice\"><b>${{currentPrice.price_value}}</b></p>\n            \n          </div>\n          <button id=\"apply\" type=\"button\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!currentPrice\" (click)=\"apply()\"><b>Apply</b></button>\n        </div>\n          <!-- if user doesnt have an account yet login or register -->\n          <div *ngIf=\"signUpPrompt \">\n            <button class=\"btn btn-lg btn-block btn-outline-primary\" (click)=\"open(content)\">Please register or log in to proceed</button>\n            <ng-template #content let-modal>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Log In/Register</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n              <ngb-tabset>\n                <!-- Login -->\n              <ngb-tab title=\"Login\">\n                <ng-template ngbTabContent>\n                  <form class=\"postForm\" (submit)=\"loginUser(logUser)\">\n                    <label>Email address</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Ex. JohnSmith@yahoo.com\" required [(ngModel)]=\"logUser.email\"\n                      name=\"logUser.email\" #logemail=\"ngModel\">\n                    <div *ngIf=\"logemail.invalid && (logemail.dirty || logemail.touched)\">\n                      <div *ngIf=\"logemail.errors.required\">\n                        Email is required\n                      </div>\n                    </div>\n                    <label>Password</label>\n                    <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"logUser.password\" name=\"logUser.password\" #logPass=\"ngModel\">\n                    <div *ngIf=\"logPass.invalid && (logPass.dirty || logPass.touched)\">\n                      <div *ngIf=\"logemail.errors.required\">\n                        Password is required\n                      </div>\n                    </div>\n                    <br>\n                    <button type=\"submit\" value=\"submit\" class=\"btn btn-primary\" [disabled]=\"logemail.errors || logPass.errors\">Log In</button>\n                    <div *ngIf=\"loginErrors\">{{loginErrors}}</div>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n              <!-- Register -->\n              <ngb-tab title=\"Register\">\n                <ng-template ngbTabContent>\n                  <form (submit)=\"registerUser(newUser)\">\n                    <div class=\"form-group\">\n                      <label>First name</label>\n                      <input type=\"text\" class=\"form-control\" required minlength=\"3\" [(ngModel)]=\"newUser.first_name\" name=\"newUser.first_name\"\n                        #first_name=\"ngModel\">\n                      <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\">\n                        <div *ngIf=\"first_name.errors.required\">First Name is required</div>\n                        <div *ngIf=\"first_name.errors.minlength\">First Name must be at least 3 characters long</div>\n                      </div>\n                      <label>Last name</label>\n                      <input type=\"text\" class=\"form-control\" required minlength=\"3\" name=\"newUser.last_name\" [(ngModel)]=\"newUser.last_name\"\n                        #last_name=\"ngModel\">\n                      <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\">\n                        <div *ngIf=\"last_name.errors.required\">Last Name is required</div>\n                        <div *ngIf=\"last_name.errors.minlength\">Last Name must be at least 3 characters long</div>\n                      </div>\n                      <label>Username</label>\n                      <input type=\"text\" class=\"form-control\" required minlength=\"5\" [(ngModel)]=\"newUser.username\" name=\"newUser.username\"\n                        #username=\"ngModel\">\n                      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n                        <div *ngIf=\"username.errors.required\">Username is required</div>\n                        <div *ngIf=\"username.errors.minlength\">Username must be at least 5 characters long</div>\n                      </div>\n                      <label>Email address</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Ex. JohnSmith@yahoo.com\" required pattern=\"^[^@]+@[^@]+\\.[^@]+$\"\n                        [(ngModel)]=\"newUser.email\" name=\"newUser.email\" #email=\"ngModel\">\n                      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                        <div *ngIf=\"email.errors.required\" class=\"invalid\">Email required</div>\n                        <div *ngIf=\"email.errors.pattern\" class=\"invalid\">Invalid Email </div>\n                      </div>\n                      <label>Password</label>\n                      <input type=\"password\" class=\"form-control\" required minlength=\"8\" [(ngModel)]=\"newUser.password\" name=\"password\"\n                        #password=\"ngModel\">\n                      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                        <div *ngIf=\"password.errors.required\" class=\"invalid\">Password required</div>\n                        <div *ngIf=\"password.errors.minlength\">Password must be at least 8 characters long</div>\n                      </div>\n                      <br>\n                      <button type=\"submit\" value=\"submit\" class=\"btn btn-primary\" [disabled]=\"first_name.invalid || last_name.invalid || email.invalid || password.invalid ||username.invalid\">Create\n                        Account</button>\n                      <div *ngIf=\"regErrors\">{{regErrors}}</div>\n                    </div>\n                  </form>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Exit</button>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      \n      <div class=\"col-md-2\"></div>\n    </div>\n    <div class=\"row\">\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <div class=\"collapse navbar-collapse flex-grow-1 text-left\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item col\">\n              <p><b>Sell</b></p>\n              <p>Resources</p>\n              <p>Resources</p>\n              <p>About</p>\n              <p>Contact Us</p>\n            </li>\n            <li class=\"nav-item col\">\n              <p><b>Resources</b></p>\n              <p>Resources</p>\n              <p>Resources</p>\n              <p>About</p>\n              <p>Contact Us</p>\n            </li>\n            <li class=\"nav-item col\">\n              <p><b>About Gadgetbank</b></p>\n              <p>Resources</p>\n              <p>About</p>\n              <p>Contact Us</p>\n            </li>\n            <li class=\"nav-item col\">\n              <p><b>Contact Us</b></p>\n              <p>Resources</p>\n              <p>Resources</p>\n              <p>About</p>\n              <p>Contact Us</p>\n            </li>\n            <li class=\"nav-item col\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper justo eget feugiat vestibulum.\n                Fusce eget\n                dapibus metus, sed rutrum.</p>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(_httpService, _router, _route, modalService) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.modalService = modalService;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        console.log(this._route);
        this.productTitle = this._route['url']['value'][0];
        this.productSize = this._route['url']['value'][1];
        this.productCarrier = this._route['url']['value'][2];
        this.isNew = { value: "" };
        this.sealed = { value: "" };
        this.activated = { value: "" };
        this.power = { value: "" };
        this.defects = { value: "" };
        this.crackedFront = { value: "" };
        this.crackedBack = { value: "" };
        this.newUser = { first_name: "", last_name: "", email: "", password: "", username: "", admin: false };
        this.logUser = { email: "", password: "" };
        this.getProductByTitle();
        this.getSize();
        this.getCarrier();
    };
    QuestionComponent.prototype.getProductByTitle = function () {
        var _this = this;
        console.log(this.productTitle['path']);
        this._httpService.getAllProductsLikeTitle(this.productTitle['path']).subscribe(function (data) {
            _this.product = data[0];
            console.log("HEREE", data);
        });
    };
    QuestionComponent.prototype.getSize = function () {
        var _this = this;
        this._httpService.getOneSizeByValue(this.productSize).subscribe(function (data) {
            _this.sizeId = data[0].id;
            console.log("size", data);
        });
    };
    QuestionComponent.prototype.getCarrier = function () {
        var _this = this;
        this._httpService.getOneCarrierByName(this.productCarrier).subscribe(function (data) {
            _this.carrierId = data[0].id;
            console.log("carrier", data);
        });
    };
    QuestionComponent.prototype.getPrice = function (condition_id) {
        var _this = this;
        this._httpService.getPriceByAllConditions(this.product.id, this.sizeId, condition_id, this.carrierId, this.product.category_id).subscribe(function (data) {
            _this.currentPrice = data;
            console.log(data);
        });
    };
    QuestionComponent.prototype.getPriceMinus = function (condition_id) {
        var _this = this;
        this._httpService.getPriceByAllConditions(this.product.id, this.sizeId, condition_id, this.carrierId, this.product.category_id).subscribe(function (data) {
            data['price_value'] -= data['minus_value'];
            _this.currentPrice = data;
            console.log(data);
        });
    };
    QuestionComponent.prototype.apply = function () {
        var _this = this;
        this._httpService.getSession().subscribe(function (data) {
            console.log("IN SUBMIT HERE", data);
            if (data['errors']) {
                _this.signUpPrompt = "Please click here to register with us before proceeding";
            }
            else {
                _this._httpService.getThisCustomer(data['user']).subscribe(function (user) {
                    console.log("USER", user);
                    _this.addProductToOrder(user[0]);
                });
            }
        });
    };
    QuestionComponent.prototype.addProductToOrder = function (logUser) {
        var _this = this;
        console.log("IN ADD PRODUCT TO  ORDER", logUser);
        var order = { total_payment: this.currentPrice.price_value, user_id: logUser.id };
        //check for any active orders
        this._httpService.getActiveOrderByUserId(logUser.id).subscribe(function (result) {
            console.log("active order", result);
            //if active post a new order
            if (result['errors'] == "no active order found") {
                _this._httpService.postNewOrder(logUser.id, order).subscribe(function (data) {
                    _this.product['price'] = _this.currentPrice;
                    _this._httpService.postNewProductToNewOrder(data['id'], _this.product).subscribe(function (newData) {
                        console.log("order with product add", newData);
                        _this.modalService.dismissAll();
                        _this._router.navigate(['/portal/' + logUser.username]);
                    });
                });
                //else add to active order
            }
            else {
                _this.product['price'] = _this.currentPrice.id;
                _this._httpService.postNewProductToActiveOrderByUserId(logUser.id, _this.product).subscribe(function (result) {
                    console.log("active order add", result);
                    _this.modalService.dismissAll();
                    _this._router.navigate(['/portal/' + logUser.username]);
                });
            }
        });
    };
    QuestionComponent.prototype.registerUser = function (newUser) {
        var _this = this;
        console.log("in register");
        this._httpService.postNewCustomer(newUser).subscribe(function (data) {
            console.log("after service", data);
            if (data['errors']) {
                console.log(data);
                _this.regErrors = data['errors'];
                return;
            }
            _this.addProductToOrder(data);
        });
    };
    QuestionComponent.prototype.loginUser = function (user) {
        var _this = this;
        // user = this.logUser;
        console.log(user);
        this._httpService.postLoginCustomer(user).subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.loginErrors = data['errors'];
                return;
            }
            else {
                _this.addProductToOrder(data[0]);
            }
        });
    };
    QuestionComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = 'Closed with: ${result}';
        }, function (reason) {
            _this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
        });
    };
    QuestionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return 'with: ${reason}';
        }
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], QuestionComponent);
    return QuestionComponent;
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

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#select_list li{\n    display:inline-block;\n    width:20%;\n    text-align:center;\n\n}\n#select_container{\n    text-align:center;\n    height: 15rem;\n    padding-top:3rem;\n    background-color: #F8f9fd;\n}\n#select_container h2 {\n    font-size: 3rem;\n}\n#select_container p {\n    font-size: 1.5rem;\n}\n#spec_head {\n    font-size:2rem;\n}\n#spec-head-row{\n    border-bottom: solid 1px #F8f9fd;\n    vertical-align:bottom;\n}\n#choose-options{\n    padding-top:3rem;\n    padding-bottom:5rem;\n}\n#button-contain{\n    padding:1rem;\n}\n.button-label{\n    height: 60% !important;\n    top:1rem;\n    \n}\n.model-img{\n    padding-right: .5rem\n}"

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/*!******************************************!*\
  !*** ./src/app/sell/sell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <nav class=\"navbar navbar-expand-lg navbar-light w-100\" style=\"background-color: #3D99E6;\">\n        <div class=\"d-flex flex-grow-1\">\n          <span class=\"w-100 d-lg-none d-block\">\n            <!-- hidden spacer to center brand on mobile --></span>\n          <a class=\"navbar-brand d-none d-lg-inline-block text-white\" [routerLink]=\"['/landing']\">\n            Logo\n            <!-- Logo title goes here -->\n          </a>\n          <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" href=\"#\">\n            <img src=\"\" alt=\"logo\"> <!-- Logo image goes here -->\n          </a>\n          <div class=\"w-100 text-right\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"navbar-toggler-icon\"></span> <!-- Mobile dynamic button -->\n            </button>\n          </div>\n        </div>\n        <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n          <ul class=\"navbar-nav ml-auto flex-nowrap\">\n            <li class=\"nav-item\">\n              <a role=\"button\" class=\"nav-link m-2 menu-item nav-active text-white\" [ngx-scroll-to]=\"'#how-it-works'\">How\n                it\n                works</a>\n            </li>\n            <li class=\"nav-item\">\n              <a role=\"button\" class=\"nav-link m-2 menu-item text-white\">FAQs</a>\n            </li>\n            <li class=\"nav-item\">\n              <a role=\"button\" class=\"nav-link m-2 menu-item text-white\" [ngx-scroll-to]=\"'#bottom'\">Get Cash Now</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"btn btn-light\" [routerLink]=\"['/create-account']\">Sign Up</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"btn btn-primary\" [routerLink]=\"['/create-account']\">Login</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n      <div class=\"row\">\n        <div class=\"col-md\" id=\"select_container\">\n          <h2>Select your Device</h2>\n          <p>Sell your device to the most trusted professionals</p>\n        </div>\n      </div>\n      <div class=\"row\" id=\"choose-options\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-7\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n            <ngb-panel id=\"static-1\">\n              <ng-template ngbPanelTitle>\n                <span><b>Choose Model</b></span> \n              </ng-template>\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-sm btn-group btn-group-toggle\" ngbRadioGroup  *ngFor=\"let c of currentModels\" [(ngModel)]=\"model\">\n                      <img class=\"model-img\" src=\"../../assets/uploads/{{c.image}}\">\n                      <label ngbButtonLabel class=\"btn-primary button-label\">\n                        <input ngbButton type=\"radio\" value={{c.title}}>{{c.title}}\n                      </label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"static-2\">\n              <ng-template ngbPanelTitle>\n                <span><b>Choose Size</b></span>\n              </ng-template>\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-sm btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"size\" *ngFor=\"let s of currentSizes\">\n                    <label ngbButtonLabel class=\"btn-primary\">\n                      <input ngbButton type=\"radio\" value=\"{{s.value}}\">{{s.value}}\n                    </label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"static-3\">\n              <ng-template ngbPanelTitle>\n                <span><b>Choose Carrier</b></span>\n              </ng-template>\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-sm btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"carrier\" *ngFor=\"let car of currentCarriers\">\n                    <label ngbButtonLabel class=\"btn-primary\">\n                      <input ngbButton type=\"radio\" value=\"{{car.carrier_name}}\">{{car.carrier_name}}\n                    </label> \n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <b>Product Specs</b>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\" id=\"spec-head-row\">\n                <div class=\"card-title col\"><p class=\"spec_head\"><b>Model</b></p></div>\n                <div class=\"card-title col\"><p class=\"spec_head\"><b>Size</b></p></div>\n                <div class=\"card-title col\"><p class=\"spec_head\"><b>Carrier</b></p></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"card-text col\">{{model}}</div>\n                <div class=\"card-text col\">{{size}}</div>\n                <div class=\"card-text col\">{{carrier}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"error-message row\" *ngIf=\"modelErrorMsg\">\n            <small>{{modelErrorMsg}}</small>\n          </div>\n          <div class=\"row\" id=\"button-contain\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"goNext()\">Next</button>\n          </div>\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      \n      <div class=\"row\">\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n          <div class=\"collapse navbar-collapse flex-grow-1 text-left\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item col\">\n                <p><b>Sell</b></p>\n                <p>Resources</p>\n                <p>Resources</p>\n                <p>About</p>\n                <p>Contact Us</p>\n              </li>\n              <li class=\"nav-item col\">\n                <p><b>Resources</b></p>\n                <p>Resources</p>\n                <p>Resources</p>\n                <p>About</p>\n                <p>Contact Us</p>\n              </li>\n              <li class=\"nav-item col\">\n                <p><b>About Gadgetbank</b></p>\n                <p>Resources</p>\n                <p>About</p>\n                <p>Contact Us</p>\n              </li>\n              <li class=\"nav-item col\">\n                <p><b>Contact Us</b></p>\n                <p>Resources</p>\n                <p>Resources</p>\n                <p>About</p>\n                <p>Contact Us</p>\n              </li>\n              <li class=\"nav-item col\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper justo eget feugiat vestibulum. Fusce eget\n                dapibus metus, sed rutrum.</p>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
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



var SellComponent = /** @class */ (function () {
    function SellComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    SellComponent.prototype.ngOnInit = function () {
        this.productTitle = this._route['snapshot']['routeConfig']['path'];
        this.getProductsByTitle();
        this.model;
        this.size;
        this.carrier;
        this.getSession();
    };
    SellComponent.prototype.getProductsByTitle = function () {
        var _this = this;
        console.log(this.productTitle);
        this._httpService.getAllProductsLikeTitle(this.productTitle).subscribe(function (data) {
            console.log(data);
            _this.currentModels = data;
            _this.currentCategory = data[0]['category_id'];
            console.log(_this.currentModels);
            console.log(_this.currentCategory);
            _this.getProductSizes(_this.currentCategory);
        });
    };
    SellComponent.prototype.getProductSizes = function (category) {
        var _this = this;
        this._httpService.getSizesByCategory(category).subscribe(function (data) {
            _this.currentSizes = data;
            console.log(data);
            _this.getCarriersByCategory(category);
        });
    };
    SellComponent.prototype.getCarriersByCategory = function (category) {
        var _this = this;
        this._httpService.getCarriersByCategory(category).subscribe(function (data) {
            _this.currentCarriers = data;
        });
    };
    SellComponent.prototype.goNext = function () {
        if (this.model == null || this.size == null || this.carrier == null) {
            this.modelErrorMsg = "Please select all options for your product";
            return;
        }
        else {
            this.modelErrorMsg = null;
            console.log("passed");
            console.log(this.model);
            var string = this.model.split(" ");
            string = string[0].concat(string[1]);
            console.log(string);
            this._router.navigateByUrl("/" + this.model + "/" + this.size + "/" + this.carrier);
        }
    };
    SellComponent.prototype.getSession = function () {
        var _this = this;
        this._httpService.getSession().subscribe(function (data) {
            _this.session = data;
            console.log(data);
        });
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SellComponent);
    return SellComponent;
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