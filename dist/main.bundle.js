webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_client_edit_client_component__ = __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_client_details_client_details_component__ = __webpack_require__("../../../../../src/app/components/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_order_details_order_details_component__ = __webpack_require__("../../../../../src/app/components/order-details/order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_order_add_order_component__ = __webpack_require__("../../../../../src/app/components/add-order/add-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_add_order_admin_add_order_component__ = __webpack_require__("../../../../../src/app/components/admin-add-order/admin-add-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_register_guard__ = __webpack_require__("../../../../../src/app/guards/register.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_register_guard__["a" /* RegisterGuard */]] },
    { path: 'order/add', component: __WEBPACK_IMPORTED_MODULE_11__components_add_order_add_order_component__["a" /* AddOrderComponent */] },
    { path: 'order/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_order_details_order_details_component__["a" /* OrderDetailsComponent */] },
    { path: 'admin/order/add', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_add_order_admin_add_order_component__["a" /* AdminAddOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'client/add', component: __WEBPACK_IMPORTED_MODULE_5__components_add_client_add_client_component__["a" /* AddClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client/edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_edit_client_edit_client_component__["a" /* EditClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_client_details_client_details_component__["a" /* ClientDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_8__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__guards_register_guard__["a" /* RegisterGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_admin_guard__["a" /* AdminGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_edit_client_edit_client_component__ = __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_client_details_client_details_component__ = __webpack_require__("../../../../../src/app/components/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_add_order_add_order_component__ = __webpack_require__("../../../../../src/app/components/add-order/add-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_order_edit_order_component__ = __webpack_require__("../../../../../src/app/components/edit-order/edit-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/components/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_order_details_order_details_component__ = __webpack_require__("../../../../../src/app/components/order-details/order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_add_order_admin_add_order_component__ = __webpack_require__("../../../../../src/app/components/admin-add-order/admin-add-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__change_decimal_pipe__ = __webpack_require__("../../../../../src/app/change-decimal.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_add_item_dialog_add_item_dialog_component__ = __webpack_require__("../../../../../src/app/components/add-item-dialog/add-item-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_add_client_add_client_component__["a" /* AddClientComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_edit_client_edit_client_component__["a" /* EditClientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_client_details_client_details_component__["a" /* ClientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_add_order_add_order_component__["a" /* AddOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_edit_order_edit_order_component__["a" /* EditOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_order_details_order_details_component__["a" /* OrderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_admin_add_order_admin_add_order_component__["a" /* AdminAddOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_35__change_decimal_pipe__["a" /* ChangeDecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_36__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_add_item_dialog_add_item_dialog_component__["a" /* AddItemDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase, 'apollo1'),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["m" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__services_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_23__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_24__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_25__services_inventory_service__["a" /* InventoryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_37__components_add_item_dialog_add_item_dialog_component__["a" /* AddItemDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/change-decimal.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDecimalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangeDecimalPipe = /** @class */ (function () {
    function ChangeDecimalPipe() {
    }
    ChangeDecimalPipe.prototype.transform = function (value, args) {
        return value.replace(',', '.').substring(0, value.length - 3);
    };
    ChangeDecimalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'changeDecimal'
        })
    ], ChangeDecimalPipe);
    return ChangeDecimalPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n    text-align: center;\n    padding: 0!important;\n    background: rgba(0,0,0,0.6);\n  }\n  \n  .modal:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    margin-right: -4px; /* Adjusts for spacing */\n  }\n  \n  .modal-dialog {\n    display: inline-block;\n    text-align: left;\n    vertical-align: middle;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Dashboard\n    </a>\n  </div>\n  <div class=\"col-md-6\">\n\n  </div>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Add Client\n  </div>\n  <div class=\"card-body\">\n    <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" #clientFirstName=\"ngModel\" [ngClass]=\"{'is-invalid': clientFirstName.errors && clientFirstName.touched}\"\n          [(ngModel)]=\"client.firstName\" minlength=\"2\" required>\n        <div [hidden]=\"!clientFirstName.errors?.required\" class=\"invalid-feedback\">\n          First name required\n        </div>\n        <div [hidden]=\"!clientFirstName.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" #clientLastName=\"ngModel\" \n        [ngClass]=\"{'is-invalid': clientLastName.errors && clientLastName.touched}\"\n          [(ngModel)]=\"client.lastName\" minlength=\"2\" required>\n        <div [hidden]=\"!clientLastName.errors?.required\" class=\"invalid-feedback\">\n          Last name required\n        </div>\n        <div [hidden]=\"!clientLastName.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input \n              type=\"text\"\n              class=\"form-control\"\n              name=\"email\"\n              #clientEmail=\"ngModel\"\n              [ngClass]=\"{'is-invalid':clientEmail.errors && clientEmail.touched}\"\n              [(ngModel)]=\"client.email\"\n              pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n              required\n          >\n          <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">\n            Email required\n          </div>\n          <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">\n              Email is not valid\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"phone\">Phone</label>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            [ngClass]=\"{'is-invalid':clientPhone.errors && clientPhone.touched}\"\n            [(ngModel)]=\"client.phone\"\n            name=\"phone\"\n            #clientPhone = \"ngModel\"\n            minlength=\"10\"\n            required\n          >\n          <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">\n              Phone is required\n            </div>\n        \n            <div [hidden]=\"!clientPhone.errors?.minlength\" class=\"invalid-feedback\">\n                Must be at least 10 characters\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"balance\">Balance</label>\n            <input \n              type=\"number\"\n              class=\"form-control\"\n              [(ngModel)]=\"client.balance\"\n              name=\"balance\"\n              #clientBalance = \"ngModel\"\n              [disabled]=\"disableBalanceOnAdd\"\n            >\n          </div>\n\n        <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(flashMessage, clientService, router, settings) {
        this.flashMessage = flashMessage;
        this.clientService = clientService;
        this.router = router;
        this.settings = settings;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.disableBalanceOnAdd = this.settings.getSettings().disableBalanceOnAdd;
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            this.flashMessage.show("Please fill out the form correctly", {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            this.clientService.newClient(value);
            this.flashMessage.show("New Client Added", {
                cssClass: 'alert-success', timeout: 4000
            });
            //redirect
            this.router.navigate(['/']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('clientForm'),
        __metadata("design:type", Object)
    ], AddClientComponent.prototype, "form", void 0);
    AddClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__("../../../../../src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-item-dialog/add-item-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newItemButton{\n    width: 80%;\n    font-size: 100%;\n    position: center;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-item-dialog/add-item-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{selectedListTitle}}</h1>\n\n<mat-dialog-content>\n  <div class=\"container-fluid\" *ngIf=\"!selectionIsVisible && !completoIsVisible\">\n    <button class=\"btn btn-primary btn-lg btn-block m-2 p-2\" (click)=\"showSelection('seco')\">\n      <img src=\"assets/seco.svg\" class=\"icon\"> Seco </button>\n    <button class=\"btn btn-primary btn-lg btn-block m-2 mx-1 p-2\" (click)=\"showSelection('sopa')\">\n      <img src=\"assets/sopa.svg\" class=\"icon\"> Sopa </button>\n    <button class=\"btn btn-primary btn-lg btn-block  m-2 p-2 \" (click)=\"showSelection('bebiba')\">\n      <img src=\"assets/juice.svg\" class=\"icon\"> Bebiba </button>\n    <button class=\"btn btn-primary btn-lg btn-block m-2 p-2\" (click)=\"showCompleto()\">\n      <img src=\"assets/completo.svg\" class=\"icon\"> Completo </button>\n  </div>\n\n  <div *ngIf=\"selectionIsVisible\">\n\n    <div class=\"form-group row\">\n      <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">Cantidad</label>\n      <div class=\"col-sm-9\">\n        <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newLineItem.quantity\">\n          <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n        </select>\n      </div>\n    </div>\n\n    <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newLineItem.inventoryId\">\n      <option *ngFor=\"let x of selectedList\" value={{x.id}}>{{x.description}} ({{x.price | currency:'USD': 'symbol' | changeDecimal }})</option>\n    </select>\n    <br>\n\n    <h4>Total: {{newLineItem.quantity * getNewLineItemPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewItem()\">\n        <i class=\"fa fa-plus\"></i> Agregar Nuevo Item</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"completoIsVisible\">\n    <form>\n\n      <div class=\"form-group row\">\n        <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">Cantidad</label>\n        <div class=\"col-sm-9\">\n          <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newCompletoItem.quantity\">\n            <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">Seco</label>\n        <div class=\"col-sm-9\">\n          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.seco\">\n            <option *ngFor=\"let x of secoItems\" value={{x.description}}>{{x.description}} </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">Sopa</label>\n        <div class=\"col-sm-9\">\n          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.sopa\">\n            <option *ngFor=\"let x of sopaItems\" value={{x.description}}>{{x.description}} </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">Bebiba</label>\n        <div class=\"col-sm-9\">\n          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.bebiba\">\n            <option *ngFor=\"let x of bebibaItems\" value={{x.description}}>{{x.description}}</option>\n          </select>\n        </div>\n      </div>\n    </form>\n    <h4>Total: {{newCompletoItem.quantity * getNewCompletoPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewCompleto()\">\n        <i class=\"fa fa-plus\"></i>Agregar Nuevo Item</button>\n    </div>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-item-dialog/add-item-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AddItemDialogComponent = /** @class */ (function () {
    function AddItemDialogComponent(orderService, customerService, router, route, flashMessage, authService, inventoryService, dialogRef, data) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.inventoryService = inventoryService;
        this.dialogRef = dialogRef;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
        this.visible = false;
        this.visibleAnimate = false;
        this.totalPrice = 0;
        this.newLineItem = {
            inventoryId: '',
            quantity: 1,
            description: '',
            pricePerUnit: 0
        };
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
        this.statusOptions = ['Recibida', 'Aprobada', 'Rechazada', 'Lista', 'Enviada'];
        this.quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.selectedListTitle = data.selectedListTitle;
    }
    AddItemDialogComponent.prototype.save = function () {
        var data = {
            menuDelDia: "pizza"
        };
        this.dialogRef.close(data);
    };
    AddItemDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddItemDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusSelectionIsVisible = true;
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.email = auth.email;
            }
            //Get customer
            _this.customerService.getCustomer(_this.email).subscribe(function (customer) {
                if (customer != null) {
                    _this.isAdmin = customer.role == "admin" ? true : false;
                    _this.customer = customer;
                }
            });
        });
        //Get id from url 
        this.id = this.route.snapshot.params['id'];
        //this.ErrorMessageIsVisible = false;
        this.inventoryService.getInventoryItems().subscribe(function (inventoryItems) {
            _this.inventoryItems = inventoryItems;
        });
        this.inventoryService.getCompletos().subscribe(function (completos) {
            _this.completos = completos;
        });
        this.inventoryService.getSecos().subscribe(function (secos) {
            _this.secoItems = secos;
            _this.selectedList = _this.secoItems;
        });
        this.inventoryService.getSopas().subscribe(function (sopas) {
            _this.sopaItems = sopas;
        });
        this.inventoryService.getBebibas().subscribe(function (bebibas) {
            _this.bebibaItems = bebibas;
        });
        //Get order
        this.orderService.getOrder(this.id).subscribe(function (order) {
            if (order != null) {
                _this.order = order;
                _this.getTotalPrice();
                _this.getCustomerAddress(order.customerEmail);
            }
        });
    };
    AddItemDialogComponent.prototype.updateBalance = function () {
        this.orderService.updateOrder(this.order);
        this.flashMessage.show('Balance updated', {
            cssClass: 'alert-success', timeout: 4000
        });
    };
    AddItemDialogComponent.prototype.getCustomerAddress = function (email) {
        var _this = this;
        this.customerService.getCustomer(email).subscribe(function (customer) {
            if (customer != null) {
                _this.currentOrderEmail = customer.address;
            }
        });
    };
    AddItemDialogComponent.prototype.onDeleteClick = function () {
        if (confirm('Seguro que quieres borrarlo ?')) {
            this.orderService.deleteOrder(this.order);
            this.flashMessage.show('Order Removed', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    AddItemDialogComponent.prototype.onTest = function () {
        //this.order.lineItems.unshift({"inventoryId": '4', isComplete: true, quantity: 2});
        this.show();
        // $('#editModal').modal('show');
    };
    AddItemDialogComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.selectedListTitle = "Item Nuevo";
    };
    AddItemDialogComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.resetNewLineItem();
        this.selectionIsVisible = false;
        this.completoIsVisible = false;
        //this.selectedListTitle = "Nuevo Item";
    };
    AddItemDialogComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    AddItemDialogComponent.prototype.showSeco = function () {
        this.secoIsVisible = true;
        this.selectedList = this.sopaItems;
    };
    AddItemDialogComponent.prototype.showSopa = function () {
        this.sopaIsVisible = true;
    };
    AddItemDialogComponent.prototype.showBebiba = function () {
        this.bebibaIsVisible = true;
    };
    AddItemDialogComponent.prototype.showCompleto = function () {
        this.completoIsVisible = true;
        this.selectionIsVisible = false;
        this.selectedListTitle = "Almuerzo Completo";
    };
    AddItemDialogComponent.prototype.showSelection = function (type) {
        this.selectionIsVisible = true;
        switch (type) {
            case "sopa":
                this.selectedList = this.sopaItems;
                this.selectedListTitle = "Sopa";
                break;
            case "seco":
                this.selectedList = this.secoItems;
                this.selectedListTitle = "Seco";
                break;
            case "bebiba":
                this.selectedList = this.bebibaItems;
                this.selectedListTitle = "Bebiba";
                break;
        }
        this.resetNewLineItem();
    };
    AddItemDialogComponent.prototype.resetNewLineItem = function () {
        this.newLineItem = {
            'inventoryId': '',
            'quantity': 1,
            'description': '',
            'pricePerUnit': 0
        };
    };
    AddItemDialogComponent.prototype.resetCompleto = function () {
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
    };
    AddItemDialogComponent.prototype.addNewItem = function () {
        if (!this.newLineItem.inventoryId || this.newLineItem.quantity == 0) {
            return; //add error message
        }
        var inventoryItem = this.getNewLineInventoryItem();
        this.newLineItem.pricePerUnit = inventoryItem.price;
        this.newLineItem.description = inventoryItem.description;
        var data = {
            newLineItem: this.newLineItem
        };
        this.dialogRef.close(data);
    };
    AddItemDialogComponent.prototype.addNewCompleto = function () {
        if (!this.newCompletoItem.bebiba || !this.newCompletoItem.seco || !this.newCompletoItem.sopa) {
            return; //TODO Add error message
        }
        this.newLineItem.inventoryId = "completo";
        this.newLineItem.quantity = this.newCompletoItem.quantity;
        this.newLineItem.pricePerUnit = this.getNewCompletoPrice();
        this.newLineItem.description = this.newCompletoItem.seco + " | " + this.newCompletoItem.sopa + " | " + this.newCompletoItem.bebiba;
        var data = {
            newLineItem: this.newLineItem
        };
        this.dialogRef.close(data);
    };
    AddItemDialogComponent.prototype.getNewLineItemPrice = function () {
        var _this = this;
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
        return tempItem ? tempItem.price : 0;
    };
    AddItemDialogComponent.prototype.getNewCompletoPrice = function () {
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === 'completo';
        });
        return tempItem ? tempItem.price : 0;
    };
    AddItemDialogComponent.prototype.getNewLineInventoryItem = function () {
        var _this = this;
        return this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
    };
    AddItemDialogComponent.prototype.getTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        this.totalPrice = sum;
    };
    AddItemDialogComponent.prototype.deleteLineItem = function (index) {
        if (confirm('Seguro que quieres borrarlo?')) {
            this.order.lineItems.splice(index, 1);
            this.flashMessage.show('Item Eliminado', {
                cssClass: 'alert-success', timeout: 4000
            });
        }
        this.getTotalPrice();
    };
    AddItemDialogComponent.prototype.getOrderTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        return sum;
    };
    AddItemDialogComponent.prototype.submitOrder = function () {
        this.updateStatus();
        this.flashMessage.show('Orden actualizada', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
    };
    AddItemDialogComponent.prototype.updateStatus = function () {
        this.order.totalPrice = this.getOrderTotalPrice();
        if (this.order.status == 'Enviada') {
            this.order.timeEnviada = new Date();
        }
        if (this.order.status == 'Rechazada') {
            this.order.timeEnviada = '';
        }
        this.orderService.updateOrder(this.order);
        this.flashMessage.show('Estado actualizado', {
            cssClass: 'alert-success', timeout: 4000
        });
    };
    AddItemDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-add-item-dialog',
            template: __webpack_require__("../../../../../src/app/components/add-item-dialog/add-item-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-item-dialog/add-item-dialog.component.css")]
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_inventory_service__["a" /* InventoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatDialogRef */], Object])
    ], AddItemDialogComponent);
    return AddItemDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-order/add-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n    text-align: center;\n    padding: 0!important;\n    background: rgba(0,0,0,0.6);\n  }\n  \n  .modal:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    margin-right: -4px; /* Adjusts for spacing */\n  }\n  \n  .modal-dialog {\n    display: inline-block;\n    text-align: left;\n    vertical-align: middle;\n  }\n  \n  td{\n    text-align: center;\n    }\n  \n  th{\n    text-align: center;\n    }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-order/add-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i>\n        Regresar\n      </a>\n  \n    </div>\n  </div>\n  <hr>\n  <div class=\"card\">\n  \n    <h3 class=\"card-header\">Orden Nueva</h3>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"cold-md-8 col-sm-6\">\n          <h3 class=\"pull-left\">\n            Precio Total\n            <span [class.text-danger]=\"hasBalance\" [class.text-success]=\"!hasBalance\">\n              {{totalPrice | currency:'USD': 'symbol' | changeDecimal}}\n            </span>\n          </h3>\n        </div>\n      </div>\n      <hr>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n        <div class=\"clearfix\">\n            <form (submit)=\"updateStatus()\">\n              <div class=\"form-group\">\n                <label> <img src=\"assets/notepad.svg\" class=\"icon-sm\"> Nota / Instrucciones Especiales</label>\n                <textarea class=\"form-control\" name=\"note\" rows=\"3\" [(ngModel)]=\"order.note\"></textarea>\n              </div>\n            </form>\n          </div>\n        </li>\n      </ul>\n      <hr>\n      <h4>\n          <img src=\"assets/cart.svg\" class=\"icon\"> Items\n        <button class=\"btn btn-success btn-sm\" (click)=\"onTest()\"> <i class=\"fa fa-plus\"></i> Adicionar Item </button>\n      </h4>\n      <div style=\"overflow:scroll; max-height:400px;\">\n        <table class=\"table table-striped table-hover\" style='margin:auto; width:100%'>\n          <thead>\n            <tr>\n                <th>Descripción</th>\n                <th>Cantidad</th>\n                <th>Precio por Unidad</th>\n                <th>Precio Total</th>\n                <th>Borrar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let lineItem of order.lineItems; let i = index\">\n              <td>{{lineItem.description}}</td>\n              <td>{{lineItem.quantity}}</td>\n              <td>{{lineItem.pricePerUnit | currency:'USD': 'symbol' | changeDecimal }}</td>\n              <td>{{lineItem.quantity * lineItem.pricePerUnit | currency:'USD': 'symbol' | changeDecimal }}</td>\n              <td>\n                <a class='text-center' (click)=\"deleteLineItem(i) \" class=\"btn btn-secondary btn-sm\">\n                  <i class=\"fa fa-trash\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n  \n  \n    </div>\n    <a (click)=\"submitOrder()\" class=\"btn btn-lg btn-warning\">\n        <i class=\"fa fa-plus\"></i> Crear Nueva Orden\n      </a>\n    <hr>\n  </div>\n  \n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content modal-lg\">\n          <br>\n          <div class=\"modal-header\">\n    \n            <h3>Adicionar {{selectedListTitle}}</h3>\n          </div>\n          <div class=\"modal-body\">\n    \n            <div *ngIf=\"!selectionIsVisible && !completoIsVisible \">\n                <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('seco')\">\n                  <img src=\"assets/seco.svg\" class=\"icon\"> Seco </button>\n                <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('sopa')\">\n                  <img src=\"assets/sopa.svg\" class=\"icon\"> Sopa </button>\n                <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('bebiba')\">\n                  <img src=\"assets/juice.svg\" class=\"icon\"> Bebiba </button>\n                <button class=\"btn btn-primary btn-lg\" (click)=\"showCompleto()\">\n                  <img src=\"assets/completo.svg\" class=\"icon\"> Completo </button>\n              </div>\n              <div *ngIf=\"selectionIsVisible\">\n  \n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n                    <div class=\"col-sm-10\">\n                      <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newLineItem.quantity\">\n                        <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n                      </select>\n                    </div>\n                  </div>\n        \n                  <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newLineItem.inventoryId\">\n                    <option *ngFor=\"let x of selectedList\" value={{x.id}}>{{x.description}} ({{x.price | currency:'USD': 'symbol' | changeDecimal }})</option>\n                  </select>\n                  <br>\n        \n                  <h4>Total: {{newLineItem.quantity * getNewLineItemPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewItem()\">\n                      <i class=\"fa fa-plus\"></i> Agregar Nuevo Item</button>\n                  </div>\n                </div>\n    \n           \n            \n                <div *ngIf=\"completoIsVisible\">\n                    <form>\n          \n                      <div class=\"form-group row\">\n                        <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n                        <div class=\"col-sm-10\">\n                          <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newCompletoItem.quantity\">\n                            <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Seco</label>\n                        <div class=\"col-sm-10\">\n                          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.seco\">\n                            <option *ngFor=\"let x of secoItems\" value={{x.description}}>{{x.description}} </option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Sopa</label>\n                        <div class=\"col-sm-10\">\n                          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.sopa\">\n                            <option *ngFor=\"let x of sopaItems\" value={{x.description}}>{{x.description}} </option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Bebiba</label>\n                        <div class=\"col-sm-10\">\n                          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.bebiba\">\n                            <option *ngFor=\"let x of bebibaItems\" value={{x.description}}>{{x.description}}</option>\n                          </select>\n                        </div>\n                      </div>\n                    </form>\n                    <h4>Total: {{newCompletoItem.quantity * getNewCompletoPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n                      <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewCompleto()\">\n                        <i class=\"fa fa-plus\"></i>Agregar Nuevo Item</button>\n                    </div>\n                  </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/add-order/add-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(orderService, customerService, router, route, flashMessage, authService, inventoryService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.inventoryService = inventoryService;
        this.order = {
            id: '',
            customerEmail: '',
            status: '',
            lineItems: [],
            timeReceived: '',
            timeEnviada: '',
            totalPrice: 0,
            note: '',
            customerName: ''
        };
        this.myControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]();
        this.quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
        this.visible = false;
        this.visibleAnimate = false;
        this.totalPrice = 0;
        this.newLineItem = {
            inventoryId: '',
            quantity: 1,
            description: '',
            pricePerUnit: 0
        };
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
        this.statusOptions = ['Recibida', 'Aprobado', 'Rechazada', 'Lista', 'Enviada'];
    }
    AddOrderComponent.prototype.filter = function (val) {
        return this.customers.filter(function (customer) {
            //customer.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
            return customer.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AddOrderComponent.prototype.ngOnInit = function () {
        //his.order.customerEmail = this.filteredCustomers[0];
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) {
            _this.customers = customers;
            _this.filteredCustomers = _this.myControl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
            _this.filteredCustomers.subscribe(function (customers) {
                if (customers.length == _this.customers.length) {
                    _this.order.customerName = "No Hay Ningun Cliente Selecionado";
                }
                else if (customers.length > 0) {
                    _this.order.customerName = customers[0].name;
                }
                else {
                    _this.order.customerName = "Cliente Invalido";
                }
            });
        });
        this.statusSelectionIsVisible = true;
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.email = auth.email;
            }
            //Get customer
            _this.customerService.getCustomer(_this.email).subscribe(function (customer) {
                if (customer != null) {
                    _this.customerName = customer.name;
                    _this.isAdmin = customer.role == "admin" ? true : false;
                }
            });
        });
        this.inventoryService.getInventoryItems().subscribe(function (inventoryItems) {
            _this.inventoryItems = inventoryItems;
        });
        this.inventoryService.getCompletos().subscribe(function (completos) {
            _this.completos = completos;
        });
        this.inventoryService.getSecos().subscribe(function (secos) {
            _this.secoItems = secos;
            _this.selectedList = _this.secoItems;
        });
        this.inventoryService.getSopas().subscribe(function (sopas) {
            _this.sopaItems = sopas;
        });
        this.inventoryService.getBebibas().subscribe(function (bebibas) {
            _this.bebibaItems = bebibas;
        });
    };
    AddOrderComponent.prototype.onDeleteClick = function () {
        if (confirm('Seguro que quieres borrarlo ?')) {
            this.orderService.deleteOrder(this.order);
            this.flashMessage.show('Order Eliminada', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    AddOrderComponent.prototype.onTest = function () {
        //this.order.lineItems.unshift({"inventoryId": '4', isComplete: true, quantity: 2});
        this.show();
        // $('#editModal').modal('show');
    };
    AddOrderComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.selectedListTitle = "Item Nuevo";
    };
    AddOrderComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.resetNewLineItem();
        this.selectionIsVisible = false;
        this.completoIsVisible = false;
    };
    AddOrderComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    AddOrderComponent.prototype.showSeco = function () {
        this.secoIsVisible = true;
        this.selectedList = this.sopaItems;
    };
    AddOrderComponent.prototype.showSopa = function () {
        this.sopaIsVisible = true;
    };
    AddOrderComponent.prototype.showBebiba = function () {
        this.bebibaIsVisible = true;
    };
    AddOrderComponent.prototype.showCompleto = function () {
        this.completoIsVisible = true;
        this.selectionIsVisible = false;
        this.selectedListTitle = "Almuerzo Completo";
    };
    AddOrderComponent.prototype.showSelection = function (type) {
        this.selectionIsVisible = true;
        switch (type) {
            case "sopa":
                this.selectedList = this.sopaItems;
                this.selectedListTitle = "Sopa";
                break;
            case "seco":
                this.selectedList = this.secoItems;
                this.selectedListTitle = "Seco";
                break;
            case "bebiba":
                this.selectedList = this.bebibaItems;
                this.selectedListTitle = "Bebiba";
                break;
        }
        this.resetNewLineItem();
    };
    AddOrderComponent.prototype.resetNewLineItem = function () {
        this.newLineItem = {
            'inventoryId': '',
            'quantity': 1,
            'description': '',
            'pricePerUnit': 0
        };
    };
    AddOrderComponent.prototype.resetCompleto = function () {
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
    };
    AddOrderComponent.prototype.addNewItem = function () {
        if (!this.newLineItem.inventoryId || this.newLineItem.quantity == 0) {
            return; //add error message
        }
        var inventoryItem = this.getNewLineInventoryItem();
        this.newLineItem.pricePerUnit = inventoryItem.price;
        this.newLineItem.description = inventoryItem.description;
        this.order.lineItems.push(this.newLineItem);
        this.flashMessage.show("Item nuevo agregado", {
            cssClass: 'alert-success', timeout: 4000
        });
        this.hide();
        this.resetNewLineItem();
        this.getTotalPrice();
        this.selectedListTitle = "Item Nuevo";
    };
    AddOrderComponent.prototype.addNewCompleto = function () {
        if (!this.newCompletoItem.bebiba || !this.newCompletoItem.seco || !this.newCompletoItem.sopa) {
            return; //TODO Add error message
        }
        this.newLineItem.inventoryId = "completo";
        this.newLineItem.quantity = this.newCompletoItem.quantity;
        this.newLineItem.pricePerUnit = this.getNewCompletoPrice();
        this.newLineItem.description = this.newCompletoItem.seco + " | " + this.newCompletoItem.sopa + " | " + this.newCompletoItem.bebiba;
        if (this.newLineItem.quantity > 0) {
            this.order.lineItems.push(this.newLineItem);
            this.flashMessage.show("Item nuevo agregado", {
                cssClass: 'alert-success', timeout: 4000
            });
            this.hide();
            this.getTotalPrice();
            this.resetCompleto();
        }
    };
    AddOrderComponent.prototype.getNewLineItemPrice = function () {
        var _this = this;
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
        return tempItem ? tempItem.price : 0;
    };
    AddOrderComponent.prototype.getNewCompletoPrice = function () {
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === 'completo';
        });
        return tempItem ? tempItem.price : 0;
    };
    AddOrderComponent.prototype.getNewLineInventoryItem = function () {
        var _this = this;
        return this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
    };
    AddOrderComponent.prototype.getTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        this.totalPrice = sum;
    };
    AddOrderComponent.prototype.deleteLineItem = function (index) {
        if (confirm('Seguro que quieres borrarlo?')) {
            this.order.lineItems.splice(index, 1);
            this.flashMessage.show('Item Eliminado', {
                cssClass: 'alert-success', timeout: 4000
            });
        }
        this.getTotalPrice();
    };
    AddOrderComponent.prototype.getOrderTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        return sum;
    };
    AddOrderComponent.prototype.submitOrder = function () {
        this.order.customerName = this.customerName;
        this.order.customerEmail = this.email;
        if (this.order.lineItems.length == 0) {
            this.flashMessage.show('No hay ningun items', {
                cssClass: 'alert-danger', timeout: 4000
            });
            return;
        }
        if (!confirm("Estas seguro que quieres crear esta orden?"))
            return;
        this.order.totalPrice = this.getOrderTotalPrice();
        this.order.timeReceived = new Date();
        this.order.status = 'Recibida'; //use enum
        this.orderService.newOrder(this.order);
        this.flashMessage.show('Nueva Orden Creada', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
    };
    AddOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__("../../../../../src/app/components/add-order/add-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-order/add-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_inventory_service__["a" /* InventoryService */]])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-add-order/admin-add-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  text-align: center;\n  padding: 0!important;\n  background: rgba(0,0,0,0.6);\n}\n\n.modal:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -4px; /* Adjusts for spacing */\n  \n}\n\n.modal-dialog {\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n  min-width: 500px;\n  \n}\n\n/* ---------------------------------------------------------\n Author's styles\n ---------------------------------------------------------*/\n\n/* Remove the navbar's default margin-bottom and rounded borders */\n\n.navbar {\n  margin-bottom: 0;\n  border-radius: 0;\n}\n\n/* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n\n.row.content {height: 1030.5px}\n\n/* Set gray background color and 100% height */\n\n.sidenav {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #f1f1f1;\n  height: 100%;\n}\n\n/* On small screens, set height to 'auto' for sidenav and grid */\n\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px;\n  }\n  .row.content {height:auto;}\n}\n\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  width: 15%;\n}\n\n.editbutton {\n  background-color: #222222;\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n/*  th {\n  background-color: #4CAF50;\n  color: white;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  border: 1px solid black\n}*/\n\n.table > tbody > tr > td {\n vertical-align: middle;\n}\n\ninput[type=\"password\"] {\ncolor: #222222;\n}\n\nul.a {\nlist-style-type: none;\nmargin: 0;\npadding: 0;\nborder: 1px solid #555;\n}\n\nli.a {\ndisplay: block;\ncolor: #000;\npadding: 8px 16px;\ntext-decoration: none;\ntext-align: center;\nborder-bottom: 1px solid #555;\n}\n\nli.a:last-child {\nborder-bottom: none;\n}\n\n/* ---------------------------------------------------------\n Print styles\n ---------------------------------------------------------*/\n\n@media print {\n  * {\n    color:#000 !important;\n    -webkit-box-shadow:none !important;\n            box-shadow:none !important;\n    text-shadow:none !important;\n    background:transparent !important;\n  }\n  html { background-color:#fff; }\n  /* Hide navigation */\n  nav { display:none; }\n\n  /* Show link destinations in brackets after the link text */\n  a[href]:after { content: \" (\" attr(href) \") \"; }\n  a[href] {\n    font-weight:bold;\n    text-decoration:underline;\n    color:#06c;\n    border:none;\n  }\n  /* Don't show link destinations for JavaScript or internal links */\n  a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after { content:\"\"; }\n\n  /* Show abbr title value in brackets after the text */\n  abbr[title]:after { content: \" (\" attr(title) \")\"; }\n\n  figure {\n    margin-bottom:1em;\n    overflow:hidden;\n  }\n\n  figure img { border:1px solid #000; }\n}\n\n.acknowledge{\n  color: #2780e3;\n}\n\n/*Night Mode*/\n\n.night-mode{\n  background-color: black !important;;\n  color: white !important;;\n}\n\n.cat-holder.night-mode{\n  background-color: black; /*#4f535d */\n  border-style: solid;\n  border-color: white;\n}\n\n.panel-heading.night-mode{\n  background-color: #454545;\n  color: inherit;\n}\n\n.fields.night-mode{\n  background-color: #454545;\n  color: white;\n  border-style: solid;\n  border-color: white;\n}\n\n.password.night-mode{\n  border-style: solid;\n  border-color: white;\n}\n\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n  background-color: #2e82f4;\n}\n\n.table-striped>tbody>tr:nth-child(odd):hover> td{\n  background-color: #2e82f4;\n}\n\n.night-mode.table-striped>tbody>tr:nth-child(odd):hover> td{\n  background-color: #2e82f4;\n}\n\n.night-mode.table-striped>tbody>tr:nth-child(odd)>td,\ntr.found {\n  background-color:#454545;\n}\n\n.col-sm-2.night-mode{\nbackground-color:#454545;\n}\n\n#night-mode{\n  background-color: black;\n}\n\n.ui-grid-row:nth-child(even) .ui-grid-cell {\nbackground-color: #454545 !important;;\ncolor: white !important;\n\n}\n\n.ui-grid-row:nth-child(odd) .ui-grid-cell {\nbackground-color: black !important;\ncolor: white !important;\n}\n\n.ui-grid-header-canvas{\n  background-color: black;\n}\n\n.ui-grid-top-panel{\n  color: white;\n}\n\n.ui-grid-row-selected.ui-grid-row:nth-child(odd) .ui-grid-cell.ui-grid-cell-focus,\n.ui-grid-row-selected.ui-grid-row:nth-child(even) .ui-grid-cell.ui-grid-cell-focus {\noutline: 0 !important;\nbackground-color: #2e82f4 !important;\n}\n\n.ui-grid-row-selected.ui-grid-row:nth-child(odd):hover .ui-grid-cell,\n.ui-grid-row-selected.ui-grid-row:nth-child(even):hover .ui-grid-cell {\ncolor: #000 !important;\nbackground-color: #2e82f4 !important;\n}\n\n.ui-grid-column-menu {\ncolor: white !important;\nbackground-color: black !important;\n}\n\n.ui-grid-filter-input.ui-grid-filter-input-0{\ncolor: white !important;\nbackground-color: black !important;\n}\n\n.ui-grid-menu-item{\ncolor: white !important;\nbackground-color: black !important;\n}\n\n.ui-grid-icon-menu{\ncolor: white !important;\nbackground-color: black !important;\n}\n\n.ui-grid-menu-button{\ncolor: white !important;\nbackground-color: black !important;\n}\n\n.ui-grid-selection-row-header-buttons{\ncolor: white !important;\n}\n\n.glyphicon-question-sign{\nfont-size: 25px;\n}\n\n.glyphicon-download{\nfont-size: 25px;\nmargin-left: 10px;\n}\n\n.popover{\n  max-width: 100%; /* Max Width of the popover (depending on the container!) */\n}\n\n.icon{\nwidth:40px; \nheight:auto;\n}\n\n.icon-sm{\nwidth:20px; \nheight:auto;\n}\n\ntd{\ntext-align: center;\n}\n\nth{\ntext-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-add-order/admin-add-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i>\n        Regresar\n      </a>\n  \n    </div>\n  </div>\n  <hr>\n\n  <div class=\"card\">\n\n    \n  \n    <h3 class=\"card-header\">Orden Nueva para el Cliente: <b>{{order.customerName}}</b></h3>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"cold-md-8 col-sm-6\">\n            <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input type=\"text\" placeholder=\"Escoger Cliente\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n                  <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let customer of filteredCustomers | async\"  [(ngModel)]=\"order.customerName\" [ngModelOptions]=\"{standalone:true}\" [value]=\"customer.name\">\n                      {{ customer.name }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </form>\n              <hr>\n\n          <h3 class=\"pull-left\">\n            Precio Total\n            <span [class.text-danger]=\"hasBalance\" [class.text-success]=\"!hasBalance\">\n              {{totalPrice | currency:'USD': 'symbol' | changeDecimal}}\n            </span>\n          </h3>\n        </div>\n      </div>\n      <hr>\n        <div class=\"clearfix\">\n            <form (submit)=\"updateStatus()\">\n              <div class=\"form-group\">                \n                  <label> <img src=\"assets/notepad.svg\" class=\"icon-sm\"> Nota / Instrucciones Especiales</label>\n                <textarea class=\"form-control\" name=\"note\" rows=\"3\" [(ngModel)]=\"order.note\"></textarea>\n              </div>\n            </form>\n          </div>\n      <hr>\n      <h4>\n          <img src=\"assets/cart.svg\" class=\"icon\"> Items\n        <button class=\"btn btn-success btn-sm\" (click)=\"onTest()\"> <i class=\"fa fa-plus\"></i> Adicionar Item </button>\n      </h4>\n      <div style=\"overflow:scroll; max-height:400px;\">\n        <table class=\"table table-striped table-hover\" style='margin:auto; width:100%'>\n          <thead>\n            <tr>\n                <th>Descripción</th>\n                <th>Cantidad</th>\n                <th>Precio por Unidad</th>\n                <th>Precio Total</th>\n                <th>Borrar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let lineItem of order.lineItems; let i = index\">\n              <td>{{lineItem.description}}</td>\n              <td>{{lineItem.quantity}}</td>\n              <td>{{lineItem.pricePerUnit | currency:'USD': 'symbol' | changeDecimal }}</td>\n              <td>{{lineItem.quantity * lineItem.pricePerUnit | currency:'USD': 'symbol' | changeDecimal }}</td>\n              <td>\n                <a class='text-center' (click)=\"deleteLineItem(i) \" class=\"btn btn-secondary btn-sm\">\n                  <i class=\"fa fa-trash\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n  \n  \n    </div>\n    <a (click)=\"submitOrder()\" class=\"btn btn-lg btn-warning\">\n        <i class=\"fa fa-plus\"></i> Crear Nueva Orden\n      </a>\n    <hr>\n  </div>\n  \n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content modal-lg\">\n        <br>\n        <div class=\"modal-header\">\n  \n          <h3>Adicionar {{selectedListTitle}}</h3>\n        </div>\n        <div class=\"modal-body\">\n  \n          <div *ngIf=\"!selectionIsVisible && !completoIsVisible \">\n              <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('seco')\">\n                <img src=\"assets/seco.svg\" class=\"icon\"> Seco </button>\n              <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('sopa')\">\n                <img src=\"assets/sopa.svg\" class=\"icon\"> Sopa </button>\n              <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('bebiba')\">\n                <img src=\"assets/juice.svg\" class=\"icon\"> Bebiba </button>\n              <button class=\"btn btn-primary btn-lg\" (click)=\"showCompleto()\">\n                <img src=\"assets/completo.svg\" class=\"icon\"> Completo </button>\n            </div>\n            <div *ngIf=\"selectionIsVisible\">\n\n                <div class=\"form-group row\">\n                  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n                  <div class=\"col-sm-10\">\n                    <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newLineItem.quantity\">\n                      <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n                    </select>\n                  </div>\n                </div>\n      \n                <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newLineItem.inventoryId\">\n                  <option *ngFor=\"let x of selectedList\" value={{x.id}}>{{x.description}} ({{x.price | currency:'USD': 'symbol' | changeDecimal }})</option>\n                </select>\n                <br>\n      \n                <h4>Total: {{newLineItem.quantity * getNewLineItemPrice() | currency:'USD': 'symbol' | changeDecimal}}</h4>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewItem()\">\n                    <i class=\"fa fa-plus\"></i> Agregar Nuevo Item</button>\n                </div>\n              </div>\n                      \n              <div *ngIf=\"completoIsVisible\">\n                  <form>       \n                    <div class=\"form-group row\">\n                      <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n                      <div class=\"col-sm-10\">\n                        <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newCompletoItem.quantity\">\n                          <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Seco</label>\n                      <div class=\"col-sm-10\">\n                        <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.seco\">\n                          <option *ngFor=\"let x of secoItems\" value={{x.description}}>{{x.description}} </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Sopa</label>\n                      <div class=\"col-sm-10\">\n                        <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.sopa\">\n                          <option *ngFor=\"let x of sopaItems\" value={{x.description}}>{{x.description}} </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Bebiba</label>\n                      <div class=\"col-sm-10\">\n                        <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.bebiba\">\n                          <option *ngFor=\"let x of bebibaItems\" value={{x.description}}>{{x.description}}</option>\n                        </select>\n                      </div>\n                    </div>\n                  </form>\n                  <h4>Total: {{newCompletoItem.quantity * getNewCompletoPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewCompleto()\">\n                      <i class=\"fa fa-plus\"></i>Agregar Nuevo Item</button>\n                  </div>\n                </div> \n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-add-order/admin-add-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AdminAddOrderComponent = /** @class */ (function () {
    function AdminAddOrderComponent(orderService, customerService, router, route, flashMessage, authService, inventoryService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.inventoryService = inventoryService;
        this.order = {
            id: '',
            customerEmail: '',
            status: '',
            lineItems: [],
            timeReceived: '',
            timeEnviada: '',
            totalPrice: 0,
            note: '',
            customerName: ''
        };
        this.myControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]();
        this.quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
        this.visible = false;
        this.visibleAnimate = false;
        this.totalPrice = 0;
        this.newLineItem = {
            inventoryId: '',
            quantity: 1,
            description: '',
            pricePerUnit: 0
        };
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
        this.statusOptions = ['Recibida', 'Aprobado', 'Rechazada', 'Lista', 'Enviada'];
    }
    AdminAddOrderComponent.prototype.filter = function (val) {
        return this.customers.filter(function (customer) {
            //customer.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
            return customer.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    AdminAddOrderComponent.prototype.ngOnInit = function () {
        //his.order.customerEmail = this.filteredCustomers[0];
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) {
            _this.customers = customers;
            _this.filteredCustomers = _this.myControl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
            _this.filteredCustomers.subscribe(function (customers) {
                if (customers.length == _this.customers.length) {
                    _this.order.customerName = "No Hay Ningun Cliente Selecionado";
                }
                else if (customers.length > 0) {
                    _this.order.customerName = customers[0].name;
                }
                else {
                    _this.order.customerName = "Cliente Invalido";
                }
            });
        });
        this.statusSelectionIsVisible = true;
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.email = auth.email;
            }
            //Get customer
            _this.customerService.getCustomer(_this.email).subscribe(function (customer) {
                if (customer != null) {
                    _this.customerName = customer.name;
                    _this.isAdmin = customer.role == "admin" ? true : false;
                }
            });
        });
        this.inventoryService.getInventoryItems().subscribe(function (inventoryItems) {
            _this.inventoryItems = inventoryItems;
        });
        this.inventoryService.getCompletos().subscribe(function (completos) {
            _this.completos = completos;
        });
        this.inventoryService.getSecos().subscribe(function (secos) {
            _this.secoItems = secos;
            _this.selectedList = _this.secoItems;
        });
        this.inventoryService.getSopas().subscribe(function (sopas) {
            _this.sopaItems = sopas;
        });
        this.inventoryService.getBebibas().subscribe(function (bebibas) {
            _this.bebibaItems = bebibas;
        });
    };
    AdminAddOrderComponent.prototype.onDeleteClick = function () {
        if (confirm('Seguro que quieres borrarlo ?')) {
            this.orderService.deleteOrder(this.order);
            this.flashMessage.show('Order Eliminada', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    AdminAddOrderComponent.prototype.onTest = function () {
        //this.order.lineItems.unshift({"inventoryId": '4', isComplete: true, quantity: 2});
        this.show();
        // $('#editModal').modal('show');
    };
    AdminAddOrderComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.selectedListTitle = "Item Nuevo";
    };
    AdminAddOrderComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.resetNewLineItem();
        this.selectionIsVisible = false;
        this.completoIsVisible = false;
    };
    AdminAddOrderComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    AdminAddOrderComponent.prototype.showSeco = function () {
        this.secoIsVisible = true;
        this.selectedList = this.sopaItems;
    };
    AdminAddOrderComponent.prototype.showSopa = function () {
        this.sopaIsVisible = true;
    };
    AdminAddOrderComponent.prototype.showBebiba = function () {
        this.bebibaIsVisible = true;
    };
    AdminAddOrderComponent.prototype.showCompleto = function () {
        this.completoIsVisible = true;
        this.selectionIsVisible = false;
        this.selectedListTitle = "Almuerzo Completo";
    };
    AdminAddOrderComponent.prototype.showSelection = function (type) {
        this.selectionIsVisible = true;
        switch (type) {
            case "sopa":
                this.selectedList = this.sopaItems;
                this.selectedListTitle = "Sopa";
                break;
            case "seco":
                this.selectedList = this.secoItems;
                this.selectedListTitle = "Seco";
                break;
            case "bebiba":
                this.selectedList = this.bebibaItems;
                this.selectedListTitle = "Bebiba";
                break;
        }
        this.resetNewLineItem();
    };
    AdminAddOrderComponent.prototype.resetNewLineItem = function () {
        this.newLineItem = {
            'inventoryId': '',
            'quantity': 1,
            'description': '',
            'pricePerUnit': 0
        };
    };
    AdminAddOrderComponent.prototype.resetCompleto = function () {
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
    };
    AdminAddOrderComponent.prototype.addNewItem = function () {
        if (!this.newLineItem.inventoryId || this.newLineItem.quantity == 0) {
            return; //add error message
        }
        var inventoryItem = this.getNewLineInventoryItem();
        this.newLineItem.pricePerUnit = inventoryItem.price;
        this.newLineItem.description = inventoryItem.description;
        this.order.lineItems.push(this.newLineItem);
        this.flashMessage.show("Item nuevo agregado", {
            cssClass: 'alert-success', timeout: 4000
        });
        this.hide();
        this.resetNewLineItem();
        this.getTotalPrice();
        this.selectedListTitle = "Item Nuevo";
    };
    AdminAddOrderComponent.prototype.addNewCompleto = function () {
        if (!this.newCompletoItem.bebiba || !this.newCompletoItem.seco || !this.newCompletoItem.sopa) {
            return; //TODO Add error message
        }
        this.newLineItem.inventoryId = "completo";
        this.newLineItem.quantity = this.newCompletoItem.quantity;
        this.newLineItem.pricePerUnit = this.getNewCompletoPrice();
        this.newLineItem.description = this.newCompletoItem.seco + " | " + this.newCompletoItem.sopa + " | " + this.newCompletoItem.bebiba;
        if (this.newLineItem.quantity > 0) {
            this.order.lineItems.push(this.newLineItem);
            this.flashMessage.show("Item nuevo agregado", {
                cssClass: 'alert-success', timeout: 4000
            });
            this.hide();
            this.getTotalPrice();
            this.resetCompleto();
        }
    };
    AdminAddOrderComponent.prototype.getNewLineItemPrice = function () {
        var _this = this;
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
        return tempItem ? tempItem.price : 0;
    };
    AdminAddOrderComponent.prototype.getNewCompletoPrice = function () {
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === 'completo';
        });
        return tempItem ? tempItem.price : 0;
    };
    AdminAddOrderComponent.prototype.getNewLineInventoryItem = function () {
        var _this = this;
        return this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
    };
    AdminAddOrderComponent.prototype.getTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        this.totalPrice = sum;
    };
    AdminAddOrderComponent.prototype.deleteLineItem = function (index) {
        if (confirm('Seguro que quieres borrarlo?')) {
            this.order.lineItems.splice(index, 1);
            this.flashMessage.show('Item Eliminado', {
                cssClass: 'alert-success', timeout: 4000
            });
        }
        this.getTotalPrice();
    };
    AdminAddOrderComponent.prototype.getOrderTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        return sum;
    };
    AdminAddOrderComponent.prototype.submitOrder = function () {
        var _this = this;
        if (this.order.customerName == "Cliente Invalido" || this.order.customerName == "No Hay Ningun Cliente Selecionado") {
            this.flashMessage.show('Cliente no existe', {
                cssClass: 'alert-danger', timeout: 4000
            });
            return;
        }
        var tempCustomer = this.customers.find(function (customer) {
            return customer.name === _this.order.customerName;
        });
        if (!tempCustomer) {
            this.flashMessage.show('Cliente no existe', {
                cssClass: 'alert-danger', timeout: 4000
            });
            return;
        }
        this.order.customerEmail = tempCustomer.id;
        if (this.order.lineItems.length == 0) {
            this.flashMessage.show('No hay ningun items', {
                cssClass: 'alert-danger', timeout: 4000
            });
            return;
        }
        if (!confirm("Estas seguro que quieres crear esta orden?"))
            return;
        this.order.totalPrice = this.getOrderTotalPrice();
        this.order.timeReceived = new Date();
        this.order.status = 'Recibida'; //use enum
        this.orderService.newOrder(this.order);
        this.flashMessage.show('Orden actualizada', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
    };
    AdminAddOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-add-order',
            template: __webpack_require__("../../../../../src/app/components/admin-add-order/admin-add-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-add-order/admin-add-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_inventory_service__["a" /* InventoryService */]])
    ], AdminAddOrderComponent);
    return AdminAddOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n      <app-admin-orders></app-admin-orders>\n  </div>\n  <div class=\"col-md-2\">\n    <app-sidebar></app-sidebar>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-orders works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__("../../../../../src/app/components/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink = \"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i>\n      Back to Dashboard\n    </a>\n\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"btn-group pull-right\">\n      <a routerLink=\"/client/edit/{{ id }}\" class=\"btn btn-dark\">\n        Edit\n      </a>\n      <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">\n        Delete\n      </button>\n    </div>\n    </div>\n</div>\n<hr>\n<div *ngIf=\"client\" class = \"card\">\n  <h3 class=\"card-header\">{{client.firstName}} {{client.lastName}}</h3>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"cold-md-8 col-sm-6\">\n        <h4>Client ID: {{client.id}}</h4>\n\n      </div>\n      <div class=\"cold-md-8 col-sm-6\">\n        <h3 class=\"pull-right\">\n          Balance\n          <span \n          [class.text-danger]=\"hasBalance\" \n          [class.text-success]=\"!hasBalance\"\n          >\n          {{client.balance | currency:'USD': 'symbol' | changeDecimal}}\n        </span>\n        <small>\n          <a (click)=\"showBalanceUpdateInput = !showBalanceInput\">\n            <i class=\"fa fa-pencil\"></i>\n          </a>\n        </small>\n        </h3>\n        <div class=\"clearfix\">\n          <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance()\">\n          <div class=\"input-group\">\n            <input type=\"text\" name=\"balance\" class=\"form-control\" [(ngModel)]=\"client.balance\">\n            <span class=\"input-group-btn\">\n              <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n            </span>\n          </div>\n          </form>\n        </div>\n        </div>\n    </div>\n    <hr>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"> Contact Email: {{client.email}}</li>\n      <li class=\"list-group-item\"> Contact Phone: {{client.phone}}</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessage) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get id from url 
        this.id = this.route.snapshot.params['id'];
        //Get client
        this.clientService.getClient(this.id).subscribe(function (client) {
            if (client != null) {
                if (client.balance > 0) {
                    _this.hasBalance = true;
                }
                _this.client = client;
            }
        });
    };
    ClientDetailsComponent.prototype.updateBalance = function () {
        this.clientService.updateClient(this.client);
        this.flashMessage.show('Balance updated', {
            cssClass: 'alert-success', timeout: 4000
        });
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm('Are you sure?')) {
            this.clientService.deleteClient(this.client);
            this.flashMessage.show('Client Removed', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    ClientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__("../../../../../src/app/components/client-details/client-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client-details/client-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n      <app-orders></app-orders>\n  </div>\n  <div class=\"col-md-2\">\n    <app-sidebar></app-sidebar>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/client/{{ id }}\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Client\n      </a>\n    </div>\n    <div class=\"col-md-6\">\n  \n    </div>\n  </div>\n  \n  \n  <div class=\"card\">\n    <div class=\"card-header\">\n      Edit Client\n    </div>\n    <div class=\"card-body\">\n      <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"firstName\" #clientFirstName=\"ngModel\" [ngClass]=\"{'is-invalid': clientFirstName.errors && clientFirstName.touched}\"\n            [(ngModel)]=\"client.firstName\" minlength=\"2\" required>\n          <div [hidden]=\"!clientFirstName.errors?.required\" class=\"invalid-feedback\">\n            First name required\n          </div>\n          <div [hidden]=\"!clientFirstName.errors?.minlength\" class=\"invalid-feedback\">\n            Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastName\" #clientLastName=\"ngModel\" \n          [ngClass]=\"{'is-invalid': clientLastName.errors && clientLastName.touched}\"\n            [(ngModel)]=\"client.lastName\" minlength=\"2\" required>\n          <div [hidden]=\"!clientLastName.errors?.required\" class=\"invalid-feedback\">\n            Last name required\n          </div>\n          <div [hidden]=\"!clientLastName.errors?.minlength\" class=\"invalid-feedback\">\n            Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"email\"\n                #clientEmail=\"ngModel\"\n                [ngClass]=\"{'is-invalid':clientEmail.errors && clientEmail.touched}\"\n                [(ngModel)]=\"client.email\"\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                required\n            >\n            <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">\n              Email required\n            </div>\n            <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">\n                Email is not valid\n            </div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"phone\">Phone</label>\n            <input \n              type=\"text\"\n              class=\"form-control\"\n              [ngClass]=\"{'is-invalid':clientPhone.errors && clientPhone.touched}\"\n              [(ngModel)]=\"client.phone\"\n              name=\"phone\"\n              #clientPhone = \"ngModel\"\n              minlength=\"10\"\n              required\n            >\n            <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">\n                Phone is required\n              </div>\n          \n              <div [hidden]=\"!clientPhone.errors?.minlength\" class=\"invalid-feedback\">\n                  Must be at least 10 characters\n              </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"balance\">Balance</label>\n              <input \n                type=\"number\"\n                class=\"form-control\"\n                [(ngModel)]=\"client.balance\"\n                name=\"balance\"\n                #clientBalance = \"ngModel\"\n                [disabled]=\"disableBalanceOnEdit\"\n              >\n            </div>\n  \n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n  \n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(clientService, router, route, flashMessage, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
        //Get id from url 
        this.id = this.route.snapshot.params['id'];
        //Get client
        this.clientService.getClient(this.id).subscribe(function (client) { return _this.client = client; });
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessage.show("Please correct fields", {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            //Add id to client
            value.id = this.id;
            this.clientService.updateClient(value);
            this.flashMessage.show("Client updated!", {
                cssClass: 'alert-success', timeout: 4000
            });
        }
        this.router.navigate(['/client/' + this.id]);
    };
    EditClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-order/edit-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-order/edit-order.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-order works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-order/edit-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditOrderComponent = /** @class */ (function () {
    function EditOrderComponent() {
    }
    EditOrderComponent.prototype.ngOnInit = function () {
    };
    EditOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__("../../../../../src/app/components/edit-order/edit-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-order/edit-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditOrderComponent);
    return EditOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--\nAuthor: W3layouts\nAuthor URL: http://w3layouts.com\nLicense: Creative Commons Attribution 3.0 Unported\nLicense URL: http://creativecommons.org/licenses/by/3.0/\n--*/\n\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nhtml, body{\n    font-size: 100%;\n\tfont-family: 'Open Sans', sans-serif;\n\tbackground:#ffffff;\n\tmargin: 0;\n}\n\np,ul li,ol li{\n\tmargin:0;\n\tfont-size:16px;\n}\n\nh1,h2,h3,h4,h5,h6{\n\tmargin:0;\n\tfont-family: 'Montserrat', sans-serif;\n}\n\nul,label{\n\tmargin:0;\n\tpadding:0;\n}\n\nbody a:hover{\n\ttext-decoration:none;\n}\n\ninput[type=\"submit\"],input[type=\"reset\"],a{\n\t-webkit-transition: 0.5s ease-in;\n    transition:0.5s ease-in;\n}\n\nimg{\n\twidth:100%;\n}\n\n/*-- banner --*/\n\n.banner-1{\n\tbackground-size:cover;\n    position: relative;\n\tmin-height:350px;\n}\n\n.banner{\n\tbackground-size:cover;\n    position: relative;\n}\n\n.jarallax {\n    position: relative;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n\n/* -- TOP HEADER */\n\n.top-middle li {\n    display: inline-block;\n}\n\n.top .top-left,.top  .top-middle,.top  .top-right {\n    padding: 0px;\n}\n\n.top-left li {\n    display: inline-block;\n\tcolor:#fff;\n    margin-right: 2em;\n    letter-spacing: 1px;\n}\n\n.top {\n    padding: 15px 0;\n    background: rgba(33, 33, 33, 0.66);\n}\n\n.top-middle {\n\ttext-align:right;\n}\n\n.top-left p{\n\tcolor:#fff;\n    font-size: 16px;\n    margin-top: 3px;\n}\n\n.top-left i.fa {\n    margin-right: 2px;\n    color: #ffffff;\n    font-size: 20px;\n    vertical-align: middle;\n}\n\n.top-middle li {\n    margin-left: 15px;\n}\n\n.top-middle .fa-facebook {\n    font-size: 16px;\n    text-align: center;\n    line-height: 29px;\n    width: 30px;\n    height: 30px;\n}\n\n.top-middle .fa-facebook:hover {\n    background: #527dbd;\n    color: #ececec;\n    border: 1px solid #527dbd;\n}\n\n.top-middle .fa-twitter {\n    font-size: 16px;\n    text-align: center;\n    line-height: 29px;\n    width: 30px;\n    height: 30px;\n}\n\n.top-middle .fa-twitter:hover {\n    background: #1da1f2;\n    color: #ececec;\n    border: 1px solid #1da1f2;\n}\n\n.top-middle .fa-google-plus {\n    font-size: 16px;\n    text-align: center;\n    line-height: 29px;\n    width: 30px;\n    height: 30px;\n}\n\n.top-middle .fa-google-plus:hover {\n    background: #dd4b39;\n    color: #ececec;\n    border: 1px solid #dd4b39;\n}\n\n.top-middle .fa-linkedin {\n    font-size: 16px;\n    text-align: center;\n    line-height: 29px;\n    width: 30px;\n    height: 30px;\n}\n\n.top-middle .fa-linkedin:hover {\n    background: #0077b5;\n    color: #ececec;\n    border: 1px solid #0077b5;\n}\n\n.top-middle i.fa {\n    border: 1px solid #fff;\n    color: #fff;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\n\n/* -- //TOP HEADER */\n\n/*-- Top-Bar --*/\n\n.top-bar {\n    background: rgba(241, 167, 12, 0.29);\n    padding: 10px 0;\n}\n\n/*-- Logo --*/\n\n.logo {\n\twidth: 60%;\n\tfloat: left;\n}\n\n.logo a {\n\tfont-size: 40px;\n\tfont-weight: bolder;\n\tcolor: #EEE;\n}\n\n.logo a:hover {\n\tcolor: #FFF;\n}\n\n/*-- //Logo --*/\n\n/*-- Info --*/\n\n.info {\n\twidth: 40%;\n\tfloat: left;\n\tpadding-top: 20px;\n}\n\n.info .email, .info .phone {\n\twidth: 50%;\n\tfloat: left;\n}\n\n.info p {\n\tcolor: #EEE;\n\tfont-size: 13px;\n}\n\n.info a {\n\tcolor: #FFF;\n}\n\n.info a:hover {\n\tcolor: #009688;\n}\n\n.info span.glyphicon {\n\tmargin-right: 5px;\n}\n\n.navbar-brand {\n    line-height: 0px !important;\n}\n\n.navbar-brand {\n   float: none;\n}\n\nnav.linkEffects.linkHoverEffect_12 ul {\n    margin-top: 6px;\n}\n\n.dropdown-menu > li > a {\n    padding: 0px;\n\tcolor:#fff;\n}\n\n/*-- //Info --*/\n\n.navbar {\n  margin-bottom: 0;\n}\n\n.navbar-nav {\n  float: right;\n}\n\n.navbar-default {\n  background:none;\n  border-color: rgba(103, 80, 31, 0);\n}\n\n.navbar-default .navbar-brand {\n\tcolor:#ffffff !important;\n    font-size: 35px;\n    font-weight: 600;\n\ttext-decoration: none;\n}\n\na.navbar-brand img {\n    display: inline-block;\n}\n\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    padding: 0;\n    float: left;\n    margin-left: 20em;\n}\n\n.navbar-default .navbar-brand:hover {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n\na.navbar-brand span {\n    color: #146eb4;\n}\n\n.navbar {\n    position: relative;\n    min-height: inherit;\n}\n\n.navbar-header {\n    margin-top: 5px;\n}\n\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color:#bda00a;\n    background: none;\n}\n\n.navbar-default .navbar-nav > li > a {\n    color:#fff;\n}\n\n.navbar-collapse {\n    padding: 0;\n    border-top: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    border: none;\n}\n\n.navbar-right {\n    float: none !important;\n    margin-right: 0;\n    margin-left: 0em;\n}\n\n.navbar-nav {\n    float: right !important;\n    margin: 6px 0 0;\n}\n\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n    color:#bda00a;\n}\n\n.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover, .navbar-default .navbar-nav>.open>a:focus {\n    color: #bda00a ! important;\n    background-color: rgba(76, 76, 76, 0) ! important\n}\n\n.dropdown-menu {\n    background-color: rgba(0, 0, 0, 0.24) ! important;\n}\n\nul.dropdown-menu {\n    background: rgba(0, 0, 0, 0.24);\n    -webkit-box-shadow: 0 0 0;\n            box-shadow: 0 0 0;\n    border: none;\n    margin: 0;\n    top: 4em;\n    right: 27px ! important;\n    min-width: 90px;\n}\n\n.dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {\n    background-color: rgba(0, 0, 0, 0.24) ! important;\n    color: #fff ! important;\n}\n\n.w3_agile_login{\n\tfloat:right;\n}\n\n.w3_agile_login a i{\n\tpadding: .5em .7em;\n    border: 1px solid #fff;\n    color: #fff;\n    font-size: 1em;\n    margin-top: 1em;\n}\n\n.navbar-nav > li > a {\n    padding: 0px;\n}\n\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    color: #fff;\n    background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active.open > a{\n\tcolor: #f62b2b;\n}\n\n.agile_short_dropdown li a {\n    padding: 8px 20px;\n    color: #fff;\n    text-align: center;\n}\n\n.agile_short_dropdown li a:before{\n\tcontent:'';\n\tdisplay:none;\n}\n\n/* Effect 15: scale down, reveal */\n\n.cl-effect-15 a {\n    color: #ffffff;\n    text-shadow: none;\n    text-decoration: none;\n    font-size: 17px;\n    letter-spacing: 2px;\n}\n\n.cl-effect-15 a::before {\n\tcolor: #ffffff;\n\tcontent: attr(data-hover);\n\tposition: absolute;\n\t-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: transform 0.3s, opacity 0.3s;\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n}\n\n.cl-effect-15 a:hover::before,\n.cl-effect-15 a:focus::before {\n\t-webkit-transform: scale(0.9);\n\ttransform: scale(0.9);\n\topacity: 0;\n}\n\nnav#cl-effect-15 ul li {\n    list-style: none;\n    display: inline-block;\n    padding: 10px;\n}\n\n/*-- header-contact --*/\n\n.agileits-contact-info {\n    float: left;\n    width: 33%;\n    margin-top: 10px;\n}\n\n.agileits-contact-info ul li {\n    display: inline-block;\n    font-size: 15px;\n}\n\n.agileits-contact-info ul li span {\n    left: -0.5em;\n    color: #168eea;\n\tfont-size: 14px;\n}\n\n.agileits-contact-info ul li:nth-child(2) {\n    margin-left: 25px;\n}\n\n.agileits-contact-info ul li a {\n    color: #000;\n    vertical-align: text-bottom;\n}\n\n.agileits-contact-info ul li a:hover {\n    color: #139596;\n}\n\n/*-- header-contact --*/\n\n/*-- //Top-Bar --*/\n\n/*-- w3-banner --*/\n\n.w3-banner{\n    padding: 13em 0 17em 0;\n    text-align: center;\n}\n\n.banner-dott {\n    background-size: 2px;\n    -webkit-background-size: 2px;\n    -moz-background-size: 2px;\n    -o-background-size: 2px;\n    -ms-background-size: 2px;\n}\n\n.banner-dott1 {\n    background-size: 2px;\n    -webkit-background-size: 2px;\n    -moz-background-size: 2px;\n    -o-background-size: 2px;\n    -ms-background-size: 2px;\n\tpadding:5em 0;\n}\n\n.w3-banner p {\n    width: 55%;\n    margin: 1em auto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    color: #fff;\n    line-height: 30px;\n}\n\n#typer {\n\tvertical-align: middle;\n    text-align: center;\n    color: #FFFFFF;\n    font-size: 3em !important;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n\tfont-family: 'Montserrat', sans-serif;\n}\n\n.top-banner-right {\n    float:right;\n}\n\n.w3ls-phone {\n   float:left;\n}\n\n.top-banner-right ul{\n\tpadding:0;\n\tmargin:0;\n}\n\n.top-banner-right ul li{\n\tdisplay:inline-block;\n\tmargin:0 1em;\n}\n\n.top-banner-right ul li:nth-child(4){\n\tmargin-right:0;\n}\n\n.top-banner-right ul li a{\n\tcolor:#fff;\n\tfont-size:1.2em;\n}\n\n.top-banner-right ul li a:hover{\n    color: #CDDC39;\n}\n\n.w3ls-phone h2 {\n    color: #FFFFFF;\n    font-size: 1.2em;\n    margin: 0;\n    text-align: center;\n    font-weight: 300;\n}\n\ni.fa.fa-phone {\n    margin-left: 10px;\n    color: #FFEB3B;\n}\n\n/*-- w3-banner --*/\n\n/*-- bootstrap-modal-pop-up --*/\n\n.modal-header {\n    font-size: 2em;\n    color: #000;\n    text-align: center;\n    text-transform: uppercase;\n    border: 1px solid #fff;\n\tfont-weight:600;\n\tletter-spacing:4px;\n}\n\n.close {\n    opacity: 1;\n}\n\n.modal-body p {\n    color: #999;\n    text-align: left;\n\tpadding:2em 2em 1em;\n\tmargin: 0 !important;\n\tline-height:2em;\n    font-size: 14px;\n}\n\n.modal-body p i {\n    display: block;\n    margin: 1em 0;\n    color: #212121;\n}\n\n.modal-body {\n    padding:0;\n}\n\n.modal-body img {\n    padding: 0em 2em 0 2em;\n}\n\n.modal-content {\n    border-radius: 0;\n}\n\nbutton.close {\n    font-size: 1.5em;\n    color:#000;\n\toutline: none;\n}\n\n/*-- //bootstrap-modal-pop-up --*/\n\n/* about */\n\nh3.wthree_head {\n    text-align: center;\n    font-size: 40px;\n    color: #f1a70c;\n    text-transform: uppercase;\n    margin-bottom: 0;\n}\n\n/* heading style */\n\ni.fa.fa-scissors {\n    position: absolute;\n    right: 49%;\n    bottom: 100%;\n    color: #cc4141;\n}\n\n/* //heading style */\n\n/*-- clients--*/\n\n.clients{\n\tbackground-size:cover;\n\ttext-align:center;\n\tbackground-attachment:fixed;\n}\n\n.clients h3{\n\tcolor:#fff;\n}\n\n.clients label.line{\n\tbackground:#fff;\n}\n\n.clients h4 {\n\tfont-size: 16px;\n\ttext-transform:uppercase;\n\tletter-spacing:2px;\n\tcolor:#fff;\n\tmargin-bottom:35px;\n}\n\n.flex-active-slide p {\n    line-height: 30px;\n    text-align: center;\n    color: #fff;\n    font-style: italic;\n    width: 70%;\n    margin: 30px auto;\n\tletter-spacing:2px;\n\tfont-size:15px;\n}\n\n.client h5 {\n    font-size: 25px;\n    color: #f1a70c;\n}\n\n/*-- //clients--*/\n\n/*-- services-bottom --*/\n\n.services-bottom {\n    background-size: cover;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    -ms-background-size: cover;\n    background-attachment: fixed;\n\tmin-height:400px;\n}\n\n.services-bottom h3{\n\ttext-align: center;\n    font-size: 2em;\n    text-transform: capitalize;\n    line-height: 1.5em;\n    color: #fff;\n}\n\n.services-bottom h3 i{\n\tcolor:#f56f19;\n\tpadding-right:1em;\n}\n\n.wthree-agile-counter {\n    padding:5em 0;\n}\n\n/*-- counter--*/\n\n.agile_count_grid_left {\n    float: left;\n    width: 35%;\n    text-align: center;\n}\n\n.agile_count_grid_left span,.agile_count_grid_right p{\n\tfont-size:2em;\n}\n\n.agile_count_grid_right {\n    float: left;\n    margin-left: 0em;\n    width: 60%;\n    text-align: center;\n}\n\n.agile_count_grid_left span.glyphicon.glyphicon-thumbs-up{\n\t    font-size: 1.7em;\n\t\tline-height: 40px;\n}\n\n.agile_count_grid_left span.glyphicon.glyphicon-user{\n\t    font-size: 1.7em;\n\t\tline-height: 40px;\n}\n\n.agile_count_grid_left span.glyphicon.glyphicon-heart-empty{\n\t    font-size: 1.7em;\n\t\tline-height: 40px;\n}\n\nspan.fa.fa-trophy{\n\t    font-size: 1.7em;\n\t\tline-height: 45px;\n}\n\n.agile_count_grid_right p{\n\tcolor: #fff;\n    font-weight: bold;\n}\n\n.w3_agile_stats_grid h4 {\n    font-size: 1.3em;\n    color: #f1a70c;\n    margin: 1em 0 0;\n    text-transform:uppercase;\n    letter-spacing: 3px;\n    position: relative;\n    text-align: center;\n}\n\n.agile_count_grid_left span {\n    color: #f1a70c;\n    top: 5px;\n}\n\n.w3_agile_stats_grid {\n    background: rgba(221, 223, 226, 0.23);\n    padding: 2em 1em;\n}\n\n/*-- //counter--*/\n\n/*-- advantages --*/\n\np.w3layouts_dummy_para {\n    font-size: 1.5em;\n    color: #140b05;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\nh3.w3l-titles:after {\n    right: 34%;\n    top: 120%;\n\tbackground:#fff;\n}\n\nh3.w3l-titles:before {\n    left: 34%;\n\tbackground:#fff;\n}\n\n.w3_two_grid_left{\n\tpadding:0;\n}\n\n.w3_two_grid_right{\n\tpadding:4em 4em 0;\n}\n\n.w3_two_grid_right h3{\n\tfont-size:2em;\n\tcolor:#fff;\n\ttext-transform:capitalize;\n}\n\n.w3_two_grid_right p.w3layouts_dummy_para{\n\tmargin:1em 0;\n\tcolor:#003743;\n\tline-height:2em;\n}\n\n.w3_two_grid_right1:nth-child(2){\n\tpadding:2em 0;\n}\n\n.w3_two_grid_right_grid1 {\n    width: 65px;\n    height: 65px;\n    text-align: center;\n    border: 1px solid #f1a70c;\n}\n\n.w3_two_grid_right1:hover .w3_two_grid_right_grid1{\n\tbackground:#f1a70c;\n}\n\n.w3_two_grid_right1:hover .w3_two_grid_right_grid1 i{\n\tcolor:#fff;\n}\n\n.w3_two_grid_right_grid1 i{\n\tfont-size: 1.3em;\n    color: #f1a70c;\n    line-height: 3.1em;\n}\n\n.w3_two_grid_right_gridr h4 {\n    color: #140b05;\n    font-size: 1.2em;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.w3_two_grid_right_gridr p{\n\tcolor:#999999;\n\tline-height:2em;\n}\n\nh3.w3l-titles,h2.w3l-titles {\n    color: #f1a70c;\n}\n\nh3.w3l-titles,h2.w3l-titles {\n    font-size: 3em;\n    text-align: center;\n    margin-bottom: 1.3em;\n    position: relative;\n}\n\nh3.w3l-titles:before, h3.w3l-titles:after,h2.w3l-titles:before, h2.w3l-titles:after {\n    content: \" \";\n    background: #000;\n    position: absolute;\n    width: 8%;\n    height: 2px;\n}\n\nh3.w3l-titles:before,h2.w3l-titles:before {\n    left: 36%;\n}\n\nh3.w3l-titles:after,h2.w3l-titles:after {\n    right: 36%;\n    top: 106%;\n}\n\n.two-grids {\n\tpadding:5em 0;\n}\n\n/*-- //advantages --*/\n\n/*-- about --*/\n\n.about{\n\tpadding:5em 0;\n}\n\n.agileits-heading h3{\n    color: #2f2f2f;\n    margin: 0;\n    font-size: 3.5em;\n    text-align: center;\n    font-family: 'Montserrat', sans-serif;\n    position: relative;\n    font-weight: 400;\n    text-transform: Uppercase;\n}\n\n.w3l-about-grids {\n    margin: 5em 0 0 0;\n}\n\n.icon-left{\n    float: left;\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n\t-webkit-border-radius: 50%;\n\t-moz-border-radius: 50%;\n\t-ms-border-radius: 50%;\n\t-o-border-radius: 50%;\n    text-align: center;\n    padding: 1.2em 0 0 0;\n    margin-right: 1.5em;\n}\n\n.icon-right{\n    float: left;\n    width: 80%;\n}\n\n.icon-left i.fa{\n    color: #f1a70c;\n    font-size: 2em;\n}\n\n.icon-right h5 {\n    color: #140b05;\n    font-size: 1.2em;\n    font-weight: 600;\n    margin: 0 0 1em 0;\n}\n\n.icon-right p{\n\tcolor: #999999;\n    font-size: .9em;\n    line-height: 1.8em;\n    margin: 0;\t\n}\n\n.agileits-icon-grid:nth-child(2){\n\tmargin:2em 0;\n}\n\n/* Radial Out */\n\n.hvr-radial-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  background: none;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n\n.hvr-radial-out:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #f1a70c;\n    border-radius: 100%;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n}\n\n.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {\n  color: #FFFFFF;\n}\n\n.agileits-icon-grid:hover div.hvr-radial-out:before{\n  -webkit-transform: scale(2);\n  transform: scale(2);\t\n  color:#FFFFFF;\n    transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n\n.agileits-icon-grid:hover i.fa{\n\tcolor:#FFFFFF;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all;\t\n}\n\n.w3ls-about-right-img{\n    background-size: cover;\n    min-height: 470px;\n}\n\n/*-- //about --*/\n\n/*-- services --*/\n\n.services {\n    padding: 5em 0;\n}\n\n.agile-heading h3{\n\ttext-align:center;\n}\n\n.wthree-services-grids,.agileinfo-gallery,.agile-team-grids,.wthree-news-grids,.agile-contact-form{\n\tmargin:4em 0 0 0;\n}\n\n.wthree-services-grid {\n\toverflow: hidden;\n\tposition: relative;\n\tdisplay: block;\n\t-webkit-box-shadow: 0 0px 1px rgb(107, 107, 107),0 1px 2px rgba(0,0,0,.24);\n\t        box-shadow: 0 0px 1px rgb(107, 107, 107),0 1px 2px rgba(0,0,0,.24);\n}\n\n.wthree-services-info{\n    padding: 6em 0;\n    background: #FFFFFF;\n    text-align: center;\n}\n\n.wthree-services-info i.fa.fa-money,.wthree-services-info i.fa.fa-comment-o,.wthree-services-info i.fa.fa-scissors,.wthree-services-info i.fa.fa-thumbs-o-up,.wthree-services-info i.fa.fa-bell-o,.wthree-services-info i.fa.fa-sun-o,.wthree-services-info i.fa.fa-credit-card,.wthree-services-info i.fa.fa-bullhorn{\n\tcolor: #212121;\n    font-size: 3em;\n}\n\n.wthree-services-info h4{\n    color: #212121;\n    font-size: 1.2em;\n    margin: 1em 0 0 0;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.w3ls-border{\n    width: 30%;\n    margin: 1em auto 0;\n    border: double 4px #000;\n}\n\n.wthree-services-captn {\n\theight: 100%;\n    width: 100%;\n    position: absolute;\n    padding: 6em 1em;\n    text-align: center;\n    top: -100%;\n    right: 0;\n    background-color: #ffae00;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n\n.wthree-services-captn h4 {\n    color: #fff;\n    font-size: 1em;\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 4px;\n    margin: 0;\n}\n\n.wthree-services-captn p {\n    font-size: .9em;\n    margin-top: 1em;\n    color: #fff;\n    line-height: 1.8em;\n}\n\n.wthree-services-grid:hover .wthree-services-captn {\n\tdisplay:block;\n\ttop: 0%;\n}\n\n.services-grids1{\n\tmargin:2em 0 0 0 !important;\n}\n\n.wthree-top-grid h4 {\n    color: #212121;\n    font-size: 22px;\n    text-transform: uppercase;\n    line-height: 1.5em;\n    margin: 10px;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n\n.wthree-top-grid p {\n    color: #777;\n    font-size: 14px;\n    line-height: 28px;\n    margin: 0;\n}\n\n.agileits-about-top {\n    padding: 0 0 5em;\n}\n\n/*-- //services --*/\n\n/*-- about --*/\n\n.agileits-top-heading{\n\tpadding:2em 0;\n\ttext-align:center;\n}\n\n.agileits-top-heading h2{\n\tcolor: #FFFFFF;\n    font-size: 3em;\n    margin: 0;\n    font-family: 'Pacifico', cursive;\n}\n\n.main-textgrids {\n    padding:4em 0;\n}\n\n.main-textgrids img {\n    width: 100%;\n}\n\n.ab-text p {\n    line-height: 1.8em;\n    margin:0 0 1em 0;\n    font-size: 0.9em;\n    color: #999999;\n}\n\nul.ab {\n    padding: 0;\n}\n\nul.ab li {\n    list-style-type: none;\n    margin: 0 0 1em;\n}\n\nul.ab li a {\n    color: #999999;\n    line-height: 1.8em;\n    font-size: 0.9em;\n    text-decoration: none;\n}\n\n.statements {\n    margin-top: 4em;\n}\n\nul.ab li a:hover{\n\tcolor: #ffae00;\n}\n\n.statements p{\n    line-height: 1.8em;\n    margin-bottom: 4%;\n    margin-top: 3%;\n    font-size: 0.9em;\n    color: #777;\n}\n\n.mission h4 {\n    text-align: left;\n    color: #ffae00;\n    font-size: 1.2em;\n    text-transform: uppercase;\n    line-height: 1.5em;\n    margin: 0;\n    font-weight: 800;\n}\n\n/*-- different --*/\n\n.ab-agile {\n    margin-top: 5em;\n}\n\n.agileinfo-team-grids {\n    margin-top: 5em;\n}\n\n.different{\n    background-size: cover;\n\tpadding:5em 0;\n}\n\n.different h3{\n    color: #FFFFFF;\n\ttext-align: center;\n    color: #ffae00;\n    text-transform: uppercase;\n    margin: 0 0 .5em;\n    font-size: 2.8em;\n    letter-spacing: 1px;\n}\n\n.w3agile-different-info p{\n    text-align: center;\n    margin: 3em auto 0;\n    font-size: .9em;\n    color: #FFFFFF;\n    width: 73%;\n    line-height: 1.8em;\n}\n\n.w3agile-button {\n    margin: 3em 0 0 0;\n    text-align: center;\n}\n\n.w3agile-button a{\n    border: solid 1px #ffae00;\n    color: #FFFFFF;\n    font-size: 1em;\n    padding: .5em 1em;\n    text-decoration: none;\n    background: #ffae00;\n}\n\n.w3agile-button a:hover{\n    border: solid 1px #FFFFFF;\n    color: #FFFFFF;\n\tbackground:none;\n}\n\n/*-- //different --*/\n\n/*-- team --*/\n\n.team {\n    background: #f5f5f5;\n    padding: 5em 0;\n}\n\n.wthree-team-grid img{\n\twidth:100%;\n}\n\n.wthree-team-grid-info {\n    padding: 1em;\n    background: #FFFFFF;\n    text-align: center;\n}\n\n.wthree-team-grid h4 {\n    font-size: 1.2em;\n    color: #ffae00;\n    margin: 0;\n    font-weight: 600;\n}\n\n.wthree-team-grid p {\n    margin:.5em 0;\n    color: #999999;\n    font-size: .9em;\n}\n\n.team-social-grids ul {\n    padding: 0;\n    margin: 0;\n}\n\n.team-social-grids ul li {\n    display: inline-block;\n    margin: 0 .5em 0 0;\n}\n\n.team-social-grids ul li a {\n    text-align: center;\n}\n\n.team-social-grids ul li a i.fa{\n\theight: 30px;\n    width: 30px;\n    border: solid 2px #FFFFFF;\n    line-height: 29px;\n    background: none;\n    color: #b2b2b2;\n    transition: 0.5s all;\n    -webkit-transition: 0.5s all;\n    -moz-transition: 0.5s all;\n    -o-transition: 0.5s all;\n    -ms-transition: 0.5s all;\n}\n\n.team-social-grids ul li a i.fa.fa-facebook:hover {\n\tborder: solid 2px #3b5998;\n\tbackground:#3b5998;\n    color: #FFFFFF;\n}\n\n.team-social-grids ul li a i.fa.fa-twitter:hover{\n\tborder: solid 2px #55acee;\n\tbackground:#55acee;\n\tcolor: #FFFFFF;\n}\n\n.team-social-grids ul li a i.fa.fa-rss:hover{\n\tborder: solid 2px #f26522;\n\tbackground:#f26522;\n\tcolor: #FFFFFF;\n}\n\n/*-- //team --*/\n\n/* copyright */\n\n.copyright ul li {\n    display: inline-block;\n    padding: 0 10px;\n}\n\na.facebook {\n    color: #fff;\n    font-size: 16px;\n}\n\n/*-- //copyright --*/\n\n.agile_map_grid ul li a, .agileits_w3layouts_footer_grid ul li a {\n    color: #fff;\n    text-decoration: none;\n}\n\n/*-- footer --*/\n\n.footer {\n    background:#212121;\n  \n\tpadding:1em 0;\n}\n\n.agileits_w3layouts_footer_grid{\n\tborder-left:1px solid #fff;\n\tpadding-left: 3em;\n}\n\n.agileits_w3layouts_footer_grid h3{\n\tfont-size:1.5em;\n\tcolor:#f1a70c;\n\ttext-transform:capitalize;\n\tmargin-bottom:1em;\n}\n\n.agileits_w3layouts_footer_grid ul li {\n    display: inline-block;\n    color: #fff;\n\tmargin-bottom:.5em;\n    text-transform: capitalize;\n}\n\n.agileits_w3layouts_footer_grid ul li span{\n\tfont-weight:600;\n}\n\n.agileits_w3layouts_footer_grid p{\n\tcolor:#fff;\n}\n\n.agileits_w3layouts_footer_grid p i{\n\tdisplay:block;\n\tfont-style:normal;\n\tmargin:.5em 0 0;\n}\n\n.w3_agileits_footer_grids{\n\tmargin:5em 0 0;\n}\n\n.w3_agileits_footer_grid p{\n\tcolor:#fff;\n\tline-height:2em;\n}\n\n.w3_agileits_footer_grid h3{\n\tfont-size: 1.5em;\n    color: #f1a70c;\n    text-transform: capitalize;\n    padding-left: 4em;\n    position: relative;\n}\n\n.w3_agileits_footer_grid h3:before{\n\tcontent: '';\n    background: #f1a70c;\n    height: 2px;\n    width: 20%;\n    position: absolute;\n    left: 0%;\n    top: 53%;\n}\n\n.w3_agileits_footer_grid h4{\n\tfont-size: 1em;\n    letter-spacing: 2px;\n\tcolor:#fff;\n\tmargin:1.5em 0;\n\ttext-transform:uppercase;\n}\n\n.w3_agileits_footer_grid ul li{\n\tdisplay:block;\n\tcolor:#999;\n}\n\n.w3_agileits_footer_grid ul li span{\n\tfont-weight:600;\n\tdisplay:inline-block;\n}\n\n.w3_agileits_footer_grid ul li:first-child{\n\tmargin-bottom:.5em;\n}\n\n.w3_agileits_footer_grid form {\n    padding: 15px 15px 15px 25px;\n    border: 1px solid #fff;\n\tmargin: 2em 0 0;\n}\n\n.w3_agileits_footer_grid input[type=\"email\"] {\n    outline: none;\n    border: none;\n    color: #fff;\n    font-size: 14px;\n     width:73%;\n    background: none;\n    font-weight: bold;\n}\n\n.w3_agileits_footer_grid input[type=\"submit\"] {\n    outline: none;\n    border: none;\n    width: 25%;\n    background: #f1a70c;\n    padding: 7px 6px;\n    color: #fff;\n    letter-spacing: 1px;\n    font-weight: 600;\n}\n\n.wthree_copy_right{\n    padding: 1.5em 0;\n    background: #0a0b0c;\n    text-align: center;\n}\n\n.wthree_copy_right p{\n    color: #fff;\n    line-height: 2em;\n    letter-spacing: 2px;\n    font-size: 13px;\n}\n\n.wthree_copy_right p a{\n\tcolor:#f1a70c;\n\t-webkit-text-decoration:noen;\n\t        text-decoration:noen;\n}\n\n.wthree_copy_right p a:hover{\n\tcolor:#fff;\n}\n\n/*-- //footer --*/\n\n/*-- to-top --*/\n\n#toTop {\n\tdisplay: none;\n\ttext-decoration: none;\n\tposition: fixed;\n\tbottom: 20px;\n\tright: 2%;\n\toverflow: hidden;\n\tz-index: 999; \n\twidth: 40px;\n\theight: 40px;\n\tborder: none;\n\ttext-indent: 100%;\n}\n\n#toTopHover {\n\twidth: 40px;\n\theight: 40px;\n\tdisplay: block;\n\toverflow: hidden;\n\tfloat: right;\n\topacity: 0;\n\t-moz-opacity: 0;\n\tfilter: alpha(opacity=0);\n}\n\n/*-- //to-top --*/\n\n/*-- gallery --*/\n\n.w3ls_gallery_grids{\n\tpadding-top:1em;\n}\n\n.agile_gallery_grid{\n\tmargin-top:2em;\n}\n\n.agile_gallery_grid1{\n    position: relative;\n}\n\n.w3layouts_gallery_grid1_pos{\n    background: #b06010;\n    bottom: 45px;\n    left: 45px;\n    opacity: 0;\n    padding:1em;\n    position: absolute;\n    right: 45px;\n    text-align: center;\n    top: 45px;\n    visibility: hidden;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n\t-moz-transform: scaleX(-1);\n\t-o-transform: scaleX(-1);\n\t-ms-transform: scaleX(-1);\n    -webkit-transition: all 0.8s ease;\n    transition: all 0.8s ease;\n}\n\n.w3layouts_gallery_grid1_pos h3{\n    font-size: 1.2em;\n    letter-spacing: 2px;\n    font-weight: 600;\n    margin: 1em 0 .5em;\n    padding-bottom: .5em;\n    position: relative;\n    text-transform: uppercase;\n    color: #212121;\n}\n\n.w3layouts_gallery_grid1_pos p{\n\tcolor: #fff;\n\tline-height:2em;\n\tletter-spacing:1px;\n}\n\n.agile_gallery_grid:hover .w3layouts_gallery_grid1_pos{\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n\t-moz-transform: scaleX(1);\n\t-o-transform: scaleX(1);\n\t-ms-transform: scaleX(1);\n}\n\n.banner-bottom.gallery{\n\tpadding:5em 0;\n}\n\np.quia {\n        font-size: 1.2em;\n    color: #140b05;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\n/*-- //gallery --*/\n\n.agileinfo_social_icons {\n    float: right;\n    margin: 0.5em 0em 0 0;\n}\n\n.agileits_social_list li{\n\tdisplay:inline-block;\n\t    margin-right:5px;\n}\n\n.agileits_social_list li a{\n\twidth: 30px;\n    height: 30px;\n    color: #fff;\n    text-align: center;\n    display: inline-block;\n    font-size: 12px;\n    border-radius: 25px;\n}\n\n.agileits_social_list li a i{\n\tline-height:2.4em;\n}\n\n.agileits_social_list li a:hover{\n\tcolor:#b06010;\n\tborder: 2px solid #b06010;\n\tbackground:none;\n}\n\na.w3_agile_facebook{\n\tbackground:#3b5998;\n\tborder:2px solid #3b5998;\n}\n\na.agile_twitter{\n\tbackground:#1da1f2;\n\tborder:2px solid #1da1f2;\n}\n\na.w3_agile_dribble{\n\tbackground:#ea4c89;\n\tborder:2px solid #ea4c89;\n}\n\na.w3_agile_vimeo{\n\tbackground:#f26522;\n\tborder:2px solid #f26522;\n}\n\n/*-- contact --*/\n\n.typo, section.contact-w3ls, .w3_wthree_agileits_icons{\n\tpadding:5em 0;\n}\n\nsection.contact-w3ls p.contact-agile1 {\n    font-size: 1em;\n    letter-spacing: 1px;\n    padding-bottom: 2em;\n    color: #000;\n}\n\nsection.contact-w3ls p.contact-agile1 strong {\n    letter-spacing: 1.5px;\n    color:#efa60f!important;\n    font-size: 1em;\n    font-weight: 500;\n}\n\nsection.contact-w3ls p.contact-agile1 a {\n\tcolor:#000;\n}\n\nsection.contact-w3ls h4 {\n    font-size: 2em;\n    letter-spacing: 1px;\n    color: #f1a70c;\n    padding: 1em 0;\n}\n\nsection.contact-w3ls p.contact-agile2 {\n\tfont-size:16px;\n\tfont-weight:normal;\n\tpadding-bottom:20px;\n\tline-height:30px;\n\tcolor:#ffce14;\n\ttext-align:center;\n}\n\nsection.contact-w3ls label.contact-p1 {\n    font-size: 1em;\n    letter-spacing: 1px;\n    font-weight: 300;\n    color: #000;\n    padding-bottom: 10px;\n}\n\n.form-group {\n    margin-bottom:2em;\n}\n\nsection.contact-w3ls p.help-block {\n    color:#ff0500!important;\n}\n\nsection.contact-w3ls input#name, section.contact-w3ls input#email, section.contact-w3ls input#phone  {\n\theight:45px;\n}\n\nsection.contact-w3ls input#name, section.contact-w3ls input#email, section.contact-w3ls input#phone {\n    font-size: 1em;\n    color: #000;\n    background-color: transparent;\n    border-radius: 0;\n    border-color: #000;\n    padding: 0.8em;\n}\n\nsection.contact-w3ls button.btn.btn-primary {\n    color: #fff;\n    background-color: #212121;\n    border: 2px solid #212121;\n    font-size: 1.2em;\n    padding: .7em;\n    outline: none;\n    width: 100%;\n    letter-spacing: 1px;\n    border-radius: 0;\n\t-webkit-transition:.5s all;\n\ttransition:.5s all;\n}\n\nsection.contact-w3ls button.btn.btn-primary:hover {\n    background-color:#f1a70c;\n    border: 2px solid #f1a70c;\n\t-webkit-transition:.5s all;\n\ttransition:.5s all;\n}\n\n.book_date input::-webkit-input-placeholder {\n\tcolor: #fff !important;\n}\n\n.book_date input:-moz-placeholder { /* Firefox 18- */\n\tcolor: #fff !important;  \n}\n\n.book_date input::-moz-placeholder {  /* Firefox 19+ */\n\tcolor: #fff !important;  \n}\n\n.book_date input:-ms-input-placeholder {  \n\tcolor: #fff !important;  \n}\n\n.footer-icons-agileinfo{\n\tmargin: 3em 0;\n}\n\n.w3l-map iframe {\n    width: 100%;\n    height: 500px;\n    margin-top: 0;\n    outline: none;\n    border: none;\n}\n\n.w3l-map {\n    padding: 12px;\n    border: 10px solid #f1a70c;\n}\n\nh4.w3l-contact {\n    margin-bottom: 1.5em;\n}\n\n.con-top {\n    margin-top: 4em;\n}\n\n/*-- //contact --*/\n\n/*-- icons --*/\n\n.codes a {\n    color: #999;\n}\n\n.icon-box {\n    padding: 8px 15px;\n    background:rgba(149, 149, 149, 0.18);\n    margin: 1em 0 1em 0;\n    border: 5px solid #ffffff;\n    text-align: left;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-size: 13px;\n    transition: 0.5s all;\n    -webkit-transition: 0.5s all;\n    -o-transition: 0.5s all;\n    -ms-transition: 0.5s all;\n    -moz-transition: 0.5s all;\n    cursor: pointer;\n}\n\n.icon-box:hover {\n    background: #000;\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-o-transition:0.5s all;\n\t-ms-transition:0.5s all;\n\t-moz-transition:0.5s all;\n}\n\n.icon-box:hover i.fa {\n\tcolor:#fff !important;\n}\n\n.icon-box:hover a.agile-icon {\n\tcolor:#fff !important;\n}\n\n.codes .bs-glyphicons li {\n    float: left;\n    width: 12.5%;\n    height: 115px;\n    padding: 10px; \n    line-height: 1.4;\n    text-align: center;  \n    font-size: 12px;\n    list-style-type: none;\t\n}\n\n.codes .bs-glyphicons .glyphicon {\n    margin-top: 5px;\n    margin-bottom: 10px;\n    font-size: 24px;\n}\n\n.codes .glyphicon {\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    font-family: 'Glyphicons Halflings';\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\tcolor: #777;\n}\n\n.codes .bs-glyphicons .glyphicon-class {\n    display: block;\n    text-align: center;\n    word-wrap: break-word;\n}\n\nh3.icon-subheading {\n    font-size: 28px;\n    color: #f1a70c !important;\n    margin: 30px 0 15px;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n\nh3.agileits-icons-title {\n    text-align: center;\n    font-size: 33px;\n    color: #222222;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n\n.icons a {\n    color: #999;\n}\n\n.icon-box i {\n    margin-right: 10px !important;\n    font-size: 20px !important;\n    color: #282a2b !important;\n}\n\n.bs-glyphicons li {\n    float: left;\n    width: 18%;\n    height: 115px;\n    padding: 10px;\n    line-height: 1.4;\n    text-align: center;\n    font-size: 12px;\n    list-style-type: none;\n    background:rgba(149, 149, 149, 0.18);\n    margin: 1%;\n}\n\n.bs-glyphicons .glyphicon {\n    margin-top: 5px;\n    margin-bottom: 10px;\n    font-size: 24px;\n\tcolor: #282a2b;\n}\n\n.glyphicon {\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    font-family: 'Glyphicons Halflings';\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\tcolor: #777;\n}\n\n.bs-glyphicons .glyphicon-class {\n    display: block;\n    text-align: center;\n    word-wrap: break-word;\n}\n\n@media (max-width:991px){\n\th3.agileits-icons-title {\n\t\tfont-size: 28px;\n\t}\n\th3.icon-subheading {\n\t\tfont-size: 22px;\n\t}\n}\n\n@media (max-width:768px){\n\th3.agileits-icons-title {\n\t\tfont-size: 28px;\n\t}\n\th3.icon-subheading {\n\t\tfont-size: 25px;\n\t}\n\t.row {\n\t\tmargin-right: 0;\n\t\tmargin-left: 0;\n\t}\n\t.icon-box {\n\t\tmargin: 0;\n\t}\n}\n\n@media (max-width: 640px){\n\t.icon-box {\n\t\tfloat: left;\n\t\twidth: 50%;\n\t}\n}\n\n@media (max-width: 480px){\n\t.bs-glyphicons li {\n\t\twidth: 31%;\n\t}\n}\n\n@media (max-width: 414px){\n\th3.agileits-icons-title {\n\t\tfont-size: 23px;\n\t}\n\th3.icon-subheading {\n\t\tfont-size: 18px;\n\t}\n\t.bs-glyphicons li {\n\t\twidth: 31.33%;\n\t}\n}\n\n@media (max-width: 384px){\n\t.icon-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n}\n\n/*-- //icons --*/\n\n.w3_wthree_agileits_icons.main-grid-border {\n    padding: 5em 0;\n}\n\n/*--Typography--*/\n\n.well {\n    font-weight: 300;\n    font-size: 14px;\n}\n\n.list-group-item {\n    font-weight: 300;\n    font-size: 14px;\n}\n\nli.list-group-item1 {\n    font-size: 14px;\n    font-weight: 300;\n}\n\n.show-grid [class^=col-] {\n    background: #fff;\n\ttext-align: center;\n\tmargin-bottom: 10px;\n\tline-height: 2em;\n\tborder: 10px solid #f0f0f0;\n}\n\n.show-grid [class*=\"col-\"]:hover {\n\tbackground: #e0e0e0;\n}\n\n.grid_3{\n\tmargin-bottom:2em;\n}\n\n.xs h3, h3.m_1{\n\tcolor:#000;\n\tfont-size:1.7em;\n\tfont-weight:300;\n\tmargin-bottom: 1em;\n}\n\n.grid_3 p{\n\tcolor: #999;\n\tfont-size: 0.85em;\n\tmargin-bottom: 1em;\n\tfont-weight: 300;\n}\n\n.grid_4{\n\tbackground:none;\n\tmargin-top:50px;\n}\n\n.label {\n\tfont-weight: 300 !important;\n\tborder-radius:4px;\n}\n\n.grid_5{\n\tbackground:none;\n\tpadding:2em 0;\n}\n\n.grid_5 h3, .grid_5 h2, .grid_5 h1, .grid_5 h4, .grid_5 h5, h3.hdg, h3.bars {\n    margin-bottom: 1em;\n    color: #f1a70c;\n    font-weight: 600;\n    font-size: 30px;\n    letter-spacing: 2px;\n}\n\n.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n\tborder-top: none !important;\n}\n\n.tab-content > .active {\n\tdisplay: block;\n\tvisibility: visible;\n}\n\n.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {\n\tz-index: 0;\n}\n\n.badge-primary {\n\tbackground-color: #03a9f4;\n}\n\n.badge-success {\n\tbackground-color: #8bc34a;\n}\n\n.badge-warning {\n\tbackground-color: #ffc107;\n}\n\n.badge-danger {\n\tbackground-color: #e51c23;\n}\n\n.grid_3 p{\n\tline-height: 2em;\n\tcolor: #888;\n\tfont-size: 0.9em;\n\tmargin-bottom: 1em;\n\tfont-weight: 300;\n}\n\n.bs-docs-example {\n\tmargin: 1em 0;\n}\n\nsection#tables  p {\n\tmargin-top: 1em;\n}\n\n.tab-container .tab-content {\n\tborder-radius: 0 2px 2px 2px;\n\tborder: 1px solid #e0e0e0;\n\tpadding: 16px;\n\tbackground-color: #ffffff;\n}\n\n.table td, .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n\tpadding: 15px!important;\n}\n\n.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n\tfont-size: 0.9em;\n\tcolor: #999;\n\tborder-top: none !important;\n}\n\n.tab-content > .active {\n\tdisplay: block;\n\tvisibility: visible;\n}\n\n.label {\n\tfont-weight: 300 !important;\n}\n\n.label {\n\tpadding: 4px 6px;\n\tborder: none;\n\ttext-shadow: none;\n}\n\n.alert {\n\tfont-size: 0.85em;\n}\n\nh1.t-button,h2.t-button,h3.t-button,h4.t-button,h5.t-button {\n\tline-height:2em;\n\tmargin-top:0.5em;\n\tmargin-bottom: 0.5em;\n}\n\nli.list-group-item1 {\n\tline-height: 2.5em;\n}\n\n.input-group {\n\tmargin-bottom: 20px;\n}\n\n.in-gp-tl{\n\tpadding:0;\n}\n\n.in-gp-tb{\n\tpadding-right:0;\n}\n\n.list-group {\n\tmargin-bottom: 48px;\n}\n\nol {\n\tmargin-bottom: 44px;\n}\n\nh2.typoh2{\n    margin: 0 0 10px;\n}\n\n@media (max-width:768px){\n.grid_5 {\n\tpadding: 0 0 1em;\n}\n.grid_3 {\n\tmargin-bottom: 0em;\n}\n}\n\n@media (max-width:640px){\nh1, .h1, h2, .h2, h3, .h3 {\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n}\n.grid_5 h3, .grid_5 h2, .grid_5 h1, .grid_5 h4, .grid_5 h5, h3.hdg, h3.bars {\n\tmargin-bottom: .5em;\n}\n.progress {\n\theight: 10px;\n\tmargin-bottom: 10px;\n}\nol.breadcrumb li,.grid_3 p,ul.list-group li,li.list-group-item1 {\n\tfont-size: 14px;\n}\n.breadcrumb {\n\tmargin-bottom: 25px;\n}\n.well {\n\tfont-size: 14px;\n\tmargin-bottom: 10px;\n}\nh2.typoh2 {\n\tfont-size: 1.5em;\n}\n.label {\n\tfont-size: 60%;\n}\n.in-gp-tl {\n\tpadding: 0 1em;\n}\n.in-gp-tb {\n\tpadding-right: 1em;\n}\n}\n\n@media (max-width:480px){\n.grid_5 h3, .grid_5 h2, .grid_5 h1, .grid_5 h4, .grid_5 h5, h3.hdg, h3.bars {\n\tfont-size: 1.2em;\n}\n.table h1 {\n\tfont-size: 26px;\n}\n.table h2 {\n\tfont-size: 23px;\n\t}\n.table h3 {\n\tfont-size: 20px;\n}\n.label {\n\tfont-size: 53%;\n}\n.alert,p {\n\tfont-size: 14px;\n}\n.pagination {\n\tmargin: 20px 0 0px;\n}\n.grid_3.grid_4.w3layouts {\n\tmargin-top: 25px;\n}\n}\n\n@media (max-width: 320px){\n.grid_4 {\n\tmargin-top: 18px;\n}\nh3.title {\n\tfont-size: 1.6em;\n}\n.alert, p,ol.breadcrumb li, .grid_3 p,.well, ul.list-group li, li.list-group-item1,a.list-group-item {\n\tfont-size: 13px;\n}\n.alert {\n\tpadding: 10px;\n\tmargin-bottom: 10px;\n}\nul.pagination li a {\n\tfont-size: 14px;\n\tpadding: 5px 11px;\n}\n.list-group {\n\tmargin-bottom: 10px;\n}\n.well {\n\tpadding: 10px;\n}\n.nav > li > a {\n\tfont-size: 14px;\n}\ntable.table.table-striped,.table-bordered,.bs-docs-example {\n\t\tdisplay: none;\n}\n}\n\n/*-- //typography --*/\n\n.typo {\n    padding: 5em 0;\n}\n\n/*-- responsive design --*/\n\n@media screen and (max-width: 1440px){\n}\n\n@media screen and (max-width: 1366px){\n\t.w3-banner {\n\t\tpadding: 11em 0 15em 0;\n\t}\n}\n\n@media screen and (max-width: 1280px){\n\t.w3-banner {\n\t\tpadding: 11em 0 12em 0;\n\t}\n}\n\n@media screen and (max-width: 1080px){\n\t#typer {\n\t\tfont-size: 2.8em !important;\n\t}\n\t.w3-banner p {\n\t\twidth: 77%;\n\t\tfont-size: 15px;\n\t}\n\t.top-left li {\n    margin-right: 1em;\n}\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    margin-left: 13em;\n}\n.icon-right {\n    width: 76%;\n}\n.icon-right h5 {\n    font-size: 1em;\n    margin: 0 0 1em 0;\n}\n.w3_agile_stats_grid h4 {\n    letter-spacing: 0px;\n}\n.w3_agileits_footer_grid input[type=\"submit\"] {\n    width: 30%;\n}\n.w3_agileits_footer_grid input[type=\"email\"] {\n    width: 68%;\n}\n.w3layouts_gallery_grid1_pos {\n    bottom: 20px;\n    left: 20px;\n    right: 20px;\n    top: 20px;\n}\n}\n\n@media screen and (max-width: 1024px){\n\t#typer {\n\t\tfont-size: 2.7em !important;\n\t\tletter-spacing: 2px;\n\t}\n\t.w3-banner p {\n\t\twidth: 80%;\n\t\tfont-size: 15px;\n\t\tletter-spacing: 1px;\n\t\tline-height: 28px;\n\t}\n}\n\n@media screen and (max-width: 991px){\n\t.navbar-nav {\n\t\tmargin-left: 2em;\n\t}\n.top .top-left, .top .top-middle, .top .top-right {\n    float: left;\n}\n.top-middle {\n    float: right;\n}\nnav#cl-effect-15 ul li {\n    padding: 12px 7px;\n}\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    margin-left: 2em;\n}\n.about {\n    padding: 3em 0;\n}\n.w3ls-about-left {\n    margin-bottom: 2em;\n}\n.wthree-agile-counter {\n    padding: 3em 0;\n}\n.w3_agile_stats_grid-top {\n    float: left;\n    width: 50%;\n    margin-bottom: 1em;\n}\n.banner-dott1 {\n    padding: 3em 0;\n}\n.two-grids {\n    padding: 3em 0;\n}\nh3.w3l-titles, h2.w3l-titles {\n    font-size: 2.5em;\n}\nh3.w3l-titles:before, h2.w3l-titles:before {\n    left: 30%;\n}\nh3.w3l-titles:after, h2.w3l-titles:after {\n    right: 30%;\n}\np.w3layouts_dummy_para {\n    font-size: 1.3em;\n    letter-spacing: 0px;\n}\n.agileits_w3layouts_footer_grid {\n    margin-bottom: 1em;\n}\n.footer {\n    background: #212121;\n    padding: 3em 0;\n}\n.w3_agileits_footer_grids {\n    margin: 1em 0 0;\n}\n.w3_agileits_footer_grid h3 {\n    padding-left: 7em;\n}\n.ab-text {\n    margin-top: 1em;\n}\n.statements {\n    margin-top: 2em;\n}\n.w3agile-different-info p {\n    width: 100%;\n}\n.team {\n    padding: 3em 0;\n}\n.agileinfo-team-grids {\n    margin-top: 3em;\n}\n.wthree-team-grid {\n    float: left;\n    width: 50%;\n    margin-bottom: 1.5em;\n}\n.ab-agile {\n    margin-top: 3em;\n}\n.main-textgrids {\n    padding: 3em 0;\n}\n.different {\n    padding: 3em 0;\n}\n.services {\n    padding: 3em 0;\n}\n.agileits-about-top {\n    padding: 0 0 3em;\n}\n.w3_agile_gallery_grid {\n    float: left;\n    width: 33.33%;\n}\n.w3layouts_gallery_grid1_pos h3 {\n    margin: 0.5em 0 0em;\n    padding-bottom: 0;\n}\n.banner-bottom.gallery {\n    padding: 3em 0;\n}\n.w3_wthree_agileits_icons.main-grid-border {\n    padding: 3em 0;\n}\n.typo {\n    padding: 3em 0;\n}\nsection.contact-w3ls {\n    padding: 3em 0;\n}\n}\n\n@media screen and (max-width: 900px){\n\t#typer {\n\t\tfont-size: 2.4em !important;\n\t}\n\t.w3-banner {\n\t\tpadding: 9em 0;\n\t}\n}\n\n@media screen and (max-width: 800px){\n\t#typer {\n\t\tfont-size: 2em !important;\n\t}\n\t.w3-banner p {\n\t\twidth: 92%;\n\t\tfont-size: 14px;\n\t}\n}\n\n@media screen and (max-width: 768px){\n\t.w3l_about_bottom_left, .w3l_about_bottom_right {\n\t\tmin-height: 400px;\n\t\twidth: 100%;\n\t\tfloat: left;\n\t}\n}\n\n@media (max-width: 767px){\n.navbar-default .navbar-toggle {\n\t\tborder-color: #ffffff;\n\t}\n.navbar-default .navbar-toggle .icon-bar {\n\t\tbackground-color: #ffffff;\n\t}\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n\t\tbackground-color:transparent;\n\t}\n.navbar-toggle {\n\t\tmargin: .5em 0 0;\n\t}\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n\t\tborder: none;\n\t\tposition: absolute;\n\t\twidth: 93%;\n\t\tbackground: rgba(0, 0, 0, 0.81);\n\t\tz-index: 999;\n\t}\n.navbar-nav > li > a {\n\t\tpadding: 0 0 0;\n\t\tmargin-bottom:0px;\n\t}\n.navbar-nav {\n\t\tmargin: 7px;\n\t\ttext-align: center;\n\t}\n.navbar-nav .open .dropdown-menu {\n\t\twidth: 50%;\n\t\tmargin: 0 auto;\n\t\tbackground-color: rgb(255, 255, 255);\n\t\tborder-radius: 0;\n\t}\n\t.navbar-nav {\n    float: none !important;\n}\n.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover, .navbar-default .navbar-nav>.open>a:focus {\n    background-color: rgba(73, 73, 73, 0.03) ! important;\n}\n.navbar-default .navbar-nav > li > a {\n    color: #fff;\n}\nnav#cl-effect-15 ul li {\n    display: block;\n}\n}\n\n@media (max-width: 736px){\n.navbar {\n    padding:0;\n}\n.navbar-toggle {\n    margin: 4px 14px 0 0;\n}\n.wthree-services {\n    width: 50%;\n    margin-bottom: 1em;\n\tfloat:left;\n}\n.wthree-top-grid {\n    margin-bottom: 2em;\n}\n.agileits-about-top {\n    padding: 0 0 1em;\n}\n.con-top {\n    margin-top: 1em;\n}\nh4.w3l-contact {\n    margin-bottom: 0;\n}\n}\n\n@media screen and (max-width: 667px){\n\t#typer {\n\t\tfont-size: 1.8em !important;\n\t\tletter-spacing: 1px;\n\t}\n\t.navbar-toggle {\n\t\ttop: -20%;\n\t}\n\t.top-middle li {\n    margin-left: 0px;\n}\n}\n\n@media screen and (max-width: 640px){\n\t.box, .box .overbox {\n\t\theight: 216px;\n\t}\n\t.top-left li {\n    margin-right: 0.5em;\n}\n.banner-1 {\n    min-height: 300px;\n}\n}\n\n@media screen and (max-width: 600px){\n\t#typer {\n\t\tfont-size: 1.7em !important;\n\t\tletter-spacing: 1px;\n\t}\n\t.top-banner-right ul li a {\n\t\tfont-size: 1em;\n\t}\n\t.top-banner-right ul li {\n\t\tmargin: 0 0.5em;\n\t}\n\t.top .top-left {\n    width: 62%;\n}\n.top .top-middle {\n    width: 37%;\n}\n.navbar-header {\n    margin-top: 0px;\n}\n.w3_agile_gallery_grid {\n    width: 100%;\n}\n.w3layouts_gallery_grid1_pos {\n    padding: 8em;\n}\n}\n\n@media screen and (max-width: 568px){\n\t#typer {\n\t\tfont-size: 1.6em !important;\n\t}\n\t.w3-banner p {\n\t\tfont-size: 13.5px;\n\t\tline-height: 26px;\n\t}\n\t.w3-banner {\n\t\tpadding: 6em 0;\n\t}\n\t.contactaddress h4 {\n\t\tfont-size: 17px;\n\t\tmargin-bottom: 7px;\n\t\tmargin-top: 10px;\n\t}\n\t.addressgrid1 i.fa {\n\t\tfont-size: 25px;\n\t}\n\t.navbar-default .navbar-brand {\n\t\tfont-size: 34px;\n\t}\n\t.aboutright {\n\t\tpadding: 20px 40px;\n\t}\n}\n\n@media screen and (max-width: 480px){\n\t#typer {\n\t\theight: 70px;\n\t}\n\th3.w3l-titles, h2.w3l-titles {\n    font-size: 2.2em;\n\t    margin-bottom: 1em;\n}\nh3.w3l-titles:before, h2.w3l-titles:before {\n    left: 23%;\n}\nh3.w3l-titles:after, h2.w3l-titles:after {\n    right: 23%;\n}\np.w3layouts_dummy_para {\n    font-size: 1.1em;\n}\n.w3_two_grid_right {\n    padding: 3em 1em 0;\n}\n.w3l-about-grids {\n    margin: 3em 0 0 0;\n}\n.w3_agileits_footer_grid h3 {\n    padding-left: 4em;\n}\n.ab-agile {\n    margin-top: 1em;\n}\n.top-left li {\n    font-size: 15px;\n}\n.w3layouts_gallery_grid1_pos {\n    padding: 6em;\n}\n.w3l-map iframe {\n    height: 250px;\n}\n}\n\n@media screen and (max-width: 414px){\n\t.w3ls-phone h2 {\n\t\tfont-size: 14px;\n\t}\n\t.top-banner-right ul li a {\n\t\tfont-size: 14px;\n\t}\n\t.top-banner-right {\n\t\tright: 5%;\n\t\tbottom: 5%;\n\t}\n\t.w3ls-phone {\n\t\tleft: 5%;\n\t\tbottom: 5%;\n\t}\n\t.navbar-default .navbar-brand {\n\t\tfont-size: 32px;\n\t}\n\t.aboutright {\n\t\tpadding: 20px 10px;\n\t}\n\t.addressgrid1 {\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.addressgrid1:nth-child(4), .addressgrid1:nth-child(5) {\n\t\tmargin-bottom: 30px;\n\t}\n\t.top .top-left {\n    width: 100%;\n    text-align: center;\n}\n.top .top-middle {\n    width: 100%;\n    text-align: center;\n    margin-top: 10px;\n}\n.icon-right {\n    width: 72%;\n}\n.icon-right h5 {\n    line-height: 1.5em;\n}\n.flex-active-slide p {\n    line-height: 25px;\n    width: 100%;\n    margin: 15px auto;\n    letter-spacing: 0px;\n}\n.banner-1 {\n    min-height: 260px;\n}\n.team-social-grids ul li {\n    margin: 0 .2em 0 0;\n}\n.wthree-top-grid h4 {\n    font-size: 20px;\n    margin: 10px 0;\n}\n.wthree-services {\n    width: 100%;\n}\n.w3layouts_gallery_grid1_pos {\n    padding: 4em;\n}\nsection.contact-w3ls h4 {\n    font-size: 1.8em;\n    letter-spacing: 1px;\n    color: #f1a70c;\n    padding: 1em 0;\n}\n}\n\n@media screen and (max-width: 384px){\n\t.w3l_about_bottom_left, .w3l_about_bottom_right {\n\t\tmin-height: 245px;\n\t}\n\t.w3-banner {\n    padding: 3em 0;\n}\n.icon-left {\n    margin-right: 0.5em;\n}\n.w3_agile_stats_grid-top {\n    width: 100%;\n}\n.wthree-agile-counter {\n    padding: 0em 0;\n}\n.wthree-team-grid-info {\n    padding: 1em 0.5em;\n}\n.w3layouts_gallery_grid1_pos {\n    padding: 3em;\n}\np.quia {\n    font-size: 1em;\n}\n}\n\n@media screen and (max-width: 375px){\n\t.top-banner-right {\n\t\tright: 32%;\n\t\tbottom: 1%;\n\t}\n\t.w3ls-phone {\n\t\tleft: 20%;\n\t\tbottom: 6%;\n\t}\n}\n\n@media screen and (max-width: 320px){\n\t.w3ls-phone {\n\t\tleft: 15%;\n\t\tmargin: 1em 0;\n\t}\n\t.about h4 {\n\t\tfont-size: 14px;\n\t\twidth: 100%;\n\t\tline-height: 30px;\n\t}\n\t.navbar-default .navbar-brand {\n\t\tfont-size: 28px;\n\t}\n\t.navbar-toggle {\n\t\tpadding: 8px 7px;\n\t}\n\t.flex-active-slide p {\n\t\twidth: 100%;\n\t}\n\t.w3-banner {\n\t\tpadding: 2em 0 3em;\n\t}\n\t.top-left li {\n    margin-right: 0;\n}\n.top-left li {\n    font-size: 15px;\n}\n.about {\n    padding: 2em 0;\n}\nh3.w3l-titles, h2.w3l-titles {\n    font-size: 2em;\n    margin-bottom: 1em;\n}\n.icon-left {\n    width: 55px;\n    height: 55px;\n    padding: 0.7em 0 0 0;\n}\n.w3ls-about-left {\n    padding: 0;\n}\nh3.w3l-titles:before, h2.w3l-titles:before {\n    left: 14%;\n}\nh3.w3l-titles:before, h3.w3l-titles:after, h2.w3l-titles:before, h2.w3l-titles:after {\n    width: 18%;\n}\nh3.w3l-titles:after, h2.w3l-titles:after {\n    right: 18%;\n}\n.w3_two_grid_right {\n    padding: 2em 0em 0;\n}\n.w3_two_grid_right_grid {\n    padding: 0;\n}\n.w3_two_grid_right_gridr h4 {\n    font-size: 1em;\n}\n.clients h4 {\n    letter-spacing: 0px;\n}\n.banner-dott1 {\n    padding: 2em 0;\n}\n.two-grids {\n    padding: 2em 0;\n}\n.w3_agileits_footer_grid h3 {\n    padding-left: 3em;\n}\n.w3_agileits_footer_grid h3 {\n    font-size: 1.3em;\n}\n.agileits_w3layouts_footer_grid h3 {\n    font-size: 1.3em;\n}\n.agileits_w3layouts_footer_grid {\n    padding-left: 1em;\n}\n.w3_agileits_footer_grid {\n    padding: 0;\n    margin-bottom: 1em;\n}\n.w3_agileits_footer_grid form {\n    border: 1px solid #fff;\n\tmargin: 1em 0 0;\n}\n.footer {\n    padding: 2em 0;\n}\n.w3_agileits_footer_grid input[type=\"submit\"] {\n    width: 31%;\n}\n.w3_agileits_footer_grid input[type=\"email\"] {\n    width: 67%;\n}\n.main-textgrids {\n    padding: 2em 0;\n}\n.banner-1 {\n    min-height: 230px;\n}\n.different {\n    padding: 2em 0;\n}\n.wthree-team-grid {\n    width: 100%;\n    margin-bottom: 1.5em;\n}\n.services {\n    padding: 2em 0;\n}\n.wthree-top-grid p {\n    line-height: 24px;\n}\n.wthree-services-grids {\n    margin: 2em 0 0 0;\n}\n.banner-bottom.gallery {\n    padding: 2em 0;\n}\n.agile_gallery_grid {\n    margin-top: 1em;\n}\n.w3_agile_gallery_grid {\n    padding: 0;\n}\n.w3layouts_gallery_grid1_pos {\n    padding: 2.5em;\n}\n.w3_wthree_agileits_icons.main-grid-border {\n    padding: 2em 0;\n}\n.typo {\n    padding: 2em 0;\n}\nsection.contact-w3ls {\n    padding: 2em 0;\n}\n.contact-w3-agile1 {\n    padding: 0;\n}\n.contact-w3-agile2 {\n    padding: 0;\n}\n.con-top {\n    margin-top: 0em;\n}\n}\n\n/*-- //responsive design --*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"footer\">\n    \n\t\t<div class=\"container\">\n        \n        \n\t\t\t<div class=\"row agileits_w3layouts_footer_grids\">\n          <div class=\"col-md-3\">\n              <img src=\"assets/mesonlogo.png\" class=\"center mb-2\" style=\"width:100%; height:auto\">\n          </div>\n        \n\t\t\t\t<div class=\"col-md-3 agileits_w3layouts_footer_grid\">\n          <h3>Direccion</h3>\n          <ul>\n              <li>Carrera 54 Avenida El...</li>\n              <li>Centro Commerical Automotriz, Local 104</li>\n              <li>Medellin, Colombia</li>          \n            </ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 agileits_w3layouts_footer_grid\">\n\t\t\t\t\t<h3>Horario</h3>\n\t\t\t\t\t<p>Lunes a Sabado <i>8AM a 3PM</i></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 agileits_w3layouts_footer_grid\">\n\t\t\t\t\t<h3>Contactenos</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><span>Correo :</span> <a href=\"mailto:info@example.com\">mesonautomotriz@gmail.com</a></li>\n\t\t\t\t\t\t<li><span>Telefono :</span> <a href=\"mailto:info@enquiry.com\">232-5168</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t</div>\n\t\t</div>\n  </div>\n  <div class=\"wthree_copy_right copyright\">\n      <div class=\"container\">\n        <p>© 2018. All rights reserved | Designed by JCL</p>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center pb-4 pt-3\">\n          <span class=\"text-primary\">\n            <i class=\"fa fa-lock\"></i> Client Panel </span> Login\n        </h1>\n\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\" Email></label>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" Password></label>\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" required>\n          </div>\n          <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                console.log(auth);
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessage.show("You are logged in!", {
                cssClass: 'alert-success', time: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessage.show(err.message, {
                cssClass: 'alert-danger', time: 4000
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n\n    <a routerLink=\"/\" class=\"navbar-brand\"> <img src=\"assets/mesonlogo.png\" style=\"width:80px; height:60px;\"> Restaurante El Meson</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    \n  <div class=\"container\">\n    \n    <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/\" class=\"nav-link\">Ordenes</a>\n        </li>\n        <li class=\"nav-item\">\n            <a routerLink=\"/\" class=\"nav-link\">Pagos</a>\n          </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n          <a routerLink=\"/register\" class=\"nav-link\">Register</a>\n        </li>\n        <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n          <a routerLink=\"/login\" class=\"nav-link\">Log In</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\">{{ loggedInUser }}</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a routerLink=\"/settings\" class=\"nav-link\">Settings</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a href='#' (click)=\"OnLogoutClick()\" class=\"nav-link\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage, settingsService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.showRegister = this.settingsService.getSettings().allowRegistration;
    };
    NavbarComponent.prototype.OnLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are now logged out", {
            cssClass: 'alert-success', time: 4000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/order-details/order-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n  /* ---------------------------------------------------------\n   Author's styles\n   ---------------------------------------------------------*/\n\n   /* Remove the navbar's default margin-bottom and rounded borders */\n\n   .navbar {\n    margin-bottom: 0;\n    border-radius: 0;\n  }\n\n   /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n\n   .row.content {height: 1030.5px}\n\n   /* Set gray background color and 100% height */\n\n   .sidenav {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: #f1f1f1;\n    height: 100%;\n  }\n\n   /* On small screens, set height to 'auto' for sidenav and grid */\n\n   @media screen and (max-width: 767px) {\n    .sidenav {\n      height: auto;\n      padding: 15px;\n    }\n    .row.content {height:auto;}\n  }\n\n   .button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 10px 10px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    width: 15%;\n  }\n\n   .editbutton {\n    background-color: #222222;\n    border: none;\n    border-radius: 8px;\n    color: white;\n    padding: 10px 10px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n\n   /*  th {\n    background-color: #4CAF50;\n    color: white;\n  }\n\n  th, td {\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black\n  }*/\n\n   .table > tbody > tr > td {\n   vertical-align: middle;\n }\n\n   input[type=\"password\"] {\n  color: #222222;\n }\n\n   ul.a {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #555;\n}\n\n   li.a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n  text-align: center;\n  border-bottom: 1px solid #555;\n}\n\n   li.a:last-child {\n  border-bottom: none;\n}\n\n   /* ---------------------------------------------------------\n   Print styles\n   ---------------------------------------------------------*/\n\n   @media print {\n    * {\n      color:#000 !important;\n      -webkit-box-shadow:none !important;\n              box-shadow:none !important;\n      text-shadow:none !important;\n      background:transparent !important;\n    }\n    html { background-color:#fff; }\n    /* Hide navigation */\n    nav { display:none; }\n\n    /* Show link destinations in brackets after the link text */\n    a[href]:after { content: \" (\" attr(href) \") \"; }\n    a[href] {\n      font-weight:bold;\n      text-decoration:underline;\n      color:#06c;\n      border:none;\n    }\n    /* Don't show link destinations for JavaScript or internal links */\n    a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after { content:\"\"; }\n\n    /* Show abbr title value in brackets after the text */\n    abbr[title]:after { content: \" (\" attr(title) \")\"; }\n\n    figure {\n      margin-bottom:1em;\n      overflow:hidden;\n    }\n\n    figure img { border:1px solid #000; }\n  }\n\n   .acknowledge{\n    color: #2780e3;\n  }\n\n   /*Night Mode*/\n\n   .night-mode{\n    background-color: black !important;;\n    color: white !important;;\n  }\n\n   .cat-holder.night-mode{\n    background-color: black; /*#4f535d */\n    border-style: solid;\n    border-color: white;\n  }\n\n   .panel-heading.night-mode{\n    background-color: #454545;\n    color: inherit;\n  }\n\n   .fields.night-mode{\n    background-color: #454545;\n    color: white;\n    border-style: solid;\n    border-color: white;\n  }\n\n   .password.night-mode{\n    border-style: solid;\n    border-color: white;\n  }\n\n   .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n    background-color: #2e82f4;\n  }\n\n   .table-striped>tbody>tr:nth-child(odd):hover> td{\n    background-color: #2e82f4;\n  }\n\n   .night-mode.table-striped>tbody>tr:nth-child(odd):hover> td{\n    background-color: #2e82f4;\n  }\n\n   .night-mode.table-striped>tbody>tr:nth-child(odd)>td,\ntr.found {\n    background-color:#454545;\n}\n\n   .col-sm-2.night-mode{\n  background-color:#454545;\n}\n\n   #night-mode{\n    background-color: black;\n  }\n\n   .ui-grid-row:nth-child(even) .ui-grid-cell {\n background-color: #454545 !important;;\n color: white !important;\n\n }\n\n   .ui-grid-row:nth-child(odd) .ui-grid-cell {\nbackground-color: black !important;\ncolor: white !important;\n}\n\n   .ui-grid-header-canvas{\n    background-color: black;\n}\n\n   .ui-grid-top-panel{\n    color: white;\n}\n\n   .ui-grid-row-selected.ui-grid-row:nth-child(odd) .ui-grid-cell.ui-grid-cell-focus,\n.ui-grid-row-selected.ui-grid-row:nth-child(even) .ui-grid-cell.ui-grid-cell-focus {\n  outline: 0 !important;\n  background-color: #2e82f4 !important;\n}\n\n   .ui-grid-row-selected.ui-grid-row:nth-child(odd):hover .ui-grid-cell,\n.ui-grid-row-selected.ui-grid-row:nth-child(even):hover .ui-grid-cell {\n  color: #000 !important;\n  background-color: #2e82f4 !important;\n}\n\n   .ui-grid-column-menu {\n  color: white !important;\n  background-color: black !important;\n}\n\n   .ui-grid-filter-input.ui-grid-filter-input-0{\n  color: white !important;\n  background-color: black !important;\n}\n\n   .ui-grid-menu-item{\n  color: white !important;\n  background-color: black !important;\n}\n\n   .ui-grid-icon-menu{\n  color: white !important;\n  background-color: black !important;\n}\n\n   .ui-grid-menu-button{\n  color: white !important;\n  background-color: black !important;\n}\n\n   .ui-grid-selection-row-header-buttons{\n  color: white !important;\n}\n\n   .glyphicon-question-sign{\n  font-size: 25px;\n}\n\n   .glyphicon-download{\n  font-size: 25px;\n  margin-left: 10px;\n}\n\n   .popover{\n    max-width: 100%; /* Max Width of the popover (depending on the container!) */\n}\n\n   .icon{\n  width:40px; \n  height:auto;\n}\n\n   .icon-sm{\n  width:20px; \n  height:auto;\n}\n\n   td{\n  text-align: center;\n}\n\n   th{\n  text-align: center;\n}\n\n   .modal {\n  text-align: center;\n  padding: 0!important;\n  background: rgba(0,0,0,0.6);\n}\n\n   .modal:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -4px; /* Adjusts for spacing */\n  \n}\n\n   .modal-dialog {\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n  min-width: 500px;\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order-details/order-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i>\n      Regresar\n    </a>\n\n  </div>\n  <div class=\"col-md-6\">\n    <div *ngIf=\"isAdmin\" class=\"btn-group pull-right\">\n      <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">\n        Borrar Orden\n      </button>\n    </div>\n  </div>\n</div>\n<hr>\n<div *ngIf=\"order\" class=\"card\">\n\n  <h3 class=\"card-header\">Orden: {{order.id}} </h3>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"cold-md-8 col-sm-6\">\n        <label>\n          <img src=\"assets/user.svg\" class=\"icon-sm\">\n          <b>Cliente:</b> {{order.customerName}}</label>\n        <br>\n        <label>\n          <img src=\"assets/home.svg\" class=\"icon-sm\">\n          <b>Direccion:</b> {{currentOrderEmail}}</label>\n      </div>\n      <div class=\"cold-md-8 col-sm-6\">\n        <h3 class=\"pull-right\">\n          Precio Total\n          <span [class.text-danger]=\"hasBalance\" [class.text-success]=\"!hasBalance\">\n            {{totalPrice | currency:'USD': 'symbol' | changeDecimal}}\n          </span>\n        </h3>\n      </div>\n    </div>\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div *ngIf=\"isAdmin\" class=\"clearfix\">\n          <form (submit)=\"updateStatus()\">\n            <div class=\"input-group\">\n              <label class=\"mr-2\">\n                <img src=\"assets/list.svg\" class=\"icon-sm\">\n                <b> Estado de Pedido: </b>\n              </label>\n              <select [value]=\"order.status\" style=\"max-width: 40%\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"order.status\">\n                <option *ngFor=\"let x of statusOptions\" value={{x}}>{{x}} </option>\n              </select>\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\">Actualizar</button>\n              </span>\n            </div>\n          </form>\n        </div>\n        <div *ngIf=\"!isAdmin\">\n          <label>\n            <img src=\"assets/list.svg\" class=\"icon-sm\">\n            <b>Estado de Pedido:</b>\n            <i *ngIf=\"order.status == 'Recibida' \" class=\"fa fa-square-o\"></i>\n            <i *ngIf=\"order.status == 'Aprobado' \" class=\"fa fa-check-square-o\"></i>\n            <i *ngIf=\"order.status == 'Rechazada' \" class=\"fa fa-exclamation-triangle\"></i>\n            <i *ngIf=\"order.status == 'Lista' \" class=\"fa fa-star\"></i>\n            <i *ngIf=\"order.status == 'Enviada' \" class=\"fa fa-paper-plane\"></i>\n            {{order.status}}\n          </label>\n        </div>\n      </li>\n\n      <li class=\"list-group-item\">\n        <div class=\"clearfix\">\n          <form (submit)=\"updateStatus()\">\n            <div class=\"input-group\">\n              <label class=\"mr-2\">\n                <img src=\"assets/notepad.svg\" class=\"icon-sm\">\n                <b>Nota / Instrucciones Especiales:</b>\n              </label>\n              <textarea class=\"form-control\" name=\"note\" rows=\"1\" [(ngModel)]=\"order.note\" style=\"max-width: 40%\"></textarea>\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\">Actualizar</button>\n              </span>\n            </div>\n          </form>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <img src=\"assets/time.svg\" class=\"icon-sm\">\n        <b>Hora Recibida:</b> {{order.timeReceived | date:'dd-MM-yyyy HH:mm a'}} |\n        <b>Hora Enviada:</b> {{order.timeEnviada | date:'dd-MM-yyyy HH:mm a'}}</li>\n    </ul>\n    <hr>\n    <h4>\n      <img src=\"assets/cart.svg\" class=\"icon\"> Items\n      <button *ngIf=\"isAdmin\" class=\"btn btn-success btn-sm\" (click)=\"openDialog()\">\n        <i class=\"fa fa-plus\"></i> Adicionar Item </button>\n    </h4>\n    <div style=\"overflow:scroll; max-height:400px;\">\n      <table class=\"table table-striped table-hover\" style='margin:auto; width:100%'>\n        <thead>\n          <tr>\n            <th>Descripción</th>\n            <th>Cantidad</th>\n            <th>Precio por Unidad</th>\n            <th>Precio Total</th>\n            <th>Borrar</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let lineItem of order.lineItems; let i = index\">\n            <td>{{lineItem.description}}</td>\n            <td>{{lineItem.quantity}}</td>\n            <td>{{lineItem.pricePerUnit | currency:'USD': 'symbol' | changeDecimal }}</td>\n            <td>{{lineItem.quantity * lineItem.pricePerUnit | currency:'USD': 'symbol' | changeDecimal }}</td>\n            <td>\n              <a class='text-center' (click)=\"deleteLineItem(i) \" class=\"btn btn-secondary btn-sm\">\n                <i class=\"fa fa-trash\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n  </div>\n  <a *ngIf=\"isAdmin\" (click)=\"submitOrder()\" class=\"btn btn-md btn-warning\">\n    <i class=\"fa fa-plus\"></i> Actualizar Order\n  </a>\n  <br>\n  <br>\n\n</div>\n\n<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog modal-lg\" style=\"overflow:scroll;\">\n    <div class=\"modal-content\" style=\"overflow:scroll;\">\n      <br>\n      <div class=\"modal-header\" style=\"overflow:scroll;\">\n\n        <h3>Adicionar {{selectedListTitle}}</h3>\n      </div>\n      <div class=\"modal-body\" style=\"overflow:scroll;\">\n\n        <div style=\"overflow:scroll;\" *ngIf=\"!selectionIsVisible && !completoIsVisible \">\n          <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('seco')\">\n            <img src=\"assets/seco.svg\" class=\"icon\"> Seco </button>\n          <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('sopa')\">\n            <img src=\"assets/sopa.svg\" class=\"icon\"> Sopa </button>\n          <button class=\"btn btn-primary btn-lg\" (click)=\"showSelection('bebiba')\">\n            <img src=\"assets/juice.svg\" class=\"icon\"> Bebiba </button>\n          <button class=\"btn btn-primary btn-lg\" (click)=\"showCompleto()\">\n            <img src=\"assets/completo.svg\" class=\"icon\"> Completo </button>\n        </div>\n\n        <div *ngIf=\"selectionIsVisible\">\n\n          <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n            <div class=\"col-sm-10\">\n              <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newLineItem.quantity\">\n                <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n              </select>\n            </div>\n          </div>\n\n          <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newLineItem.inventoryId\">\n            <option *ngFor=\"let x of selectedList\" value={{x.id}}>{{x.description}} ({{x.price | currency:'USD': 'symbol' | changeDecimal }})</option>\n          </select>\n          <br>\n\n          <h4>Total: {{newLineItem.quantity * getNewLineItemPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewItem()\">\n              <i class=\"fa fa-plus\"></i> Agregar Nuevo Item</button>\n          </div>\n        </div>\n\n        <div *ngIf=\"completoIsVisible\">\n          <form>\n\n            <div class=\"form-group row\">\n              <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n              <div class=\"col-sm-10\">\n                <select [value]=1 class=\"form-control\" name=\"quantity\" [(ngModel)]=\"newCompletoItem.quantity\">\n                  <option *ngFor=\"let x of quantityOptions\" value={{x}}>{{x}} </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Seco</label>\n              <div class=\"col-sm-10\">\n                <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.seco\">\n                  <option *ngFor=\"let x of secoItems\" value={{x.description}}>{{x.description}} </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Sopa</label>\n              <div class=\"col-sm-10\">\n                <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.sopa\">\n                  <option *ngFor=\"let x of sopaItems\" value={{x.description}}>{{x.description}} </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Bebiba</label>\n              <div class=\"col-sm-10\">\n                <select [value]=\"undefined\" class=\"form-control\" name=\"inventoryId\" [(ngModel)]=\"newCompletoItem.bebiba\">\n                  <option *ngFor=\"let x of bebibaItems\" value={{x.description}}>{{x.description}}</option>\n                </select>\n              </div>\n            </div>\n          </form>\n          <h4>Total: {{newCompletoItem.quantity * getNewCompletoPrice() | currency:'USD': 'symbol' | changeDecimal }}</h4>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"hide()\">Cancelar</button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewCompleto()\">\n              <i class=\"fa fa-plus\"></i>Agregar Nuevo Item</button>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/order-details/order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_item_dialog_add_item_dialog_component__ = __webpack_require__("../../../../../src/app/components/add-item-dialog/add-item-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(orderService, customerService, router, route, flashMessage, authService, inventoryService, dialog) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.inventoryService = inventoryService;
        this.dialog = dialog;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
        this.visible = false;
        this.visibleAnimate = false;
        this.totalPrice = 0;
        this.newLineItem = {
            inventoryId: '',
            quantity: 1,
            description: '',
            pricePerUnit: 0
        };
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
        this.statusOptions = ['Recibida', 'Aprobada', 'Rechazada', 'Lista', 'Enviada'];
        this.quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.statusSelectionIsVisible = true;
        this.secoIsVisible = this.sopaIsVisible = this.bebibaIsVisible = false;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.email = auth.email;
            }
            //Get customer
            _this.customerService.getCustomer(_this.email).subscribe(function (customer) {
                if (customer != null) {
                    _this.isAdmin = customer.role == "admin" ? true : false;
                    _this.customer = customer;
                }
            });
        });
        //Get id from url 
        this.id = this.route.snapshot.params['id'];
        //this.ErrorMessageIsVisible = false;
        this.inventoryService.getInventoryItems().subscribe(function (inventoryItems) {
            _this.inventoryItems = inventoryItems;
        });
        this.inventoryService.getCompletos().subscribe(function (completos) {
            _this.completos = completos;
        });
        this.inventoryService.getSecos().subscribe(function (secos) {
            _this.secoItems = secos;
            _this.selectedList = _this.secoItems;
        });
        this.inventoryService.getSopas().subscribe(function (sopas) {
            _this.sopaItems = sopas;
        });
        this.inventoryService.getBebibas().subscribe(function (bebibas) {
            _this.bebibaItems = bebibas;
        });
        //Get order
        this.orderService.getOrder(this.id).subscribe(function (order) {
            if (order != null) {
                _this.order = order;
                _this.getTotalPrice();
                _this.getCustomerAddress(order.customerEmail);
            }
        });
    };
    OrderDetailsComponent.prototype.updateBalance = function () {
        this.orderService.updateOrder(this.order);
        this.flashMessage.show('Balance updated', {
            cssClass: 'alert-success', timeout: 4000
        });
    };
    OrderDetailsComponent.prototype.getCustomerAddress = function (email) {
        var _this = this;
        this.customerService.getCustomer(email).subscribe(function (customer) {
            if (customer != null) {
                _this.currentOrderEmail = customer.address;
            }
        });
    };
    OrderDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm('Seguro que quieres borrarlo ?')) {
            this.orderService.deleteOrder(this.order);
            this.flashMessage.show('Order Removed', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    OrderDetailsComponent.prototype.show = function () {
        this.selectedListTitle = "Item Nuevo";
    };
    OrderDetailsComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.resetNewLineItem();
        this.selectionIsVisible = false;
        this.completoIsVisible = false;
        //this.selectedListTitle = "Nuevo Item";
    };
    OrderDetailsComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    OrderDetailsComponent.prototype.showSeco = function () {
        this.secoIsVisible = true;
        this.selectedList = this.sopaItems;
    };
    OrderDetailsComponent.prototype.showSopa = function () {
        this.sopaIsVisible = true;
    };
    OrderDetailsComponent.prototype.showBebiba = function () {
        this.bebibaIsVisible = true;
    };
    OrderDetailsComponent.prototype.showCompleto = function () {
        this.completoIsVisible = true;
        this.selectionIsVisible = false;
        this.selectedListTitle = "Almuerzo Completo";
    };
    OrderDetailsComponent.prototype.showSelection = function (type) {
        this.selectionIsVisible = true;
        switch (type) {
            case "sopa":
                this.selectedList = this.sopaItems;
                this.selectedListTitle = "Sopa";
                break;
            case "seco":
                this.selectedList = this.secoItems;
                this.selectedListTitle = "Seco";
                break;
            case "bebiba":
                this.selectedList = this.bebibaItems;
                this.selectedListTitle = "Bebiba";
                break;
        }
        this.resetNewLineItem();
    };
    OrderDetailsComponent.prototype.resetNewLineItem = function () {
        this.newLineItem = {
            'inventoryId': '',
            'quantity': 1,
            'description': '',
            'pricePerUnit': 0
        };
    };
    OrderDetailsComponent.prototype.resetCompleto = function () {
        this.newCompletoItem = {
            id: '',
            quantity: 1,
            bebiba: '',
            seco: '',
            sopa: ''
        };
    };
    OrderDetailsComponent.prototype.addNewItem = function () {
        if (!this.newLineItem.inventoryId || this.newLineItem.quantity == 0) {
            return; //add error message
        }
        var inventoryItem = this.getNewLineInventoryItem();
        this.newLineItem.pricePerUnit = inventoryItem.price;
        this.newLineItem.description = inventoryItem.description;
        this.order.lineItems.push(this.newLineItem);
        this.flashMessage.show("Item nuevo agregado", {
            cssClass: 'alert-success', timeout: 4000
        });
        this.hide();
        this.resetNewLineItem();
        this.getTotalPrice();
        this.selectedListTitle = "Item Nuevo";
    };
    OrderDetailsComponent.prototype.addNewCompleto = function () {
        if (!this.newCompletoItem.bebiba || !this.newCompletoItem.seco || !this.newCompletoItem.sopa) {
            return; //TODO Add error message
        }
        this.newLineItem.inventoryId = "completo";
        this.newLineItem.quantity = this.newCompletoItem.quantity;
        this.newLineItem.pricePerUnit = this.getNewCompletoPrice();
        this.newLineItem.description = this.newCompletoItem.seco + " | " + this.newCompletoItem.sopa + " | " + this.newCompletoItem.bebiba;
        if (this.newLineItem.quantity > 0) {
            this.order.lineItems.push(this.newLineItem);
            this.flashMessage.show("Item nuevo agregado", {
                cssClass: 'alert-success', timeout: 4000
            });
            this.hide();
            this.getTotalPrice();
            this.resetCompleto();
            this.selectedListTitle = "Item Nuevo";
        }
    };
    OrderDetailsComponent.prototype.getNewLineItemPrice = function () {
        var _this = this;
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
        return tempItem ? tempItem.price : 0;
    };
    OrderDetailsComponent.prototype.getNewCompletoPrice = function () {
        var tempItem = this.inventoryItems.find(function (item) {
            return item.id === 'completo';
        });
        return tempItem ? tempItem.price : 0;
    };
    OrderDetailsComponent.prototype.getNewLineInventoryItem = function () {
        var _this = this;
        return this.inventoryItems.find(function (item) {
            return item.id === _this.newLineItem.inventoryId;
        });
    };
    OrderDetailsComponent.prototype.getTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        this.totalPrice = sum;
    };
    OrderDetailsComponent.prototype.deleteLineItem = function (index) {
        if (confirm('Seguro que quieres borrarlo?')) {
            this.order.lineItems.splice(index, 1);
            this.flashMessage.show('Item Eliminado', {
                cssClass: 'alert-success', timeout: 4000
            });
        }
        this.getTotalPrice();
    };
    OrderDetailsComponent.prototype.getOrderTotalPrice = function () {
        var sum = 0;
        this.order.lineItems.forEach(function (value, index) {
            sum += (value.pricePerUnit * value.quantity);
        });
        return sum;
    };
    OrderDetailsComponent.prototype.submitOrder = function () {
        this.updateStatus();
        this.flashMessage.show('Orden actualizada', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
    };
    OrderDetailsComponent.prototype.updateStatus = function () {
        this.order.totalPrice = this.getOrderTotalPrice();
        if (this.order.status == 'Enviada') {
            this.order.timeEnviada = new Date();
        }
        if (this.order.status == 'Rechazada') {
            this.order.timeEnviada = '';
        }
        this.orderService.updateOrder(this.order);
        this.flashMessage.show('Estado actualizado', {
            cssClass: 'alert-success', timeout: 4000
        });
    };
    OrderDetailsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogConfig */]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        //dialogConfig.height = '80%';
        //dialogConfig.width = '60%';
        this.selectedListTitle = "Item Nuevo";
        dialogConfig.data = {
            selectedListTitle: "Item Nuevo"
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__add_item_dialog_add_item_dialog_component__["a" /* AddItemDialogComponent */], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            _this.addNewLineItem(data.newLineItem);
        });
    };
    OrderDetailsComponent.prototype.addNewLineItem = function (item) {
        this.order.lineItems.push(item);
        this.flashMessage.show("Item nuevo agregado", {
            cssClass: 'alert-success', timeout: 4000
        });
        this.resetNewLineItem();
        this.getTotalPrice();
    };
    OrderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__("../../../../../src/app/components/order-details/order-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_inventory_service__["a" /* InventoryService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialog */]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td{\n    text-align: center;\n  }\n  th{\n    text-align: center;\n  }\n  /* \nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n  @media \nonly screen and (max-width: 1000px)  {\n\n\t/* Force table to not be like tables anymore */\n\ttable, thead, tbody, th, td, tr { \n\t\tdisplay: block; \n\t}\n\t\n\t/* Hide table headers (but not display: none;, for accessibility) */\n\tthead tr { \n\t\tposition: absolute;\n\t\ttop: -9999px;\n\t\tleft: -9999px;\n\t}\n\t\n\ttr { border: 1px solid #ccc; }\n\t\n\ttd { \n\t\t/* Behave  like a \"row\" */\n\t\tborder: none;\n\t\tborder-bottom: 1px solid #eee; \n\t\tposition: relative;\n\t\tpadding-left: 50%; \n\t}\n\t\n\ttd:before { \n\t\t/* Now like a table header */\n\t\tposition: absolute;\n\t\t/* Top/left values mimic padding */\n\t\ttop: 6px;\n\t\tleft: 6px;\n\t\twidth: 45%; \n\t\tpadding-right: 10px; \n\t\twhite-space: nowrap;\n\t}\n\t\n\t/*\n\tLabel the data\n\t*/\n\ttd:nth-of-type(1):before { content: \"Orden\"; }\n\ttd:nth-of-type(2):before { content: \"Cliente\"; }\n\ttd:nth-of-type(3):before { content: \"Hora\"; }\n\ttd:nth-of-type(4):before { content: \"Hora Recibida\"; }\n  td:nth-of-type(5):before { content: \"Precio\"; }\n  td:nth-of-type(6):before { content: \"Estado\"; }\n  td:nth-of-type(7):before { content: \"Detalles\"; }\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <h2>\n        <i class=\"fa fa-cutlery\"></i> Ordenes</h2>\n    </div>\n    <div class=\"col-md-9\" style=\"text-align: right;\">\n      <h3 *ngIf=\"isMenuDay\">{{today | date:'dd-MM-yyyy' }} <br> Menu del Dia: {{menuDelDia}}</h3>\n      <h3 *ngIf=\"!isMenuDay\">No hay menu del dia hoy :(</h3>\n    </div>\n  </div>\n\n  <div class='panel panel-primary'>\n    <div class='panel-body' style=\"overflow:scroll;\">\n      <table *ngIf=\"orders?.length > 0; else noOrders\" class=\"table table-striped\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>Numero de Orden</th>\n            <th *ngIf=\"isAdmin\">Cliente</th>\n            <th>Hora Recibida</th>\n            <th>Hora Enviada</th>\n            <th>Precio</th>\n            <th>Estado</th>\n            <th>Detalles</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of orders\">\n            <td>\n              <a routerLink=\"order/{{ order.id }}\">{{order.id}}</a>\n            </td>\n            <td *ngIf=\"isAdmin\">{{order.customerName}}</td>\n            <td>{{order.timeReceived | date:'dd-MM-yyyy HH:mm a' }}</td>\n            <td>{{order.timeEnviada | date:'dd-MM-yyyy HH:mm a'}}</td>\n            <td>{{order.totalPrice | currency:'USD': 'symbol' | changeDecimal}}</td>\n            <td>\n              <i *ngIf=\"order.status == 'Recibida' \" class=\"fa fa-square-o\"></i>\n              <i *ngIf=\"order.status == 'Aprobada' \" class=\"fa fa-check-square-o\"></i>\n              <i *ngIf=\"order.status == 'Rechazada' \" class=\"fa fa-exclamation-triangle\"></i>\n              <i *ngIf=\"order.status == 'Lista' \" class=\"fa fa-star\"></i>\n              <i *ngIf=\"order.status == 'Enviada' \" class=\"fa fa-paper-plane\"></i>\n              {{order.status}}\n            </td>\n            <td>\n              <a routerLink=\"order/{{ order.id }}\" class=\"btn btn-secondary btn-sm\">\n                <i class=\"fa fa-info-circle\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <ng-template #noOrders>\n        <hr>\n        <h5>No hay ordenes!</h5>\n      </ng-template>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(clientService, orderService, customerService, authService, inventoryService, dialog) {
        this.clientService = clientService;
        this.orderService = orderService;
        this.customerService = customerService;
        this.authService = authService;
        this.inventoryService = inventoryService;
        this.dialog = dialog;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = new Date();
        this.isMenuDay = true;
        this.today.setFullYear(2018);
        this.today.setMonth(2);
        this.today.setDate(24);
        //sunday is 0 
        if (this.today.getDay() == 0) {
            this.isMenuDay = false;
        }
        this.inventoryService.getInventoryItem('menu-del-dia').subscribe(function (item) {
            _this.menuDelDia = item.description;
        });
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.email = auth.email;
            }
            //Get customer
            _this.customerService.getCustomer(_this.email).subscribe(function (customer) {
                if (customer != null) {
                    _this.isAdmin = customer.role == "admin" ? true : false;
                }
                _this.orderService.getOrders(_this.email, _this.isAdmin).subscribe(function (orders) {
                    _this.orders = orders;
                    _this.customerService.getCustomers().subscribe(function (customers) {
                        _this.customers = customers;
                        _this.orders.forEach(function (value, index) {
                            var customer = _this.customers.find(function (customer) {
                                return customer.id === value.customerEmail;
                            });
                            if (customer) {
                                value.customerName = customer.name;
                            }
                            else {
                                value.customerName = "Name not found";
                            }
                        });
                    });
                });
            });
        });
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_inventory_service__["a" /* InventoryService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatDialog */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h1 class=\"text-center pb-4 pt-3\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-lock\"></i> Client Panel </span> Register\n          </h1>\n  \n          <form (submit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"email\" Email></label>\n              <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\" Password></label>\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" required>\n            </div>\n            <input type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            _this.flashMessage.show("You are now registered", {
                cssClass: 'alert-success', time: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessage.show(err.message, {
                cssClass: 'alert-danger', time: 4000
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i>\n      Back to Dashboard\n    </a>\n\n  </div>\n  <div class=\"col-md-6\">\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Edit Settings\n    </div>\n\n    <div class=\"card-body\">\n\n        <form (submit)=\"updateMenu()\">\n            <div class=\"input-group\">\n              <label class=\"mr-2\">\n                <img src=\"assets/notepad.svg\" class=\"icon-sm\">\n                <b>Menu del Dia:</b>\n              </label>\n              <textarea class=\"form-control\" name=\"description\" rows=\"1\" [(ngModel)]=\"menuDelDia.description\" style=\"max-width: 40%\"></textarea>\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\">Actualizar</button>\n              </span>\n            </div>\n          </form>\n\n      <form (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label>Allow Registration</label>\n          <input type=\"checkbox\" name=\"allowRegistration\" [checked]=\"settings.allowRegistration\" (change)=\"settings.allowRegistration = !settings.allowRegistration\">\n        </div>\n        <div class=\"form-group\">\n          <label>Disable Balance on Add</label>\n          <input type=\"checkbox\" name=\"disableBalanceOnAdd\" [checked]=\"settings.disableBalanceOnAdd\" (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\">\n        </div>\n        <div class=\"form-group\">\n          <label>Disable Balance on Edit</label>\n          <input type=\"checkbox\" name=\"disableBalanceOnEdit\" [checked]=\"settings.disableBalanceOnEdit\" (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\">\n        </div>\n        <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n      </form>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, flashMessage, settingsService, inventoryService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
        this.inventoryService = inventoryService;
        this.menuDelDia = {
            id: 'menu-del-dia',
            description: '',
            type: '',
            price: 0
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = this.settingsService.getSettings();
        this.inventoryService.getInventoryItem('menu-del-dia').subscribe(function (item) {
            _this.menuDelDia = item;
        });
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this.flashMessage.show("Settings saved!", {
            cssClass: 'alert-success', time: 4000
        });
    };
    SettingsComponent.prototype.updateMenu = function () {
        this.inventoryService.updateInventoryItem(this.menuDelDia);
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__["a" /* InventoryService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"isAdmin\" routerLink=\"/admin/order/add\" class=\"btn btn-success btn-block \">\n    <i class=\"fa fa-plus \"></i> New Order\n</a>\n\n<a *ngIf=\"!isAdmin\" routerLink=\"/order/add\" class=\"btn btn-success btn-block \">\n    <i class=\"fa fa-plus \"></i> New Order\n</a>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.checkAdmin().subscribe(function (response) {
            _this.isAdmin = response;
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, afAuth, customerService, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.customerService = customerService;
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.getAuth().switchMap(function (auth) {
            //Check for admin priv.
            return _this.customerService.getCustomer(auth.email).map(function (customer) {
                if (customer.role == "admin") {
                    return true;
                }
                else {
                    _this.router.navigate(['/']);
                    return false;
                }
            });
        });
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(router, settingService) {
        this.router = router;
        this.settingService = settingService;
    }
    RegisterGuard.prototype.canActivate = function () {
        if (this.settingService.getSettings().allowRegistration) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    RegisterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth, customerService) {
        this.afAuth = afAuth;
        this.customerService = customerService;
        this.checkAdmin();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        if (this.auth) {
            return this.auth;
        }
        else {
            this.auth = this.afAuth.authState.map(function (auth) { return auth; });
            return this.auth;
        }
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.checkAdmin = function () {
        var _this = this;
        return this.getAuth().switchMap(function (auth) {
            //Check for admin priv.
            return _this.customerService.getCustomer(auth.email).map(function (customer) {
                if (customer.role == "admin") {
                    return true;
                }
                else {
                    //this.router.navigate(['/']);
                    return false;
                }
            });
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(afs) {
        this.afs = afs;
        this.clientsCollection = this.afs.collection('clients', function (ref) { return ref.orderBy('lastName', 'asc'); });
    }
    ClientService.prototype.getClients = function () {
        this.clients = this.clientsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.clients;
    };
    ClientService.prototype.newClient = function (client) {
        this.clientsCollection.add(client);
    };
    ClientService.prototype.getClient = function (id) {
        this.clientDoc = this.afs.doc("clients/" + id);
        this.client = this.clientDoc.snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        });
        return this.client;
    };
    ClientService.prototype.updateClient = function (client) {
        this.clientDoc = this.afs.doc("clients/" + client.id);
        this.clientDoc.update(client);
    };
    ClientService.prototype.deleteClient = function (client) {
        this.clientDoc = this.afs.doc("clients/" + client.id);
        this.clientDoc.delete();
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "../../../../../src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService(afs) {
        this.afs = afs;
        this.customersCollection = this.afs.collection('customers', function (ref) { return ref.orderBy('name', 'asc'); });
    }
    CustomerService.prototype.getCustomers = function () {
        this.customers = this.customersCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.customers;
    };
    CustomerService.prototype.newCustomer = function (customer) {
        this.customersCollection.add(customer);
    };
    CustomerService.prototype.getCustomer = function (id) {
        this.customerDoc = this.afs.doc("customers/" + id);
        this.customer = this.customerDoc.snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        });
        return this.customer;
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        this.customerDoc = this.afs.doc("customers/" + customer.id);
        this.customerDoc.update(customer);
    };
    CustomerService.prototype.deleteCustomer = function (customer) {
        this.customerDoc = this.afs.doc("customers/" + customer.id);
        this.customerDoc.delete();
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/inventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryService = /** @class */ (function () {
    function InventoryService(afs) {
        this.afs = afs;
        this.inventoryItemsCollection = this.afs.collection('inventory_items');
        this.completosCollection = this.afs.collection('completos');
        this.secosCollection = this.afs.collection('inventory_items', function (ref) { return ref.where("type", "==", "seco"); });
        this.sopasCollection = this.afs.collection('inventory_items', function (ref) { return ref.where("type", "==", "sopa"); });
        this.bebibasCollection = this.afs.collection('inventory_items', function (ref) { return ref.where("type", "==", "bebiba"); });
    }
    InventoryService.prototype.getInventoryItems = function () {
        this.inventoryItems = this.inventoryItemsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.inventoryItems;
    };
    InventoryService.prototype.getCompletos = function () {
        this.completos = this.completosCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.completos;
    };
    InventoryService.prototype.getSecos = function () {
        this.secos = this.secosCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.secos;
    };
    InventoryService.prototype.getSopas = function () {
        this.sopas = this.sopasCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.sopas;
    };
    InventoryService.prototype.getBebibas = function () {
        this.bebibas = this.bebibasCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.bebibas;
    };
    InventoryService.prototype.newInventoryItem = function (inventoryItem) {
        this.inventoryItemsCollection.add(inventoryItem);
    };
    InventoryService.prototype.getInventoryItem = function (id) {
        this.inventoryItemDoc = this.afs.doc("inventory_items/" + id);
        this.inventoryItem = this.inventoryItemDoc.snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        });
        return this.inventoryItem;
    };
    InventoryService.prototype.updateInventoryItem = function (inventoryItem) {
        this.inventoryItemDoc = this.afs.doc("inventory_items/" + inventoryItem.id);
        this.inventoryItemDoc.update(inventoryItem);
    };
    InventoryService.prototype.deleteInventoryItem = function (inventoryItem) {
        this.inventoryItemDoc = this.afs.doc("inventory_items/" + inventoryItem.id);
        this.inventoryItemDoc.delete();
    };
    InventoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = /** @class */ (function () {
    function OrderService(afs, authService, customerSerivce) {
        this.afs = afs;
        this.authService = authService;
        this.customerSerivce = customerSerivce;
        this.ordersCollection = this.afs.collection('orders');
    }
    OrderService.prototype.getOrders = function (email, isAdmin) {
        if (isAdmin) {
            this.ordersCollection = this.afs.collection('orders', function (ref) { return ref.orderBy("timeReceived", "desc"); });
        }
        else {
            this.ordersCollection = this.afs.collection('orders', function (ref) { return ref.orderBy("timeReceived", "desc").where("customerEmail", "==", email); });
        }
        this.orders = this.ordersCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.orders;
    };
    OrderService.prototype.newOrder = function (order) {
        this.ordersCollection.add(order)
            .then(function (res) {
            console.log("success order added");
        })
            .catch(function (err) {
            console.log("error" + err);
        });
    };
    OrderService.prototype.getOrder = function (id) {
        this.orderDoc = this.afs.doc("orders/" + id);
        this.order = this.orderDoc.snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        });
        return this.order;
    };
    OrderService.prototype.updateOrder = function (order) {
        this.orderDoc = this.afs.doc("orders/" + order.id);
        this.orderDoc.update(order);
    };
    OrderService.prototype.deleteOrder = function (order) {
        this.orderDoc = this.afs.doc("orders/" + order.id);
        this.orderDoc.delete();
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: true,
            disableBalanceOnAdd: false,
            disableBalanceOnEdit: true
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAKh8YWK_A9jSOxhAMKFDjhMjw03z3UGhU",
        authDomain: "apollo1-dd725.firebaseapp.com",
        databaseURL: "https://apollo1-dd725.firebaseio.com",
        projectId: "apollo1-dd725",
        storageBucket: "apollo1-dd725.appspot.com",
        messagingSenderId: "212129545158"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map