"use strict";
(self["webpackChunkmox"] = self["webpackChunkmox"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 1034:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.settings */ 1182);
/* harmony import */ var _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.service */ 9442);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-scrollbar */ 4203);
/* harmony import */ var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/logo/logo.component */ 6869);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ 1296);
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-menu/user-menu.component */ 7492);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 164);

















const _c0 = ["sidenav"];
class AdminComponent {
  constructor(appSettings, router, menuService, _AuthService) {
    this.appSettings = appSettings;
    this.router = router;
    this.menuService = menuService;
    this._AuthService = _AuthService;
    this.userImage = "assets/images/others/admin.jpg";
    this.menuItems = [];
    this.toggleSearchBar = true;
    this.settings = this.appSettings.settings;
    _AuthService.userData.subscribe(() => {
      //If login
      if (_AuthService.userData.getValue != null) {
        setTimeout(() => {
          _AuthService.logOut();
        }, 21600000);
      }
    });
  }
  ngOnInit() {
    if (window.innerWidth <= 960) {
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
    }
    this.menuItems = this.menuService.getMenuItems();
  }
  ngAfterViewInit() {
    if (document.getElementById("preloader")) {
      document.getElementById("preloader")?.classList.add("hide");
    }
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
        this.scrollToTop();
      }
      if (window.innerWidth <= 960) {
        this.sidenav.close();
      }
    });
    this.menuService.expandActiveSubMenu(this.menuService.getMenuItems());
  }
  toggleSidenav() {
    this.sidenav.toggle();
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
        window.scrollTo(0, 0);
      });
    }
  }
  onWindowResize() {
    if (window.innerWidth <= 960) {
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
    } else {
      this.settings.adminSidenavIsOpened = true;
      this.settings.adminSidenavIsPinned = true;
    }
  }
  static #_ = this.ɵfac = function AdminComponent_Factory(t) {
    return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AdminComponent,
    selectors: [["app-admin"]],
    viewQuery: function AdminComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    hostBindings: function AdminComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function AdminComponent_resize_HostBindingHandler() {
          return ctx.onWindowResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
      }
    },
    decls: 20,
    vars: 4,
    consts: [["color", "primary", 1, "admin-toolbar", "mat-elevation-z2"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 3, "click"], [1, "logo-section"], ["routerLink", "/"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["fxShow", "true", "fxShow.gt-xs", ""], [1, "admin-container"], ["autoFocus", "true", 1, "admin-sidenav", "mat-elevation-z6", 3, "opened", "mode"], ["sidenav", ""], ["pointerEventsMethod", "scrollbar", "visibility", "hover"], [3, "menuItems", "menuParentId"]],
    template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_3_listener() {
          return ctx.toggleSidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-messages", 7)(11, "app-user-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-drawer-container", 8)(13, "mat-drawer", 9, 10)(15, "ng-scrollbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-admin-menu", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-breadcrumb")(19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("opened", ctx.settings.adminSidenavIsOpened)("mode", ctx.settings.adminSidenavIsPinned ? "side" : "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("menuItems", ctx.menuItems)("menuParentId", 0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawerContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_15__.NgScrollbar, _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LogoComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_5__.UserMenuComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent],
    styles: [".admin-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 250px;\n  border: none !important;\n  padding-top: 56px;\n  bottom: 0;\n  top: 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 178px;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .vertical-menu-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 122px);\n}\n\n.admin-toolbar[_ngcontent-%COMP%] {\n  height: 56px;\n  position: fixed;\n  z-index: 9;\n}\n.admin-toolbar[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.admin-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-top: 72px;\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n\n.pin[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.show[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsWUNXa0I7RURWbEIsdUJBQUE7RUFDQSxpQkNRbUI7RURQbkIsU0FBQTtFQUNBLE1BQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBS0k7RUFDSSwwQkFBQTtBQUhSOztBQU9BO0VBQ0ksWUNWbUI7RURXbkIsZUFBQTtFQUNBLFVBQUE7QUFKSjtBQU9JO0VBQ0ksa0JBQUE7QUFMUjs7QUFZSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFUUjs7QUFhQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVko7O0FBZVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFaWjtBQWNZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFaaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmFkbWluLXNpZGVuYXYge1xyXG4gICAgcG9zaXRpb24gICA6IGZpeGVkO1xyXG4gICAgd2lkdGggICAgICA6ICRhZG1pbi1zaWRlbmF2LXdpZHRoO1xyXG4gICAgYm9yZGVyICAgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAkYWRtaW4tdG9vbGJhci1oZWlnaHQ7XHJcbiAgICBib3R0b20gICAgIDogMDtcclxuICAgIHRvcCAgICAgICAgOiAwO1xyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXZpZGVyIHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTIycHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRtaW4tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQgIDogJGFkbWluLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleCA6IDk7XHJcbiAgICBcclxuXHJcbiAgICAubG9nby1zZWN0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5hZG1pbi1jb250YWluZXIge1xyXG4gICAgLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZyAgICA6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6ICRhZG1pbi10b29sYmFyLWhlaWdodCArIDE2cHg7XHJcbiAgICAgICAgYm94LXNpemluZyA6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodCA6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGluIHtcclxuICAgIHdpZHRoIDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGwgIDogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgICA6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlciAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgICAgICA6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG91dGxpbmUgICAgICA6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yICAgICAgICA6ICM0NDQ7XHJcbiAgICAgICAgICAgIHdpZHRoICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiAgIDogMC4zcztcclxuXHJcbiAgICAgICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoICA6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGZvbnQtZmFtaWx5OiAgXCJUcnVjdWxlbnRhXCIsIHNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQtZmFtaWx5OiBcIlRydWN1bGVudGFcIiwgc2VyaWY7ICBcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA1NjBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4O1xyXG5cclxuJGFkbWluLXRvb2xiYXItaGVpZ2h0OiA1NnB4O1xyXG4kYWRtaW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDsiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ 1034);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 1296);
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-menu/user-menu.component */ 7492);
/* harmony import */ var _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fullscreen/fullscreen.component */ 9483);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [{
  path: '',
  component: _admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent,
  children: [{
    path: 'menu-items',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_menu-items_menu-items_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu-items/menu-items.module */ 7485)).then(m => m.MenuItemsModule)
  }]
}];
class AdminModule {
  static #_ = this.ɵfac = function AdminModule_Factory(t) {
    return new (t || AdminModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AdminModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_3__.UserMenuComponent, _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__.FullScreenComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 164:
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.service */ 9442);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);









const _c0 = function (a0) {
  return [a0];
};
function BreadcrumbComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", i_r3 == ctx_r1.breadcrumbs.length - 1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, breadcrumb_r2.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", i_r3 != ctx_r1.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r2.name);
  }
}
function BreadcrumbComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BreadcrumbComponent_div_0_div_3_Template, 5, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
  }
}
class BreadcrumbComponent {
  constructor(appSettings, router, activatedRoute, title, menuService) {
    this.appSettings = appSettings;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.title = title;
    this.menuService = menuService;
    this.pageTitle = "";
    this.breadcrumbs = [];
    this.settings = this.appSettings.settings;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.breadcrumbs = [];
        this.parseRoute(this.router.routerState.snapshot.root);
        this.pageTitle = "";
        this.breadcrumbs.forEach(breadcrumb => {
          this.pageTitle += " > " + breadcrumb.name;
        });
        this.title.setTitle(this.settings.name + this.pageTitle);
      }
    });
  }
  parseRoute(node) {
    if (node.data["breadcrumb"]) {
      if (node.url.length) {
        let urlSegments = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        let url = urlSegments.map(urlSegment => {
          return urlSegment.path;
        }).join("/");
        this.breadcrumbs.push({
          name: node.data["breadcrumb"],
          url: "/" + url
        });
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
  closeSubMenus() {
    this.menuService.closeAllSubMenus();
  }
  static #_ = this.ɵfac = function BreadcrumbComponent_Factory(t) {
    return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BreadcrumbComponent,
    selectors: [["app-breadcrumb"]],
    decls: 1,
    vars: 1,
    consts: [["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-2"], ["fxLayout", "row", 1, "breadcrumb"], ["class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item"], [3, "hidden", "routerLink"], [1, "breadcrumb-title", "active", 3, "hidden"]],
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 4, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.router.url != "/admin");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard],
    styles: [".breadcrumb[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-title.active[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLHFCQUFBO0FBRVI7QUFDSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ0k7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYntcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIC8vIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgICAgICBjb250ZW50OiBcIi9cIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9483:
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenComponent": () => (/* binding */ FullScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




const _c0 = ["expand"];
const _c1 = ["compress"];
function FullScreenComponent_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FullScreenComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const document = window.document;
class FullScreenComponent {
  constructor() {
    this.toggle = false;
  }
  requestFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else {}
  }
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else {}
  }
  getFullscreen() {
    if (this.expand) {
      this.requestFullscreen(document.documentElement);
    }
    if (this.compress) {
      this.exitFullscreen();
    }
  }
  onFullScreenChange() {
    let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    if (fullscreenElement != null) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
  static #_ = this.ɵfac = function FullScreenComponent_Factory(t) {
    return new (t || FullScreenComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FullScreenComponent,
    selectors: [["app-fullscreen"]],
    viewQuery: function FullScreenComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.expand = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.compress = _t.first);
      }
    },
    hostBindings: function FullScreenComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenComponent_click_HostBindingHandler() {
          return ctx.getFullscreen();
        })("resize", function FullScreenComponent_resize_HostBindingHandler() {
          return ctx.onFullScreenChange();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 3,
    vars: 2,
    consts: [["mat-icon-button", "", 1, "full-screen"], [4, "ngIf"], ["expand", ""], ["compress", ""]],
    template: function FullScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FullScreenComponent_mat_icon_1_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullScreenComponent_mat_icon_2_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggle);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1296:
/*!*********************************************************!*\
  !*** ./src/app/admin/components/menu/menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.service */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);








const _c0 = function () {
  return ["/admin/menu-items/categories"];
};
const _c1 = function () {
  return ["/admin/menu-items/list"];
};
const _c2 = function () {
  return ["/admin/menu-items/offers"];
};
class MenuComponent {
  constructor(appSettings, menuService) {
    this.appSettings = appSettings;
    this.menuService = menuService;
    this.menuItems = [];
    this.menuParentId = 0;
    this.parentMenu = [];
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {
    this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }
  onClick(menuId) {
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeOtherSubMenus(this.menuItems, menuId);
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-admin-menu"]],
    inputs: {
      menuItems: "menuItems",
      menuParentId: "menuParentId"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])],
    decls: 16,
    vars: 6,
    consts: [[1, "bg"], ["mat-button", "", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink"], [1, "menu-icon", "ml-2"], [1, "menu-title"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 1)(7, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Menu Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 1)(12, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: [".menu-item .mat-mdc-button {\n  width: 100%;\n  font-weight: 400;\n  height: 42px;\n  padding-left: 10px;\n  border-radius: 0;\n}\n.menu-item .mat-mdc-button .mat-icon.menu-icon {\n  margin-right: 12px;\n  padding: 7px;\n  border-radius: 50%;\n}\n.menu-item .mat-mdc-button .mat-icon.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px;\n}\n.menu-item .mat-mdc-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 60px;\n}\n.sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 80px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 100px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 120px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 140px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 160px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 180px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 200px;\n}\n.sub-menu .mat-mdc-button {\n  padding-left: 40px;\n}\n.sub-menu.show {\n  max-height: 900px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBR1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURaO0FBR1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRFo7QUFJWTtFQUdJLHlCQUFBO0FBRmhCOztBQVFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUFOSjtBQ1ZRO0VBS1Esa0JBQUE7QURRaEI7QUNiUTtFQUtRLGtCQUFBO0FEV2hCO0FDaEJRO0VBS1EsbUJBQUE7QURjaEI7QUNuQlE7RUFLUSxtQkFBQTtBRGlCaEI7QUN0QlE7RUFLUSxtQkFBQTtBRG9CaEI7QUN6QlE7RUFLUSxtQkFBQTtBRHVCaEI7QUM1QlE7RUFLUSxtQkFBQTtBRDBCaEI7QUMvQlE7RUFLUSxtQkFBQTtBRDZCaEI7QUFqQkk7RUFDSSxrQkFBQTtBQW1CUjtBQWpCSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUFtQlIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL21peGluc1wiOyBcclxuXHJcbi5tZW51LWl0ZW17ICAgIFxyXG4gICAgLm1hdC1tZGMtYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIC5tYXQtaWNvbi5tZW51LWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29uLm1lbnUtZXhwYW5kLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIC5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBhZG1pbi1tZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LW1kYy1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59XHJcbiIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMyB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMywgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtbWRjLWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhZG1pbi1tZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMyB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMywgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtbWRjLWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5932:
/*!*****************************************************!*\
  !*** ./src/app/admin/components/menu/menu.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
  constructor(id = 0, title = "", routerLink, href, icon, target, hasSubMenu = false, parentId = 0) {
    this.id = id;
    this.title = title;
    this.routerLink = routerLink;
    this.href = href;
    this.icon = icon;
    this.target = target;
    this.hasSubMenu = hasSubMenu;
    this.parentId = parentId;
  }
}

/***/ }),

/***/ 9442:
/*!*******************************************************!*\
  !*** ./src/app/admin/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 4838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class MenuService {
  constructor(location, router) {
    this.location = location;
    this.router = router;
  }
  getMenuItems() {
    return _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems;
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
        menuItem.classList.remove("expanded");
      } else {
        subMenu.classList.add("show");
        menuItem.classList.add("expanded");
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
            menuItem.classList.remove("expanded");
          }
        }
      }
    });
  }
  closeAllSubMenus() {
    _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach(item => {
      let subMenu = document.getElementById("sub-menu-" + item.id);
      let menuItem = document.getElementById("menu-item-" + item.id);
      if (subMenu) {
        if (subMenu.classList.contains("show")) {
          subMenu.classList.remove("show");
          menuItem.classList.remove("expanded");
        }
      }
    });
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 4838:
/*!***********************************************!*\
  !*** ./src/app/admin/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ 5932);

const menuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(20, 'ADMIN_NAV.MENU_ITEMS', null, null, 'grid_on', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(21, 'ADMIN_NAV.CATEGORIES', '/admin/menu-items/categories', null, 'category', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(22, 'ADMIN_NAV.MENU_ITEMS_LIST', '/admin/menu-items/list', null, 'list', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(24, 'ADMIN_NAV.ADD_MENU_ITEM', '/admin/menu-items/add', null, 'add_circle_outline', null, false, 20)];

/***/ }),

/***/ 7492:
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);






class UserMenuComponent {
  constructor(_AuthService) {
    this._AuthService = _AuthService;
    this.userImage = 'assets/images/others/admin.jpg';
  }
  ngOnInit() {}
  callLogOut() {
    this._AuthService.logOut();
  }
  static #_ = this.ɵfac = function UserMenuComponent_Factory(t) {
    return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserMenuComponent,
    selectors: [["app-user-menu"]],
    decls: 13,
    vars: 2,
    consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["userMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "admin-user-menu", 3, "overlapTrigger"], ["userMenu", "matMenu"], [3, "mouseleave"], [1, "divider"], ["mat-menu-item", "", "routerLink", "/login", 3, "click"]],
    template: function UserMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", 2, 3)(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function UserMenuComponent_Template_span_mouseleave_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.closeMenu());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_8_listener() {
          return ctx.callLogOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map