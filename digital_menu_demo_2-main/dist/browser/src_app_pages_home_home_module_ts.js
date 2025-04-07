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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logo/logo.component */ 6869);
/* harmony import */ var _shared_header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header-carousel/header-carousel.component */ 3075);
/* harmony import */ var _shared_menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/menu-items-carousel/menu-items-carousel.component */ 8608);
















function HomeComponent_app_header_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header-carousel", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("slides", ctx_r0.slides)("contentOffsetToTop", true)("fullscreen", false);
  }
}
function HomeComponent_mat_expansion_panel_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function HomeComponent_mat_expansion_panel_14_Template_mat_expansion_panel_opened_0_listener() {
      return true;
    })("closed", function HomeComponent_mat_expansion_panel_14_Template_mat_expansion_panel_closed_0_listener() {
      return false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header", 13)(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-menu-items-carousel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r2.category_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menuItems", item_r2.products);
  }
}
class HomeComponent {
  constructor(doc, appSettings, appService, cdr) {
    this.doc = doc;
    this.appSettings = appSettings;
    this.appService = appService;
    this.cdr = cdr;
    this.categories = [];
    this.slides = [];
    this.product = [];
    this.fixed = false;
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
    this.settings = this.appSettings.settings;
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
      this.cdr.detectChanges();
    });
  }
  getMenuItems() {
    this.appService.getMenuItemsForUser().subscribe(menuItems => {
      this.product = menuItems.allProducts;
      if (document.getElementById("preloader")) {
        document.getElementById("preloader")?.classList.add("hide");
      }
      this.cdr.detectChanges();
    }, err => {
      console.log(err);
    });
  }
  initDataSource(data) {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(data);
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
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 15,
    vars: 2,
    consts: [[1, "RouterOutlet", "mb-4"], [3, "slides", "contentOffsetToTop", "fullscreen", 4, "ngIf"], ["fxLayout", "column", 1, "section", "px-3", "default", "mt-5"], ["fxLayout", "row", "fxLayoutAlign", "center enter", "routerLink", "/", "color", "primary-color", 1, "logo"], ["fxFlex", "60", "fxFlex.xs", "100"], ["mat-button", "", 1, "mt-5", "location_btn"], ["color", "primary"], ["href", "https://maps.app.goo.gl/KzCj8WxT4rrPrB5r8", "target", "_blank"], [1, "text-center", "welcome", "mt-3"], ["fxLayout", "column-reverse "], ["class", "mb-3 w-100", "hideToggle", "", 3, "opened", "closed", 4, "ngFor", "ngForOf"], [3, "slides", "contentOffsetToTop", "fullscreen"], ["hideToggle", "", 1, "mb-3", "w-100", 3, "opened", "closed"], [1, "text-center", "cat-btn"], [3, "menuItems"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_app_header_carousel_1_Template, 1, 3, "app-header-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-logo", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5)(6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Cairo: 12 Abbas El Akkad, Nasr City.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Welcome to Digital Menu Resturant and Cafe!, A 10% service charge is added to all bills. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, HomeComponent_mat_expansion_panel_14_Template, 5, 2, "mat-expansion-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.settings.header == "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.product);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _shared_header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent, _shared_menu_items_carousel_menu_items_carousel_component__WEBPACK_IMPORTED_MODULE_4__.MenuItemsCarouselComponent],
    styles: [".expanded[_ngcontent-%COMP%]:hover {\n  background: #9F1E34 !important;\n}\n\n.cat-btn[_ngcontent-%COMP%] {\n  background: #9F1E34 !important;\n  margin: 0;\n}\n\n.location_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  border: 1px solid rgba(159, 30, 52, 0.1215686275);\n}\n\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 20 !important;\n}\n\n.expansion-panel-content[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #9F1E34 !important;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  justify-content: center;\n  margin: 0;\n  color: #ffffff !important;\n  font-weight: 500;\n  background: #9F1E34 !important;\n  font-size: 20px;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n@media screen and (max-width: 600px) {\n  .welcome[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 1024px) {\n  .section[_ngcontent-%COMP%] {\n    width: 75%;\n    margin: auto;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1440px) {\n  .section[_ngcontent-%COMP%] {\n    width: 60%;\n    margin: auto;\n  }\n}\n@media screen and (min-width: 1424px) and (max-width: 2560px) {\n  .section[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFFQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUFERjtBQUNGO0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBSEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhwYW5kZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM5RjFFMzQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhdC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICM5RjFFMzQgIWltcG9ydGFudDtcclxuICBtYXJnaW4gICAgOiAwO1xyXG59XHJcbi5sb2NhdGlvbl9idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZjFlMzQxZjtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiAyMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjOUYxRTM0ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbiAgICAgOiBjZW50ZXI7XHJcbiAgd2lkdGggICAgICAgICAgOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbiAgICAgICAgIDogMDtcclxuICBjb2xvciAgICAgICAgICA6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodCAgICA6IDUwMDtcclxuICBiYWNrZ3JvdW5kICAgICA6ICM5RjFFMzQgIWltcG9ydGFudDtcclxuICBmb250LXNpemUgICAgICA6IDIwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAud2VsY29tZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5zZWN0aW9uIHtcclxuICAgIHdpZHRoIDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgd2lkdGggOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQyNHB4KSBhbmQgKG1heC13aWR0aDogMjU2MHB4KSB7XHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgd2lkdGggOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
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