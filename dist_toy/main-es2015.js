(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../package.json":
/*!************************************************!*\
  !*** /Users/pinea/wordweaver-UI/package.json ***!
  \************************************************/
/*! exports provided: name, version, description, homepage, author, keywords, main, private, scripts, husky, commitlint, devDependencies, engines, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"WordWeaver-UI\",\"version\":\"1.0.0\",\"description\":\"WordWeaver UI\",\"homepage\":\"https://github.com/roedoejet/wordweaver-UI\",\"author\":{\"name\":\"Aidan Pine\",\"email\":\"aidan.pine@nrc-cnrc.gc.ca\"},\"keywords\":[\"angular\",\"angular 8\",\"electron\",\"typescript\",\"eslint\",\"spectron\",\"sass\",\"language\"],\"main\":\"main.js\",\"private\":true,\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --open\",\"start:prod\":\"npm run build:prod && npm run server\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build-toy\":\"ng build --outputPath ./dist_toy\",\"lint\":\"ng lint\",\"test\":\"ng lint && ng test --configuration=test\",\"watch\":\"ng test --configuration=test --browsers ChromeHeadless --watch --reporters dots\",\"e2e\":\"ng e2e\",\"release\":\"standard-version && git push --follow-tags origin master\",\"server\":\"node ./projects/server/server.js\",\"contributors:add\":\"all-contributors add\",\"contributors:generate\":\"all-contributors generate && node .all-contributors-html.js\",\"contributors:check\":\"all-contributors check\",\"tslint-check\":\"tslint-config-prettier-check ./tslint.json\",\"extract-translations\":\"ngx-translate-extract --input ./projects/word-weaver/src --output ./projects/word-weaver/src/assets/i18n/*.json --clean --sort --format namespaced-json --marker _\",\"update-translations\":\"./update_translations.sh\",\"postinstall\":\"ngcc\"},\"husky\":{\"hooks\":{\"pre-commit\":\"pretty-quick --staged\",\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\"}},\"commitlint\":{\"extends\":[\"@commitlint/config-conventional\"]},\"devDependencies\":{\"@angular-builders/custom-webpack\":\"8.4.1\",\"@angular-devkit/build-angular\":\"0.901.0\",\"@angular-eslint/builder\":\"0.0.1-alpha.18\",\"@angular-extensions/elements\":\"^9.0.1\",\"@angular-extensions/model\":\"^8.1.0\",\"@angular/animations\":\"~9.1.0\",\"@angular/cdk\":\"^9.2.0\",\"@angular/cli\":\"^9.1.0\",\"@angular/common\":\"^9.1.0\",\"@angular/compiler\":\"^9.1.0\",\"@angular/compiler-cli\":\"^9.1.0\",\"@angular/core\":\"^9.1.0\",\"@angular/forms\":\"^9.1.0\",\"@angular/language-service\":\"^9.1.0\",\"@angular/material\":\"^9.2.0\",\"@angular/platform-browser\":\"^9.1.0\",\"@angular/platform-browser-dynamic\":\"^9.1.0\",\"@angular/router\":\"^9.1.0\",\"@biesbjerg/ngx-translate-extract\":\"^6.0.3\",\"@biesbjerg/ngx-translate-extract-marker\":\"^1.0.0\",\"@commitlint/cli\":\"^8.3.5\",\"@commitlint/config-conventional\":\"^8.3.4\",\"@fortawesome/angular-fontawesome\":\"^0.6.0\",\"@fortawesome/fontawesome-free\":\"^5.12.1\",\"@fortawesome/fontawesome-svg-core\":\"^1.2.27\",\"@fortawesome/free-brands-svg-icons\":\"^5.12.1\",\"@fortawesome/free-solid-svg-icons\":\"^5.12.1\",\"@ngrx/effects\":\"^9.0.0-beta.1\",\"@ngrx/entity\":\"^9.0.0-beta.1\",\"@ngrx/router-store\":\"^9.0.0-beta.1\",\"@ngrx/store\":\"^9.0.0-beta.1\",\"@ngrx/store-devtools\":\"^9.0.0-beta.1\",\"@ngx-translate/core\":\"12.0.0\",\"@ngx-translate/http-loader\":\"4.0.0\",\"@types/echarts\":\"^4.4.4\",\"@types/jasmine\":\"3.3.16\",\"@types/jasminewd2\":\"2.0.8\",\"@types/mocha\":\"5.2.7\",\"@types/node\":\"12.11.1\",\"@types/uuid\":\"^3.4.7\",\"@typescript-eslint/eslint-plugin\":\"2.19.0\",\"@typescript-eslint/parser\":\"2.19.0\",\"bootstrap\":\"^4.4.1\",\"browser-detect\":\"^0.2.28\",\"chai\":\"4.2.0\",\"codelyzer\":\"^5.2.2\",\"conventional-changelog-cli\":\"2.0.32\",\"core-js\":\"3.1.4\",\"eslint\":\"6.8.0\",\"eslint-plugin-import\":\"2.20.1\",\"express\":\"^4.16.4\",\"husky\":\"^4.2.1\",\"jasmine-core\":\"3.4.0\",\"jasmine-spec-reporter\":\"4.2.1\",\"karma\":\"4.2.0\",\"karma-coverage-istanbul-reporter\":\"2.1.1\",\"karma-electron\":\"6.3.0\",\"karma-jasmine\":\"2.0.1\",\"karma-jasmine-html-reporter\":\"1.4.2\",\"madge\":\"^3.8.0\",\"mocha\":\"6.2.2\",\"npm-run-all\":\"4.1.5\",\"peaks.js\":\"^0.19.0\",\"prettier\":\"^1.19.1\",\"pretty-quick\":\"^2.0.1\",\"protractor\":\"^5.4.3\",\"rimraf\":\"^3.0.2\",\"rxjs\":\"6.5.5\",\"spectron\":\"10.0.1\",\"standard-version\":\"^7.1.0\",\"ts-node\":\"~8.6.2\",\"tslib\":\"^1.11.1\",\"tslint\":\"~6.0.0\",\"tslint-config-prettier\":\"^1.18.0\",\"typescript\":\"3.8.3\",\"uuid\":\"^3.4.0\",\"wait-on\":\"4.0.0\",\"webdriver-manager\":\"12.1.7\",\"webpack-bundle-analyzer\":\"^3.6.0\",\"zone.js\":\"0.10.3\"},\"engines\":{\"node\":\">=10.13.0\"},\"dependencies\":{\"echarts\":\"^4.7.0\",\"ngx-echarts\":\"^4.2.2\"}}");

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: "",
        redirectTo: "wordmaker",
        pathMatch: "full"
    },
    {
        path: "about",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "./src/app/pages/about/about.module.ts")).then(m => m.AboutModule)
    },
    {
        path: "settings",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsModule)
    },
    {
        path: "info",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-info-info-module */ "pages-info-info-module").then(__webpack_require__.bind(null, /*! ./pages/info/info.module */ "./src/app/pages/info/info.module.ts")).then(m => m.InfoModule)
    },
    {
        path: "wordmaker",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-wordmaker-wordmaker-module */ "pages-wordmaker-wordmaker-module").then(__webpack_require__.bind(null, /*! ./pages/wordmaker/wordmaker.module */ "./src/app/pages/wordmaker/wordmaker.module.ts")).then(m => m.WordmakerModule)
    },
    {
        path: "tableviewer",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-tableviewer-tableviewer-module */ "pages-tableviewer-tableviewer-module").then(__webpack_require__.bind(null, /*! ./pages/tableviewer/tableviewer.module */ "./src/app/pages/tableviewer/tableviewer.module.ts")).then(m => m.TableviewerModule)
    },
    {
        path: "**",
        redirectTo: "wordmaker"
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
                scrollPositionRestoration: "enabled",
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                // useHash supports github.io demo page, remove in your app
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        scrollPositionRestoration: "enabled",
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            // angular
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            // core
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            // shared
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            // app
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [
        // angular
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        // core
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
        // shared
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        // app
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    // angular
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    // core
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                    // shared
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    // app
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var browser_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-detect */ "../../node_modules/browser-detect/dist/browser-detect.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ "../../node_modules/@biesbjerg/ngx-translate-extract-marker/fesm2015/biesbjerg-ngx-translate-extract-marker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/settings/settings.actions */ "./src/app/core/settings/settings.actions.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/logo/logo.component */ "./src/app/shared/logo/logo.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");























const _c0 = function (a0) { return [a0]; };
function AppComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r219); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return _r211.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r217 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, item_r217.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, item_r217.label), " ");
} }
function AppComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r220 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, item_r220.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, item_r220.label), " ");
} }
function AppComponent_span_28_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r223 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", l_r223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r223.toUpperCase(), " ");
} }
function AppComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function AppComponent_span_28_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r225); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r224.onLanguageSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_span_28_mat_option_2_Template, 2, 2, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r221 = ctx.ngIf;
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", language_r221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r214.languages);
} }
function AppComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", ctx_r216.envName, "]");
} }
const _c1 = function () { return ["fab", "github"]; };
class AppComponent {
    constructor(store, storageService) {
        this.store = store;
        this.storageService = storageService;
        this.isProd = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
        this.envName = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].envName;
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].versions.app;
        this.year = new Date().getFullYear();
        this.logo = __webpack_require__(/*! ../../assets/logo.png */ "./src/assets/logo.png");
        this.languages = ["en", "fr"];
        this.navigation = [
            { link: "wordmaker", label: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])("ww.menu.wordmaker") },
            { link: "tableviewer", label: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])("ww.menu.tableviewer") },
            // { link: "info", label: marker("ww.menu.info") },
            { link: "about", label: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])("ww.menu.about") }
        ];
        this.navigationSideMenu = [
            ...this.navigation,
            { link: "settings", label: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])("ww.menu.settings") }
        ];
    }
    static isIEorEdgeOrSafari() {
        return ["ie", "edge", "safari"].includes(Object(browser_detect__WEBPACK_IMPORTED_MODULE_0__["default"])().name);
    }
    ngOnInit() {
        this.storageService.testLocalStorage();
        if (AppComponent.isIEorEdgeOrSafari()) {
            this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_6__["actionSettingsChangeAnimationsPageDisabled"])({
                pageAnimationsDisabled: true
            }));
        }
        this.isAuthenticated$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["selectIsAuthenticated"]));
        this.stickyHeader$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["selectSettingsStickyHeader"]));
        this.language$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["selectSettingsLanguage"]));
        this.theme$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["selectEffectiveTheme"]));
    }
    onLoginClick() {
        this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["authLogin"])());
    }
    onLogoutClick() {
        this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["authLogout"])());
    }
    onLanguageSelect({ value: language }) {
        this.store.dispatch(Object(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_6__["actionSettingsChangeLanguage"])({ language }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ww-root"]], decls: 51, vars: 30, consts: [["mode", "push"], ["sidenav", ""], [1, "branding"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "nav"], ["color", "primary"], ["mat-icon-button", "", 1, "d-md-none", "mobile-only", 3, "click"], ["icon", "bars"], ["routerLink", "", 1, "branding", "spacer", "center", "d-inline", "d-sm-none"], ["routerLink", "", 1, "branding", "spacer", "center", "d-none", "d-sm-inline", "d-md-none"], ["routerLink", "", 1, "branding", "spacer", "d-none", "d-md-inline"], [1, "branding", "ui-button"], [1, "d-none", "d-md-inline"], ["mat-button", "", "class", "nav-button", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "margin-right-20"], ["mat-icon-button", "", "routerLink", "settings", 1, "d-none", "d-sm-inline"], ["icon", "cog"], [4, "ngIf"], [1, "content"], ["o", "outlet"], [1, "footer"], [1, "row"], [1, "col-sm-12", "links"], ["href", "https://www.github.com/roedoejet/wordweaver-UI", "target", "_blank"], [3, "icon"], [1, "col-12", "signature"], [1, "year"], [1, "d-block", "d-sm-none"], ["matTooltipPosition", "before", "href", "https://github.com/roedoejet/ReadAlong-Studio/blob/master/CHANGELOG.md", 3, "matTooltip"], ["icon", "rocket"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "click"], ["mat-button", "", "routerLinkActive", "active", 1, "nav-button", 3, "routerLink"], [3, "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_a_10_Template, 3, 6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r226); const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return _r211.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ww-logo", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AppComponent_button_23_Template, 3, 6, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AppComponent_span_28_Template, 3, 2, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "router-outlet", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "fa-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AppComponent_span_50_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("theme-wrapper " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 17, ctx.theme$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 19, "ww.title-short"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navigationSideMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 21, ctx.stickyHeader$) ? "fixed" : "inherit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-elevation-z4", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 23, ctx.stickyHeader$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navigation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 25, ctx.language$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimations", _r215.isActivated && _r215.activatedRoute.routeConfig.data && _r215.activatedRoute.routeConfig.data.title)("@specialAnimations", _r215 && _r215.isActivated && _r215.activatedRouteData && _r215.activatedRouteData["animation"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 27, "ww.footer.changelog"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.version, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isProd);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], styles: [".theme-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  display: flex;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  padding-top: 4px;\n  text-overflow: ellipsis;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .branding.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  width: 48px;\n  height: 48px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  margin: 0 0 0 20px;\n  width: 40px;\n  font-size: 14px;\n}\n\n@media (max-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 0 10px;\n  }\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  margin-top: 64px;\n  overflow: hidden;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0 15px;\n  text-align: center;\n  bottom: 0;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: padding 0.5s;\n  display: inline-block;\n  padding: 20px 5px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 35px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75px;\n  padding: 0 0 0 3px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  transition: width 0.5s;\n}\n\n@media (min-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n}\n\n@media (max-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 0;\n    padding: 0;\n  }\n}\n\n@media (max-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 5px;\n  }\n}\n\n@media (min-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15px;\n  }\n}\n\n@media (max-width: 600px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 56px !important;\n  }\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 8px 10px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 2px 10px 0 0;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNERjs7QURHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0RKOztBREdJO0VBQ0Usa0JBQUE7QUNETjs7QURJSTtFQUNFLGVBQUE7QUNGTjs7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0FDSFI7O0FETU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pSOztBRFFJO0VBQ0Usa0JBQUE7QUNOTjs7QURTSTtFQUNFLGNBQUE7QUNQTjs7QURVSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNSTjs7QURXSTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUNUTjtBQUNGOztBRGFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDWEo7O0FEYUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1hOOztBRGNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0FDYk47O0FEZU07RUFDRSxlQUFBO0FDYlI7O0FEZ0JVO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDZFo7O0FEZ0JZO0VBQ0UscUJBQUE7QUNkZDs7QURpQlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ2ZkOztBRGtCWTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNoQmQ7O0FEb0JVO0VBQ0U7SUFDRSxrQkFBQTtFQ2xCWjtBQUNGOztBRHFCVTtFQUNFO0lBQ0UsYUFBQTtFQ25CWjtFRHFCWTtJQUNFLFFBQUE7SUFDQSxVQUFBO0VDbkJkO0FBQ0Y7O0FEdUJVO0VBQ0U7SUFDRSxpQkFBQTtFQ3JCWjtBQUNGOztBRHlCUTtFQUNFO0lBQ0Usa0JBQUE7RUN2QlY7RUR5QlU7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUN2Qlo7QUFDRjs7QUQ4QkU7RUFDRTtJQUNFLDJCQUFBO0VDNUJKO0FBQ0Y7O0FEZ0NBO0VBQ0UsWUFBQTtBQzdCRjs7QUQrQkU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM3Qko7O0FEK0JJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FDN0JOOztBRGdDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQzlCTjs7QURrQ0U7RUFDRSxjQUFBO0FDaENKIiwiZmlsZSI6InByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL3V0aWxpdGllcy9jb25maWdcIjtcblxuLnRoZW1lLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLm5hdi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgIH1cblxuICAgIGZhLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIC5icmFuZGluZyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAmLmNlbnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICBtYXQtc2VsZWN0IHtcbiAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgbGcpKSB7XG4gICAgICAubmF2LWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5jb250ZW50IHtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogNjRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXM7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAzcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBsZykpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBtZCkpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsIHNtKSkge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgc20pKSB7XG4gICAgICAgICAgLnNpZ25hdHVyZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDU2cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG5cbiAgLmJyYW5kaW5nIHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgbWFyZ2luOiAycHggMTBweCAwIDA7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDNweDtcbiAgICB9XG4gIH1cblxuICAubWF0LW5hdi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuIiwiLnRoZW1lLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5uYXYgLm5hdi1idXR0b24ge1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLm5hdiBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5uYXYgLmJyYW5kaW5nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAubmF2IC5icmFuZGluZy5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLm5hdiAuYnJhbmRpbmcgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLm5hdiAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5uYXYgLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5uYXYgbWF0LXNlbGVjdCB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiApIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC5uYXYgLm5hdi1idXR0b24ge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5jb250ZW50IHtcbiAgZmxleDogMSAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciAuZm9vdGVyIC5yb3cge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggNXB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAubGlua3MgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciAuZm9vdGVyIC5yb3cgLmxpbmtzIGEgZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3NXB4O1xuICBwYWRkaW5nOiAwIDAgMCAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogKSB7XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciAuZm9vdGVyIC5yb3cgLmxpbmtzIGEge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6ICkge1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciAuZm9vdGVyIC5yb3cgLmxpbmtzIGEgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6ICkge1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6ICkge1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5zaWduYXR1cmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBtYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5zaWduYXR1cmUgYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5tYXQtc2lkZW5hdiAuYnJhbmRpbmcge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5tYXQtc2lkZW5hdiAuYnJhbmRpbmcgaW1nIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDJweCAxMHB4IDAgMDtcbn1cbm1hdC1zaWRlbmF2IC5icmFuZGluZyBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cbm1hdC1zaWRlbmF2IC5tYXQtbmF2LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn0iXX0= */"], data: { animation: [_core_core_module__WEBPACK_IMPORTED_MODULE_5__["routeAnimations"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["specialAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "ww-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
                animations: [_core_core_module__WEBPACK_IMPORTED_MODULE_5__["routeAnimations"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["specialAnimations"]]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/affix/affix.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/affix/affix.service.ts ***!
  \*********************************************/
/*! exports provided: AffixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffixService", function() { return AffixService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







class AffixService {
    constructor(http) {
        this.http = http;
        this.allAffixCombos = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].prefix + `aff-options`;
        this.affix_path = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].prefix + `affixes`;
        this.affoptions$ = this.http.get(this.path);
        this.random$ = this.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.getRandomOption(res)));
        this.http.get(this.affix_path).subscribe(d => (this.affixes = d));
        this.affoptions$.subscribe(o => (this.affixoptions = o));
    }
    getAffix(tag) {
        return this.affixes.filter(a => a.tag === tag)[0];
    }
    getAffOption(tag) {
        return this.affixoptions.filter(a => a.tag === tag)[0];
    }
    getRandomOption(options) {
        return options[Math.floor(Math.random() * options.length)];
    }
}
AffixService.ɵfac = function AffixService_Factory(t) { return new (t || AffixService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AffixService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AffixService, factory: AffixService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AffixService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/animations/animations.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/animations/animations.service.ts ***!
  \*******************************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class AnimationsService {
    constructor() {
        AnimationsService.routeAnimationType = "NONE";
    }
    static isRouteAnimationsType(type) {
        return AnimationsService.routeAnimationType === type;
    }
    updateRouteAnimationType(pageAnimations, elementsAnimations) {
        AnimationsService.routeAnimationType =
            pageAnimations && elementsAnimations
                ? "ALL"
                : pageAnimations
                    ? "PAGE"
                    : elementsAnimations
                        ? "ELEMENTS"
                        : "NONE";
    }
}
AnimationsService.routeAnimationType = "NONE";
AnimationsService.ɵfac = function AnimationsService_Factory(t) { return new (t || AnimationsService)(); };
AnimationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimationsService, factory: AnimationsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/animations/route.animations.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/animations/route.animations.ts ***!
  \*****************************************************/
/*! exports provided: ROUTE_ANIMATIONS_ELEMENTS, stepperAnimation, routeAnimations, specialAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return ROUTE_ANIMATIONS_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepperAnimation", function() { return stepperAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return routeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialAnimations", function() { return specialAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return isRouteAnimationsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return isRouteAnimationsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return isRouteAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return isRouteAnimationsElements; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.service */ "./src/app/core/animations/animations.service.ts");


const ROUTE_ANIMATIONS_ELEMENTS = "route-animations-elements";
const STEPS_ALL = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter > *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, position: "fixed" }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter ." + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave > *", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)", opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-3%)", opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "fixed" })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter > *", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: "translateY(-3%)",
                opacity: 0,
                position: "static"
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)", opacity: 1 }))
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter ." + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(75, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(10%)", opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)", opacity: 1 }))
    ]), { optional: true })
];
const stepperAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("specialAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("Wordmaker => Stepper", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "fixed", width: "100%" }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => Wordmaker", [STEPS_ALL[0], STEPS_ALL[2]])
]);
const STEPS_NONE = [];
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
const routeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsAll, STEPS_ALL),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsNone, STEPS_NONE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsPage, STEPS_PAGE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
const specialAnimations = [stepperAnimation];
function isRouteAnimationsAll() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType("ALL");
}
function isRouteAnimationsNone() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType("NONE");
}
function isRouteAnimationsPage() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType("PAGE");
}
function isRouteAnimationsElements() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType("ELEMENTS");
}


/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.selectors */ "./src/app/core/auth/auth.selectors.ts");





class AuthGuardService {
    constructor(store) {
        this.store = store;
    }
    canActivate() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsAuthenticated"]));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/auth/auth.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.actions.ts ***!
  \*******************************************/
/*! exports provided: authLogin, authLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLogin", function() { return authLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLogout", function() { return authLogout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");

const authLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth] Login");
const authLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth] Logout");


/***/ }),

/***/ "./src/app/core/auth/auth.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.effects.ts ***!
  \*******************************************/
/*! exports provided: AUTH_KEY, AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/auth/auth.actions.ts");










const AUTH_KEY = "AUTH";
class AuthEffects {
    constructor(actions$, localStorageService, router) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.router = router;
        this.login = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["authLogin"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true }))), { dispatch: false });
        this.logout = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["authLogout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.router.navigate([""]);
            this.localStorageService.setItem(AUTH_KEY, {
                isAuthenticated: false
            });
        })), { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/auth/auth.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.reducer.ts ***!
  \*******************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/auth/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");


const initialState = {
    isAuthenticated: false
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLogin"], state => (Object.assign(Object.assign({}, state), { isAuthenticated: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLogout"], state => (Object.assign(Object.assign({}, state), { isAuthenticated: false }))));
function authReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/core/auth/auth.selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/core/auth/auth.selectors.ts ***!
  \*********************************************/
/*! exports provided: selectAuth, selectIsAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuth", function() { return selectAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticated", function() { return selectIsAuthenticated; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core.state */ "./src/app/core/core.state.ts");


const selectAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectAuthState"], (state) => state);
const selectIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectAuthState"], (state) => state.isAuthenticated);


/***/ }),

/***/ "./src/app/core/conjugation/conjugation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/conjugation/conjugation.service.ts ***!
  \*********************************************************/
/*! exports provided: ConjugationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjugationService", function() { return ConjugationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _affix_affix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../affix/affix.service */ "./src/app/core/affix/affix.service.ts");
/* harmony import */ var _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pronoun/pronoun.service */ "./src/app/core/pronoun/pronoun.service.ts");
/* harmony import */ var _verb_verb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../verb/verb.service */ "./src/app/core/verb/verb.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../settings/settings.selectors */ "./src/app/core/settings/settings.selectors.ts");

















class ConjugationService {
    constructor(http, affixService, verbService, pronounService, store) {
        this.http = http;
        this.affixService = affixService;
        this.verbService = verbService;
        this.pronounService = pronounService;
        this.store = store;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].prefix + `conjugations`;
        this.test_path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].test_prefix + `conjugations`;
        this.conjugations$ = this.http.get(this.path);
        this.errorTier = `Oh no! We couldn't conjugate this. 
  Please make sure you're connected to the internet and try again.
  If the problem keeps happening, please contact us!`;
        this.settings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_10__["selectSettings"]));
    }
    createRequestUrl(tableargs, optional) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const agents = tableargs["agent"];
        const patients = tableargs["patient"];
        const afftags = tableargs["aff-option"];
        const verbtags = tableargs["root"];
        if (agents) {
            agents.forEach(agent => {
                if (agent) {
                    params = params.append("agent", agent);
                }
            });
        }
        if (patients) {
            patients.forEach(patient => {
                if (patient) {
                    params = params.append("patient", patient);
                }
            });
        }
        if (afftags) {
            afftags.forEach(afftag => {
                if (afftag) {
                    params = params.append("aff-option", afftag);
                }
            });
        }
        if (verbtags) {
            verbtags.forEach(verbtag => {
                if (verbtag) {
                    params = params.append("root", verbtag);
                }
            });
        }
        if (optional) {
            optional.forEach(option => {
                if (option) {
                    params = params.append(option["param"], option["value"]);
                }
            });
        }
        return params;
    }
    conjugate(tableargs, optional) {
        const params = this.createRequestUrl(tableargs, optional);
        let path = this.path;
        return this.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(settings => {
            if (settings.testApi) {
                path = this.test_path;
            }
            return this.http.get(path, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err.error.message);
            }));
        }));
    }
    conjugateTable(tableargs, test) {
        return this.conjugate(tableargs, (test = test)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (typeof res === "string") {
                // return error as string
                return res;
            }
            else {
                return this.createTiers(res);
            }
        }));
    }
    returnAffopts(res) {
        let affopts = [];
        res["values"].forEach(conjugation => {
            affopts.push(conjugation.affopt);
        });
        affopts = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["uniq"])(affopts);
        affopts = affopts.map(a => {
            return { name: a };
        });
        return affopts;
    }
    returnPros(res, v) {
        let pronouns = [];
        res.values.forEach(conjugation => {
            if (conjugation.root["tag"] === v) {
                const vb = this.verbService.getVerb(v);
                if (vb["thematic_relation"] === "red") {
                    pronouns.push(this.pronounService.getPronoun(conjugation.pronoun["agent"])["gloss"]);
                }
                else if (vb["thematic_relation"] === "blue") {
                    pronouns.push(this.pronounService.getPronoun(conjugation.pronoun["patient"])["gloss"]);
                }
                else {
                    pronouns.push(this.pronounService.getPronoun(conjugation.pronoun["agent"])["gloss"] +
                        " > " +
                        this.pronounService.getPronoun(conjugation.pronoun["patient"])["obj_gloss"]);
                }
            }
        });
        pronouns = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["uniq"])(pronouns);
        pronouns = pronouns.map(a => {
            return { name: a };
        });
        return pronouns;
    }
    returnValue(conjugation) {
        let morphemes = [conjugation.root, conjugation.pronoun].concat(conjugation.affixes);
        morphemes = morphemes.sort(function (a, b) {
            return a.position - b.position;
        });
        return morphemes.map(m => m.value).join("");
    }
    // Determine if object is null or has any null properties. Intended for Agent and Patient
    hasNull(target) {
        if (target) {
            for (const member in target) {
                if (target[member] == null) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // Return 'agent' or 'patient' or both
    determinePNType(conjugation, verb_role) {
        const pn_roles = [];
        if (verb_role === "red") {
            pn_roles.push("agent");
        }
        else if (verb_role === "blue") {
            pn_roles.push("patient");
        }
        else {
            pn_roles.push("agent");
            pn_roles.push("patient");
        }
        return pn_roles;
    }
    // This is an old recycled function and is very awkward. Should be changed.
    createTiers(conjugations) {
        return conjugations.map(conjugation => {
            const index = conjugations.indexOf(conjugation);
            const values = conjugation.values;
            return {
                main: this.createTier(values, { keys: ["value"], seperator: "" }, { keys: ["value"], seperator: "" }, { keys: ["value"], seperator: "" }),
                secondary: this.createTier(values, { keys: [" root"], seperator: "" }, {
                    keys: ["agent", "patient"],
                    seperator: " > "
                }, { keys: ["gloss"], seperator: "" }),
                ternary: this.createTier(values, { keys: ["gloss"], seperator: "" }, {
                    keys: ["gloss", "obj_gloss"],
                    seperator: " > "
                }, { keys: ["gloss"], seperator: "" }),
                translation: conjugations[index]["translation"],
                error: this.errorTier,
                affopt: values["affopt"],
                pronoun: values["pronoun"]
            };
        });
    }
    createTier(conjugation, verb_key_obj, pn_key_obj, aff_key_obj) {
        // console.log(conjugation)
        // use key_obj whose condition key is true
        const verb_role = this.verbService.getVerb(conjugation["root"]["tag"])["thematic_relation"];
        // PN
        const pronoun_role = this.determinePNType(conjugation, verb_role);
        if (pronoun_role.indexOf("agent") > -1 &&
            pronoun_role.indexOf("patient") > -1) {
            conjugation.pronoun["gloss"] = this.pronounService.getPronoun(conjugation.pronoun["agent"])["gloss"];
            conjugation.pronoun["obj_gloss"] = this.pronounService.getPronoun(conjugation.pronoun["patient"])["obj_gloss"];
        }
        else if (pronoun_role.indexOf("agent") > -1) {
            conjugation.pronoun["gloss"] = this.pronounService.getPronoun(conjugation.pronoun["agent"])["gloss"];
        }
        else {
            conjugation.pronoun["gloss"] = this.pronounService.getPronoun(conjugation.pronoun["patient"])["gloss"];
        }
        const pn_keys = pn_key_obj["keys"];
        let pronoun_value;
        if (pronoun_role.length > 1) {
            pronoun_value = pn_keys
                .map(key => {
                return conjugation.pronoun[key];
            })
                .join(pn_key_obj["seperator"]);
        }
        else {
            if (conjugation.pronoun.hasOwnProperty(pn_keys[0])) {
                pronoun_value = conjugation.pronoun[pn_keys[0]];
            }
            else {
                pronoun_value = pn_keys[0];
            }
        }
        let pronoun_role_css = pronoun_role;
        // This should be pulled out into the API. This is Kawennonnis-specific.
        if ((verb_role === "red" &&
            conjugation["affixes"].filter(x => x.tag === "perf").length > 0) ||
            (conjugation["affixes"].filter(x => x.tag === "stative").length > 0 &&
                conjugation["root"]["tag"].endsWith("perf-r"))) {
            pronoun_role_css = ["patient"];
        }
        // But it should give Agent if it's there, else Patient
        const pronoun_obj = {
            position: conjugation["pronoun"]["position"],
            value: pronoun_value,
            classes: [pronoun_role_css.join(" "), "pronoun"].join(" "),
            type: "pronoun"
        };
        // Verb
        conjugation.root["gloss"] = this.verbService.getVerb(conjugation.root["tag"])["gloss"];
        const verb_value = verb_key_obj["keys"]
            .map(key => {
            // if the key exists in the conjugation provided, return the value
            if (conjugation.root.hasOwnProperty(key)) {
                return conjugation.root[key];
                // else return the key
            }
            else {
                return key;
            }
        })
            .join(verb_key_obj["seperator"]);
        const verb_root_obj = {
            position: conjugation["root"]["position"],
            value: verb_value,
            classes: ["root"].join(" "),
            type: "root"
        };
        // Affixes
        const affixes = [];
        conjugation.affixes.forEach(morpheme => {
            if (morpheme != null) {
                morpheme["class"] = morpheme["type"];
                morpheme["gloss"] = this.affixService.getAffix(morpheme["tag"])["gloss"];
                affixes.push(morpheme);
            }
        });
        // Add non-null affix html to affixes_html_arr
        const affixes_obj_arr = [];
        affixes.forEach(affix => {
            if (affix.value != null && affix.value !== "") {
                const aff_value = aff_key_obj["keys"]
                    .map(key => {
                    // if the key exists in the conjugation provided, return the value
                    if (affix.hasOwnProperty(key)) {
                        return affix[key];
                        // else return the key
                    }
                    else {
                        return key;
                    }
                })
                    .join(aff_key_obj["seperator"]);
                affixes_obj_arr.push({
                    position: affix.position,
                    value: aff_value,
                    classes: [affix["class"]].join(" "),
                    type: affix["type"]
                });
            }
        });
        // Sort elements
        const tier_arr = [pronoun_obj, verb_root_obj].concat(affixes_obj_arr);
        tier_arr.sort((a, b) => a["position"] - b["position"]);
        return tier_arr;
    }
}
ConjugationService.ɵfac = function ConjugationService_Factory(t) { return new (t || ConjugationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_affix_affix_service__WEBPACK_IMPORTED_MODULE_6__["AffixService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_verb_verb_service__WEBPACK_IMPORTED_MODULE_8__["VerbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_7__["PronounService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
ConjugationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConjugationService, factory: ConjugationService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConjugationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _affix_affix_service__WEBPACK_IMPORTED_MODULE_6__["AffixService"] }, { type: _verb_verb_service__WEBPACK_IMPORTED_MODULE_8__["VerbService"] }, { type: _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_7__["PronounService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: TitleService, selectAuth, authLogin, authLogout, routeAnimations, specialAnimations, LocalStorageService, selectIsAuthenticated, ROUTE_ANIMATIONS_ELEMENTS, AnimationsService, AuthGuardService, selectRouterState, NotificationService, selectEffectiveTheme, selectSettingsLanguage, selectSettingsStickyHeader, AffixService, ConjugationService, PronounService, TableviewerSelectionService, WordmakerSelectionService, VerbService, HttpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core.state */ "./src/app/core/core.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return _core_state__WEBPACK_IMPORTED_MODULE_20__["selectRouterState"]; });

/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/core/auth/auth.effects.ts");
/* harmony import */ var _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.selectors */ "./src/app/core/auth/auth.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuth", function() { return _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_22__["selectAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticated", function() { return _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_22__["selectIsAuthenticated"]; });

/* harmony import */ var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.actions */ "./src/app/core/auth/auth.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authLogin", function() { return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_23__["authLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authLogout", function() { return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_23__["authLogout"]; });

/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]; });

/* harmony import */ var _title_title_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./title/title.service */ "./src/app/core/title/title.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return _title_title_service__WEBPACK_IMPORTED_MODULE_25__["TitleService"]; });

/* harmony import */ var _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__["routeAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specialAnimations", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__["specialAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__["ROUTE_ANIMATIONS_ELEMENTS"]; });

/* harmony import */ var _animations_animations_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./animations/animations.service */ "./src/app/core/animations/animations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return _animations_animations_service__WEBPACK_IMPORTED_MODULE_27__["AnimationsService"]; });

/* harmony import */ var _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./error-handler/app-error-handler.service */ "./src/app/core/error-handler/app-error-handler.service.ts");
/* harmony import */ var _router_custom_serializer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./router/custom-serializer */ "./src/app/core/router/custom-serializer.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_30__["LocalStorageService"]; });

/* harmony import */ var _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./http-interceptors/http-error.interceptor */ "./src/app/core/http-interceptors/http-error.interceptor.ts");
/* harmony import */ var _google_analytics_google_analytics_effects__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./google-analytics/google-analytics.effects */ "./src/app/core/google-analytics/google-analytics.effects.ts");
/* harmony import */ var _notifications_notification_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./notifications/notification.service */ "./src/app/core/notifications/notification.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notifications_notification_service__WEBPACK_IMPORTED_MODULE_33__["NotificationService"]; });

/* harmony import */ var _settings_settings_effects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./settings/settings.effects */ "./src/app/core/settings/settings.effects.ts");
/* harmony import */ var _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./settings/settings.selectors */ "./src/app/core/settings/settings.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEffectiveTheme", function() { return _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__["selectEffectiveTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSettingsLanguage", function() { return _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__["selectSettingsLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSettingsStickyHeader", function() { return _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__["selectSettingsStickyHeader"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _affix_affix_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./affix/affix.service */ "./src/app/core/affix/affix.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AffixService", function() { return _affix_affix_service__WEBPACK_IMPORTED_MODULE_39__["AffixService"]; });

/* harmony import */ var _conjugation_conjugation_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./conjugation/conjugation.service */ "./src/app/core/conjugation/conjugation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConjugationService", function() { return _conjugation_conjugation_service__WEBPACK_IMPORTED_MODULE_40__["ConjugationService"]; });

/* harmony import */ var _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pronoun/pronoun.service */ "./src/app/core/pronoun/pronoun.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PronounService", function() { return _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_41__["PronounService"]; });

/* harmony import */ var _tableviewer_selection_tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./tableviewer-selection/tableviewer-selection.service */ "./src/app/core/tableviewer-selection/tableviewer-selection.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableviewerSelectionService", function() { return _tableviewer_selection_tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_42__["TableviewerSelectionService"]; });

/* harmony import */ var _wordmaker_selection_wordmaker_selection_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./wordmaker-selection/wordmaker-selection.service */ "./src/app/core/wordmaker-selection/wordmaker-selection.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordmakerSelectionService", function() { return _wordmaker_selection_wordmaker_selection_service__WEBPACK_IMPORTED_MODULE_43__["WordmakerSelectionService"]; });

/* harmony import */ var _verb_verb_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./verb/verb.service */ "./src/app/core/verb/verb.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerbService", function() { return _verb_verb_service__WEBPACK_IMPORTED_MODULE_44__["VerbService"]; });

/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");






















































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, `${_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].i18nPrefix}/assets/i18n/`, ".json");
}
class CoreModule {
    constructor(parentModule, faIconLibrary) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. Import only in AppModule");
        }
        faIconLibrary.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faRocket"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faPowerOff"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faPlayCircle"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__["faMediumM"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__["faMusic"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__["faYoutube"]);
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconLibrary"])); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_31__["HttpErrorInterceptor"], multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_28__["AppErrorHandler"] },
        { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStateSerializer"], useClass: _router_custom_serializer__WEBPACK_IMPORTED_MODULE_29__["CustomSerializer"] }
    ], imports: [[
            // angular
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
            // material
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"],
            // ngrx
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_core_state__WEBPACK_IMPORTED_MODULE_20__["reducers"], { metaReducers: _core_state__WEBPACK_IMPORTED_MODULE_20__["metaReducers"] }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([
                _auth_auth_effects__WEBPACK_IMPORTED_MODULE_21__["AuthEffects"],
                _settings_settings_effects__WEBPACK_IMPORTED_MODULE_34__["SettingsEffects"],
                _google_analytics_google_analytics_effects__WEBPACK_IMPORTED_MODULE_32__["GoogleAnalyticsEffects"]
            ]),
            _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
                ? []
                : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    name: "Angular NgRx Material Starter"
                }),
            // 3rd party
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            })
        ],
        // angular
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        // material
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"],
        // 3rd party
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [
        // angular
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
        // material
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], 
        // 3rd party
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]], exports: [
        // angular
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        // material
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"],
        // 3rd party
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    // angular
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
                    // material
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"],
                    // ngrx
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_core_state__WEBPACK_IMPORTED_MODULE_20__["reducers"], { metaReducers: _core_state__WEBPACK_IMPORTED_MODULE_20__["metaReducers"] }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([
                        _auth_auth_effects__WEBPACK_IMPORTED_MODULE_21__["AuthEffects"],
                        _settings_settings_effects__WEBPACK_IMPORTED_MODULE_34__["SettingsEffects"],
                        _google_analytics_google_analytics_effects__WEBPACK_IMPORTED_MODULE_32__["GoogleAnalyticsEffects"]
                    ]),
                    _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
                        ? []
                        : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                            name: "Angular NgRx Material Starter"
                        }),
                    // 3rd party
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                        }
                    })
                ],
                declarations: [],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_31__["HttpErrorInterceptor"], multi: true },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_28__["AppErrorHandler"] },
                    { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStateSerializer"], useClass: _router_custom_serializer__WEBPACK_IMPORTED_MODULE_29__["CustomSerializer"] }
                ],
                exports: [
                    // angular
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    // material
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"],
                    // 3rd party
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.state.ts":
/*!************************************!*\
  !*** ./src/app/core/core.state.ts ***!
  \************************************/
/*! exports provided: reducers, metaReducers, selectAuthState, selectSettingsState, selectRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsState", function() { return selectSettingsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return selectRouterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-reducers/init-state-from-local-storage.reducer */ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts");
/* harmony import */ var _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-reducers/debug.reducer */ "./src/app/core/meta-reducers/debug.reducer.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
/* harmony import */ var _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.reducer */ "./src/app/core/settings/settings.reducer.ts");







const reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"],
    settings: _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["settingsReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};
const metaReducers = [
    _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_3__["initStateFromLocalStorage"]
];
if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].test) {
        metaReducers.unshift(_meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_4__["debug"]);
    }
}
const selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("auth");
const selectSettingsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("settings");
const selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("router");


/***/ }),

/***/ "./src/app/core/error-handler/app-error-handler.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/error-handler/app-error-handler.service.ts ***!
  \*****************************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _notifications_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications/notification.service */ "./src/app/core/notifications/notification.service.ts");
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ "../../node_modules/@biesbjerg/ngx-translate-extract-marker/fesm2015/biesbjerg-ngx-translate-extract-marker.js");






/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
class AppErrorHandler extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] {
    constructor(notificationsService) {
        super();
        this.notificationsService = notificationsService;
    }
    handleError(error) {
        let displayMessage;
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            displayMessage = Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])("ww.error.dev");
        }
        else {
            displayMessage = Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__["marker"])("ww.error.general");
        }
        this.notificationsService.translated(displayMessage, {}, "error");
        super.handleError(error);
    }
}
AppErrorHandler.ɵfac = function AppErrorHandler_Factory(t) { return new (t || AppErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notifications_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
AppErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppErrorHandler, factory: AppErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _notifications_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/google-analytics/google-analytics.effects.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/google-analytics/google-analytics.effects.ts ***!
  \*******************************************************************/
/*! exports provided: GoogleAnalyticsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsEffects", function() { return GoogleAnalyticsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






class GoogleAnalyticsEffects {
    constructor(router) {
        this.router = router;
        this.pageView = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => () => this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            window.ga("set", "page", event.urlAfterRedirects);
            window.ga("send", "pageview");
        })), { dispatch: false });
    }
}
GoogleAnalyticsEffects.ɵfac = function GoogleAnalyticsEffects_Factory(t) { return new (t || GoogleAnalyticsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GoogleAnalyticsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleAnalyticsEffects, factory: GoogleAnalyticsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/http-interceptors/http-error.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/http-interceptors/http-error.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




/** Passes HttpErrorResponse to application-wide error handler */
class HttpErrorInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            error: (err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    const appErrorHandler = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]);
                    appErrorHandler.handleError(err);
                }
            }
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


const APP_PREFIX = "ww-";
class LocalStorageService {
    constructor() { }
    static loadInitialState() {
        return Object.keys(localStorage).reduce((state, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, "")
                    .toLowerCase()
                    .split(".")
                    .map(key => key
                    .split("-")
                    .map((token, index) => index === 0
                    ? token
                    : token.charAt(0).toUpperCase() + token.slice(1))
                    .join(""));
                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    getItem(key) {
        return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
    }
    removeItem(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage() {
        const testValue = "testValue";
        const testKey = "testKey";
        let retrievedValue;
        const errorMessage = "localStorage did not return expected value";
        this.setItem(testKey, testValue);
        retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/meta-reducers/debug.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/meta-reducers/debug.reducer.ts ***!
  \*****************************************************/
/*! exports provided: debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
function debug(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        console.log(`[DEBUG] action: ${action.type}`, {
            payload: action.payload,
            oldState: state,
            newState
        });
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: initStateFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStateFromLocalStorage", function() { return initStateFromLocalStorage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");


function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()].includes(action.type)) {
            return Object.assign(Object.assign({}, newState), _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].loadInitialState());
        }
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/notifications/notification.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/notifications/notification.service.ts ***!
  \************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






class NotificationService {
    constructor(snackBar, zone, translation) {
        this.snackBar = snackBar;
        this.zone = zone;
        this.translation = translation;
        this.config = { duration: 2000, verticalPosition: "top" };
    }
    translated(toTranslate, data, notificationType) {
        this.translation
            .get(toTranslate, data)
            .subscribe(translated => {
            if (notificationType === "default") {
                this.default(translated);
            }
            else if (notificationType === "info") {
                this.info(translated);
            }
            else if (notificationType === "success") {
                this.success(translated);
            }
            else if (notificationType === "warn") {
                this.warn(translated);
            }
            else if (notificationType === "error") {
                this.error(translated);
            }
            else {
                return false;
            }
        })
            .unsubscribe();
    }
    default(message) {
        const config = Object.assign(Object.assign({}, this.config), { panelClass: "default-notification-overlay" });
        this.show(message, config);
    }
    info(message) {
        const config = Object.assign(Object.assign({}, this.config), { panelClass: "info-notification-overlay" });
        this.show(message, config);
    }
    success(message) {
        const config = Object.assign(Object.assign({}, this.config), { panelClass: "success-notification-overlay" });
        this.show(message, config);
    }
    warn(message) {
        const config = Object.assign(Object.assign({}, this.config), { panelClass: "warning-notification-overlay" });
        this.show(message, config);
    }
    error(message) {
        const config = Object.assign(Object.assign({}, this.config), {
            panelClass: "error-notification-overlay",
            duration: 3000,
            verticalPosition: "bottom"
        });
        this.show(message, config);
    }
    show(message, configuration) {
        // Need to open snackBar from Angular zone to prevent issues with its position per
        // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
        this.zone.run(() => this.snackBar.open(message, null, configuration));
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pronoun/pronoun.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/pronoun/pronoun.service.ts ***!
  \*************************************************/
/*! exports provided: PronounService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PronounService", function() { return PronounService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






class PronounService {
    constructor(http) {
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].prefix + `pronouns`;
        this.pronouns$ = this.http.get(this.path);
        this.random$ = this.pronouns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => this.getRandomPro(res)));
        this.pronouns$.subscribe(pns => (this.pronouns = pns));
    }
    getPronoun(tag) {
        return this.pronouns.filter(p => p.tag === tag)[0];
    }
    getRandomPro(options) {
        return options[Math.floor(Math.random() * options.length)];
    }
}
PronounService.ɵfac = function PronounService_Factory(t) { return new (t || PronounService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PronounService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PronounService, factory: PronounService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PronounService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/router/custom-serializer.ts":
/*!**************************************************!*\
  !*** ./src/app/core/router/custom-serializer.ts ***!
  \**************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class CustomSerializer {
    serialize(routerState) {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams } } = routerState;
        const { params } = route;
        return { url, params, queryParams };
    }
}
CustomSerializer.ɵfac = function CustomSerializer_Factory(t) { return new (t || CustomSerializer)(); };
CustomSerializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomSerializer, factory: CustomSerializer.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSerializer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/settings/settings.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/core/settings/settings.actions.ts ***!
  \***************************************************/
/*! exports provided: actionSettingsChangeLanguage, actionSettingsChangeLevel, actionSettingsChangeHighlight, actionSettingsChangeTestApi, actionSettingsChangeTheme, actionSettingsChangeAutoNightMode, actionSettingsChangeStickyHeader, actionSettingsChangeAnimationsPage, actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeAnimationsElements, actionSettingsChangeHour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeLanguage", function() { return actionSettingsChangeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeLevel", function() { return actionSettingsChangeLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeHighlight", function() { return actionSettingsChangeHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeTestApi", function() { return actionSettingsChangeTestApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeTheme", function() { return actionSettingsChangeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeAutoNightMode", function() { return actionSettingsChangeAutoNightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeStickyHeader", function() { return actionSettingsChangeStickyHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeAnimationsPage", function() { return actionSettingsChangeAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeAnimationsPageDisabled", function() { return actionSettingsChangeAnimationsPageDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeAnimationsElements", function() { return actionSettingsChangeAnimationsElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSettingsChangeHour", function() { return actionSettingsChangeHour; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");

const actionSettingsChangeLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Language", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeLevel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Level", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeHighlight = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Highlight", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeTestApi = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change TestApi", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Theme", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeAutoNightMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Auto Night Mode", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeStickyHeader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Sticky Header", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeAnimationsPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Animations Page", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeAnimationsPageDisabled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Animations Page Disabled", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeAnimationsElements = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Animations Elements", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionSettingsChangeHour = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Settings] Change Hours", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/settings/settings.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/core/settings/settings.effects.ts ***!
  \***************************************************/
/*! exports provided: SETTINGS_KEY, SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return SETTINGS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core.state */ "./src/app/core/core.state.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _animations_animations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animations/animations.service */ "./src/app/core/animations/animations.service.ts");
/* harmony import */ var _title_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../title/title.service */ "./src/app/core/title/title.service.ts");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings.actions */ "./src/app/core/settings/settings.actions.ts");
/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings.selectors */ "./src/app/core/settings/settings.selectors.ts");























const SETTINGS_KEY = "SETTINGS";
const INIT = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])("ww-init-effect-trigger");
class SettingsEffects {
    constructor(actions$, store, router, overlayContainer, localStorageService, titleService, animationsService, translateService) {
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.overlayContainer = overlayContainer;
        this.localStorageService = localStorageService;
        this.titleService = titleService;
        this.animationsService = animationsService;
        this.translateService = translateService;
        this.changeHour = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(60000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mapTo"])(new Date().getHours()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(hour => Object(_settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeHour"])({ hour }))));
        this.persistSettings = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeAnimationsElements"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeAnimationsPage"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeAnimationsPageDisabled"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeAutoNightMode"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeLanguage"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeStickyHeader"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeTestApi"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeLevel"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeHighlight"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeTheme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_core_state__WEBPACK_IMPORTED_MODULE_8__["selectSettingsState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(([action, settings]) => this.localStorageService.setItem(SETTINGS_KEY, settings))), { dispatch: false });
        this.updateRouteAnimationType = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(INIT, this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeAnimationsElements"], _settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeAnimationsPage"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_settings_selectors__WEBPACK_IMPORTED_MODULE_13__["selectPageAnimations"])),
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_settings_selectors__WEBPACK_IMPORTED_MODULE_13__["selectElementsAnimations"]))
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(([action, [pageAnimations, elementsAnimations]]) => this.animationsService.updateRouteAnimationType(pageAnimations, elementsAnimations))), { dispatch: false });
        this.updateTheme = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(INIT, this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeTheme"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_settings_selectors__WEBPACK_IMPORTED_MODULE_13__["selectEffectiveTheme"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(([action, effectiveTheme]) => {
            const classList = this.overlayContainer.getContainerElement()
                .classList;
            const toRemove = Array.from(classList).filter((item) => item.includes("-theme"));
            if (toRemove.length) {
                classList.remove(...toRemove);
            }
            classList.add(effectiveTheme);
        })), { dispatch: false });
        this.setTranslateServiceLanguage = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_settings_selectors__WEBPACK_IMPORTED_MODULE_13__["selectSettingsLanguage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(language => this.translateService.use(language))), { dispatch: false });
        this.setTitle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_settings_actions__WEBPACK_IMPORTED_MODULE_12__["actionSettingsChangeLanguage"])), this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivationEnd"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.titleService.setTitle(this.router.routerState.snapshot.root, this.translateService);
        })), { dispatch: false });
    }
}
SettingsEffects.ɵfac = function SettingsEffects_Factory(t) { return new (t || SettingsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_title_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_animations_animations_service__WEBPACK_IMPORTED_MODULE_10__["AnimationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
SettingsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingsEffects, factory: SettingsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"] }, { type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"] }, { type: _title_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] }, { type: _animations_animations_service__WEBPACK_IMPORTED_MODULE_10__["AnimationsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/settings/settings.model.ts":
/*!*************************************************!*\
  !*** ./src/app/core/settings/settings.model.ts ***!
  \*************************************************/
/*! exports provided: NIGHT_MODE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return NIGHT_MODE_THEME; });
const NIGHT_MODE_THEME = "BLACK-THEME";


/***/ }),

/***/ "./src/app/core/settings/settings.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/core/settings/settings.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
/* harmony import */ var _settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.model */ "./src/app/core/settings/settings.model.ts");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.actions */ "./src/app/core/settings/settings.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");



const initialState = {
    language: "en",
    theme: "DEFAULT-THEME",
    autoNightMode: false,
    nightTheme: _settings_model__WEBPACK_IMPORTED_MODULE_0__["NIGHT_MODE_THEME"],
    stickyHeader: true,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true,
    testApi: false,
    level: {
        gloss: false,
        breakdown: false,
        "translation-breakdown": false,
        translation: true
    },
    highlight: {
        root: false,
        pronoun: true,
        aspect: false,
        post_aspectual_suffix: false,
        prepronominal_prefix: false,
        tmp_affix: false
    },
    hour: 0
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeLanguage"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeTheme"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeAutoNightMode"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeTestApi"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeStickyHeader"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeAnimationsPage"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeAnimationsElements"], _settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeHour"], (state, action) => (Object.assign(Object.assign({}, state), action))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeAnimationsPageDisabled"], (state, { pageAnimationsDisabled }) => (Object.assign(Object.assign({}, state), { pageAnimationsDisabled, pageAnimations: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeHighlight"], (state, action) => {
    const newNestedState = {};
    newNestedState[action.key] = action.checked;
    return Object.assign(Object.assign({}, state), { highlight: Object.assign(Object.assign({}, state.highlight), newNestedState) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["actionSettingsChangeLevel"], (state, action) => {
    const newNestedState = {};
    newNestedState[action.key] = action.checked;
    return Object.assign(Object.assign({}, state), { level: Object.assign(Object.assign({}, state.level), newNestedState) });
}));
function settingsReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/core/settings/settings.selectors.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/settings/settings.selectors.ts ***!
  \*****************************************************/
/*! exports provided: selectSettings, selectSettingsStickyHeader, selectSettingsLanguage, selectTheme, selectPageAnimations, selectElementsAnimations, selectAutoNightMode, selectTestApi, selectNightTheme, selectHour, selectIsNightHour, selectEffectiveTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettings", function() { return selectSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsStickyHeader", function() { return selectSettingsStickyHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsLanguage", function() { return selectSettingsLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTheme", function() { return selectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageAnimations", function() { return selectPageAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectElementsAnimations", function() { return selectElementsAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAutoNightMode", function() { return selectAutoNightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTestApi", function() { return selectTestApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNightTheme", function() { return selectNightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHour", function() { return selectHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsNightHour", function() { return selectIsNightHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEffectiveTheme", function() { return selectEffectiveTheme; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core.state */ "./src/app/core/core.state.ts");


const selectSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectSettingsState"], (state) => state);
const selectSettingsStickyHeader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, (state) => state.stickyHeader);
const selectSettingsLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, (state) => state.language);
const selectTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.theme);
const selectPageAnimations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.pageAnimations);
const selectElementsAnimations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.elementsAnimations);
const selectAutoNightMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.autoNightMode);
const selectTestApi = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.testApi);
const selectNightTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.nightTheme);
const selectHour = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettings, settings => settings.hour);
const selectIsNightHour = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAutoNightMode, selectHour, (autoNightMode, hour) => autoNightMode && (hour >= 21 || hour <= 7));
const selectEffectiveTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectTheme, selectNightTheme, selectIsNightHour, (theme, nightTheme, isNightHour) => (isNightHour ? nightTheme : theme).toLowerCase());


/***/ }),

/***/ "./src/app/core/tableviewer-selection/tableviewer-selection.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/tableviewer-selection/tableviewer-selection.service.ts ***!
  \*****************************************************************************/
/*! exports provided: TableviewerSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableviewerSelectionService", function() { return TableviewerSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class TableviewerSelectionService {
    constructor() {
        this.selection = {
            root: [],
            "aff-option": [],
            patient: [],
            agent: []
        };
    }
    updateVerbs(v) {
        this.selection["root"] = v;
    }
    updateAgents(a) {
        this.selection["agent"] = a;
    }
    updatePatients(p) {
        this.selection["patient"] = p;
    }
    updateAffOptions(ao) {
        this.selection["aff-option"] = ao;
    }
}
TableviewerSelectionService.ɵfac = function TableviewerSelectionService_Factory(t) { return new (t || TableviewerSelectionService)(); };
TableviewerSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableviewerSelectionService, factory: TableviewerSelectionService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/title/title.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/title/title.service.ts ***!
  \*********************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








class TitleService {
    constructor(translateService, title) {
        this.translateService = translateService;
        this.title = title;
    }
    setTitle(snapshot, lazyTranslateService) {
        let lastChild = snapshot;
        while (lastChild.children.length) {
            lastChild = lastChild.children[0];
        }
        const { title } = lastChild.data;
        const translate = lazyTranslateService || this.translateService;
        if (title) {
            translate
                .get(title)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(translatedTitle => translatedTitle !== title))
                .subscribe(translatedTitle => this.title.setTitle(`${translatedTitle} - ${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName}`));
        }
        else {
            this.title.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName);
        }
    }
}
TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"])); };
TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/verb/verb.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/verb/verb.service.ts ***!
  \*******************************************/
/*! exports provided: VerbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbService", function() { return VerbService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






class VerbService {
    constructor(http) {
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].prefix + `verbs`;
        this.verbs$ = this.http.get(this.path);
        this.random$ = this.verbs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return this.getRandomOption(res);
        }));
        console.log("constructed verb service");
        this.verbs$.subscribe(verbs => (this.verbs = verbs));
    }
    getRandomOption(options) {
        return options[Math.floor(Math.random() * options.length)];
    }
    getVerb(tag) {
        return this.verbs.filter(v => v.tag === tag)[0];
    }
    searchEntries(terms) {
        return terms.pipe(
        // debounceTime(100),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(val => this.verbs.filter(verb => {
            if (val && val.length > 2) {
                return (verb.gloss.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    verb.tag.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }
            else {
                return true;
            }
        })));
    }
}
VerbService.ɵfac = function VerbService_Factory(t) { return new (t || VerbService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
VerbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VerbService, factory: VerbService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VerbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/wordmaker-selection/wordmaker-selection.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/wordmaker-selection/wordmaker-selection.service.ts ***!
  \*************************************************************************/
/*! exports provided: WordmakerSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerSelectionService", function() { return WordmakerSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class WordmakerSelectionService {
    constructor() {
        this.selection = { root: null, "aff-option": null, patient: null, agent: null };
        this.selection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.selection);
    }
    updateVerb(v) {
        this.selection["root"] = v;
        this.selection$.next(this.selection);
    }
    updateAgent(a) {
        this.selection["agent"] = a;
        this.selection$.next(this.selection);
    }
    updatePatient(p) {
        this.selection["patient"] = p;
        this.selection$.next(this.selection);
    }
    updateAffOption(ao) {
        this.selection["aff-option"] = ao;
        this.selection$.next(this.selection);
    }
}
WordmakerSelectionService.ɵfac = function WordmakerSelectionService_Factory(t) { return new (t || WordmakerSelectionService)(); };
WordmakerSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WordmakerSelectionService, factory: WordmakerSelectionService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/logo/logo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/logo/logo.component.ts ***!
  \***********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




// import * as anime from "animejs";
class LogoComponent {
    constructor(router) {
        this.router = router;
    }
    ngAfterViewInit() {
        // anime({
        //   targets: "#lineDrawing .lines path",
        //   strokeDashoffset: [anime.setDashoffset, 0],
        //   easing: "easeInOutCubic",
        //   color: "#fff",
        //   duration: 550,
        //   complete: function(anim) {
        //     document.getElementById("svgGroup").classList.add("animated");
        //   },
        //   delay: function(el, i) {
        //     return i * 450;
        //   }
        // });
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["ww-logo"]], decls: 13, vars: 0, consts: [["id", "lineDrawing"], ["width", "281.7", "height", "35.37", "viewBox", "0 0 281.7 35.37"], ["id", "svgGroup", "stroke-linecap", "round", "fill-rule", "evenodd", "font-size", "9pt", "stroke", "#fff", "stroke-width", "0.25mm", "fill", "none", 1, "lines"], ["d", "M 43.065 7.065 L 34.425 32.04 Q 34.335 32.355 34.11 32.805 A 1.488 1.488 0 0 1 33.941 33.061 Q 33.632 33.449 32.917 33.998 A 3.592 3.592 0 0 1 30.914 34.731 A 4.543 4.543 0 0 1 30.623 34.74 Q 29.295 34.74 28.327 33.998 A 6.369 6.369 0 0 1 27.787 33.536 Q 27.262 33.03 27.045 32.535 L 21.78 17.01 Q 16.785 31.77 16.695 32.04 Q 16.625 32.249 16.42 32.594 A 8.294 8.294 0 0 1 16.29 32.805 Q 15.975 33.3 15.57 33.705 A 3.463 3.463 0 0 1 14.203 34.568 A 3.5 3.5 0 0 1 13.095 34.74 Q 11.655 34.74 10.732 34.065 Q 10.127 33.622 9.783 33.179 A 2.452 2.452 0 0 1 9.495 32.715 L 9.18 32.04 L 0.495 7.065 A 17.274 17.274 0 0 1 0.278 6.37 Q 0.086 5.699 0.026 5.233 A 2.978 2.978 0 0 1 0 4.86 Q 0 3.17 2.657 2.155 A 11.067 11.067 0 0 1 3.015 2.025 Q 4.32 1.575 5.377 1.575 A 2.483 2.483 0 0 1 6.046 1.66 A 1.786 1.786 0 0 1 6.998 2.295 A 3.973 3.973 0 0 1 7.355 2.85 Q 7.708 3.502 8.01 4.5 L 12.96 19.53 L 17.865 4.725 A 4.756 4.756 0 0 1 18.548 3.383 A 3.894 3.894 0 0 1 20.16 2.115 Q 20.88 1.8 22.027 1.8 Q 23.175 1.8 24.165 2.543 A 5.96 5.96 0 0 1 24.689 2.981 Q 25.226 3.49 25.418 3.987 A 1.786 1.786 0 0 1 25.425 4.005 L 30.6 19.62 L 35.55 4.5 A 39.529 39.529 0 0 1 35.722 4.016 Q 35.874 3.594 35.998 3.291 A 8.722 8.722 0 0 1 36.135 2.97 A 1.997 1.997 0 0 1 36.399 2.549 Q 36.621 2.272 36.967 2.003 A 2.216 2.216 0 0 1 37.986 1.568 A 3.005 3.005 0 0 1 38.475 1.53 Q 39.173 1.53 40.061 1.801 A 9.54 9.54 0 0 1 40.59 1.98 A 9.213 9.213 0 0 1 41.764 2.486 Q 43.018 3.145 43.418 4.007 A 2.003 2.003 0 0 1 43.605 4.86 A 2.243 2.243 0 0 1 43.575 5.191 Q 43.494 5.72 43.193 6.673 A 27.656 27.656 0 0 1 43.065 7.065 Z", "id", "0", "vector-effect", "non-scaling-stroke"], ["d", "M 43.086 18.303 A 12.613 12.613 0 0 0 42.255 22.95 Q 42.255 26.55 44.167 29.408 A 15.033 15.033 0 0 0 44.787 30.266 A 12.477 12.477 0 0 0 48.87 33.728 A 14.255 14.255 0 0 0 49.088 33.84 A 12.204 12.204 0 0 0 54.63 35.19 Q 57.6 35.19 60.367 33.818 A 11.139 11.139 0 0 0 62.798 32.178 A 13.411 13.411 0 0 0 65.07 29.543 A 11.285 11.285 0 0 0 66.286 27.148 A 12.272 12.272 0 0 0 67.005 22.905 A 15.236 15.236 0 0 0 66.997 22.403 A 11.536 11.536 0 0 0 63.27 14.018 A 15.63 15.63 0 0 0 63.153 13.909 A 12.197 12.197 0 0 0 54.675 10.53 Q 49.815 10.53 46.035 14.04 A 11.523 11.523 0 0 0 43.086 18.303 Z M 51.66 26.168 A 6.002 6.002 0 0 0 52.792 26.861 A 4.247 4.247 0 0 0 54.585 27.27 Q 56.07 27.27 57.555 26.145 A 3.64 3.64 0 0 0 58.958 23.789 A 5.549 5.549 0 0 0 59.04 22.815 A 5.538 5.538 0 0 0 58.904 21.547 Q 58.679 20.591 58.083 19.935 A 3.403 3.403 0 0 0 57.645 19.53 A 5.255 5.255 0 0 0 56.147 18.703 A 4.603 4.603 0 0 0 54.63 18.45 A 4.572 4.572 0 0 0 52.056 19.251 A 5.908 5.908 0 0 0 51.615 19.575 A 3.63 3.63 0 0 0 50.333 21.724 A 5.598 5.598 0 0 0 50.22 22.883 Q 50.22 25.065 51.66 26.168 Z", "id", "1", "vector-effect", "non-scaling-stroke"], ["d", "M 77.85 21.42 L 77.85 30.87 A 26.127 26.127 0 0 1 77.846 31.355 Q 77.833 32.034 77.782 32.423 A 2.527 2.527 0 0 1 77.685 32.851 Q 77.619 33.06 77.515 33.29 A 5.552 5.552 0 0 1 77.355 33.615 A 1.798 1.798 0 0 1 76.602 34.299 Q 75.927 34.652 74.777 34.749 A 11.17 11.17 0 0 1 73.845 34.785 Q 71.957 34.785 70.997 34.2 A 2.354 2.354 0 0 1 70.74 34.02 A 2.162 2.162 0 0 1 70.153 33.16 Q 70.023 32.827 69.965 32.417 A 4.611 4.611 0 0 1 69.93 32.085 L 69.93 30.78 L 69.93 14.985 A 26.127 26.127 0 0 1 69.934 14.5 Q 69.947 13.821 69.997 13.433 Q 70.054 12.997 70.287 12.482 A 5.4 5.4 0 0 1 70.38 12.285 A 1.735 1.735 0 0 1 71.135 11.563 Q 72.056 11.07 73.89 11.07 Q 76.59 11.07 77.265 12.105 A 2.955 2.955 0 0 1 77.62 12.79 A 2.377 2.377 0 0 1 77.76 13.59 Q 77.98 13.282 78.394 12.845 A 14.188 14.188 0 0 1 78.412 12.825 A 2.628 2.628 0 0 1 78.687 12.58 Q 79.166 12.202 80.141 11.662 A 25.913 25.913 0 0 1 80.235 11.61 A 8.084 8.084 0 0 1 81.114 11.19 Q 81.977 10.845 82.687 10.845 A 16.518 16.518 0 0 1 83.433 10.861 Q 84.015 10.887 84.465 10.958 A 9.255 9.255 0 0 1 85.219 11.109 A 12.635 12.635 0 0 1 86.04 11.34 Q 86.895 11.61 87.457 12.263 A 1.944 1.944 0 0 1 87.8 12.863 Q 88.02 13.455 88.02 14.355 Q 88.02 15.604 87.377 17.056 A 10.638 10.638 0 0 1 87.165 17.505 A 3.898 3.898 0 0 1 86.607 18.351 A 2.453 2.453 0 0 1 84.69 19.215 Q 83.88 19.215 83.137 18.855 A 3.181 3.181 0 0 0 82.464 18.624 Q 82.133 18.547 81.742 18.516 A 7.107 7.107 0 0 0 81.18 18.495 Q 79.965 18.495 78.907 19.35 A 3.133 3.133 0 0 0 78.263 20.041 A 2.428 2.428 0 0 0 77.85 21.42 Z", "id", "2", "vector-effect", "non-scaling-stroke"], ["d", "M 112.455 3.96 L 112.455 30.825 A 26.127 26.127 0 0 1 112.451 31.31 Q 112.438 31.989 112.387 32.378 A 2.409 2.409 0 0 1 112.275 32.843 Q 112.201 33.062 112.082 33.299 A 4.846 4.846 0 0 1 111.96 33.525 Q 111.285 34.74 108.157 34.74 Q 105.03 34.74 104.67 32.535 A 6.18 6.18 0 0 1 100.953 34.568 A 9.051 9.051 0 0 1 99.405 34.695 A 9.158 9.158 0 0 1 93.969 32.88 A 13.448 13.448 0 0 1 92.025 31.163 Q 88.695 27.63 88.695 22.928 Q 88.695 18.225 92.047 14.67 A 13.173 13.173 0 0 1 94.485 12.61 A 8.941 8.941 0 0 1 99.405 11.115 A 7.903 7.903 0 0 1 101.607 11.406 A 5.869 5.869 0 0 1 104.58 13.365 L 104.58 3.915 A 26.127 26.127 0 0 1 104.584 3.43 Q 104.597 2.751 104.647 2.363 A 2.669 2.669 0 0 1 104.747 1.92 Q 104.813 1.707 104.916 1.476 A 5.427 5.427 0 0 1 105.053 1.193 Q 105.39 0.54 106.245 0.27 A 4.879 4.879 0 0 1 106.899 0.116 Q 107.587 0 108.517 0 Q 109.935 0 110.79 0.27 A 2.398 2.398 0 0 1 111.348 0.523 A 1.713 1.713 0 0 1 111.982 1.215 A 5.503 5.503 0 0 1 112.19 1.68 Q 112.282 1.915 112.334 2.128 A 2.546 2.546 0 0 1 112.387 2.408 Q 112.44 2.809 112.452 3.521 A 26.668 26.668 0 0 1 112.455 3.96 Z M 97.74 25.65 Q 98.91 26.865 100.575 26.865 A 3.729 3.729 0 0 0 102.164 26.532 A 3.678 3.678 0 0 0 103.343 25.65 Q 104.445 24.435 104.445 22.973 A 3.993 3.993 0 0 0 103.749 20.732 A 5.28 5.28 0 0 0 103.387 20.25 A 3.459 3.459 0 0 0 100.888 19.003 A 4.837 4.837 0 0 0 100.53 18.99 A 4.229 4.229 0 0 0 99.192 19.192 A 3.466 3.466 0 0 0 97.65 20.228 A 4.564 4.564 0 0 0 96.884 21.421 A 3.825 3.825 0 0 0 96.57 22.95 A 3.639 3.639 0 0 0 97.328 25.165 A 4.985 4.985 0 0 0 97.74 25.65 Z", "id", "3", "vector-effect", "non-scaling-stroke"], ["d", "M 157.995 7.065 L 149.355 32.04 Q 149.265 32.355 149.04 32.805 A 1.488 1.488 0 0 1 148.871 33.061 Q 148.562 33.449 147.847 33.998 A 3.592 3.592 0 0 1 145.844 34.731 A 4.543 4.543 0 0 1 145.553 34.74 Q 144.225 34.74 143.257 33.998 A 6.369 6.369 0 0 1 142.717 33.536 Q 142.192 33.03 141.975 32.535 L 136.71 17.01 Q 131.715 31.77 131.625 32.04 Q 131.555 32.249 131.35 32.594 A 8.294 8.294 0 0 1 131.22 32.805 Q 130.905 33.3 130.5 33.705 A 3.463 3.463 0 0 1 129.133 34.568 A 3.5 3.5 0 0 1 128.025 34.74 Q 126.585 34.74 125.662 34.065 Q 125.057 33.622 124.713 33.179 A 2.452 2.452 0 0 1 124.425 32.715 L 124.11 32.04 L 115.425 7.065 A 17.274 17.274 0 0 1 115.208 6.37 Q 115.016 5.699 114.956 5.233 A 2.978 2.978 0 0 1 114.93 4.86 Q 114.93 3.17 117.587 2.155 A 11.067 11.067 0 0 1 117.945 2.025 Q 119.25 1.575 120.307 1.575 A 2.483 2.483 0 0 1 120.976 1.66 A 1.786 1.786 0 0 1 121.928 2.295 A 3.973 3.973 0 0 1 122.285 2.85 Q 122.638 3.502 122.94 4.5 L 127.89 19.53 L 132.795 4.725 A 4.756 4.756 0 0 1 133.478 3.383 A 3.894 3.894 0 0 1 135.09 2.115 Q 135.81 1.8 136.957 1.8 Q 138.105 1.8 139.095 2.543 A 5.96 5.96 0 0 1 139.619 2.981 Q 140.156 3.49 140.348 3.987 A 1.786 1.786 0 0 1 140.355 4.005 L 145.53 19.62 L 150.48 4.5 A 39.529 39.529 0 0 1 150.652 4.016 Q 150.804 3.594 150.928 3.291 A 8.722 8.722 0 0 1 151.065 2.97 A 1.997 1.997 0 0 1 151.329 2.549 Q 151.551 2.272 151.897 2.003 A 2.216 2.216 0 0 1 152.916 1.568 A 3.005 3.005 0 0 1 153.405 1.53 Q 154.103 1.53 154.991 1.801 A 9.54 9.54 0 0 1 155.52 1.98 A 9.213 9.213 0 0 1 156.694 2.486 Q 157.948 3.145 158.348 4.007 A 2.003 2.003 0 0 1 158.535 4.86 A 2.243 2.243 0 0 1 158.505 5.191 Q 158.424 5.72 158.123 6.673 A 27.656 27.656 0 0 1 157.995 7.065 Z", "id", "4", "vector-effect", "non-scaling-stroke"], ["d", "M 176.31 25.515 L 165.645 25.515 A 2.036 2.036 0 0 0 166.221 26.928 Q 166.57 27.308 167.13 27.63 A 6.702 6.702 0 0 0 168.592 28.265 A 5.351 5.351 0 0 0 170.1 28.485 Q 172.71 28.485 174.195 27.945 L 174.69 27.765 A 7.6 7.6 0 0 1 175.322 27.507 Q 175.969 27.278 176.455 27.27 A 2.132 2.132 0 0 1 176.49 27.27 A 2.08 2.08 0 0 1 177.848 27.792 Q 178.455 28.298 178.965 29.295 A 7.984 7.984 0 0 1 179.273 30.019 Q 179.407 30.386 179.476 30.714 A 3.164 3.164 0 0 1 179.55 31.365 A 2.962 2.962 0 0 1 177.876 34.013 Q 175.544 35.37 169.965 35.37 A 16.503 16.503 0 0 1 166.821 35.083 A 12.851 12.851 0 0 1 164.048 34.223 A 11.796 11.796 0 0 1 161.906 33.007 A 8.933 8.933 0 0 1 160.02 31.185 Q 157.185 27.54 157.185 23.04 A 14.178 14.178 0 0 1 157.745 18.957 A 10.969 10.969 0 0 1 160.852 13.973 A 12.648 12.648 0 0 1 168.666 10.628 A 16.705 16.705 0 0 1 170.01 10.575 Q 176.265 10.575 179.19 14.985 Q 180.72 17.325 180.72 20.093 A 8.856 8.856 0 0 1 180.599 21.609 Q 180.457 22.425 180.148 23.066 A 3.899 3.899 0 0 1 179.347 24.188 A 5.131 5.131 0 0 1 178.19 25.044 A 3.955 3.955 0 0 1 176.31 25.515 Z M 165.555 21.42 L 171.225 21.42 A 2.959 2.959 0 0 0 171.865 21.357 Q 172.772 21.155 172.91 20.306 A 2.032 2.032 0 0 0 172.935 19.98 A 2.197 2.197 0 0 0 172.779 19.139 A 2.041 2.041 0 0 0 172.148 18.315 A 2.598 2.598 0 0 0 171.296 17.874 Q 170.922 17.756 170.469 17.712 A 5.89 5.89 0 0 0 169.897 17.685 A 3.888 3.888 0 0 0 168.214 18.084 Q 167.602 18.374 166.995 18.878 A 5.302 5.302 0 0 0 166.267 19.599 Q 165.555 20.471 165.555 21.42 Z", "id", "5", "vector-effect", "non-scaling-stroke"], ["d", "M 206.865 15.03 L 206.865 30.78 A 26.127 26.127 0 0 1 206.861 31.265 Q 206.848 31.944 206.797 32.333 Q 206.745 32.734 206.544 33.23 A 6.286 6.286 0 0 1 206.415 33.525 A 1.827 1.827 0 0 1 205.592 34.288 Q 204.779 34.695 203.332 34.695 Q 200.891 34.695 200.055 34.093 A 1.482 1.482 0 0 1 200.047 34.088 A 2.313 2.313 0 0 1 199.159 32.746 A 3.267 3.267 0 0 1 199.08 32.31 Q 197.415 34.695 193.522 34.695 A 8.659 8.659 0 0 1 188.711 33.2 Q 187.509 32.415 186.373 31.218 A 16.572 16.572 0 0 1 186.3 31.14 Q 182.97 27.585 182.97 22.883 Q 182.97 18.18 186.322 14.648 Q 189.675 11.115 193.68 11.115 A 7.535 7.535 0 0 1 195.402 11.305 A 6.422 6.422 0 0 1 196.47 11.655 A 12.771 12.771 0 0 1 197.052 11.921 Q 197.648 12.212 198.006 12.483 A 2.505 2.505 0 0 1 198.225 12.668 A 7.452 7.452 0 0 1 198.65 13.106 Q 198.868 13.351 199.035 13.59 Q 199.279 11.315 201.981 11.094 A 7.487 7.487 0 0 1 202.59 11.07 Q 204.024 11.07 204.857 11.25 A 3.836 3.836 0 0 1 205.2 11.34 A 2.398 2.398 0 0 1 205.758 11.593 A 1.713 1.713 0 0 1 206.392 12.285 A 5.503 5.503 0 0 1 206.6 12.75 Q 206.692 12.985 206.744 13.198 A 2.546 2.546 0 0 1 206.797 13.478 Q 206.85 13.879 206.862 14.591 A 26.668 26.668 0 0 1 206.865 15.03 Z M 190.845 22.95 A 3.592 3.592 0 0 0 191.647 25.209 A 4.902 4.902 0 0 0 192.015 25.628 A 3.819 3.819 0 0 0 194.785 26.82 A 4.61 4.61 0 0 0 194.85 26.82 A 3.729 3.729 0 0 0 196.439 26.487 A 3.678 3.678 0 0 0 197.618 25.605 Q 198.72 24.39 198.72 22.928 A 3.993 3.993 0 0 0 198.024 20.687 A 5.28 5.28 0 0 0 197.662 20.205 A 3.447 3.447 0 0 0 195.154 18.956 A 4.744 4.744 0 0 0 194.827 18.945 A 4.065 4.065 0 0 0 193.407 19.184 A 3.564 3.564 0 0 0 191.947 20.205 A 4.723 4.723 0 0 0 191.194 21.351 A 3.808 3.808 0 0 0 190.845 22.95 Z", "id", "6", "vector-effect", "non-scaling-stroke"], ["d", "M 235.8 17.055 L 226.485 33.03 A 3.355 3.355 0 0 1 225.906 33.75 Q 225.615 34.029 225.235 34.281 A 6.173 6.173 0 0 1 225.045 34.403 A 4.458 4.458 0 0 1 224.183 34.818 A 3.311 3.311 0 0 1 223.087 35.01 Q 222.12 35.01 221.242 34.538 Q 220.365 34.065 220.005 33.57 L 219.6 33.075 L 210.24 17.055 A 9.788 9.788 0 0 1 209.81 16.273 Q 209.34 15.308 209.34 14.625 A 2.442 2.442 0 0 1 209.804 13.227 Q 210.344 12.439 211.513 11.712 A 10.27 10.27 0 0 1 211.68 11.61 Q 213.055 10.814 213.965 10.658 A 2.465 2.465 0 0 1 214.38 10.62 A 2.594 2.594 0 0 1 215.036 10.698 A 1.82 1.82 0 0 1 215.932 11.228 A 5.047 5.047 0 0 1 216.318 11.704 Q 216.707 12.243 217.125 13.05 L 223.02 24.39 L 228.915 13.05 A 70.134 70.134 0 0 1 229.147 12.652 Q 229.456 12.127 229.639 11.842 A 9.046 9.046 0 0 1 229.658 11.813 A 2.101 2.101 0 0 1 229.901 11.508 Q 230.12 11.278 230.445 11.048 Q 230.898 10.727 231.604 10.675 A 3.846 3.846 0 0 1 231.885 10.665 Q 232.637 10.665 233.861 11.325 A 12.593 12.593 0 0 1 234.36 11.61 Q 236.31 12.772 236.635 14.06 A 2.117 2.117 0 0 1 236.7 14.58 A 2.537 2.537 0 0 1 236.621 15.174 Q 236.476 15.771 236.066 16.566 A 12.808 12.808 0 0 1 235.8 17.055 Z", "id", "7", "vector-effect", "non-scaling-stroke"], ["d", "M 256.275 25.515 L 245.61 25.515 A 2.036 2.036 0 0 0 246.186 26.928 Q 246.535 27.308 247.095 27.63 A 6.702 6.702 0 0 0 248.557 28.265 A 5.351 5.351 0 0 0 250.065 28.485 Q 252.675 28.485 254.16 27.945 L 254.655 27.765 A 7.6 7.6 0 0 1 255.287 27.507 Q 255.934 27.278 256.42 27.27 A 2.132 2.132 0 0 1 256.455 27.27 A 2.08 2.08 0 0 1 257.813 27.792 Q 258.42 28.298 258.93 29.295 A 7.984 7.984 0 0 1 259.238 30.019 Q 259.372 30.386 259.441 30.714 A 3.164 3.164 0 0 1 259.515 31.365 A 2.962 2.962 0 0 1 257.841 34.013 Q 255.509 35.37 249.93 35.37 A 16.503 16.503 0 0 1 246.786 35.083 A 12.851 12.851 0 0 1 244.013 34.223 A 11.796 11.796 0 0 1 241.871 33.007 A 8.933 8.933 0 0 1 239.985 31.185 Q 237.15 27.54 237.15 23.04 A 14.178 14.178 0 0 1 237.71 18.957 A 10.969 10.969 0 0 1 240.817 13.973 A 12.648 12.648 0 0 1 248.631 10.628 A 16.705 16.705 0 0 1 249.975 10.575 Q 256.23 10.575 259.155 14.985 Q 260.685 17.325 260.685 20.093 A 8.856 8.856 0 0 1 260.564 21.609 Q 260.422 22.425 260.113 23.066 A 3.899 3.899 0 0 1 259.312 24.188 A 5.131 5.131 0 0 1 258.155 25.044 A 3.955 3.955 0 0 1 256.275 25.515 Z M 245.52 21.42 L 251.19 21.42 A 2.959 2.959 0 0 0 251.83 21.357 Q 252.737 21.155 252.875 20.306 A 2.032 2.032 0 0 0 252.9 19.98 A 2.197 2.197 0 0 0 252.744 19.139 A 2.041 2.041 0 0 0 252.113 18.315 A 2.598 2.598 0 0 0 251.261 17.874 Q 250.887 17.756 250.434 17.712 A 5.89 5.89 0 0 0 249.862 17.685 A 3.888 3.888 0 0 0 248.179 18.084 Q 247.567 18.374 246.96 18.878 A 5.302 5.302 0 0 0 246.232 19.599 Q 245.52 20.471 245.52 21.42 Z", "id", "8", "vector-effect", "non-scaling-stroke"], ["d", "M 271.53 21.42 L 271.53 30.87 A 26.127 26.127 0 0 1 271.526 31.355 Q 271.513 32.034 271.462 32.423 A 2.527 2.527 0 0 1 271.365 32.851 Q 271.299 33.06 271.195 33.29 A 5.552 5.552 0 0 1 271.035 33.615 A 1.798 1.798 0 0 1 270.282 34.299 Q 269.607 34.652 268.457 34.749 A 11.17 11.17 0 0 1 267.525 34.785 Q 265.637 34.785 264.677 34.2 A 2.354 2.354 0 0 1 264.42 34.02 A 2.162 2.162 0 0 1 263.833 33.16 Q 263.703 32.827 263.645 32.417 A 4.611 4.611 0 0 1 263.61 32.085 L 263.61 30.78 L 263.61 14.985 A 26.127 26.127 0 0 1 263.614 14.5 Q 263.627 13.821 263.677 13.433 Q 263.734 12.997 263.967 12.482 A 5.4 5.4 0 0 1 264.06 12.285 A 1.735 1.735 0 0 1 264.815 11.563 Q 265.736 11.07 267.57 11.07 Q 270.27 11.07 270.945 12.105 A 2.955 2.955 0 0 1 271.3 12.79 A 2.377 2.377 0 0 1 271.44 13.59 Q 271.66 13.282 272.074 12.845 A 14.188 14.188 0 0 1 272.092 12.825 A 2.628 2.628 0 0 1 272.367 12.58 Q 272.846 12.202 273.821 11.662 A 25.913 25.913 0 0 1 273.915 11.61 A 8.084 8.084 0 0 1 274.794 11.19 Q 275.657 10.845 276.367 10.845 A 16.518 16.518 0 0 1 277.113 10.861 Q 277.695 10.887 278.145 10.958 A 9.255 9.255 0 0 1 278.899 11.109 A 12.635 12.635 0 0 1 279.72 11.34 Q 280.575 11.61 281.137 12.263 A 1.944 1.944 0 0 1 281.48 12.863 Q 281.7 13.455 281.7 14.355 Q 281.7 15.604 281.057 17.056 A 10.638 10.638 0 0 1 280.845 17.505 A 3.898 3.898 0 0 1 280.287 18.351 A 2.453 2.453 0 0 1 278.37 19.215 Q 277.56 19.215 276.817 18.855 A 3.181 3.181 0 0 0 276.144 18.624 Q 275.813 18.547 275.422 18.516 A 7.107 7.107 0 0 0 274.86 18.495 Q 273.645 18.495 272.587 19.35 A 3.133 3.133 0 0 0 271.943 20.041 A 2.428 2.428 0 0 0 271.53 21.42 Z", "id", "9", "vector-effect", "non-scaling-stroke"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#lineDrawing[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 25px;\n}\n\n#start[_ngcontent-%COMP%] {\n  width: 4em;\n  height: 4em;\n  font-size: 1.25em;\n  position: relative;\n  margin-top: 25px;\n}\n\n#svgGroup[_ngcontent-%COMP%] {\n  stroke-width: 0.5mm;\n  stroke-dasharray: 700;\n  stroke-dashoffset: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFHQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0FDSEYiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9zaGFyZWQvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmVEcmF3aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDI1cHg7XG59XG5cbiNzdGFydCB7XG4gIHdpZHRoOiA0ZW07XG4gIGhlaWdodDogNGVtO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbGVmdDogLTE1MDBweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuI3N2Z0dyb3VwIHtcbiAgc3Ryb2tlLXdpZHRoOiAwLjVtbTtcbiAgLy8gZmlsbDogdHJhbnNwYXJlbnQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDcwMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDcwMDtcbn1cbiIsIiNsaW5lRHJhd2luZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAyNXB4O1xufVxuXG4jc3RhcnQge1xuICB3aWR0aDogNGVtO1xuICBoZWlnaHQ6IDRlbTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuI3N2Z0dyb3VwIHtcbiAgc3Ryb2tlLXdpZHRoOiAwLjVtbTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNzAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogNzAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-logo",
                templateUrl: "logo.component.html",
                styleUrls: ["./logo.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/animate-only/animate-only.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/animate-only/animate-only.ts ***!
  \***********************************************************/
/*! exports provided: AnimateOnlyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateOnlyPipe", function() { return AnimateOnlyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class AnimateOnlyPipe {
    // Returns only Animate pronouns
    transform(value, ...args) {
        return value.filter(pn => pn["gloss"].toLowerCase() !== "it");
    }
}
AnimateOnlyPipe.ɵfac = function AnimateOnlyPipe_Factory(t) { return new (t || AnimateOnlyPipe)(); };
AnimateOnlyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "animateOnly", type: AnimateOnlyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateOnlyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "animateOnly"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/capitalize/capitalize.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/capitalize/capitalize.ts ***!
  \*******************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: "capitalize" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/decapitalize/decapitalize.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/decapitalize/decapitalize.ts ***!
  \***********************************************************/
/*! exports provided: DecapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecapitalizePipe", function() { return DecapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class DecapitalizePipe {
    transform(value) {
        // Move all uppercase characters to lowercase except 'I'
        let find = /([A-H,J-Z]|I\w)/;
        let re = new RegExp(find, "g");
        value = value.replace(re, function (v) {
            return v.toLowerCase();
        });
        return value;
    }
}
DecapitalizePipe.ɵfac = function DecapitalizePipe_Factory(t) { return new (t || DecapitalizePipe)(); };
DecapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decapitalize", type: DecapitalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: "decapitalize" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/rtl-support/rtl-support.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/rtl-support/rtl-support.directive.ts ***!
  \*************************************************************/
/*! exports provided: RtlSupportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlSupportDirective", function() { return RtlSupportDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




class RtlSupportDirective {
    constructor(el, translate) {
        this.el = el;
        this.translate = translate;
        el.nativeElement.style.textAlign =
            translate.currentLang === "he" ? "right" : "left";
        el.nativeElement.style.direction =
            translate.currentLang === "he" ? "rtl" : "ltr";
    }
    ngOnInit() {
        this.subscription = this.translate.onLangChange.subscribe((event) => {
            this.el.nativeElement.style.textAlign =
                event.lang === "he" ? "right" : "left";
            this.el.nativeElement.style.direction =
                event.lang === "he" ? "rtl" : "ltr";
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
RtlSupportDirective.ɵfac = function RtlSupportDirective_Factory(t) { return new (t || RtlSupportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
RtlSupportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RtlSupportDirective, selectors: [["", "rtl", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RtlSupportDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[rtl]" // tslint:disable-line
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/fesm2015/stepper.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/fesm2015/grid-list.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rtl-support/rtl-support.directive */ "./src/app/shared/rtl-support/rtl-support.directive.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/shared/logo/logo.component.ts");
/* harmony import */ var _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/animate-only/animate-only */ "./src/app/shared/pipes/animate-only/animate-only.ts");
/* harmony import */ var _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/capitalize/capitalize */ "./src/app/shared/pipes/capitalize/capitalize.ts");
/* harmony import */ var _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/decapitalize/decapitalize */ "./src/app/shared/pipes/decapitalize/decapitalize.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-echarts */ "../../node_modules/ngx-echarts/fesm2015/ngx-echarts.js");








// import { MatTabsModule } from "@angular/material/tabs";











// import { MatDividerModule } from "@angular/material/divider";
// import { MatSliderModule } from "@angular/material/slider";

// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatNativeDateModule } from "@angular/material/core";












class SharedModule {
    constructor(faIconLibrary) {
        faIconLibrary.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faMediumM"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faCaretUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faCaretDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faExclamationTriangle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faFilter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faTasks"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faMusic"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faLanguage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faPaintBrush"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faLightbulb"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faKeyboard"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faWindowMaximize"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faStream"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faBook"]);
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FaIconLibrary"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            // MatTabsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            // MatDividerModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_29__["NgxEchartsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"]
        ],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        // MatTabsModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        // MatDividerModule,
        // MatSliderModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        // MatDatepickerModule,
        // MatNativeDateModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_25__["LogoComponent"],
        _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_24__["RtlSupportDirective"],
        _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_26__["AnimateOnlyPipe"],
        _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_27__["CapitalizePipe"],
        _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_28__["DecapitalizePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        // MatTabsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        // MatDividerModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_29__["NgxEchartsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        // MatTabsModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        // MatDividerModule,
        // MatSliderModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        // MatDatepickerModule,
        // MatNativeDateModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"],
        _logo_logo_component__WEBPACK_IMPORTED_MODULE_25__["LogoComponent"],
        _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_24__["RtlSupportDirective"],
        _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_26__["AnimateOnlyPipe"],
        _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_27__["CapitalizePipe"],
        _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_28__["DecapitalizePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    // MatTabsModule,
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                    // MatDividerModule,
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_29__["NgxEchartsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"]
                ],
                declarations: [
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_25__["LogoComponent"],
                    _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_24__["RtlSupportDirective"],
                    _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_26__["AnimateOnlyPipe"],
                    _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_27__["CapitalizePipe"],
                    _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_28__["DecapitalizePipe"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    // MatTabsModule,
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    // MatDividerModule,
                    // MatSliderModule,
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                    // MatDatepickerModule,
                    // MatNativeDateModule,
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"],
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_25__["LogoComponent"],
                    _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_24__["RtlSupportDirective"],
                    _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_26__["AnimateOnlyPipe"],
                    _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_27__["CapitalizePipe"],
                    _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_28__["DecapitalizePipe"]
                ]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.png");

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
const packageJson = __webpack_require__(/*! ../../../../package.json */ "../../package.json");
const environment = {
    appName: "WordWeaver-UI",
    envName: "DEV",
    production: false,
    test: false,
    i18nPrefix: "",
    firebase: {
        apiKey: "AIzaSyBkM2v1la_3Arbnt0qziB_TYQB0nFij3kk",
        authDomain: "wordweavertoy.firebaseapp.com",
        databaseURL: "https://wordweavertoy.firebaseio.com",
        projectId: "wordweavertoy",
        storageBucket: "wordweavertoy.appspot.com",
        messagingSenderId: "568985112547",
        appId: "1:568985112547:web:525d184b31008b60"
    },
    base: `//localhost:5000`,
    prefix: `/api/v1/`,
    test_prefix: `/api/v2/`,
    versions: {
        app: packageJson.version,
        angular: packageJson.dependencies["@angular/core"],
        ngrx: packageJson.dependencies["@ngrx/store"],
        material: packageJson.dependencies["@angular/material"],
        bootstrap: packageJson.dependencies.bootstrap,
        rxjs: packageJson.dependencies.rxjs,
        ngxtranslate: packageJson.dependencies["@ngx-translate/core"],
        fontAwesome: packageJson.dependencies["@fortawesome/fontawesome-free"],
        angularCli: packageJson.devDependencies["@angular/cli"],
        typescript: packageJson.devDependencies["typescript"],
        cypress: packageJson.devDependencies["cypress"]
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




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

module.exports = __webpack_require__(/*! /Users/pinea/wordweaver-UI/projects/word-weaver/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map