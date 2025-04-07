"use strict";
(self["webpackChunkmox"] = self["webpackChunkmox"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _shared_header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header-carousel/header-carousel.component */ 3075);
/* harmony import */ var _shared_menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items-carousel/menu-items-carousel.component */ 8608);












function HomeComponent_app_header_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header-carousel", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("slides", ctx_r0.slides)("contentOffsetToTop", true)("fullscreen", false);
  }
}
function HomeComponent_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td")(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_td_5_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const category_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.scrollToElement(category_r3.category_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r3.category_name, " ");
  }
}
function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h2", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-menu-items-carousel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", item_r6.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.category_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuItems", item_r6.products);
  }
}
class HomeComponent {
  constructor(doc, appSettings, appService) {
    this.doc = doc;
    this.appSettings = appSettings;
    this.appService = appService;
    this.categories = [];
    this.slides = [];
    this.product = [];
    this.fixed = false;
    this.settings = this.appSettings.settings;
  }
  onWindowScroll() {
    let num = this.doc.body.scrollTop;
    if (num > 50) {
      this.fixed = true;
    } else if (this.fixed && num < 5) {
      this.fixed = false;
    }
  }
  ngOnInit() {
    this.getMenuItems();
    this.getOffers();
  }
  getOffers() {
    this.appService.getOffers().subscribe(offers => {
      console.log(offers);
      this.initDataSource(offers.allOffers);
      this.slides = offers.allOffers;
    });
  }
  getMenuItems() {
    this.appService.getMenuItemsForUser().subscribe(menuItems => {
      this.product = menuItems.allProducts;
      console.log(this.product);
      if (document.getElementById("preloader")) {
        document.getElementById("preloader")?.classList.add("hide");
      }
      console.log(this.product);
    }, err => {
      console.log(err);
    });
  }
  initDataSource(data) {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    hostBindings: function HomeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    decls: 8,
    vars: 3,
    consts: [[1, "RouterOutlet"], [3, "slides", "contentOffsetToTop", "fullscreen", 4, "ngIf"], [1, "section", "p-0", "default", "mt-0"], [1, "table-responsive"], [1, "px-3", "w-100"], [4, "ngFor", "ngForOf"], ["fxLayout", "column-reverse", "fxLayout.xs", "column-reverse"], ["class", "theme-container", "fxFlex.md", "50", 4, "ngFor", "ngForOf"], [3, "slides", "contentOffsetToTop", "fullscreen"], ["mat-raised-button", "", 1, "uppercase", "cat-btn", 3, "click"], ["fxFlex.md", "50", 1, "theme-container"], [1, "px-4"], [1, "section-title", "mt-0", "scroll-margin-top", 3, "id"], ["scrollTargetElement", ""], [3, "menuItems"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_app_header_carousel_1_Template, 1, 3, "app-header-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HomeComponent_td_5_Template, 3, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.settings.header == "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.product);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _shared_header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_2__.HeaderCarouselComponent, _shared_menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_3__.MenuItemsCarouselComponent],
    styles: [".table-responsive[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  padding: 15px 0px;\n}\n\n.cat-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  border: 1px solid #9F1E34;\n  color: #9F1E34;\n  border-radius: 25px;\n  font-size: 13px !important;\n  font-weight: 900;\n}\n\n.scroll-margin-top[_ngcontent-%COMP%] {\n  scroll-margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxpJTIwRXp6YXQvRGVza3RvcC9ELU1lbnUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0FDRUYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbi5jYXQtYnRuIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5RjFFMzQ7XHJcbiAgY29sb3I6ICM5RjFFMzQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmb250LXNpemUgICAgOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc2Nyb2xsLW1hcmdpbi10b3B7XHJcbiAgc2Nyb2xsLW1hcmdpbi10b3A6NzVweFxyXG59XHJcblxyXG4iLCIudGFibGUtcmVzcG9uc2l2ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLmNhdC1idG4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUYxRTM0O1xuICBjb2xvcjogIzlGMUUzNDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5zY3JvbGwtbWFyZ2luLXRvcCB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA3NXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  pathMatch: 'full'
}];
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map