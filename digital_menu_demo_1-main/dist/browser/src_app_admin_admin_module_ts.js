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
    styles: [".admin-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 250px;\n  border: none !important;\n  padding-top: 56px;\n  bottom: 0;\n  top: 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 178px;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .vertical-menu-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 122px);\n}\n\n.admin-toolbar[_ngcontent-%COMP%] {\n  height: 56px;\n  position: fixed;\n  z-index: 9;\n}\n.admin-toolbar[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.admin-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-top: 72px;\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n\n.pin[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.show[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFlDV2tCO0VEVmxCLHVCQUFBO0VBQ0EsaUJDUW1CO0VEUG5CLFNBQUE7RUFDQSxNQUFBO0FFREo7QUZHSTtFQUNJLGtCQUFBO0FFRFI7QUZJSTtFQUNJLGFBQUE7QUVGUjtBRktJO0VBQ0ksMEJBQUE7QUVIUjs7QUZPQTtFQUNJLFlDVm1CO0VEV25CLGVBQUE7RUFDQSxVQUFBO0FFSko7QUZPSTtFQUNJLGtCQUFBO0FFTFI7O0FGWUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FFVFI7O0FGYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRVZKOztBRmVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FFWlo7QUZjWTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FFWmhCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hZG1pbi1zaWRlbmF2IHtcclxuICAgIHBvc2l0aW9uICAgOiBmaXhlZDtcclxuICAgIHdpZHRoICAgICAgOiAkYWRtaW4tc2lkZW5hdi13aWR0aDtcclxuICAgIGJvcmRlciAgICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogJGFkbWluLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgYm90dG9tICAgICA6IDA7XHJcbiAgICB0b3AgICAgICAgIDogMDtcclxuXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtbWVudS13cmFwcGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMnB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLmFkbWluLXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0ICA6ICRhZG1pbi10b29sYmFyLWhlaWdodDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXggOiA5O1xyXG4gICAgXHJcblxyXG4gICAgLmxvZ28tc2VjdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYWRtaW4tY29udGFpbmVyIHtcclxuICAgIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmcgICAgOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAkYWRtaW4tdG9vbGJhci1oZWlnaHQgKyAxNnB4O1xyXG4gICAgICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQgOiAxMDB2aDtcclxuICAgIH1cclxufVxyXG5cclxuLnBpbiB7XHJcbiAgICB3aWR0aCA6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWxsICA6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQgICAgICAgOiAyOHB4O1xyXG4gICAgICAgICAgICBib3JkZXIgICAgICAgOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nICAgICAgOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lICAgICAgOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgICAgOiAjNDQ0O1xyXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gICA6IDAuM3M7XHJcblxyXG4gICAgICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAgOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRmb250LWZhbWlseTogIFwiVHJ1Y3VsZW50YVwiLCBzZXJpZjtcclxuJHNlY29uZGFyeS1mb250LWZhbWlseTogXCJUcnVjdWxlbnRhXCIsIHNlcmlmOyAgXHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcclxuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XHJcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xyXG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNTYwcHg7XHJcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XHJcblxyXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDtcclxuXHJcbiRhZG1pbi10b29sYmFyLWhlaWdodDogNTZweDtcclxuJGFkbWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7IiwiLmFkbWluLXNpZGVuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbn1cbi5hZG1pbi1zaWRlbmF2IC5jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNzhweDtcbn1cbi5hZG1pbi1zaWRlbmF2IC5kaXZpZGVyIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5hZG1pbi1zaWRlbmF2IC52ZXJ0aWNhbC1tZW51LXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMnB4KTtcbn1cblxuLmFkbWluLXRvb2xiYXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbn1cbi5hZG1pbi10b29sYmFyIC5sb2dvLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZG1pbi1jb250YWluZXIgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA3MnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnBpbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG4uc2VhcmNoLWJhciBmb3JtIGlucHV0IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjNDQ0O1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5zZWFyY2gtYmFyIGZvcm0gaW5wdXQuc2hvdyB7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICB3aWR0aDogMjUwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: [".breadcrumb[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-title.active[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FEQ0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ1I7QURDSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NSIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAvLyBjb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZle1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgY29udGVudDogXCIvXCI7XHJcbiAgICB9XHJcbn0iLCIuYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5icmVhZGNydW1iIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnJlYWRjcnVtYiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgY29udGVudDogXCIvXCI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: [".menu-item .mat-mdc-button {\n  width: 100%;\n  font-weight: 400;\n  height: 42px;\n  padding-left: 10px;\n  border-radius: 0;\n}\n.menu-item .mat-mdc-button .mat-icon.menu-icon {\n  margin-right: 12px;\n  padding: 7px;\n  border-radius: 50%;\n}\n.menu-item .mat-mdc-button .mat-icon.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px;\n}\n.menu-item .mat-mdc-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 60px;\n}\n.sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 80px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 100px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 120px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 140px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 160px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 180px;\n}\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-mdc-button {\n  padding-left: 200px;\n}\n.sub-menu .mat-mdc-button {\n  padding-left: 40px;\n}\n.sub-menu.show {\n  max-height: 900px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGklMjBFenphdC9EZXNrdG9wL0QtTWVudS9zcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0RaO0FESVk7RUFHSSx5QkFBQTtBQ0ZoQjs7QURRQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUdBLHFDQUFBO0FDTko7QUNWUTtFQUtRLGtCQUFBO0FEUWhCO0FDYlE7RUFLUSxrQkFBQTtBRFdoQjtBQ2hCUTtFQUtRLG1CQUFBO0FEY2hCO0FDbkJRO0VBS1EsbUJBQUE7QURpQmhCO0FDdEJRO0VBS1EsbUJBQUE7QURvQmhCO0FDekJRO0VBS1EsbUJBQUE7QUR1QmhCO0FDNUJRO0VBS1EsbUJBQUE7QUQwQmhCO0FDL0JRO0VBS1EsbUJBQUE7QUQ2QmhCO0FEakJJO0VBQ0ksa0JBQUE7QUNtQlI7QURqQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FDbUJSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3N0eWxlcy9taXhpbnNcIjsgXHJcblxyXG4ubWVudS1pdGVteyAgICBcclxuICAgIC5tYXQtbWRjLWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAubWF0LWljb24ubWVudS1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbi5tZW51LWV4cGFuZC1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAubWVudS1leHBhbmQtaWNvbntcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgYWRtaW4tbWVudS1sZXZlbC1wYWRkaW5nKCdsdHInKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1tZGMtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDsgICAgICBcclxuICAgIH0gXHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgfSAgICBcclxufVxyXG4iLCIubWVudS1pdGVtIC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5tZW51LWl0ZW0gLm1hdC1tZGMtYnV0dG9uIC5tYXQtaWNvbi5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1lbnUtaXRlbSAubWF0LW1kYy1idXR0b24gLm1hdC1pY29uLm1lbnUtZXhwYW5kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEzcHg7XG59XG4ubWVudS1pdGVtIC5tYXQtbWRjLWJ1dHRvbi5leHBhbmRlZCAubWVudS1leHBhbmQtaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uc3ViLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1tZGMtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LW1kYy1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE0MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTgwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LW1kYy1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xufVxuLnN1Yi1tZW51IC5tYXQtbWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5zdWItbWVudS5zaG93IHtcbiAgbWF4LWhlaWdodDogOTAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMyB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMywgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtbWRjLWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhZG1pbi1tZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMyB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMywgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtbWRjLWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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