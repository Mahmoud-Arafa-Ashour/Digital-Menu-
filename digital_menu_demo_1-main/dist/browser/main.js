"use strict";
(self["webpackChunkmox"] = self["webpackChunkmox"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 9473);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: "",
  component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
  children: [{
    path: "",
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomeModule)
  }, {
    path: "login",
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginModule)
  }]
}, {
  path: "admin",
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule)
}, {
  path: "**",
  component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
      initialNavigation: "enabledBlocking"
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-progressbar */ 4909);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);











const _c0 = function (a0, a1) {
  return [a0, a1];
};
class AppComponent {
  constructor(appSettings, router, platformId, translate) {
    this.appSettings = appSettings;
    this.router = router;
    this.platformId = platformId;
    this.translate = translate;
    this.settings = this.appSettings.settings;
    translate.addLangs(["en", "de", "fr", "ru", "tr"]);
    translate.setDefaultLang("en");
    translate.use("en");
  }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        setTimeout(() => {
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 9,
    consts: [["id", "app", 1, "app", 3, "dir", "ngClass"], ["color", "#e91e63", 3, "spinner", "meteor"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet")(2, "ng-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("main-toolbar-fixed", ctx.settings.mainToolbarFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.settings.rtl ? "rtl" : "ltr")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, ctx.settings.theme, "toolbar-" + ctx.settings.toolbar));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("spinner", false)("meteor", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__.NgProgressComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Dir],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-progressbar */ 4909);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-progressbar/http */ 3492);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _theme_utils_mat_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/utils/mat-paginator-i18n.service */ 3325);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 8758);
/* harmony import */ var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/utils/app-interceptor */ 1350);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 9473);
/* harmony import */ var _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/components/toolbar1/toolbar1.component */ 906);
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ 4460);
/* harmony import */ var _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/components/contacts/contacts.component */ 545);
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ 5359);
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ 2359);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ 5893);
/* harmony import */ var _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/lock-screen/lock-screen.component */ 8411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);






























function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(httpClient);
}
// import { CookieService } from "ngx-cookie-service";
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
    providers: [
    // CookieService,
    _app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings, {
      provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__.OverlayContainer,
      useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_1__.CustomOverlayContainer
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
      useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_2__.AppInterceptor,
      multi: true
    }, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, {
      provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorIntl,
      useClass: _theme_utils_mat_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorI18nService
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule.withServerTransition({
      appId: "serverApp"
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_24__.NgProgressModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_25__.NgProgressHttpModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_26__.GoogleMapsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
      }
    }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__.PagesComponent, _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent, _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_10__.UserMenuComponent, _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__.ContactsComponent, _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_9__.Toolbar1Component, _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_12__.HorizontalMenuComponent, _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__.VerticalMenuComponent, _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent, _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_15__.LockScreenComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_24__.NgProgressModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_25__.NgProgressHttpModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_26__.GoogleMapsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService),
/* harmony export */   "Data": () => (/* binding */ Data)
/* harmony export */ });
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var _shared_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/alert-dialog/alert-dialog.component */ 2066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










class Data {
  constructor(categories, cartList, orderList, favorites, totalPrice, totalCartCount) {
    this.categories = categories;
    this.cartList = cartList;
    this.orderList = orderList;
    this.favorites = favorites;
    this.totalPrice = totalPrice;
    this.totalCartCount = totalCartCount;
  }
}
class AppService {
  convertImgToBase64(medium, arg1) {
    throw new Error("Method not implemented.");
  }
  constructor(http, datePipe, bottomSheet, snackBar, dialog, appSettings, translateService) {
    this.http = http;
    this.datePipe = datePipe;
    this.bottomSheet = bottomSheet;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.appSettings = appSettings;
    this.translateService = translateService;
    this.Data = new Data([],
    // categories
    [],
    // cartList
    [],
    // orderList
    [],
    // favorites
    0,
    // totalPrice
    0 //totalCartCount
    );

    this.url = "https://menu-backend.d-menus.com";
  }
  getMenuItems() {
    return this.http.get(this.url + "/product");
  }
  getMenuItemsForUser() {
    return this.http.get(this.url + "/product/cat-items");
  }
  getMenuItemById(id) {
    return this.http.get(this.url + "menu-item-" + id + ".json");
  }
  getCategories() {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.get(this.url + "/category", {
      headers: headers
    });
  }
  addCatogery(obj) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.post(`${this.url}/category/add-category`, obj, {
      headers: headers
    });
  }
  addItem(obj) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.post(`${this.url}/product/add-product-v2`, obj, {
      headers: headers
    });
  }
  editItem(id, obj) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.patch(`${this.url}/product/edit-product-v2/${id}`, obj, {
      headers: headers
    });
  }
  removeItem(id) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.delete(`${this.url}/product/delete-product/${id}`, {
      headers
    });
  }
  removeCatogery(id) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.delete(`${this.url}/category/delete-category/${id}`, {
      headers
    });
  }
  editCatogery(id, obj) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.patch(`${this.url}/category/edit-category/${id}`, obj, {
      headers
    });
  }
  getOffers() {
    return this.http.get(this.url + "/offer");
  }
  addOffer(obj) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.post(`${this.url}/offer/add-offer-v2`, obj, {
      headers: headers
    });
  }
  editOffer(id, obj) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.patch(`${this.url}/offer/edit-offer-v2/${id}`, obj, {
      headers: headers
    });
  }
  removeOffer(id) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token)
    };
    return this.http.delete(`${this.url}/offer/delete-offer/${id}`, {
      headers
    });
  }
  getGUID() {
    let guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == "x" ? r : r & 0x3 | 0x8;
      return v.toString(16);
    }).toLowerCase();
    return guid;
  }
  openDialog(component, data, panelClass) {
    return this.dialog.open(component, {
      data: data,
      panelClass: panelClass,
      autoFocus: false,
      direction: this.appSettings.settings.rtl ? "rtl" : "ltr"
    });
  }
  openConfirmDialog(title, message) {
    const dialogData = new _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    return dialogRef;
  }
  openAlertDialog(message) {
    const dialogRef = this.dialog.open(_shared_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AlertDialogComponent, {
      data: message
    });
    return dialogRef;
  }
  getTranslateValue(key, param = "") {
    let value = null;
    this.translateService.get(key, {
      param: param
    }).subscribe(res => {
      value = res;
    });
    return value;
  }
  addToCart(menuItem, component) {
    if (!this.Data.cartList.find(item => item.id == menuItem.id)) {
      menuItem.cartCount = menuItem.cartCount ? menuItem.cartCount : 1;
      this.Data.cartList.push(menuItem);
      this.calculateCartTotal();
      if (component) {
        this.openCart(component);
      } else {
        this.snackBar.open('The menu item "' + menuItem.category_name + '" has been added to cart.', "×", {
          verticalPosition: "top",
          duration: 3000,
          direction: this.appSettings.settings.rtl ? "rtl" : "ltr",
          panelClass: ["success"]
        });
      }
    }
  }
  openCart(component) {
    this.bottomSheet.open(component, {
      direction: this.appSettings.settings.rtl ? "rtl" : "ltr"
    }).afterDismissed().subscribe(isRedirect => {
      if (isRedirect) {
        window.scrollTo(0, 0);
      }
    });
  }
  calculateCartTotal() {
    this.Data.totalPrice = 0;
    this.Data.totalCartCount = 0;
    this.Data.cartList.forEach(item => {
      let price = 0;
      if (item) {
        price = item.price;
      } else {
        price = item.price;
      }
      this.Data.totalPrice = this.Data.totalPrice + price * item.cartCount;
      this.Data.totalCartCount = this.Data.totalCartCount + item.cartCount;
    });
  }
  filterData(data, category_name, sort, page, perPage) {
    if (category_name) {
      data = data.filter(item => item.category_name == category_name);
    }
    this.sortData(sort, data);
    return this.paginator(data, page, perPage);
  }
  getChefs() {
    return [{
      id: 1,
      fullName: 'Andy Warhol',
      position: 'Head of Chef',
      desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
      organization: 'Restaurant',
      email: 'andy.w@mox.com',
      phone: '(212) 457-2308',
      social: {
        facebook: 'andy.warhol',
        twitter: 'andy.warhol',
        linkedin: 'andy.warhol',
        instagram: 'andy.warhol',
        website: 'https://andy.warhol.com'
      },
      ratingsCount: 4,
      ratingsValue: 400,
      image: 'assets/images/chefs/1.jpg'
    }, {
      id: 2,
      fullName: 'Lusia Manuel',
      position: 'Assistant Chef',
      desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
      organization: 'Restaurant',
      email: 'lusia.m@mox.com',
      phone: '(224) 267-1346',
      social: {
        facebook: 'lusia.manuel',
        twitter: 'lusia.manuel',
        linkedin: 'lusia.manuel',
        instagram: 'lusia.manuel',
        website: 'https://lusia.manuel.com'
      },
      ratingsCount: 6,
      ratingsValue: 480,
      image: 'assets/images/chefs/2.jpg'
    }, {
      id: 3,
      fullName: 'Michael Blair',
      position: 'Intern Chef',
      desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
      organization: 'Restaurant',
      email: 'michael.b@mox.com',
      phone: '(267) 388-1637',
      social: {
        facebook: 'michael.blair',
        twitter: 'michael.blair',
        linkedin: 'michael.blair',
        instagram: 'michael.blair',
        website: 'https://michael.blair.com'
      },
      ratingsCount: 4,
      ratingsValue: 400,
      image: 'assets/images/chefs/3.jpg'
    }, {
      id: 4,
      fullName: 'Tereza Stiles',
      position: 'Assistant Chef',
      desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
      organization: 'Restaurant',
      email: 'tereza.s@mox.com',
      phone: '(214) 617-2614',
      social: {
        facebook: 'tereza.stiles',
        twitter: 'tereza.stiles',
        linkedin: 'tereza.stiles',
        instagram: 'tereza.stiles',
        website: 'https://tereza.stiles.com'
      },
      ratingsCount: 4,
      ratingsValue: 380,
      image: 'assets/images/chefs/4.jpg'
    }, {
      id: 5,
      fullName: 'Michelle Ormond',
      position: 'Head of Chef',
      desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
      organization: 'Restaurant',
      email: 'michelle.o@mox.com',
      phone: '(267) 388-1637',
      social: {
        facebook: 'michelle.ormond',
        twitter: 'michelle.ormond',
        linkedin: 'michelle.ormond',
        instagram: 'michelle.ormond',
        website: 'https://michelle.ormond.com'
      },
      ratingsCount: 6,
      ratingsValue: 480,
      image: 'assets/images/chefs/5.jpg'
    }];
  }
  getAwards() {
    return [{
      name: 'award-1',
      image: 'assets/images/awards/1.png'
    }, {
      name: 'award-2',
      image: 'assets/images/awards/2.png'
    }, {
      name: 'award-3',
      image: 'assets/images/awards/3.png'
    }, {
      name: 'award-4',
      image: 'assets/images/awards/4.png'
    }, {
      name: 'award-5',
      image: 'assets/images/awards/5.png'
    }, {
      name: 'award-6',
      image: 'assets/images/awards/6.png'
    }, {
      name: 'award-7',
      image: 'assets/images/awards/7.png'
    }];
  }
  sortData(sort, data) {
    if (sort) {
      switch (sort) {
        case "Popular":
          data = data.sort((a, b) => {
            if (a.ratingsValue / a.ratingsCount < b.ratingsValue / b.ratingsCount) {
              return 1;
            }
            if (a.ratingsValue / a.ratingsCount > b.ratingsValue / b.ratingsCount) {
              return -1;
            }
            return 0;
          });
          break;
        case "Price (Low to High)":
          data = data.sort((a, b) => {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          break;
        case "Price (High to Low)":
          data = data.sort((a, b) => {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
    }
    return data;
  }
  paginator(items, page, perPage) {
    var page = page || 1,
      perPage = perPage || 4,
      offset = (page - 1) * perPage,
      paginatedItems = items.slice(offset).slice(0, perPage),
      totalPages = Math.ceil(items.length / perPage);
    return {
      data: paginatedItems,
      pagination: {
        page: page,
        perPage: perPage,
        prePage: page - 1 ? page - 1 : null,
        nextPage: totalPages > page ? page + 1 : null,
        total: items.length,
        totalPages: totalPages
      }
    };
  }
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  static #_ = this.ɵfac = function AppService_Factory(t) {
    return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AppService,
    factory: AppService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 1182:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings),
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Settings {
  constructor(name, theme, toolbar, stickyMenuToolbar, header, rtl, adminSidenavIsOpened, adminSidenavIsPinned, adminSidenavUserBlock,
  //additional options
  mainToolbarFixed, contentOffsetToTop, headerBgImage, headerBgVideo) {
    this.name = name;
    this.theme = theme;
    this.toolbar = toolbar;
    this.stickyMenuToolbar = stickyMenuToolbar;
    this.header = header;
    this.rtl = rtl;
    this.adminSidenavIsOpened = adminSidenavIsOpened;
    this.adminSidenavIsPinned = adminSidenavIsPinned;
    this.adminSidenavUserBlock = adminSidenavUserBlock;
    this.mainToolbarFixed = mainToolbarFixed;
    this.contentOffsetToTop = contentOffsetToTop;
    this.headerBgImage = headerBgImage;
    this.headerBgVideo = headerBgVideo;
  }
}
class AppSettings {
  constructor() {
    this.settings = new Settings("Dokkan",
    // theme name
    "red",
    // red, green, blue, pink, purple, grey, orange-dark, custom
    1,
    // 1
    true,
    //  true = sticky, false = not sticky
    "carousel",
    // default, image, carousel
    false,
    // true = rtl, false = ltr
    true,
    // adminSidenavIsOpened
    true,
    // adminSidenavIsPinned
    true,
    // adminSidenavUserBlock
    //NOTE:  don't change additional options values, they used for theme performance
    false, false, false, false);
  }
  static #_ = this.ɵfac = function AppSettings_Factory(t) {
    return new (t || AppSettings)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppSettings,
    factory: AppSettings.ɵfac
  });
}

/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(_AuthService, _Router) {
    this._AuthService = _AuthService;
    this._Router = _Router;
  }
  canActivate(route, state) {
    if (this._AuthService.userData.getValue() != null) {
      return true;
    } else {
      this._Router.navigate(["/login"]);
      return false;
    }
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class AuthService {
  constructor(_HttpClient, _Router) {
    this._HttpClient = _HttpClient;
    this._Router = _Router;
    this.url = "https://menu-backend.d-menus.com";
    this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    if (localStorage.getItem('userToken') != null) {
      this.setUserData();
    } else {
      this._Router.navigate(['/login']);
    }
  }
  setUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"));
    let decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(encodedToken);
    this.userData.next(decodedToken);
  }
  login(userData) {
    return this._HttpClient.post(this.url + "/signin", userData);
  }
  logOut() {
    localStorage.removeItem("userToken");
    this._Router.navigate(['/login']);
    this.userData.next(null);
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 8411:
/*!************************************************************!*\
  !*** ./src/app/pages/lock-screen/lock-screen.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockScreenComponent": () => (/* binding */ LockScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









class LockScreenComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.date = new Date();
  }
  ngOnInit() {
    this.timerInterval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.form = this.fb.group({
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3)])]
    });
  }
  ngAfterViewInit() {
    document.getElementById('preloader')?.classList.add('hide');
  }
  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
  onSubmit(values) {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }
  static #_ = this.ɵfac = function LockScreenComponent_Factory(t) {
    return new (t || LockScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LockScreenComponent,
    selectors: [["app-lock-screen"]],
    decls: 15,
    vars: 6,
    consts: [["fxFlexFill", ""], ["fxFlexFill", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-3", "lock-screen"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "formGroup", "ngSubmit"], [1, "name", "text-muted"], ["src", "assets/images/profile/adam.jpg", "alt", "", 1, "mat-elevation-z4"], ["placeholder", "Enter password", "formControlName", "password", "required", "", "type", "password"], ["mat-icon-button", "", "color", "primary", "type", "submit", 1, "submit", 3, "disabled"], ["mat-button", "", "routerLink", "/login", "color", "primary"], [1, "time"]],
    template: function LockScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LockScreenComponent_Template_form_ngSubmit_2_listener() {
          return ctx.onSubmit(ctx.form.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Adam Sandler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4)(6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Or sign in as a different user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 3, ctx.date, "hh:mm:ss a"));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.FlexFillDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: [".lock-screen {\n  position: relative;\n}\n.lock-screen:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-color: #e6dede;\n  background-repeat: repeat;\n  background-size: 350px;\n  background-position: center;\n  opacity: 1;\n}\n.lock-screen form {\n  position: relative;\n}\n.lock-screen form .name {\n  position: absolute;\n  top: -2px;\n  right: 0;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.lock-screen form img {\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  border: 8px solid #fff;\n}\n.lock-screen form input {\n  background: #fff;\n  padding: 16px 44px 16px 16px;\n  width: 140px;\n  margin-left: -6px;\n  border: 0;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  text-align: center;\n  outline: none;\n  box-shadow: 4px 0px 4px -2px rgba(0, 0, 0, 0.2), 4px 3px 4px 0px rgba(0, 0, 0, 0.14), 4px 1px 4px 0px rgba(0, 0, 0, 0.12);\n}\n.lock-screen form a {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  margin: 0;\n  font-size: 13px;\n}\n.lock-screen form button.submit {\n  margin-left: -44px;\n}\n.lock-screen p.time {\n  font-size: 48px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9jay1zY3JlZW4vbG9jay1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3BhZ2VzL2xvY2stc2NyZWVuL2xvY2stc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0daO0FERFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNHWjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUhBQUE7QUNHWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ1o7QURDUTtFQUNJLGtCQUFBO0FDQ1o7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FSIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2stc2NyZWVue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmV7ICAgICAgICBcclxuICAgICAgICBjb250ZW50OiAnJzsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4Oi0xO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTsgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZGUgO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgXHJcbiAgICB9IFxyXG4gICAgZm9ybXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0eyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCA0NHB4IDE2cHggMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4OyBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA0cHggMHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDRweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0cHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC04cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uLnN1Ym1pdHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00NHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHAudGltZXtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7ICBcclxuICAgIH0gXHJcbn0gIiwiLmxvY2stc2NyZWVuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvY2stc2NyZWVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xufVxuLmxvY2stc2NyZWVuIGZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9jay1zY3JlZW4gZm9ybSAubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2NrLXNjcmVlbiBmb3JtIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcbn1cbi5sb2NrLXNjcmVlbiBmb3JtIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTZweCA0NHB4IDE2cHggMTZweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogLTZweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCA0cHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgNHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubG9jay1zY3JlZW4gZm9ybSBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIHJpZ2h0OiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5sb2NrLXNjcmVlbiBmb3JtIGJ1dHRvbi5zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogLTQ0cHg7XG59XG4ubG9jay1zY3JlZW4gcC50aW1lIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9473:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);







class NotFoundComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  goHome() {
    this.router.navigate(['/']);
  }
  ngAfterViewInit() {
    document.getElementById('preloader')?.classList.add('hide');
  }
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 22,
    vars: 0,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60"], [1, "p-0", "mat-elevation-z6", "box"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", "box-header"], [1, "mat-icon-xlg"], [1, "error"], ["fxLayout", "column", "fxLayoutAlign", "end center", 1, "box-content"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-elevation-z8", "box-content-inner", "p-3", "bg-card"], [1, "box-text"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Enter search keyword..."], [1, "box-footer"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z8", 3, "click"], [1, "mat-icon-md", "m-0"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Opps, it seems that this page does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "If you are sure it should, search for it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11)(19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_19_listener() {
          return ctx.goHome();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel],
    styles: [".box[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-content-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -34px;\n  left: 34px;\n  right: 34px;\n  height: 180px;\n  border-radius: 4px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-content-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-content-header.server-error[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]::last-child {\n  margin-bottom: 15px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-footer[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 16px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 70px;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0daO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHWjtBRERRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBREZZO0VBQ0ksbUJBQUE7QUNJaEI7QUREUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREZZO0VBQ0ksbUJBQUE7QUNJaEI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0loQiIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLmJveC1oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAuZXJyb3J7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94LWNvbnRlbnR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7ICAgICBcclxuICAgICAgICAuYm94LWNvbnRlbnQtaW5uZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMzRweDtcclxuICAgICAgICAgICAgbGVmdDogMzRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC1jb250ZW50LWhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAmLnNlcnZlci1lcnJvcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC10ZXh0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICY6Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtZm9vdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ib3ggLmJveC1oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuLmJveCAuYm94LWhlYWRlciAuZXJyb3Ige1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uYm94IC5ib3gtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtY29udGVudC1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzRweDtcbiAgbGVmdDogMzRweDtcbiAgcmlnaHQ6IDM0cHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtY29udGVudC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LWNvbnRlbnQtaGVhZGVyLnNlcnZlci1lcnJvciB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LXRleHQ6Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJveCAuYm94LWNvbnRlbnQgLmJveC1mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTZweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtZm9vdGVyIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWFyZ2luOiAwIDJweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ 900);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/components/toolbar1/toolbar1.component */ 906);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/components/footer/footer.component */ 5893);














const _c0 = ["sidenav"];
function PagesComponent_app_toolbar1_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-toolbar1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onMenuIconClick", function PagesComponent_app_toolbar1_3_Template_app_toolbar1_onMenuIconClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sidenav.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PagesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagesComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class PagesComponent {
  constructor(appSettings, router, platformId, appService) {
    this.appSettings = appSettings;
    this.router = router;
    this.platformId = platformId;
    this.appService = appService;
    this.headerTypes = ["default", "image", "carousel", "video"];
    this.headerTypeOption = "";
    this.headerFixed = false;
    this.showBackToTop = false;
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {
    this.headerTypeOption = this.settings.header;
    // this.getCategories();
  }

  changeTheme(theme) {
    this.settings.theme = theme;
  }
  chooseHeaderType() {
    this.settings.header = this.headerTypeOption;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      window.scrollTo(0, 0);
    }
    this.router.navigate(["/"]);
  }
  onWindowScroll() {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    scrollTop > 300 ? this.showBackToTop = true : this.showBackToTop = false;
    if (this.settings.stickyMenuToolbar) {
      let top_toolbar = document.getElementById("top-toolbar");
      if (top_toolbar) {
        if (scrollTop >= top_toolbar.clientHeight) {
          this.settings.mainToolbarFixed = true;
        } else {
          if (!document.documentElement.classList.contains("cdk-global-scrollblock")) {
            this.settings.mainToolbarFixed = false;
          }
        }
      }
    }
  }
  scrollToTop() {
    var scrollDuration = 200;
    var scrollStep = -window.pageYOffset / (scrollDuration / 20);
    var scrollInterval = setInterval(() => {
      if (window.pageYOffset != 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
    }
  }
  ngAfterViewInit() {
    // if (document.getElementById("preloader")) {
    //   document.getElementById("preloader")?.classList.add("hide");
    // }
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.settings.mainToolbarFixed = false;
        setTimeout(() => {
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function PagesComponent_Factory(t) {
    return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PagesComponent,
    selectors: [["app-pages"]],
    viewQuery: function PagesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    hostBindings: function PagesComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function PagesComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    decls: 9,
    vars: 11,
    consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "page-wrapper"], [3, "ngClass"], [3, "onMenuIconClick", 4, "ngIf"], ["fxFlex", "grow", 1, "sticky-footer-helper"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "back-to-top", 3, "click", 4, "ngIf"], [3, "onMenuIconClick"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "back-to-top", 3, "click"]],
    template: function PagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "mat-sidenav-content", 0)(2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PagesComponent_app_toolbar1_3_Template, 1, 0, "app-toolbar1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 3)(7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PagesComponent_div_8_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-bg-image", ctx.settings.mainToolbarFixed)("has-bg-video", ctx.settings.mainToolbarFixed)("main-toolbar-fixed", ctx.settings.mainToolbarFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "toolbar-" + ctx.settings.mainToolbarFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.settings.toolbar == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("content-offset-to-top", ctx.settings.contentOffsetToTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showBackToTop);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_2__.Toolbar1Component, _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: [".sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999999;\n  width: 250px;\n  padding: 8px 16px;\n  bottom: 0;\n  top: 0;\n}\n.sidenav[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 178px;\n}\n.sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.sidenav[_ngcontent-%COMP%]   .vertical-menu-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 122px);\n}\n\n.options[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 270px;\n  z-index: 999999;\n}\n.options[_ngcontent-%COMP%]   .op-header[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 0 14px;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 24px solid;\n  border-left: 24px solid transparent;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.red[_ngcontent-%COMP%] {\n  background-color: #C62828;\n  border: 1px solid #C62828;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.blue[_ngcontent-%COMP%] {\n  background-color: #1565C0;\n  border: 1px solid #1565C0;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.green[_ngcontent-%COMP%] {\n  background-color: #558B2F;\n  border: 1px solid #558B2F;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.pink[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  border: 1px solid #c2185b;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.purple[_ngcontent-%COMP%] {\n  background-color: #7b1fa2;\n  border: 1px solid #7b1fa2;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.grey[_ngcontent-%COMP%] {\n  background-color: #455a64;\n  border: 1px solid #455a64;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.orange-dark[_ngcontent-%COMP%] {\n  background-color: #e64a19;\n  border: 1px solid #e64a19;\n}\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.orange-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #303030;\n}\n.options[_ngcontent-%COMP%]   .mat-mdc-radio-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.options[_ngcontent-%COMP%]   .mat-mdc-radio-group[_ngcontent-%COMP%]   .mat-mdc-radio-button[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n.options[_ngcontent-%COMP%]   .mat-mdc-slide-toggle[_ngcontent-%COMP%] {\n  height: auto;\n}\n.options[_ngcontent-%COMP%]   ng-scrollbar[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\n.op-image[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 200px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: -655454;\n}\n.options-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQ01pQjtFRExqQixpQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0FFREo7QUZFSTtFQUNJLGtCQUFBO0FFQVI7QUZFSTtFQUNJLGFBQUE7QUVBUjtBRkVJO0VBQ0ksMEJBQUE7QUVBUjs7QUZJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRURKO0FGRUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBRUFSO0FGRUk7RUFDSSxpQkFBQTtBRUFSO0FGQ1E7RUFDSSxjQUFBO0FFQ1o7QUZDUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUVDWjtBRkNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFQ1o7QUZBWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVFaEI7QUZEZ0I7RUFDSSw0QkFBQTtBRUdwQjtBRkVJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBRUFSO0FGQ1E7RUFDSSxhQUFBO0FFQ1o7QUZFSTtFQUNJLFlBQUE7QUVBUjtBRkVJO0VBQ0ksMEJBQUE7QUVBUjs7QUZHQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRUFKOztBRkVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUVDSjtBRkFJO0VBR0ksa0NBQUE7QUVFUjtBRllBO0VBQ0k7SUFDSSx5QkFBQTtFRUNOO0FBQ0Y7QUZFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRUFKO0FGQ0k7RUFDSSxZQUFBO0FFQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNpZGVuYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICB3aWR0aDogJG1haW4tc2lkZW5hdi13aWR0aDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLmNsb3Nle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzhweDtcclxuICAgIH1cclxuICAgIC5kaXZpZGVye1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAudmVydGljYWwtbWVudS13cmFwcGVye1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTIycHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3B0aW9uc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5vcC1oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIH1cclxuICAgIC5jb250cm9se1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjRweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMjRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDNjI4Mjg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzYyODI4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYmx1ZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTY1QzA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTU2NUMwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JlZW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1OEIyRjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgJi5waW5re1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTg1YjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMjE4NWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5wdXJwbGV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiMWZhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmdyZXl7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1YTY0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NWE2NDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm9yYW5nZS1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2NGExOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjRhMTk7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMwMzAzMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWRjLXJhZGlvLWdyb3Vwe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLm1hdC1tZGMtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWRjLXNsaWRlLXRvZ2dsZXtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBuZy1zY3JvbGxiYXJ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XHJcbiAgICB9XHJcbn1cclxuLm9wLWltYWdle1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAjY2NjO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG4ub3B0aW9ucy1pY29ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogLTY1NTQ1NDtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7ICAgIFxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAgXCJUcnVjdWxlbnRhXCIsIHNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQtZmFtaWx5OiBcIlRydWN1bGVudGFcIiwgc2VyaWY7ICBcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA1NjBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4O1xyXG5cclxuJGFkbWluLXRvb2xiYXItaGVpZ2h0OiA1NnB4O1xyXG4kYWRtaW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDsiLCIuc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbn1cbi5zaWRlbmF2IC5jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNzhweDtcbn1cbi5zaWRlbmF2IC5kaXZpZGVyIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5zaWRlbmF2IC52ZXJ0aWNhbC1tZW51LXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMnB4KTtcbn1cblxuLm9wdGlvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNzBweDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLm9wdGlvbnMgLm9wLWhlYWRlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbn1cbi5vcHRpb25zIC5jb250cm9sIGRpdiB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgaDQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5IHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeSAuc2tpbi1zZWNvbmRhcnkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAyNHB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogMjRweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M2MjgyODtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTY1QzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNTY1QzA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1OEIyRjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMjE4NWI7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YjFmYTI7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1YTY0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDU1YTY0O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5vcmFuZ2UtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjRhMTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNjRhMTk7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5Lm9yYW5nZS1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMzMDMwMzA7XG59XG4ub3B0aW9ucyAubWF0LW1kYy1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm9wdGlvbnMgLm1hdC1tZGMtcmFkaW8tZ3JvdXAgLm1hdC1tZGMtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMDtcbn1cbi5vcHRpb25zIC5tYXQtbWRjLXNsaWRlLXRvZ2dsZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5vcHRpb25zIG5nLXNjcm9sbGJhciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuXG4ub3AtaW1hZ2Uge1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICNjY2M7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5vcHRpb25zLWljb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjAwcHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IC02NTU0NTQ7XG59XG4ub3B0aW9ucy1pY29uIC5tYXQtaWNvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5iYWNrLXRvLXRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2066:
/*!***************************************************************!*\
  !*** ./src/app/shared/alert-dialog/alert-dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDialogComponent": () => (/* binding */ AlertDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class AlertDialogComponent {
  constructor(dialogRef, message) {
    this.dialogRef = dialogRef;
    this.message = message;
  }
  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function AlertDialogComponent_Factory(t) {
    return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AlertDialogComponent,
    selectors: [["app-alert-dialog"]],
    decls: 11,
    vars: 4,
    consts: [["mat-dialog-title", ""], [1, "text-center"], ["color", "primary", 1, "mat-icon-xlg"], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 1, "m-auto", 3, "click"]],
    template: function AlertDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_Template_button_click_8_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, "BTN.OK"));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4358:
/*!*****************************************************************!*\
  !*** ./src/app/shared/cart-overview/cart-overview.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartOverviewComponent": () => (/* binding */ CartOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _quantity_counter_quantity_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quantity-counter/quantity-counter.component */ 9874);












function CartOverviewComponent_mat_list_0_mat_list_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item")(1, "div", 12)(2, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14)(5, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "LE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 16)(10, "app-quantity-counter", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onCounterChange", function CartOverviewComponent_mat_list_0_mat_list_item_8_Template_app_quantity_counter_onCounterChange_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const menuItem_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.counterChange(menuItem_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartOverviewComponent_mat_list_0_mat_list_item_8_Template_button_click_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const menuItem_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.remove(menuItem_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const menuItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", menuItem_r3.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", menuItem_r3.cartCount)("step", 1)("min", 1)("max", 1000)("small", true);
  }
}
function CartOverviewComponent_mat_list_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list", 2)(1, "mat-list-item")(2, "div", 3)(3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartOverviewComponent_mat_list_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.hideSheet(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "arrow_drop_down_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CartOverviewComponent_mat_list_0_mat_list_item_8_Template, 14, 7, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-list-item")(10, "div", 8)(11, "div", 9)(12, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "LE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.appService.Data.cartList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.appService.Data.totalPrice, " ");
  }
}
function CartOverviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "You have no items in your shopping cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CartOverviewComponent {
  constructor(appService, appSettings, bottomSheetRef, snackBar) {
    this.appService = appService;
    this.appSettings = appSettings;
    this.bottomSheetRef = bottomSheetRef;
    this.snackBar = snackBar;
    this.menuItems = [];
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {
    this.menuItems = this.appService.Data.cartList;
  }
  hideSheet(isRedirect) {
    this.bottomSheetRef.dismiss(isRedirect);
  }
  clearCart() {
    this.appService.Data.cartList.length = 0;
    this.appService.Data.totalPrice = 0;
    this.hideSheet(false);
  }
  remove(item, event) {
    const index = this.appService.Data.cartList.indexOf(item);
    if (index !== -1) {
      item.cartCount = 0;
      this.appService.Data.cartList.splice(index, 1);
      this.appService.calculateCartTotal();
    }
    if (this.appService.Data.cartList.length == 0) {
      this.hideSheet(false);
    }
    event.preventDefault();
  }
  counterChange(menuItem, count) {
    menuItem.cartCount = count;
    if (menuItem.cartCount <= menuItem.availibilityCount) {
      this.appService.calculateCartTotal();
    } else {
      this.appService.calculateCartTotal();
    }
  }
  static #_ = this.ɵfac = function CartOverviewComponent_Factory(t) {
    return new (t || CartOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CartOverviewComponent,
    selectors: [["app-cart-overview"]],
    decls: 2,
    vars: 2,
    consts: [["class", "cart-items", 4, "ngIf"], ["class", "py-3 text-center", 4, "ngIf"], [1, "cart-items"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "w-100", "-3"], ["mat-icon-button", "", "matTooltip", "Hide", 1, "p-0", 3, "click"], ["color", "primary", 1, "mat-icon-lg"], [1, "w-100", "divider"], [4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "w-100", "divider"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], [1, "fw-500", "py-3"], [1, "primary-color"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "py-2"], [1, "fw-500", "title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], [1, "primary-color", "px-1"], [1, "px-1"], [3, "value", "step", "min", "max", "small", "onCounterChange"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove", "matTooltipPosition", "after", 1, "p-0", 3, "click"], [1, "mat-icon-sm"], [1, "py-3", "text-center"]],
    template: function CartOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CartOverviewComponent_mat_list_0_Template, 18, 2, "mat-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CartOverviewComponent_div_1_Template, 3, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appService.Data.cartList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.menuItems.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _quantity_counter_quantity_counter_component__WEBPACK_IMPORTED_MODULE_2__.QuantityCounterComponent],
    styles: [".title[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.price-cont[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  font-size: 14px !important;\n}\n\n.price-cur[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15px;\n}\n\n.total-cont[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  font-size: 18px !important;\n}\n\n.total-cur[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NhcnQtb3ZlcnZpZXcvY2FydC1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvc2hhcmVkL2NhcnQtb3ZlcnZpZXcvY2FydC1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wcmljZS1jb250e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCA7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgXHJcbn1cclxuLnByaWNlLWN1cntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuLnRvdGFsLWNvbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwIDtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50OyBcclxuXHJcbn1cclxuLnRvdGFsLWN1cntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7IFxyXG5cclxuICAgIFxyXG59IiwiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZS1jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnByaWNlLWN1ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50b3RhbC1jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLWN1ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTglO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2887:
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent),
/* harmony export */   "ConfirmDialogModel": () => (/* binding */ ConfirmDialogModel)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);







class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.title = data.title;
    this.message = data.message;
  }
  ngOnInit() {}
  onConfirm() {
    this.dialogRef.close(true);
  }
  onDismiss() {
    this.dialogRef.close(false);
  }
  static #_ = this.ɵfac = function ConfirmDialogComponent_Factory(t) {
    return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmDialogComponent,
    selectors: [["app-confirm-dialog"]],
    decls: 16,
    vars: 8,
    consts: [["mat-dialog-title", ""], [1, "text-center"], [1, "mb-1"], ["color", "primary", 1, "mat-icon-xlg"], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayoutAlign", "space-between center", 1, "pb-4"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_10_listener() {
          return ctx.onDismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_13_listener() {
          return ctx.onConfirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, "BTN.NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, "BTN.YES"));
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class ConfirmDialogModel {
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
}

/***/ }),

/***/ 3075:
/*!*********************************************************************!*\
  !*** ./src/app/shared/header-carousel/header-carousel.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderCarouselComponent": () => (/* binding */ HeaderCarouselComponent)
/* harmony export */ });
/* harmony import */ var _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart-overview/cart-overview.component */ 4358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);









function HeaderCarouselComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-background", slide_r2.image);
  }
}
function HeaderCarouselComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("indexChange", function HeaderCarouselComponent_div_1_Template_div_indexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onIndexChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HeaderCarouselComponent_div_1_div_2_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 5)(4, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 7)(7, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swiper", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
  }
}
class HeaderCarouselComponent {
  constructor(appSettings, appService) {
    this.appSettings = appSettings;
    this.appService = appService;
    this.slides = [];
    this.column = 4;
    this.viewType = "grid";
    this.contentOffsetToTop = false;
    this.fullscreen = true;
    this.config = {};
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
  }
  ngAfterViewInit() {
    this.initCarousel();
  }
  ngOnChanges(changes) {
    if (this.slides.length > 0) {
      this.currentSlide = this.slides[0];
    }
    if (changes.viewColChanged) {
      this.getColumnCount(changes.viewColChanged.currentValue);
    }
  }
  getColumnCount(value) {
    if (value == 25) {
      this.column = 4;
    } else if (value == 33.3) {
      this.column = 3;
    } else if (value == 50) {
      this.column = 2;
    } else {
      this.column = 1;
    }
  }
  addToCart() {
    this.appService.addToCart(this.currentSlide, _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_0__.CartOverviewComponent);
  }
  onCart() {
    if (this.appService.Data.cartList.find(item => item.id == this.currentSlide.id)) {
      return true;
    }
    return false;
  }
  initCarousel() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    };
  }
  ngOnDestroy() {
    setTimeout(() => {
      this.settings.contentOffsetToTop = false;
    });
  }
  onIndexChange(index) {
    this.currentSlide = this.slides[index];
  }
  static #_ = this.ɵfac = function HeaderCarouselComponent_Factory(t) {
    return new (t || HeaderCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderCarouselComponent,
    selectors: [["app-header-carousel"]],
    inputs: {
      menuItem: "menuItem",
      slides: "slides",
      viewType: "viewType",
      viewColChanged: "viewColChanged",
      contentOffsetToTop: "contentOffsetToTop",
      fullscreen: "fullscreen"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 6,
    consts: [[1, "header-carousel", 3, "ngClass"], ["class", "swiper-container h-100", 3, "swiper", "indexChange", 4, "ngIf"], [1, "swiper-container", "h-100", 3, "swiper", "indexChange"], [1, "swiper-wrapper", "h-100"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "swiper-button-prev", "swipe-arrow"], [1, "mat-icon-lg"], ["mat-raised-button", "", "color", "primary", 1, "swiper-button-next", "swipe-arrow"], [1, "mask"], [1, "swiper-slide"], [1, "slide-item", "swiper-lazy"], [1, "swiper-lazy-preloader"]],
    template: function HeaderCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderCarouselComponent_div_1_Template, 10, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("offset-bottom", ctx.contentOffsetToTop)("fullscreen", ctx.fullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "toolbar-" + ctx.settings.toolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
    styles: [".header-carousel[_ngcontent-%COMP%] {\n  height: 560px;\n}\n.header-carousel[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%] {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.header-carousel[_ngcontent-%COMP%]   .swiper-lazy-preloader[_ngcontent-%COMP%] {\n  top: 15%;\n}\n.header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n}\n.header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 150px;\n  transition: 0.4s;\n  margin: 0 16px;\n  width: 25%;\n  position: absolute;\n  color: #fff;\n  background: none;\n  box-shadow: none;\n}\n.header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n  font-family: \"Truculenta\", serif;\n  font-size: 42px;\n  line-height: 42px;\n  margin-bottom: 16px;\n  white-space: nowrap;\n}\n.header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  padding: 4px 18px;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n.header-carousel.offset-bottom[_ngcontent-%COMP%] {\n  height: 640px;\n}\n.header-carousel.offset-bottom[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%] {\n  padding-bottom: 80px;\n}\n.header-carousel.fullscreen[_ngcontent-%COMP%] {\n  height: calc(100vh - (36px + 72px)) !important;\n}\n.header-carousel.fullscreen.toolbar-2[_ngcontent-%COMP%] {\n  height: calc(100vh - 232px) !important;\n}\n.header-carousel[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 100%;\n}\n.header-carousel[_ngcontent-%COMP%]   button.swipe-arrow[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-top: -71px;\n  height: 70px;\n  box-shadow: none;\n  right: 0;\n  padding: 0;\n  min-width: 40px;\n}\n.header-carousel[_ngcontent-%COMP%]   button.swipe-arrow.swiper-button-prev[_ngcontent-%COMP%] {\n  margin-top: 0;\n  right: 0;\n  left: auto;\n}\n\n@media screen and (max-width: 599px) {\n  .header-carousel[_ngcontent-%COMP%] {\n    height: 230px;\n  }\n  .header-carousel.offset-bottom[_ngcontent-%COMP%] {\n    height: 310px;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    min-width: 240px;\n    width: 95%;\n    text-align: center;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 12px;\n    margin-bottom: 16px;\n    white-space: nowrap;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 19px;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 0px 16px;\n  }\n  .header-carousel[_ngcontent-%COMP%]   button.swipe-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-carousel[_ngcontent-%COMP%] {\n    height: 480px;\n  }\n  .header-carousel.offset-bottom[_ngcontent-%COMP%] {\n    height: 560px;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n    min-width: 200px;\n    width: 60%;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 28px;\n    margin-bottom: 16px;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 24px;\n  }\n  .header-carousel[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.price[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  padding: 0px 10px 10px 10px !important;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci1jYXJvdXNlbC9oZWFkZXItY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC9oZWFkZXItY2Fyb3VzZWwvaGVhZGVyLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUNLcUI7QUNOekI7QUZHSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FFRFI7QUZJSTtFQUNJLFFBQUE7QUVGUjtBRktJO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FFSlI7QUZNUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRUpaO0FGTVk7RUFDSSxnQ0NsQ1E7RURtQ1IsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRUpoQjtBRk9ZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUVMaEI7QUZRWTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FFTmhCO0FGV0k7RUFDSSxhQUFBO0FFVFI7QUZXUTtFQUNJLG9CQ25Ed0I7QUMwQ3BDO0FGYUk7RUFDSSw4Q0FBQTtBRVhSO0FGYVE7RUFDSSxzQ0FBQTtBRVhaO0FGZUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUVkUjtBRmlCSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUVmUjtBRmlCUTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBRWZaOztBRnNCQTtFQUNJO0lBQ0ksYUFBQTtFRW5CTjtFRnFCTTtJQUNJLGFBQUE7RUVuQlY7RUZ1QlU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsY0FBQTtFRXJCZDtFRnVCYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUVyQmxCO0VGd0JjO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VFdEJsQjtFRjBCYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRXhCbEI7RUY2Qk07SUFDSSxhQUFBO0VFM0JWO0FBQ0Y7QUZpQ0E7RUFDSTtJQUNJLGFBQUE7RUUvQk47RUZpQ007SUFDSSxhQUFBO0VFL0JWO0VGbUNVO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VFakNkO0VGbUNjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUVqQ2xCO0VGb0NjO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VFbENsQjtFRnFDYztJQUNJLGVBQUE7RUVuQ2xCO0FBQ0Y7QUYwQ0E7RUFDSSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUV4Q0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlYWRlci1jYXJvdXNlbCB7XHJcbiAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0O1xyXG5cclxuICAgIC5zbGlkZS1pdGVtIHtcclxuICAgICAgICBoZWlnaHQgICAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcclxuICAgICAgICB0b3A6IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUtaW5mbyB7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQgIDogMTAwJTtcclxuICAgICAgICB3aWR0aCAgIDogMTAwJTtcclxuICAgICAgICB0b3AgICAgIDogMDtcclxuICAgICAgICB6LWluZGV4IDogMjtcclxuXHJcbiAgICAgICAgLm1hdC1tZGMtY2FyZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoIDogMTUwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIG1hcmdpbiAgICA6IDAgMTZweDtcclxuICAgICAgICAgICAgd2lkdGggICAgIDogMjUlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29sb3IgICAgIDogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIC5zbGlkZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseSAgOiAkc2Vjb25kYXJ5LWZvbnQtZmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplICAgIDogNDJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0ICA6IDQycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2UgIDogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgICAgOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0ICA6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZyAgICAgICA6IDRweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAgICAgOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub2Zmc2V0LWJvdHRvbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcblxyXG4gICAgICAgIC5zbGlkZS1pbmZvIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZnVsbHNjcmVlbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRtYWluLXRvb2xiYXItaGVpZ2h0fSkpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICYudG9vbGJhci0yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMycHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXNrIHtcclxuICAgICAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICB0b3AgICAgICAgOiAwO1xyXG4gICAgICAgIGJvdHRvbSAgICA6IDA7XHJcbiAgICAgICAgbGVmdCAgICAgIDogMDtcclxuICAgICAgICByaWdodCAgICAgOiAwO1xyXG4gICAgICAgIHotaW5kZXggICA6IDE7XHJcbiAgICAgICAgd2lkdGggICAgIDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uc3dpcGUtYXJyb3cge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcCAgIDogLTcxcHg7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogNzBweDtcclxuICAgICAgICBib3gtc2hhZG93ICAgOiBub25lO1xyXG4gICAgICAgIHJpZ2h0ICAgICAgICA6IDA7XHJcbiAgICAgICAgcGFkZGluZyAgICAgIDogMDtcclxuICAgICAgICBtaW4td2lkdGggICAgOiA0MHB4O1xyXG5cclxuICAgICAgICAmLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0ICAgICA6IDA7XHJcbiAgICAgICAgICAgIGxlZnQgICAgICA6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8geHNcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5oZWFkZXItY2Fyb3VzZWwge1xyXG4gICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgLSAzMzBweDtcclxuXHJcbiAgICAgICAgJi5vZmZzZXQtYm90dG9tIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSAzMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlLWluZm8ge1xyXG5cclxuICAgICAgICAgICAgLm1hdC1tZGMtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGggOiAyNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgICA6IDk1JTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luICAgIDogMCBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zbGlkZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplICAgIDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodCAgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2UgIDogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgICAgOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgOiAwcHggMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLnN3aXBlLWFycm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBzbVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuaGVhZGVyLWNhcm91c2VsIHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0IC0gODBweDtcclxuXHJcbiAgICAgICAgJi5vZmZzZXQtYm90dG9tIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWRlLWluZm8ge1xyXG4gICAgICAgICAgICAubWF0LW1kYy1jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aCAgICAgICA6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgICAgIDogNjAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zbGlkZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplICAgIDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodCAgOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAgICA6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweCAxMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogMTBweDtcclxufSIsIiRmb250LWZhbWlseTogIFwiVHJ1Y3VsZW50YVwiLCBzZXJpZjtcclxuJHNlY29uZGFyeS1mb250LWZhbWlseTogXCJUcnVjdWxlbnRhXCIsIHNlcmlmOyAgXHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcclxuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XHJcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xyXG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNTYwcHg7XHJcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XHJcblxyXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDtcclxuXHJcbiRhZG1pbi10b29sYmFyLWhlaWdodDogNTZweDtcclxuJGFkbWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7IiwiLmhlYWRlci1jYXJvdXNlbCB7XG4gIGhlaWdodDogNTYwcHg7XG59XG4uaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uaGVhZGVyLWNhcm91c2VsIC5zd2lwZXItbGF6eS1wcmVsb2FkZXIge1xuICB0b3A6IDE1JTtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1tZGMtY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIHdpZHRoOiAyNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtbWRjLWNhcmQgLnNsaWRlLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiVHJ1Y3VsZW50YVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1tZGMtY2FyZCAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1tZGMtY2FyZCAubGluayB7XG4gIHBhZGRpbmc6IDRweCAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaGVhZGVyLWNhcm91c2VsLm9mZnNldC1ib3R0b20ge1xuICBoZWlnaHQ6IDY0MHB4O1xufVxuLmhlYWRlci1jYXJvdXNlbC5vZmZzZXQtYm90dG9tIC5zbGlkZS1pbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4uaGVhZGVyLWNhcm91c2VsLmZ1bGxzY3JlZW4ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMzZweCArIDcycHgpKSAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1jYXJvdXNlbC5mdWxsc2NyZWVuLnRvb2xiYXItMiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIzMnB4KSAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1jYXJvdXNlbCAubWFzayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlci1jYXJvdXNlbCBidXR0b24uc3dpcGUtYXJyb3cge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tdG9wOiAtNzFweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuLmhlYWRlci1jYXJvdXNlbCBidXR0b24uc3dpcGUtYXJyb3cuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5oZWFkZXItY2Fyb3VzZWwge1xuICAgIGhlaWdodDogMjMwcHg7XG4gIH1cbiAgLmhlYWRlci1jYXJvdXNlbC5vZmZzZXQtYm90dG9tIHtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1tZGMtY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1tZGMtY2FyZCAuc2xpZGUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmhlYWRlci1jYXJvdXNlbCAuc2xpZGUtaW5mbyAubWF0LW1kYy1jYXJkIC5kZXNjIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtbWRjLWNhcmQgLmxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIGJ1dHRvbi5zd2lwZS1hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAuaGVhZGVyLWNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwub2Zmc2V0LWJvdHRvbSB7XG4gICAgaGVpZ2h0OiA1NjBweDtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtbWRjLWNhcmQge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtbWRjLWNhcmQgLnNsaWRlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtbWRjLWNhcmQgLmRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1tZGMtY2FyZCAubGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4ucHJpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6272:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-image/header-image.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderImageComponent": () => (/* binding */ HeaderImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










function HeaderImageComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function HeaderImageComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.desc);
  }
}
function HeaderImageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "MENU"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "RESERVATION"));
  }
}
class HeaderImageComponent {
  constructor(appSettings, sanitizer) {
    this.appSettings = appSettings;
    this.sanitizer = sanitizer;
    this.contentOffsetToTop = false;
    this.isHomePage = false;
    this.fullscreen = false;
    this.settings = this.appSettings.settings;
    setTimeout(() => {
      this.settings.headerBgImage = true;
    });
  }
  ngOnInit() {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
    if (this.backgroundImage) {
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.backgroundImage + ')');
    }
  }
  ngOnDestroy() {
    setTimeout(() => {
      this.settings.headerBgImage = false;
      this.settings.contentOffsetToTop = false;
    });
  }
  static #_ = this.ɵfac = function HeaderImageComponent_Factory(t) {
    return new (t || HeaderImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderImageComponent,
    selectors: [["app-header-image"]],
    inputs: {
      backgroundImage: "backgroundImage",
      bgImageAnimate: "bgImageAnimate",
      contentOffsetToTop: "contentOffsetToTop",
      contentMinHeight: "contentMinHeight",
      title: "title",
      desc: "desc",
      isHomePage: "isHomePage",
      fullscreen: "fullscreen"
    },
    decls: 7,
    vars: 17,
    consts: [[1, "header-image-wrapper", 3, "dir", "ngClass"], [1, "bg"], [1, "mask"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header-image-content"], ["class", "title", 4, "ngIf"], ["class", "desc", 4, "ngIf"], ["ngClass.gt-xs", "mt-4", "ngClass.xs", "mt-3", 4, "ngIf"], [1, "title"], [1, "desc"], ["ngClass.gt-xs", "mt-4", "ngClass.xs", "mt-3"], ["mat-raised-button", "", "routerLink", "/menu"], ["mat-raised-button", "", "color", "primary", "routerLink", "/reservation"]],
    template: function HeaderImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderImageComponent_h1_4_Template, 2, 1, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderImageComponent_p_5_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderImageComponent_div_6_Template, 7, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fullscreen", ctx.fullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.settings.rtl ? "rtl" : "ltr")("ngClass", "toolbar-" + ctx.settings.toolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", ctx.bgImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-anime", ctx.bgImageAnimate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-height", ctx.contentMinHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("offset-bottom", ctx.contentOffsetToTop)("home-page", ctx.isHomePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHomePage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Dir, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".header-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 360px;\n  color: #fff;\n  z-index: 1;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .header-image-content.offset-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 80px;\n  min-height: 440px;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .header-image-content.home-page[_ngcontent-%COMP%] {\n  min-height: 520px;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Truculenta\", serif;\n  font-size: 60px;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  padding: 0 16px;\n  text-align: center;\n  text-transform: uppercase;\n  max-width: 70%;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  width: 110%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.header-image-wrapper[_ngcontent-%COMP%]   .bg-anime[_ngcontent-%COMP%] {\n  -webkit-animation-name: _ngcontent-%COMP%_MOVE-BG;\n  -webkit-animation-duration: 15s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  -moz-animation-name: MOVE-BG;\n  -moz-animation-duration: 15s;\n  -moz-animation-timing-function: ease-in-out;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-direction: alternate;\n  -ms-animation-name: MOVE-BG;\n  -ms-animation-duration: 15s;\n  -ms-animation-timing-function: ease-in-out;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-direction: alternate;\n  animation-name: _ngcontent-%COMP%_MOVE-BG;\n  animation-duration: 15s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n.header-image-wrapper.fullscreen[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen.toolbar-2[_ngcontent-%COMP%] {\n  height: calc(100vh - 196px) !important;\n}\n.header-image-wrapper.fullscreen.toolbar-2[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 196px) !important;\n}\n@keyframes _ngcontent-%COMP%_MOVE-BG {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-7%);\n  }\n}\n.header-image-wrapper[dir=rtl][_ngcontent-%COMP%]   .bg-anime[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_MOVE-BG-RTL;\n}\n@keyframes _ngcontent-%COMP%_MOVE-BG-RTL {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(7%);\n  }\n}\n@media screen and (max-width: 599px) {\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content.offset-bottom[_ngcontent-%COMP%] {\n    min-height: 360px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content.home-page[_ngcontent-%COMP%] {\n    min-height: 440px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 14px;\n    max-width: 100%;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content.offset-bottom[_ngcontent-%COMP%] {\n    min-height: 400px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content.home-page[_ngcontent-%COMP%] {\n    min-height: 480px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .header-image-wrapper[_ngcontent-%COMP%]   .header-image-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n    max-width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci1pbWFnZS9oZWFkZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC9oZWFkZXItaW1hZ2UvaGVhZGVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxpQkVIa0I7RUZJbEIsV0FBQTtFQUNBLFVBQUE7QUNBUjtBRENRO0VBQ0ksb0JFSndCO0VGS3hCLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGdDRW5CWTtFRm9CWixlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ1o7QURDUTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQ0NaO0FERUk7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0FSO0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQVI7QURFSTtFQUNJLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7QUNBUjtBREVJO0VBQ0kscUNBQUE7QUNBUjtBRENRO0VBQ0kscUNBQUE7QUNDWjtBRENRO0VBQ0ksc0NBQUE7QUNDWjtBREFZO0VBQ0ksc0NBQUE7QUNFaEI7QURPQTtFQUFxQjtJQUFPLHdCQUFBO0VDc0IxQjtFRHRCc0Q7SUFBSywwQkFBQTtFQ3lCM0Q7QUFDRjtBRHZCSTtFQUlJLDJCQUFBO0FDeUJSO0FEbEJBO0VBQXlCO0lBQU8sd0JBQUE7RUMrQzlCO0VEL0MwRDtJQUFLLHlCQUFBO0VDa0QvRDtBQUNGO0FEaERBO0VBRVE7SUFDSSxpQkFBQTtFQ2lEVjtFRGhEVTtJQUNJLGlCQUFBO0VDa0RkO0VEaERVO0lBQ0ksaUJBQUE7RUNrRGQ7RURoRFU7SUFDSSxlQUFBO0VDa0RkO0VEaERVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUNrRGQ7QUFDRjtBRDVDQTtFQUVRO0lBQ0ksaUJBQUE7RUM2Q1Y7RUQ1Q1U7SUFDSSxpQkFBQTtFQzhDZDtFRDVDVTtJQUNJLGlCQUFBO0VDOENkO0VENUNVO0lBQ0ksZUFBQTtFQzhDZDtFRDVDVTtJQUNJLGVBQUE7SUFDQSxjQUFBO0VDOENkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlYWRlci1pbWFnZS13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IC0kbWFpbi10b29sYmFyLWhlaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKCRtYWluLXRvb2xiYXItaGVpZ2h0LzIpO1xyXG4gICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMTsgICAgICAgIFxyXG4gICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaG9tZS1wYWdle1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wICsgODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWZhbWlseTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4OyAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3tcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7ICBcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LW1kYy1yYWlzZWQtYnV0dG9ueyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXNreyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmJne1xyXG4gICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICB9XHJcbiAgICAuYmctYW5pbWV7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogTU9WRS1CRztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgICAgICBcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOyAgICAgIFxyXG4gICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogTU9WRS1CRztcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOyAgICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIH1cclxuICAgICYuZnVsbHNjcmVlbntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRtYWluLXRvb2xiYXItaGVpZ2h0fSkgIWltcG9ydGFudDtcclxuICAgICAgICAuaGVhZGVyLWltYWdlLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRvb2xiYXItMntcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTk2cHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5oZWFkZXItaW1hZ2UtY29udGVudHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE5NnB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpOyB9IH0gIFxyXG5ALW1vei1rZXlmcmFtZXMgTU9WRS1CRyB7IGZyb20geyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfSAgXHJcbkAtbXMta2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTclKTsgfSB9IFxyXG5Aa2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfVxyXG5cclxuLmhlYWRlci1pbWFnZS13cmFwcGVyW2Rpcj1cInJ0bFwiXXtcclxuICAgIC5iZy1hbmltZXtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgICAgICBcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgICAgICBcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkctUlRMOyAgICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgXHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDclKTsgfSB9ICBcclxuQC1tb3ota2V5ZnJhbWVzIE1PVkUtQkctUlRMIHsgZnJvbSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNyUpOyB9IH0gIFxyXG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7IH0gfSBcclxuQGtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNyUpOyB9IH1cclxuXHJcbi8vIHhzXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuaGVhZGVyLWltYWdlLXdyYXBwZXJ7XHJcbiAgICAgICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgLSA4MHB4O1xyXG4gICAgICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3sgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBzbVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuaGVhZGVyLWltYWdlLXdyYXBwZXJ7XHJcbiAgICAgICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgLSA0MHB4O1xyXG4gICAgICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgKyA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2N7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7IFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyLWltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IC03MnB4O1xuICBwYWRkaW5nLXRvcDogMzZweDtcbn1cbi5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cbi5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQub2Zmc2V0LWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA0NDBweDtcbn1cbi5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQuaG9tZS1wYWdlIHtcbiAgbWluLWhlaWdodDogNTIwcHg7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRydWN1bGVudGFcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50IC5kZXNjIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQgLm1hdC1tZGMtcmFpc2VkLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLm1hc2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5iZyB7XG4gIHdpZHRoOiAxMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5iZy1hbmltZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkc7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgLW1zLWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogTU9WRS1CRztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyLmZ1bGxzY3JlZW4ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KSAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyLmZ1bGxzY3JlZW4gLmhlYWRlci1pbWFnZS1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCkgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW1hZ2Utd3JhcHBlci5mdWxsc2NyZWVuLnRvb2xiYXItMiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE5NnB4KSAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyLmZ1bGxzY3JlZW4udG9vbGJhci0yIC5oZWFkZXItaW1hZ2UtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE5NnB4KSAhaW1wb3J0YW50O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgTU9WRS1CRyB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgTU9WRS1CRyB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIE1PVkUtQkcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXJbZGlyPXJ0bF0gLmJnLWFuaW1lIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkctUlRMO1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkctUlRMO1xuICBhbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIE1PVkUtQkctUlRMIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgTU9WRS1CRy1SVEwge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQub2Zmc2V0LWJvdHRvbSB7XG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudC5ob21lLXBhZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDQ0MHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudCAuZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAuaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgfVxuICAuaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50Lm9mZnNldC1ib3R0b20ge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQuaG9tZS1wYWdlIHtcbiAgICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgfVxuICAuaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQgLmRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxufSIsIiRmb250LWZhbWlseTogIFwiVHJ1Y3VsZW50YVwiLCBzZXJpZjtcclxuJHNlY29uZGFyeS1mb250LWZhbWlseTogXCJUcnVjdWxlbnRhXCIsIHNlcmlmOyAgXHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcclxuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XHJcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xyXG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNTYwcHg7XHJcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XHJcblxyXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDtcclxuXHJcbiRhZG1pbi10b29sYmFyLWhlaWdodDogNTZweDtcclxuJGFkbWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9501:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-video/header-video.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderVideoComponent": () => (/* binding */ HeaderVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








function HeaderVideoComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function HeaderVideoComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.desc);
  }
}
function HeaderVideoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "MENU"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "RESERVATION"));
  }
}
class HeaderVideoComponent {
  constructor(appSettings) {
    this.appSettings = appSettings;
    this.contentOffsetToTop = false;
    this.isHomePage = false;
    this.fullscreen = false;
    this.settings = this.appSettings.settings;
    setTimeout(() => {
      this.settings.headerBgVideo = true;
    });
  }
  ngOnInit() {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
    var vid = document.getElementById("bgVideo");
    vid.muted = true;
  }
  ngOnDestroy() {
    setTimeout(() => {
      this.settings.headerBgVideo = false;
      this.settings.contentOffsetToTop = false;
    });
  }
  static #_ = this.ɵfac = function HeaderVideoComponent_Factory(t) {
    return new (t || HeaderVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderVideoComponent,
    selectors: [["app-header-video"]],
    inputs: {
      backgroundVideo: "backgroundVideo",
      contentOffsetToTop: "contentOffsetToTop",
      contentMinHeight: "contentMinHeight",
      title: "title",
      desc: "desc",
      isHomePage: "isHomePage",
      fullscreen: "fullscreen"
    },
    decls: 7,
    vars: 13,
    consts: [[1, "header-video-wrapper", 3, "ngClass"], ["id", "bgVideo", "autoplay", "", "muted", "", "loop", "", 3, "src"], [1, "mask"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header-video-content"], ["class", "title", 4, "ngIf"], ["class", "desc", 4, "ngIf"], ["ngClass.gt-xs", "mt-4", "ngClass.xs", "mt-3", 4, "ngIf"], [1, "title"], [1, "desc"], ["ngClass.gt-xs", "mt-4", "ngClass.xs", "mt-3"], ["mat-raised-button", "", "routerLink", "/menu"], ["mat-raised-button", "", "color", "primary", "routerLink", "/reservation"]],
    template: function HeaderVideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "video", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderVideoComponent_h1_4_Template, 2, 1, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderVideoComponent_p_5_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderVideoComponent_div_6_Template, 7, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fullscreen", ctx.fullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "toolbar-" + ctx.settings.toolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.backgroundVideo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-height", ctx.contentMinHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("offset-bottom", ctx.contentOffsetToTop)("home-page", ctx.isHomePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHomePage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".header-video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 360px;\n  color: #fff;\n  z-index: 1;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .header-video-content.offset-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 80px;\n  min-height: 440px;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .header-video-content.home-page[_ngcontent-%COMP%] {\n  min-height: 520px;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Truculenta\", serif;\n  font-size: 60px;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  padding: 0 16px;\n  text-align: center;\n  text-transform: uppercase;\n  max-width: 70%;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-video-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n  object-position: center;\n  object-fit: cover;\n}\n.header-video-wrapper.fullscreen[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px) !important;\n}\n.header-video-wrapper.fullscreen[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px) !important;\n}\n.header-video-wrapper.fullscreen.toolbar-2[_ngcontent-%COMP%] {\n  height: calc(100vh - 166px) !important;\n}\n.header-video-wrapper.fullscreen.toolbar-2[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 166px) !important;\n}\n\n@media screen and (max-width: 599px) {\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content.offset-bottom[_ngcontent-%COMP%] {\n    min-height: 360px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content.home-page[_ngcontent-%COMP%] {\n    min-height: 440px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 14px;\n    max-width: 100%;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content.offset-bottom[_ngcontent-%COMP%] {\n    min-height: 400px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content.home-page[_ngcontent-%COMP%] {\n    min-height: 480px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .header-video-wrapper[_ngcontent-%COMP%]   .header-video-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n    max-width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci12aWRlby9oZWFkZXItdmlkZW8uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC9oZWFkZXItdmlkZW8vaGVhZGVyLXZpZGVvLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxpQkVGa0I7RUZHbEIsV0FBQTtFQUNBLFVBQUE7QUNBUjtBRENRO0VBQ0ksb0JFSndCO0VGS3hCLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGdDRW5CWTtFRm9CWixlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ1o7QURDUTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQ0NaO0FERUk7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxxQ0FBQTtBQ0FSO0FEQ1E7RUFDSSxxQ0FBQTtBQ0NaO0FEQ1E7RUFDSSxzQ0FBQTtBQ0NaO0FEQVk7RUFDSSxzQ0FBQTtBQ0VoQjs7QURRQTtFQUVRO0lBQ0ksaUJBQUE7RUNOVjtFRE9VO0lBQ0ksaUJBQUE7RUNMZDtFRE9VO0lBQ0ksaUJBQUE7RUNMZDtFRE9VO0lBQ0ksZUFBQTtFQ0xkO0VET1U7SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQ0xkO0FBQ0Y7QURXQTtFQUVRO0lBQ0ksaUJBQUE7RUNWVjtFRFdVO0lBQ0ksaUJBQUE7RUNUZDtFRFdVO0lBQ0ksaUJBQUE7RUNUZDtFRFdVO0lBQ0ksZUFBQTtFQ1RkO0VEV1U7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQ1RkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlYWRlci12aWRlby13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IC0kbWFpbi10b29sYmFyLWhlaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKCRtYWluLXRvb2xiYXItaGVpZ2h0LzIpO1xyXG4gICAgLmhlYWRlci12aWRlby1jb250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMTsgICAgICAgIFxyXG4gICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaG9tZS1wYWdle1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wICsgODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWZhbWlseTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNje1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1tZGMtcmFpc2VkLWJ1dHRvbnsgXHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWFza3sgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpOyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH0gXHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgICYuZnVsbHNjcmVlbntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRtYWluLXRvb2xiYXItaGVpZ2h0fSkgIWltcG9ydGFudDtcclxuICAgICAgICAuaGVhZGVyLXZpZGVvLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRvb2xiYXItMntcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTY2cHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5oZWFkZXItdmlkZW8tY29udGVudHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2NnB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIFxyXG4gXHJcblxyXG4vLyB4c1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgLmhlYWRlci12aWRlby13cmFwcGVye1xyXG4gICAgICAgIC5oZWFkZXItdmlkZW8tY29udGVudHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0IC0gODBweDtcclxuICAgICAgICAgICAgJi5vZmZzZXQtYm90dG9te1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCAtIDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ob21lLXBhZ2V7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2N7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNtXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5oZWFkZXItdmlkZW8td3JhcHBlcntcclxuICAgICAgICAuaGVhZGVyLXZpZGVvLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCAtIDQwcHg7XHJcbiAgICAgICAgICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaG9tZS1wYWdle1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3sgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTsgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyLXZpZGVvLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IC03MnB4O1xuICBwYWRkaW5nLXRvcDogMzZweDtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQub2Zmc2V0LWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA0NDBweDtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQuaG9tZS1wYWdlIHtcbiAgbWluLWhlaWdodDogNTIwcHg7XG59XG4uaGVhZGVyLXZpZGVvLXdyYXBwZXIgLmhlYWRlci12aWRlby1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRydWN1bGVudGFcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyLXZpZGVvLXdyYXBwZXIgLmhlYWRlci12aWRlby1jb250ZW50IC5kZXNjIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQgLm1hdC1tZGMtcmFpc2VkLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uaGVhZGVyLXZpZGVvLXdyYXBwZXIgLm1hc2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRlci12aWRlby13cmFwcGVyIHZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlci5mdWxsc2NyZWVuIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCkgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlci5mdWxsc2NyZWVuIC5oZWFkZXItdmlkZW8tY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLXZpZGVvLXdyYXBwZXIuZnVsbHNjcmVlbi50b29sYmFyLTIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjZweCkgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItdmlkZW8td3JhcHBlci5mdWxsc2NyZWVuLnRvb2xiYXItMiAuaGVhZGVyLXZpZGVvLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjZweCkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmhlYWRlci12aWRlby13cmFwcGVyIC5oZWFkZXItdmlkZW8tY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMjgwcHg7XG4gIH1cbiAgLmhlYWRlci12aWRlby13cmFwcGVyIC5oZWFkZXItdmlkZW8tY29udGVudC5vZmZzZXQtYm90dG9tIHtcbiAgICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgfVxuICAuaGVhZGVyLXZpZGVvLXdyYXBwZXIgLmhlYWRlci12aWRlby1jb250ZW50LmhvbWUtcGFnZSB7XG4gICAgbWluLWhlaWdodDogNDQwcHg7XG4gIH1cbiAgLmhlYWRlci12aWRlby13cmFwcGVyIC5oZWFkZXItdmlkZW8tY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuICAuaGVhZGVyLXZpZGVvLXdyYXBwZXIgLmhlYWRlci12aWRlby1jb250ZW50IC5kZXNjIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDMyMHB4O1xuICB9XG4gIC5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQub2Zmc2V0LWJvdHRvbSB7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gIH1cbiAgLmhlYWRlci12aWRlby13cmFwcGVyIC5oZWFkZXItdmlkZW8tY29udGVudC5ob21lLXBhZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDQ4MHB4O1xuICB9XG4gIC5oZWFkZXItdmlkZW8td3JhcHBlciAuaGVhZGVyLXZpZGVvLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbiAgLmhlYWRlci12aWRlby13cmFwcGVyIC5oZWFkZXItdmlkZW8tY29udGVudCAuZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG59IiwiJGZvbnQtZmFtaWx5OiAgXCJUcnVjdWxlbnRhXCIsIHNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQtZmFtaWx5OiBcIlRydWN1bGVudGFcIiwgc2VyaWY7ICBcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA1NjBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4O1xyXG5cclxuJGFkbWluLXRvb2xiYXItaGVpZ2h0OiA1NnB4O1xyXG4kYWRtaW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDsiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7140:
/*!***************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploadComponent": () => (/* binding */ ImageUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);







function ImageUploadComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", file_r5.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImageUploadComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
  }
}
function ImageUploadComponent_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImageUploadComponent_input_4_Template_input_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.fileChange(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("accept", ctx_r2.acceptTypes);
  }
}
function ImageUploadComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageUploadComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.fileUploadClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "BTN.UPLOAD"));
  }
}
function ImageUploadComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageUploadComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.deleteFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "BTN.REMOVE"));
  }
}
class ImageUploadComponent {
  constructor(appService) {
    this.appService = appService;
    this.base64 = '';
    this.fileSize = 1000;
    this.onFileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onFileUploadClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.files = [];
  }
  ngOnInit() {
    if (this.base64) {
      this.files.push({
        name: 'image-' + new Date().getDate,
        content: this.base64,
        size: null
      });
    }
  }
  fileChange(input) {
    if (input.files.length) {
      for (var i = 0; i < input.files.length; i++) {
        const reader = new FileReader();
        if (input.files[i].size / 1024 > this.fileSize) {
          const message = this.appService.getTranslateValue('MESSAGE.FILE_SIZE', this.fileSize.toString()); //'The file size cannot exceed '+this.fileSize.toString()+' kb.';
          let dialogRef = this.appService.openAlertDialog(message);
          dialogRef.afterClosed().subscribe(dialogResult => {
            this.clearInput();
          });
        } else {
          let name = input.files[i].name;
          let size = input.files[i].size;
          reader.readAsDataURL(input.files[i]);
          reader.onload = () => {
            var img = new Image();
            img.onload = () => {
              // console.log(img.width + " " + img.height);
              // if(img.width > 300){ 
              //   const message = 'The size of the image should be 300x300!';
              //   let dialogRef = this.appService.openAlertDialog(message);             
              // }
              // else{
              //   this.files.push({
              //     "name": name, 
              //     "size": size, 
              //     "content": reader.result 
              //   }); 
              //   this.onFileChange.emit(this.files);  
              // }
              this.files.push({
                "name": name,
                "size": size,
                "content": reader.result
              });
              this.onFileChange.emit(this.files);
            };
            img.src = reader.result;
          };
        }
      }
    }
  }
  fileUploadClick() {
    this.onFileUploadClick.emit();
  }
  clearInput() {
    if (this.files.length == 0) {
      if (document.getElementById('singleFileUploader')) {
        document.getElementById('singleFileUploader').value = '';
      }
    }
  }
  deleteFile() {
    const message = this.appService.getTranslateValue('MESSAGE.SURE_DELETE');
    let dialogRef = this.appService.openConfirmDialog('', message);
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.files.length = 0;
        this.onFileChange.emit(this.files);
        this.clearInput();
      }
    });
  }
  static #_ = this.ɵfac = function ImageUploadComponent_Factory(t) {
    return new (t || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImageUploadComponent,
    selectors: [["app-image-upload"]],
    inputs: {
      base64: "base64",
      fileSize: "fileSize",
      acceptTypes: "acceptTypes"
    },
    outputs: {
      onFileChange: "onFileChange",
      onFileUploadClick: "onFileUploadClick"
    },
    decls: 7,
    vars: 7,
    consts: [["fxLayout", "row wrap"], ["class", "w-100", 4, "ngFor", "ngForOf"], ["src", "assets/images/others/noimage.png", "class", "d-block w-100 mat-elevation-z2", 4, "ngIf"], [1, "file-upload", "mb-2"], ["id", "singleFileUploader", "type", "file", 3, "accept", "change", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "uppercase w-100", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "class", "uppercase w-100", "type", "button", 3, "click", 4, "ngIf"], [1, "w-100"], ["alt", "image", 1, "d-block", "w-100", "mat-elevation-z2", 3, "src"], ["src", "assets/images/others/noimage.png", 1, "d-block", "w-100", "mat-elevation-z2"], ["id", "singleFileUploader", "type", "file", 3, "accept", "change"], ["input", ""], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "uppercase", "w-100", 3, "click"], ["mat-raised-button", "", "color", "warn", "type", "button", 1, "uppercase", "w-100", 3, "click"]],
    template: function ImageUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageUploadComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageUploadComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageUploadComponent_input_4_Template, 2, 1, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ImageUploadComponent_button_5_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ImageUploadComponent_button_6_Template, 3, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-height", 132, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.files.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.files.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.files.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.files.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".file-upload[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 100%;\n}\n.file-upload[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  height: 30px;\n  cursor: pointer;\n  opacity: 0;\n  font-size: 0;\n  outline: none;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFUiIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLXVwbG9hZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0W3R5cGU9J2ZpbGUnXXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMDsgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59ICIsIi5maWxlLXVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5maWxlLXVwbG9hZCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZm9udC1zaXplOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6869:
/*!***********************************************!*\
  !*** ./src/app/shared/logo/logo.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LogoComponent {
  static #_ = this.ɵfac = function LogoComponent_Factory(t) {
    return new (t || LogoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoComponent,
    selectors: [["app-logo"]],
    decls: 56,
    vars: 0,
    consts: [[1, "logo"], ["version", "1.0", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1000 557", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 1000 557"], ["stroke", "none"], ["d", "M23.94,534.45L23.94,534.45c5.82,0.05,11.59,0.05,17.38,0.07C35.53,534.52,29.74,534.5,23.94,534.45z\n       M109.43,490.95L109.43,490.95c0,2,0.05,4.06,0.05,6.06C109.48,494.98,109.45,492.95,109.43,490.95z M932.63,490.49\n      C932.63,490.49,932.63,490.51,932.63,490.49c0.05,0.02,0.07,0.02,0.1,0c0.02,0,0.02,0,0.02,0v-0.02\n      C932.7,490.46,932.68,490.49,932.63,490.49z", 1, "st0"], ["d", "M353.64,360c0.02,11.76-4.15,21.58-12.7,29.57c-5.34,4.97-11.66,8.23-18.93,8.96\n      c-7.05,0.72-14.22,0.92-20.95-1.93c-7.87-3.31-13.88-8.76-18.42-16.03c-4.06-6.47-4.66-13.54-4.66-20.83\n      c-0.02-22.14,0.02-44.25-0.05-66.39c-0.02-5.6-1.38-10.94-6.06-14.51c-3.38-2.61-7.1-5.5-11.68-4.56\n      c-8.09,1.64-15.45,5.24-15.47,16.39c-0.02,22.74,0,45.46-0.02,68.18c0,4.37-0.39,8.64-1.5,12.92\n      c-4.18,16.39-19.36,29.24-38.99,27.5c-6.76-0.6-13.21-1.67-18.76-6.04c-4.49-3.55-7.99-7.77-10.82-12.84\n      c-3.72-6.61-4.56-13.66-4.59-20.95c-0.05-22.57-0.17-45.17,0.05-67.72c0.07-8.84-6.11-15.26-13.35-18.11\n      c-3.38-1.33-6.88-0.24-10.07,1.18c-5.87,2.63-9.68,6.95-10.14,13.64c-0.12,1.67-0.07,3.31-0.07,4.97\n      c-0.02,22.43-0.05,44.85,0,67.28c0,10.19-3.23,19.17-10.16,26.63c-5.26,5.67-11.52,9.7-19.34,10.98\n      c-18.49,3.02-32.98-3.4-42.08-20.38c-2.82-5.26-3.26-11.18-3.23-17.09v-55.12c0-18.66,0.07-37.32-0.07-56.01\n      c-0.05-4.68,0.68-9.27,1.16-13.91c0.22-2.22,1.47-4.39,2.56-6.45c6.69-12.65,17.31-19.36,31.5-20.52c2-0.17,3.79,0.17,5.6,1.16\n      c6.42,3.45,13.01,6.61,19.39,10.14c3.02,1.67,5.34,1.74,8.5-0.07c9.1-5.21,19.19-7.99,29.4-10.07c8.74-1.79,17.53-2.46,26.43-1.16\n      c13.21,1.93,25.3,6.64,36.19,14.32c3.04,2.15,5.34,2.34,8.76,0.56c10.48-5.53,21.32-10.31,32.88-13.18\n      c18.98-4.71,37.44-3.55,54.9,5.77c18.47,9.87,30.15,24.99,34.04,45.77c0.65,3.4,0.7,6.88,0.7,10.33\n      C353.62,301.6,353.55,330.81,353.64,360z", 1, "st1"], ["d", "M454.94,321.67c26.51-0.02,53.01-0.02,79.5,0c4.22,0.02,8.43-0.17,12.6-0.72c5.7-0.8,11.11-2.37,15.06-6.95\n      c2.99-3.5,4.56-7.65,5.48-12.09c2.51-12.12-0.22-23.59-5.07-34.55c-6.33-14.32-15.6-26.44-27.76-36.45\n      c-14.48-11.93-31.07-18.59-49.47-21.1c-13.54-1.86-26.94-1.13-40.29,1.91c-17.48,3.98-32.98,11.76-46.18,23.88\n      c-7.48,6.88-13.52,15.09-18.18,24.09c-4.9,9.44-8.16,19.41-9.51,30.15c-1.57,12.14-0.8,24.17,1.64,35.85\n      c2.41,11.54,7.94,22.04,14.87,31.87c8.62,12.24,19.94,21.05,32.78,27.98c10.04,5.41,20.74,8.91,32.18,10.67\n      c15.6,2.39,31.12,3.26,46.79,1.57c14.34-1.5,28.46-4.1,41.86-9.7c7.56-3.19,14.48-7.22,19.53-13.93c4.66-6.2,7.31-13.01,6.23-20.88\n      c-1.62-12.14-10.91-21.53-23.78-23.3c-7.97-1.09-15.57,0.65-23.08,2.78c-15.96,4.56-32.06,6.06-48.48,2.8\n      c-8.84-1.76-16.1-6.01-21.73-13.45C451.73,321.38,453.35,321.67,454.94,321.67z M457.91,269.66c6.37-5.91,13.62-5.58,21.05-2.82\n      c7.17,2.63,10.28,8.33,11.37,15.5c0.29,1.96-0.65,2.32-2.27,2.32c-6.93-0.05-13.86-0.02-20.76-0.02h-17.36\n      C451.39,278.48,453.69,273.58,457.91,269.66z", 1, "st1"], ["d", "M773.25,274.49c-0.02,28.29,0,56.59,0,84.88c-0.02,9.44-2.68,17.91-8.79,25.25\n      c-8.93,10.74-20.35,15.11-34.23,13.91c-12.53-1.09-21.41-7.73-28.17-17.74c-2.63-3.89-4.15-8.26-4.49-13.06\n      c-0.31-4.66-0.39-9.32-0.39-13.98c0-20.79,0.07-41.55-0.05-62.31c-0.05-8.23-4.22-14-10.94-18.69\n      c-10.48-7.24-26.19,2.17-26.77,14.2c-0.12,2.1-0.22,4.2-0.22,6.3c-0.02,21.97-0.02,43.96,0,65.93c0,8.43-1.93,16.3-6.95,23.18\n      c-8.76,12-20.4,17.41-35.37,15.86c-9.7-1.01-17.89-4.64-24.24-12.07c-3.38-3.96-6.35-8.43-7.56-13.35\n      c-1.04-4.25-1.4-8.84-1.4-13.37c0.12-18.66,0.05-37.32,0.05-55.98c-0.02-17.91,0.07-35.83-0.07-53.71c-0.05-5,0.36-9.97,1.16-14.82\n      c0.82-4.92,3.48-9.27,6.74-13.21c6.93-8.35,15.93-12.31,26.6-13.08c2.44-0.17,4.35,0.8,6.28,1.98c7.99,4.95,15.98,9.87,23.92,14.87\n      c1.33,0.82,1.83,0.89,3.21-0.39c4.32-4.06,9.7-6.66,15.11-9.05c8.23-3.65,16.78-6.3,25.78-7.39c7.82-0.94,15.5-0.6,23.27,0.92\n      c6.61,1.3,12.99,3.02,19.05,5.82c18.98,8.79,31.55,23.06,36.74,43.53C772.84,264.02,773.27,269.23,773.25,274.49z", 1, "st1"], ["d", "M978.43,319.4c-0.51,15.09-3.45,29.65-10.89,43c-5.46,9.8-13.13,17.43-22.79,23.27\n      c-13.52,8.16-28.44,11.2-43.77,13.08c-15.23,1.86-30.27,0.56-45.39-1.67c-9.61-1.42-18.64-4.32-27.18-8.52\n      c-10.12-5-18.49-12.19-24.91-21.7c-5.21-7.75-9.17-16.15-10.79-25.16c-1.76-9.99-2.78-20.21-2.56-30.47\n      c0.22-9.78,0.05-19.55,0.05-31.87c0.24-11.01-0.31-24.58,0.29-38.1c0.29-6.9,3.09-12.7,7.17-18.08\n      c12.05-15.89,35.27-18.56,50.41-8.67c10.16,6.64,16.17,16.1,17.53,28.29c0.29,2.53,0.24,5.12,0.24,7.65\n      c0.02,19.58,0,39.13,0.05,58.69c0,2.7,0.12,5.43,0.43,8.11c0.8,7.39,4.88,12.31,11.81,14.75c8.96,3.16,19.53-2.29,22.79-11.15\n      c1.33-3.62,1.64-7.17,1.64-10.91c-0.02-20.76,0.02-41.52-0.02-62.29c-0.02-7.73,1.55-15.09,5.67-21.58\n      c5.17-8.09,12.46-13.69,21.92-16.01c13.74-3.38,26.27-0.72,36.67,8.98c7.65,7.12,11.66,16.2,11.73,26.8\n      c0.07,16.25,0.05,32.52,0.02,48.74C978.52,302.86,978.67,311.14,978.43,319.4z", 1, "st1"], ["d", "M741.67,142.66c0-1.11-0.56-1.67-1.62-1.67c-1.21-0.05-2.41-0.02-3.62-0.02h-67.28\n      c-7.36,0-14.75,0.05-22.11-0.05c-2.17-0.05-2.85,0.72-2.8,2.87c0.12,5.87,0.02,11.76,0.05,17.62c0.02,3.69,0,3.38-3.48,3.38H584.8\n      c-3.77,0-7.53-0.05-11.3,0.02c-1.71,0.05-2.37-0.56-2.34-2.32c0.07-6.47,0.12-12.94-0.02-19.43c-0.05-2.22,0.72-2.85,2.87-2.8\n      c6.16,0.12,12.34-0.05,18.49,0.1c2.34,0.05,3.11-0.65,3.09-3.04c-0.12-7.15,0.02-14.29,0.07-21.44c0.6,0.43,1.33,0.41,2,0.41\n      c6.18,0,12.34,0.02,18.49-0.02c3.38-0.02,3.43-0.07,3.45-3.55c0.02-5.87-0.05-11.73,0.05-17.58c0.02-1.38-0.72-3.11,1.23-3.91\n      c7.56-0.46,15.14-0.6,22.69,0.07h0.02c0.27-0.1,0.8-0.17,0.82-0.29c0.92-7.31,0.29-14.68,0.34-22.04c0-0.89-0.65-1.67-1.76-1.67\n      c-1.06-0.05-2.1-0.05-3.14-0.05h-87.61c-0.89,0-1.83,0.05-2.7,0c-1.59-0.12-2.15,0.65-2.1,2.12c0.05,1.06,0.02,2.1,0,3.16\n      c-0.02,13.4-0.02,26.8-0.07,40.2c0,3.4-0.05,3.45-3.48,3.48c-5.43,0.05-10.84,0.12-16.27-0.05c-2.27-0.05-2.85,0.8-2.8,2.87\n      c0.12,5.26,0.07,10.55,0.05,15.81c-0.05,6.11,0.75,5.34-5.17,5.38c-5.58,0.05-11.15,0.05-16.71-0.02c-2.1-0.05-3.33,0.22-3.23,2.87\n      c0.22,6.18,0.1,12.34,0.05,18.52c0,1.57,0.29,2.66,2.17,2.56c1.04-0.05,2.1,0,3.16,0c12.94,0,25.88-0.02,38.84,0\n      c3.4,0.02,3.45,0.07,3.48,3.52c0.05,5.87-0.02,11.76,0.02,17.62c0.02,3.43,0.05,3.5,3.43,3.5c30.13,0.02,60.21,0.02,90.31,0\n      c3.52-0.02,3.62-0.12,3.62-3.5c0.05-5.72,0-11.44,0.05-17.16c0.02-3.23,0.05-3.28,3.11-3.31c5.87-0.05,11.76,0.07,17.62-0.05\n      c2.27-0.05,3.19,0.56,3.11,2.99c-0.14,6.04,0,12.05-0.07,18.08c-0.05,1.96,0.29,3.04,2.68,3.04c14.44-0.1,28.9-0.1,43.36,0\n      c2.27,0,2.8-0.84,2.78-2.95c-0.1-5.7-0.02-11.42-0.05-17.14c0-4.15-0.22-3.98,3.89-3.98c6.04,0.02,12.05,0,18.08,0\n      c1.28,0.02,2.37-0.05,2.37-1.83C741.65,156.2,741.65,149.42,741.67,142.66z M571.16,93.79c0-1.64,0.46-2.46,2.27-2.44\n      c6.61,0.05,13.21,0.1,19.8-0.02c2.27-0.05,2.29,1.18,2.29,2.82c-0.05,7.19,0,14.36,0.02,21.53c-0.53,0.19-1.01,0.46-1.55,0.46\n      c-6.76,0.05-13.5,0-20.25,0.07c-1.93,0.02-2.61-0.68-2.58-2.61C571.25,107.02,571.21,100.41,571.16,93.79z", 1, "st2"], ["d", "M913.15,183.99V62.94c0-1.06,0-2.1-0.02-3.16c-0.02-1.59-0.7-2.56-2.44-2.49c-0.89,0.05-1.81,0-2.7,0H786.04\n      c-0.89,0-1.81,0.05-2.7,0c-1.3-0.05-1.93,0.53-1.91,1.86c0.05,1.06,0,2.1,0,3.16v60.96c0,20.79,0,41.55,0.02,62.33\n      c0,3.4,0.05,3.4,3.4,3.45h123.29C913.73,189.08,913.15,189.73,913.15,183.99z M894.7,167.62c-0.02,3.16-0.1,3.21-3.28,3.21\n      c-14.75,0.05-29.5,0.02-44.25,0.02c-14.58,0-29.19,0.02-43.79,0c-3.67-0.02-3.72-0.05-3.72-3.69c-0.02-29.36-0.02-58.71,0-88.04\n      c0-3.4,0.05-3.45,3.48-3.45c29.36-0.02,58.71-0.02,88.04,0c3.45,0,3.52,0.05,3.52,3.45C894.73,108.59,894.73,138.12,894.7,167.62z", 1, "st2"], ["d", "M996.31,119.43c-0.58,7.22-5.29,11.61-13.33,10.77c-3.11-0.31-7.22-5.12-6.98-7.77\n      c0.17-1.93-0.12-3.89-0.12-5.84c-0.02-29.65-0.02-59.32-0.02-88.96c0-0.89-0.1-1.83,0.02-2.7c0.36-2.51-0.89-2.95-3.11-2.95\n      c-12.77,0.1-25.59,0.05-38.39,0.05c-17.91,0-35.83,0-53.74-0.02c-1.79,0-3.6-0.12-5.38-0.31c-3.65-0.43-6.45-3.23-6.9-6.81\n      c-0.14-1.18-0.24-2.39-0.29-3.6c-0.12-4.51,0.99-7.82,8.43-9.27c1.67,0.05,3.28,0.14,4.92,0.14c24,0.02,47.99,0.02,71.99,0.02\n      c11.56-0.02,23.1-0.07,34.64-0.12c5.99,2.03,8.23,5.14,8.23,11.68c0.02,33.12,0,66.24,0,99.37\n      C996.34,115.23,996.48,117.33,996.31,119.43z", 1, "st2"], ["d", "M996.34,438.65c0,34.74,0,69.5,0.02,104.27c0,4.59-1.3,8.45-5.5,10.98c-0.94,0.56-1.71,0.99-2.78,0.99\n      c-1.67,0.02-3.31,0.12-4.97,0.12H881.14c-1.35,0-2.7-0.05-4.06-0.05c-5.53,0.14-8.98-4.1-9-9.37c-0.05-6.28,2.51-9.7,8.52-10.6\n      c0.58,0.05,1.18,0.14,1.79,0.14c31.29,0,62.6,0,93.86-0.02c1.16,0,2.44,0.39,3.45-0.56c0.07-1.64,0.22-3.28,0.22-4.95v-91.13\n      c0-3.11-0.05-6.28,2.44-8.62c2.99-2.87,6.59-3.91,10.57-2.61c4.37,1.4,6.69,4.71,7.41,9.17\n      C996.41,437.13,996.34,437.91,996.34,438.65z", 1, "st2"], ["d", "M125.89,554.34c-0.72,0.43-1.33,0.48-2.03,0.53c-1.67,0.07-3.31,0.14-4.97,0.14H16.39\n      c-1.64,0-3.31-0.05-4.95-0.22c-4.37-0.43-7.19-3.28-7.6-7.65c-0.17-1.64-0.22-3.28-0.22-4.95V439.67c0-1.35-0.05-2.7,0.07-4.06\n      c0.41-5.17,3.04-8.5,9.7-8.84c5.09-0.24,9.73,3.86,10.28,8.81c0.17,1.5,0.1,2.99,0.1,4.49v89.42c0,1.67,0.12,3.31,0.14,4.95\n      l0.02,0.02l99.68,0.6c5.26,0.92,7.63,4.76,8.09,9.39C132.14,548.74,129.61,552.05,125.89,554.34z", 1, "st2"], ["d", "M125.87,21.34c-0.72,0.46-1.35,0.46-2.05,0.48c-1.81,0.1-3.62,0.14-5.41,0.14C88.88,22,59.41,22,29.91,22\n      h-2.27c-4.18-0.02-3.86-0.22-3.86,3.94c0,30.71-0.05,61.42,0.05,92.12c0.02,4.73-1.57,8.4-5.67,10.79\n      c-3.74,2.2-9.97,1.13-12.65-2.1c-0.94-1.16-1.69-2.34-1.67-3.96c0.05-1.81-0.19-3.62-0.19-5.43C3.62,83.05,3.62,48.72,3.62,14.42\n      c0-1.21-0.02-2.41,0.05-3.62C4,5.19,6.2,2.9,12.09,1.98c1.64,0.05,3.28,0.14,4.92,0.14c24,0.02,47.99,0.02,71.99,0.02\n      c11.56-0.02,23.1-0.07,34.64-0.12c4.92,0.99,7.56,4.42,8.06,9C132.24,15.55,129.68,18.93,125.87,21.34z", 1, "st2"], ["d", "M109.33,490.95c0-0.05,0-0.05,0.02-0.1h0.07L109.33,490.95z", 1, "st2"], ["d", "M129.49,468.9c0.05,2.12-0.58,2.92-2.8,2.87c-4.66-0.14-9.32,0.05-13.98-0.1c-2.34-0.07-3.09,0.68-3.09,3.07\n      c0,5.36,0.46,10.74-0.27,16.1c-5.38,0.05-10.77,0.14-16.15,0.05c-2.22-0.05-2.87,0.72-2.8,2.85c0.12,4.66-0.05,9.34,0.07,14\n      c0.05,2.15-0.65,2.92-2.85,2.87c-4.66-0.12-9.32-0.12-13.98-0.02c-1.93,0.05-2.68-0.68-2.66-2.61c0.07-4.66-0.05-9.32,0.05-13.98\n      c0.07-2.27-0.56-3.21-3.04-3.09c-4.49,0.19-9,0-13.54,0.07c-1.83,0.05-2.68-0.43-2.68-2.51c0.07-11.27,0.12-22.57-0.02-33.85\n      c-0.02-2.44,1.13-2.63,3.04-2.61c9.92,0.05,19.87,0.02,29.77,0c1.21,0,2.41-0.05,3.62,0c1.26,0.02,1.98-0.43,1.96-1.81\n      c-0.02-5.12-0.02-10.24,0-15.35c0.02-1.76-1.11-1.83-2.41-1.81c-4.66,0-9.32,0.02-13.98-0.02c-3.26-0.02-3.28-0.05-3.33-3.04\n      c-0.05-4.51,0.12-9.03-0.05-13.54c-0.12-2.51,0.92-2.99,3.14-2.97c10.98,0.07,21.94,0.07,32.93-0.02c2.37-0.02,3.04,0.75,3.04,3.11\n      c-0.12,10.53-0.05,21.05-0.05,31.58c0.02,4.2-0.39,3.89,3.89,3.89c4.66,0.02,9.34,0.05,13.98-0.02c1.5-0.02,2.17,0.41,2.17,2.03\n      C129.42,459.01,129.37,463.96,129.49,468.9z", 1, "st2"], ["d", "M932.65,490.51C932.63,490.51,932.63,490.49,932.65,490.51c0.02-0.02,0.05-0.05,0.1-0.05v0.02c0,0,0,0-0.02,0\n      c-0.02,0.02-0.07,0.07-0.07,0.07V490.51z", 1, "st2"], ["d", "M952.06,469.12c0.05,1.93-0.6,2.68-2.58,2.63c-4.97-0.1-9.92-0.02-14.9-0.05c-1.28,0-2.44,0.02-2.34,1.81\n      c0.27,5.67-0.51,11.32,0.39,16.97c-0.84,0.22-1.69,0.34-2.53,0.41c-3.57,0.34-7.17-0.19-10.74,0.02c-1.06,0.07-2.1,0-3.16,0.02\n      c-3.36,0.05-3.38,0.07-3.4,3.52c-0.05,4.51-0.07,9.03,0,13.54c0.05,1.96-0.7,2.63-2.63,2.58c-4.66-0.1-9.32-0.12-13.98,0.02\n      c-2.34,0.07-2.78-0.97-2.7-2.95c0.1-4.51,0.05-9.03,0-13.54c-0.02-3.09-0.07-3.11-3.28-3.16c-4.37-0.05-8.72-0.12-13.08,0.05\n      c-2.27,0.1-2.73-0.77-2.7-2.87c0.1-11.13,0.1-22.26,0-33.36c-0.02-2.2,0.7-2.78,2.82-2.78c9.61,0.1,19.24,0.05,28.85,0.02\n      c1.21,0,2.44-0.1,3.62,0.02c2.03,0.19,2.99-0.39,2.9-2.68c-0.17-4.66-0.1-9.32-0.02-13.98c0.05-1.71-0.56-2.37-2.32-2.34\n      c-4.97,0.1-9.92,0.02-14.9,0.05c-1.45,0.02-2.73,0-2.61-2.05c0.29-5.67-0.51-11.39,0.41-17.04l38.17-0.05\n      c0.97,1.38,0.51,2.92,0.51,4.39c0.05,9.75,0.02,19.53,0.05,29.28c0,5.09-0.43,4.44,4.66,4.49c4.2,0.02,8.43,0.07,12.6-0.02\n      c2-0.05,3.02,0.36,2.95,2.68C951.92,459.49,951.97,464.29,952.06,469.12z", 1, "st2"], ["d", "M254.11,154.07c0.02,1.83-0.92,2.58-2.29,3.4c-5.58,3.28-11.83,4.18-18.01,5.26\n      c-6.71,1.16-13.64,1.11-20.21-0.12c-8.69-1.64-16.03-6.33-21.2-13.91c-6.66-9.75-7.87-20.47-6.54-31.96\n      c0.99-8.69,4.66-15.74,10.86-21.68c4.44-4.25,9.73-6.86,15.67-8.26c12.87-3.07,25.25-1.5,37.2,3.96c2.9,1.33,2.85,1.47,1.64,4.27\n      c-1.5,3.55-3.02,7.05-4.66,10.86c-8.33-4.8-16.73-6.54-25.69-5.48c-9.58,1.16-16.32,7.15-18.54,16.54c-1.52,6.45-1.33,12.87,1.4,19\n      c3.11,7,8.64,11.13,16.1,12.34c5.41,0.87,10.79,0.39,16.08-1.18c2.1-0.63,2.95-1.67,2.78-3.84c-0.14-2.1-0.1-4.22-0.05-6.3\n      c0.05-1.55-0.56-2.17-2.1-2.15c-3.62,0.07-7.22,0.05-10.84,0c-3.28-0.05-3.31-0.05-3.38-3.11c-0.05-3.02,0.05-6.04-0.02-9\n      c-0.05-1.67,0.46-2.51,2.27-2.51c9.03,0.05,18.06,0.05,27.09,0c1.69,0,2.37,0.6,2.37,2.34\n      C254.04,133.02,254.04,143.55,254.11,154.07z", 1, "st1"], ["d", "M148.05,116.08c-1.67-9.29-6.74-16.54-14.56-21.8c-7.15-4.8-15.16-6.95-23.63-7.31\n      c-7.36-0.34-14.75-0.22-22.11-0.22c-3.11,0-3.21,0.1-3.21,3.33c-0.02,11.44,0,22.89,0,34.33v21.24c0,4.51,0.1,9.03-0.05,13.54\n      c-0.07,2.34,0.8,3.16,3.11,3.04c3.31-0.14,6.61,0,9.95-0.05c6.93-0.05,13.83,0.22,20.71-1.13c10.28-1.98,18.59-6.93,24.41-15.72\n      C148.58,136.38,149.91,126.43,148.05,116.08z M131.78,132.08c-1.59,6.4-5.58,10.89-11.73,13.33c-5.84,2.32-12,2.37-18.18,2.29\n      c-2.03-0.02-1.98-1.38-1.98-2.78c0.02-6.9,0-13.81,0-20.71c0-6.47-0.02-12.94,0.02-19.39c0.02-3.52,0.07-3.57,3.38-3.6\n      c5.12-0.05,10.19,0.1,15.11,1.79c7.82,2.66,12.43,7.92,13.88,16.1C133.06,123.54,132.84,127.86,131.78,132.08z", 1, "st1"], ["d", "M422.49,159.68c-5.77-15.45-11.56-30.9-17.29-46.35c-2.95-7.94-5.82-15.91-8.72-23.88\n      c-0.65-1.83-1.64-2.85-3.89-2.75c-4.37,0.22-8.74,0.05-13.11,0.1c-1.35,0.02-2.1,0.36-2.7,2.1c-3.28,9.27-7,18.32-10.45,27.55\n      c-4.68,12.55-9.25,25.16-13.86,37.73c-0.89,2.44-2.1,4.83-1.76,8.06c4.66,0,9-0.02,13.37,0.02c1.57,0.02,2.34-0.56,2.82-2.17\n      c1.33-4.25,2.97-8.4,4.44-12.6c0.56-1.55,1.3-2.51,3.19-2.49c8.14,0.07,16.27,0.05,24.38,0.02c1.33,0,2.05,0.31,2.51,1.86\n      c1.3,4.27,3.14,8.38,4.39,12.65c0.58,2.05,1.67,2.68,3.45,2.7c4.49,0.05,8.98,0.02,13.23,0.02\n      C423.1,161.05,422.76,160.38,422.49,159.68z M377.69,130.13c2.87-8.06,5.7-16.01,8.55-23.95c0.31,0.02,0.65,0.02,0.99,0.05\n      c2.8,7.85,5.62,15.69,8.57,23.9L377.69,130.13L377.69,130.13z", 1, "st1"], ["d", "M357.89,89.91c0.05,2.68,0.05,5.41,0,8.11c-0.05,3.11-0.1,3.16-3.38,3.19c-5.58,0.05-11.15,0.02-16.71,0.02\n      c-4.9,0-4.3-0.02-4.3,4.49v51.47c0,1.06-0.05,2.1,0,3.16c0.05,1.35-0.65,1.86-1.93,1.86c-3.77-0.02-7.51-0.05-11.27,0.02\n      c-1.86,0.05-2.34-0.89-2.22-2.51c0.05-1.06,0-2.1,0-3.16V106.9c0-1.06-0.07-2.12,0.02-3.16c0.19-2.05-0.84-2.56-2.68-2.53\n      c-4.95,0.07-9.92,0.02-14.9,0.02c-6.83,0-6.88,0-6.78-6.98c0.05-2.34-1.09-5.31,0.6-6.93c1.67-1.59,4.59-0.53,6.95-0.56\n      c8.26-0.07,16.54-0.05,24.82-0.05c9.46,0,18.95-0.02,28.44,0.02C357.82,86.74,357.82,86.82,357.89,89.91z", 1, "st1"], ["d", "M741.67,91.89c0,7.05,0.02,14.12-0.02,21.2c0,3.11-0.05,3.19-3.28,3.19c-14.12,0.05-28.25,0.05-42.37,0\n      c-3.28,0-3.36-0.05-3.38-3.09c-0.05-6.3,0.1-12.6-0.07-18.93c-0.05-2.46,0.87-3.04,3.11-2.97c6.16,0.12,12.31,0.05,18.47,0.05\n      c3.45-0.02,3.52-0.05,3.55-3.45c0.05-5.84,0.1-11.73-0.02-17.58c-0.05-2.03,0.34-2.95,2.68-2.87c6.01,0.17,12,0.02,18.03,0.07\n      c3.21,0.02,3.26,0.07,3.28,3.21C741.69,77.74,741.67,84.84,741.67,91.89z", 1, "st2"], ["d", "M479.73,151.15c0.05,2.56,0.05,5.12,0,7.68c-0.05,3.28-0.07,3.36-3.6,3.38c-13.98,0.02-27.98,0.02-41.93,0\n      c-3.67,0-3.72-0.05-3.72-3.72c-0.05-11.42-0.02-22.86-0.02-34.28c0-10.69,0-21.37,0.02-32.04c0-6.08-0.6-5.38,5.65-5.43h4.95\n      c5.31,0.02,5-0.43,5,4.76v17.6c0,11.73-0.02,23.47,0.02,35.17c0,3.38,0.05,3.43,3.48,3.45c8.88,0.05,17.74-0.02,26.63,0.02\n      C479.66,147.75,479.66,147.8,479.73,151.15z", 1, "st1"], ["d", "M285.59,91.74v32.93c0,11.27,0,22.55-0.02,33.82c0,3.62-0.05,3.65-3.72,3.69c-3.16,0.05-6.33-0.05-9.49,0\n      c-1.47,0.02-2.27-0.48-2.17-2.08c0.05-0.89,0-1.81,0-2.7V91.57c0-1.06,0.02-2.1,0.02-3.16c0-1.09,0.6-1.64,1.67-1.64\n      c4.06-0.02,8.14-0.02,12.17,0.02c1.16,0,1.5,0.77,1.5,1.81C285.56,89.64,285.59,90.7,285.59,91.74z", 1, "st1"], ["d", "M174.88,91.77v65.35c0,0.89-0.05,1.81,0,2.7c0.12,1.71-0.58,2.44-2.34,2.39c-3.31-0.07-6.61-0.12-9.92,0.02\n      c-2.27,0.12-3.21-0.65-3.11-3.04c0.12-4.2,0.05-8.43,0.05-12.6V124.5c0-11.42-0.02-22.84,0-34.26c0.02-3.43,0.07-3.45,3.48-3.5\n      c3.16-0.05,6.33,0.05,9.46-0.02c1.69-0.05,2.51,0.6,2.39,2.34C174.8,89.95,174.88,90.87,174.88,91.77z", 1, "st1"], ["d", "M692.69,89.21c0,1.47-0.56,2.17-2.12,2.17c-7.19-0.05-14.39-0.02-21.92-0.02c0-7.89,0-15.52-0.02-23.18\n      c0-1.3,0.46-1.93,1.83-1.93c7.31,0.02,14.65,0,22.21,0C692.66,74.21,692.66,81.7,692.69,89.21z", 1, "st2"], ["d", "M668.67,114.19c0.02,1.55-0.63,2.1-2.12,2.1c-6.59-0.05-13.21-0.05-19.8,0c-1.59,0.02-2-0.77-2-2.22\n      c0.05-6.88,0.05-13.81,0-20.71c-0.02-1.59,0.65-2.05,2.15-2.05c6.61,0.05,13.21,0.05,19.8,0c1.67-0.02,2,0.75,2,2.17\n      c-0.05,3.45-0.02,6.9-0.02,10.36S668.59,110.74,668.67,114.19z", 1, "st2"], ["points", "109.43,490.85 109.43,490.95 109.33,490.95 \t", 1, "st2"], ["d", "M129.01,508.18c0.05,2.12-1.11,2.41-2.85,2.39c-4.51-0.07-9.03-0.12-13.54,0.02\n      c-2.32,0.07-3.16-0.65-3.11-3.04c0.07-3.52,0.05-7.03-0.02-10.55c-0.02-2-0.05-4.06-0.07-6.06h0.02\n      c5.53-0.02,11.06,0.05,16.59-0.07c2.17-0.05,2.99,0.8,2.97,2.87C128.96,498.55,128.93,503.35,129.01,508.18z", 1, "st2"], ["d", "M932.75,490.49c0,0.02-0.02,0.05-0.02,0.07h-0.07C932.65,490.56,932.7,490.51,932.75,490.49L932.75,490.49z", 1, "st2"], ["d", "M951.41,507.8c0.07,2.22-0.75,2.87-2.87,2.8c-4.66-0.12-9.29-0.05-13.95-0.05c-1.04,0-2.41,0.17-2.37-1.33\n      c0.17-6.23-0.82-12.46,0.51-18.66c5.19,0.72,10.38,0.27,15.6,0.29c2.29,0,3.16,0.6,3.09,3.02\n      C951.24,498.48,951.27,503.16,951.41,507.8z", 1, "st2"], ["d", "M41.32,534.55c-5.79-0.02-11.59-0.05-17.38-0.05l-0.02-0.02C29.74,534.5,35.53,534.52,41.32,534.55z", 1, "st1"], ["d", "M595.66,115.64l-0.12,0.12v-0.07C595.57,115.67,595.61,115.67,595.66,115.64z", 1, "st0"], ["d", "M875.8,149.03c0.02,2.51-1.06,2.92-3.26,2.9c-16.97-0.05-33.97-0.07-50.94,0.02c-2.37,0-3.11-0.75-3.07-3.09\n      c0.12-8.72,0.05-17.43,0.05-26.15c0-8.28-0.02-16.54,0.02-24.82c0-3.23,0.05-3.31,3.16-3.33c17-0.02,33.97,0.05,50.96-0.05\n      c2.39,0,3.11,0.72,3.09,3.11C875.73,114.75,875.7,131.91,875.8,149.03z", 1, "st2"], ["d", "M392.61,440.88c-2.46,9.37-4.95,18.76-7.56,28.66c-0.36-1.01-0.56-1.5-0.7-1.98\n      c-2.12-8.23-4.22-16.44-6.42-24.65c-0.22-0.77-0.8-2.05-1.23-2.08c-3.72-0.17-7.46-0.1-11.15-0.1v37.64h7.53v-25.4\n      c0.14-0.02,0.29-0.02,0.43-0.05c2.32,8.5,4.64,17,6.98,25.66c2.46,0,4.78-0.1,7.1,0.02c1.47,0.07,2.08-0.41,2.44-1.88\n      c1.83-7.15,3.81-14.22,5.72-21.32c0.22-0.82,0.51-1.64,0.77-2.44c0.14,0.02,0.31,0.05,0.46,0.07v25.35h7.53V440.9h-11.9V440.88z\n       M648.07,472.84c4.2-4.9,5.53-10.65,4.42-16.87c-2.03-11.37-12.55-17.96-24.21-15.38c-10.48,2.34-16.87,13.21-14.15,24.07\n      c2.87,11.32,14.75,17.41,26.17,13.28c1.57-0.58,2.44-0.29,3.4,0.89c1.5,1.76,3.16,3.38,4.61,4.95c1.47-1.3,2.78-2.49,4.22-3.77\n      c-1.93-2.03-3.72-3.94-5.6-5.89C647.4,473.64,647.74,473.23,648.07,472.84z M641.48,468.35c-1.38-1.57-2.73-3.14-4.2-4.85\n      c-1.57,1.47-2.82,2.66-4.22,3.98c1.16,1.3,2.2,2.51,3.31,3.77c-5.12,1.83-11.01-0.7-13.42-5.6c-2.82-5.75-1.09-13.18,3.81-16.37\n      c4.8-3.11,11.66-2.17,15.21,2.05C645.85,455.92,645.73,463.76,641.48,468.35z M466.94,440.83v27.14c-0.72-0.56-1.06-1.21-1.33-1.83\n      c-3.45-7.85-6.88-15.69-10.36-23.51c-0.34-0.72-1.06-1.76-1.67-1.76c-3.28-0.19-6.59-0.1-9.92-0.1v37.66h7.56v-26.7\n      c0.77,0.72,1.13,1.45,1.45,2.2c3.36,7.65,6.69,15.28,10.07,22.91c0.29,0.68,0.97,1.67,1.47,1.67c3.36,0.14,6.71,0.07,10.04,0.07\n      v-37.73L466.94,440.83L466.94,440.83z M558.97,458.26c2.58-2.56,4.06-5.29,3.65-8.69c-0.56-4.73-4.42-8.11-10.21-8.5\n      c-5.24-0.34-10.53-0.22-15.76-0.29c-0.29,0-0.56,0.17-0.77,0.24v37.47c5.89,0,11.61,0.24,17.31-0.05\n      c6.18-0.34,10.43-4.06,11.25-9.27C565.22,464.37,563.19,460.84,558.97,458.26z M543.47,447.88c2.82,0.12,5.5,0.12,8.18,0.46\n      c1.76,0.22,3.04,1.33,3.09,3.31c0.05,2.1-1.16,3.31-3.07,3.55c-2.66,0.31-5.36,0.29-8.21,0.43L543.47,447.88L543.47,447.88z\n       M553.63,470.88c-3.31,0.41-6.66,0.46-10.14,0.68v-8.91c3.4,0.17,6.61,0.19,9.8,0.56c1.96,0.22,3.26,1.4,3.33,3.6\n      C556.72,469,555.8,470.62,553.63,470.88z M758.11,440.08c-11.39-0.05-19.87,8.26-19.87,19.51c-0.02,11.18,8.33,19.53,19.55,19.55\n      c11.32,0.05,19.65-8.16,19.7-19.36C777.54,448.5,769.31,440.15,758.11,440.08z M757.89,471.75c-6.86,0-11.61-5.05-11.59-12.22\n      c0.02-7.05,4.83-12.09,11.49-12.14c6.81-0.05,11.59,4.95,11.61,12.17C769.46,466.83,764.77,471.78,757.89,471.75z M234.58,457.65\n      h-15.6v7.22H227c0,1.69,0.05,3.19-0.05,4.66c-0.02,0.41-0.39,0.99-0.75,1.21c-4.51,2.68-12.84,0.92-15.72-3.52\n      c-3.02-4.68-3.11-9.73-0.41-14.56c2.61-4.66,7.15-5.77,12.07-5.12c3.02,0.39,5.91,1.47,9.05,2.27c0.82-1.83,1.71-3.98,2.61-6.04\n      c-2.41-1.86-5.17-2.8-9.97-3.52c-12.6-1.83-22.02,5-23.54,17.14c-1.28,10.31,5.12,19.46,15.14,21.32\n      c5.02,0.92,10.04,0.27,14.92-1.23c4.39-1.33,4.39-1.38,4.39-5.89v-11.73C234.72,459.18,234.63,458.45,234.58,457.65z\n       M170.29,442.61c-6.71-2.61-13.71-1.76-20.76-1.86v38.07c5.67-0.29,11.23-0.1,16.59-0.89c8.88-1.35,14.65-7.89,15.4-16.44\n      C182.26,452.66,178.16,445.7,170.29,442.61z M172.1,465.69c-3.09,6.01-9.03,5.6-14.92,5.67v-23.3c5.12-0.17,10.31-0.36,13.88,4.03\n      C174.46,456.21,174.42,461.18,172.1,465.69z M804.49,442.95c-6.93-3.04-14.24-2.1-21.58-2.2v38.07c5.7-0.29,11.23-0.1,16.61-0.89\n      c8.69-1.33,14.32-7.53,15.33-16.01C815.86,453.48,811.92,446.21,804.49,442.95z M805.09,466.37c-3.31,5.34-8.96,4.92-14.48,5\n      v-23.39c5.6,0.07,11.2-0.22,14.53,5.09C807.84,457.34,807.75,462.14,805.09,466.37z M679.82,463.13c0.36-0.27,0.53-0.39,0.72-0.48\n      c5-2.87,7.05-7.15,6.06-12.63c-0.82-4.59-4.66-8.47-9.87-8.86c-5.89-0.43-11.83-0.1-17.99-0.1v37.37h7.56V464.1\n      c0.89,0,1.5,0.1,2.1-0.02c2.49-0.41,3.96,0.58,5.17,2.8c1.93,3.57,4.2,6.95,6.37,10.38c0.36,0.56,1.06,1.21,1.64,1.23\n      c2.44,0.12,4.9,0.05,7.8,0.05C686.02,473.18,682.91,468.18,679.82,463.13z M675.47,456.86c-2.95,0.39-5.94,0.41-9.13,0.63v-9.68\n      c3.14,0.22,6.2,0.22,9.2,0.7c2.29,0.34,3.33,1.96,3.26,4.18C678.73,454.88,677.69,456.54,675.47,456.86z M514.52,445.61v-4.76\n      h-7.65v2.75c0,6.54,0.05,13.11-0.05,19.63c-0.05,4.73-1.83,7.53-5.5,8.23c-2,0.39-4.22,0.39-6.25,0c-3.52-0.65-5.31-3.23-5.38-7.56\n      c-0.12-6.86-0.05-13.69-0.07-20.54c-0.02-0.82-0.07-1.59-0.12-2.49h-7.31c-0.12,0.34-0.22,0.56-0.22,0.75\n      c0,8.14-0.19,16.27,0.12,24.38c0.27,7.07,5.19,12.02,12.24,12.89c1.86,0.22,3.77,0.27,5.62,0.17c9.49-0.56,14.51-5.84,14.58-15.38\n      C514.57,457.65,514.52,451.62,514.52,445.61z M318.69,476.12c-3.6-9.73-7.19-19.46-10.82-29.19c-0.77-2.03-1.11-4.78-2.61-5.82\n      c-1.5-1.04-4.22-0.22-6.37-0.43c-1.74-0.17-2.34,0.65-2.87,2.1c-3.21,8.84-6.47,17.65-9.73,26.43c-1.11,3.02-2.25,6.04-3.45,9.34\n      c2.56,0,4.83,0.1,7.05-0.05c0.53-0.05,1.23-0.75,1.45-1.33c0.77-1.79,1.47-3.62,2-5.5c0.39-1.47,1.21-1.81,2.61-1.76\n      c3.55,0.07,7.07,0.07,10.62,0c1.33-0.05,2.05,0.34,2.44,1.67c0.58,1.93,1.3,3.84,2.08,5.72c0.22,0.51,0.82,1.16,1.3,1.21\n      c2.27,0.12,4.56,0.05,7.1,0.05C319.14,477.5,318.93,476.8,318.69,476.12z M296.62,462.56c1.5-4.2,2.92-8.14,4.56-12.75\n      c1.64,4.56,3.09,8.55,4.59,12.75H296.62z M420.66,471.39v-8.64h14.97v-7.34h-15.04v-7.48h16.56v-7.03h-24.14v37.52h24.31v-7.03\n      H420.66z M828.6,471.39v-8.64h14.97v-7.34h-15.04v-7.48h16.56v-7.03h-24.14v37.52h24.31v-7.03H828.6z M715.67,468.04\n      c-3.43-4.06-4.01-11.52-0.65-15.84c5.58-7.15,12.43-5.21,19.39-2c0.97-2.2,1.88-4.32,2.87-6.54c-9.34-5.94-22.09-4.39-28.25,3.21\n      c-6.11,7.6-5.53,19.92,1.21,26.8c6.35,6.47,19.87,7.39,26.99,1.79c-0.97-2.15-1.91-4.32-2.87-6.47\n      C725.66,472.98,719.56,472.62,715.67,468.04z M592.52,440.68c-1.81-0.12-2.82,0.46-3.65,2.15c-2.25,4.54-4.73,8.98-7.24,13.71\n      c-2.61-4.97-5.05-9.61-7.56-14.22c-0.34-0.65-1.06-1.5-1.67-1.52c-2.51-0.17-5.05-0.07-7.94-0.07c0.56,1.06,0.89,1.79,1.3,2.49\n      c3.62,6.4,7.31,12.77,10.86,19.24c0.68,1.23,1.06,2.78,1.13,4.2c0.14,3.89,0.05,7.8,0.05,11.81h7.68c0-4.1-0.07-7.99,0.05-11.9\n      c0.05-1.28,0.36-2.68,0.99-3.81c3.62-6.59,7.36-13.11,11.06-19.63c0.39-0.68,0.68-1.38,1.18-2.41\n      C596.41,440.71,594.45,440.83,592.52,440.68z M254.37,440.88v7.07h12.19v30.47h7.6V447.9h12.07v-7.03H254.37z M330.59,471.34\n      v-30.49h-7.51v37.56h24.21v-7.05h-16.71V471.34z M187.07,440.88v37.49h7.41v-37.49H187.07z M242.66,440.92v37.56h7.36v-37.56\n      H242.66z", 1, "st3"], ["d", "M392.61,440.88c4.03,0,7.92,0,11.9,0c0,12.53,0,24.91,0,37.49c-2.44,0-4.88,0-7.53,0c0-8.47,0-16.92,0-25.35\n      c-0.17-0.02-0.31-0.05-0.48-0.07c-0.27,0.82-0.56,1.62-0.77,2.44c-1.93,7.1-3.89,14.2-5.72,21.32c-0.39,1.45-0.99,1.96-2.44,1.88\n      c-2.32-0.1-4.64-0.02-7.1-0.02c-2.37-8.64-4.68-17.14-7-25.66c-0.14,0.02-0.29,0.02-0.43,0.05c0,8.43,0,16.87,0,25.45\n      c-2.61,0-4.97,0-7.53,0c0-12.43,0-24.89,0-37.66c3.72,0,7.44-0.07,11.15,0.1c0.46,0.02,1.04,1.3,1.23,2.08\n      c2.17,8.21,4.27,16.42,6.42,24.65c0.12,0.48,0.34,0.97,0.68,1.98C387.66,459.61,390.15,450.24,392.61,440.88z", 1, "st3"], ["d", "M648.07,472.84c4.2-4.9,5.53-10.65,4.42-16.87c-2.03-11.37-12.55-17.96-24.21-15.38\n      c-10.48,2.34-16.87,13.21-14.15,24.07c2.87,11.32,14.75,17.41,26.17,13.28c1.57-0.58,2.44-0.29,3.4,0.89\n      c1.5,1.76,3.16,3.38,4.61,4.95c1.47-1.3,2.78-2.49,4.22-3.77c-1.93-2.03-3.72-3.94-5.6-5.89\n      C647.4,473.64,647.74,473.23,648.07,472.84z M641.48,468.35c-1.38-1.57-2.73-3.14-4.2-4.85c-1.57,1.47-2.82,2.66-4.22,3.98\n      c1.16,1.3,2.2,2.51,3.31,3.77c-5.12,1.83-11.01-0.7-13.42-5.6c-2.82-5.75-1.09-13.18,3.81-16.37c4.8-3.11,11.66-2.17,15.21,2.05\n      C645.85,455.92,645.73,463.76,641.48,468.35z", 1, "st3"], ["d", "M466.94,440.83c2.66,0,4.88,0,7.31,0c0,12.53,0,24.96,0,37.73c-3.33,0-6.69,0.07-10.04-0.07\n      c-0.53-0.02-1.18-1.01-1.47-1.69c-3.38-7.63-6.71-15.26-10.07-22.91c-0.34-0.75-0.68-1.5-1.45-2.2c0,8.84,0,17.7,0,26.7\n      c-2.7,0-5.05,0-7.56,0c0-12.48,0-24.91,0-37.66c3.33,0,6.64-0.1,9.92,0.07c0.58,0.02,1.33,1.06,1.64,1.76\n      c3.5,7.82,6.9,15.67,10.36,23.51c0.29,0.65,0.6,1.28,1.33,1.86C466.94,458.98,466.94,450,466.94,440.83z", 1, "st3"], ["d", "M558.97,458.26c2.58-2.56,4.06-5.29,3.65-8.69c-0.56-4.73-4.42-8.11-10.21-8.5\n      c-5.24-0.34-10.53-0.22-15.76-0.29c-0.29,0-0.56,0.17-0.77,0.24v37.47c5.89,0,11.61,0.24,17.31-0.05\n      c6.18-0.34,10.43-4.06,11.25-9.27C565.22,464.37,563.19,460.84,558.97,458.26z M543.47,447.88c2.82,0.12,5.5,0.12,8.18,0.46\n      c1.76,0.22,3.04,1.33,3.09,3.31c0.05,2.1-1.16,3.31-3.07,3.55c-2.66,0.31-5.36,0.29-8.21,0.43L543.47,447.88L543.47,447.88z\n       M553.63,470.88c-3.31,0.41-6.66,0.46-10.14,0.68v-8.91c3.4,0.17,6.61,0.19,9.8,0.56c1.96,0.22,3.26,1.4,3.33,3.6\n      C556.72,469,555.8,470.62,553.63,470.88z", 1, "st3"], ["d", "M758.11,440.08c-11.39-0.05-19.87,8.26-19.87,19.51c-0.02,11.18,8.33,19.53,19.55,19.55\n      c11.32,0.05,19.65-8.16,19.7-19.36C777.54,448.5,769.31,440.15,758.11,440.08z M757.89,471.75c-6.86,0-11.61-5.05-11.59-12.22\n      c0.02-7.05,4.83-12.09,11.49-12.14c6.81-0.05,11.59,4.95,11.61,12.17C769.46,466.83,764.77,471.78,757.89,471.75z", 1, "st3"], ["d", "M233.8,443.8c-0.89,2.08-1.81,4.2-2.61,6.06c-3.14-0.82-6.06-1.88-9.05-2.27c-4.9-0.65-9.46,0.43-12.07,5.12\n      c-2.7,4.83-2.58,9.85,0.43,14.53c2.87,4.47,11.18,6.23,15.72,3.52c0.36-0.22,0.72-0.77,0.75-1.21c0.1-1.47,0.02-2.97,0.02-4.66\n      c-2.78,0-5.31,0-8.02,0c0-2.49,0-4.76,0-7.24c5.14,0,10.28,0,15.6,0c0.05,0.8,0.12,1.52,0.12,2.25c0.02,3.91,0,7.82,0,11.73\n      c0,4.51,0,4.54-4.37,5.89c-4.88,1.5-9.87,2.17-14.92,1.23c-10.02-1.86-16.42-10.98-15.11-21.32c1.52-12.14,10.91-19,23.51-17.14\n      C228.64,441,231.39,441.96,233.8,443.8z", 1, "st3"], ["d", "M170.29,442.61c-6.71-2.61-13.71-1.76-20.76-1.86v38.07c5.67-0.29,11.23-0.1,16.59-0.89\n      c8.88-1.35,14.65-7.89,15.4-16.44C182.26,452.66,178.16,445.7,170.29,442.61z M172.1,465.69c-3.09,6.01-9.03,5.6-14.92,5.67v-23.3\n      c5.12-0.17,10.31-0.36,13.88,4.03C174.46,456.21,174.42,461.18,172.1,465.69z", 1, "st3"], ["d", "M804.49,442.95c-6.93-3.04-14.24-2.1-21.58-2.2v38.07c5.7-0.29,11.23-0.1,16.61-0.89\n      c8.69-1.33,14.32-7.53,15.33-16.01C815.86,453.48,811.92,446.21,804.49,442.95z M805.09,466.37c-3.31,5.34-8.96,4.92-14.48,5\n      v-23.39c5.6,0.07,11.2-0.22,14.53,5.09C807.84,457.34,807.75,462.14,805.09,466.37z", 1, "st3"], ["d", "M679.82,463.13c0.36-0.27,0.53-0.39,0.72-0.48c5-2.87,7.05-7.15,6.06-12.63c-0.82-4.59-4.66-8.47-9.87-8.86\n      c-5.89-0.43-11.83-0.1-17.99-0.1v37.37h7.56V464.1c0.89,0,1.5,0.1,2.1-0.02c2.49-0.41,3.96,0.58,5.17,2.8\n      c1.93,3.57,4.2,6.95,6.37,10.38c0.36,0.56,1.06,1.21,1.64,1.23c2.44,0.12,4.9,0.05,7.8,0.05\n      C686.02,473.18,682.91,468.18,679.82,463.13z M675.47,456.86c-2.95,0.39-5.94,0.41-9.13,0.63v-9.68c3.14,0.22,6.2,0.22,9.2,0.7\n      c2.29,0.34,3.33,1.96,3.26,4.18C678.73,454.88,677.69,456.54,675.47,456.86z", 1, "st3"], ["d", "M506.87,440.83c2.63,0,5,0,7.68,0c0,1.67,0,3.21,0,4.76c0,6.01,0.05,12.05-0.02,18.06\n      c-0.07,9.54-5.09,14.85-14.58,15.38c-1.86,0.1-3.77,0.05-5.62-0.17c-7.05-0.87-11.97-5.79-12.24-12.89\n      c-0.29-8.11-0.12-16.25-0.12-24.38c0-0.22,0.12-0.41,0.22-0.75c2.37,0,4.73,0,7.31,0c0.05,0.89,0.1,1.69,0.1,2.49\n      c0.02,6.86-0.05,13.71,0.07,20.54c0.07,4.32,1.88,6.9,5.38,7.56c2.03,0.39,4.22,0.39,6.25,0c3.67-0.7,5.46-3.48,5.5-8.23\n      c0.1-6.54,0.02-13.11,0.02-19.65C506.87,442.76,506.87,441.94,506.87,440.83z", 1, "st3"], ["d", "M318.69,476.12c-3.6-9.73-7.19-19.46-10.82-29.19c-0.77-2.03-1.11-4.78-2.61-5.82\n      c-1.5-1.04-4.22-0.22-6.37-0.43c-1.74-0.17-2.34,0.65-2.87,2.1c-3.21,8.84-6.47,17.65-9.73,26.43c-1.11,3.02-2.25,6.04-3.45,9.34\n      c2.56,0,4.83,0.1,7.05-0.05c0.53-0.05,1.23-0.75,1.45-1.33c0.77-1.79,1.47-3.62,2-5.5c0.39-1.47,1.21-1.81,2.61-1.76\n      c3.55,0.07,7.07,0.07,10.62,0c1.33-0.05,2.05,0.34,2.44,1.67c0.58,1.93,1.3,3.84,2.08,5.72c0.22,0.51,0.82,1.16,1.3,1.21\n      c2.27,0.12,4.56,0.05,7.1,0.05C319.14,477.5,318.93,476.8,318.69,476.12z M296.62,462.56c1.5-4.2,2.92-8.14,4.56-12.75\n      c1.64,4.56,3.09,8.55,4.59,12.75H296.62z", 1, "st3"], ["d", "M420.66,471.39c5.55,0,11.01,0,16.63,0c0,2.44,0,4.66,0,7.03c-8.09,0-16.1,0-24.31,0c0-12.43,0-24.89,0-37.52\n      c7.99,0,15.98,0,24.17,0c0,2.22,0,4.44,0,7c-5.48,0-10.98,0-16.59,0c0,2.66,0,4.97,0,7.51c5,0,9.92,0,15.06,0c0,2.49,0,4.78,0,7.34\n      c-4.95,0-9.85,0-14.97,0C420.66,465.67,420.66,468.32,420.66,471.39z", 1, "st3"], ["d", "M828.6,471.39c5.55,0,11.01,0,16.63,0c0,2.44,0,4.66,0,7.03c-8.09,0-16.1,0-24.31,0c0-12.43,0-24.89,0-37.52\n      c7.99,0,15.98,0,24.17,0c0,2.22,0,4.44,0,7c-5.48,0-10.98,0-16.59,0c0,2.66,0,4.97,0,7.51c5,0,9.92,0,15.06,0c0,2.49,0,4.78,0,7.34\n      c-4.95,0-9.85,0-14.97,0C828.6,465.67,828.6,468.32,828.6,471.39z", 1, "st3"], ["d", "M737.25,443.68c-0.97,2.2-1.91,4.32-2.85,6.52c-6.93-3.21-13.81-5.17-19.39,2\n      c-3.36,4.32-2.78,11.81,0.65,15.84c3.89,4.59,9.99,4.95,18.69,0.94c0.97,2.17,1.91,4.32,2.85,6.47\n      c-7.12,5.62-20.64,4.68-26.99-1.79c-6.74-6.88-7.29-19.17-1.21-26.77C715.16,439.26,727.91,437.74,737.25,443.68z", 1, "st3"], ["d", "M585.5,478.44c-2.7,0-5.09,0-7.7,0c0-4.01,0.1-7.92-0.05-11.81c-0.05-1.42-0.43-2.97-1.13-4.2\n      c-3.55-6.45-7.24-12.82-10.86-19.24c-0.39-0.7-0.72-1.4-1.28-2.49c2.9,0,5.43-0.1,7.94,0.07c0.6,0.05,1.3,0.89,1.64,1.52\n      c2.51,4.61,4.95,9.27,7.58,14.24c2.53-4.76,5-9.2,7.24-13.74c0.82-1.69,1.83-2.27,3.65-2.15c1.93,0.14,3.89,0.02,6.28,0.02\n      c-0.51,1.01-0.82,1.71-1.21,2.39c-3.69,6.54-7.44,13.06-11.06,19.63c-0.6,1.11-0.94,2.53-0.99,3.81\n      C585.43,470.45,585.5,474.36,585.5,478.44z", 1, "st3"], ["d", "M266.56,447.95c-4.3,0-8.18,0-12.19,0c0-2.46,0-4.68,0-7.07c10.6,0,21.15,0,31.84,0c0,2.27,0,4.49,0,7.03\n      c-3.96,0-7.87,0-12.05,0c0,10.33,0,20.38,0,30.54c-2.61,0-4.97,0-7.6,0C266.56,468.42,266.56,458.38,266.56,447.95z", 1, "st3"], ["d", "M323.06,440.85c2.56,0,4.92,0,7.53,0c0,10.16,0,20.21,0,30.49c5.67,0,11.11,0,16.68,0c0,2.46,0,4.68,0,7.05\n      c-8.04,0-16.05,0-24.21,0C323.06,465.96,323.06,453.5,323.06,440.85z", 1, "st3"], ["d", "M187.07,440.88c2.61,0,4.97,0,7.44,0c0,12.53,0,24.91,0,37.49c-2.44,0-4.85,0-7.44,0\n      C187.07,465.91,187.07,453.48,187.07,440.88z", 1, "st3"], ["d", "M250.03,478.49c-2.56,0-4.88,0-7.36,0c0-12.51,0-24.94,0-37.56c2.39,0,4.8,0,7.36,0\n      C250.03,453.41,250.03,465.84,250.03,478.49z", 1, "st3"]],
    template: function LogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15)(16, "path", 16)(17, "path", 17)(18, "path", 18)(19, "path", 19)(20, "path", 20)(21, "path", 21)(22, "path", 22)(23, "path", 23)(24, "path", 24)(25, "path", 25)(26, "path", 26)(27, "path", 27)(28, "polygon", 28)(29, "path", 29)(30, "path", 30)(31, "path", 31)(32, "path", 32)(33, "path", 33)(34, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 35)(37, "path", 36)(38, "path", 37)(39, "path", 38)(40, "path", 39)(41, "path", 40)(42, "path", 41)(43, "path", 42)(44, "path", 43)(45, "path", 44)(46, "path", 45)(47, "path", 46)(48, "path", 47)(49, "path", 48)(50, "path", 49)(51, "path", 50)(52, "path", 51)(53, "path", 52)(54, "path", 53)(55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3464:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/menu-item-hoverable/menu-item-hoverable.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemHoverableComponent": () => (/* binding */ MenuItemHoverableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);




function MenuItemHoverableComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.menuItem.name);
  }
}
function MenuItemHoverableComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.menuItem.image.medium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.menuItem.name);
  }
}
function MenuItemHoverableComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.menuItem.image.medium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r2.menuItem.name);
  }
}
function MenuItemHoverableComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class MenuItemHoverableComponent {
  constructor(appService) {
    this.appService = appService;
    this.onlyImage = false;
  }
  ngOnInit() {}
  onCart() {
    if (this.appService.Data.cartList.find(item => item.id == this.menuItem.id)) {
      return true;
    }
    return false;
  }
  onFavorites() {
    if (this.appService.Data.favorites.find(item => item.id == this.menuItem.id)) {
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function MenuItemHoverableComponent_Factory(t) {
    return new (t || MenuItemHoverableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuItemHoverableComponent,
    selectors: [["app-menu-item-hoverable"]],
    inputs: {
      menuItem: "menuItem",
      onlyImage: "onlyImage"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "hoverable-image"], ["class", "title", 4, "ngIf"], [3, "src", "alt", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "class", "bottom-section", 4, "ngIf"], [1, "title"], [3, "src", "alt"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "bottom-section"]],
    template: function MenuItemHoverableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuItemHoverableComponent_h1_1_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuItemHoverableComponent_img_2_Template, 1, 2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuItemHoverableComponent_a_3_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuItemHoverableComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.onlyImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.onlyImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlyImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.onlyImage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective],
    styles: [".hoverable-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.hoverable-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transition: 0.2s;\n}\n.hoverable-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.7);\n  text-align: center;\n  width: 100%;\n  top: -120px;\n  opacity: 0;\n  transition: 0.2s;\n  font-family: \"Truculenta\", serif;\n}\n.hoverable-image[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  width: 100%;\n  padding: 8px;\n  bottom: -120px;\n  opacity: 0;\n  transition: 0.2s;\n}\n.hoverable-image[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hoverable-image[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%] {\n  color: #828282;\n}\n.hoverable-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.3) rotate(20deg);\n}\n.hoverable-image[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  top: 0;\n  opacity: 1;\n}\n.hoverable-image[_ngcontent-%COMP%]:hover   .bottom-section[_ngcontent-%COMP%] {\n  bottom: 0;\n  opacity: 1;\n}\n\n@media screen and (max-width: 959px) {\n  .hoverable-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .hoverable-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL21lbnUtaXRlbS1ob3ZlcmFibGUvbWVudS1pdGVtLWhvdmVyYWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvc2hhcmVkL21lbnUtaXRlbS1ob3ZlcmFibGUvbWVudS1pdGVtLWhvdmVyYWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NFbkJnQjtBRG1CeEI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7QUNDWjtBREdRO0VBQ0ksbUNBQUE7QUNEWjtBREdRO0VBQ0ksTUFBQTtFQUNBLFVBQUE7QUNEWjtBREdRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNEWjs7QURPQTtFQUVRO0lBQ0ksZUFBQTtFQ0xWO0FBQ0Y7QURTQTtFQUVRO0lBQ0ksZUFBQTtFQ1JWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhvdmVyYWJsZS1pbWFnZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIH0gXHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IC0xMjBweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1mYW1pbHk7IFxyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1zZWN0aW9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxOyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9sZC1wcmljZXtcclxuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDIwZGVnKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm90dG9tLXNlY3Rpb257XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgeyBcclxuICAgIC5ob3ZlcmFibGUtaW1hZ2V7IFxyXG4gICAgICAgIC50aXRsZXsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgICBcclxuICAgICAgICB9IFxyXG4gICAgfSBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHsgIFxyXG4gICAgLmhvdmVyYWJsZS1pbWFnZXsgXHJcbiAgICAgICAgLnRpdGxleyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLmhvdmVyYWJsZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob3ZlcmFibGUtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmhvdmVyYWJsZS1pbWFnZSAudGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTEyMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LWZhbWlseTogXCJUcnVjdWxlbnRhXCIsIHNlcmlmO1xufVxuLmhvdmVyYWJsZS1pbWFnZSAuYm90dG9tLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvdHRvbTogLTEyMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmhvdmVyYWJsZS1pbWFnZSAuYm90dG9tLXNlY3Rpb24gLm1hdC1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uaG92ZXJhYmxlLWltYWdlIC5ib3R0b20tc2VjdGlvbiAub2xkLXByaWNlIHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uaG92ZXJhYmxlLWltYWdlOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoMjBkZWcpO1xufVxuLmhvdmVyYWJsZS1pbWFnZTpob3ZlciAudGl0bGUge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG4uaG92ZXJhYmxlLWltYWdlOmhvdmVyIC5ib3R0b20tc2VjdGlvbiB7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLmhvdmVyYWJsZS1pbWFnZSAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmhvdmVyYWJsZS1pbWFnZSAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufSIsIiRmb250LWZhbWlseTogIFwiVHJ1Y3VsZW50YVwiLCBzZXJpZjtcclxuJHNlY29uZGFyeS1mb250LWZhbWlseTogXCJUcnVjdWxlbnRhXCIsIHNlcmlmOyAgXHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcclxuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XHJcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xyXG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNTYwcHg7XHJcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XHJcblxyXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDtcclxuXHJcbiRhZG1pbi10b29sYmFyLWhlaWdodDogNTZweDtcclxuJGFkbWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2165:
/*!*********************************************************!*\
  !*** ./src/app/shared/menu-item/menu-item.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponent": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart-overview/cart-overview.component */ 4358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function MenuItemComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-src", ctx_r0.menuItem.image);
  }
}
function MenuItemComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.menuItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
class MenuItemComponent {
  constructor(appService) {
    this.appService = appService;
    this.lazyLoad = false;
    this.viewType = "grid";
    this.column = 4;
  }
  ngOnInit() {}
  // public arrayBufferToBase64( buffer: Iterable<number> ) {
  //   var binary = '';
  //   var bytes = new Uint8Array( buffer );
  //   var len = bytes.byteLength;
  //   for (var i = 0; i < len; i++) {
  //     binary += String.fromCharCode( bytes[ i ] );
  //   }
  //   return window.btoa( binary );
  // }
  ngOnChanges(changes) {
    if (changes.viewColChanged) {
      this.getColumnCount(changes.viewColChanged.currentValue);
    }
  }
  getColumnCount(value) {
    if (value == 25) {
      this.column = 4;
    } else if (value == 33.3) {
      this.column = 3;
    } else if (value == 50) {
      this.column = 2;
    } else {
      this.column = 1;
    }
  }
  addToCart() {
    this.appService.addToCart(this.menuItem, _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_0__.CartOverviewComponent);
  }
  onCart() {
    if (this.appService.Data.cartList.find(item => item.id == this.menuItem.id)) {
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function MenuItemComponent_Factory(t) {
    return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuItemComponent,
    selectors: [["app-menu-item"]],
    inputs: {
      menuItem: "menuItem",
      lazyLoad: "lazyLoad",
      viewType: "viewType",
      viewColChanged: "viewColChanged",
      pizza: "pizza"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 22,
    vars: 12,
    consts: [[1, "menu-item", "p-0", 3, "fxLayout", "ngClass"], ["fxFlex", "100", 1, "thumbnail-section", 3, "fxShrink"], [4, "ngIf"], ["class", "w-100 d-block", 3, "src", 4, "ngIf"], ["fxFlex", "100", 1, "p-1"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "h-100"], [1, "mb-0", "p-0"], [1, "title"], [1, "mt-0", "desc"], ["fxFlex", "grow", 1, "sticky-footer-helper"], [1, "m-0", "p-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "divider", "mt-0"], [1, "primary-color"], [1, "text-muted"], ["mat-icon-button", "", "matTooltip", "Add To Cart", 3, "disabled", "click"], [1, "w-100", "d-block", "swiper-lazy"], [1, "swiper-lazy-preloader"], [1, "w-100", "d-block", 3, "src"]],
    template: function MenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuItemComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuItemComponent_img_3_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "mat-card-content", 6)(7, "h1", 7)(8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuItemComponent_Template_button_click_19_listener() {
          return ctx.addToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayout", ctx.viewType == "grid" ? "column" : "row")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, ctx.viewType + "-item", "column-" + ctx.column));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxShrink", ctx.viewType == "grid" ? "3" : "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lazyLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.lazyLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.menuItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.menuItem.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.menuItem.price, " LE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.onCart());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
    styles: [".menu-item[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 100%;\n  overflow: hidden;\n}\n.menu-item[_ngcontent-%COMP%]   .thumbnail-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu-item[_ngcontent-%COMP%]   .thumbnail-section[_ngcontent-%COMP%]   .mat-mdc-chip-listbox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  pointer-events: none;\n}\n.menu-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Truculenta\", serif;\n  font-size: 18px;\n}\n.menu-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.menu-item.grid-item.column-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.menu-item.grid-item.column-3[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.menu-item.list-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-top: -8px;\n}\n\n@media screen and (max-width: 959px) {\n  .menu-item.grid-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .menu-item.grid-item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: normal;\n  }\n  .menu-item.grid-item.column-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .menu-item.grid-item.column-3[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .menu-item.list-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDQ1o7QURFSTtFQUNJLGdDRWZnQjtFRmdCaEIsZUFBQTtBQ0FSO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FDQ1o7QURLWTtFQUNJLGVBQUE7QUNIaEI7QURPWTtFQUNJLGVBQUE7QUNMaEI7QURVUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ1JaOztBRGNBO0VBR1k7SUFDSSxlQUFBO0VDYmQ7RURlVTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ2JkO0VEZ0JjO0lBQ0ksZUFBQTtFQ2RsQjtFRGtCYztJQUNJLGVBQUE7RUNoQmxCO0VEcUJVO0lBQ0ksZUFBQTtFQ25CZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5tZW51LWl0ZW17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnRodW1ibmFpbC1zZWN0aW9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgLm1hdC1tZGMtY2hpcC1saXN0Ym94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9IFxyXG4gICAgfSBcclxuICAgIC50aXRsZXsgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1mYW1pbHk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyAgICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgICYuZ3JpZC1pdGVteyBcclxuICAgICAgICAmLmNvbHVtbi0ye1xyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY29sdW1uLTN7XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmxpc3QtaXRlbXsgXHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5tZW51LWl0ZW17XHJcbiAgICAgICAgJi5ncmlkLWl0ZW17XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jb2x1bW4tMntcclxuICAgICAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICYuY29sdW1uLTN7XHJcbiAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmxpc3QtaXRlbXtcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfSBcclxufSIsIi5tZW51LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZW51LWl0ZW0gLnRodW1ibmFpbC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lbnUtaXRlbSAudGh1bWJuYWlsLXNlY3Rpb24gLm1hdC1tZGMtY2hpcC1saXN0Ym94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5tZW51LWl0ZW0gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiVHJ1Y3VsZW50YVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm1lbnUtaXRlbSAudGl0bGUgYSB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tZW51LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0yIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5tZW51LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0zIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51LWl0ZW0ubGlzdC1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLm1lbnUtaXRlbS5ncmlkLWl0ZW0gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLm1lbnUtaXRlbS5ncmlkLWl0ZW0gLmRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5tZW51LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0yIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5tZW51LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0zIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5tZW51LWl0ZW0ubGlzdC1pdGVtIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59IiwiJGZvbnQtZmFtaWx5OiAgXCJUcnVjdWxlbnRhXCIsIHNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQtZmFtaWx5OiBcIlRydWN1bGVudGFcIiwgc2VyaWY7ICBcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA1NjBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4O1xyXG5cclxuJGFkbWluLXRvb2xiYXItaGVpZ2h0OiA1NnB4O1xyXG4kYWRtaW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDsiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8608:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/menu-items-carousel/menu-items-carousel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemsCarouselComponent": () => (/* binding */ MenuItemsCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu-item/menu-item.component */ 2165);






function MenuItemsCarouselComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-menu-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItem", menuItem_r2)("lazyLoad", true);
  }
}
function MenuItemsCarouselComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuItemsCarouselComponent_div_0_div_3_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 5)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
  }
}
class MenuItemsCarouselComponent {
  constructor() {
    this.menuItems = [];
    this.config = {};
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,
      keyboard: true,
      navigation: {
        nextEl: ".prop-next",
        prevEl: ".prop-prev"
      },
      pagination: true,
      grabCursor: true,
      loop: false,
      preloadImages: true,
      lazy: true,
      breakpoints: {
        200: {
          slidesPerView: 1.5
        },
        600: {
          slidesPerView: 3
        },
        960: {
          slidesPerView: 4
        },
        1280: {
          slidesPerView: 4
        }
      }
    };
  }
  static #_ = this.ɵfac = function MenuItemsCarouselComponent_Factory(t) {
    return new (t || MenuItemsCarouselComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuItemsCarouselComponent,
    selectors: [["app-menu-items-carousel"]],
    inputs: {
      menuItems: "menuItems"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "menu-items-carousel", 4, "ngIf"], [1, "menu-items-carousel"], [1, "swiper-container", "h-100", "carousel-outer", 3, "swiper"], [1, "swiper-wrapper", "h-100"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "primary", 1, "prop-prev", "swiper-button-prev", "swipe-arrow"], ["mat-mini-fab", "", "color", "primary", 1, "prop-next", "swiper-button-next", "swipe-arrow"], [1, "swiper-slide"], [3, "menuItem", "lazyLoad"]],
    template: function MenuItemsCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MenuItemsCarouselComponent_div_0_Template, 10, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menuItems.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__.SwiperDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemComponent],
    styles: [".swipe-arrow[_ngcontent-%COMP%] {\n  top: 50%;\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL21lbnUtaXRlbXMtY2Fyb3VzZWwvbWVudS1pdGVtcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvc2hhcmVkL21lbnUtaXRlbXMtY2Fyb3VzZWwvbWVudS1pdGVtcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlLWFycm93e1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufSIsIi5zd2lwZS1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9655:
/*!***************************************************************************!*\
  !*** ./src/app/shared/menu-items-toolbar/menu-items-toolbar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemsToolbarComponent": () => (/* binding */ MenuItemsToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8589);









function MenuItemsToolbarComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.sidenavToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function MenuItemsToolbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_button_11_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const sort_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.changeSorting(sort_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sort_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sort_r9);
  }
}
function MenuItemsToolbarComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_button_21_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const count_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.changeCount(count_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const count_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r12);
  }
}
class MenuItemsToolbarComponent {
  constructor() {
    this.showSidenavToggle = false;
    this.onSidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChangeCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChangeViewType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.viewType = 'grid';
    this.viewCol = 25;
    this.counts = [8, 12, 16, 24, 36];
    this.sortings = ['Sort by Default', 'Popular', 'Price (Low to High)', 'Price (High to Low)'];
  }
  ngOnInit() {
    this.count = this.counts[1];
    this.sort = this.sortings[0];
  }
  ngOnChanges() {}
  changeCount(count) {
    this.count = count;
    this.onChangeCount.emit(count);
    // this.getAllProducts(); 
  }

  changeSorting(sort) {
    this.sort = sort;
    this.onChangeSorting.emit(sort);
  }
  changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
    this.onChangeViewType.emit({
      viewType: viewType,
      viewCol: viewCol
    });
  }
  sidenavToggle() {
    this.onSidenavToggle.emit();
  }
  static #_ = this.ɵfac = function MenuItemsToolbarComponent_Factory(t) {
    return new (t || MenuItemsToolbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuItemsToolbarComponent,
    selectors: [["app-menu-items-toolbar"]],
    inputs: {
      showSidenavToggle: "showSidenavToggle"
    },
    outputs: {
      onSidenavToggle: "onSidenavToggle",
      onChangeCount: "onChangeCount",
      onChangeSorting: "onChangeSorting",
      onChangeViewType: "onChangeViewType"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 34,
    vars: 7,
    consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "filter-row", "mat-elevation-z1", "text-muted"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], ["sortMenuTrigger", "matMenuTrigger"], ["iconPositionEnd", "", 1, "mat-icon-sm", "caret"], ["xPosition", "before", "overlapTrigger", "true"], ["sortMenu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "false", "fxShow.gt-xs", ""], ["countsMenuTrigger", "matMenuTrigger"], ["countsMenu", "matMenu"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "p-0", 3, "click"], ["viewBox", "0 0 25 25", 1, "mat-icon", "mat-icon-sm"], ["d", "M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"], ["mat-icon-button", "", "fxShow", "false", "fxShow.gt-sm", "", 3, "click"], ["fxShow", "false", "fxShow.gt-md", "", "mat-icon-button", "", 3, "click"], ["mat-menu-item", "", 3, "click"]],
    template: function MenuItemsToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemsToolbarComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div")(3, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function MenuItemsToolbarComponent_Template_span_mouseleave_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuItemsToolbarComponent_button_11_Template, 3, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "a", 2, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-menu", 5, 11)(20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function MenuItemsToolbarComponent_Template_span_mouseleave_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r4.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MenuItemsToolbarComponent_button_21_Template, 3, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_Template_button_click_22_listener() {
          return ctx.changeViewType("list", 100);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_Template_button_click_25_listener() {
          return ctx.changeViewType("grid", 50);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_Template_button_click_28_listener() {
          return ctx.changeViewType("grid", 33.3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "view_module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemsToolbarComponent_Template_button_click_31_listener() {
          return ctx.changeViewType("grid", 25);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "view_comfy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSidenavToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sort, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Show ", ctx.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4030:
/*!***********************************************************!*\
  !*** ./src/app/shared/our-awards/our-awards.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurAwardsComponent": () => (/* binding */ OurAwardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);




function OurAwardsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const award_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-src", award_r1.image);
  }
}
class OurAwardsComponent {
  constructor(appService) {
    this.appService = appService;
    this.awards = [];
    this.config = {};
  }
  ngOnInit() {
    this.awards = this.appService.getAwards();
  }
  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 6,
      spaceBetween: 16,
      keyboard: true,
      navigation: false,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide",
      breakpoints: {
        280: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3
        },
        960: {
          slidesPerView: 4
        },
        1280: {
          slidesPerView: 5
        },
        1500: {
          slidesPerView: 6
        }
      }
    };
  }
  static #_ = this.ɵfac = function OurAwardsComponent_Factory(t) {
    return new (t || OurAwardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OurAwardsComponent,
    selectors: [["app-our-awards"]],
    decls: 11,
    vars: 2,
    consts: [[1, "section", "mt-3"], [1, "px-3"], [1, "theme-container"], [1, "section-title", "mb-3"], [1, "section-desc", "text-muted"], [1, "awards-carousel"], [1, "swiper-container", "h-100", 3, "swiper"], [1, "swiper-wrapper", "h-100"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-slide"], [1, "award-item"], [1, "swiper-lazy"], [1, "swiper-lazy-preloader"]],
    template: function OurAwardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Our Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mox restaurant is the best restourant in the country and been recognized with many awards. We promise to provide excellent service to you forever for happiness and success. For getting more details please visit us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OurAwardsComponent_div_10_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.awards);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__.SwiperDirective],
    styles: [".awards-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.awards-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  padding: 8px 2px;\n  margin: 0 14px;\n}\n.awards-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .award-item[_ngcontent-%COMP%] {\n  height: 150px;\n  display: flex;\n  align-items: center;\n}\n.awards-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .award-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL291ci1hd2FyZHMvb3VyLWF3YXJkcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvc2hhcmVkL291ci1hd2FyZHMvb3VyLWF3YXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDRVI7QUREUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNHWjtBREZZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0loQiIsInNvdXJjZXNDb250ZW50IjpbIi5hd2FyZHMtY2Fyb3VzZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDJweDtcclxuICAgICAgICBtYXJnaW46IDAgMTRweDtcclxuICAgICAgICAuYXdhcmQtaXRlbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIuYXdhcmRzLWNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hd2FyZHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHggMnB4O1xuICBtYXJnaW46IDAgMTRweDtcbn1cbi5hd2FyZHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmF3YXJkLWl0ZW0ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF3YXJkcy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuYXdhcmQtaXRlbSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6441:
/*!*********************************************************!*\
  !*** ./src/app/shared/our-chefs/our-chefs.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurChefsComponent": () => (/* binding */ OurChefsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 1528);










const _c0 = function (a1) {
  return ["/chefs", a1];
};
function OurChefsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 16)(5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-rating", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-actions", 21)(13, "div", 22)(14, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const chef_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-src", chef_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chef_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chef_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratingsCount", chef_r1.ratingsCount)("ratingsValue", chef_r1.ratingsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, chef_r1.id));
  }
}
class OurChefsComponent {
  constructor(appService) {
    this.appService = appService;
    this.chefs = [];
    this.config = {};
  }
  ngOnInit() {
    this.chefs = this.appService.getChefs();
  }
  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        280: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    };
  }
  static #_ = this.ɵfac = function OurChefsComponent_Factory(t) {
    return new (t || OurChefsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OurChefsComponent,
    selectors: [["app-our-chefs"]],
    decls: 20,
    vars: 2,
    consts: [[1, "section", "chefs"], [1, "px-3"], [1, "theme-container"], [1, "section-title", "mb-3"], [1, "section-desc", "text-muted"], [1, "chefs-carousel"], [1, "swiper-container", "h-100", "carousel-outer", 3, "swiper"], [1, "swiper-wrapper", "h-100"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "primary", 1, "swiper-button-prev", "swipe-arrow"], ["mat-mini-fab", "", "color", "primary", 1, "swiper-button-next", "swipe-arrow"], [1, "w-100", "text-center", "mt-5"], ["routerLink", "/chefs", "mat-raised-button", "", "color", "primary", 1, "uppercase"], [1, "swiper-slide"], ["mat-card-image", "", "alt", "", 1, "swiper-lazy", "d-block"], [1, "swiper-lazy-preloader"], [1, "text-center", "p-3"], [1, "secondary-font", "fw-600"], [1, "mb-2"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [3, "ratingsCount", "ratingsValue"], ["fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "text-muted"], ["href", "/", 1, "social-icon"], ["viewBox", "0 0 24 24", 1, "mat-icon"], ["d", "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"], ["d", "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z"], ["d", "M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"], ["d", "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"], ["d", "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"], ["mat-button", "", "color", "primary", 1, "uppercase", 3, "routerLink"]],
    template: function OurChefsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Meet our chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "What can be better than food prepared with love");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OurChefsComponent_div_10_Template, 32, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Our chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chefs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__.SwiperDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatMiniFabButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardImage, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1514:
/*!***************************************************************!*\
  !*** ./src/app/shared/our-services/our-services.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurServicesComponent": () => (/* binding */ OurServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




class OurServicesComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function OurServicesComponent_Factory(t) {
    return new (t || OurServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OurServicesComponent,
    selectors: [["app-our-services"]],
    decls: 40,
    vars: 0,
    consts: [[1, "section"], [1, "px-3"], [1, "theme-container"], [1, "section-title"], [1, "section-desc", "text-muted"], ["fxLayout", "row wrap", 1, "services-wrapper"], ["fxFlex", "100", "fxFlex.gt-md", "25", "fxFlex.gt-sm", "50", 1, "p-2"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "h-100", "w-100", "text-center", "p-3"], ["color", "primary", 1, "mat-icon-xlg"], [1, "secondary-font", "capitalize", "fw-600", "my-3"]],
    template: function OurServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This is what we do and we do it perfectly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "mat-card", 7)(10, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "fastfood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fresh Healthy Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "mat-card", 7)(18, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Free Fast Home Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6)(25, "mat-card", 7)(26, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Discount Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6)(33, "mat-card", 7)(34, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "more_time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "On Time Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: [".services-wrapper[_ngcontent-%COMP%] {\n  margin: -8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VzLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IC04cHg7XHJcbiAgICAvLyAubWF0LWNhcmQ6aG92ZXJ7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgLy8gfVxyXG59IiwiLnNlcnZpY2VzLXdyYXBwZXIge1xuICBtYXJnaW46IC04cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9874:
/*!***********************************************************************!*\
  !*** ./src/app/shared/quantity-counter/quantity-counter.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuantityCounterComponent": () => (/* binding */ QuantityCounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class QuantityCounterComponent {
  // public value:any = 1;
  constructor() {
    this.value = 1;
    this.step = 1;
    this.min = 1;
    this.max = 1000;
    this.small = false;
    this.onCounterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.value = this.value ? this.value : 1;
  }
  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onCounterChange.emit(this.value);
    }
  }
  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onCounterChange.emit(this.value);
    }
  }
  onBlur() {
    var reg = new RegExp(/^(|[1-9]\d*)$/);
    if (!reg.test(this.value)) {
      this.value = 1;
    } else {
      if (this.value > this.max || !this.value) {
        this.value = 1;
      }
    }
  }
  keyPress(event) {
    if (event.target.value.length == 0 && event.which == 48) {
      event.preventDefault();
      return false;
    }
    var verified = String.fromCharCode(event.which).match(/[^0-9]/g);
    if (verified) {
      event.preventDefault();
      return false;
    }
    setTimeout(() => {
      this.onCounterChange.emit(this.value);
    });
    return true;
  }
  static #_ = this.ɵfac = function QuantityCounterComponent_Factory(t) {
    return new (t || QuantityCounterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: QuantityCounterComponent,
    selectors: [["app-quantity-counter"]],
    inputs: {
      item: "item",
      value: "value",
      step: "step",
      min: "min",
      max: "max",
      small: "small"
    },
    outputs: {
      onCounterChange: "onCounterChange"
    },
    decls: 8,
    vars: 3,
    consts: [[1, "quantity-counter"], ["type", "button", 3, "click"], [1, "text-muted"], ["type", "text", 3, "value", "blur", "keypress"]],
    template: function QuantityCounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuantityCounterComponent_Template_button_click_1_listener() {
          return ctx.decrement();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function QuantityCounterComponent_Template_input_blur_4_listener() {
          return ctx.onBlur();
        })("keypress", function QuantityCounterComponent_Template_input_keypress_4_listener($event) {
          return ctx.keyPress($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuantityCounterComponent_Template_button_click_5_listener() {
          return ctx.increment();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "keyboard_arrow_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sm", ctx.small);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    styles: [".quantity-counter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.quantity-counter[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 36px;\n  outline: none;\n  text-align: center;\n  background: transparent;\n  color: inherit;\n  box-sizing: border-box;\n  border-left: none;\n  border-right: none;\n  margin: 0 -1px;\n  position: relative;\n}\n.quantity-counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: 0;\n  width: 36px;\n  height: 36px;\n  align-items: center;\n  place-content: center;\n  outline: none;\n  cursor: pointer;\n}\n.quantity-counter.sm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 36px;\n  height: 18px;\n}\n.quantity-counter.sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3F1YW50aXR5LWNvdW50ZXIvcXVhbnRpdHktY291bnRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvc2hhcmVkL3F1YW50aXR5LWNvdW50ZXIvcXVhbnRpdHktY291bnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRVI7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1o7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIucXVhbnRpdHktY291bnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIC0xcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIH0gXHJcbiAgICBidXR0b257IFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJi5zbXtcclxuICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4OyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGJ1dHRvbnsgIFxyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4OyBcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59IiwiLnF1YW50aXR5LWNvdW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1YW50aXR5LWNvdW50ZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBtYXJnaW46IDAgLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnF1YW50aXR5LWNvdW50ZXIgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnF1YW50aXR5LWNvdW50ZXIuc20gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4ucXVhbnRpdHktY291bnRlci5zbSBidXR0b24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAxOHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-scrollbar */ 4203);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ 9045);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/directives/directives.module */ 9212);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo/logo.component */ 6869);
/* harmony import */ var _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-carousel/header-carousel.component */ 3075);
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-item/menu-item.component */ 2165);
/* harmony import */ var _menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-items-carousel/menu-items-carousel.component */ 8608);
/* harmony import */ var _quantity_counter_quantity_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quantity-counter/quantity-counter.component */ 9874);
/* harmony import */ var _menu_items_toolbar_menu_items_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-items-toolbar/menu-items-toolbar.component */ 9655);
/* harmony import */ var _menu_item_hoverable_menu_item_hoverable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-item-hoverable/menu-item-hoverable.component */ 3464);
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testimonials/testimonials.component */ 9347);
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-upload/image-upload.component */ 7140);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ 2066);
/* harmony import */ var _social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./social-icons/social-icons.component */ 6622);
/* harmony import */ var _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart-overview/cart-overview.component */ 4358);
/* harmony import */ var _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header-image/header-image.component */ 6272);
/* harmony import */ var _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header-video/header-video.component */ 9501);
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./our-services/our-services.component */ 1514);
/* harmony import */ var _our_awards_our_awards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./our-awards/our-awards.component */ 4030);
/* harmony import */ var _our_chefs_our_chefs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./our-chefs/our-chefs.component */ 6441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);




























































class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__.FlexLayoutModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SwiperModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_41__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_48__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_54__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__.MatTooltipModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_58__.MatStepperModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_59__.NgScrollbarModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__.FlexLayoutModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SwiperModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_41__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_48__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_54__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__.MatTooltipModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_58__.MatStepperModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_59__.NgScrollbarModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent, _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_15__.HeaderImageComponent, _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_16__.HeaderVideoComponent, _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_14__.CartOverviewComponent, _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_17__.OurServicesComponent, _our_awards_our_awards_component__WEBPACK_IMPORTED_MODULE_18__.OurAwardsComponent, _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__.MenuItemComponent, _our_chefs_our_chefs_component__WEBPACK_IMPORTED_MODULE_19__.OurChefsComponent, _menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_5__.MenuItemsCarouselComponent, _quantity_counter_quantity_counter_component__WEBPACK_IMPORTED_MODULE_6__.QuantityCounterComponent, _menu_items_toolbar_menu_items_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.MenuItemsToolbarComponent, _menu_item_hoverable_menu_item_hoverable_component__WEBPACK_IMPORTED_MODULE_8__.MenuItemHoverableComponent, _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__.TestimonialsComponent, _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_10__.ImageUploadComponent, _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogComponent, _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_12__.AlertDialogComponent, _social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_13__.SocialIconsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__.FlexLayoutModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SwiperModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_41__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_48__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_54__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__.MatTooltipModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_58__.MatStepperModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_59__.NgScrollbarModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__.FlexLayoutModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SwiperModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_37__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_41__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_48__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_54__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__.MatTooltipModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_58__.MatStepperModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_59__.NgScrollbarModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent, _cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_14__.CartOverviewComponent, _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__.MenuItemComponent, _menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_5__.MenuItemsCarouselComponent, _quantity_counter_quantity_counter_component__WEBPACK_IMPORTED_MODULE_6__.QuantityCounterComponent, _menu_items_toolbar_menu_items_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.MenuItemsToolbarComponent, _menu_item_hoverable_menu_item_hoverable_component__WEBPACK_IMPORTED_MODULE_8__.MenuItemHoverableComponent, _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__.TestimonialsComponent, _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_10__.ImageUploadComponent, _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogComponent, _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_12__.AlertDialogComponent, _social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_13__.SocialIconsComponent, _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent, _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_15__.HeaderImageComponent, _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_16__.HeaderVideoComponent]
  });
})();

/***/ }),

/***/ 6622:
/*!***************************************************************!*\
  !*** ./src/app/shared/social-icons/social-icons.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialIconsComponent": () => (/* binding */ SocialIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);



const _c0 = function (a0, a1) {
  return [a0, a1];
};
class SocialIconsComponent {
  constructor() {
    this.iconSize = '';
    this.iconColor = '';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SocialIconsComponent_Factory(t) {
    return new (t || SocialIconsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SocialIconsComponent,
    selectors: [["app-social-icons"]],
    inputs: {
      iconSize: "iconSize",
      iconColor: "iconColor"
    },
    decls: 6,
    vars: 8,
    consts: [["href", "https://www.facebook.com/D.Menuss", "target", "_blank", 1, "social-icon"], ["viewBox", "0 0 24 24", 1, "mat-icon", 3, "ngClass"], ["d", "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"], ["viewBox", "0 -1 26 26", 1, "mat-icon", 3, "ngClass"], ["d", "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"]],
    template: function SocialIconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, "mat-icon-" + ctx.iconSize, "mat-" + ctx.iconColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, "mat-icon-" + ctx.iconSize, "mat-" + ctx.iconColor));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__.DefaultClassDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9347:
/*!***************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);




function TestimonialsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const testimonial_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-src", testimonial_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](testimonial_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](testimonial_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](testimonial_r1.position);
  }
}
class TestimonialsComponent {
  constructor(appService) {
    this.appService = appService;
    this.config = {};
    this.pagination = {
      el: '.swiper-pagination',
      clickable: true
    };
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true
    };
  }
  static #_ = this.ɵfac = function TestimonialsComponent_Factory(t) {
    return new (t || TestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TestimonialsComponent,
    selectors: [["app-testimonials"]],
    decls: 10,
    vars: 2,
    consts: [[1, "section", "testimonials"], [1, "px-3"], [1, "theme-container"], [1, "section-title"], [1, "testimonials-carousel", "mt-5"], [1, "swiper-container", "h-100", 3, "swiper"], [1, "swiper-wrapper", "h-100"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-slide"], [1, "content", "text-center"], [1, "swiper-lazy"], [1, "quote", "open", "text-left", "primary-color"], [1, "text"], [1, "quote", "close", "text-right", "primary-color"], [1, "secondary-font", "primary-color"], [1, "swiper-lazy-preloader"]],
    template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "What people are saying");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestimonialsComponent_div_8_Template, 14, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.testimonials);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__.SwiperDirective],
    styles: [".testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n.testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0 auto;\n}\n.testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 140px;\n  height: 140px;\n}\n.testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 14px;\n}\n.testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .quote.open[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .quote.close[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  max-width: 960px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-width: 650px;\n  margin: 0 auto;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  border: 4px solid red;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 14px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .quote.open[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .quote.close[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.testimonials[_ngcontent-%COMP%]   .testimonials-carousel[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL3NoYXJlZC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURBWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFaEI7QURBWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0VoQjtBRERnQjtFQUNJLGdCQUFBO0FDR3BCO0FERGdCO0VBQ0ksbUJBQUE7QUNHcEI7QURBWTtFQUNJLGdCQUFBO0FDRWhCOztBRE1RO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0haO0FESVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGaEI7QURHZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEscUJBQUE7QUNGcEI7QURJZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNGcEI7QURHb0I7RUFDSSxnQkFBQTtBQ0R4QjtBREdvQjtFQUNJLG1CQUFBO0FDRHhCO0FESWdCO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDRnBCIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy1jYXJvdXNlbHsgICAgXHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdW90ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDsgXHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDsgXHJcbiAgICAgICAgICAgICAgICAmLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0eyBcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRlc3RpbW9uaWFsc3sgXHJcbiAgICAudGVzdGltb25pYWxzLWNhcm91c2VseyAgICBcclxuICAgICAgICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIC5xdW90ZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAmLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCB7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNvbnRlbnQgLnF1b3RlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cbi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNvbnRlbnQgLnF1b3RlLm9wZW4ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCAucXVvdGUuY2xvc2Uge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xufVxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNvbnRlbnQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcbn1cbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCAucXVvdGUge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyIC5jb250ZW50IC5xdW90ZS5vcGVuIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCAucXVvdGUuY2xvc2Uge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyIC5jb250ZW50IC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwIDI0cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 545:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/contacts/contacts.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





function ContactsComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 6);
  }
}
function ContactsComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
}
class ContactsComponent {
  constructor() {
    this.dividers = true;
    this.iconSize = 'sm';
    this.iconColor = '';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactsComponent_Factory(t) {
    return new (t || ContactsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactsComponent,
    selectors: [["app-contacts"]],
    inputs: {
      dividers: "dividers",
      iconSize: "iconSize",
      iconColor: "iconColor"
    },
    decls: 12,
    vars: 6,
    consts: [["fxLayoutAlign", "center center", 1, "item"], [3, "color", "ngClass"], [1, "px-1"], ["class", "v-divider", "fxShow", "false", "fxShow.gt-xs", "", 4, "ngIf"], ["fxLayoutAlign", "center center", "fxShow", "false", "fxShow.gt-xs", "", 1, "item"], ["class", "v-divider", "fxShow", "false", "fxShow.gt-sm", "", 4, "ngIf"], ["fxShow", "false", "fxShow.gt-xs", "", 1, "v-divider"], ["fxShow", "false", "fxShow.gt-sm", "", 1, "v-divider"]],
    template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "01270888338");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContactsComponent_span_5_Template, 1, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4)(7, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 2903 Avenue Z, Brooklyn, NY, USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactsComponent_span_11_Template, 1, 0, "span", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.iconColor)("ngClass", "mat-icon-" + ctx.iconSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dividers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.iconColor)("ngClass", "mat-icon-" + ctx.iconSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dividers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultShowHideDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5893:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_app_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/app-validators */ 8955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/logo/logo.component */ 6869);
/* harmony import */ var _shared_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/social-icons/social-icons.component */ 6622);











class FooterComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.center = {
      lat: 40.678178,
      lng: -73.944158
    };
    this.zoom = 12;
    this.markerOptions = {
      draggable: false
    };
    this.markerPositions = [{
      lat: 40.678178,
      lng: -73.944158
    }];
    this.mapStyles = [{
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{
        saturation: 36
      }, {
        color: "#000000"
      }, {
        lightness: 40
      }]
    }, {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{
        visibility: "on"
      }, {
        color: "#000000"
      }, {
        lightness: 16
      }]
    }, {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 20
      }]
    }, {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 17
      }, {
        weight: 1.2
      }]
    }, {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#8b9198"
      }]
    }, {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 20
      }]
    }, {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [{
        color: "#323336"
      }]
    }, {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#414954"
      }]
    }, {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 21
      }]
    }, {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [{
        color: "#2e2f31"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#7a7c80"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{
        color: "#242427"
      }, {
        lightness: 17
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#202022"
      }, {
        lightness: 29
      }, {
        weight: 0.2
      }]
    }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 18
      }]
    }, {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [{
        color: "#393a3f"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#202022"
      }]
    }, {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 16
      }]
    }, {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [{
        color: "#393a3f"
      }]
    }, {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#202022"
      }]
    }, {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 19
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 17
      }]
    }, {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{
        color: "#202124"
      }]
    }];
    this.mapOptions = {
      styles: this.mapStyles
    };
  }
  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_0__.emailValidator])],
      message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.subscribeForm = this.formBuilder.group({
      email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_0__.emailValidator])]
    });
  }
  onFeedbackFormSubmit(values) {
    if (this.feedbackForm.valid) {}
  }
  onSubscribeFormSubmit(values) {
    if (this.subscribeForm.valid) {}
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 32,
    vars: 1,
    consts: [[1, "px-3"], [1, "theme-container"], [1, "py-5", "content", "border-lighter"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around center"], ["fxFlex", "30", "fxFlex.xs", "100", "ngClass.lt-md", "pt-2"], ["fxLayout", "row", "fxLayoutAlign", "start enter", "fxLayoutAlign.xs", "center center", "routerLink", "/", 1, "logo", "pb-3"], ["fxFlex", "40", "fxFlex.xs", "100"], ["fxLayout", "row", "fxLayoutAlign", "end enter", "fxLayoutAlign.xs", "center center", 1, "mt-2"], [1, "mx-2"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutAlign.xs", "center center", 1, "mt-1"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "desc", 3, "iconSize"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "copyright", "py-1", "text-center"], ["ngClass.xs", "mt-1"], ["mat-button", "", "href", "https://www.facebook.com/D.Menuss", "color", "primary", "target", "_blank"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "p", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Digital Menu, Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 10)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "01270888338");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 10)(20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Every day of the week / 9:00AM - 2:00AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-social-icons", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12)(26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Copyright \u00A9 2023 All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Designed & Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Digital Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iconSize", "lg");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, _shared_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_2__.SocialIconsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5359:
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.service */ 7091);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










const _c0 = function (a0) {
  return [a0];
};
const _c1 = function () {
  return {
    exact: true
  };
};
function HorizontalMenuComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, menuItem_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, menuItem_r1.title));
  }
}
function HorizontalMenuComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", menuItem_r1.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", menuItem_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, menuItem_r1.title));
  }
}
function HorizontalMenuComponent_ng_container_0_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, menuItem_r1.title));
  }
}
function HorizontalMenuComponent_ng_container_0_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("menuOpened", function HorizontalMenuComponent_ng_container_0_a_4_Template_a_menuOpened_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.closeOthers(_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, menuItem_r1.title));
  }
}
function HorizontalMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_ng_container_0_a_1_Template, 4, 8, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_ng_container_0_a_2_Template, 4, 5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_ng_container_0_a_3_Template, 6, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HorizontalMenuComponent_ng_container_0_a_4_Template, 5, 4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-horizontal-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.routerLink && !menuItem_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.href && !menuItem_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.hasSubMenu && menuItem_r1.parentId == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.hasSubMenu && menuItem_r1.parentId != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuParentId", menuItem_r1.id);
  }
}
class HorizontalMenuComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.menuParentId = 0;
    this.menuItems = [];
  }
  ngOnInit() {
    this.menuItems = this.menuService.getHorizontalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }
  closeOthers(trigger) {
    const currentIndex = this.triggers.toArray().findIndex(t => t == trigger);
    this.triggers.forEach((menu, index) => {
      if (index != currentIndex) {
        menu.closeMenu();
      }
    });
  }
  static #_ = this.ɵfac = function HorizontalMenuComponent_Factory(t) {
    return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HorizontalMenuComponent,
    selectors: [["app-horizontal-menu"]],
    viewQuery: function HorizontalMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.triggers = _t);
      }
    },
    inputs: {
      menuParentId: "menuParentId"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], ["mat-button", "", "routerLinkActive", "horizontal-active-link", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["mat-button", "", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 3, "matMenuTriggerFor", "menuOpened", 4, "ngIf"], [1, "horizontal-sub-menu"], ["menu", "matMenu"], [3, "menuParentId"], ["mat-button", "", "routerLinkActive", "horizontal-active-link", 3, "routerLink", "routerLinkActiveOptions"], ["mat-button", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["iconPositionEnd", "", 1, "caret"], ["mat-menu-item", "", 3, "matMenuTriggerFor", "menuOpened"], ["t", "matMenuTrigger"]],
    template: function HorizontalMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HorizontalMenuComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, HorizontalMenuComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6529:
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
  constructor(id, title, routerLink, href, target, hasSubMenu, parentId) {
    this.id = id;
    this.title = title;
    this.routerLink = routerLink;
    this.href = href;
    this.target = target;
    this.hasSubMenu = hasSubMenu;
    this.parentId = parentId;
  }
}

/***/ }),

/***/ 7091:
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 1501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class MenuService {
  constructor(location, router) {
    this.location = location;
    this.router = router;
  }
  getVerticalMenuItems() {
    return _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems;
  }
  getHorizontalMenuItems() {
    return _menu__WEBPACK_IMPORTED_MODULE_0__.horizontalMenuItems;
  }
  expandActiveSubMenu(menu) {
    let url = this.location.path();
    let routerLink = decodeURIComponent(url);
    let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
    if (activeMenuItem[0]) {
      let menuItem = activeMenuItem[0];
      while (menuItem.parentId != 0) {
        let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
        menuItem = parentMenuItem;
        this.toggleMenuItem(menuItem.id);
      }
    }
  }
  toggleMenuItem(menuId) {
    let menuItem = document.getElementById("menu-item-" + menuId);
    let subMenu = document.getElementById("sub-menu-" + menuId);
    if (subMenu) {
      if (subMenu.classList.contains("show")) {
        subMenu.classList.remove("show");
        menuItem?.classList.remove("expanded");
      } else {
        subMenu.classList.add("show");
        menuItem?.classList.add("expanded");
      }
    }
  }
  closeOtherSubMenus(menu, menuId) {
    let currentMenuItem = menu.filter(item => item.id == menuId)[0];
    menu.forEach(item => {
      if (item.id != menuId && item.parentId == currentMenuItem.parentId || currentMenuItem.parentId == 0 && item.id != menuId) {
        let subMenu = document.getElementById("sub-menu-" + item.id);
        let menuItem = document.getElementById("menu-item-" + item.id);
        if (subMenu) {
          if (subMenu.classList.contains("show")) {
            subMenu.classList.remove("show");
            menuItem?.classList.remove("expanded");
          }
        }
      }
    });
  }
  closeAllSubMenus() {
    _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems.forEach(item => {
      let subMenu = document.getElementById("sub-menu-" + item.id);
      let menuItem = document.getElementById("menu-item-" + item.id);
      if (subMenu) {
        if (subMenu.classList.contains("show")) {
          subMenu.classList.remove("show");
          menuItem?.classList.remove("expanded");
        }
      }
    });
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac
  });
}

/***/ }),

/***/ 1501:
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "horizontalMenuItems": () => (/* binding */ horizontalMenuItems),
/* harmony export */   "verticalMenuItems": () => (/* binding */ verticalMenuItems)
/* harmony export */ });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ 6529);

const horizontalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, "NAV.HOME", "/", null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, "MENU", "/menu", null, null, false, 0),
// new Menu (10, 'NAV.PAGES', null, null, null, true, 0),
// new Menu (11, 'RESERVATION', '/reservation', null, null, false, 10),
// new Menu (12, 'NAV.CHEFS', '/chefs', null, null, false, 10),
// new Menu (13, 'NAV.CHEF', '/chefs/1', null, null, false, 10),
// new Menu (20, 'ACCOUNT', null, null, null, true, 10),
new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(21, "LOGIN", "/login", null, null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(22, "REGISTER", "/register", null, null, false, 20),
// new Menu (40, 'NAV.SHOP', null, null, null, true, 10),
// new Menu (41, 'NAV.SINGLE_MENU', '/menu/17', null, null, false, 40),
// new Menu (42, 'NAV.CART', '/cart', null, null, false, 40),
// new Menu (43, 'NAV.CHECKOUT', '/checkout', null, null, false, 40),
// new Menu (60, 'FAQs', '/faq', null, null, false, 10),
// new Menu (62, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 10),
// new Menu (63, 'Landing', '/landing', null, null, false, 10),
new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(64, "404 Page", "/404", null, null, false, 10),
// new Menu (70, 'NAV.CONTACT', '/contact', null, null, false, 0),
// new Menu (80, 'NAV.ABOUT_US', '/about', null, null, false, 0),
new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(90, "NAV.ADMIN", "/admin", null, null, false, 0)
// new Menu (140, 'NAV.OTHERS', null, null, null, true, 10),
// new Menu (141, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 140),
// new Menu (142, 'NAV.MENU_ITEM', null, '/', '_blank', false, 140),
// new Menu (143, 'NAV.MENU_ITEM', null,'/', '_blank', false, 140),
// new Menu (144, 'NAV.MENU_ITEM', null,'/', '_blank', false, 140)
];

const verticalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, "NAV.HOME", "/", null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, "MENU", "/menu", null, null, false, 0),
//   new Menu(10, "NAV.PAGES", null, null, null, true, 0),
//   new Menu(11, "RESERVATION", "/reservation", null, null, false, 10),
//   new Menu(12, "NAV.CHEFS", "/chefs", null, null, false, 10),
//   new Menu(13, "NAV.CHEF", "/chefs/1", null, null, false, 10),
//   new Menu(20, "ACCOUNT", null, null, null, true, 10),
new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(21, "LOGIN", "/login", null, null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(22, "REGISTER", "/register", null, null, false, 20),
//   new Menu(40, "NAV.SHOP", null, null, null, true, 10),
//   new Menu(41, "NAV.SINGLE_MENU", "/menu/17", null, null, false, 40),
//   new Menu(42, "NAV.CART", "/cart", null, null, false, 40),
//   new Menu(43, "NAV.CHECKOUT", "/checkout", null, null, false, 40),
//   new Menu(60, "FAQs", "/faq", null, null, false, 10),
//   new Menu(
//     62,
//     "NAV.TERMS_CONDITIONS",
//     "/terms-conditions",
//     null,
//     null,
//     false,
//     10
//   ),
//   new Menu(63, "Landing", "/landing", null, null, false, 10),
// new Menu (64, '404 Page', '/404', null, null, false, 10),
//   new Menu(70, "NAV.CONTACT", "/contact", null, null, false, 0),
// new Menu (80, 'NAV.ABOUT_US', '/about', null, null, false, 0),
new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(90, "NAV.ADMIN", "/admin", null, null, false, 0)
// new Menu (140, 'Level 1', null, null, null, true, 0),
// new Menu (141, 'Level 2', null, null, null, true, 140),
// new Menu (142, 'Level 3', null, null, null, true, 141),
// new Menu (143, 'Level 4', null, null, null, true, 142),
// new Menu (144, 'Level 5', null, '/', null, false, 143),
// new Menu (200, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 0)
];

/***/ }),

/***/ 2359:
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": () => (/* binding */ VerticalMenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.service */ 7091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









const _c0 = function (a0) {
  return [a0];
};
const _c1 = function () {
  return {
    exact: true
  };
};
function VerticalMenuComponent_div_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onClick(menuItem_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, menuItem_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1))("id", "menu-item-" + menuItem_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, menuItem_r1.title));
  }
}
function VerticalMenuComponent_div_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onClick(menuItem_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "menu-item-" + menuItem_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", menuItem_r1.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", menuItem_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, menuItem_r1.title));
  }
}
function VerticalMenuComponent_div_0_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onClick(menuItem_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "menu-item-" + menuItem_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, menuItem_r1.title));
  }
}
function VerticalMenuComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-vertical-menu", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "sub-menu-" + menuItem_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuParentId", menuItem_r1.id);
  }
}
function VerticalMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerticalMenuComponent_div_0_a_1_Template, 4, 9, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerticalMenuComponent_div_0_a_2_Template, 4, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VerticalMenuComponent_div_0_a_3_Template, 6, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VerticalMenuComponent_div_0_div_4_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.routerLink && !menuItem_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.href && !menuItem_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.hasSubMenu);
  }
}
class VerticalMenuComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.menuParentId = 0;
    this.menuItems = [];
  }
  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }
  onClick(menuId) {
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
  }
  static #_ = this.ɵfac = function VerticalMenuComponent_Factory(t) {
    return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VerticalMenuComponent,
    selectors: [["app-vertical-menu"]],
    inputs: {
      menuParentId: "menuParentId"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])],
    decls: 1,
    vars: 1,
    consts: [["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "id", "click", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "id", "click", 4, "ngIf"], ["class", "sub-menu", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "id", "click"], [1, "menu-title"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "id", "click"], [1, "menu-expand-icon", "transition-2"], [1, "sub-menu", 3, "id"], [3, "menuParentId"]],
    template: function VerticalMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, VerticalMenuComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".menu-item[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding-left: 16px;\n}\n.menu-item[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]   .mat-icon.menu-expand-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.menu-item[_ngcontent-%COMP%]   .mat-mdc-button.expanded[_ngcontent-%COMP%]   .menu-expand-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.sub-menu[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 100px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 120px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 140px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 160px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 180px;\n}\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 200px;\n}\n.sub-menu[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.sub-menu.show[_ngcontent-%COMP%] {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0RaO0FESVk7RUFHSSx5QkFBQTtBQ0ZoQjs7QURRQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUdBLHFDQUFBO0FDTko7QUNuQlE7RUFLUSxrQkFBQTtBRGlCaEI7QUN0QlE7RUFLUSxrQkFBQTtBRG9CaEI7QUN6QlE7RUFLUSxtQkFBQTtBRHVCaEI7QUM1QlE7RUFLUSxtQkFBQTtBRDBCaEI7QUMvQlE7RUFLUSxtQkFBQTtBRDZCaEI7QUNsQ1E7RUFLUSxtQkFBQTtBRGdDaEI7QUNyQ1E7RUFLUSxtQkFBQTtBRG1DaEI7QUN4Q1E7RUFLUSxtQkFBQTtBRHNDaEI7QURqQkk7RUFDSSxrQkFBQTtBQ21CUjtBRGpCSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUNtQlIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiOyBcclxuXHJcbi5tZW51LWl0ZW17XHJcbiAgICAubWF0LW1kYy1idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAubWF0LWljb24ubWVudS1leHBhbmQtaWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn1cclxuXHJcbi5zdWItbWVudXtcclxuICAgIEBpbmNsdWRlIG1lbnUtbGV2ZWwtcGFkZGluZygnbHRyJyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcclxuICAgIC5tYXQtbWRjLWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCIubWVudS1pdGVtIC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ubWVudS1pdGVtIC5tYXQtbWRjLWJ1dHRvbiAubWF0LWljb24ubWVudS1leHBhbmQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5tZW51LWl0ZW0gLm1hdC1tZGMtYnV0dG9uLmV4cGFuZGVkIC5tZW51LWV4cGFuZC1pY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zdWItbWVudSB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LW1kYy1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LW1kYy1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTQwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxODBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG59XG4uc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLnN1Yi1tZW51LnNob3cge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygkZGlyZWN0aW9uKXtcclxuICAgICRlbGVtOiAnJztcclxuICAgIEBmb3IgJGkgZnJvbSAzIHRocm91Z2ggMTAge1xyXG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAzLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXHJcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1tZGMtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFkbWluLW1lbnUtbGV2ZWwtcGFkZGluZygkZGlyZWN0aW9uKXtcclxuICAgICRlbGVtOiAnJztcclxuICAgIEBmb3IgJGkgZnJvbSAzIHRocm91Z2ggMTAge1xyXG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAzLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXHJcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1tZGMtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 906:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/toolbar1/toolbar1.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar1Component": () => (/* binding */ Toolbar1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/cart-overview/cart-overview.component */ 4358);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/logo/logo.component */ 6869);
/* harmony import */ var _shared_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/social-icons/social-icons.component */ 6622);
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contacts/contacts.component */ 545);















class Toolbar1Component {
  constructor(appService) {
    this.appService = appService;
    this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {}
  sidenavToggle() {
    this.onMenuIconClick.emit();
  }
  openCart() {
    this.appService.openCart(src_app_shared_cart_overview_cart_overview_component__WEBPACK_IMPORTED_MODULE_0__.CartOverviewComponent);
  }
  static #_ = this.ɵfac = function Toolbar1Component_Factory(t) {
    return new (t || Toolbar1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: Toolbar1Component,
    selectors: [["app-toolbar1"]],
    outputs: {
      onMenuIconClick: "onMenuIconClick"
    },
    decls: 13,
    vars: 2,
    consts: [["id", "top-toolbar", 1, "top-toolbar", "bg-nav"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "theme-container"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "true", "fxShow.gt-md", ""], ["id", "main-toolbar", 1, "mat-elevation-z2"], ["routerLink", "/", 1, "logo"], ["mat-icon-button", "", "matTooltip", "Cart list", 3, "click"], ["matBadgeSize", "small", "matBadgeColor", "primary", 3, "matBadge", "matBadgeHidden"]],
    template: function Toolbar1Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-contacts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-social-icons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-toolbar", 4)(6, "div", 1)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Toolbar1Component_Template_button_click_10_listener() {
          return ctx.openCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matBadge", ctx.appService.Data.totalCartCount)("matBadgeHidden", ctx.appService.Data.totalCartCount == 0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadge, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _shared_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_3__.SocialIconsComponent, _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__.ContactsComponent],
    styles: [".bg-nav[_ngcontent-%COMP%] {\n  background-color: #9F1E34 !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy90b29sYmFyMS90b29sYmFyMS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsaSUyMEV6emF0L0Rlc2t0b3AvRC1NZW51L3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy90b29sYmFyMS90b29sYmFyMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNDQSIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1uYXZ7XHJcbmJhY2tncm91bmQtY29sb3I6ICM5RjFFMzQgIWltcG9ydGFudDtcclxuY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufSIsIi5iZy1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUYxRTM0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4460:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









class UserMenuComponent {
  constructor(appService) {
    this.appService = appService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function UserMenuComponent_Factory(t) {
    return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserMenuComponent,
    selectors: [["app-user-menu"]],
    decls: 26,
    vars: 5,
    consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["userMenuTrigger", "matMenuTrigger"], [1, "mat-icon-sm", "m-0"], ["fxShow", "false", "fxShow.gt-sm", "", 1, "mx-1", "uppercase"], ["iconPositionEnd", "", 1, "mat-icon-sm", "caret"], ["xPosition", "before", 1, "app-menu-panel", "user-menu", 3, "overlapTrigger"], ["userMenu", "matMenu"], [3, "mouseleave"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "user-info"], ["src", "assets/images/others/user.jpg", "alt", "user-image", "width", "50"], [1, "m-0"], [1, "divider"], ["mat-menu-item", "", "routerLink", "/account/dashboard"], [1, "mat-icon-sm"]],
    template: function UserMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-menu", 5, 6)(11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function UserMenuComponent_Template_span_mouseleave_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Emilio Verdines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small")(18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "emilio_v");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12)(22, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, "ACCOUNT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9212:
/*!*******************************************************!*\
  !*** ./src/app/theme/directives/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./only-number.directive */ 7536);
/* harmony import */ var _mask_date_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-date.directive */ 2440);
/* harmony import */ var _phone_mask_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-mask.directive */ 4105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class DirectivesModule {
  static #_ = this.ɵfac = function DirectivesModule_Factory(t) {
    return new (t || DirectivesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: DirectivesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective, _mask_date_directive__WEBPACK_IMPORTED_MODULE_1__.MaskDateDirective, _phone_mask_directive__WEBPACK_IMPORTED_MODULE_2__.PhoneMaskDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective, _mask_date_directive__WEBPACK_IMPORTED_MODULE_1__.MaskDateDirective, _phone_mask_directive__WEBPACK_IMPORTED_MODULE_2__.PhoneMaskDirective]
  });
})();

/***/ }),

/***/ 2440:
/*!*********************************************************!*\
  !*** ./src/app/theme/directives/mask-date.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskDateDirective": () => (/* binding */ MaskDateDirective)
/* harmony export */ });
/* harmony import */ var vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-text-mask/dist/vanillaTextMask.js */ 733);
/* harmony import */ var vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);




class MaskDateDirective {
  constructor(datepickerInput, element) {
    this.datepickerInput = datepickerInput;
    this.element = element;
    this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    this.maskedInputController = vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0__.maskInput({
      inputElement: this.element.nativeElement,
      mask: this.mask,
      guide: true
    });
  }
  ngAfterViewInit() {
    this.eventSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.element.nativeElement, 'input').subscribe(_ => {
      this.datepickerInput._onInput(this.element.nativeElement.value);
    });
  }
  ngOnDestroy() {
    this.maskedInputController.destroy();
    this.eventSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function MaskDateDirective_Factory(t) {
    return new (t || MaskDateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerInput, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: MaskDateDirective,
    selectors: [["", "appMaskDate", ""]]
  });
}

/***/ }),

/***/ 7536:
/*!***********************************************************!*\
  !*** ./src/app/theme/directives/only-number.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlyNumberDirective": () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OnlyNumberDirective {
  constructor() {}
  onInputChange(e) {
    if (e.target.value.length == 0 && e.which == 48) {
      return false;
    }
    var verified = String.fromCharCode(e.which).match(/[^0-9]/g);
    if (verified) {
      e.preventDefault();
      return false;
    }
    return true;
    // var regex = new RegExp("[^0-9]");
    // var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    // if (regex.test(key)) {
    //     event.preventDefault();
    //     return false;
    // }    
  }
  static #_ = this.ɵfac = function OnlyNumberDirective_Factory(t) {
    return new (t || OnlyNumberDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: OnlyNumberDirective,
    selectors: [["input", "onlyNumber", ""]],
    hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyNumberDirective_keypress_HostBindingHandler($event) {
          return ctx.onInputChange($event);
        });
      }
    }
  });
}

/***/ }),

/***/ 4105:
/*!**********************************************************!*\
  !*** ./src/app/theme/directives/phone-mask.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneMaskDirective": () => (/* binding */ PhoneMaskDirective)
/* harmony export */ });
/* harmony import */ var vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-text-mask/dist/vanillaTextMask.js */ 733);
/* harmony import */ var vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PhoneMaskDirective {
  constructor(element) {
    this.element = element;
    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.maskedInputController = vanilla_text_mask_dist_vanillaTextMask_js__WEBPACK_IMPORTED_MODULE_0__.maskInput({
      inputElement: this.element.nativeElement,
      mask: this.mask,
      guide: true
    });
  }
  ngOnDestroy() {
    this.maskedInputController.destroy();
  }
  static #_ = this.ɵfac = function PhoneMaskDirective_Factory(t) {
    return new (t || PhoneMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: PhoneMaskDirective,
    selectors: [["", "appPhoneMask", ""]]
  });
}

/***/ }),

/***/ 6660:
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByIdPipe": () => (/* binding */ FilterByIdPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilterByIdPipe {
  transform(items, id) {
    return items.find(item => item.id == id);
  }
  static #_ = this.ɵfac = function FilterByIdPipe_Factory(t) {
    return new (t || FilterByIdPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "filterById",
    type: FilterByIdPipe,
    pure: true
  });
}

/***/ }),

/***/ 9045:
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-by-id.pipe */ 6660);
/* harmony import */ var _profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilePicture.pipe */ 3539);
/* harmony import */ var _user_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-search.pipe */ 1419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class PipesModule {
  static #_ = this.ɵfac = function PipesModule_Factory(t) {
    return new (t || PipesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PipesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterByIdPipe, _profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe, _user_search_pipe__WEBPACK_IMPORTED_MODULE_2__.UserSearchPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterByIdPipe, _profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe, _user_search_pipe__WEBPACK_IMPORTED_MODULE_2__.UserSearchPipe]
  });
})();

/***/ }),

/***/ 3539:
/*!****************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePicturePipe": () => (/* binding */ ProfilePicturePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfilePicturePipe {
  transform(input, ext = 'jpg') {
    return '../assets/images/profile/' + input + '.' + ext;
  }
  static #_ = this.ɵfac = function ProfilePicturePipe_Factory(t) {
    return new (t || ProfilePicturePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "profilePicture",
    type: ProfilePicturePipe,
    pure: true
  });
}

/***/ }),

/***/ 1419:
/*!*************************************************!*\
  !*** ./src/app/theme/pipes/user-search.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchPipe": () => (/* binding */ UserSearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UserSearchPipe {
  transform(value, args) {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.profile.name) {
          return user.profile.name.search(searchText) !== -1;
        } else {
          return user.username.search(searchText) !== -1;
        }
      });
    }
  }
  static #_ = this.ɵfac = function UserSearchPipe_Factory(t) {
    return new (t || UserSearchPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "UserSearchPipe",
    type: UserSearchPipe,
    pure: false
  });
}

/***/ }),

/***/ 1350:
/*!************************************************!*\
  !*** ./src/app/theme/utils/app-interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInterceptor": () => (/* binding */ AppInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);




class AppInterceptor {
  constructor() {}
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {}
      return event;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      const started = Date.now();
      const elapsed = Date.now() - started;
      // debugger;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function AppInterceptor_Factory(t) {
    return new (t || AppInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AppInterceptor,
    factory: AppInterceptor.ɵfac
  });
}

/***/ }),

/***/ 8955:
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator),
/* harmony export */   "matchingPasswords": () => (/* binding */ matchingPasswords),
/* harmony export */   "maxWordsValidator": () => (/* binding */ maxWordsValidator)
/* harmony export */ });
function emailValidator(control) {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return {
      invalidEmail: true
    };
  }
  return {};
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
  return group => {
    let password = group.controls[passwordKey];
    let passwordConfirmation = group.controls[passwordConfirmationKey];
    if (password.value !== passwordConfirmation.value) {
      return passwordConfirmation.setErrors({
        mismatchedPasswords: true
      });
    }
  };
}
function maxWordsValidator(maxWordsCount) {
  return function maxWordsValidator(control) {
    if (control.value) {
      let nameSplit = control.value.trim().split(' ');
      if (nameSplit.length > maxWordsCount) {
        return {
          maxNumberOfWordsExceeded: true
        };
      }
    }
    return {};
  };
}

/***/ }),

/***/ 8758:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
  _createContainer() {
    let container = document.createElement('div');
    container.classList.add('cdk-overlay-container');
    document.getElementById('app')?.appendChild(container);
    this._containerElement = container;
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵCustomOverlayContainer_BaseFactory;
    return function CustomOverlayContainer_Factory(t) {
      return (ɵCustomOverlayContainer_BaseFactory || (ɵCustomOverlayContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomOverlayContainer)))(t || CustomOverlayContainer);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CustomOverlayContainer,
    factory: CustomOverlayContainer.ɵfac
  });
}

/***/ }),

/***/ 3325:
/*!***********************************************************!*\
  !*** ./src/app/theme/utils/mat-paginator-i18n.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatPaginatorI18nService": () => (/* binding */ MatPaginatorI18nService)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



const ITEMS_PER_PAGE = 'PAGINATION.ITEMS_PER_PAGE';
const NEXT_PAGE = 'PAGINATION.NEXT_PAGE';
const PREV_PAGE = 'PAGINATION.PREV_PAGE';
const FIRST_PAGE = 'PAGINATION.FIRST_PAGE';
const LAST_PAGE = 'PAGINATION.LAST_PAGE';
class MatPaginatorI18nService extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl {
  constructor(translate) {
    super();
    this.translate = translate;
    this.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return `0 / ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} / ${length}`;
    };
    this.translate.onLangChange.subscribe(e => {
      this.getAndInitTranslations();
    });
    this.getAndInitTranslations();
  }
  getAndInitTranslations() {
    this.translate.get([ITEMS_PER_PAGE, NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE]).subscribe(translation => {
      this.itemsPerPageLabel = translation[ITEMS_PER_PAGE];
      this.nextPageLabel = translation[NEXT_PAGE];
      this.previousPageLabel = translation[PREV_PAGE];
      this.firstPageLabel = translation[FIRST_PAGE];
      this.lastPageLabel = translation[LAST_PAGE];
      this.changes.next();
    });
  }
  static #_ = this.ɵfac = function MatPaginatorI18nService_Factory(t) {
    return new (t || MatPaginatorI18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MatPaginatorI18nService,
    factory: MatPaginatorI18nService.ɵfac
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  url: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map