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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='nav-container vwidth-100'>\n  <nav class=\"vwidth-100 height-30 bg-accent\">\n    <logo-anime class='ui-button'></logo-anime>\n    <h4 class=\"nav-container__subheader\" i18n=\"Subheader|Subheader message@@subheaderMessage\">A {{language}} online verb conjugator</h4>\n    <div class=\"nav-container__content\">\n      <ul class=\"navbar navbar-nav\">\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"wordmaker\" i18n=\"word maker|Title of word maker page@@wordMaker\">Word Maker</a>\n        </li>\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"tableviewer\" i18n=\"table viewer|Title of table viewer page@@tableViewer\">Table Viewer</a>\n        </li>\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"info\" i18n=\"info page|Title of info page@@infoPage\">Info</a>\n        </li>\n        <li class=\"navbar__item\" [routerLinkActive]=\"['navbar__item--active']\">\n          <a class=\"navbar__link\" routerLink=\"about\" i18n=\"about page|Title of about page@@aboutPage\">About</a>\n        </li>\n        <li class=\"navbar__item\">\n          <a class=\"navbar__link\" (click)=\"openSettings()\" i18n=\"Settings|Title of settings@@settings\">Settings</a>\n        </li>\n      </ul>\n    </div>\n    <button class=\"nav-container__content--mobile\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon aria-label=\"Show toolbar\" i18n=\"Settings|Title of settings@@settings\">menu</mat-icon>\n    </button>\n  </nav>\n</div>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item routerLink=\"wordmaker\" i18n=\"word maker|Title of word maker page@@wordMaker\">Word Maker</button>\n  <button mat-menu-item routerLink=\"tableviewer\" i18n=\"table viewer|Title of table viewer page@@tableViewer\">Table Viewer</button>\n  <button mat-menu-item routerLink=\"info\" i18n=\"info page|Title of info page@@infoPage\">Info</button>\n  <button mat-menu-item routerLink=\"about\" i18n=\"about page|Title of about page@@infoPage\">About</button>\n  <button mat-menu-item (click)=\"openSettings()\" i18n=\"Settings|Title of settings@@settings\">Settings</button>\n</mat-menu>\n<header class='bg-img'>\n  <page-info *ngIf=\"router.url === '/info'\"></page-info>\n  <page-tableviewer *ngIf=\"router.url === '/tableviewer'\"></page-tableviewer>\n  <page-wordmaker *ngIf=\"router.url === '/wordmaker'\"></page-wordmaker>\n  <page-about *ngIf=\"router.url === '/about'\"></page-about>\n</header>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MainApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainApp", function() { return MainApp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _components_shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/settings/settings.component */ "./src/app/components/shared/settings/settings.component.ts");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






// Firebase

// Angular Material

var MainApp = /** @class */ (function () {
    function MainApp(authService, router, settingsService, dialog) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.settingsService = settingsService;
        this.dialog = dialog;
        this.navbarCollapsed = true;
        this.language = _global__WEBPACK_IMPORTED_MODULE_3__["MetaData"].language;
        this.title = _global__WEBPACK_IMPORTED_MODULE_3__["MetaData"].title;
        this.selected_level = 'advanced';
        this.settings = {
            'level': { 'profile': "advanced", "arg_label": "ag/pat", 'gloss_tier': true, 'english_tier': false, 'translation_tier': true, 'breakdown_tier': true },
            'highlight': { 'root': true, 'pronoun': true, 'aspect': true, 'prepronominal_prefix': true, 'tmp_affix': true, 'post_aspectual_suffix': true },
            'test_api': false
        };
        this.authService.anonSignIn();
        this.levels = this.settingsService.levels;
        this.settingsService.settings.subscribe(function (settings) { return _this.settings = settings; });
    }
    MainApp.prototype.ngAfterViewInit = function () {
        animejs__WEBPACK_IMPORTED_MODULE_5__({
            targets: ".nav-item",
            translateX: 0,
            translateY: 200,
            delay: function (el, i) { return 1000 + (i * 100); },
            duration: function (el, i) { return 500 + (i * 350); },
            easing: 'easeInOutQuad'
        });
    };
    // prepareRoute(outlet: RouterOutlet) {
    //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    // }
    MainApp.prototype.update = function (setting) {
        this.settingsService.update(setting);
    };
    MainApp.prototype.chooseLevel = function (profile) {
        this.settings.level = this.levels.filter(function (level) { return level['profile'] === profile; })[0];
        this.update(this.settings);
    };
    MainApp.prototype.openSettings = function () {
        var dialogRef = this.dialog.open(_components_shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], {
            width: '50vw',
            maxWidth: '550px',
            height: '60vh',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MainApp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], MainApp);
    return MainApp;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");

// Core






// Material Design


// Services


// Pipes

// Firebase





// Extras

var routes = [
    { path: '', redirectTo: 'wordmaker', pathMatch: 'full' },
    // {
    //   path: 'wordmaker',
    //   component: MainApp,
    //   children: [
    //     { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    //     { path: 'mobiledemo', component: MobiledemoComponent },
    //   ]
    // },
    { path: 'wordmaker', component: _components__WEBPACK_IMPORTED_MODULE_6__["WordmakerPage"] },
    { path: 'tableviewer', component: _components__WEBPACK_IMPORTED_MODULE_6__["TableviewerPage"] },
    { path: 'info', component: _components__WEBPACK_IMPORTED_MODULE_6__["TableviewerPage"] },
    { path: 'about', component: _components__WEBPACK_IMPORTED_MODULE_6__["AboutPage"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["MainApp"],
                _components__WEBPACK_IMPORTED_MODULE_6__["AboutPage"],
                _components__WEBPACK_IMPORTED_MODULE_6__["InfoPage"],
                _components__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TableviewerPage"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WordmakerPage"],
                _components__WEBPACK_IMPORTED_MODULE_6__["VerbPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TempPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["PersPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["ConjPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WordmakerConjPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WordmakerPersPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WordmakerTempPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WordmakerVerbPanel"],
                _components__WEBPACK_IMPORTED_MODULE_6__["ErrorSnackComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["LogoAnime"]
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_17__["NgxEchartsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabase"],
                // { provide: ErrorHandler, useClass: MyErrorHandler },
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AffixService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["ChartService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["ConjugationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["PronounService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["SelectionService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["SettingsService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["TierService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["VerbService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["MainApp"]],
            entryComponents: [_components__WEBPACK_IMPORTED_MODULE_6__["ErrorSnackComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["LogoAnime"], _components__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: SettingsComponent, ErrorSnackComponent, LogoAnime, AboutPage, InfoPage, TableviewerPage, TempPanel, VerbPanel, PersPanel, ConjPanel, WordmakerPage, WordmakerConjPanel, WordmakerPersPanel, WordmakerTempPanel, WordmakerVerbPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/settings/settings.component */ "./src/app/components/shared/settings/settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return _shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"]; });

/* harmony import */ var _shared_error_error_snack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/error/error.snack */ "./src/app/components/shared/error/error.snack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorSnackComponent", function() { return _shared_error_error_snack__WEBPACK_IMPORTED_MODULE_1__["ErrorSnackComponent"]; });

/* harmony import */ var _shared_logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/logo/logo */ "./src/app/components/shared/logo/logo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoAnime", function() { return _shared_logo_logo__WEBPACK_IMPORTED_MODULE_2__["LogoAnime"]; });

/* harmony import */ var _pages_about_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about */ "./src/app/components/pages/about/about.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return _pages_about_about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]; });

/* harmony import */ var _pages_info_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/info/info */ "./src/app/components/pages/info/info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return _pages_info_info__WEBPACK_IMPORTED_MODULE_4__["InfoPage"]; });

/* harmony import */ var _pages_tableviewer_tableviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tableviewer/tableviewer */ "./src/app/components/pages/tableviewer/tableviewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableviewerPage", function() { return _pages_tableviewer_tableviewer__WEBPACK_IMPORTED_MODULE_5__["TableviewerPage"]; });

/* harmony import */ var _pages_tableviewer_components_temp_panel_temp_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tableviewer/components/temp-panel/temp-panel.component */ "./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TempPanel", function() { return _pages_tableviewer_components_temp_panel_temp_panel_component__WEBPACK_IMPORTED_MODULE_6__["TempPanel"]; });

/* harmony import */ var _pages_tableviewer_components_verb_panel_verb_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/tableviewer/components/verb-panel/verb-panel.component */ "./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerbPanel", function() { return _pages_tableviewer_components_verb_panel_verb_panel_component__WEBPACK_IMPORTED_MODULE_7__["VerbPanel"]; });

/* harmony import */ var _pages_tableviewer_components_pers_panel_pers_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tableviewer/components/pers-panel/pers-panel.component */ "./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersPanel", function() { return _pages_tableviewer_components_pers_panel_pers_panel_component__WEBPACK_IMPORTED_MODULE_8__["PersPanel"]; });

/* harmony import */ var _pages_tableviewer_components_conj_panel_conj_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/tableviewer/components/conj-panel/conj-panel.component */ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConjPanel", function() { return _pages_tableviewer_components_conj_panel_conj_panel_component__WEBPACK_IMPORTED_MODULE_9__["ConjPanel"]; });

/* harmony import */ var _pages_wordmaker_wordmaker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/wordmaker/wordmaker */ "./src/app/components/pages/wordmaker/wordmaker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordmakerPage", function() { return _pages_wordmaker_wordmaker__WEBPACK_IMPORTED_MODULE_10__["WordmakerPage"]; });

/* harmony import */ var _pages_wordmaker_components_wordmaker_conj_panel_wordmaker_conj_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component */ "./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordmakerConjPanel", function() { return _pages_wordmaker_components_wordmaker_conj_panel_wordmaker_conj_panel_component__WEBPACK_IMPORTED_MODULE_11__["WordmakerConjPanel"]; });

/* harmony import */ var _pages_wordmaker_components_wordmaker_pers_panel_wordmaker_pers_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component */ "./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordmakerPersPanel", function() { return _pages_wordmaker_components_wordmaker_pers_panel_wordmaker_pers_panel_component__WEBPACK_IMPORTED_MODULE_12__["WordmakerPersPanel"]; });

/* harmony import */ var _pages_wordmaker_components_wordmaker_temp_panel_wordmaker_temp_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component */ "./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordmakerTempPanel", function() { return _pages_wordmaker_components_wordmaker_temp_panel_wordmaker_temp_panel_component__WEBPACK_IMPORTED_MODULE_13__["WordmakerTempPanel"]; });

/* harmony import */ var _pages_wordmaker_components_wordmaker_verb_panel_wordmaker_verb_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component */ "./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordmakerVerbPanel", function() { return _pages_wordmaker_components_wordmaker_verb_panel_wordmaker_verb_panel_component__WEBPACK_IMPORTED_MODULE_14__["WordmakerVerbPanel"]; });


















/***/ }),

/***/ "./src/app/components/pages/about/about.html":
/*!***************************************************!*\
  !*** ./src/app/components/pages/about/about.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page__content shadow-box vmargin-right-20 vmargin-left-20\">\n  <p>\n    **This is sample text**Here is where information about the project should go.**This\n    is sample text**\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/about/about.scss":
/*!***************************************************!*\
  !*** ./src/app/components/pages/about/about.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/about/about.ts":
/*!*************************************************!*\
  !*** ./src/app/components/pages/about/about.ts ***!
  \*************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");




var AboutPage = /** @class */ (function () {
    function AboutPage(router) {
        this.router = router;
        this.title = _global__WEBPACK_IMPORTED_MODULE_3__["MetaData"].title;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-about',
            template: __webpack_require__(/*! ./about.html */ "./src/app/components/pages/about/about.html"),
            styles: [__webpack_require__(/*! ./about.scss */ "./src/app/components/pages/about/about.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/components/pages/info/info.html":
/*!*************************************************!*\
  !*** ./src/app/components/pages/info/info.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay page__content vmargin-right-20 vmargin-left-20 abs\" *ngIf=\"instruction\">\n    <button (click)=\"exit()\" class='top-25 exit float-right' mat-icon-button>\n        <mat-icon aria-label=\"hide overlay\">highlight_off</mat-icon>\n    </button>\n    <p class=\"margin-top-50\">{{language}} is <em>really</em> complex, and {{title}} is able to show a lot of that complexity.\n        Give it a few seconds, but down below you will see a tiny dot appear named {{title}}. This is a tool that lets you\n        explore all of the conjugations possible with {{title}}. You can drag it around, click further and further into the\n        model, and use your mouse to zoom in and out. You can close this instruction with the 'x' above. Have fun!</p>\n</div>\n\n<div *ngIf=\"response | async\" echarts [options]=\"response | async\" class=\"echart\"></div>"

/***/ }),

/***/ "./src/app/components/pages/info/info.scss":
/*!*************************************************!*\
  !*** ./src/app/components/pages/info/info.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".echart {\n  height: 100%;\n  min-height: 800px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW5mby9pbmZvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW5mby9pbmZvLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWNoYXJ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/info/info.ts":
/*!***********************************************!*\
  !*** ./src/app/components/pages/info/info.ts ***!
  \***********************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var echarts_lib_chart_treemap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/chart/treemap */ "./node_modules/echarts/lib/chart/treemap.js");
/* harmony import */ var echarts_lib_chart_treemap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_treemap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");






var InfoPage = /** @class */ (function () {
    function InfoPage(router, chartService) {
        this.router = router;
        this.chartService = chartService;
        this.title = _global__WEBPACK_IMPORTED_MODULE_5__["MetaData"].title;
        this.language = _global__WEBPACK_IMPORTED_MODULE_5__["MetaData"].language;
        this.instruction = true;
    }
    InfoPage.prototype.ngOnInit = function () {
        this.response = this.chartService.returnAllData();
        // this.response.subscribe(r =>{ this.res = r; console.log(r)})
    };
    InfoPage.prototype.exit = function () {
        this.instruction = false;
    };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-info',
            template: __webpack_require__(/*! ./info.html */ "./src/app/components/pages/info/info.html"),
            styles: [__webpack_require__(/*! ./info.scss */ "./src/app/components/pages/info/info.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["ChartService"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel'>\n  <div *ngIf=\"show_toolbar\" class='panel__header'>\n    <h3 class=\"panel__title\">Conjugation toolbar</h3>\n    <div class='panel__toolbar toolbar'>\n      <button class=\"conjugate mat-accent\" mat-raised-button (click)=\"conjugate()\">Conjugate</button>\n      <select *ngIf=\"showExplorer\" [(ngModel)]=\"depth\" (ngModelChange)=\"conjugate()\" class=\"toolbar__tool ui-button\"\n        matTooltip=\"Select how many nodes to display\" [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\" [matTooltipPosition]=\"tooltipPosition\">\n        <option value=\"0\">0</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n      </select>\n      <button *ngIf=\"showExplorer\" class=\"toolbar__tool ui-button\" mat-icon-button (click)=\"order = !order; conjugate()\"\n        matTooltip=\"Switch pronoun and tense nodes\" [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\" [matTooltipPosition]=\"tooltipPosition\">\n        <mat-icon aria-label=\"Switch pronoun and temp\">cached</mat-icon>\n      </button>\n      <button class=\"ui-button toolbar__tool\" mat-icon-button (click)=\"toggleExplorer()\"\n        matTooltip=\"Switch between grid and tree views\" [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\" [matTooltipPosition]=\"tooltipPosition\">\n        <mat-icon *ngIf=\"!showExplorer\" aria-label=\"Conjugate\">create</mat-icon>\n        <mat-icon *ngIf=\"showExplorer\" aria-label=\"Conjugate\">grid_on</mat-icon>\n      </button>\n      <button (click)=\"download()\" *ngIf=\"!showExplorer\" class=\"ui-button toolbar__tool\" mat-icon-button\n        matTooltip=\"Download conjugations as file\" [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\" [matTooltipPosition]=\"tooltipPosition\">\n        <mat-icon aria-label=\"Download conjugations\">file_copy</mat-icon>\n      </button>\n      <button (click)=\"show_toolbar = !show_toolbar\" class=\"ui-button toolbar__tool\" mat-icon-button\n        matTooltip=\"Hide toolbar\" [matTooltipShowDelay]=\"showDelay.value\" [matTooltipHideDelay]=\"hideDelay.value\"\n        [matTooltipPosition]=\"tooltipPosition\">\n        <mat-icon aria-label=\"Hide toolbar\">cancel</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"panel__underline height-5\">\n    <hr *ngIf=\"show_toolbar\" />\n    <button *ngIf=\"!show_toolbar\" (click)=\"show_toolbar = !show_toolbar\" class=\"float-right ui-button toolbar__tool\"\n      mat-icon-button matTooltip=\"Show toolbar\" [matTooltipShowDelay]=\"showDelay.value\"\n      [matTooltipHideDelay]=\"hideDelay.value\" [matTooltipPosition]=\"tooltipPosition\">\n      <mat-icon aria-label=\"Show toolbar\">add_circle</mat-icon>\n    </button>\n  </div>\n  <div class=\"panel__content\">\n    <div>\n      <h3 class=\"desktop-only center-text margin-top-100 padding-20\" *ngIf=\"!response$ && !showExplorer\">Please select\n        one or more boxes from the <b>Person</b>, <b>Time</b> and <b>Verb</b> panels\n        and then press the\n        enter key or conjugate button to see your selection</h3>\n      <h3 class=\"mobile-only padding-15 center-text\" *ngIf=\"!response$ && !showExplorer\">Please select one or more boxes\n        from the 'Person', 'Time' and 'Verb' panels.\n        <br> and then press the button above to conjugate!</h3>\n      <ng-template #spinner>\n        <ng-container *ngIf='loading && !(response$ | async)'>\n          <mat-spinner class='centered margin-top-100'></mat-spinner>\n        </ng-container>\n      </ng-template>\n    </div>\n\n    <div *ngIf=\"showExplorer\" class=\"full-width full-height\">\n      <div *ngIf=\"chart_response\">\n        <div #explorer echarts [options]=\"chart_response\" class=\"demo-chart\"></div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!showExplorer\">\n      <div id=\"table-container\" class='rel' *ngIf=\"response$ | async as response; else spinner\">\n        <div class='error__container' *ngIf=\"isString(response)\">\n          <h3 class=\"error__header\">Error</h3>\n          <p class=\"error__message\">{{response}}</p>\n          <p class=\"error__message\">Please remove some of the checked options described above and try again.</p>\n        </div>\n        <table class='full-width abs' *ngIf=\"!isString(response)\">\n          <thead>\n            <tr>\n              <th>\n                <h3>{{ language }}</h3>\n              </th>\n              <th *ngIf=\"settings?.level.english_tier || settings?.level.translation_tier\">\n                <h3>English</h3>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class='b--bottom' *ngFor=\"let conj of response\">\n              <td class='center-text'>\n                <h3 id=\"main\">\n                  <span *ngFor=\"let item of conj['main']\" class=\"{{item['classes']}} no-padding header-text\"\n                    [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]}}</span>\n                </h3>\n                <h5 id=\"main\" *ngIf=\"settings?.level.breakdown_tier\">\n                  <span *ngFor=\"let item of conj['main']\" class=\"{{item['classes']}} no-padding header-text\"\n                    [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]}}\n                    <span class=\"gloss-dividers header-text\"\n                      *ngIf=\"conj['main'].indexOf(item) < conj['main'].length - 1\">-</span>\n                  </span>\n                </h5>\n                <h5 id=\"main\" *ngIf=\"settings?.level.gloss_tier\">\n                  <span *ngFor=\"let item of conj['secondary']\" class=\"{{item['classes']}} no-padding header-text\"\n                    [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]\n                    | decapitalize}}\n                    <span class=\"gloss-dividers header-text\"\n                      *ngIf=\"conj['secondary'].indexOf(item) < conj['secondary'].length - 1\">-</span>\n                  </span>\n                </h5>\n              </td>\n              <td class='center-text'>\n                <h4 id=\"main\" *ngIf=\"settings?.level.translation_tier\" class=\"no-padding header-text\">\n                  <span class='translation'>{{ conj['translation'] }}</span>\n                </h4>\n                <h5 id=\"main\" *ngIf=\"settings?.level.english_tier\">\n                  <span *ngFor=\"let item of conj['ternary']\" class=\"{{item['classes']}} no-padding header-text\"\n                    [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]\n                    | decapitalize }}\n                    <span class=\"gloss-dividers header-text\"\n                      *ngIf=\"conj['ternary'].indexOf(item) < conj['ternary'].length - 1\">-</span>\n                  </span>\n                </h5>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.conjugate {\n  line-height: 1.875em !important;\n  padding: 0 1em !important;\n  margin-right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGFibGV2aWV3ZXIvY29tcG9uZW50cy9jb25qLXBhbmVsL2NvbmotcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90YWJsZXZpZXdlci9jb21wb25lbnRzL2NvbmotcGFuZWwvY29uai1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5jb25qdWdhdGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg3NWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConjPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjPanel", function() { return ConjPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../global */ "./src/app/global.ts");





var ConjPanel = /** @class */ (function () {
    function ConjPanel(settingsService, conjugationService, selectionService, chartService) {
        this.settingsService = settingsService;
        this.conjugationService = conjugationService;
        this.selectionService = selectionService;
        this.chartService = chartService;
        this.showDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1000);
        this.hideDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](200);
        this.tooltipPosition = 'above';
        this.language = _global__WEBPACK_IMPORTED_MODULE_4__["MetaData"].language;
        this.showExplorer = false;
        this.loading = false;
        this.show_toolbar = true;
        this.order = true;
        this.depth = 1;
    }
    ConjPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.settings.subscribe(function (settings) { _this.settings = settings; });
    };
    ConjPanel.prototype.ngOnChanges = function () {
    };
    ConjPanel.prototype.conjugate = function () {
        var _this = this;
        this.loading = true;
        if (!this.showExplorer) {
            this.response$ = this.conjugationService.conjugateTable(this.selectionService.selection);
            console.log(this.response$);
            this.response$.subscribe(function (x) { return console.log(x); });
            return this.response$;
        }
        else {
            var order = 'PT';
            if (this.order) {
                order = 'TP';
            }
            this.chart_response$ = this.chartService.createChart(this.selectionService.selection, order, this.depth);
            this.chart_response$.subscribe(function (r) { return _this.chart_response = r; });
        }
    };
    ConjPanel.prototype.isString = function (val) { return typeof val === 'string'; };
    ConjPanel.prototype.toggleExplorer = function () {
        this.showExplorer = !this.showExplorer;
        this.conjugate();
    };
    ConjPanel.prototype.download = function () {
        console.log('test');
        var query_args = this.conjugationService.createRequestUrl(this.selectionService.selection, [{ 'param': 'docx', 'value': 'true' }]).toString();
        var url = this.conjugationService.path + '?' + query_args;
        window.location.href = url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('explorer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConjPanel.prototype, "explorer", void 0);
    ConjPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'conj-panel',
            template: __webpack_require__(/*! ./conj-panel.component.html */ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.html"),
            styles: [__webpack_require__(/*! ./conj-panel.component.scss */ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.scss"), __webpack_require__(/*! ../../tableviewer.scss */ "./src/app/components/pages/tableviewer/tableviewer.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services__WEBPACK_IMPORTED_MODULE_3__["ConjugationService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["SelectionService"], _services__WEBPACK_IMPORTED_MODULE_3__["ChartService"]])
    ], ConjPanel);
    return ConjPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel'>\n  <div class='panel__header'>\n    <h3 class='panel__title'>Person</h3>\n    <!-- <hr class='panel__underline'> -->\n    <div class='panel__toolbar--right toolbar'>\n      <mat-button-toggle-group class=\"toolbar__tool\" name=\"fontStyle\" aria-label=\"Font Style\" [(ngModel)]=\"role\" (ngModelChange)=\"checkRole()\">\n        <mat-button-toggle value=\"agent\" class=\"bg-red\" [class.color-white]=\"role !== 'patient'\" [class.faded]=\"role === 'patient'\">Do-er</mat-button-toggle>\n        <mat-button-toggle value=\"patient\" class=\"bg-blue\" [class.color-white]=\"role !== 'agent'\" [class.faded]=\"role === 'agent'\">Do-ee</mat-button-toggle>\n      </mat-button-toggle-group>\n      <button *ngIf=\"!selectAllAg && role === 'agent'\" class=\"toolbar__tool\" mat-icon-button (click)=\"toggleSelectAll()\">\n        <mat-icon aria-label=\"Select all\">done_all</mat-icon>\n      </button>\n      <button *ngIf=\"selectAllAg && role === 'agent'\" class=\"toolbar__tool bg-red color-white\" mat-icon-button (click)=\"toggleSelectAll()\">\n        <mat-icon aria-label=\"Select all\">done_all</mat-icon>\n      </button>\n      <button *ngIf=\"!selectAllPat && role === 'patient'\" class=\"toolbar__tool\" mat-icon-button (click)=\"toggleSelectAll()\">\n        <mat-icon aria-label=\"Select all\">done_all</mat-icon>\n      </button>\n      <button *ngIf=\"selectAllPat && role === 'patient'\" class=\"toolbar__tool bg-blue color-white\" mat-icon-button (click)=\"toggleSelectAll()\">\n        <mat-icon aria-label=\"Select all\">done_all</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class='panel__content'>\n    <mat-list [formGroup]=\"agCheckboxGroup\" class=\"panel__list pro one\" role=\"list\" *ngIf=\"role === 'agent'\">\n      <div *ngFor=\"let value of agCheckboxPossibleValues | async | slice:0:limit \">\n        <mat-checkbox [color]=\"'red'\" [formControlName]=\"value.tag\">{{ value.gloss }}</mat-checkbox>\n      </div>\n    </mat-list>\n    <mat-list [formGroup]=\"agCheckboxGroup\" class=\"panel__list pro two\" role=\"list\" *ngIf=\"role === 'agent'\">\n      <div *ngFor=\"let value of agCheckboxPossibleValues | async | slice:limit \">\n        <mat-checkbox [color]=\"'red'\" [formControlName]=\"value.tag\">{{ value.gloss }}</mat-checkbox>\n      </div>\n    </mat-list>\n    <mat-list [formGroup]=\"patCheckboxGroup\" class=\"panel__list pro one\" role=\"list\" *ngIf=\"role === 'patient'\">\n      <div *ngFor=\"let value of patCheckboxPossibleValues | async  | slice:0:limit \">\n        <mat-checkbox [color]=\"'blue'\" [formControlName]=\"value.tag\">{{ value.gloss }}</mat-checkbox>\n      </div>\n    </mat-list>\n    <mat-list [formGroup]=\"patCheckboxGroup\" class=\"panel__list pro two\" role=\"list\" *ngIf=\"role === 'patient'\">\n      <div *ngFor=\"let value of patCheckboxPossibleValues | async  | slice:limit \">\n        <mat-checkbox [color]=\"'blue'\" [formControlName]=\"value.tag\">{{ value.gloss }}</mat-checkbox>\n      </div>\n    </mat-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGFibGV2aWV3ZXIvY29tcG9uZW50cy9wZXJzLXBhbmVsL3BlcnMtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PersPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersPanel", function() { return PersPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PersPanel = /** @class */ (function () {
    function PersPanel(pnService, selectionService) {
        var _this = this;
        this.pnService = pnService;
        this.selectionService = selectionService;
        this.agCheckboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.agCheckboxPossibleValues = this.pnService.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (values) {
            values.forEach(function (value) { _this.agCheckboxGroup.addControl(value['tag'], new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.agCheckedValues.indexOf(value['tag']) !== -1)); });
            return values;
        }));
        this.agCheckedValues = [];
        this.patCheckboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.patCheckboxPossibleValues = this.pnService.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (values) {
            values.forEach(function (value) { _this.patCheckboxGroup.addControl(value['tag'], new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.patCheckedValues.indexOf(value['tag']) !== -1)); });
            return values;
        }));
        this.patCheckedValues = [];
        this.role = 'agent';
        this.limit = 8;
        this.selectAllAg = false;
        this.selectAllPat = false;
        this.agCheckboxGroup.valueChanges.subscribe(function (c) { c = _this.filterTrue(c); if (c) {
            _this.pushAgChanges(c);
        } });
        this.patCheckboxGroup.valueChanges.subscribe(function (c) { c = _this.filterTrue(c); if (c) {
            _this.pushPatChanges(c);
        } });
    }
    PersPanel.prototype.pushAgChanges = function (c) {
        this.selectionService.updateAgents(c);
    };
    PersPanel.prototype.pushPatChanges = function (c) {
        this.selectionService.updatePatients(c);
    };
    PersPanel.prototype.filterTrue = function (c) {
        return Object.keys(c)
            .filter(function (k) { return c[k]; });
    };
    PersPanel.prototype.ngOnInit = function () {
    };
    PersPanel.prototype.toggleSelectAll = function () {
        var _this = this;
        if (this.role === 'agent') {
            this.selectAllAg = !this.selectAllAg;
            this.agCheckboxPossibleValues.subscribe(function (pns) { pns.forEach(function (pn) { return _this.agCheckboxGroup.controls[pn.tag].setValue(_this.selectAllAg); }); });
        }
        else if (this.role === 'patient') {
            this.selectAllPat = !this.selectAllPat;
            this.patCheckboxPossibleValues.subscribe(function (pns) { pns.forEach(function (pn) { return _this.patCheckboxGroup.controls[pn.tag].setValue(_this.selectAllPat); }); });
        }
    };
    PersPanel.prototype.checkRole = function () {
        console.log(this.role);
    };
    PersPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pers-panel',
            template: __webpack_require__(/*! ./pers-panel.component.html */ "./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.html"),
            styles: [__webpack_require__(/*! ./pers-panel.component.scss */ "./src/app/components/pages/tableviewer/components/pers-panel/pers-panel.component.scss"), __webpack_require__(/*! ../../tableviewer.scss */ "./src/app/components/pages/tableviewer/tableviewer.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["PronounService"], _services__WEBPACK_IMPORTED_MODULE_2__["SelectionService"]])
    ], PersPanel);
    return PersPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n  <div class=\"panel__header\">\n    <h3 class=\"panel__title\">Time</h3>\n    <div class=\"panel__toolbar toolbar\">\n      <button *ngIf=\"!selectAll\" class=\"toolbar__tool\" mat-icon-button (click)=\"toggleSelectAll()\">\n        <mat-icon aria-label=\"Select all\">done_all</mat-icon>\n      </button>\n      <button *ngIf=\"selectAll\" class=\"toolbar__tool bg-accent margin-right-15 color-white\" mat-icon-button (click)=\"toggleSelectAll()\">\n        <mat-icon aria-label=\"Select all\">done_all</mat-icon>\n      </button>\n    </div>\n  </div>\n  <mat-list role=\"list\" class=\"list panel__list\">\n    <div [formGroup]=\"checkboxGroup\" *ngFor=\"let value of checkboxPossibleValues | async \">\n      <mat-checkbox [formControlName]=\"value.tag\">{{ value.gloss }}</mat-checkbox>\n    </div>\n  </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGFibGV2aWV3ZXIvY29tcG9uZW50cy90ZW1wLXBhbmVsL3RlbXAtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TempPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempPanel", function() { return TempPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var TempPanel = /** @class */ (function () {
    function TempPanel(affixService, selectionService) {
        var _this = this;
        this.affixService = affixService;
        this.selectionService = selectionService;
        this.checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.checkboxPossibleValues = this.affixService.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (values) {
            values.forEach(function (value) { _this.checkboxGroup.addControl(value['tag'], new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.checkedValues.indexOf(value['tag']) !== -1)); });
            return values;
        }));
        this.checkedValues = [];
        this.chosenTimes = [];
        this.selectAll = false;
        this.checkboxGroup.valueChanges.subscribe(function (c) { c = _this.filterTrue(c); if (c) {
            _this.pushChanges(c);
        } });
    }
    TempPanel.prototype.ngOnInit = function () {
    };
    TempPanel.prototype.pushChanges = function (c) {
        this.selectionService.updateAffOptions(c);
    };
    TempPanel.prototype.filterTrue = function (c) {
        return Object.keys(c)
            .filter(function (k) { return c[k]; });
    };
    TempPanel.prototype.toggleSelectAll = function () {
        var _this = this;
        this.selectAll = !this.selectAll;
        this.checkboxPossibleValues.subscribe(function (ts) { ts.forEach(function (t) { return _this.checkboxGroup.controls[t.tag].setValue(_this.selectAll); }); });
    };
    TempPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'temp-panel',
            template: __webpack_require__(/*! ./temp-panel.component.html */ "./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.html"),
            styles: [__webpack_require__(/*! ./temp-panel.component.scss */ "./src/app/components/pages/tableviewer/components/temp-panel/temp-panel.component.scss"), __webpack_require__(/*! ../../tableviewer.scss */ "./src/app/components/pages/tableviewer/tableviewer.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AffixService"], _services__WEBPACK_IMPORTED_MODULE_2__["SelectionService"]])
    ], TempPanel);
    return TempPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel'>\n  <div class='panel__header'>\n    <h3 class=\"panel__title\">Verb</h3>\n    <mat-chip-list class=\"panel__toolbar toolbar\">\n      <mat-chip class='toolbar__tool' [ngClass]=\"'bg-' + verbService.getVerb(verb)['thematic_relation']\" *ngFor=\"let verb of selectionService.selection.root\"\n        [selectable]=\"selectable\" [removable]=\"true\" (removed)=\"remove(verb)\">\n        {{verbService.getVerb(verb)['display']}}\n        <mat-icon matChipRemove>cancel</mat-icon>\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n  <div class=\"panel__content\">\n    <form class='margin-20'>\n      <div [ngClass]='settingsService?.help.value ? \"help\" : \"\"'>\n        <mat-form-field [formGroup]=\"verbForm\">\n          <input autocomplete=\"off\" type=\"text\" placeholder=\"Type a verb\" aria-label=\"Number\" matInput formControlName=\"search\">\n        </mat-form-field>\n      </div>\n    </form>\n    <mat-list class='panel__list' role=\"list\" *ngIf=\"viewableVerbs && searchField.value !== ''\">\n      <div [formGroup]=\"checkboxGroup\" *ngFor=\"let value of viewableVerbs\">\n        <mat-checkbox class='margin-5' [formControlName]=\"value.tag\" [disabled]=\"selectionService.selection.root.indexOf(value.tag) < 0 && selectionService.selection.root.length >= 3\">{{\n          value.gloss + \" - \" }}\n          <span [ngClass]=\"'color-' + value.thematic_relation\">{{value.display}}</span>\n        </mat-checkbox>\n      </div>\n    </mat-list>\n    <p class='margin-top-50 margin-30' *ngIf=\"searchField.value !== '' && searchField.value !== null && viewableVerbs?.length === 0\">Sorry,\n      we can't find any verbs that match '{{ searchField.value }}'</p>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGFibGV2aWV3ZXIvY29tcG9uZW50cy92ZXJiLXBhbmVsL3ZlcmItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: VerbPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbPanel", function() { return VerbPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var VerbPanel = /** @class */ (function () {
    function VerbPanel(verbService, fb, selectionService, settingsService) {
        var _this = this;
        this.verbService = verbService;
        this.fb = fb;
        this.selectionService = selectionService;
        this.settingsService = settingsService;
        // verbFormControl = new FormControl('', []);
        this.verbs$ = this.verbService.verbs$;
        this.checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.checkedValues = [];
        this.increment = 1000;
        this.bottomLimit = 0;
        this.selection = [];
        // initialize form with list of checkboxes
        this.verbSubscription = this.verbs$.subscribe(function (values) {
            values.forEach(function (value) { _this.checkboxGroup.addControl(value['tag'], new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.checkedValues.indexOf(value['tag']) !== -1)); });
            return values;
        });
        // subscribe to search input
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.verbForm = this.fb.group({ search: this.searchField });
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return _this.getEntriesFrom(term); })).subscribe(function (result) {
            _this.viewableVerbs = result;
        });
        // create selection observable
        this.checkboxGroup.valueChanges.subscribe(function (c) { c = _this.filterTrue(c); if (c) {
            _this.pushChanges(c);
        } });
    }
    VerbPanel.prototype.ngOnInit = function () {
    };
    VerbPanel.prototype.ngOnDestroy = function () {
        this.verbSubscription.unsubscribe();
    };
    VerbPanel.prototype.pushChanges = function (c) {
        this.selectionService.updateVerbs(c);
    };
    VerbPanel.prototype.filterTrue = function (c) {
        return Object.keys(c)
            .filter(function (k) { return c[k]; });
    };
    VerbPanel.prototype.getEntriesFrom = function (term) {
        var _this = this;
        var vbs = this.verbService.verbs.filter(function (v) { return _this.filterEntries(v, term); }).slice(this.bottomLimit, this.increment);
        return vbs;
    };
    VerbPanel.prototype.filterEntries = function (v, term) {
        return (v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 || v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };
    VerbPanel.prototype.swipePrev = function () {
        if (this.bottomLimit - this.increment > 0) {
            this.bottomLimit -= this.increment;
            // this.topLimit -= this.increment;
            // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
        }
        else {
            this.bottomLimit = 0;
            // this.topLimit = this.increment;
            // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
        }
    };
    VerbPanel.prototype.swipeNext = function () {
        if (this.bottomLimit + this.increment < this.topLimit) {
            this.bottomLimit += this.increment;
            // this.topLimit += this.increment;
            // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
        }
        else {
            this.bottomLimit = this.topLimit - this.increment;
            // this.topLimit = this.verbs.length;
            // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
        }
    };
    VerbPanel.prototype.remove = function (verb) {
        this.checkboxGroup.controls[verb].setValue(false);
    };
    VerbPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'verb-panel',
            template: __webpack_require__(/*! ./verb-panel.component.html */ "./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.html"),
            styles: [__webpack_require__(/*! ./verb-panel.component.scss */ "./src/app/components/pages/tableviewer/components/verb-panel/verb-panel.component.scss"), __webpack_require__(/*! ../../tableviewer.scss */ "./src/app/components/pages/tableviewer/tableviewer.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["VerbService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_2__["SelectionService"], _services__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], VerbPanel);
    return VerbPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/tableviewer/tableviewer.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/tableviewer.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container page__content vwidth-90 centered\">\n  <mat-grid-list class='margin-bottom-50' [cols]=\"cols\" rowHeight=\"18em\" (window:resize)=\"onResize($event)\">\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"halfrowspan\" class=\"br-tl b--left b--right b--top bg-white\">\n      <pers-panel class='custom-scroll full-width full-height'></pers-panel>\n    </mat-grid-tile>\n    <mat-grid-tile class=\"b--top b--left bg-white\" [colspan]=\"conjcolspan\" [rowspan]=\"conjrowspan\">\n      <conj-panel #conjPanel class=\"custom-scroll full-width full-height\"></conj-panel>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"fullrowspan\" class=\"br--tr br--br b--left b--right b--top b--bottom bg-white\">\n      <verb-panel class='custom-scroll full-width full-height'></verb-panel>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"halfrowspan\" class=\"br--bl b--top b--left b--right b--bottom bg-white\">\n      <temp-panel class='custom-scroll full-width'></temp-panel>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div class=\"height-100\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/tableviewer.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/tableviewer.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGFibGV2aWV3ZXIvdGFibGV2aWV3ZXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/tableviewer/tableviewer.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/tableviewer/tableviewer.ts ***!
  \*************************************************************/
/*! exports provided: TableviewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableviewerPage", function() { return TableviewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_conj_panel_conj_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/conj-panel/conj-panel.component */ "./src/app/components/pages/tableviewer/components/conj-panel/conj-panel.component.ts");

// Core


var TableviewerPage = /** @class */ (function () {
    function TableviewerPage() {
        this.breakpoint = 1100;
        this.useTestAPI = false;
    }
    TableviewerPage.prototype.handleKeyboardEvent = function (event) {
        if (event.keyCode == 13) {
            this.conjPanel.conjugate();
        }
    };
    TableviewerPage.prototype.ngOnInit = function () {
        this.cols = (window.innerWidth <= this.breakpoint) ? 3 : 12;
        this.rows = (window.innerWidth <= this.breakpoint) ? 1 : 2;
        this.conjcolspan = (window.innerWidth <= this.breakpoint) ? 3 : 6;
        this.conjrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2;
        this.halfrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 1;
        this.fullrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2;
    };
    TableviewerPage.prototype.onResize = function (event) {
        this.cols = (event.target.innerWidth <= this.breakpoint) ? 3 : 12;
        this.rows = (window.innerWidth <= this.breakpoint) ? 1 : 2;
        this.conjcolspan = (window.innerWidth <= this.breakpoint) ? 3 : 6;
        this.conjrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2;
        this.halfrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 1;
        this.fullrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2;
    };
    TableviewerPage.prototype.conjugate = function () {
        this.conjPanel.conjugate();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keypress', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TableviewerPage.prototype, "handleKeyboardEvent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('conjPanel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_conj_panel_conj_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConjPanel"])
    ], TableviewerPage.prototype, "conjPanel", void 0);
    TableviewerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-tableviewer',
            template: __webpack_require__(/*! ./tableviewer.html */ "./src/app/components/pages/tableviewer/tableviewer.html"),
            styles: [__webpack_require__(/*! ./tableviewer.scss */ "./src/app/components/pages/tableviewer/tableviewer.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableviewerPage);
    return TableviewerPage;
}());



/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-20 panel centered full-width\">\n  <mat-toolbar class=\"progress\">\n    <mat-toolbar-row class='progress__row--tools'>\n      <p class='color-white margin-0 font-sm'>{{ message }}</p>\n      <button mat-icon-button class='ui-button right-5 abs color-white' (click)=\"goBack()\">\n        <mat-icon aria-label=\"go back\">arrow_back</mat-icon>\n      </button>\n    </mat-toolbar-row>\n    <mat-toolbar-row class='progress__row--previous'>\n      <h6 class=\"previous color-white font-sm\">Previously selected:</h6>\n      <span class='margin-right-5'></span>\n      <mat-chip class=\"margin-left-5 bg-white border-accent\">\n        <span class=\"centered color-black\">{{wordmaker.selectedVerb.gloss}}</span>\n        <mat-icon class=\"icon-sm margin-left-5\"\n          [ngClass]=\"wordmaker.selectedVerb?.thematic_relation ? 'color-' + wordmaker.selectedVerb?.thematic_relation : ''\">\n          brightness_1</mat-icon>\n      </mat-chip>\n      <mat-chip *ngIf=\"wordmaker.selectedPers.hasOwnProperty('agent')\" class=\"bg-white border-accent color-black\">\n        {{wordmaker.selectedPers['agent'].obj_gloss}}\n        <mat-icon class=\"margin-left-5 color-red icon-md\">person\n        </mat-icon>\n      </mat-chip>\n      <mat-chip *ngIf=\"wordmaker.selectedPers.hasOwnProperty('patient')\" class=\"bg-white border-accent color-black\">\n        {{wordmaker.selectedPers['patient'].obj_gloss}}\n        <mat-icon class=\"margin-left-5 color-blue icon-md\">person\n        </mat-icon>\n      </mat-chip>\n    </mat-toolbar-row>\n    <mat-toolbar-row class='progress__row--header'>\n      <h4 class=\"font-xl color-white\">Just like <b>that</b> you made a word!</h4>\n      <button id='start-over' mat-button (click)=\"goBack('start')\">Start over</button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"conj margin-left-100 margin-top-50\" *ngFor=\"let conj of word$ | async\">\n    <h3>\n      <span *ngFor=\"let item of conj['main']\" class=\"{{item['classes']}}\"\n        [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]}}</span>\n    </h3>\n    <h4 *ngIf=\"settings?.level.breakdown_tier\">\n      <span *ngFor=\"let item of conj['main']\" class=\"{{item['classes']}}\"\n        [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]}}\n        <span *ngIf=\"conj['main'].indexOf(item) < conj['main'].length - 1\">-</span>\n      </span>\n    </h4>\n    <h4 *ngIf=\"settings?.level.gloss_tier\">\n      <span *ngFor=\"let item of conj['secondary']\" class=\"{{item['classes']}}\"\n        [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]\n        | decapitalize}}\n        <span *ngIf=\"conj['secondary'].indexOf(item) < conj['secondary'].length - 1\">-</span>\n      </span>\n    </h4>\n    <h4 *ngIf=\"settings?.level.english_tier\">\n      <span *ngFor=\"let item of conj['ternary']\" class=\"{{item['classes']}}\"\n        [ngClass]='{\"highlight\" : settings?.highlight[item[\"type\"]] || settings?.highlight[item[\"classes\"]]}'>{{item[\"value\"]\n        | decapitalize }}\n        <span *ngIf=\"conj['ternary'].indexOf(item) < conj['ternary'].length - 1\">-</span>\n      </span>\n    </h4>\n    <h4 *ngIf=\"settings?.level.translation_tier\">\n      <span>{{ conj['translation'] }}\n      </span>\n    </h4>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yZG1ha2VyL2NvbXBvbmVudHMvd29yZG1ha2VyLWNvbmotcGFuZWwvd29yZG1ha2VyLWNvbmotcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WordmakerConjPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerConjPanel", function() { return WordmakerConjPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../global */ "./src/app/global.ts");





var WordmakerConjPanel = /** @class */ (function () {
    function WordmakerConjPanel(affixService, settingsService) {
        this.affixService = affixService;
        this.settingsService = settingsService;
        this.goBackTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = _global__WEBPACK_IMPORTED_MODULE_4__["MetaData"].congratulations;
    }
    WordmakerConjPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.settings.subscribe(function (settings) { _this.settings = settings; });
    };
    WordmakerConjPanel.prototype.goBack = function (start) {
        this.goBackTrigger.emit(start);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], WordmakerConjPanel.prototype, "word$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerConjPanel.prototype, "wordmaker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerConjPanel.prototype, "goBackTrigger", void 0);
    WordmakerConjPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wordmaker-conj-panel',
            template: __webpack_require__(/*! ./wordmaker-conj-panel.component.html */ "./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.html"),
            styles: [__webpack_require__(/*! ./wordmaker-conj-panel.component.scss */ "./src/app/components/pages/wordmaker/components/wordmaker-conj-panel/wordmaker-conj-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AffixService"], _services__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], WordmakerConjPanel);
    return WordmakerConjPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-20 panel centered full-width\">\n  <mat-toolbar class='progress'>\n    <mat-toolbar-row class='progress__row--tools'>\n      <p class='color-white margin-0 font-sm'>Step 2/3</p>\n      <button mat-icon-button class='ui-button right-5 abs color-white' (click)=\"goBack()\">\n        <mat-icon aria-label=\"go back\">arrow_back</mat-icon>\n      </button>\n    </mat-toolbar-row>\n    <mat-toolbar-row class='progress__row--previous'>\n      <h6 class=\"color-white font-sm\">Previously selected:</h6>\n      <span class='margin-right-5'></span>\n      <mat-chip class=\"margin-5 bg-white border-accent\">\n        <span class=\"centered color-black\">{{selectedVerb.gloss}}</span>\n        <mat-icon class=\"icon-sm margin-left-5\"\n          [ngClass]=\"selectedVerb?.thematic_relation ? 'color-' + selectedVerb?.thematic_relation : ''\">brightness_1\n        </mat-icon>\n      </mat-chip>\n    </mat-toolbar-row>\n    <mat-toolbar-row class='progress__row--header'>\n      <h4 class=\"font-xl color-white\"><b>Who</b> is involved?</h4>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <ng-template #loading>\n    <mat-spinner class=\"centered\"></mat-spinner>\n  </ng-template>\n  <div *ngIf=\"pronouns$ | async as pronouns; else loading\">\n    <div class=\"pwidth-50--desktop pwidth-100--mobile\" *ngIf=\"selectedVerb.thematic_relation === 'blue'\">\n      <mat-chip-list>\n        <mat-chip class=\"bg-white border-accent color-black\" (click)=\"select('pat', pn, false)\"\n          *ngFor=\"let pn of pronouns\">{{pn.obj_gloss}}\n          <mat-icon class=\"margin-left-5 color-blue icon-md\">person\n          </mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n    <div class=\"pwidth-50--desktop pwidth-100--mobile\" *ngIf=\"selectedVerb.thematic_relation === 'red'\">\n      <mat-chip-list>\n        <mat-chip class=\"bg-white border-accent color-black\" (click)=\"select('ag', pn, false)\"\n          *ngFor=\"let pn of pronouns\">{{pn.obj_gloss}}\n          <mat-icon class=\"margin-left-5 color-red icon-md\">person\n          </mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n    <div class=\"pwidth-50--desktop pwidth-100--mobile\" *ngIf=\"selectedVerb.thematic_relation === 'purple'\">\n      <h6>Do-er</h6>\n      <mat-chip-list>\n        <mat-chip class=\"bg-white border-accent color-black\" (click)=\"select('ag', pn, true)\"\n          *ngFor=\"let pn of pronouns\">{{pn.gloss}}\n          <mat-icon class=\"margin-left-5 color-red icon-md\">person\n          </mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n      <h6>Do-ee</h6>\n      <mat-chip-list>\n        <mat-chip class=\"bg-white border-accent color-black\" (click)=\"select('pat', pn, true)\"\n          *ngFor=\"let pn of pronouns\">{{pn.obj_gloss}}\n          <mat-icon class=\"margin-left-5 color-blue icon-md\">person\n          </mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n  </div>\n  <div class=\"abs desktop-only full-height explorer--demo explorer--demo--right\">\n    <div *ngIf=\"pro_chart$ | async as pro_chart\">\n      <div #explorer1 echarts [options]=\"pro_chart\" class=\"demo-chart\" (chartClick)=\"onChartClick($event)\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yZG1ha2VyL2NvbXBvbmVudHMvd29yZG1ha2VyLXBlcnMtcGFuZWwvd29yZG1ha2VyLXBlcnMtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WordmakerPersPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerPersPanel", function() { return WordmakerPersPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../global */ "./src/app/global.ts");




var WordmakerPersPanel = /** @class */ (function () {
    function WordmakerPersPanel(pronounService, chartService) {
        this.pronounService = pronounService;
        this.chartService = chartService;
        this.language = _global__WEBPACK_IMPORTED_MODULE_3__["MetaData"].language;
        this.selectedPers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goBackTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WordmakerPersPanel.prototype.ngOnInit = function () {
        this.pronouns$ = this.pronounService.pronouns$;
        if (this.selectedVerb.thematic_relation === 'purple') {
            this.pro_chart$ = this.chartService.returnAllProCombinations();
        }
        else {
            this.pro_chart$ = this.chartService.returnChoiceAllData('pronouns', undefined, 1);
        }
    };
    WordmakerPersPanel.prototype.goBack = function () {
        this.goBackTrigger.emit();
    };
    WordmakerPersPanel.prototype.onChartClick = function (ev) {
        var _this = this;
        var term = ev['data']['name'];
        // if not final, select agent/tr, remove other selections
        if (ev['data']['children']) {
            this.pronounService.pronouns$.subscribe(function (pns) {
                var pn = pns.filter(function (pn) { return pn.gloss === term; })[0];
                _this.select('ag', pn, true);
            });
        }
        else {
            // if red, select agent/intr
            if (this.selectedVerb.thematic_relation === 'red') {
                this.pronounService.pronouns$.subscribe(function (pns) {
                    var pn = pns.filter(function (pn) { return pn.gloss === term; })[0];
                    _this.select('ag', pn, false);
                });
            }
            else 
            // if blue, select patient/intr
            if (this.selectedVerb.thematic_relation === 'blue') {
                this.pronounService.pronouns$.subscribe(function (pns) {
                    var pn = pns.filter(function (pn) { return pn.gloss === term; })[0];
                    _this.select('pat', pn, false);
                });
            }
            else 
            // if purple, select patient/tr
            if (this.selectedVerb.thematic_relation === 'purple') {
                this.pronounService.pronouns$.subscribe(function (pns) {
                    var pn = pns.filter(function (pn) { return pn.gloss === term; })[0];
                    _this.select('ag', pn, true);
                });
            }
        }
    };
    WordmakerPersPanel.prototype.select = function (role, pn, transitive) {
        if (transitive) {
            if (role === 'ag') {
                this.selectedAgent = pn;
                if (this.selectedPatient) {
                    this.selectedPers.emit({ "agent": this.selectedAgent, "patient": this.selectedPatient });
                }
                else {
                    this.selectedPers.emit({ "agent": this.selectedAgent });
                }
            }
            else if (role === 'pat') {
                this.selectedPatient = pn;
                if (this.selectedAgent) {
                    this.selectedPers.emit({ "agent": this.selectedAgent, "patient": this.selectedPatient });
                }
                else {
                    this.selectedPers.emit({ "patent": this.selectedPatient });
                }
            }
        }
        else {
            this.pro_chart$ = this.chartService.returnChoiceAllData('pronouns', [{ "name": pn['gloss'] }], 1);
            if (role === 'ag') {
                this.selectedPers.emit({ "agent": pn });
            }
            else if (role === 'pat') {
                this.selectedPers.emit({ "patient": pn });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerPersPanel.prototype, "selectedVerb", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerPersPanel.prototype, "selectedPers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerPersPanel.prototype, "goBackTrigger", void 0);
    WordmakerPersPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wordmaker-pers-panel',
            template: __webpack_require__(/*! ./wordmaker-pers-panel.component.html */ "./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.html"),
            styles: [__webpack_require__(/*! ./wordmaker-pers-panel.component.scss */ "./src/app/components/pages/wordmaker/components/wordmaker-pers-panel/wordmaker-pers-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["PronounService"], _services__WEBPACK_IMPORTED_MODULE_2__["ChartService"]])
    ], WordmakerPersPanel);
    return WordmakerPersPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='margin-top-20 panel centered full-width'>\n  <mat-toolbar class=\"progress\">\n    <mat-toolbar-row class='progress__row--tools'>\n      <p class='color-white margin-0 font-sm'>Step 3/3</p>\n      <button mat-icon-button class='ui-button right-5 abs color-white' (click)=\"goBack()\">\n        <mat-icon aria-label=\"go back\">arrow_back</mat-icon>\n      </button>\n    </mat-toolbar-row>\n    <mat-toolbar-row class='progress__row--previous'>\n      <h6 class=\"previous color-white font-sm\">Previously selected:</h6>\n      <span class='margin-right-5'></span>\n      <mat-chip class=\"margin-left-5 bg-white border-accent\">\n        <span class=\"centered color-black\">{{wordmaker.selectedVerb.gloss}}</span>\n        <mat-icon class=\"icon-sm margin-left-5\"\n          [ngClass]=\"wordmaker.selectedVerb?.thematic_relation ? 'color-' + wordmaker.selectedVerb?.thematic_relation : ''\">\n          brightness_1</mat-icon>\n      </mat-chip>\n      <mat-chip *ngIf=\"wordmaker.selectedPers.hasOwnProperty('agent')\" class=\"bg-white border-accent color-black\">\n        {{wordmaker.selectedPers['agent'].obj_gloss}}\n        <mat-icon class=\"margin-left-5 color-red icon-md\">person\n        </mat-icon>\n      </mat-chip>\n      <mat-chip *ngIf=\"wordmaker.selectedPers.hasOwnProperty('patient')\" class=\"bg-white border-accent color-black\">\n        {{wordmaker.selectedPers['patient'].obj_gloss}}\n        <mat-icon class=\"margin-left-5 color-blue icon-md\">person\n        </mat-icon>\n      </mat-chip>\n    </mat-toolbar-row>\n    <mat-toolbar-row class='progress__row--header'>\n      <h4 class=\"font-xl color-white\"><b>When</b>  is the action happening?</h4>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"pwidth-50--desktop pwidth-100--mobile\">\n    <ng-template #loading>\n      <mat-spinner class=\"centered\"></mat-spinner>\n    </ng-template>\n    <mat-chip-list *ngIf=\"temps$ | async as temps; else loading\">\n      <mat-chip (click)=\"select(temp)\" class=\"bg-white color-black border-accent\" *ngFor=\"let temp of temps\">\n        {{temp.translation}}</mat-chip>\n    </mat-chip-list>\n  </div>\n  <div class=\"abs full-height desktop-only explorer--demo explorer--demo--right\">\n    <div *ngIf=\"when\">\n      <div echarts [options]=\"when\" class=\"demo-chart\" (chartClick)=\"onChartClick($event)\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yZG1ha2VyL2NvbXBvbmVudHMvd29yZG1ha2VyLXRlbXAtcGFuZWwvd29yZG1ha2VyLXRlbXAtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WordmakerTempPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerTempPanel", function() { return WordmakerTempPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WordmakerTempPanel = /** @class */ (function () {
    function WordmakerTempPanel(affixService, conjugationService, chartService) {
        var _this = this;
        this.affixService = affixService;
        this.conjugationService = conjugationService;
        this.chartService = chartService;
        this.selectedTemp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goBackTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartService.returnChoiceAllData('aff-options', undefined, 1).subscribe(function (r) { _this.when = r; });
    }
    WordmakerTempPanel.prototype.ngOnInit = function () {
        var verb_tag = [this.wordmaker.selectedVerb['tag']];
        var selected_ag = [];
        var selected_pat = [];
        if ("agent" in this.wordmaker.selectedPers) {
            selected_ag.push(this.wordmaker.selectedPers['agent'].tag);
        }
        if ("patient" in this.wordmaker.selectedPers) {
            selected_pat.push(this.wordmaker.selectedPers['patient'].tag);
        }
        this.temps$ = this.conjugationService.conjugate({
            'root': verb_tag,
            'agent': selected_ag,
            'patient': selected_pat,
            'aff-option': []
        });
    };
    WordmakerTempPanel.prototype.goBack = function () {
        this.goBackTrigger.emit();
    };
    WordmakerTempPanel.prototype.onChartClick = function (ev) {
        var _this = this;
        var term = ev['data']['name'];
        this.temps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (ts) {
            return _this.affixService.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (affopts) {
                var picked_ao = affopts.filter(function (ao) { return ao['gloss'] === term; })[0];
                return ts.filter(function (t) { return t['affopt'] === picked_ao['tag']; })[0];
            }));
        })).subscribe(function (t) { return _this.select(t); });
    };
    WordmakerTempPanel.prototype.select = function (temp) {
        var _this = this;
        this.chartService.returnChoiceAllData('aff-options', [{ "name": temp['translation'] }], 1).subscribe(function (r) { return _this.when = r; });
        this.selectedTemp.emit(temp);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerTempPanel.prototype, "selectedTemp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerTempPanel.prototype, "goBackTrigger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerTempPanel.prototype, "wordmaker", void 0);
    WordmakerTempPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wordmaker-temp-panel',
            template: __webpack_require__(/*! ./wordmaker-temp-panel.component.html */ "./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.html"),
            styles: [__webpack_require__(/*! ./wordmaker-temp-panel.component.scss */ "./src/app/components/pages/wordmaker/components/wordmaker-temp-panel/wordmaker-temp-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AffixService"], _services__WEBPACK_IMPORTED_MODULE_2__["ConjugationService"], _services__WEBPACK_IMPORTED_MODULE_2__["ChartService"]])
    ], WordmakerTempPanel);
    return WordmakerTempPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-20 full-width centered panel\">\n  <div class=\"panel__header\">\n    <mat-toolbar class=\"progress\">\n      <mat-toolbar-row class='progress__row--tools progress__row--previous'>\n        <p class='color-white margin-0 font-sm'>Step 1/3</p>\n        <button mat-icon-button class='ui-button right-5 abs color-white' (click)=\"goBack()\">\n          <mat-icon aria-label=\"go back\">arrow_back</mat-icon>\n        </button>\n      </mat-toolbar-row>\n      <mat-toolbar-row class='progress__row--header'>\n        <h4 class='vmargin-bottom-10 panel__title font-xl color-white'>So, <b>what</b> action do you want to choose?\n        </h4>\n        <p *ngIf=\"explorer_click$ | async as exp\">{{ exp?.seriesType }}</p>\n\n      </mat-toolbar-row>\n\n    </mat-toolbar>\n  </div>\n  <div class='vheight-50 flex-display'>\n    <div class='vwidth-45--desktop vwidth-90--mobile'>\n      <form class=\"margin-left-20\">\n        <mat-form-field class=\"margin-bottom-20\" [formGroup]=\"verbForm\">\n          <input autocomplete=\"off\" type=\"text\" placeholder=\"Search for a verb\" value=\"\" aria-label=\"Number\" matInput\n            formControlName=\"search\">\n        </mat-form-field>\n      </form>\n      <ng-template #loading>\n        <mat-spinner class=\"centered\"></mat-spinner>\n      </ng-template>\n      <mat-chip-list class=\"panel__list custom-scroll\" *ngIf=\"verbs$ | async as verbs; else loading\">\n        <p *ngIf=\"verbs.length === 0\">Sorry, there are no verbs matching '{{ searchField.value }}'</p>\n        <mat-chip class=\"margin-5 bg-white border-accent\" (click)=\"select(verb)\" *ngFor=\"let verb of verbs\">\n          <span class=\"centered color-black\" *ngIf=\"display_language !== 'english'\">{{verb.root}}</span>\n          <span class=\"centered color-black\" *ngIf=\"display_language === 'english'\">{{verb.gloss}}</span>\n          <mat-icon class=\"icon-sm margin-left-5\"\n            [ngClass]=\"verb?.thematic_relation ? 'color-' + verb?.thematic_relation : ''\">brightness_1</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n    <div *ngIf=\"showExplorer\" class=\"vwidth-45 full-height desktop-only\">\n      <div *ngIf=\"chart_response\">\n        <div #explorer echarts [options]=\"chart_response\" class=\"demo-chart\" (chartClick)=\"onChartClick($event)\"></div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-display {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yZG1ha2VyL2NvbXBvbmVudHMvd29yZG1ha2VyLXZlcmItcGFuZWwvd29yZG1ha2VyLXZlcmItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3dvcmRtYWtlci9jb21wb25lbnRzL3dvcmRtYWtlci12ZXJiLXBhbmVsL3dvcmRtYWtlci12ZXJiLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WordmakerVerbPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerVerbPanel", function() { return WordmakerVerbPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../global */ "./src/app/global.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");










var WordmakerVerbPanel = /** @class */ (function () {
    function WordmakerVerbPanel(verbService, fb, chartService) {
        var _this = this;
        this.verbService = verbService;
        this.fb = fb;
        this.chartService = chartService;
        this.showExplorer = true;
        this.verbs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.language = _global__WEBPACK_IMPORTED_MODULE_6__["MetaData"].language;
        this.display_language = "english";
        this.cached_clicked_verbs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        this.selectedVerb = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goBackTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // subscribe to search input
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.verbForm = this.fb.group({ search: this.searchField });
        this.chartService.returnChoiceAllData('verbs', undefined, 1).subscribe(function (r) { return _this.chart_response = r; });
    }
    WordmakerVerbPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.search$ = this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.verbService.verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (verbs) {
            console.log(verbs);
            var new_verbs = verbs.filter(function (v) {
                return (v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 || v.display.toLowerCase().indexOf(term.toLowerCase()) > -1);
            });
            _this.chartService.returnChoiceAllData('verbs', _this.chartService.returnBasicDataFrom(new_verbs), 1).subscribe(function (r) {
                return _this.chart_response = r;
            });
            return new_verbs;
        })); }));
        this.verbService.verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.search$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (verbs) { return _this.sortVerbs(verbs); })).subscribe(function (x) { return _this.verbs$.next(x); });
    };
    WordmakerVerbPanel.prototype.onChartClick = function (ev) {
        var _this = this;
        var term = ev['data']['name'];
        // If not final, change pool of verbs
        if (ev['data']['children']) {
            var clicked_verb_glosses_1 = ev['data']['children'].map(function (x) { return x['name']; });
            this.cached_clicked_verbs$ = this.cached_clicked_verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cached_clicked_verbs) {
                // if verbs exist in pool already, remove them
                if (cached_clicked_verbs.some(function (v) { return clicked_verb_glosses_1.indexOf(v) > -1; })) {
                    return cached_clicked_verbs.filter(function (v) { return clicked_verb_glosses_1.indexOf(v) < 0; });
                    // otherwise add them
                }
                else {
                    return cached_clicked_verbs.concat(clicked_verb_glosses_1);
                }
            }));
        }
        else {
            this.verbService.verbs$.subscribe(function (verbs) { return verbs.filter(function (v) {
                if (v.gloss === term) {
                    _this.select(v);
                }
            }); });
        }
        this.cached_clicked_verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (glosses) { return _this.verbService.verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (verbs) { return verbs.filter(function (v) { return glosses.indexOf(v['gloss']) > -1; }); })); })).subscribe(function (x) { return _this.verbs$.next(x); });
    };
    WordmakerVerbPanel.prototype.goBack = function () {
        this.goBackTrigger.emit();
    };
    WordmakerVerbPanel.prototype.select = function (verb) {
        var _this = this;
        this.chartService.returnChoiceAllData('verbs', [{ "name": verb['gloss'] }], 1).subscribe(function (r) { return _this.chart_response = r; });
        this.selectedVerb.emit(verb);
    };
    WordmakerVerbPanel.prototype.sortVerbs = function (verbs) {
        if (this.display_language === 'english') {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"])(verbs, ['gloss']);
        }
        else {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"])(verbs, ['display']);
        }
    };
    WordmakerVerbPanel.prototype.flipCards = function () {
        if (this.display_language === 'english') {
            animejs__WEBPACK_IMPORTED_MODULE_5__({
                targets: '#chip',
                rotateX: ['0', '360'],
                // translateX: 5000,
                duration: 800,
                easing: 'easeInOutQuad',
            });
        }
        else {
            console.log('flip');
            animejs__WEBPACK_IMPORTED_MODULE_5__({
                targets: '#chip',
                rotateX: ['360', '0'],
                // translateX: 5000,
                duration: 800,
                easing: 'easeInOutQuad',
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('explorer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsDirective"])
    ], WordmakerVerbPanel.prototype, "explorer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerVerbPanel.prototype, "selectedVerb", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WordmakerVerbPanel.prototype, "goBackTrigger", void 0);
    WordmakerVerbPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wordmaker-verb-panel',
            template: __webpack_require__(/*! ./wordmaker-verb-panel.component.html */ "./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.html"),
            styles: [__webpack_require__(/*! ./wordmaker-verb-panel.component.scss */ "./src/app/components/pages/wordmaker/components/wordmaker-verb-panel/wordmaker-verb-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["VerbService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_2__["ChartService"]])
    ], WordmakerVerbPanel);
    return WordmakerVerbPanel;
}());



/***/ }),

/***/ "./src/app/components/pages/wordmaker/wordmaker.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/wordmaker/wordmaker.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered page__content vwidth-90 rel\">\n  <div class=\"\">\n    <div id=\"welcome\" class=\"centered vmargin-top-10\" *ngIf=\"currentStep === 0\">\n      <h3 class=\"font-xxl\">Welcome to the {{ title }} Word Maker!</h3>\n      <p class=\"vmargin-top-5 font-md\">There are three steps to make a word. We'll need to know <span class=\"font-weight--900\" (mouseenter)=\"showExplorer('verbs')\"\n          (mouseleave)=\"hideExplorer('verbs')\">what</span> the action is, <span class=\"font-weight--900\" (mouseenter)=\"showExplorer('who')\"\n          (mouseleave)=\"hideExplorer('who')\">who</span> is doing it, and <span class=\"font-weight--900\" (mouseenter)=\"showExplorer('when')\"\n          (mouseleave)=\"hideExplorer('when')\">when</span> it's happening.</p>\n      <p class=\"font-md\">You can press the <b>left</b> arrow key to go to the previous step and the <b>right</b> arrow key to go to the next step. </p>\n      <p>Let's get started!</p>\n      <button id=\"start\" class='ui-button' mat-fab (click)=\"firstStep()\">START</button>\n      <div class=\"abs full-height desktop-only explorer--demo explorer--demo--right\">\n        <div *ngIf=\"who && showWho\">\n            <div #explorer1 echarts [options]=\"who\" class=\"demo-chart\"></div>\n        </div>\n      </div>\n      <div class=\"abs full-height desktop-only explorer--demo explorer--demo--right\">\n        <div *ngIf=\"verbs && showVerbs\">\n            <div #explorer2 echarts [options]=\"verbs\" class=\"demo-chart\"></div>\n        </div>\n      </div>\n      <div class=\"abs full-height desktop-only explorer--demo explorer--demo--right\">\n        <div *ngIf=\"when && showWhen\">\n            <div #explorer3 echarts [options]=\"when\" class=\"demo-chart\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <button *ngIf=\"currentStep !== 0\" class=\"abs top-0 left-10\" mat-icon-button (click)=\"previousStep()\">\n    <mat-icon aria-label=\"Go back\">arrow_back</mat-icon>\n  </button> -->\n  <wordmaker-verb-panel id=\"firstStep\" *ngIf=\"currentStep === 1\" (selectedVerb)=\"verbSelected($event)\" (goBackTrigger)=\"triggeredPreviousStep()\"></wordmaker-verb-panel>\n  <wordmaker-pers-panel id=\"secondStep\" *ngIf=\"currentStep === 2\" [selectedVerb]=\"selectedVerb\" (selectedPers)=\"persSelected($event)\" (goBackTrigger)=\"triggeredPreviousStep()\"></wordmaker-pers-panel>\n  <wordmaker-temp-panel id=\"thirdStep\" *ngIf=\"currentStep === 3\" (selectedTemp)=\"tempSelected($event)\" [wordmaker]=\"this\" (goBackTrigger)=\"triggeredPreviousStep()\"></wordmaker-temp-panel>\n  <wordmaker-conj-panel id=\"finalStep\" *ngIf=\"currentStep === 4\" [word$]=\"word$\" [wordmaker]=\"this\" (goBackTrigger)=\"triggeredPreviousStep($event)\"></wordmaker-conj-panel>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/wordmaker.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/wordmaker/wordmaker.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yZG1ha2VyL3dvcmRtYWtlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yZG1ha2VyL3dvcmRtYWtlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/pages/wordmaker/wordmaker.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/wordmaker/wordmaker.ts ***!
  \*********************************************************/
/*! exports provided: WordmakerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerPage", function() { return WordmakerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

// Core

// Services

// Imports




var WordmakerPage = /** @class */ (function () {
    function WordmakerPage(conjugationService, chartService, snackBar, verbService, pronounService, affixService) {
        this.conjugationService = conjugationService;
        this.chartService = chartService;
        this.snackBar = snackBar;
        this.verbService = verbService;
        this.pronounService = pronounService;
        this.affixService = affixService;
        this.showVerbs = false;
        this.showWho = false;
        this.showWhen = false;
        this.title = _global__WEBPACK_IMPORTED_MODULE_3__["MetaData"].title;
        this.currentStep = 0;
    }
    WordmakerPage.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'Enter' || event.key == 'ArrowRight') {
            this.nextStep();
        }
        if (event.key == 'ArrowLeft') {
            this.previousStep();
        }
    };
    WordmakerPage.prototype.tempSelected = function (temp) {
        this.selectedTemp = temp;
        this.finalStep();
    };
    WordmakerPage.prototype.verbSelected = function (verb) {
        console.log(verb);
        this.selectedVerb = verb;
        this.secondStep();
    };
    WordmakerPage.prototype.persSelected = function (pn) {
        this.selectedPers = pn;
        if (this.selectedVerb.thematic_relation === 'red' && "agent" in pn) {
            this.thirdStep();
        }
        else if (this.selectedVerb.thematic_relation === 'blue' && "patient" in pn) {
            this.thirdStep();
        }
        else if (this.selectedVerb.thematic_relation === 'purple' && "agent" in pn && "patient" in pn) {
            this.thirdStep();
        }
        else {
        }
    };
    WordmakerPage.prototype.randomX = function (x) {
        return x[Math.floor((Math.random() * (x.length - 1)) + 1)];
    };
    WordmakerPage.prototype.pickRandom = function (selection_type) {
        var _this = this;
        if (selection_type === 'verb') {
            return this.verbService.verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return _this.randomX(x); }));
        }
        else if (selection_type === 'pronoun') {
            if (this.selectedVerb.thematic_relation === 'red') {
                return this.pronounService.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return { 'agent': _this.randomX(x) }; }));
            }
            else if (this.selectedVerb.thematic_relation === 'blue') {
                return this.pronounService.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return { 'patient': _this.randomX(x) }; }));
            }
            else if (this.selectedVerb.thematic_relation === "purple") {
                return this.pronounService.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (pns) {
                    var ag = _this.randomX(pns);
                    var pats = pns.filter(function (x) { return x.person !== ag.person && !(ag.person === '2' && x.inclusivity === 'incl') && !(ag.inclusivity === 'incl' && x.person === '2'); });
                    var pat = _this.randomX(pats);
                    return { 'agent': ag, 'patient': pat };
                }));
            }
        }
        else if (selection_type === 'temp') {
            return this.affixService.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return { 'affopt': _this.randomX(x)['tag'] }; }));
        }
    };
    WordmakerPage.prototype.showExplorer = function (el) {
        var _this = this;
        if (el === 'verbs') {
            this.chartService.returnChoiceAllData('verbs', undefined, 1).subscribe(function (r) { _this.verbs = r; _this.showVerbs = true; });
        }
        else if (el === 'who') {
            this.chartService.returnChoiceAllData('pronouns', undefined, 1).subscribe(function (r) { _this.who = r; _this.showWho = true; });
        }
        else if (el === 'when') {
            this.chartService.returnChoiceAllData('aff-options', undefined, 1).subscribe(function (r) { _this.when = r; _this.showWhen = true; });
        }
    };
    WordmakerPage.prototype.hideExplorer = function (el) {
        var _this = this;
        if (el === 'verbs') {
            this.chartService.returnChoiceAllData('verbs', undefined, 0).subscribe(function (r) {
                _this.verbs = r;
                setTimeout(function () { return _this.showVerbs = false; }, 500);
            });
        }
        else if (el === 'who') {
            this.chartService.returnChoiceAllData('pronouns', undefined, 0).subscribe(function (r) {
                _this.who = r;
                setTimeout(function () { return _this.showWho = false; }, 500);
            });
        }
        else if (el === 'when') {
            this.chartService.returnChoiceAllData('aff-options', undefined, 0).subscribe(function (r) {
                _this.when = r;
                setTimeout(function () { return _this.showWhen = false; }, 500);
            });
        }
    };
    WordmakerPage.prototype.ngOnInit = function () {
    };
    WordmakerPage.prototype.ngAfterViewInit = function () {
        // this.startStep()
    };
    WordmakerPage.prototype.nextStep = function () {
        var _this = this;
        if (this.currentStep == 0) {
            this.firstStep();
        }
        else if (this.currentStep == 1) {
            if (this.selectedVerb) {
                this.secondStep();
            }
            else {
                this.pickRandom('verb').subscribe(function (v) {
                    _this.snackBar.open("You didn't select anything, so the Word Maker picked '" + v.gloss + "'!", "", { duration: 2500, verticalPosition: 'top' });
                    _this.verbSelected(v);
                });
            }
        }
        else if (this.currentStep == 2) {
            if (this.selectedPers) {
                this.thirdStep();
            }
            else {
                this.pickRandom('pronoun').subscribe(function (p) {
                    _this.snackBar.open("You didn't select anything, so the Word Maker picked for you!", "", { duration: 2500, verticalPosition: 'top' });
                    _this.persSelected(p);
                });
            }
        }
        else if (this.currentStep == 3) {
            if (this.selectedTemp) {
                this.finalStep();
            }
            else {
                this.pickRandom('temp').subscribe(function (t) {
                    _this.snackBar.open("You didn't select anything, so the Word Maker picked for you!", "", { duration: 2500, verticalPosition: 'top' });
                    _this.tempSelected(t);
                });
            }
        }
    };
    WordmakerPage.prototype.triggeredPreviousStep = function (start) {
        if (start) {
            this.backToFirstStep();
        }
        else {
            this.previousStep();
        }
    };
    WordmakerPage.prototype.previousStep = function () {
        if (this.currentStep == 4) {
            this.backToThirdStep();
        }
        else if (this.currentStep == 3) {
            this.backToSecondStep();
        }
        else if (this.currentStep == 2) {
            this.backToFirstStep();
        }
        else {
            this.backToStartStep();
        }
    };
    WordmakerPage.prototype.startStep = function () {
        this.currentStep = 0;
    };
    WordmakerPage.prototype.backToStartStep = function () {
        this.currentStep = 0;
    };
    WordmakerPage.prototype.firstStep = function () {
        var _this = this;
        animejs__WEBPACK_IMPORTED_MODULE_4__({
            targets: "#welcome",
            translateX: 5000,
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function () {
                _this.currentStep = 1;
                animejs__WEBPACK_IMPORTED_MODULE_4__({
                    targets: "#firstStep div mat-chip-list div mat-chip",
                    translateX: 50,
                    duration: 250,
                    easing: 'easeInOutQuad'
                });
            }
        });
    };
    WordmakerPage.prototype.backToFirstStep = function () {
        this.selectedVerb = null;
        this.selectedPers = null;
        this.selectedTemp = null;
        this.currentStep = 1;
    };
    WordmakerPage.prototype.backToSecondStep = function () {
        this.selectedPers = null;
        this.selectedTemp = null;
        this.currentStep = 2;
    };
    WordmakerPage.prototype.backToThirdStep = function () {
        this.selectedTemp = null;
        this.currentStep = 3;
    };
    WordmakerPage.prototype.secondStep = function () {
        var _this = this;
        animejs__WEBPACK_IMPORTED_MODULE_4__({
            targets: "#firstStep div mat-chip-list div mat-chip",
            translateX: 1200,
            duration: 1000,
            opacity: 0,
            delay: function (el, i) { return i * 5; },
            easing: 'easeInOutQuad',
            complete: function () {
                _this.currentStep = 2;
                animejs__WEBPACK_IMPORTED_MODULE_4__({
                    targets: "#secondStep",
                    translateX: 3000,
                    duration: 1500,
                    easing: 'easeInOutQuad'
                });
            }
        });
    };
    WordmakerPage.prototype.thirdStep = function () {
        var _this = this;
        animejs__WEBPACK_IMPORTED_MODULE_4__({
            targets: "#secondStep div div mat-chip-list div mat-chip",
            translateX: 1200,
            duration: 1000,
            opacity: 0,
            delay: function (el, i) { return i * 5; },
            easing: 'easeInOutQuad',
            complete: function () {
                _this.currentStep = 3;
                animejs__WEBPACK_IMPORTED_MODULE_4__({
                    targets: "#thirdStep",
                    translateX: 3000,
                    duration: 1500,
                    easing: 'easeInOutQuad'
                });
            }
        });
    };
    WordmakerPage.prototype.finalStep = function () {
        var _this = this;
        var ag_tag = [];
        var pat_tag = [];
        if ("agent" in this.selectedPers) {
            ag_tag.push(this.selectedPers['agent']['tag']);
        }
        if ("patient" in this.selectedPers) {
            pat_tag.push(this.selectedPers['patient']['tag']);
        }
        var vb_tag = this.selectedVerb['tag'];
        var ao_tag = this.selectedTemp['affopt'];
        var table_args = { "agent": ag_tag, "patient": pat_tag, "root": [vb_tag], "aff-option": [ao_tag] };
        console.log(table_args);
        this.word$ = this.conjugationService.conjugateTable(table_args);
        animejs__WEBPACK_IMPORTED_MODULE_4__({
            targets: "#thirdStep div div mat-chip-list div mat-chip",
            translateX: 1200,
            duration: 1000,
            opacity: 0,
            delay: function (el, i) { return i * 5; },
            easing: 'easeInOutQuad',
            complete: function () {
                _this.currentStep = 4;
            }
        });
    };
    WordmakerPage.prototype.flip = function (ev, verb) {
        if (!verb.flipped) {
            animejs__WEBPACK_IMPORTED_MODULE_4__({
                targets: ev.target,
                rotateX: ['0', '360'],
                // translateX: 5000,
                duration: 800,
                easing: 'easeInOutQuad',
                update: function () {
                    setTimeout(function () {
                        verb.flipped = true;
                    }, 400);
                },
            });
        }
    };
    WordmakerPage.prototype.unflip = function (ev, verb) {
        animejs__WEBPACK_IMPORTED_MODULE_4__({
            targets: ev.target,
            rotateX: ['360', '0'],
            // translateX: 5000,
            duration: 800,
            easing: 'easeInOutQuad',
            update: function () {
                setTimeout(function () {
                    verb.flipped = false;
                }, 400);
            }
        });
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], WordmakerPage.prototype, "handleKeyboardEvent", null);
    WordmakerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-wordmaker',
            template: __webpack_require__(/*! ./wordmaker.html */ "./src/app/components/pages/wordmaker/wordmaker.html"),
            styles: [__webpack_require__(/*! ./wordmaker.scss */ "./src/app/components/pages/wordmaker/wordmaker.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ConjugationService"], _services__WEBPACK_IMPORTED_MODULE_2__["ChartService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _services__WEBPACK_IMPORTED_MODULE_2__["VerbService"], _services__WEBPACK_IMPORTED_MODULE_2__["PronounService"], _services__WEBPACK_IMPORTED_MODULE_2__["AffixService"]])
    ], WordmakerPage);
    return WordmakerPage;
}());



/***/ }),

/***/ "./src/app/components/shared/error/error.snack.html":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/error/error.snack.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{ data.message }}</span>\n<!-- <button *ngIf=\"data.action\" (click)=\"dismiss()\">{{ data.action }}</button> -->"

/***/ }),

/***/ "./src/app/components/shared/error/error.snack.ts":
/*!********************************************************!*\
  !*** ./src/app/components/shared/error/error.snack.ts ***!
  \********************************************************/
/*! exports provided: ErrorSnackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorSnackComponent", function() { return ErrorSnackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

// Core


var ErrorSnackComponent = /** @class */ (function () {
    function ErrorSnackComponent(data) {
        this.data = data;
        console.log(this.data);
    }
    ErrorSnackComponent.prototype.dismiss = function () {
    };
    ErrorSnackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error-snack',
            template: __webpack_require__(/*! ./error.snack.html */ "./src/app/components/shared/error/error.snack.html"),
            styles: ["\n      button.mat-simple-snackbar-action {\n        color: white;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ErrorSnackComponent);
    return ErrorSnackComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/logo/logo.html":
/*!**************************************************!*\
  !*** ./src/app/components/shared/logo/logo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"lineDrawing\">\n    <svg width=\"281.7\" height=\"35.37\" viewBox=\"0 0 281.7 35.37\">\n        <g id=\"svgGroup\" class='lines' stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#000\" stroke-width=\"0.25mm\"\n            fill=\"none\">\n            <path\n                d=\"M 43.065 7.065 L 34.425 32.04 Q 34.335 32.355 34.11 32.805 A 1.488 1.488 0 0 1 33.941 33.061 Q 33.632 33.449 32.917 33.998 A 3.592 3.592 0 0 1 30.914 34.731 A 4.543 4.543 0 0 1 30.623 34.74 Q 29.295 34.74 28.327 33.998 A 6.369 6.369 0 0 1 27.787 33.536 Q 27.262 33.03 27.045 32.535 L 21.78 17.01 Q 16.785 31.77 16.695 32.04 Q 16.625 32.249 16.42 32.594 A 8.294 8.294 0 0 1 16.29 32.805 Q 15.975 33.3 15.57 33.705 A 3.463 3.463 0 0 1 14.203 34.568 A 3.5 3.5 0 0 1 13.095 34.74 Q 11.655 34.74 10.732 34.065 Q 10.127 33.622 9.783 33.179 A 2.452 2.452 0 0 1 9.495 32.715 L 9.18 32.04 L 0.495 7.065 A 17.274 17.274 0 0 1 0.278 6.37 Q 0.086 5.699 0.026 5.233 A 2.978 2.978 0 0 1 0 4.86 Q 0 3.17 2.657 2.155 A 11.067 11.067 0 0 1 3.015 2.025 Q 4.32 1.575 5.377 1.575 A 2.483 2.483 0 0 1 6.046 1.66 A 1.786 1.786 0 0 1 6.998 2.295 A 3.973 3.973 0 0 1 7.355 2.85 Q 7.708 3.502 8.01 4.5 L 12.96 19.53 L 17.865 4.725 A 4.756 4.756 0 0 1 18.548 3.383 A 3.894 3.894 0 0 1 20.16 2.115 Q 20.88 1.8 22.027 1.8 Q 23.175 1.8 24.165 2.543 A 5.96 5.96 0 0 1 24.689 2.981 Q 25.226 3.49 25.418 3.987 A 1.786 1.786 0 0 1 25.425 4.005 L 30.6 19.62 L 35.55 4.5 A 39.529 39.529 0 0 1 35.722 4.016 Q 35.874 3.594 35.998 3.291 A 8.722 8.722 0 0 1 36.135 2.97 A 1.997 1.997 0 0 1 36.399 2.549 Q 36.621 2.272 36.967 2.003 A 2.216 2.216 0 0 1 37.986 1.568 A 3.005 3.005 0 0 1 38.475 1.53 Q 39.173 1.53 40.061 1.801 A 9.54 9.54 0 0 1 40.59 1.98 A 9.213 9.213 0 0 1 41.764 2.486 Q 43.018 3.145 43.418 4.007 A 2.003 2.003 0 0 1 43.605 4.86 A 2.243 2.243 0 0 1 43.575 5.191 Q 43.494 5.72 43.193 6.673 A 27.656 27.656 0 0 1 43.065 7.065 Z\"\n                id=\"0\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 43.086 18.303 A 12.613 12.613 0 0 0 42.255 22.95 Q 42.255 26.55 44.167 29.408 A 15.033 15.033 0 0 0 44.787 30.266 A 12.477 12.477 0 0 0 48.87 33.728 A 14.255 14.255 0 0 0 49.088 33.84 A 12.204 12.204 0 0 0 54.63 35.19 Q 57.6 35.19 60.367 33.818 A 11.139 11.139 0 0 0 62.798 32.178 A 13.411 13.411 0 0 0 65.07 29.543 A 11.285 11.285 0 0 0 66.286 27.148 A 12.272 12.272 0 0 0 67.005 22.905 A 15.236 15.236 0 0 0 66.997 22.403 A 11.536 11.536 0 0 0 63.27 14.018 A 15.63 15.63 0 0 0 63.153 13.909 A 12.197 12.197 0 0 0 54.675 10.53 Q 49.815 10.53 46.035 14.04 A 11.523 11.523 0 0 0 43.086 18.303 Z M 51.66 26.168 A 6.002 6.002 0 0 0 52.792 26.861 A 4.247 4.247 0 0 0 54.585 27.27 Q 56.07 27.27 57.555 26.145 A 3.64 3.64 0 0 0 58.958 23.789 A 5.549 5.549 0 0 0 59.04 22.815 A 5.538 5.538 0 0 0 58.904 21.547 Q 58.679 20.591 58.083 19.935 A 3.403 3.403 0 0 0 57.645 19.53 A 5.255 5.255 0 0 0 56.147 18.703 A 4.603 4.603 0 0 0 54.63 18.45 A 4.572 4.572 0 0 0 52.056 19.251 A 5.908 5.908 0 0 0 51.615 19.575 A 3.63 3.63 0 0 0 50.333 21.724 A 5.598 5.598 0 0 0 50.22 22.883 Q 50.22 25.065 51.66 26.168 Z\"\n                id=\"1\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 77.85 21.42 L 77.85 30.87 A 26.127 26.127 0 0 1 77.846 31.355 Q 77.833 32.034 77.782 32.423 A 2.527 2.527 0 0 1 77.685 32.851 Q 77.619 33.06 77.515 33.29 A 5.552 5.552 0 0 1 77.355 33.615 A 1.798 1.798 0 0 1 76.602 34.299 Q 75.927 34.652 74.777 34.749 A 11.17 11.17 0 0 1 73.845 34.785 Q 71.957 34.785 70.997 34.2 A 2.354 2.354 0 0 1 70.74 34.02 A 2.162 2.162 0 0 1 70.153 33.16 Q 70.023 32.827 69.965 32.417 A 4.611 4.611 0 0 1 69.93 32.085 L 69.93 30.78 L 69.93 14.985 A 26.127 26.127 0 0 1 69.934 14.5 Q 69.947 13.821 69.997 13.433 Q 70.054 12.997 70.287 12.482 A 5.4 5.4 0 0 1 70.38 12.285 A 1.735 1.735 0 0 1 71.135 11.563 Q 72.056 11.07 73.89 11.07 Q 76.59 11.07 77.265 12.105 A 2.955 2.955 0 0 1 77.62 12.79 A 2.377 2.377 0 0 1 77.76 13.59 Q 77.98 13.282 78.394 12.845 A 14.188 14.188 0 0 1 78.412 12.825 A 2.628 2.628 0 0 1 78.687 12.58 Q 79.166 12.202 80.141 11.662 A 25.913 25.913 0 0 1 80.235 11.61 A 8.084 8.084 0 0 1 81.114 11.19 Q 81.977 10.845 82.687 10.845 A 16.518 16.518 0 0 1 83.433 10.861 Q 84.015 10.887 84.465 10.958 A 9.255 9.255 0 0 1 85.219 11.109 A 12.635 12.635 0 0 1 86.04 11.34 Q 86.895 11.61 87.457 12.263 A 1.944 1.944 0 0 1 87.8 12.863 Q 88.02 13.455 88.02 14.355 Q 88.02 15.604 87.377 17.056 A 10.638 10.638 0 0 1 87.165 17.505 A 3.898 3.898 0 0 1 86.607 18.351 A 2.453 2.453 0 0 1 84.69 19.215 Q 83.88 19.215 83.137 18.855 A 3.181 3.181 0 0 0 82.464 18.624 Q 82.133 18.547 81.742 18.516 A 7.107 7.107 0 0 0 81.18 18.495 Q 79.965 18.495 78.907 19.35 A 3.133 3.133 0 0 0 78.263 20.041 A 2.428 2.428 0 0 0 77.85 21.42 Z\"\n                id=\"2\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 112.455 3.96 L 112.455 30.825 A 26.127 26.127 0 0 1 112.451 31.31 Q 112.438 31.989 112.387 32.378 A 2.409 2.409 0 0 1 112.275 32.843 Q 112.201 33.062 112.082 33.299 A 4.846 4.846 0 0 1 111.96 33.525 Q 111.285 34.74 108.157 34.74 Q 105.03 34.74 104.67 32.535 A 6.18 6.18 0 0 1 100.953 34.568 A 9.051 9.051 0 0 1 99.405 34.695 A 9.158 9.158 0 0 1 93.969 32.88 A 13.448 13.448 0 0 1 92.025 31.163 Q 88.695 27.63 88.695 22.928 Q 88.695 18.225 92.047 14.67 A 13.173 13.173 0 0 1 94.485 12.61 A 8.941 8.941 0 0 1 99.405 11.115 A 7.903 7.903 0 0 1 101.607 11.406 A 5.869 5.869 0 0 1 104.58 13.365 L 104.58 3.915 A 26.127 26.127 0 0 1 104.584 3.43 Q 104.597 2.751 104.647 2.363 A 2.669 2.669 0 0 1 104.747 1.92 Q 104.813 1.707 104.916 1.476 A 5.427 5.427 0 0 1 105.053 1.193 Q 105.39 0.54 106.245 0.27 A 4.879 4.879 0 0 1 106.899 0.116 Q 107.587 0 108.517 0 Q 109.935 0 110.79 0.27 A 2.398 2.398 0 0 1 111.348 0.523 A 1.713 1.713 0 0 1 111.982 1.215 A 5.503 5.503 0 0 1 112.19 1.68 Q 112.282 1.915 112.334 2.128 A 2.546 2.546 0 0 1 112.387 2.408 Q 112.44 2.809 112.452 3.521 A 26.668 26.668 0 0 1 112.455 3.96 Z M 97.74 25.65 Q 98.91 26.865 100.575 26.865 A 3.729 3.729 0 0 0 102.164 26.532 A 3.678 3.678 0 0 0 103.343 25.65 Q 104.445 24.435 104.445 22.973 A 3.993 3.993 0 0 0 103.749 20.732 A 5.28 5.28 0 0 0 103.387 20.25 A 3.459 3.459 0 0 0 100.888 19.003 A 4.837 4.837 0 0 0 100.53 18.99 A 4.229 4.229 0 0 0 99.192 19.192 A 3.466 3.466 0 0 0 97.65 20.228 A 4.564 4.564 0 0 0 96.884 21.421 A 3.825 3.825 0 0 0 96.57 22.95 A 3.639 3.639 0 0 0 97.328 25.165 A 4.985 4.985 0 0 0 97.74 25.65 Z\"\n                id=\"3\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 157.995 7.065 L 149.355 32.04 Q 149.265 32.355 149.04 32.805 A 1.488 1.488 0 0 1 148.871 33.061 Q 148.562 33.449 147.847 33.998 A 3.592 3.592 0 0 1 145.844 34.731 A 4.543 4.543 0 0 1 145.553 34.74 Q 144.225 34.74 143.257 33.998 A 6.369 6.369 0 0 1 142.717 33.536 Q 142.192 33.03 141.975 32.535 L 136.71 17.01 Q 131.715 31.77 131.625 32.04 Q 131.555 32.249 131.35 32.594 A 8.294 8.294 0 0 1 131.22 32.805 Q 130.905 33.3 130.5 33.705 A 3.463 3.463 0 0 1 129.133 34.568 A 3.5 3.5 0 0 1 128.025 34.74 Q 126.585 34.74 125.662 34.065 Q 125.057 33.622 124.713 33.179 A 2.452 2.452 0 0 1 124.425 32.715 L 124.11 32.04 L 115.425 7.065 A 17.274 17.274 0 0 1 115.208 6.37 Q 115.016 5.699 114.956 5.233 A 2.978 2.978 0 0 1 114.93 4.86 Q 114.93 3.17 117.587 2.155 A 11.067 11.067 0 0 1 117.945 2.025 Q 119.25 1.575 120.307 1.575 A 2.483 2.483 0 0 1 120.976 1.66 A 1.786 1.786 0 0 1 121.928 2.295 A 3.973 3.973 0 0 1 122.285 2.85 Q 122.638 3.502 122.94 4.5 L 127.89 19.53 L 132.795 4.725 A 4.756 4.756 0 0 1 133.478 3.383 A 3.894 3.894 0 0 1 135.09 2.115 Q 135.81 1.8 136.957 1.8 Q 138.105 1.8 139.095 2.543 A 5.96 5.96 0 0 1 139.619 2.981 Q 140.156 3.49 140.348 3.987 A 1.786 1.786 0 0 1 140.355 4.005 L 145.53 19.62 L 150.48 4.5 A 39.529 39.529 0 0 1 150.652 4.016 Q 150.804 3.594 150.928 3.291 A 8.722 8.722 0 0 1 151.065 2.97 A 1.997 1.997 0 0 1 151.329 2.549 Q 151.551 2.272 151.897 2.003 A 2.216 2.216 0 0 1 152.916 1.568 A 3.005 3.005 0 0 1 153.405 1.53 Q 154.103 1.53 154.991 1.801 A 9.54 9.54 0 0 1 155.52 1.98 A 9.213 9.213 0 0 1 156.694 2.486 Q 157.948 3.145 158.348 4.007 A 2.003 2.003 0 0 1 158.535 4.86 A 2.243 2.243 0 0 1 158.505 5.191 Q 158.424 5.72 158.123 6.673 A 27.656 27.656 0 0 1 157.995 7.065 Z\"\n                id=\"4\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 176.31 25.515 L 165.645 25.515 A 2.036 2.036 0 0 0 166.221 26.928 Q 166.57 27.308 167.13 27.63 A 6.702 6.702 0 0 0 168.592 28.265 A 5.351 5.351 0 0 0 170.1 28.485 Q 172.71 28.485 174.195 27.945 L 174.69 27.765 A 7.6 7.6 0 0 1 175.322 27.507 Q 175.969 27.278 176.455 27.27 A 2.132 2.132 0 0 1 176.49 27.27 A 2.08 2.08 0 0 1 177.848 27.792 Q 178.455 28.298 178.965 29.295 A 7.984 7.984 0 0 1 179.273 30.019 Q 179.407 30.386 179.476 30.714 A 3.164 3.164 0 0 1 179.55 31.365 A 2.962 2.962 0 0 1 177.876 34.013 Q 175.544 35.37 169.965 35.37 A 16.503 16.503 0 0 1 166.821 35.083 A 12.851 12.851 0 0 1 164.048 34.223 A 11.796 11.796 0 0 1 161.906 33.007 A 8.933 8.933 0 0 1 160.02 31.185 Q 157.185 27.54 157.185 23.04 A 14.178 14.178 0 0 1 157.745 18.957 A 10.969 10.969 0 0 1 160.852 13.973 A 12.648 12.648 0 0 1 168.666 10.628 A 16.705 16.705 0 0 1 170.01 10.575 Q 176.265 10.575 179.19 14.985 Q 180.72 17.325 180.72 20.093 A 8.856 8.856 0 0 1 180.599 21.609 Q 180.457 22.425 180.148 23.066 A 3.899 3.899 0 0 1 179.347 24.188 A 5.131 5.131 0 0 1 178.19 25.044 A 3.955 3.955 0 0 1 176.31 25.515 Z M 165.555 21.42 L 171.225 21.42 A 2.959 2.959 0 0 0 171.865 21.357 Q 172.772 21.155 172.91 20.306 A 2.032 2.032 0 0 0 172.935 19.98 A 2.197 2.197 0 0 0 172.779 19.139 A 2.041 2.041 0 0 0 172.148 18.315 A 2.598 2.598 0 0 0 171.296 17.874 Q 170.922 17.756 170.469 17.712 A 5.89 5.89 0 0 0 169.897 17.685 A 3.888 3.888 0 0 0 168.214 18.084 Q 167.602 18.374 166.995 18.878 A 5.302 5.302 0 0 0 166.267 19.599 Q 165.555 20.471 165.555 21.42 Z\"\n                id=\"5\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 206.865 15.03 L 206.865 30.78 A 26.127 26.127 0 0 1 206.861 31.265 Q 206.848 31.944 206.797 32.333 Q 206.745 32.734 206.544 33.23 A 6.286 6.286 0 0 1 206.415 33.525 A 1.827 1.827 0 0 1 205.592 34.288 Q 204.779 34.695 203.332 34.695 Q 200.891 34.695 200.055 34.093 A 1.482 1.482 0 0 1 200.047 34.088 A 2.313 2.313 0 0 1 199.159 32.746 A 3.267 3.267 0 0 1 199.08 32.31 Q 197.415 34.695 193.522 34.695 A 8.659 8.659 0 0 1 188.711 33.2 Q 187.509 32.415 186.373 31.218 A 16.572 16.572 0 0 1 186.3 31.14 Q 182.97 27.585 182.97 22.883 Q 182.97 18.18 186.322 14.648 Q 189.675 11.115 193.68 11.115 A 7.535 7.535 0 0 1 195.402 11.305 A 6.422 6.422 0 0 1 196.47 11.655 A 12.771 12.771 0 0 1 197.052 11.921 Q 197.648 12.212 198.006 12.483 A 2.505 2.505 0 0 1 198.225 12.668 A 7.452 7.452 0 0 1 198.65 13.106 Q 198.868 13.351 199.035 13.59 Q 199.279 11.315 201.981 11.094 A 7.487 7.487 0 0 1 202.59 11.07 Q 204.024 11.07 204.857 11.25 A 3.836 3.836 0 0 1 205.2 11.34 A 2.398 2.398 0 0 1 205.758 11.593 A 1.713 1.713 0 0 1 206.392 12.285 A 5.503 5.503 0 0 1 206.6 12.75 Q 206.692 12.985 206.744 13.198 A 2.546 2.546 0 0 1 206.797 13.478 Q 206.85 13.879 206.862 14.591 A 26.668 26.668 0 0 1 206.865 15.03 Z M 190.845 22.95 A 3.592 3.592 0 0 0 191.647 25.209 A 4.902 4.902 0 0 0 192.015 25.628 A 3.819 3.819 0 0 0 194.785 26.82 A 4.61 4.61 0 0 0 194.85 26.82 A 3.729 3.729 0 0 0 196.439 26.487 A 3.678 3.678 0 0 0 197.618 25.605 Q 198.72 24.39 198.72 22.928 A 3.993 3.993 0 0 0 198.024 20.687 A 5.28 5.28 0 0 0 197.662 20.205 A 3.447 3.447 0 0 0 195.154 18.956 A 4.744 4.744 0 0 0 194.827 18.945 A 4.065 4.065 0 0 0 193.407 19.184 A 3.564 3.564 0 0 0 191.947 20.205 A 4.723 4.723 0 0 0 191.194 21.351 A 3.808 3.808 0 0 0 190.845 22.95 Z\"\n                id=\"6\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 235.8 17.055 L 226.485 33.03 A 3.355 3.355 0 0 1 225.906 33.75 Q 225.615 34.029 225.235 34.281 A 6.173 6.173 0 0 1 225.045 34.403 A 4.458 4.458 0 0 1 224.183 34.818 A 3.311 3.311 0 0 1 223.087 35.01 Q 222.12 35.01 221.242 34.538 Q 220.365 34.065 220.005 33.57 L 219.6 33.075 L 210.24 17.055 A 9.788 9.788 0 0 1 209.81 16.273 Q 209.34 15.308 209.34 14.625 A 2.442 2.442 0 0 1 209.804 13.227 Q 210.344 12.439 211.513 11.712 A 10.27 10.27 0 0 1 211.68 11.61 Q 213.055 10.814 213.965 10.658 A 2.465 2.465 0 0 1 214.38 10.62 A 2.594 2.594 0 0 1 215.036 10.698 A 1.82 1.82 0 0 1 215.932 11.228 A 5.047 5.047 0 0 1 216.318 11.704 Q 216.707 12.243 217.125 13.05 L 223.02 24.39 L 228.915 13.05 A 70.134 70.134 0 0 1 229.147 12.652 Q 229.456 12.127 229.639 11.842 A 9.046 9.046 0 0 1 229.658 11.813 A 2.101 2.101 0 0 1 229.901 11.508 Q 230.12 11.278 230.445 11.048 Q 230.898 10.727 231.604 10.675 A 3.846 3.846 0 0 1 231.885 10.665 Q 232.637 10.665 233.861 11.325 A 12.593 12.593 0 0 1 234.36 11.61 Q 236.31 12.772 236.635 14.06 A 2.117 2.117 0 0 1 236.7 14.58 A 2.537 2.537 0 0 1 236.621 15.174 Q 236.476 15.771 236.066 16.566 A 12.808 12.808 0 0 1 235.8 17.055 Z\"\n                id=\"7\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 256.275 25.515 L 245.61 25.515 A 2.036 2.036 0 0 0 246.186 26.928 Q 246.535 27.308 247.095 27.63 A 6.702 6.702 0 0 0 248.557 28.265 A 5.351 5.351 0 0 0 250.065 28.485 Q 252.675 28.485 254.16 27.945 L 254.655 27.765 A 7.6 7.6 0 0 1 255.287 27.507 Q 255.934 27.278 256.42 27.27 A 2.132 2.132 0 0 1 256.455 27.27 A 2.08 2.08 0 0 1 257.813 27.792 Q 258.42 28.298 258.93 29.295 A 7.984 7.984 0 0 1 259.238 30.019 Q 259.372 30.386 259.441 30.714 A 3.164 3.164 0 0 1 259.515 31.365 A 2.962 2.962 0 0 1 257.841 34.013 Q 255.509 35.37 249.93 35.37 A 16.503 16.503 0 0 1 246.786 35.083 A 12.851 12.851 0 0 1 244.013 34.223 A 11.796 11.796 0 0 1 241.871 33.007 A 8.933 8.933 0 0 1 239.985 31.185 Q 237.15 27.54 237.15 23.04 A 14.178 14.178 0 0 1 237.71 18.957 A 10.969 10.969 0 0 1 240.817 13.973 A 12.648 12.648 0 0 1 248.631 10.628 A 16.705 16.705 0 0 1 249.975 10.575 Q 256.23 10.575 259.155 14.985 Q 260.685 17.325 260.685 20.093 A 8.856 8.856 0 0 1 260.564 21.609 Q 260.422 22.425 260.113 23.066 A 3.899 3.899 0 0 1 259.312 24.188 A 5.131 5.131 0 0 1 258.155 25.044 A 3.955 3.955 0 0 1 256.275 25.515 Z M 245.52 21.42 L 251.19 21.42 A 2.959 2.959 0 0 0 251.83 21.357 Q 252.737 21.155 252.875 20.306 A 2.032 2.032 0 0 0 252.9 19.98 A 2.197 2.197 0 0 0 252.744 19.139 A 2.041 2.041 0 0 0 252.113 18.315 A 2.598 2.598 0 0 0 251.261 17.874 Q 250.887 17.756 250.434 17.712 A 5.89 5.89 0 0 0 249.862 17.685 A 3.888 3.888 0 0 0 248.179 18.084 Q 247.567 18.374 246.96 18.878 A 5.302 5.302 0 0 0 246.232 19.599 Q 245.52 20.471 245.52 21.42 Z\"\n                id=\"8\" vector-effect=\"non-scaling-stroke\" />\n            <path\n                d=\"M 271.53 21.42 L 271.53 30.87 A 26.127 26.127 0 0 1 271.526 31.355 Q 271.513 32.034 271.462 32.423 A 2.527 2.527 0 0 1 271.365 32.851 Q 271.299 33.06 271.195 33.29 A 5.552 5.552 0 0 1 271.035 33.615 A 1.798 1.798 0 0 1 270.282 34.299 Q 269.607 34.652 268.457 34.749 A 11.17 11.17 0 0 1 267.525 34.785 Q 265.637 34.785 264.677 34.2 A 2.354 2.354 0 0 1 264.42 34.02 A 2.162 2.162 0 0 1 263.833 33.16 Q 263.703 32.827 263.645 32.417 A 4.611 4.611 0 0 1 263.61 32.085 L 263.61 30.78 L 263.61 14.985 A 26.127 26.127 0 0 1 263.614 14.5 Q 263.627 13.821 263.677 13.433 Q 263.734 12.997 263.967 12.482 A 5.4 5.4 0 0 1 264.06 12.285 A 1.735 1.735 0 0 1 264.815 11.563 Q 265.736 11.07 267.57 11.07 Q 270.27 11.07 270.945 12.105 A 2.955 2.955 0 0 1 271.3 12.79 A 2.377 2.377 0 0 1 271.44 13.59 Q 271.66 13.282 272.074 12.845 A 14.188 14.188 0 0 1 272.092 12.825 A 2.628 2.628 0 0 1 272.367 12.58 Q 272.846 12.202 273.821 11.662 A 25.913 25.913 0 0 1 273.915 11.61 A 8.084 8.084 0 0 1 274.794 11.19 Q 275.657 10.845 276.367 10.845 A 16.518 16.518 0 0 1 277.113 10.861 Q 277.695 10.887 278.145 10.958 A 9.255 9.255 0 0 1 278.899 11.109 A 12.635 12.635 0 0 1 279.72 11.34 Q 280.575 11.61 281.137 12.263 A 1.944 1.944 0 0 1 281.48 12.863 Q 281.7 13.455 281.7 14.355 Q 281.7 15.604 281.057 17.056 A 10.638 10.638 0 0 1 280.845 17.505 A 3.898 3.898 0 0 1 280.287 18.351 A 2.453 2.453 0 0 1 278.37 19.215 Q 277.56 19.215 276.817 18.855 A 3.181 3.181 0 0 0 276.144 18.624 Q 275.813 18.547 275.422 18.516 A 7.107 7.107 0 0 0 274.86 18.495 Q 273.645 18.495 272.587 19.35 A 3.133 3.133 0 0 0 271.943 20.041 A 2.428 2.428 0 0 0 271.53 21.42 Z\"\n                id=\"9\" vector-effect=\"non-scaling-stroke\" />\n        </g>\n    </svg>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/logo/logo.scss":
/*!**************************************************!*\
  !*** ./src/app/components/shared/logo/logo.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lineDrawing {\n  position: absolute;\n  top: 40px;\n  left: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2xvZ28vbG9nby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9sb2dvL2xvZ28uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaW5lRHJhd2luZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICBsZWZ0OiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/logo/logo.ts":
/*!************************************************!*\
  !*** ./src/app/components/shared/logo/logo.ts ***!
  \************************************************/
/*! exports provided: LogoAnime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAnime", function() { return LogoAnime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_3__);




var LogoAnime = /** @class */ (function () {
    function LogoAnime(router) {
        this.router = router;
    }
    LogoAnime.prototype.ngAfterViewInit = function () {
        animejs__WEBPACK_IMPORTED_MODULE_3__({
            targets: '#lineDrawing .lines path',
            strokeDashoffset: [animejs__WEBPACK_IMPORTED_MODULE_3__["setDashoffset"], 0],
            easing: 'easeInOutCubic',
            color: "#000",
            duration: 550,
            complete: function (anim) {
                document.getElementById('svgGroup').classList.add('animated');
            },
            delay: function (el, i) { return i * 450; },
        });
    };
    LogoAnime = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'logo-anime',
            template: __webpack_require__(/*! ./logo.html */ "./src/app/components/shared/logo/logo.html"),
            styles: [__webpack_require__(/*! ./logo.scss */ "./src/app/components/shared/logo/logo.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoAnime);
    return LogoAnime;
}());



/***/ }),

/***/ "./src/app/components/shared/settings/settings.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/settings/settings.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Settings</h1>\n<div mat-dialog-content class=\"settings__container\">\n  <h3>Highlighting</h3>\n  <mat-list #highlighting>\n    <mat-checkbox class=\"pronouns\" [(ngModel)]=\"settings.highlight.pronoun\" (ngModelChange)=\"update(settings)\">\n      Pronouns\n    </mat-checkbox>\n    <mat-checkbox class=\"root\" [(ngModel)]=\"settings.highlight.root\" (ngModelChange)=\"update(settings)\">\n      Verb\n    </mat-checkbox>\n    <h5>Affixes</h5>\n    <mat-list #affixes>\n      <mat-checkbox class=\"aspect\" [(ngModel)]=\"settings.highlight.aspect\" (ngModelChange)=\"update(settings)\">\n        Aspect\n      </mat-checkbox>\n      <mat-checkbox class=\"prepronominal_prefix\" [(ngModel)]=\"settings.highlight.prepronominal_prefix\"\n        (ngModelChange)=\"update(settings)\">\n        Required\n      </mat-checkbox>\n      <mat-checkbox class=\"tmp_affix\" [(ngModel)]=\"settings.highlight.tmp_affix\" (ngModelChange)=\"update(settings)\">\n        Temp\n      </mat-checkbox>\n      <mat-checkbox class=\"post_aspectual_suffix\" [(ngModel)]=\"settings.highlight.post_aspectual_suffix\"\n        (ngModelChange)=\"update(settings)\">\n        Post Aspectual Suffix\n      </mat-checkbox>\n    </mat-list>\n  </mat-list>\n  <h3>Tiers</h3>\n  <div class='setting__container'>\n    <mat-list #tiers id='tiersSetting'>\n      <mat-checkbox [(ngModel)]=\"settings.level.breakdown_tier\" (ngModelChange)=\"update(settings)\">\n        Breakdown Tier\n      </mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"settings.level.gloss_tier\" (ngModelChange)=\"update(settings)\">\n        Gloss Tier\n      </mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"settings.level.english_tier\" (ngModelChange)=\"update(settings)\">\n        English Tier\n      </mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"settings.level.translation_tier\" (ngModelChange)=\"update(settings)\">\n        Translation Tier\n      </mat-checkbox>\n    </mat-list>\n  </div>\n</div>\n<hr>\n<h3>Advanced</h3>\n<mat-slide-toggle [(ngModel)]=\"settings.test_api\">Use Test API</mat-slide-toggle>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">OK</button>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/settings/settings.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/settings/settings.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  text-align: left; }\n\nmat-checkbox {\n  margin: 10px; }\n\nhr {\n  margin-top: 40px; }\n\n.settings__container {\n  overflow-y: hidden; }\n\n#tiersSetting {\n  display: grid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxpc3Qge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG5ociB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnNldHRpbmdzX19jb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuI3RpZXJzU2V0dGluZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/settings/settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/settings/settings.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dialogRef, settingsService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.settingsService = settingsService;
        this.selected_level = 'advanced';
        this.settings = {
            'level': { 'profile': "advanced", "arg_label": "ag/pat", 'gloss_tier': false, 'english_tier': false, 'translation_tier': true, 'breakdown_tier': false },
            'highlight': { 'root': false, 'pronoun': true, 'aspect': false, 'prepronominal_prefix': false, 'tmp_affix': false, 'post_aspectual_suffix': false },
            'test_api': false
        };
        this.levels = this.settingsService.levels;
        this.settingsService.settings.subscribe(function (settings) { return _this.settings = settings; });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.update = function (setting) {
        this.settingsService.update(setting);
    };
    SettingsComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SettingsComponent.prototype.chooseLevel = function (profile) {
        this.settings.level = this.levels.filter(function (level) { return level['profile'] === profile; })[0];
        this.update(this.settings);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/shared/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/shared/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _services__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: MetaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaData", function() { return MetaData; });
var MetaData = Object.freeze({
    title: 'WordWeaver Sample',
    language: "sample Kanyen'kéha",
    congratulations: 'Yoyánere!'
});


/***/ }),

/***/ "./src/app/pipes/animate-only/animate-only.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/animate-only/animate-only.ts ***!
  \****************************************************/
/*! exports provided: AnimateOnlyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateOnlyPipe", function() { return AnimateOnlyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimateOnlyPipe = /** @class */ (function () {
    function AnimateOnlyPipe() {
    }
    // Returns only Animate pronouns
    AnimateOnlyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.filter(function (pn) { return pn['gloss'].toLowerCase() !== 'it'; });
    };
    AnimateOnlyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'animateOnly',
        })
    ], AnimateOnlyPipe);
    return AnimateOnlyPipe;
}());



/***/ }),

/***/ "./src/app/pipes/capitalize/capitalize.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/capitalize/capitalize.ts ***!
  \************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/decapitalize/decapitalize.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/decapitalize/decapitalize.ts ***!
  \****************************************************/
/*! exports provided: DecapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecapitalizePipe", function() { return DecapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DecapitalizePipe = /** @class */ (function () {
    function DecapitalizePipe() {
    }
    DecapitalizePipe.prototype.transform = function (value) {
        // Move all uppercase characters to lowercase except 'I'
        var find = /([A-H,J-Z]|I\w)/;
        var re = new RegExp(find, 'g');
        value = value.replace(re, function (v) { return v.toLowerCase(); });
        return value;
    };
    DecapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'decapitalize' })
    ], DecapitalizePipe);
    return DecapitalizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animate_only_animate_only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate-only/animate-only */ "./src/app/pipes/animate-only/animate-only.ts");
/* harmony import */ var _capitalize_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capitalize/capitalize */ "./src/app/pipes/capitalize/capitalize.ts");
/* harmony import */ var _decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decapitalize/decapitalize */ "./src/app/pipes/decapitalize/decapitalize.ts");

// Core

// Imports



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_2__["AnimateOnlyPipe"],
                _capitalize_capitalize__WEBPACK_IMPORTED_MODULE_3__["CapitalizePipe"], _decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_4__["DecapitalizePipe"]],
            imports: [],
            exports: [_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_2__["AnimateOnlyPipe"],
                _capitalize_capitalize__WEBPACK_IMPORTED_MODULE_3__["CapitalizePipe"], _decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_4__["DecapitalizePipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/services/affix.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/affix.service.ts ***!
  \*******************************************/
/*! exports provided: AffixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffixService", function() { return AffixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AffixService = /** @class */ (function () {
    function AffixService(http) {
        var _this = this;
        this.http = http;
        this.allAffixCombos = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].prefix + "aff-options";
        this.affix_path = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].prefix + "affixes";
        this.affoptions$ = this.http.get(this.path);
        this.random$ = this.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.getRandomOption(res); }));
        this.http.get(this.affix_path).subscribe(function (d) { return _this.affixes = d; });
        this.affoptions$.subscribe(function (o) { return _this.affixoptions = o; });
    }
    AffixService.prototype.getAffix = function (tag) {
        return this.affixes.filter(function (a) { return a.tag === tag; })[0];
    };
    AffixService.prototype.getAffOption = function (tag) {
        return this.affixoptions.filter(function (a) { return a.tag === tag; })[0];
    };
    AffixService.prototype.getRandomOption = function (options) {
        return options[Math.floor(Math.random() * options.length)];
    };
    AffixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AffixService);
    return AffixService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.user = this.afAuth.authState;
    }
    AuthService.prototype.ngOnInit = function () {
        console.log(this.user);
    };
    AuthService.prototype.loginToast = function (success) {
        // if (success) {
        //   let toast = this.toastCtrl.create({
        //     message: 'Welcome! You are signed in and your settings have been updated',
        //     duration: 1200,
        //     position: 'top'
        //   });
        //   toast.onDidDismiss(() => {
        //     console.log('Dismissed toast');
        //   });
        //   toast.present();
        // } else {
        //   let toast = this.toastCtrl.create({
        //     message: 'Warning: you are not logged in and your changes to settings will not be saved',
        //     duration: 1200,
        //     position: 'top'
        //   });
        //   toast.onDidDismiss(() => {
        //     console.log('Dismissed toast');
        //   });
        //   toast.present();
        // }
    };
    AuthService.prototype.anonSignIn = function () {
        var _this = this;
        this.afAuth.auth.signInAnonymously()
            .then(function (success) {
            _this.loginToast(true);
        }, function (error) {
            console.log(error);
            _this.loginToast(false);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/chart.service.ts ***!
  \*******************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _verb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verb.service */ "./src/app/services/verb.service.ts");
/* harmony import */ var _pronoun_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pronoun.service */ "./src/app/services/pronoun.service.ts");
/* harmony import */ var _affix_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./affix.service */ "./src/app/services/affix.service.ts");
/* harmony import */ var _conjugation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./conjugation.service */ "./src/app/services/conjugation.service.ts");











var ChartService = /** @class */ (function () {
    function ChartService(conjugationService, http, snackBar, verbService, pronounService, affixService) {
        this.conjugationService = conjugationService;
        this.http = http;
        this.snackBar = snackBar;
        this.verbService = verbService;
        this.pronounService = pronounService;
        this.affixService = affixService;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].prefix + "conjugations";
    }
    ChartService.prototype.returnAllData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + '/static/web/assets/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            data = data;
            var chartOption = {
                tooltip: {
                    show: false,
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                toolbox: {
                    feature: {
                        saveAsImage: { title: "save", show: false }
                    }
                },
                series: [{
                        type: 'tree',
                        // label: {
                        //     color: "#fff"
                        // },
                        name: "Kawennon:nis",
                        data: data,
                        layout: 'radial',
                        top: '20%',
                        // left: '0',
                        bottom: '40%',
                        // right: '0',
                        symbolSize: 7,
                        initialTreeDepth: 0,
                        expandAndCollapse: true,
                        roam: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }]
            };
            return chartOption;
        }));
    };
    ChartService.prototype.returnBasicDataFrom = function (list_of_data) {
        if (list_of_data.length > 50) {
            var initial_letters = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"])(list_of_data.map(function (x) { return x['gloss'][0]; }));
            list_of_data = initial_letters.map(function (l) { return { "name": l, "children": list_of_data.filter(function (x) { return x['gloss'][0] === l; }).map(function (x) { return { 'name': x['gloss'] }; }) }; });
        }
        else {
            list_of_data = list_of_data.map(function (x) { return { "name": x['gloss'] }; });
        }
        return list_of_data;
    };
    ChartService.prototype.returnAllProCombinations = function () {
        return this.pronounService.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (pns) {
            var all_pns = [];
            pns.forEach(function (ag_pn) {
                var ag_node = { "name": ag_pn['gloss'], "children": [] };
                pns.forEach(function (pat_pn) {
                    // prevent same person
                    if (ag_pn.person !== pat_pn.person) {
                        //prevent inclusive + second person
                        if (!(ag_pn.person === '2' && pat_pn.inclusivity === 'incl') && !(ag_pn.inclusivity === 'incl' && pat_pn.person === '2')) {
                            ag_node['children'].push({ "name": pat_pn['obj_gloss'] });
                        }
                    }
                    ;
                });
                all_pns.push(ag_node);
            });
            var chartOption = {
                tooltip: {
                    show: false,
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                toolbox: {
                    feature: {
                        saveAsImage: { title: "save", show: false }
                    }
                },
                series: [{
                        type: 'tree',
                        // label: {
                        //     color: "#fff"
                        // },
                        name: name,
                        data: [{ "name": "Who", "children": all_pns }],
                        layout: 'radial',
                        orient: 'LR',
                        top: '30%',
                        // left: '0',
                        bottom: '40%',
                        // right: '0',
                        symbolSize: 7,
                        initialTreeDepth: 1,
                        expandAndCollapse: true,
                        roam: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }]
            };
            return chartOption;
        }));
    };
    ChartService.prototype.returnChoiceAllData = function (datatype, selected, depth) {
        var _this = this;
        if (selected === void 0) { selected = false; }
        if (depth === void 0) { depth = 0; }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].prefix + datatype).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            // prevent too many nodes
            if (selected) {
                data = selected;
            }
            else {
                data = _this.returnBasicDataFrom(data);
            }
            var name = '';
            if (datatype === 'verbs') {
                name = "What";
            }
            else if (datatype === 'pronouns') {
                name = 'Who';
            }
            else if (datatype === 'aff-options') {
                name = 'When';
            }
            data = [{ 'name': name, 'children': data }];
            var chartOption = {
                tooltip: {
                    show: false,
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                toolbox: {
                    feature: {
                        saveAsImage: { title: "save", show: false }
                    }
                },
                series: [{
                        type: 'tree',
                        // label: {
                        //     color: "#fff"
                        // },
                        name: name,
                        data: data,
                        layout: 'radial',
                        orient: 'LR',
                        top: '30%',
                        // left: '0',
                        bottom: '40%',
                        // right: '0',
                        symbolSize: 7,
                        initialTreeDepth: depth,
                        expandAndCollapse: true,
                        roam: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }]
            };
            return chartOption;
        }));
    };
    ChartService.prototype.returnValue = function (conj) {
        var morphemes = [conj.root, conj.pronoun].concat(conj.affixes);
        morphemes = morphemes.sort(function (a, b) {
            return a.position - b.position;
        });
        return morphemes.map(function (m) { return m.value; }).join("");
    };
    ChartService.prototype.createChartData = function (res, order, depth) {
        var _this = this;
        var data = [];
        var verbs = [];
        var chartOption = {
            tooltip: {
                show: false,
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            toolbox: {
                feature: {
                    saveAsImage: { title: "save", show: false }
                }
            },
            legend: {
                top: '2%',
                left: '3%',
                orient: 'vertical',
                data: [],
                borderColor: '#c23531'
            },
            series: []
        };
        var node;
        res.forEach(function (conj) {
            var _a, _b, _c, _d, _e, _f;
            var v = conj.root['tag'];
            var t = _this.affixService.getAffOption(conj.affopt)['gloss'];
            var vb = _this.verbService.getVerb(v);
            var p;
            if (vb['thematic_relation'] === 'red') {
                p = _this.pronounService.getPronoun(conj.pronoun['agent'])['gloss'];
            }
            else if (vb['thematic_relation'] === 'blue') {
                p = _this.pronounService.getPronoun(conj.pronoun['patient'])['gloss'];
            }
            else {
                p = _this.pronounService.getPronoun(conj.pronoun['agent'])['gloss'] + " > " + _this.pronounService.getPronoun(conj.pronoun['patient'])['obj_gloss'];
            }
            var val = _this.returnValue(conj);
            if (order === "TP") {
                node = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["merge"])(node, (_a = {}, _a[v] = (_b = {}, _b[t] = (_c = {}, _c[p] = val, _c), _b), _a));
            }
            else {
                node = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["merge"])(node, (_d = {}, _d[v] = (_e = {}, _e[p] = (_f = {}, _f[t] = val, _f), _e), _d));
            }
        });
        console.log(node);
        for (var verb in node) {
            verbs.push(verb);
            var nv = { "name": verb, "children": [] };
            for (var second in node[verb]) {
                var ns = { "name": second, "children": [] };
                for (var third in node[verb][second]) {
                    var nt = { "name": third, "children": [{ "name": node[verb][second][third] }] };
                    ns['children'].push(nt);
                }
                nv['children'].push(ns);
            }
            data.push(nv);
        }
        var top = 0;
        var initialTreeDepth = 0;
        if (verbs.length < 2) {
            initialTreeDepth = depth;
        }
        else {
            verbs.forEach(function (v) {
                console.log(v);
                chartOption.legend['data'].push({
                    name: v,
                    icon: 'rectangle'
                });
            });
        }
        for (var j = 0; j < data.length; j++) {
            top += 20;
            var ser = {
                type: 'tree',
                name: data[j]["name"],
                data: [data[j]],
                top: top.toString() + '%',
                left: '12%',
                bottom: '25%',
                right: '20%',
                symbolSize: 7,
                initialTreeDepth: initialTreeDepth,
                label: {
                    normal: {
                        position: 'bottom',
                        verticalAlign: 'middle',
                        align: 'middle'
                    }
                },
                leaves: {
                    label: {
                        normal: {
                            position: 'top',
                            verticalAlign: 'middle',
                            align: 'middle'
                        }
                    }
                },
                expandAndCollapse: true,
                roam: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            };
            chartOption.series.push(ser);
        }
        console.log(chartOption);
        return chartOption;
    };
    ChartService.prototype.createChart = function (tableargs, order, depth) {
        var _this = this;
        return this.conjugationService.conjugate(tableargs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return _this.createChartData(res, order, depth); }));
    };
    ChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conjugation_service__WEBPACK_IMPORTED_MODULE_10__["ConjugationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _verb_service__WEBPACK_IMPORTED_MODULE_7__["VerbService"], _pronoun_service__WEBPACK_IMPORTED_MODULE_8__["PronounService"], _affix_service__WEBPACK_IMPORTED_MODULE_9__["AffixService"]])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "./src/app/services/conjugation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/conjugation.service.ts ***!
  \*************************************************/
/*! exports provided: ConjugationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjugationService", function() { return ConjugationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tier.service */ "./src/app/services/tier.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _verb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verb.service */ "./src/app/services/verb.service.ts");
/* harmony import */ var _pronoun_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pronoun.service */ "./src/app/services/pronoun.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");












var ConjugationService = /** @class */ (function () {
    function ConjugationService(http, tierService, snackBar, verbService, pronounService, settingsService) {
        this.http = http;
        this.tierService = tierService;
        this.snackBar = snackBar;
        this.verbService = verbService;
        this.pronounService = pronounService;
        this.settingsService = settingsService;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].prefix + "conjugations";
        this.test_path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].test_prefix + "conjugations";
        this.conjugations$ = this.http.get(this.path);
    }
    ConjugationService.prototype.createRequestUrl = function (tableargs, optional) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var agents = tableargs['agent'];
        var patients = tableargs['patient'];
        var afftags = tableargs['aff-option'];
        var verbtags = tableargs['root'];
        if (agents) {
            agents.forEach(function (agent) {
                params = params.append('agent', agent);
            });
        }
        if (patients) {
            patients.forEach(function (patient) {
                params = params.append('patient', patient);
            });
        }
        if (afftags) {
            afftags.forEach(function (afftag) {
                params = params.append('aff-option', afftag);
            });
        }
        if (verbtags) {
            verbtags.forEach(function (verbtag) {
                params = params.append('root', verbtag);
            });
        }
        if (optional) {
            optional.forEach(function (option) {
                params = params.append(option['param'], option['value']);
            });
        }
        return params;
    };
    ConjugationService.prototype.conjugate = function (tableargs, optional) {
        var params = this.createRequestUrl(tableargs, optional);
        var path = this.path;
        if (this.settingsService.settings.value['test_api']) {
            console.log('true');
            path = this.test_path;
        }
        return this.http.get(path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err.error.message);
        }));
    };
    ConjugationService.prototype.conjugateTable = function (tableargs, test) {
        var _this = this;
        return this.conjugate(tableargs, test = test)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            if (typeof (res) === 'string') {
                // return error as string
                return res;
            }
            else {
                return _this.tierService.createTiers(res);
            }
        }));
    };
    ConjugationService.prototype.returnAffopts = function (res) {
        var affopts = [];
        res['values'].forEach(function (conj) {
            affopts.push(conj.affopt);
        });
        affopts = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(affopts);
        affopts = affopts.map(function (a) { return { "name": a }; });
        return affopts;
    };
    ConjugationService.prototype.returnPros = function (res, v) {
        var _this = this;
        var pronouns = [];
        res.values.forEach(function (conj) {
            if (conj.root['tag'] === v) {
                var vb = _this.verbService.getVerb(v);
                if (vb['thematic_relation'] === 'red') {
                    pronouns.push(_this.pronounService.getPronoun(conj.pronoun['agent'])['gloss']);
                }
                else if (vb['thematic_relation'] === 'blue') {
                    pronouns.push(_this.pronounService.getPronoun(conj.pronoun['patient'])['gloss']);
                }
                else {
                    pronouns.push(_this.pronounService.getPronoun(conj.pronoun['agent'])['gloss'] + ' > ' +
                        _this.pronounService.getPronoun(conj.pronoun['patient'])['obj_gloss']);
                }
            }
        });
        pronouns = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(pronouns);
        pronouns = pronouns.map(function (a) { return { 'name': a }; });
        return pronouns;
    };
    ConjugationService.prototype.returnValue = function (conj) {
        var morphemes = [conj.root, conj.pronoun].concat(conj.affixes);
        morphemes = morphemes.sort(function (a, b) {
            return a.position - b.position;
        });
        return morphemes.map(function (m) { return m.value; }).join('');
    };
    ConjugationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _tier_service__WEBPACK_IMPORTED_MODULE_4__["TierService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _verb_service__WEBPACK_IMPORTED_MODULE_9__["VerbService"], _pronoun_service__WEBPACK_IMPORTED_MODULE_10__["PronounService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], ConjugationService);
    return ConjugationService;
}());



/***/ }),

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");


// Firebase


var DatabaseService = /** @class */ (function () {
    function DatabaseService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.usersRef = this.db.list('users/');
        this.afAuth.authState.subscribe(function (user) {
            _this.currentUser = user;
            if (_this.currentUser) {
                _this.userID = _this.currentUser.uid;
                _this.currentUserRef = db.database.ref('users/' + _this.userID);
            }
        });
    }
    DatabaseService.prototype.saveSettings = function (settings) {
        return this.db.list('users/').update(this.userID, {
            settings: settings
        }).then(function (success) {
            return true;
        }, function (error) {
            return false;
        });
    };
    DatabaseService.prototype.getSettings = function () {
        return this.currentUserRef.once('value').then(function (data) {
            return data.settings;
        });
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AffixService, AuthService, ChartService, ConjugationService, DatabaseService, PronounService, SelectionService, SettingsService, TierService, VerbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affix.service */ "./src/app/services/affix.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AffixService", function() { return _affix_service__WEBPACK_IMPORTED_MODULE_0__["AffixService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.service */ "./src/app/services/chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return _chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"]; });

/* harmony import */ var _conjugation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conjugation.service */ "./src/app/services/conjugation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConjugationService", function() { return _conjugation_service__WEBPACK_IMPORTED_MODULE_3__["ConjugationService"]; });

/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database.service */ "./src/app/services/database.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]; });

/* harmony import */ var _pronoun_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pronoun.service */ "./src/app/services/pronoun.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PronounService", function() { return _pronoun_service__WEBPACK_IMPORTED_MODULE_5__["PronounService"]; });

/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection.service */ "./src/app/services/selection.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return _selection_service__WEBPACK_IMPORTED_MODULE_6__["SelectionService"]; });

/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return _settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]; });

/* harmony import */ var _tier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tier.service */ "./src/app/services/tier.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TierService", function() { return _tier_service__WEBPACK_IMPORTED_MODULE_8__["TierService"]; });

/* harmony import */ var _verb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verb.service */ "./src/app/services/verb.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerbService", function() { return _verb_service__WEBPACK_IMPORTED_MODULE_9__["VerbService"]; });













/***/ }),

/***/ "./src/app/services/pronoun.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pronoun.service.ts ***!
  \*********************************************/
/*! exports provided: PronounService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PronounService", function() { return PronounService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PronounService = /** @class */ (function () {
    function PronounService(http) {
        var _this = this;
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].prefix + "pronouns";
        this.pronouns$ = this.http.get(this.path);
        this.random$ = this.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.getRandomPro(res); }));
        this.pronouns$.subscribe(function (pns) { return _this.pronouns = pns; });
    }
    PronounService.prototype.getPronoun = function (tag) {
        return this.pronouns.filter(function (p) { return p.tag === tag; })[0];
    };
    PronounService.prototype.getRandomPro = function (options) {
        return options[Math.floor(Math.random() * options.length)];
    };
    PronounService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PronounService);
    return PronounService;
}());



/***/ }),

/***/ "./src/app/services/selection.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/selection.service.ts ***!
  \***********************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SelectionService = /** @class */ (function () {
    function SelectionService(http) {
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].prefix + "conjugations";
        this.conjugations$ = this.http.get(this.path);
        this.selection = { 'root': [], 'aff-option': [], 'patient': [], 'agent': [] };
    }
    SelectionService.prototype.updateVerbs = function (v) {
        this.selection['root'] = v;
    };
    SelectionService.prototype.updateAgents = function (a) {
        this.selection['agent'] = a;
    };
    SelectionService.prototype.updatePatients = function (p) {
        this.selection['patient'] = p;
    };
    SelectionService.prototype.updateAffOptions = function (ao) {
        this.selection['aff-option'] = ao;
    };
    SelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SelectionService);
    return SelectionService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");

// Core


// import { ToastController } from 'ionic-angular';
// Services


// Firebase

var SettingsService = /** @class */ (function () {
    function SettingsService(db, dbService, authService) {
        var _this = this;
        this.db = db;
        this.dbService = dbService;
        this.authService = authService;
        this.levels = [{ 'profile': "advanced", "arg_label": "ag/pat", 'gloss_tier': false, 'english_tier': false, 'translation_tier': true, 'breakdown_tier': false },
            { 'profile': "beginner", "arg_label": "sub/obj", 'gloss_tier': false, 'english_tier': false, 'translation_tier': true, 'breakdown_tier': false }];
        this.help = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.initial_settings = {
            'level': this.levels[0],
            'highlight': { 'root': false, 'pronoun': true, 'aspect': false, 'prepronominal_prefix': false, 'tmp_affix': false, 'post_aspectual_suffix': false },
            'test_api': false
        };
        this.settings = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initial_settings);
        this.authService.user.subscribe(function (user) {
            if (user) {
                _this.db.object('users/' + user.uid).valueChanges().subscribe(function (data) {
                    if (data) {
                        _this.settings.next(data['settings']);
                    }
                });
            }
        });
    }
    SettingsService.prototype.updateToast = function (success) {
        // if (success) {
        //     let toast = this.toastCtrl.create({
        //         message: 'Setting saved',
        //         duration: 1000,
        //         position: 'bottom'
        //     });
        //     toast.onDidDismiss(() => {
        //         console.log('Dismissed toast');
        //     });
        //     toast.present();
        // } else {
        //     let toast = this.toastCtrl.create({
        //         message: 'Warning: you are not logged in and this setting was not saved',
        //         duration: 1000,
        //         position: 'bottom'
        //     });
        //     toast.onDidDismiss(() => {
        //         console.log('Dismissed toast');
        //     });
        //     toast.present();
        // }
    };
    SettingsService.prototype.update = function (settings) {
        var _this = this;
        this.dbService.saveSettings(settings).then(function (result) { _this.updateToast(result); console.log(result); });
        this.settings.next(settings);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/tier.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tier.service.ts ***!
  \******************************************/
/*! exports provided: TierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TierService", function() { return TierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _affix_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./affix.service */ "./src/app/services/affix.service.ts");
/* harmony import */ var _pronoun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pronoun.service */ "./src/app/services/pronoun.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _verb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verb.service */ "./src/app/services/verb.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

// Core


// Services





var TierService = /** @class */ (function () {
    function TierService(affixService, pronounService, verbService, http, settingsService, snackBar) {
        this.affixService = affixService;
        this.pronounService = pronounService;
        this.verbService = verbService;
        this.http = http;
        this.settingsService = settingsService;
        this.snackBar = snackBar;
        this.errorTier = "Oh no! We couldn't conjugate this. \n                      Please make sure you're connected to the internet and try again.\n                      If the problem keeps happening, please contact us!";
    }
    // Determine if object is null or has any null properties. Intended for Agent and Patient
    TierService.prototype.hasNull = function (target) {
        if (target) {
            for (var member in target) {
                if (target[member] == null) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    };
    // Return 'agent' or 'patient' or both
    TierService.prototype.determinePNType = function (conjugation, verb_role) {
        var pn_roles = [];
        if (verb_role === 'red') {
            pn_roles.push('agent');
        }
        else if (verb_role === 'blue') {
            pn_roles.push('patient');
        }
        else {
            pn_roles.push('agent');
            pn_roles.push('patient');
        }
        return pn_roles;
    };
    // This is an old recycled function and is very awkward. Should be changed.
    TierService.prototype.createTiers = function (conjugations) {
        var _this = this;
        return conjugations.map(function (conjugation) {
            var index = conjugations.indexOf(conjugation);
            var values = conjugation.values;
            return {
                'main': _this.createTier(values, { 'keys': ['value'], 'seperator': '' }, { 'keys': ['value'], 'seperator': '' }, { 'keys': ['value'], 'seperator': '' }),
                'secondary': _this.createTier(values, { 'keys': [' root'], 'seperator': '' }, {
                    'keys': [
                        'agent',
                        'patient'
                    ],
                    'seperator': ' > '
                }, { 'keys': ['gloss'], 'seperator': '' }),
                'ternary': _this.createTier(values, { 'keys': ['gloss'], 'seperator': '' }, {
                    'keys': [
                        'gloss',
                        'obj_gloss'
                    ],
                    'seperator': ' > '
                }, { 'keys': ['gloss'], 'seperator': '' }),
                'translation': conjugations[index]['translation'],
                'error': _this.errorTier,
                'affopt': values['affopt'],
                'pronoun': values['pronoun']
            };
        });
    };
    TierService.prototype.createTier = function (conjugation, verb_key_obj, pn_key_obj, aff_key_obj) {
        var _this = this;
        // console.log(conjugation)
        // use key_obj whose condition key is true
        var verb_role = this.verbService.getVerb(conjugation['root']['tag'])['thematic_relation'];
        // PN
        var pronoun_role = this.determinePNType(conjugation, verb_role);
        if (pronoun_role.indexOf('agent') > -1 && pronoun_role.indexOf('patient') > -1) {
            conjugation.pronoun['gloss'] = this.pronounService.getPronoun(conjugation.pronoun['agent'])['gloss'];
            conjugation.pronoun['obj_gloss'] = this.pronounService.getPronoun(conjugation.pronoun['patient'])['obj_gloss'];
        }
        else if (pronoun_role.indexOf('agent') > -1) {
            conjugation.pronoun['gloss'] = this.pronounService.getPronoun(conjugation.pronoun['agent'])['gloss'];
        }
        else {
            conjugation.pronoun['gloss'] = this.pronounService.getPronoun(conjugation.pronoun['patient'])['gloss'];
        }
        var pn_keys = pn_key_obj['keys'];
        var pronoun_value;
        if (pronoun_role.length > 1) {
            pronoun_value = pn_keys.map(function (key) {
                return conjugation.pronoun[key];
            }).join(pn_key_obj['seperator']);
        }
        else {
            if (conjugation.pronoun.hasOwnProperty(pn_keys[0])) {
                pronoun_value = conjugation.pronoun[pn_keys[0]];
            }
            else {
                pronoun_value = pn_keys[0];
            }
        }
        var pronoun_role_css = pronoun_role;
        if (verb_role === 'red' && conjugation['affixes'].filter(function (x) { return x.tag === 'perf'; }).length > 0) {
            pronoun_role_css = ['patient'];
        }
        // But it should give Agent if it's there, else Patient
        var pronoun_obj = {
            'position': conjugation['pronoun']['position'],
            'value': pronoun_value, 'classes': [pronoun_role_css.join(' '), 'pronoun'].join(' '), 'type': 'pronoun'
        };
        // Verb
        conjugation.root['gloss'] = this.verbService.getVerb(conjugation.root['tag'])['gloss'];
        var verb_value = verb_key_obj['keys'].map(function (key) {
            // if the key exists in the conjugation provided, return the value
            if (conjugation.root.hasOwnProperty(key)) {
                return conjugation.root[key];
                // else return the key
            }
            else {
                return key;
            }
        }).join(verb_key_obj['seperator']);
        var verb_root_obj = {
            'position': conjugation['root']['position'],
            'value': verb_value, 'classes': ['root'].join(' '), 'type': 'root'
        };
        // Affixes
        var affixes = [];
        conjugation.affixes.forEach(function (morpheme) {
            if (morpheme != null) {
                morpheme['class'] = morpheme['type'];
                morpheme['gloss'] = _this.affixService.getAffix(morpheme['tag'])['gloss'];
                affixes.push(morpheme);
            }
        });
        // Add non-null affix html to affixes_html_arr
        var affixes_obj_arr = [];
        affixes.forEach(function (affix) {
            if (affix.value != null && affix.value !== '') {
                var aff_value = aff_key_obj['keys'].map(function (key) {
                    // if the key exists in the conjugation provided, return the value
                    if (affix.hasOwnProperty(key)) {
                        return affix[key];
                        // else return the key
                    }
                    else {
                        return key;
                    }
                }).join(aff_key_obj['seperator']);
                affixes_obj_arr.push({
                    'position': affix.position, 'value': aff_value,
                    'classes': [affix['class']].join(' '), 'type': affix['type']
                });
            }
        });
        // Sort elements
        var tier_arr = [pronoun_obj, verb_root_obj].concat(affixes_obj_arr);
        tier_arr.sort(function (a, b) { return a['position'] - b['position']; });
        return tier_arr;
    };
    TierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_affix_service__WEBPACK_IMPORTED_MODULE_3__["AffixService"], _pronoun_service__WEBPACK_IMPORTED_MODULE_4__["PronounService"],
            _verb_service__WEBPACK_IMPORTED_MODULE_6__["VerbService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], TierService);
    return TierService;
}());



/***/ }),

/***/ "./src/app/services/verb.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/verb.service.ts ***!
  \******************************************/
/*! exports provided: VerbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbService", function() { return VerbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var VerbService = /** @class */ (function () {
    function VerbService(http) {
        var _this = this;
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].prefix + "verbs";
        this.verbs$ = this.http.get(this.path);
        this.random$ = this.verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.getRandomOption(res); }));
        this.verbs$.subscribe(function (verbs) { return _this.verbs = verbs; });
    }
    VerbService.prototype.getRandomOption = function (options) {
        return options[Math.floor(Math.random() * options.length)];
    };
    VerbService.prototype.getVerb = function (tag) {
        return this.verbs.filter(function (v) { return v.tag === tag; })[0];
    };
    VerbService.prototype.searchEntries = function (terms) {
        var _this = this;
        return terms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) { return _this.verbs.filter(function (verb) {
            if (val && val.length > 2) {
                return (verb.gloss.toLowerCase().indexOf(val.toLowerCase()) > -1 || verb.tag.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }
            else {
                return true;
            }
        }); }));
    };
    VerbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerbService);
    return VerbService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBkM2v1la_3Arbnt0qziB_TYQB0nFij3kk",
        authDomain: "wordweavertoy.firebaseapp.com",
        databaseURL: "https://wordweavertoy.firebaseio.com",
        projectId: "wordweavertoy",
        storageBucket: "wordweavertoy.appspot.com",
        messagingSenderId: "568985112547",
        appId: "1:568985112547:web:525d184b31008b60"
    },
    base: "//localhost:5000",
    prefix: "/api/v1/",
    test_prefix: "/api/v2/",
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




// Material Design

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pinea/wordweaver-GUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map