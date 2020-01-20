(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/news/news-detail/news-detail.component */ "./src/app/news/news-detail/news-detail.component.ts");
/* harmony import */ var _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/news/create-news/create-news.component */ "./src/app/news/create-news/create-news.component.ts");
/* harmony import */ var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/auth/login/register/register.component */ "./src/app/auth/login/register/register.component.ts");
/* harmony import */ var _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/auth/not-authorized/not-authorized.component */ "./src/app/auth/not-authorized/not-authorized.component.ts");
/* harmony import */ var _app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/auth/services/auth-guard.service */ "./src/app/auth/services/auth-guard.service.ts");
/* harmony import */ var _app_auth_services_role_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/auth/services/role.enum */ "./src/app/auth/services/role.enum.ts");
/* harmony import */ var _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/auth/login/phone-login/phone-login.component */ "./src/app/auth/login/phone-login/phone-login.component.ts");
/* harmony import */ var _app_users_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/users/manage-users/manage-users.component */ "./src/app/users/manage-users/manage-users.component.ts");
/* harmony import */ var _app_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/users/edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/news/news-list/news-list.component */ "./src/app/news/news-list/news-list.component.ts");
















const routes = [
    {
        path: 'news', component: _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_13__["NewsListComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    },
    {
        path: 'login', component: _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    },
    {
        path: 'phone-login', component: _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_10__["PhoneLoginComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    },
    {
        path: 'register', component: _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    },
    {
        path: 'create',
        component: _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_4__["CreateNewsComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        accessAllowedTo: _app_auth_services_role_enum__WEBPACK_IMPORTED_MODULE_9__["Role"].AUTHOR
    },
    {
        path: 'create/:id',
        component: _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_4__["CreateNewsComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        accessAllowedTo: _app_auth_services_role_enum__WEBPACK_IMPORTED_MODULE_9__["Role"].AUTHOR
    },
    {
        path: 'users',
        component: _app_users_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__["ManageUsersComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        accessAllowedTo: _app_auth_services_role_enum__WEBPACK_IMPORTED_MODULE_9__["Role"].ADMIN
    },
    {
        path: 'users/:id',
        component: _app_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        thisUserOrAdmin: true
    },
    {
        path: 'news/:id', component: _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_3__["NewsDetailComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    },
    {
        path: 'unauthorized', component: _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_7__["NotAuthorizedComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    },
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    {
        path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
        canActivate: [_app_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        permitAll: true
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_app_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/news/news-list/news-list.component */ "./src/app/news/news-list/news-list.component.ts");
/* harmony import */ var _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _app_auth_directives_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/auth/directives/is-creator-or-admin.directive */ "./src/app/auth/directives/is-creator-or-admin.directive.ts");
/* harmony import */ var _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/news/news-detail/news-detail.component */ "./src/app/news/news-detail/news-detail.component.ts");
/* harmony import */ var _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/news/create-news/create-news.component */ "./src/app/news/create-news/create-news.component.ts");
/* harmony import */ var _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/images-carousel/images-carousel.component */ "./src/app/images-carousel/images-carousel.component.ts");
/* harmony import */ var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/auth/login/register/register.component */ "./src/app/auth/login/register/register.component.ts");
/* harmony import */ var _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/auth/not-authorized/not-authorized.component */ "./src/app/auth/not-authorized/not-authorized.component.ts");
/* harmony import */ var _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/auth/login/phone-login/phone-login.component */ "./src/app/auth/login/phone-login/phone-login.component.ts");
/* harmony import */ var _app_users_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/users/manage-users/manage-users.component */ "./src/app/users/manage-users/manage-users.component.ts");
/* harmony import */ var _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/auth/directives/is-admin.directive */ "./src/app/auth/directives/is-admin.directive.ts");
/* harmony import */ var _app_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/users/edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_auth_directives_is_author_or_admin_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/auth/directives/is-author-or-admin.directive */ "./src/app/auth/directives/is-author-or-admin.directive.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _app_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__["NewsListComponent"],
        _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
        _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_16__["NewsDetailComponent"],
        _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_17__["CreateNewsComponent"],
        _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_18__["ImagesCarouselComponent"],
        _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
        _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
        _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_21__["NotAuthorizedComponent"],
        _app_auth_directives_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_15__["IsCreatorOrAdminDirective"],
        _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_22__["PhoneLoginComponent"],
        _app_users_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_23__["ManageUsersComponent"],
        _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_24__["IsAdminDirective"],
        _app_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_25__["EditUserComponent"],
        _app_auth_directives_is_author_or_admin_directive__WEBPACK_IMPORTED_MODULE_28__["IsAuthorOrAdminDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _app_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__["NewsListComponent"],
                    _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                    _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_16__["NewsDetailComponent"],
                    _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_17__["CreateNewsComponent"],
                    _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_18__["ImagesCarouselComponent"],
                    _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                    _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                    _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_21__["NotAuthorizedComponent"],
                    _app_auth_directives_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_15__["IsCreatorOrAdminDirective"],
                    _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_22__["PhoneLoginComponent"],
                    _app_users_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_23__["ManageUsersComponent"],
                    _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_24__["IsAdminDirective"],
                    _app_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_25__["EditUserComponent"],
                    _app_auth_directives_is_author_or_admin_directive__WEBPACK_IMPORTED_MODULE_28__["IsAuthorOrAdminDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot()
                ],
                bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/directives/is-admin.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/directives/is-admin.directive.ts ***!
  \*******************************************************/
/*! exports provided: IsAdminDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminDirective", function() { return IsAdminDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");





class IsAdminDirective {
    constructor(viewContainerRef, templateRef, firebaseAuth) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.firebaseAuth = firebaseAuth;
        this.isVisible = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.updateTemplateState();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    updateTemplateState() {
        this.checkPermissions().subscribe(isPermitted => {
            if (isPermitted && !this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else if (!isPermitted) {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        });
    }
    checkPermissions() {
        return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => user && user.roles.admin));
    }
}
IsAdminDirective.ɵfac = function IsAdminDirective_Factory(t) { return new (t || IsAdminDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"])); };
IsAdminDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IsAdminDirective, selectors: [["", "appIsAdmin", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsAdminDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appIsAdmin]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/directives/is-author-or-admin.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/directives/is-author-or-admin.directive.ts ***!
  \*****************************************************************/
/*! exports provided: IsAuthorOrAdminDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthorOrAdminDirective", function() { return IsAuthorOrAdminDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");





class IsAuthorOrAdminDirective {
    constructor(viewContainerRef, templateRef, firebaseAuth) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.firebaseAuth = firebaseAuth;
        this.isVisible = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.updateTemplateState();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    updateTemplateState() {
        this.checkPermissions().subscribe(isPermitted => {
            if (isPermitted && !this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else if (!isPermitted) {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        });
    }
    checkPermissions() {
        return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => user && (user.roles.author || user.roles.admin)));
    }
}
IsAuthorOrAdminDirective.ɵfac = function IsAuthorOrAdminDirective_Factory(t) { return new (t || IsAuthorOrAdminDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"])); };
IsAuthorOrAdminDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IsAuthorOrAdminDirective, selectors: [["", "appIsAuthorOrAdmin", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsAuthorOrAdminDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appIsAuthorOrAdmin]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/directives/is-creator-or-admin.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/auth/directives/is-creator-or-admin.directive.ts ***!
  \******************************************************************/
/*! exports provided: IsCreatorOrAdminDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCreatorOrAdminDirective", function() { return IsCreatorOrAdminDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");





class IsCreatorOrAdminDirective {
    constructor(viewContainerRef, templateRef, firebaseAuth) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.firebaseAuth = firebaseAuth;
        this.isVisible = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.updateTemplateState();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    updateTemplateState() {
        this.checkPermissions().subscribe(isPermitted => {
            if (isPermitted && !this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else if (!isPermitted) {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        });
    }
    checkPermissions() {
        return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => user && (user.roles.author && this.appIsCreatorOrAdmin === user.id || user.roles.admin)));
    }
}
IsCreatorOrAdminDirective.ɵfac = function IsCreatorOrAdminDirective_Factory(t) { return new (t || IsCreatorOrAdminDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"])); };
IsCreatorOrAdminDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IsCreatorOrAdminDirective, selectors: [["", "appIsCreatorOrAdmin", ""]], inputs: { appIsCreatorOrAdmin: "appIsCreatorOrAdmin" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsCreatorOrAdminDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appIsCreatorOrAdmin]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] }]; }, { appIsCreatorOrAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");








class LoginComponent {
    constructor(fb, firebaseAuth, router, toastr) {
        this.fb = fb;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.toastr = toastr;
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    ngOnInit() {
        this.buildForm();
    }
    signInWithEmailAndPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.loginWithEmailAndPassword(this.email.value, this.password.value);
            this.toastr.success(null, 'Logged in with email');
            this.router.navigate(['/news']);
        });
    }
    loginWithGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.loginWithGoogle();
            this.toastr.success(null, 'Logged in with Google');
            this.router.navigate(['/news']);
        });
    }
    loginWithFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.loginWithFacebook();
            this.toastr.success(null, 'Logged in with Facebook');
            this.router.navigate(['/news']);
        });
    }
    loginWithGithub() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.loginWithGithub();
            this.toastr.success(null, 'Logged in with Github');
            this.router.navigate(['/news']);
        });
    }
    buildForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 2, consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], [1, "col-8"], [1, "w-50", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "row"], [1, "col-7", "d-flex", "justify-content-between"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-warning"], [1, "col-4", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "routerLink", "/phone-login", 1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener($event) { return ctx.signInWithEmailAndPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener($event) { return ctx.loginWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Login with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener($event) { return ctx.loginWithFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Login with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener($event) { return ctx.loginWithGithub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Login with Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Login with phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/phone-login/phone-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/login/phone-login/phone-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhoneLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneLoginComponent", function() { return PhoneLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/auth/login/phone-login/window.service */ "./src/app/auth/login/phone-login/window.service.ts");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function (a0) { return { disabled: a0 }; };
class PhoneLoginComponent {
    constructor(win, firebaseAuth, router, fb, toastr) {
        this.win = win;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.setupRecaptchaVerifier();
        this.buildForm();
    }
    sendLoginCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const phoneNumber = this.obtainPhoneNumber();
            this.confirmationResult = yield this.firebaseAuth.loginWithPhoneNumber(phoneNumber, this.windowRef.recaptchaVerifier);
            this.toastr.success(null, 'Confirmation code sent');
        });
    }
    verifyLoginCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credential = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider
                .credential(this.confirmationResult.verificationId, this.verificationCodeControl.value);
            yield this.firebaseAuth.loginWithCredentials(credential);
            this.toastr.success(null, 'Logged in with phone');
            this.router.navigate(['/news']);
        });
    }
    setupRecaptchaVerifier() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.windowRef = this.win.windowRef;
            this.windowRef.recaptchaVerifier = this.firebaseAuth.getRecaptchaVerifier('recaptcha-container');
            this.windowRef.recaptchaWidgetId = yield this.windowRef.recaptchaVerifier.render();
        });
    }
    buildForm() {
        this.phoneGroup = this.fb.group({
            prefix: ['+48', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9+]*')]],
            first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            second: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            third: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]]
        });
        this.verificationCodeControl = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]);
    }
    obtainPhoneNumber() {
        return this.phoneGroup.get('prefix').value + this.phoneGroup.get('first').value +
            this.phoneGroup.get('second').value + this.phoneGroup.get('third').value;
    }
}
PhoneLoginComponent.ɵfac = function PhoneLoginComponent_Factory(t) { return new (t || PhoneLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
PhoneLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhoneLoginComponent, selectors: [["app-phone-login"]], decls: 36, vars: 8, consts: [[1, "container", "mb-5"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "prefix", "placeholder", "+48", 1, "form-control"], [1, "mx-3", "d-inline"], ["type", "text", "formControlName", "first", "placeholder", "123", 1, "form-control"], ["type", "text", "formControlName", "second", "placeholder", "456", 1, "form-control"], ["type", "text", "formControlName", "third", "placeholder", "789", 1, "form-control"], ["id", "recaptcha-container"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "ngClass"], ["type", "text", "placeholder", "123456", 1, "ml-3", "mt-2", "form-control", 3, "formControl"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function PhoneLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign In with Your Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PhoneLoginComponent_Template_form_ngSubmit_3_listener($event) { return ctx.sendLoginCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Send SMS code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Enter your Verification Code Here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PhoneLoginComponent_Template_button_click_34_listener($event) { return ctx.verifyLoginCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.phoneGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.phoneGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx.confirmationResult));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.verificationCodeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !ctx.confirmationResult ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.verificationCodeControl.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]], styles: [".disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9waG9uZS1sb2dpbi9DOlxcVXNlcnNcXGp3b3pueVxcRGVza3RvcFxcTmV3cy1idWxsZXRpbi9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXHBob25lLWxvZ2luXFxwaG9uZS1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9waG9uZS1sb2dpbi9waG9uZS1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL3Bob25lLWxvZ2luL3Bob25lLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiIsIi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhoneLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-phone-login',
                templateUrl: './phone-login.component.html',
                styleUrls: ['./phone-login.component.scss']
            }]
    }], function () { return [{ type: _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/phone-login/window.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/login/phone-login/window.service.ts ***!
  \**********************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WindowService {
    get windowRef() {
        return window;
    }
}
WindowService.ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
WindowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowService, factory: WindowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/login/register/password.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/login/register/password.validator.ts ***!
  \***********************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class PasswordValidator {
    static matchPasswords(control) {
        if (control.get('password').value === control.get('repeatedPassword').value) {
            return null;
        }
        else {
            control.get('repeatedPassword').setErrors({ MatchPassword: true });
        }
    }
}


/***/ }),

/***/ "./src/app/auth/login/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/login/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_auth_login_register_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/login/register/password.validator */ "./src/app/auth/login/register/password.validator.ts");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class RegisterComponent {
    constructor(fb, firebaseAuth, router) {
        this.fb = fb;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
    }
    get email() {
        return this.registerForm.get('email');
    }
    get password() {
        return this.registerForm.get('password');
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            repeatedPassword: ['']
        }, {
            validator: _app_auth_login_register_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].matchPasswords
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.createUser(this.email.value, this.password.value);
            this.router.navigate(['/news']);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 21, vars: 2, consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], [1, "col-8"], [1, "w-50", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "repeatedPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/not-authorized/not-authorized.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/not-authorized/not-authorized.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotAuthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function() { return NotAuthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotAuthorizedComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotAuthorizedComponent.ɵfac = function NotAuthorizedComponent_Factory(t) { return new (t || NotAuthorizedComponent)(); };
NotAuthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotAuthorizedComponent, selectors: [["app-not-authorized"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function NotAuthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unauthorized!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbm90LWF1dGhvcml6ZWQvbm90LWF1dGhvcml6ZWQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAuthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-authorized',
                templateUrl: './not-authorized.component.html',
                styleUrls: ['./not-authorized.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/auth/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");





class AuthGuard {
    constructor(router, firebaseAuth) {
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.accessDeniedUrlTree = router.parseUrl('/unauthorized');
    }
    canActivate(route, state) {
        const routeConfig = route.routeConfig;
        if (routeConfig.permitAll) {
            return true;
        }
        if (routeConfig.accessAllowedTo) {
            return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => (user && user.roles[routeConfig.accessAllowedTo] ? true : this.accessDeniedUrlTree)));
        }
        if (routeConfig.thisUserOrAdmin) {
            return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => (user && (user.id === route.paramMap.get('id') || user.roles.admin) ?
                true : this.accessDeniedUrlTree)));
        }
        return this.accessDeniedUrlTree;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/services/firebase-auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/services/firebase-auth.service.ts ***!
  \********************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_auth_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/auth/user */ "./src/app/auth/user.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");









class FirebaseAuthService {
    constructor(afAuth, firestoreService) {
        this.afAuth = afAuth;
        this.firestoreService = firestoreService;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.afAuth.user
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(user => user ?
            this.firestoreService.getUser(user.uid) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(user => this._user.next(user));
    }
    get user() {
        return this._user.asObservable();
    }
    get userValue() {
        return this._user.value;
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    createUser(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            this.createUserDoc(credentials.user);
        });
    }
    loginWithEmailAndPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.createUserDoc(credentials.user);
        });
    }
    loginWithGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
            this.createUserDoc(credentials.user);
        });
    }
    loginWithFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider());
            this.createUserDoc(credentials.user);
        });
    }
    loginWithGithub() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GithubAuthProvider());
            this.createUserDoc(credentials.user);
        });
    }
    loginWithCredentials(credential) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.afAuth.auth.signInWithCredential(credential);
            yield this.createUserDoc(credentials.user);
        });
    }
    loginWithPhoneNumber(number, appVerifier) {
        return this.afAuth.auth.signInWithPhoneNumber(number, appVerifier);
    }
    getRecaptchaVerifier(containerId) {
        return new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].RecaptchaVerifier(containerId);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
        });
    }
    createUserDoc(authData) {
        const userData = Object.assign({}, new _app_auth_user__WEBPACK_IMPORTED_MODULE_4__["User"](authData));
        const doc = this.firestoreService.getUser(authData.uid);
        doc
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(user => {
            if (!user) {
                this.firestoreService.createUser(authData.uid, userData);
            }
        });
    }
}
FirebaseAuthService.ɵfac = function FirebaseAuthService_Factory(t) { return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"])); };
FirebaseAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirebaseAuthService, factory: FirebaseAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/services/role.enum.ts":
/*!********************************************!*\
  !*** ./src/app/auth/services/role.enum.ts ***!
  \********************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["AUTHOR"] = "author";
    Role["ADMIN"] = "admin";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/auth/user.ts":
/*!******************************!*\
  !*** ./src/app/auth/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(authData) {
        this.id = authData.uid;
        this.email = authData.email;
        this.name = authData.displayName;
        this.roles = { author: true };
    }
}


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_auth_directives_is_author_or_admin_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/auth/directives/is-author-or-admin.directive */ "./src/app/auth/directives/is-author-or-admin.directive.ts");
/* harmony import */ var _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/auth/directives/is-admin.directive */ "./src/app/auth/directives/is-admin.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create news");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manage users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_9_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r40 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/users/" + user_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r40.name ? user_r40.name : user_r40.email ? user_r40.email : user_r40.id, " ");
} }
function HeaderComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(firebaseAuth, router, toastr) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.toastr = toastr;
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.logout();
            this.toastr.error('Logged out');
            this.router.navigate(['/news']);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "mb-4"], ["routerLink", "/news", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "appIsAuthorOrAdmin"], ["class", "nav-item", 4, "appIsAdmin"], ["class", "d-flex", 4, "ngIf", "ngIfElse"], ["login", ""], [1, "nav-item"], ["routerLink", "/create", 1, "nav-link"], ["routerLink", "/users", 1, "nav-link"], [1, "d-flex"], [1, "btn", "btn-link", 3, "routerLink"], [1, "btn", "btn-danger", "ml-4", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-success"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "News bulletin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_ng_template_11_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 2, ctx.firebaseAuth.user))("ngIfElse", _r38);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _app_auth_directives_is_author_or_admin_directive__WEBPACK_IMPORTED_MODULE_6__["IsAuthorOrAdminDirective"], _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_7__["IsAdminDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/images-carousel/images-carousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/images-carousel/images-carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: ImagesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCarouselComponent", function() { return ImagesCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




function ImagesCarouselComponent_ngb_carousel_0_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ImagesCarouselComponent_ngb_carousel_0_1_ng_template_0_Template_div_dblclick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const i_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.removeUrl(i_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", url_r45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImagesCarouselComponent_ngb_carousel_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagesCarouselComponent_ngb_carousel_0_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function ImagesCarouselComponent_ngb_carousel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesCarouselComponent_ngb_carousel_0_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.imagesUrls);
} }
class ImagesCarouselComponent {
    constructor() {
        this.imageRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    removeUrl(i) {
        this.imageRemoved.emit(i);
    }
}
ImagesCarouselComponent.ɵfac = function ImagesCarouselComponent_Factory(t) { return new (t || ImagesCarouselComponent)(); };
ImagesCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagesCarouselComponent, selectors: [["app-images-carousel"]], inputs: { imagesUrls: "imagesUrls" }, outputs: { imageRemoved: "imageRemoved" }, decls: 1, vars: 1, consts: [[3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "dblclick"], ["alt", "one of images", 3, "src"]], template: function ImagesCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagesCarouselComponent_ngb_carousel_0_Template, 2, 3, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagesUrls == null ? null : ctx.imagesUrls.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy1jYXJvdXNlbC9pbWFnZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-images-carousel',
                templateUrl: './images-carousel.component.html',
                styleUrls: ['./images-carousel.component.scss']
            }]
    }], function () { return []; }, { imagesUrls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/news/create-news/create-news.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/create-news/create-news.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsComponent", function() { return CreateNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/images-carousel/images-carousel.component */ "./src/app/images-carousel/images-carousel.component.ts");














function CreateNewsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNewsComponent_ng_template_17_Template_span_click_0_listener($event) { const openFileSelector_r8 = ctx.openFileSelector; return openFileSelector_r8(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Drop files here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNewsComponent_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateNewsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateNewsComponent_span_20_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const format_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", format_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r11 < ctx_r7.allowedFormats.length - 1);
} }
class CreateNewsComponent {
    constructor(fb, firestoreService, firebaseAuth, router, toastr, route) {
        this.fb = fb;
        this.firestoreService = firestoreService;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allowedFormats = ['.jpg', '.png', '.jpeg'];
        this.imagesUrls = [];
        this.imagesDuringUpload = 0;
    }
    get title() {
        return this.newsForm.get('title');
    }
    get content() {
        return this.newsForm.get('content');
    }
    ngOnInit() {
        this.buildForm();
        this.loadNewsData();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    dropped(files) {
        for (const droppedFile of files) {
            if (this.isFileAllowed(droppedFile)) {
                ++this.imagesDuringUpload;
                const fileEntry = droppedFile.fileEntry;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"])(this.fileEntryFileObservable(fileEntry)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(file => this.firestoreService.uploadFile(droppedFile.relativePath, file)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["ignoreElements"])()), this.firestoreService.getFileUrl(droppedFile.relativePath))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                    .subscribe(url => {
                    --this.imagesDuringUpload;
                    this.imagesUrls.push(url);
                    this.toastr.success(null, 'Image uploaded');
                });
            }
        }
    }
    fileEntryFileObservable(fileEntry) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => fileEntry.file(file => {
            observer.next(file);
            observer.complete();
        }));
    }
    isFileAllowed(droppedFile) {
        return droppedFile.fileEntry.isFile &&
            this.allowedFormats.some(format => droppedFile.relativePath.toLowerCase().endsWith(format));
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.newsId) {
                const docId = yield this.firestoreService
                    .createNews({
                    content: this.content.value,
                    title: this.title.value,
                    imagesUrls: this.imagesUrls,
                    author: {
                        id: this.firebaseAuth.userValue.id,
                        name: this.firebaseAuth.userValue.name,
                        email: this.firebaseAuth.userValue.email
                    },
                    modified: Date.now(),
                    created: Date.now()
                });
                this.toastr.success('News created');
                this.router.navigate(['/news', docId]);
            }
            else {
                yield this.firestoreService
                    .updateNews({
                    content: this.content.value,
                    title: this.title.value,
                    imagesUrls: this.imagesUrls,
                    id: this.newsId,
                    modified: Date.now()
                });
                this.toastr.warning('News edited');
                this.router.navigate(['/news', this.newsId]);
            }
        });
    }
    onImageRemoved(urlId) {
        this.imagesUrls.splice(urlId, 1);
        this.toastr.error(null, 'Image removed');
    }
    buildForm() {
        this.newsForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    loadNewsData() {
        this.newsId = this.route.snapshot.paramMap.get('id');
        if (!this.newsId) {
            return;
        }
        this.firestoreService.getNews(this.newsId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(news => {
            if (!this.canUserModifyThisNews(news.author)) {
                this.router.navigate(['/unauthorized']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(newsItem => {
            this.title.setValue(newsItem.title);
            this.content.setValue(newsItem.content);
            this.imagesUrls = newsItem.imagesUrls;
        });
    }
    canUserModifyThisNews(author) {
        const loggedInUser = this.firebaseAuth.userValue;
        return loggedInUser.roles.author && author.id === loggedInUser.id || loggedInUser.roles.admin;
    }
}
CreateNewsComponent.ɵfac = function CreateNewsComponent_Factory(t) { return new (t || CreateNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
CreateNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateNewsComponent, selectors: [["app-create-news"]], decls: 27, vars: 4, consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], [1, "col-8"], [1, "w-50", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "title", 1, "form-control"], ["formControlName", "content", 1, "form-control"], [1, "mb-3"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop"], ["ngx-file-drop-content-tmp", ""], [1, "mt-3"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "row"], [1, "col-3"], [1, "col-6"], [3, "imagesUrls", "imageRemoved"], [3, "click"], [4, "ngIf"]], template: function CreateNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New news");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateNewsComponent_Template_form_ngSubmit_6_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-file-drop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFileDrop", function CreateNewsComponent_Template_ngx_file_drop_onFileDrop_16_listener($event) { return ctx.dropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateNewsComponent_ng_template_17_Template, 2, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Formats allowed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CreateNewsComponent_span_20_Template, 3, 2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "app-images-carousel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageRemoved", function CreateNewsComponent_Template_app_images_carousel_imageRemoved_26_listener($event) { return ctx.onImageRemoved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allowedFormats);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.newsForm.valid || ctx.imagesDuringUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imagesUrls", ctx.imagesUrls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_11__["ImagesCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["ngx-file-drop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\napp-images-carousel[_ngcontent-%COMP%]  img {\n  width: 34rem;\n  height: 24rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9jcmVhdGUtbmV3cy9DOlxcVXNlcnNcXGp3b3pueVxcRGVza3RvcFxcTmV3cy1idWxsZXRpbi9zcmNcXGFwcFxcbmV3c1xcY3JlYXRlLW5ld3NcXGNyZWF0ZS1uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL2NyZWF0ZS1uZXdzL2NyZWF0ZS1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL25ld3MvY3JlYXRlLW5ld3MvY3JlYXRlLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3gtZmlsZS1kcm9wIHtcclxuICBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmFwcC1pbWFnZXMtY2Fyb3VzZWw6Om5nLWRlZXAgaW1nIHtcclxuICB3aWR0aDogMzRyZW07XHJcbiAgaGVpZ2h0OiAyNHJlbTtcclxufVxyXG4iLCJuZ3gtZmlsZS1kcm9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFwcC1pbWFnZXMtY2Fyb3VzZWw6Om5nLWRlZXAgaW1nIHtcbiAgd2lkdGg6IDM0cmVtO1xuICBoZWlnaHQ6IDI0cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-news',
                templateUrl: './create-news.component.html',
                styleUrls: ['./create-news.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/news/news-detail/news-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/news-detail/news-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/auth/login/phone-login/window.service */ "./src/app/auth/login/phone-login/window.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_auth_directives_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/auth/directives/is-creator-or-admin.directive */ "./src/app/auth/directives/is-creator-or-admin.directive.ts");
/* harmony import */ var _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/images-carousel/images-carousel.component */ "./src/app/images-carousel/images-carousel.component.ts");









function NewsDetailComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsDetailComponent_div_0_div_31_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.editDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit news");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsDetailComponent_div_0_div_31_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete news");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { userId: a0 }; };
function NewsDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Author: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Created: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Modified: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NewsDetailComponent_div_0_div_31_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-images-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const newsItem_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](newsItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](newsItem_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, newsItem_r1.author.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](newsItem_r1.author.name ? newsItem_r1.author.name : newsItem_r1.author.email ? newsItem_r1.author.email : newsItem_r1.author.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 9, ctx_r0.getDate(newsItem_r1.created), "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 12, ctx_r0.getDate(newsItem_r1.modified), "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appIsCreatorOrAdmin", newsItem_r1.author.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagesUrls", newsItem_r1.imagesUrls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-href", "https:/jakubo96.github.io/news/" + newsItem_r1.id);
} }
class NewsDetailComponent {
    constructor(route, router, toastr, firestoreService, windowService) {
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.firestoreService = firestoreService;
        this.windowService = windowService;
    }
    ngOnInit() {
        this.loadProductDetails();
    }
    ngAfterViewChecked() {
        this.windowService.windowRef.FB.XFBML.parse();
    }
    loadProductDetails() {
        this.newsId = this.route.snapshot.paramMap.get('id');
        this.newsItem$ = this.firestoreService.getNews(this.newsId);
    }
    deleteDocument() {
        this.firestoreService.removeNews(this.newsId);
        this.toastr.error(null, 'News removed');
        this.router.navigate(['/news']);
    }
    editDocument() {
        this.router.navigate(['/create', this.newsId]);
    }
    getDate(created) {
        return new Date(created);
    }
}
NewsDetailComponent.ɵfac = function NewsDetailComponent_Factory(t) { return new (t || NewsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"])); };
NewsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsDetailComponent, selectors: [["app-news-detail"]], decls: 2, vars: 3, consts: [["class", "container text-center mb-5", 4, "ngIf"], [1, "container", "text-center", "mb-5"], [1, "row"], [1, "col"], [1, "col-2"], [1, "col-8"], [1, "text-break", "content"], [1, "row", "mb-3"], [1, "d-inline"], ["routerLink", "/news", 3, "queryParams"], [1, "row", "mb-2"], ["class", "row my-4", 4, "appIsCreatorOrAdmin"], [1, "row", "mb-4"], [3, "imagesUrls"], [1, "col-1"], ["data-width", "", "data-numposts", "5", 1, "fb-comments"], [1, "row", "my-4"], [1, "col-4"], [1, "col-4", "d-flex", "justify-content-around"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function NewsDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsDetailComponent_div_0_Template, 40, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.newsItem$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _app_auth_directives_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_6__["IsCreatorOrAdminDirective"], _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_7__["ImagesCarouselComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["app-images-carousel[_ngcontent-%COMP%]  img {\n  width: 48rem;\n  height: 40rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLWRldGFpbC9DOlxcVXNlcnNcXGp3b3pueVxcRGVza3RvcFxcTmV3cy1idWxsZXRpbi9zcmNcXGFwcFxcbmV3c1xcbmV3cy1kZXRhaWxcXG5ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlcy1jYXJvdXNlbDo6bmctZGVlcCBpbWcge1xyXG4gIHdpZHRoOiA0OHJlbTtcclxuICBoZWlnaHQ6IDQwcmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuIiwiYXBwLWltYWdlcy1jYXJvdXNlbDo6bmctZGVlcCBpbWcge1xuICB3aWR0aDogNDhyZW07XG4gIGhlaWdodDogNDByZW07XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-detail',
                templateUrl: './news-detail.component.html',
                styleUrls: ['./news-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }, { type: _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/news/news-list/news-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/news/news-list/news-list.component.ts ***!
  \*******************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function NewsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r25 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Posts of user: ", user_r25.name ? user_r25.name : user_r25.email ? user_r25.email : user_r25.id, "");
} }
function NewsListComponent_ng_container_3_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go to detail page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r31.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r31.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", news_r31.id);
} }
function NewsListComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsListComponent_ng_container_3_ng_container_1_div_2_Template, 9, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-pagination", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NewsListComponent_ng_container_3_ng_container_1_Template_ngb_pagination_pageChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const newsList_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.newsListPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx_r27.page)("pageSize", ctx_r27.pageSize)("collectionSize", newsList_r26.length);
} }
function NewsListComponent_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No news available :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsListComponent_ng_container_3_ng_container_1_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsListComponent_ng_container_3_ng_template_2_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const newsList_r26 = ctx.ngIf;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", newsList_r26.length)("ngIfElse", _r28);
} }
class NewsListComponent {
    constructor(firestoreService, route, router) {
        this.firestoreService = firestoreService;
        this.route = route;
        this.router = router;
        this._page = 1;
        this.page$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._page);
        this.pageSize = 12;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = value;
        this.page$.next(value);
    }
    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.loadNewsList();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    loadNewsList() {
        const userId = this.route.snapshot.queryParamMap.get('userId');
        if (userId) {
            this.newsList$ = this.firestoreService.getNewsForGivenUser(userId);
            this.user$ = this.firestoreService.getUser(userId);
        }
        else {
            this.newsList$ = this.firestoreService.newsList$;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.newsList$, this.page$
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe(([news, page]) => this.newsListPage = news.slice(this.pageSize * (page - 1), this.pageSize * page));
    }
}
NewsListComponent.ɵfac = function NewsListComponent_Factory(t) { return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsListComponent, selectors: [["app-news-list"]], decls: 5, vars: 6, consts: [[1, "container", "mb-5"], ["class", "row mb-4", 4, "ngIf"], [4, "ngIf"], [1, "row", "mb-4"], [1, "col"], [4, "ngIf", "ngIfElse"], ["noNews", ""], [1, "row"], ["class", "col-4 mb-4", 4, "ngFor", "ngForOf"], [1, "row", "mt-3", "d-flex", "justify-content-center"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "col-4", "mb-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function NewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsListComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsListComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.newsList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".card-text[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLWxpc3QvQzpcXFVzZXJzXFxqd296bnlcXERlc2t0b3BcXE5ld3MtYnVsbGV0aW4vc3JjXFxhcHBcXG5ld3NcXG5ld3MtbGlzdFxcbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRleHQsIC5jYXJkLXRpdGxlIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuIiwiLmNhcmQtdGV4dCwgLmNhcmQtdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-list',
                templateUrl: './news-list.component.html',
                styleUrls: ['./news-list.component.scss']
            }]
    }], function () { return [{ type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/firestore/firestore-collections.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/firestore/firestore-collections.ts ***!
  \*************************************************************/
/*! exports provided: FirestoreCollections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreCollections", function() { return FirestoreCollections; });
class FirestoreCollections {
}
FirestoreCollections.NEWS = 'news';
FirestoreCollections.USERS = 'users';


/***/ }),

/***/ "./src/app/services/firestore/firestore.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/firestore/firestore.service.ts ***!
  \*********************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/firestore/firestore-collections */ "./src/app/services/firestore/firestore-collections.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");








class FirestoreService {
    constructor(afs, storage) {
        this.afs = afs;
        this.storage = storage;
        this._newsDocs = new Map();
        this._newsItems$ = new Map();
        this.initializeCollections();
    }
    get newsList$() {
        return this._newsList$;
    }
    get usersList$() {
        return this._usersCollection.valueChanges();
    }
    initializeCollections() {
        this.initializeNews();
        this.initializeUsers();
    }
    initializeNews() {
        this._newsCollection = this.afs.collection(_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].NEWS, ref => ref.orderBy('modified', 'desc'));
        this._newsList$ = this._newsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getNewsForGivenUser(userId) {
        return this._newsList$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(news => news.filter(item => item.author.id === userId)));
    }
    initializeUsers() {
        this._usersCollection = this.afs.collection(_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].USERS);
        this._usersList$ = this._usersCollection.valueChanges();
    }
    getNews(id) {
        if (this._newsItems$.has(id)) {
            return this._newsItems$.get(id);
        }
        const { newsItem } = this.loadNewNews(id);
        return newsItem;
    }
    createNews(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._newsCollection.add(item);
            return res.id;
        });
    }
    updateNews(item) {
        this.getNewsDoc(item.id).update(item);
        this.initializeNews();
    }
    removeNews(id) {
        this.getNewsDoc(id).delete();
        this._newsDocs.delete(id);
        this._newsItems$.delete(id);
        this.initializeNews();
    }
    removeUser(id) {
        this.getUserDoc(id).delete();
    }
    uploadFile(filePath, file) {
        const ref = this.storage.ref(filePath);
        return ref.put(file).percentageChanges();
    }
    getFileUrl(filePath) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => this.storage.ref(filePath).getDownloadURL().subscribe(value => {
            observer.next(value);
            observer.complete();
        }));
    }
    getNewsDoc(id) {
        if (this._newsDocs.has(id)) {
            return this._newsDocs.get(id);
        }
        const { newsDoc } = this.loadNewNews(id);
        return newsDoc;
    }
    loadNewNews(id) {
        const newsDoc = this.afs.doc(`${_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].NEWS}/${id}`);
        const newsItem = newsDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(source => {
            const data = source.payload.data();
            return Object.assign({ id }, data);
        }));
        this._newsDocs.set(id, newsDoc);
        this._newsItems$.set(id, newsItem);
        return { newsDoc, newsItem };
    }
    getUser(id) {
        return this.getUserDoc(id).valueChanges();
    }
    getUserDoc(id) {
        return this._usersCollection.doc(id);
    }
    createUser(id, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._usersCollection.doc(id).set(user);
        });
    }
    updateUser(item) {
        this.getUserDoc(item.id).update(item);
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/auth/services/firebase-auth.service */ "./src/app/auth/services/firebase-auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/auth/directives/is-admin.directive */ "./src/app/auth/directives/is-admin.directive.ts");












function EditUserComponent_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_div_3_ng_container_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserComponent_div_3_ng_container_19_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.removeUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_div_3_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_div_3_ng_container_19_button_1_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { userId: a0 }; };
function EditUserComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditUserComponent_div_3_Template_form_ngSubmit_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditUserComponent_div_3_div_14_Template, 11, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditUserComponent_div_3_ng_container_19_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r15.editedUser.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.editedUser.name ? ctx_r15.editedUser.name : ctx_r15.editedUser.email ? ctx_r15.editedUser.email : ctx_r15.editedUser.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r15.userGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r15.userGroup.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.isThisUser);
} }
class EditUserComponent {
    constructor(fb, route, toastr, firestoreService, firebaseAuth, router) {
        this.fb = fb;
        this.route = route;
        this.toastr = toastr;
        this.firestoreService = firestoreService;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get isThisUser() {
        return this.firebaseAuth.userValue.id === this.editedUser.id;
    }
    get name() {
        return this.userGroup.get('name');
    }
    get email() {
        return this.userGroup.get('email');
    }
    get author() {
        return this.userGroup.get('author');
    }
    get admin() {
        return this.userGroup.get('admin');
    }
    ngOnInit() {
        this.loadEditedUser();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    loadEditedUser() {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.firestoreService.getUser(this.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(user => {
            this.editedUser = user;
            this.buildForm();
        });
    }
    buildForm() {
        this.userGroup = this.fb.group({
            name: this.editedUser.name || '',
            email: [this.editedUser.email || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            author: this.editedUser.roles.author,
            admin: this.editedUser.roles.admin,
        });
    }
    onSubmit() {
        if (this.firebaseAuth.userValue.roles.admin) {
            this.firestoreService.updateUser({
                name: this.name.value,
                email: this.email.value,
                id: this.userId,
                roles: { author: this.author.value, admin: this.admin.value }
            });
        }
        else {
            this.firestoreService.updateUser({ name: this.name.value, email: this.email.value, id: this.userId });
        }
        this.toastr.success(null, 'User updated');
    }
    removeUser() {
        this.firestoreService.removeUser(this.userId);
        this.toastr.error(null, 'User removed');
        this.router.navigate(['/users']);
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 4, vars: 1, consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], ["class", "col-8", 4, "ngIf"], [1, "col-8"], [1, "d-inline"], ["routerLink", "/news", 1, "font-weight-bold", 3, "queryParams"], [1, "w-50", "mt-3", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "mb-3", 4, "appIsAdmin"], [1, "row"], [1, "col-6", "d-flex", "justify-content-between"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [4, "ngIf"], [1, "mb-3"], [1, "form-check", "form-check-inline"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "author", 1, "form-check-input"], ["type", "checkbox", "formControlName", "admin", 1, "form-check-input"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "appIsAdmin"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditUserComponent_div_3_Template, 20, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _app_auth_directives_is_admin_directive__WEBPACK_IMPORTED_MODULE_9__["IsAdminDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-user',
                templateUrl: './edit-user.component.html',
                styleUrls: ['./edit-user.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }, { type: _app_auth_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/manage-users/manage-users.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/manage-users/manage-users.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function ManageUsersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r14.name ? user_r14.name : user_r14.email ? user_r14.email : user_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", user_r14.id);
} }
class ManageUsersComponent {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
    }
    ngOnInit() {
        this.loadUsers();
    }
    loadUsers() {
        this.users$ = this.firestoreService.usersList$;
    }
}
ManageUsersComponent.ɵfac = function ManageUsersComponent_Factory(t) { return new (t || ManageUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"])); };
ManageUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageUsersComponent, selectors: [["app-manage-users"]], decls: 4, vars: 3, consts: [[1, "container"], [1, "row"], ["class", "col-3 mb-4", 4, "ngFor", "ngForOf"], [1, "col-3", "mb-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-center"], [1, "card-title"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function ManageUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageUsersComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.users$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".card-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbWFuYWdlLXVzZXJzL0M6XFxVc2Vyc1xcandvem55XFxEZXNrdG9wXFxOZXdzLWJ1bGxldGluL3NyY1xcYXBwXFx1c2Vyc1xcbWFuYWdlLXVzZXJzXFxtYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJzL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiIsIi5jYXJkLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-users',
                templateUrl: './manage-users.component.html',
                styleUrls: ['./manage-users.component.scss']
            }]
    }], function () { return [{ type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"] }]; }, null); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA4f9aKs_Ir2DVWMo5TQUofPABmT5fX5Ec',
        authDomain: 'news-bulletin-d9d88.firebaseapp.com',
        databaseURL: 'https://news-bulletin-d9d88.firebaseio.com',
        projectId: 'news-bulletin-d9d88',
        storageBucket: 'news-bulletin-d9d88.appspot.com',
        messagingSenderId: '341027191388'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jwozny\Desktop\News-bulletin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);