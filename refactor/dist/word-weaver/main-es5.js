function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(receiver);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _createSuper(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/
    "../../package.json":
      /*!*********************************************************!*\
    !*** /Users/pinea/wordweaver-GUI/refactor/package.json ***!
    \*********************************************************/

      /*! exports provided: name, version, description, homepage, author, keywords, main, private, scripts, husky, commitlint, devDependencies, engines, dependencies, default */

      /***/
      function packageJson(module) {
        module.exports = JSON.parse(
          '{"name":"WordWeaver-UI","version":"1.0.0","description":"WordWeaver UI","homepage":"https://github.com/roedoejet/wordweaver-UI","author":{"name":"Aidan Pine","email":"aidan.pine@nrc-cnrc.gc.ca"},"keywords":["angular","angular 8","electron","typescript","eslint","spectron","sass","language"],"main":"main.js","private":true,"scripts":{"ng":"ng","start":"ng serve --open","start:prod":"npm run build:prod && npm run server","build":"ng build","build:prod":"ng build --prod","lint":"ng lint","test":"ng lint && ng test --configuration=test","watch":"ng test --configuration=test --browsers ChromeHeadless --watch --reporters dots","e2e":"ng e2e","release":"standard-version && git push --follow-tags origin master","server":"node ./projects/server/server.js","contributors:add":"all-contributors add","contributors:generate":"all-contributors generate && node .all-contributors-html.js","contributors:check":"all-contributors check"},"husky":{"hooks":{"pre-commit":"pretty-quick --staged","commit-msg":"commitlint -E HUSKY_GIT_PARAMS"}},"commitlint":{"extends":["@commitlint/config-conventional"]},"devDependencies":{"@angular-builders/custom-webpack":"8.4.1","@angular-devkit/build-angular":"0.900.1","@angular-eslint/builder":"0.0.1-alpha.18","@angular-extensions/elements":"^9.0.1","@angular-extensions/model":"^8.1.0","@angular/animations":"~9.0.0","@angular/cdk":"^9.0.0","@angular/cli":"9.0.1","@angular/common":"9.0.0","@angular/compiler":"9.0.0","@angular/compiler-cli":"9.0.0","@angular/core":"9.0.0","@angular/forms":"9.0.0","@angular/language-service":"9.0.0","@angular/material":"^9.0.0","@angular/platform-browser":"9.0.0","@angular/platform-browser-dynamic":"9.0.0","@angular/router":"9.0.0","@commitlint/cli":"^8.3.5","@commitlint/config-conventional":"^8.3.4","@fortawesome/angular-fontawesome":"^0.6.0","@fortawesome/fontawesome-free":"^5.12.1","@fortawesome/fontawesome-svg-core":"^1.2.27","@fortawesome/free-brands-svg-icons":"^5.12.1","@fortawesome/free-solid-svg-icons":"^5.12.1","@ngrx/effects":"^9.0.0-beta.1","@ngrx/entity":"^9.0.0-beta.1","@ngrx/router-store":"^9.0.0-beta.1","@ngrx/store":"^9.0.0-beta.1","@ngrx/store-devtools":"^9.0.0-beta.1","@ngx-translate/core":"12.0.0","@ngx-translate/http-loader":"4.0.0","@types/echarts":"^4.4.4","@types/jasmine":"3.3.16","@types/jasminewd2":"2.0.8","@types/mocha":"5.2.7","@types/node":"12.11.1","@types/uuid":"^3.4.7","@typescript-eslint/eslint-plugin":"2.19.0","@typescript-eslint/parser":"2.19.0","angular-material-fileupload":"^2.0.0","bootstrap":"^4.4.1","browser-detect":"^0.2.28","chai":"4.2.0","codelyzer":"5.1.2","conventional-changelog-cli":"2.0.32","core-js":"3.1.4","eslint":"6.8.0","eslint-plugin-import":"2.20.1","express":"^4.16.4","husky":"^4.2.1","jasmine-core":"3.4.0","jasmine-spec-reporter":"4.2.1","karma":"4.2.0","karma-coverage-istanbul-reporter":"2.1.1","karma-electron":"6.3.0","karma-jasmine":"2.0.1","karma-jasmine-html-reporter":"1.4.2","madge":"^3.8.0","mocha":"6.2.2","npm-run-all":"4.1.5","peaks.js":"^0.19.0","prettier":"^1.19.1","pretty-quick":"^2.0.1","protractor":"^5.4.3","rimraf":"^3.0.2","rxjs":"6.5.4","spectron":"10.0.1","standard-version":"^7.1.0","ts-node":"~8.6.2","tslib":"^1.10.0","tslint":"~6.0.0","typescript":"3.7.5","uuid":"^3.4.0","wait-on":"4.0.0","webdriver-manager":"12.1.7","webpack-bundle-analyzer":"^3.6.0","zone.js":"0.10.2"},"engines":{"node":">=10.13.0"},"dependencies":{"@angular/animations":"^9.0.0 || ^10.0.0-0","@angular/cdk":"9.0.0","@angular/forms":"^9.0.0 || ^10.0.0-0","@angular/material":"9.0.0","echarts":"^4.7.0","ngx-echarts":"^4.2.2","ngx-toastr":"^12.0.1","tslib":"1.10.0"}}'
        );
        /***/
      },

    /***/
    "./$$_lazy_route_resource lazy recursive":
      /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

      /*! no static exports found */

      /***/
      function $$_lazy_route_resourceLazyRecursive(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }

        webpackEmptyAsyncContext.keys = function() {
          return [];
        };

        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
        /***/
      },

    /***/
    "./src/app/app-routing.module.ts":
      /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

      /*! exports provided: AppRoutingModule */

      /***/
      function srcAppAppRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function() {
            return AppRoutingModule;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );

        var routes = [
          {
            path: "",
            redirectTo: "wordmaker",
            pathMatch: "full"
          },
          {
            path: "about",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | pages-about-about-module */
                  "pages-about-about-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pages/about/about.module */
                    "./src/app/pages/about/about.module.ts"
                  )
                )
                .then(function(m) {
                  return m.AboutModule;
                });
            }
          },
          {
            path: "settings",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | pages-settings-settings-module */
                  "pages-settings-settings-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pages/settings/settings.module */
                    "./src/app/pages/settings/settings.module.ts"
                  )
                )
                .then(function(m) {
                  return m.SettingsModule;
                });
            }
          },
          {
            path: "info",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | pages-info-info-module */
                  "pages-info-info-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pages/info/info.module */
                    "./src/app/pages/info/info.module.ts"
                  )
                )
                .then(function(m) {
                  return m.InfoModule;
                });
            }
          },
          {
            path: "wordmaker",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | pages-about-about-module */
                  "pages-about-about-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pages/about/about.module */
                    "./src/app/pages/about/about.module.ts"
                  )
                )
                .then(function(m) {
                  return m.AboutModule;
                });
            }
          },
          {
            path: "tableviewer",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | pages-tableviewer-tableviewer-module */
                  "pages-tableviewer-tableviewer-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pages/tableviewer/tableviewer.module */
                    "./src/app/pages/tableviewer/tableviewer.module.ts"
                  )
                )
                .then(function(m) {
                  return m.TableviewerModule;
                });
            }
          },
          {
            path: "**",
            redirectTo: "wordmaker"
          }
        ];

        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forRoot(routes, {
                useHash: true,
                scrollPositionRestoration: "enabled",
                preloadingStrategy:
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                    "PreloadAllModules"
                  ]
              })
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              AppRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    // useHash supports github.io demo page, remove in your app
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forRoot(routes, {
                        useHash: true,
                        scrollPositionRestoration: "enabled",
                        preloadingStrategy:
                          _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                            "PreloadAllModules"
                          ]
                      })
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ]
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/app.module.ts":
      /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

      /*! exports provided: AppModule */

      /***/
      function srcAppAppModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppModule", function() {
          return AppModule;
        });
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */
          "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );
        /* harmony import */

        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser/animations */
          "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./core/core.module */
          "./src/app/core/core.module.ts"
        );
        /* harmony import */

        var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./app-routing.module */
          "./src/app/app-routing.module.ts"
        );
        /* harmony import */

        var _app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./app/app.component */
          "./src/app/app/app.component.ts"
        );
        /* harmony import */

        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./shared/shared.module */
          "./src/app/shared/shared.module.ts"
        );

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
          ]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          imports: [
            [
              // angular
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__[
                "BrowserAnimationsModule"
              ],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ], // core
              _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], // shared
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                "SharedModule"
              ], // app
              _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                "AppRoutingModule"
              ]
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_app_component__WEBPACK_IMPORTED_MODULE_5__[
                    "AppComponent"
                  ]
                ],
                imports: [
                  // angular
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__[
                    "BrowserAnimationsModule"
                  ],
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                    "BrowserModule"
                  ], // core
                  _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], // shared
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                    "SharedModule"
                  ], // app
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                    "AppRoutingModule"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
                args: [
                  {
                    imports: [
                      // angular
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__[
                        "BrowserAnimationsModule"
                      ],
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                        "BrowserModule"
                      ], // core
                      _core_core_module__WEBPACK_IMPORTED_MODULE_3__[
                        "CoreModule"
                      ], // shared
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                        "SharedModule"
                      ], // app
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                        "AppRoutingModule"
                      ]
                    ],
                    declarations: [
                      _app_app_component__WEBPACK_IMPORTED_MODULE_5__[
                        "AppComponent"
                      ]
                    ],
                    bootstrap: [
                      _app_app_component__WEBPACK_IMPORTED_MODULE_5__[
                        "AppComponent"
                      ]
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/app/app.component.ts":
      /*!**************************************!*\
    !*** ./src/app/app/app.component.ts ***!
    \**************************************/

      /*! exports provided: AppComponent */

      /***/
      function srcAppAppAppComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppComponent", function() {
          return AppComponent;
        });
        /* harmony import */

        var browser_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! browser-detect */
          "../../node_modules/browser-detect/dist/browser-detect.es5.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../core/core.module */
          "./src/app/core/core.module.ts"
        );
        /* harmony import */

        var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../core/settings/settings.actions */
          "./src/app/core/settings/settings.actions.ts"
        );
        /* harmony import */

        var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/sidenav */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js"
        );
        /* harmony import */

        var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/list */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/toolbar */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js"
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/button */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */

        var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @fortawesome/angular-fontawesome */
          "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../shared/logo/logo.component */
          "./src/app/shared/logo/logo.component.ts"
        );
        /* harmony import */

        var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material/menu */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js"
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @angular/material/icon */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @angular/material/tooltip */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js"
        );
        /* harmony import */

        var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @angular/material/select */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! @angular/forms */
          "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! @angular/material/core */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );

        var _c0 = function _c0(a0) {
          return [a0];
        };

        function AppComponent_a_11_Template(rf, ctx) {
          if (rf & 1) {
            var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵgetCurrentView"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "a",
              39
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function AppComponent_a_11_Template_a_click_0_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r148
                );

                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

                var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵreference"
                ](4);

                return _r137.close();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
              2,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var item_r146 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "routerLink",
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](
                4,
                _c0,
                item_r146.link
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                2,
                2,
                item_r146.label
              ),
              " "
            );
          }
        }

        function AppComponent_button_26_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "button",
              40
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
              2,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var item_r149 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "routerLink",
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](
                4,
                _c0,
                item_r149.link
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                2,
                2,
                item_r149.label
              ),
              " "
            );
          }
        }

        function AppComponent_button_27_Template(rf, ctx) {
          if (rf & 1) {
            var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵgetCurrentView"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "button",
              41
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function AppComponent_button_27_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r151
                );

                var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵnextContext"
                ]();

                return ctx_r150.onLoginClick();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
              2,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                2,
                1,
                "ww.menu.login"
              ),
              " "
            );
          }
        }

        function AppComponent_button_29_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "button",
              42
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              1,
              "fa-icon",
              43
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵreference"
            ](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "matMenuTriggerFor",
              _r142
            );
          }
        }

        function AppComponent_span_44_mat_option_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "mat-option",
              46
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var l_r154 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "value",
              l_r154
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              " ",
              l_r154.toUpperCase(),
              " "
            );
          }
        }

        function AppComponent_span_44_Template(rf, ctx) {
          if (rf & 1) {
            var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵgetCurrentView"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "span"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              1,
              "mat-select",
              44
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "selectionChange",
              function AppComponent_span_44_Template_mat_select_selectionChange_1_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r156
                );

                var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵnextContext"
                ]();

                return ctx_r155.onLanguageSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
              2,
              AppComponent_span_44_mat_option_2_Template,
              2,
              2,
              "mat-option",
              45
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var language_r152 = ctx.ngIf;

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵnextContext"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "ngModel",
              language_r152
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "ngForOf",
              ctx_r143.languages
            );
          }
        }

        function AppComponent_span_74_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "span"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵnextContext"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              "[",
              ctx_r145.envName,
              "]"
            );
          }
        }

        var _c1 = function _c1() {
          return ["fab", "github"];
        };

        var _c2 = function _c2() {
          return ["fab", "medium-m"];
        };

        var _c3 = function _c3() {
          return ["fab", "youtube"];
        };

        var AppComponent =
          /*#__PURE__*/
          (function() {
            function AppComponent(store, storageService) {
              _classCallCheck(this, AppComponent);

              this.store = store;
              this.storageService = storageService;
              this.isProd =
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__[
                  "environment"
                ].production;
              this.envName =
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__[
                  "environment"
                ].envName;
              this.version =
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__[
                  "environment"
                ].versions.app;
              this.year = new Date().getFullYear();
              this.logo = __webpack_require__(
                /*! ../../assets/logo.png */
                "./src/assets/logo.png"
              );
              this.languages = ["en", "fr"];
              this.navigation = [
                {
                  link: "wordmaker",
                  label: "ww.wordmaker.title"
                },
                {
                  link: "tableviewer",
                  label: "ww.tableviewer.title"
                },
                {
                  link: "info",
                  label: "ww.menu.info"
                },
                {
                  link: "about",
                  label: "ww.menu.about"
                }
              ];
              this.navigationSideMenu = [].concat(
                _toConsumableArray(this.navigation),
                [
                  {
                    link: "settings",
                    label: "ww.menu.settings"
                  }
                ]
              );
            }

            _createClass(
              AppComponent,
              [
                {
                  key: "ngOnInit",
                  value: function ngOnInit() {
                    this.storageService.testLocalStorage();

                    if (AppComponent.isIEorEdgeOrSafari()) {
                      this.store.dispatch(
                        Object(
                          _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_5__[
                            "actionSettingsChangeAnimationsPageDisabled"
                          ]
                        )({
                          pageAnimationsDisabled: true
                        })
                      );
                    }

                    this.isAuthenticated$ = this.store.pipe(
                      Object(
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"]
                      )(
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                          "selectIsAuthenticated"
                        ]
                      )
                    );
                    this.stickyHeader$ = this.store.pipe(
                      Object(
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"]
                      )(
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                          "selectSettingsStickyHeader"
                        ]
                      )
                    );
                    this.language$ = this.store.pipe(
                      Object(
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"]
                      )(
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                          "selectSettingsLanguage"
                        ]
                      )
                    );
                    this.theme$ = this.store.pipe(
                      Object(
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"]
                      )(
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                          "selectEffectiveTheme"
                        ]
                      )
                    );
                  }
                },
                {
                  key: "onLoginClick",
                  value: function onLoginClick() {
                    this.store.dispatch(
                      Object(
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                          "authLogin"
                        ]
                      )()
                    );
                  }
                },
                {
                  key: "onLogoutClick",
                  value: function onLogoutClick() {
                    this.store.dispatch(
                      Object(
                        _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                          "authLogout"
                        ]
                      )()
                    );
                  }
                },
                {
                  key: "onLanguageSelect",
                  value: function onLanguageSelect(_ref) {
                    var language = _ref.value;
                    this.store.dispatch(
                      Object(
                        _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_5__[
                          "actionSettingsChangeLanguage"
                        ]
                      )({
                        language: language
                      })
                    );
                  }
                }
              ],
              [
                {
                  key: "isIEorEdgeOrSafari",
                  value: function isIEorEdgeOrSafari() {
                    return ["ie", "edge", "safari"].includes(
                      Object(
                        browser_detect__WEBPACK_IMPORTED_MODULE_0__["default"]
                      )().name
                    );
                  }
                }
              ]
            );

            return AppComponent;
          })();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                "LocalStorageService"
              ]
            )
          );
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["ww-root"]],
          decls: 75,
          vars: 48,
          consts: [
            ["mode", "push"],
            ["sidenav", ""],
            [1, "branding"],
            [3, "src"],
            [
              "mat-list-item",
              "",
              "routerLinkActive",
              "active",
              3,
              "routerLink",
              "click",
              4,
              "ngFor",
              "ngForOf"
            ],
            [
              "mat-list-item",
              "",
              "href",
              "https://github.com/roedoejet/wordweaver-UI",
              "target",
              "_blank"
            ],
            [1, "wrapper"],
            [1, "toolbar"],
            ["color", "primary"],
            ["mat-icon-button", "", 1, "d-md-none", "mobile-only", 3, "click"],
            ["icon", "bars"],
            [
              "routerLink",
              "",
              1,
              "branding",
              "spacer",
              "center",
              "d-inline",
              "d-sm-none"
            ],
            [
              "routerLink",
              "",
              1,
              "branding",
              "spacer",
              "center",
              "d-none",
              "d-sm-inline",
              "d-md-none"
            ],
            [
              "routerLink",
              "",
              1,
              "branding",
              "spacer",
              "d-none",
              "d-md-inline"
            ],
            [1, "branding", "ui-button"],
            [1, "d-none", "d-md-inline"],
            [
              "mat-button",
              "",
              "class",
              "nav-button",
              "routerLinkActive",
              "active",
              3,
              "routerLink",
              4,
              "ngFor",
              "ngForOf"
            ],
            [
              "mat-button",
              "",
              "mat-stroked-button",
              "",
              "color",
              "accent",
              3,
              "click",
              4,
              "ngIf"
            ],
            ["mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"],
            ["toolbarUserMenu", "matMenu"],
            ["mat-menu-item", "", 3, "click"],
            ["icon", "power-off"],
            [
              "mat-icon-button",
              "",
              "routerLink",
              "settings",
              1,
              "d-none",
              "d-sm-inline"
            ],
            ["icon", "cog"],
            [
              "matTooltipPosition",
              "before",
              "mat-icon-button",
              "",
              "href",
              "https://github.com/roedoejet/ReadAlong-Studio",
              "target",
              "_blank",
              1,
              "link",
              "d-none",
              "d-sm-inline",
              3,
              "matTooltip"
            ],
            [3, "icon"],
            [4, "ngIf"],
            [1, "content"],
            ["o", "outlet"],
            [1, "footer"],
            [1, "row"],
            [1, "col-sm-12", "links"],
            [
              "href",
              "https://www.github.com/dhdaines/ReadAlong-Studio",
              "target",
              "_blank"
            ],
            ["href", "", "target", "_blank"],
            [1, "col-12", "signature"],
            [1, "year"],
            [1, "d-block", "d-sm-none"],
            [
              "matTooltipPosition",
              "before",
              "href",
              "https://github.com/roedoejet/ReadAlong-Studio/blob/master/CHANGELOG.md",
              3,
              "matTooltip"
            ],
            ["icon", "rocket"],
            [
              "mat-list-item",
              "",
              "routerLinkActive",
              "active",
              3,
              "routerLink",
              "click"
            ],
            [
              "mat-button",
              "",
              "routerLinkActive",
              "active",
              1,
              "nav-button",
              3,
              "routerLink"
            ],
            [
              "mat-button",
              "",
              "mat-stroked-button",
              "",
              "color",
              "accent",
              3,
              "click"
            ],
            ["mat-icon-button", "", 3, "matMenuTriggerFor"],
            ["icon", "user-circle"],
            [3, "ngModel", "selectionChange"],
            [3, "value", 4, "ngFor", "ngForOf"],
            [3, "value"]
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵgetCurrentView"
              ]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                0,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                2,
                "mat-sidenav-container"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                3,
                "mat-sidenav",
                0,
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                5,
                "div",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                6,
                "img",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                7,
                "span"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
                9,
                "translate"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                10,
                "mat-nav-list"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                11,
                AppComponent_a_11_Template,
                3,
                6,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                12,
                "a",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
                13,
                " Github "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                14,
                "div",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                15,
                "div",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                18,
                "mat-toolbar",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                19,
                "button",
                9
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
                "click",
                function AppComponent_Template_button_click_19_listener(
                  $event
                ) {
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                    _r157
                  );

                  var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                    "ɵɵreference"
                  ](4);

                  return _r137.open();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                20,
                "fa-icon",
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                21,
                "span",
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                22,
                "span",
                12
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                23,
                "span",
                13
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                24,
                "ww-logo",
                14
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                25,
                "span",
                15
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                26,
                AppComponent_button_26_Template,
                3,
                6,
                "button",
                16
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                27,
                AppComponent_button_27_Template,
                3,
                3,
                "button",
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                29,
                AppComponent_button_29_Template,
                2,
                1,
                "button",
                18
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                31,
                "mat-menu",
                null,
                19
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                33,
                "button",
                20
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
                "click",
                function AppComponent_Template_button_click_33_listener(
                  $event
                ) {
                  return ctx.onLogoutClick();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                34,
                "mat-icon"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                35,
                "fa-icon",
                21
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                36,
                "span"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
                38,
                "translate"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                39,
                "button",
                22
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                40,
                "fa-icon",
                23
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                41,
                "a",
                24
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
                42,
                "translate"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                43,
                "fa-icon",
                25
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                44,
                AppComponent_span_44_Template,
                3,
                2,
                "span",
                26
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                46,
                "div",
                27
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                47,
                "router-outlet",
                null,
                28
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                49,
                "div",
                29
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                50,
                "div",
                30
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                51,
                "div",
                31
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                52,
                "a",
                32
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                53,
                "fa-icon",
                25
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                54,
                "span"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
                55,
                "Github"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                56,
                "a",
                33
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                57,
                "fa-icon",
                25
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                58,
                "span"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
                59,
                "Medium"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                60,
                "a",
                33
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                61,
                "fa-icon",
                25
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                62,
                "span"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
                63,
                "Youtube"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                64,
                "div",
                30
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                65,
                "div",
                34
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
                66,
                " \xA9 "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                67,
                "span",
                35
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                69,
                "br",
                36
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                70,
                "a",
                37
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](
                71,
                "translate"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
                72,
                "fa-icon",
                38
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                74,
                AppComponent_span_74_Template,
                2,
                1,
                "span",
                26
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵreference"
              ](48);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](
                "theme-wrapper " +
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                    1,
                    24,
                    ctx.theme$
                  )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "src",
                ctx.logo,
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  9,
                  26,
                  "ww.title.short"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngForOf",
                ctx.navigationSideMenu
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"](
                "position",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  16,
                  28,
                  ctx.stickyHeader$
                )
                  ? "fixed"
                  : "inherit"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"](
                "mat-elevation-z4",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  17,
                  30,
                  ctx.stickyHeader$
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngForOf",
                ctx.navigation
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngIf",
                !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  28,
                  32,
                  ctx.isAuthenticated$
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngIf",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  30,
                  34,
                  ctx.isAuthenticated$
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  38,
                  36,
                  "ww.menu.logout"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "matTooltip",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  42,
                  38,
                  "ww.header.github"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "icon",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](
                  44,
                  _c1
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngIf",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  45,
                  40,
                  ctx.language$
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "@routeAnimations",
                _r144.isActivated &&
                  _r144.activatedRoute.routeConfig.data &&
                  _r144.activatedRoute.routeConfig.data.title
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "icon",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](
                  45,
                  _c1
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "icon",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](
                  46,
                  _c2
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "icon",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](
                  47,
                  _c3
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
                ctx.year
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "matTooltip",
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](
                  71,
                  42,
                  "ww.footer.changelog"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
                " ",
                ctx.version,
                " "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngIf",
                !ctx.isProd
              );
            }
          },
          directives: [
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__[
              "MatSidenavContainer"
            ],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__[
              "MatSidenav"
            ],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__[
              "MatToolbar"
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__[
              "FaIconComponent"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"],
            _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__[
              "LogoComponent"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
              "MatTooltip"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__[
              "MatMenuTrigger"
            ],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]
          ],
          styles: [
            ".theme-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  z-index: 10;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  padding-top: 4px;\n  text-overflow: ellipsis;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  width: 48px;\n  height: 48px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  margin: 0 0 0 20px;\n  width: 40px;\n  font-size: 14px;\n}\n\n@media (max-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 0 10px;\n  }\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin-top: 64px;\n  overflow: hidden;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  padding: 0 15px;\n  text-align: center;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-transition: padding 0.5s;\n  transition: padding 0.5s;\n  display: inline-block;\n  padding: 20px 5px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 35px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75px;\n  padding: 0 0 0 3px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n}\n\n@media (min-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n}\n\n@media (max-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 0;\n    padding: 0;\n  }\n}\n\n@media (max-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 5px;\n  }\n}\n\n@media (min-width: ) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15px;\n  }\n}\n\n@media (max-width: 600px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 56px !important;\n  }\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 8px 10px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 2px 10px 0 0;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNERjs7QURHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdJO0VBQ0Usa0JBQUE7QUNETjs7QURJSTtFQUNFLGVBQUE7QUNGTjs7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0FDSFI7O0FETU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pSOztBRFFJO0VBQ0Usa0JBQUE7QUNOTjs7QURTSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ1BOOztBRFVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1JOOztBRFdJO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQ1ROO0FBQ0Y7O0FEYUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNYSjs7QURhSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYTjs7QURjSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1pOOztBRGNNO0VBQ0UsZUFBQTtBQ1pSOztBRGVVO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNiWjs7QURlWTtFQUNFLHFCQUFBO0FDYmQ7O0FEZ0JZO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNkZDs7QURpQlk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7QUNmZDs7QURtQlU7RUFDRTtJQUNFLGtCQUFBO0VDakJaO0FBQ0Y7O0FEb0JVO0VBQ0U7SUFDRSxhQUFBO0VDbEJaO0VEb0JZO0lBQ0UsUUFBQTtJQUNBLFVBQUE7RUNsQmQ7QUFDRjs7QURzQlU7RUFDRTtJQUNFLGlCQUFBO0VDcEJaO0FBQ0Y7O0FEd0JRO0VBQ0U7SUFDRSxrQkFBQTtFQ3RCVjtFRHdCVTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQ3RCWjtBQUNGOztBRDZCRTtFQUNFO0lBQ0UsMkJBQUE7RUMzQko7QUFDRjs7QUQrQkE7RUFDRSxZQUFBO0FDNUJGOztBRDhCRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzVCSjs7QUQ4Qkk7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUM1Qk47O0FEK0JJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDN0JOOztBRGlDRTtFQUNFLGNBQUE7QUMvQkoiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy91dGlsaXRpZXMvY29uZmlnJztcblxuLnRoZW1lLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5uYXYtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICB9XG5cbiAgICBmYS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuYnJhbmRpbmcge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgJi5jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgbWF0LXNlbGVjdCB7XG4gICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsIGxnKSkge1xuICAgICAgLm5hdi1idXR0b24ge1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuY29udGVudCB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDY0cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDNweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsIGxnKSkge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsIG1kKSkge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgc20pKSB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBzbSkpIHtcbiAgICAgICAgICAuc2lnbmF0dXJlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogNTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcblxuICAuYnJhbmRpbmcge1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW46IDJweCAxMHB4IDAgMDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbmF2LWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG4iLCIudGhlbWUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAudG9vbGJhciAubmF2LWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAudG9vbGJhciBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC50b29sYmFyIC5icmFuZGluZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLnRvb2xiYXIgLmJyYW5kaW5nLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAudG9vbGJhciAuYnJhbmRpbmcgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLnRvb2xiYXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAudG9vbGJhciAuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLnRvb2xiYXIgbWF0LXNlbGVjdCB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiApIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC50b29sYmFyIC5uYXYtYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAubGlua3MgYSB7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyMHB4IDVweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAud3JhcHBlciAuZm9vdGVyIC5yb3cgLmxpbmtzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIGZhLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAzNXB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAubGlua3MgYSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzVweDtcbiAgcGFkZGluZzogMCAwIDAgM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xufVxuQG1lZGlhIChtaW4td2lkdGg6ICkge1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiApIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAubGlua3MgYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBtYXQtc2lkZW5hdi1jb250YWluZXIgLndyYXBwZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiApIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAubGlua3MgYSB7XG4gICAgcGFkZGluZzogMjBweCA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiApIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAuc2lnbmF0dXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIC53cmFwcGVyIC5mb290ZXIgLnJvdyAuc2lnbmF0dXJlIGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciAuY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNTZweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxubWF0LXNpZGVuYXYgLmJyYW5kaW5nIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxubWF0LXNpZGVuYXYgLmJyYW5kaW5nIGltZyB7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiAycHggMTBweCAwIDA7XG59XG5tYXQtc2lkZW5hdiAuYnJhbmRpbmcgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5tYXQtc2lkZW5hdiAubWF0LW5hdi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59Il19 */"
          ],
          data: {
            animation: [
              _core_core_module__WEBPACK_IMPORTED_MODULE_4__["routeAnimations"]
            ]
          }
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [
                  {
                    selector: "ww-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.scss"],
                    animations: [
                      _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                        "routeAnimations"
                      ]
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
                },
                {
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__[
                      "LocalStorageService"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/affix/affix.service.ts":
      /*!*********************************************!*\
    !*** ./src/app/core/affix/affix.service.ts ***!
    \*********************************************/

      /*! exports provided: AffixService */

      /***/
      function srcAppCoreAffixAffixServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AffixService", function() {
          return AffixService;
        });
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */
          "../../node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../environments/environment */
          "./src/environments/environment.ts"
        );

        var AffixService =
          /*#__PURE__*/
          (function() {
            function AffixService(http) {
              var _this = this;

              _classCallCheck(this, AffixService);

              this.http = http;
              this.allAffixCombos = new rxjs__WEBPACK_IMPORTED_MODULE_0__[
                "Observable"
              ]();
              this.path =
                _environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                  "environment"
                ].base +
                _environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                  "environment"
                ].prefix +
                "aff-options";
              this.affix_path =
                _environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                  "environment"
                ].base +
                _environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                  "environment"
                ].prefix +
                "affixes";
              this.affoptions$ = this.http.get(this.path);
              this.random$ = this.affoptions$.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
                  function(res) {
                    return _this.getRandomOption(res);
                  }
                )
              );
              this.http.get(this.affix_path).subscribe(function(d) {
                return (_this.affixes = d);
              });
              this.affoptions$.subscribe(function(o) {
                return (_this.affixoptions = o);
              });
            }

            _createClass(AffixService, [
              {
                key: "getAffix",
                value: function getAffix(tag) {
                  return this.affixes.filter(function(a) {
                    return a.tag === tag;
                  })[0];
                }
              },
              {
                key: "getAffOption",
                value: function getAffOption(tag) {
                  return this.affixoptions.filter(function(a) {
                    return a.tag === tag;
                  })[0];
                }
              },
              {
                key: "getRandomOption",
                value: function getRandomOption(options) {
                  return options[Math.floor(Math.random() * options.length)];
                }
              }
            ]);

            return AffixService;
          })();

        AffixService.ɵfac = function AffixService_Factory(t) {
          return new (t || AffixService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            )
          );
        };

        AffixService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineInjectable"
        ]({
          token: AffixService,
          factory: AffixService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](
            AffixService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                      "HttpClient"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/animations/animations.service.ts":
      /*!*******************************************************!*\
    !*** ./src/app/core/animations/animations.service.ts ***!
    \*******************************************************/

      /*! exports provided: AnimationsService */

      /***/
      function srcAppCoreAnimationsAnimationsServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AnimationsService",
          function() {
            return AnimationsService;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var AnimationsService =
          /*#__PURE__*/
          (function() {
            function AnimationsService() {
              _classCallCheck(this, AnimationsService);

              AnimationsService.routeAnimationType = "NONE";
            }

            _createClass(
              AnimationsService,
              [
                {
                  key: "updateRouteAnimationType",
                  value: function updateRouteAnimationType(
                    pageAnimations,
                    elementsAnimations
                  ) {
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
              ],
              [
                {
                  key: "isRouteAnimationsType",
                  value: function isRouteAnimationsType(type) {
                    return AnimationsService.routeAnimationType === type;
                  }
                }
              ]
            );

            return AnimationsService;
          })();

        AnimationsService.routeAnimationType = "NONE";

        AnimationsService.ɵfac = function AnimationsService_Factory(t) {
          return new (t || AnimationsService)();
        };

        AnimationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AnimationsService,
          factory: AnimationsService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AnimationsService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/animations/route.animations.ts":
      /*!*****************************************************!*\
    !*** ./src/app/core/animations/route.animations.ts ***!
    \*****************************************************/

      /*! exports provided: ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements */

      /***/
      function srcAppCoreAnimationsRouteAnimationsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ROUTE_ANIMATIONS_ELEMENTS",
          function() {
            return ROUTE_ANIMATIONS_ELEMENTS;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "routeAnimations",
          function() {
            return routeAnimations;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "isRouteAnimationsAll",
          function() {
            return isRouteAnimationsAll;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "isRouteAnimationsNone",
          function() {
            return isRouteAnimationsNone;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "isRouteAnimationsPage",
          function() {
            return isRouteAnimationsPage;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "isRouteAnimationsElements",
          function() {
            return isRouteAnimationsElements;
          }
        );
        /* harmony import */

        var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/animations */
          "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js"
        );
        /* harmony import */

        var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./animations.service */
          "./src/app/core/animations/animations.service.ts"
        );

        var ROUTE_ANIMATIONS_ELEMENTS = "route-animations-elements";
        var STEPS_ALL = [
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(
            ":enter > *",
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: 0,
              position: "fixed"
            }),
            {
              optional: true
            }
          ),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(
            ":enter ." + ROUTE_ANIMATIONS_ELEMENTS,
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: 0
            }),
            {
              optional: true
            }
          ),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(
              ":leave > *",
              [
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                )({
                  transform: "translateY(0%)",
                  opacity: 1
                }),
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"]
                )(
                  "0.2s ease-in-out",
                  Object(
                    _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                  )({
                    transform: "translateY(-3%)",
                    opacity: 0
                  })
                ),
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                )({
                  position: "fixed"
                })
              ],
              {
                optional: true
              }
            ),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(
              ":enter > *",
              [
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                )({
                  transform: "translateY(-3%)",
                  opacity: 0,
                  position: "static"
                }),
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"]
                )(
                  "0.5s ease-in-out",
                  Object(
                    _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                  )({
                    transform: "translateY(0%)",
                    opacity: 1
                  })
                )
              ],
              {
                optional: true
              }
            )
          ]),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(
            ":enter ." + ROUTE_ANIMATIONS_ELEMENTS,
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(
              75,
              [
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                )({
                  transform: "translateY(10%)",
                  opacity: 0
                }),
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"]
                )(
                  "0.5s ease-in-out",
                  Object(
                    _angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"]
                  )({
                    transform: "translateY(0%)",
                    opacity: 1
                  })
                )
              ]
            ),
            {
              optional: true
            }
          )
        ];
        var STEPS_NONE = [];
        var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
        var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
        var routeAnimations = Object(
          _angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"]
        )("routeAnimations", [
          Object(
            _angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"]
          )(isRouteAnimationsAll, STEPS_ALL),
          Object(
            _angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"]
          )(isRouteAnimationsNone, STEPS_NONE),
          Object(
            _angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"]
          )(isRouteAnimationsPage, STEPS_PAGE),
          Object(
            _angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"]
          )(isRouteAnimationsElements, STEPS_ELEMENTS)
        ]);

        function isRouteAnimationsAll() {
          return _animations_service__WEBPACK_IMPORTED_MODULE_1__[
            "AnimationsService"
          ].isRouteAnimationsType("ALL");
        }

        function isRouteAnimationsNone() {
          return _animations_service__WEBPACK_IMPORTED_MODULE_1__[
            "AnimationsService"
          ].isRouteAnimationsType("NONE");
        }

        function isRouteAnimationsPage() {
          return _animations_service__WEBPACK_IMPORTED_MODULE_1__[
            "AnimationsService"
          ].isRouteAnimationsType("PAGE");
        }

        function isRouteAnimationsElements() {
          return _animations_service__WEBPACK_IMPORTED_MODULE_1__[
            "AnimationsService"
          ].isRouteAnimationsType("ELEMENTS");
        }
        /***/
      },

    /***/
    "./src/app/core/auth/auth-guard.service.ts":
      /*!*************************************************!*\
    !*** ./src/app/core/auth/auth-guard.service.ts ***!
    \*************************************************/

      /*! exports provided: AuthGuardService */

      /***/
      function srcAppCoreAuthAuthGuardServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AuthGuardService",
          function() {
            return AuthGuardService;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./auth.selectors */
          "./src/app/core/auth/auth.selectors.ts"
        );

        var AuthGuardService =
          /*#__PURE__*/
          (function() {
            function AuthGuardService(store) {
              _classCallCheck(this, AuthGuardService);

              this.store = store;
            }

            _createClass(AuthGuardService, [
              {
                key: "canActivate",
                value: function canActivate() {
                  return this.store.pipe(
                    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(
                      _auth_selectors__WEBPACK_IMPORTED_MODULE_2__[
                        "selectIsAuthenticated"
                      ]
                    )
                  );
                }
              }
            ]);

            return AuthGuardService;
          })();

        AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
          return new (t || AuthGuardService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
            )
          );
        };

        AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AuthGuardService,
          factory: AuthGuardService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AuthGuardService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/auth/auth.actions.ts":
      /*!*******************************************!*\
    !*** ./src/app/core/auth/auth.actions.ts ***!
    \*******************************************/

      /*! exports provided: authLogin, authLogout */

      /***/
      function srcAppCoreAuthAuthActionsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "authLogin", function() {
          return authLogin;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "authLogout", function() {
          return authLogout;
        });
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );

        var authLogin = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )("[Auth] Login");
        var authLogout = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )("[Auth] Logout");
        /***/
      },

    /***/
    "./src/app/core/auth/auth.effects.ts":
      /*!*******************************************!*\
    !*** ./src/app/core/auth/auth.effects.ts ***!
    \*******************************************/

      /*! exports provided: AUTH_KEY, AuthEffects */

      /***/
      function srcAppCoreAuthAuthEffectsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() {
          return AUTH_KEY;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AuthEffects", function() {
          return AuthEffects;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngrx/effects */
          "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../local-storage/local-storage.service */
          "./src/app/core/local-storage/local-storage.service.ts"
        );
        /* harmony import */

        var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./auth.actions */
          "./src/app/core/auth/auth.actions.ts"
        );

        var AUTH_KEY = "AUTH";

        var AuthEffects = function AuthEffects(
          actions$,
          localStorageService,
          router
        ) {
          var _this2 = this;

          _classCallCheck(this, AuthEffects);

          this.actions$ = actions$;
          this.localStorageService = localStorageService;
          this.router = router;
          this.login = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"]
          )(
            function() {
              return _this2.actions$.pipe(
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(
                  _auth_actions__WEBPACK_IMPORTED_MODULE_5__["authLogin"]
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
                  function() {
                    return _this2.localStorageService.setItem(AUTH_KEY, {
                      isAuthenticated: true
                    });
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
          this.logout = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"]
          )(
            function() {
              return _this2.actions$.pipe(
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(
                  _auth_actions__WEBPACK_IMPORTED_MODULE_5__["authLogout"]
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
                  function() {
                    _this2.router.navigate([""]);

                    _this2.localStorageService.setItem(AUTH_KEY, {
                      isAuthenticated: false
                    });
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
        };

        AuthEffects.ɵfac = function AuthEffects_Factory(t) {
          return new (t || AuthEffects)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__[
                "LocalStorageService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };

        AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AuthEffects,
          factory: AuthEffects.ɵfac
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AuthEffects,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
              }
            ],
            function() {
              return [
                {
                  type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
                },
                {
                  type:
                    _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__[
                      "LocalStorageService"
                    ]
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/auth/auth.reducer.ts":
      /*!*******************************************!*\
    !*** ./src/app/core/auth/auth.reducer.ts ***!
    \*******************************************/

      /*! exports provided: initialState, authReducer */

      /***/
      function srcAppCoreAuthAuthReducerTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "initialState", function() {
          return initialState;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "authReducer", function() {
          return authReducer;
        });
        /* harmony import */

        var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./auth.actions */
          "./src/app/core/auth/auth.actions.ts"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );

        var initialState = {
          isAuthenticated: false
        };
        var reducer = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"]
        )(
          initialState,
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(
            _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLogin"],
            function(state) {
              return Object.assign(Object.assign({}, state), {
                isAuthenticated: true
              });
            }
          ),
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(
            _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLogout"],
            function(state) {
              return Object.assign(Object.assign({}, state), {
                isAuthenticated: false
              });
            }
          )
        );

        function authReducer(state, action) {
          return reducer(state, action);
        }
        /***/
      },

    /***/
    "./src/app/core/auth/auth.selectors.ts":
      /*!*********************************************!*\
    !*** ./src/app/core/auth/auth.selectors.ts ***!
    \*********************************************/

      /*! exports provided: selectAuth, selectIsAuthenticated */

      /***/
      function srcAppCoreAuthAuthSelectorsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "selectAuth", function() {
          return selectAuth;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectIsAuthenticated",
          function() {
            return selectIsAuthenticated;
          }
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core.state */
          "./src/app/core/core.state.ts"
        );

        var selectAuth = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectAuthState"], function(
          state
        ) {
          return state;
        });
        var selectIsAuthenticated = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectAuthState"], function(
          state
        ) {
          return state.isAuthenticated;
        });
        /***/
      },

    /***/
    "./src/app/core/conjugation/conjugation.service.ts":
      /*!*********************************************************!*\
    !*** ./src/app/core/conjugation/conjugation.service.ts ***!
    \*********************************************************/

      /*! exports provided: ConjugationService */

      /***/
      function srcAppCoreConjugationConjugationServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ConjugationService",
          function() {
            return ConjugationService;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */
          "../../node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! lodash */
          "../../node_modules/lodash/lodash.js"
        );
        /* harmony import */

        var lodash__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/
          __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */

        var _affix_affix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../affix/affix.service */
          "./src/app/core/affix/affix.service.ts"
        );
        /* harmony import */

        var _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../pronoun/pronoun.service */
          "./src/app/core/pronoun/pronoun.service.ts"
        );
        /* harmony import */

        var _verb_verb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../verb/verb.service */
          "./src/app/core/verb/verb.service.ts"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../settings/settings.selectors */
          "./src/app/core/settings/settings.selectors.ts"
        );

        var ConjugationService =
          /*#__PURE__*/
          (function() {
            function ConjugationService(
              http,
              affixService,
              verbService,
              pronounService,
              store
            ) {
              _classCallCheck(this, ConjugationService);

              this.http = http;
              this.affixService = affixService;
              this.verbService = verbService;
              this.pronounService = pronounService;
              this.store = store;
              this.path =
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__[
                  "environment"
                ].base +
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__[
                  "environment"
                ].prefix +
                "conjugations";
              this.test_path =
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__[
                  "environment"
                ].base +
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__[
                  "environment"
                ].test_prefix +
                "conjugations";
              this.conjugations$ = this.http.get(this.path);
              this.errorTier =
                "Oh no! We couldn't conjugate this. \n  Please make sure you're connected to the internet and try again.\n  If the problem keeps happening, please contact us!";
              this.settings$ = this.store.pipe(
                Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(
                  _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_10__[
                    "selectSettings"
                  ]
                )
              );
            }

            _createClass(ConjugationService, [
              {
                key: "createRequestUrl",
                value: function createRequestUrl(tableargs, optional) {
                  var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                    "HttpParams"
                  ]();
                  var agents = tableargs["agent"];
                  var patients = tableargs["patient"];
                  var afftags = tableargs["aff-option"];
                  var verbtags = tableargs["root"];

                  if (agents) {
                    agents.forEach(function(agent) {
                      params = params.append("agent", agent);
                    });
                  }

                  if (patients) {
                    patients.forEach(function(patient) {
                      params = params.append("patient", patient);
                    });
                  }

                  if (afftags) {
                    afftags.forEach(function(afftag) {
                      params = params.append("aff-option", afftag);
                    });
                  }

                  if (verbtags) {
                    verbtags.forEach(function(verbtag) {
                      params = params.append("root", verbtag);
                    });
                  }

                  if (optional) {
                    optional.forEach(function(option) {
                      params = params.append(option["param"], option["value"]);
                    });
                  }

                  return params;
                }
              },
              {
                key: "conjugate",
                value: function conjugate(tableargs, optional) {
                  var _this3 = this;

                  var params = this.createRequestUrl(tableargs, optional);
                  var path = this.path;
                  return this.settings$.pipe(
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"]
                    )(function(settings) {
                      if (settings.testApi) {
                        path = _this3.test_path;
                      }

                      return _this3.http
                        .get(path, {
                          params: params
                        })
                        .pipe(
                          Object(
                            rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[
                              "catchError"
                            ]
                          )(function(err) {
                            return Object(
                              rxjs__WEBPACK_IMPORTED_MODULE_3__["of"]
                            )(err.error.message);
                          })
                        );
                    })
                  );
                }
              },
              {
                key: "conjugateTable",
                value: function conjugateTable(tableargs, test) {
                  var _this4 = this;

                  return this.conjugate(tableargs, (test = test)).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
                      function(res) {
                        if (typeof res === "string") {
                          // return error as string
                          return res;
                        } else {
                          return _this4.createTiers(res);
                        }
                      }
                    )
                  );
                }
              },
              {
                key: "returnAffopts",
                value: function returnAffopts(res) {
                  var affopts = [];
                  res["values"].forEach(function(conjugation) {
                    affopts.push(conjugation.affopt);
                  });
                  affopts = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["uniq"])(
                    affopts
                  );
                  affopts = affopts.map(function(a) {
                    return {
                      name: a
                    };
                  });
                  return affopts;
                }
              },
              {
                key: "returnPros",
                value: function returnPros(res, v) {
                  var _this5 = this;

                  var pronouns = [];
                  res.values.forEach(function(conjugation) {
                    if (conjugation.root["tag"] === v) {
                      var vb = _this5.verbService.getVerb(v);

                      if (vb["thematic_relation"] === "red") {
                        pronouns.push(
                          _this5.pronounService.getPronoun(
                            conjugation.pronoun["agent"]
                          )["gloss"]
                        );
                      } else if (vb["thematic_relation"] === "blue") {
                        pronouns.push(
                          _this5.pronounService.getPronoun(
                            conjugation.pronoun["patient"]
                          )["gloss"]
                        );
                      } else {
                        pronouns.push(
                          _this5.pronounService.getPronoun(
                            conjugation.pronoun["agent"]
                          )["gloss"] +
                            " > " +
                            _this5.pronounService.getPronoun(
                              conjugation.pronoun["patient"]
                            )["obj_gloss"]
                        );
                      }
                    }
                  });
                  pronouns = Object(
                    lodash__WEBPACK_IMPORTED_MODULE_5__["uniq"]
                  )(pronouns);
                  pronouns = pronouns.map(function(a) {
                    return {
                      name: a
                    };
                  });
                  return pronouns;
                }
              },
              {
                key: "returnValue",
                value: function returnValue(conjugation) {
                  var morphemes = [
                    conjugation.root,
                    conjugation.pronoun
                  ].concat(conjugation.affixes);
                  morphemes = morphemes.sort(function(a, b) {
                    return a.position - b.position;
                  });
                  return morphemes
                    .map(function(m) {
                      return m.value;
                    })
                    .join("");
                } // Determine if object is null or has any null properties. Intended for Agent and Patient
              },
              {
                key: "hasNull",
                value: function hasNull(target) {
                  if (target) {
                    for (var member in target) {
                      if (target[member] == null) {
                        return true;
                      }
                    }

                    return false;
                  } else {
                    return true;
                  }
                } // Return 'agent' or 'patient' or both
              },
              {
                key: "determinePNType",
                value: function determinePNType(conjugation, verb_role) {
                  var pn_roles = [];

                  if (verb_role === "red") {
                    pn_roles.push("agent");
                  } else if (verb_role === "blue") {
                    pn_roles.push("patient");
                  } else {
                    pn_roles.push("agent");
                    pn_roles.push("patient");
                  }

                  return pn_roles;
                } // This is an old recycled function and is very awkward. Should be changed.
              },
              {
                key: "createTiers",
                value: function createTiers(conjugations) {
                  var _this6 = this;

                  return conjugations.map(function(conjugation) {
                    var index = conjugations.indexOf(conjugation);
                    var values = conjugation.values;
                    return {
                      main: _this6.createTier(
                        values,
                        {
                          keys: ["value"],
                          seperator: ""
                        },
                        {
                          keys: ["value"],
                          seperator: ""
                        },
                        {
                          keys: ["value"],
                          seperator: ""
                        }
                      ),
                      secondary: _this6.createTier(
                        values,
                        {
                          keys: [" root"],
                          seperator: ""
                        },
                        {
                          keys: ["agent", "patient"],
                          seperator: " > "
                        },
                        {
                          keys: ["gloss"],
                          seperator: ""
                        }
                      ),
                      ternary: _this6.createTier(
                        values,
                        {
                          keys: ["gloss"],
                          seperator: ""
                        },
                        {
                          keys: ["gloss", "obj_gloss"],
                          seperator: " > "
                        },
                        {
                          keys: ["gloss"],
                          seperator: ""
                        }
                      ),
                      translation: conjugations[index]["translation"],
                      error: _this6.errorTier,
                      affopt: values["affopt"],
                      pronoun: values["pronoun"]
                    };
                  });
                }
              },
              {
                key: "createTier",
                value: function createTier(
                  conjugation,
                  verb_key_obj,
                  pn_key_obj,
                  aff_key_obj
                ) {
                  var _this7 = this;

                  // console.log(conjugation)
                  // use key_obj whose condition key is true
                  var verb_role = this.verbService.getVerb(
                    conjugation["root"]["tag"]
                  )["thematic_relation"]; // PN

                  var pronoun_role = this.determinePNType(
                    conjugation,
                    verb_role
                  );

                  if (
                    pronoun_role.indexOf("agent") > -1 &&
                    pronoun_role.indexOf("patient") > -1
                  ) {
                    conjugation.pronoun[
                      "gloss"
                    ] = this.pronounService.getPronoun(
                      conjugation.pronoun["agent"]
                    )["gloss"];
                    conjugation.pronoun[
                      "obj_gloss"
                    ] = this.pronounService.getPronoun(
                      conjugation.pronoun["patient"]
                    )["obj_gloss"];
                  } else if (pronoun_role.indexOf("agent") > -1) {
                    conjugation.pronoun[
                      "gloss"
                    ] = this.pronounService.getPronoun(
                      conjugation.pronoun["agent"]
                    )["gloss"];
                  } else {
                    conjugation.pronoun[
                      "gloss"
                    ] = this.pronounService.getPronoun(
                      conjugation.pronoun["patient"]
                    )["gloss"];
                  }

                  var pn_keys = pn_key_obj["keys"];
                  var pronoun_value;

                  if (pronoun_role.length > 1) {
                    pronoun_value = pn_keys
                      .map(function(key) {
                        return conjugation.pronoun[key];
                      })
                      .join(pn_key_obj["seperator"]);
                  } else {
                    if (conjugation.pronoun.hasOwnProperty(pn_keys[0])) {
                      pronoun_value = conjugation.pronoun[pn_keys[0]];
                    } else {
                      pronoun_value = pn_keys[0];
                    }
                  }

                  var pronoun_role_css = pronoun_role; // This should be pulled out into the API. This is Kawennonnis-specific.

                  if (
                    (verb_role === "red" &&
                      conjugation["affixes"].filter(function(x) {
                        return x.tag === "perf";
                      }).length > 0) ||
                    (conjugation["affixes"].filter(function(x) {
                      return x.tag === "stative";
                    }).length > 0 &&
                      conjugation["root"]["tag"].endsWith("perf-r"))
                  ) {
                    pronoun_role_css = ["patient"];
                  } // But it should give Agent if it's there, else Patient

                  var pronoun_obj = {
                    position: conjugation["pronoun"]["position"],
                    value: pronoun_value,
                    classes: [pronoun_role_css.join(" "), "pronoun"].join(" "),
                    type: "pronoun"
                  }; // Verb

                  conjugation.root["gloss"] = this.verbService.getVerb(
                    conjugation.root["tag"]
                  )["gloss"];
                  var verb_value = verb_key_obj["keys"]
                    .map(function(key) {
                      // if the key exists in the conjugation provided, return the value
                      if (conjugation.root.hasOwnProperty(key)) {
                        return conjugation.root[key]; // else return the key
                      } else {
                        return key;
                      }
                    })
                    .join(verb_key_obj["seperator"]);
                  var verb_root_obj = {
                    position: conjugation["root"]["position"],
                    value: verb_value,
                    classes: ["root"].join(" "),
                    type: "root"
                  }; // Affixes

                  var affixes = [];
                  conjugation.affixes.forEach(function(morpheme) {
                    if (morpheme != null) {
                      morpheme["class"] = morpheme["type"];
                      morpheme["gloss"] = _this7.affixService.getAffix(
                        morpheme["tag"]
                      )["gloss"];
                      affixes.push(morpheme);
                    }
                  }); // Add non-null affix html to affixes_html_arr

                  var affixes_obj_arr = [];
                  affixes.forEach(function(affix) {
                    if (affix.value != null && affix.value !== "") {
                      var aff_value = aff_key_obj["keys"]
                        .map(function(key) {
                          // if the key exists in the conjugation provided, return the value
                          if (affix.hasOwnProperty(key)) {
                            return affix[key]; // else return the key
                          } else {
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
                  }); // Sort elements

                  var tier_arr = [pronoun_obj, verb_root_obj].concat(
                    affixes_obj_arr
                  );
                  tier_arr.sort(function(a, b) {
                    return a["position"] - b["position"];
                  });
                  return tier_arr;
                }
              }
            ]);

            return ConjugationService;
          })();

        ConjugationService.ɵfac = function ConjugationService_Factory(t) {
          return new (t || ConjugationService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _affix_affix_service__WEBPACK_IMPORTED_MODULE_6__["AffixService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _verb_verb_service__WEBPACK_IMPORTED_MODULE_8__["VerbService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_7__[
                "PronounService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
            )
          );
        };

        ConjugationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: ConjugationService,
          factory: ConjugationService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ConjugationService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                      "HttpClient"
                    ]
                },
                {
                  type:
                    _affix_affix_service__WEBPACK_IMPORTED_MODULE_6__[
                      "AffixService"
                    ]
                },
                {
                  type:
                    _verb_verb_service__WEBPACK_IMPORTED_MODULE_8__[
                      "VerbService"
                    ]
                },
                {
                  type:
                    _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_7__[
                      "PronounService"
                    ]
                },
                {
                  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/core.module.ts":
      /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

      /*! exports provided: TitleService, selectAuth, authLogin, authLogout, routeAnimations, LocalStorageService, selectIsAuthenticated, ROUTE_ANIMATIONS_ELEMENTS, AnimationsService, AuthGuardService, selectRouterState, NotificationService, selectEffectiveTheme, selectSettingsLanguage, selectSettingsStickyHeader, AffixService, ConjugationService, PronounService, VerbService, HttpLoaderFactory, CoreModule */

      /***/
      function srcAppCoreCoreModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "HttpLoaderFactory",
          function() {
            return HttpLoaderFactory;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "CoreModule", function() {
          return CoreModule;
        });
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngrx/router-store */
          "../../node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @ngrx/effects */
          "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"
        );
        /* harmony import */

        var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @ngrx/store-devtools */
          "../../node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );
        /* harmony import */

        var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @ngx-translate/http-loader */
          "../../node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js"
        );
        /* harmony import */

        var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @fortawesome/angular-fontawesome */
          "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"
        );
        /* harmony import */

        var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/sidenav */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js"
        );
        /* harmony import */

        var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/toolbar */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js"
        );
        /* harmony import */

        var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/material/list */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */

        var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/menu */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js"
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material/icon */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */

        var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @angular/material/select */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @angular/material/tooltip */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @angular/forms */
          "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! @angular/material/snack-bar */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _core_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./core.state */
          "./src/app/core/core.state.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectRouterState",
          function() {
            return _core_state__WEBPACK_IMPORTED_MODULE_20__[
              "selectRouterState"
            ];
          }
        );
        /* harmony import */

        var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./auth/auth.effects */
          "./src/app/core/auth/auth.effects.ts"
        );
        /* harmony import */

        var _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./auth/auth.selectors */
          "./src/app/core/auth/auth.selectors.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, "selectAuth", function() {
          return _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_22__[
            "selectAuth"
          ];
        });
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectIsAuthenticated",
          function() {
            return _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_22__[
              "selectIsAuthenticated"
            ];
          }
        );
        /* harmony import */

        var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./auth/auth.actions */
          "./src/app/core/auth/auth.actions.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, "authLogin", function() {
          return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_23__["authLogin"];
        });
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, "authLogout", function() {
          return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_23__["authLogout"];
        });
        /* harmony import */

        var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./auth/auth-guard.service */
          "./src/app/core/auth/auth-guard.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "AuthGuardService",
          function() {
            return _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__[
              "AuthGuardService"
            ];
          }
        );
        /* harmony import */

        var _title_title_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./title/title.service */
          "./src/app/core/title/title.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, "TitleService", function() {
          return _title_title_service__WEBPACK_IMPORTED_MODULE_25__[
            "TitleService"
          ];
        });
        /* harmony import */

        var _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./animations/route.animations */
          "./src/app/core/animations/route.animations.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "routeAnimations",
          function() {
            return _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__[
              "routeAnimations"
            ];
          }
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "ROUTE_ANIMATIONS_ELEMENTS",
          function() {
            return _animations_route_animations__WEBPACK_IMPORTED_MODULE_26__[
              "ROUTE_ANIMATIONS_ELEMENTS"
            ];
          }
        );
        /* harmony import */

        var _animations_animations_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./animations/animations.service */
          "./src/app/core/animations/animations.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "AnimationsService",
          function() {
            return _animations_animations_service__WEBPACK_IMPORTED_MODULE_27__[
              "AnimationsService"
            ];
          }
        );
        /* harmony import */

        var _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./error-handler/app-error-handler.service */
          "./src/app/core/error-handler/app-error-handler.service.ts"
        );
        /* harmony import */

        var _router_custom_serializer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./router/custom-serializer */
          "./src/app/core/router/custom-serializer.ts"
        );
        /* harmony import */

        var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./local-storage/local-storage.service */
          "./src/app/core/local-storage/local-storage.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "LocalStorageService",
          function() {
            return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_30__[
              "LocalStorageService"
            ];
          }
        );
        /* harmony import */

        var _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./http-interceptors/http-error.interceptor */
          "./src/app/core/http-interceptors/http-error.interceptor.ts"
        );
        /* harmony import */

        var _google_analytics_google_analytics_effects__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./google-analytics/google-analytics.effects */
          "./src/app/core/google-analytics/google-analytics.effects.ts"
        );
        /* harmony import */

        var _notifications_notification_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./notifications/notification.service */
          "./src/app/core/notifications/notification.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "NotificationService",
          function() {
            return _notifications_notification_service__WEBPACK_IMPORTED_MODULE_33__[
              "NotificationService"
            ];
          }
        );
        /* harmony import */

        var _settings_settings_effects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./settings/settings.effects */
          "./src/app/core/settings/settings.effects.ts"
        );
        /* harmony import */

        var _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./settings/settings.selectors */
          "./src/app/core/settings/settings.selectors.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectEffectiveTheme",
          function() {
            return _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__[
              "selectEffectiveTheme"
            ];
          }
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectSettingsLanguage",
          function() {
            return _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__[
              "selectSettingsLanguage"
            ];
          }
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectSettingsStickyHeader",
          function() {
            return _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_35__[
              "selectSettingsStickyHeader"
            ];
          }
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! @angular/material/button */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */

        var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! @fortawesome/free-solid-svg-icons */
          "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js"
        );
        /* harmony import */

        var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! @fortawesome/free-brands-svg-icons */
          "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js"
        );
        /* harmony import */

        var _affix_affix_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./affix/affix.service */
          "./src/app/core/affix/affix.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, "AffixService", function() {
          return _affix_affix_service__WEBPACK_IMPORTED_MODULE_39__[
            "AffixService"
          ];
        });
        /* harmony import */

        var _conjugation_conjugation_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./conjugation/conjugation.service */
          "./src/app/core/conjugation/conjugation.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "ConjugationService",
          function() {
            return _conjugation_conjugation_service__WEBPACK_IMPORTED_MODULE_40__[
              "ConjugationService"
            ];
          }
        );
        /* harmony import */

        var _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ./pronoun/pronoun.service */
          "./src/app/core/pronoun/pronoun.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(
          __webpack_exports__,
          "PronounService",
          function() {
            return _pronoun_pronoun_service__WEBPACK_IMPORTED_MODULE_41__[
              "PronounService"
            ];
          }
        );
        /* harmony import */

        var _verb_verb_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! ./verb/verb.service */
          "./src/app/core/verb/verb.service.ts"
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, "VerbService", function() {
          return _verb_verb_service__WEBPACK_IMPORTED_MODULE_42__[
            "VerbService"
          ];
        }); // import { ChartService } from './chart/chart.service';
        // import { TierService } from './tier/tier.service';

        function HttpLoaderFactory(http) {
          return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__[
            "TranslateHttpLoader"
          ](
            http,
            "".concat(
              _environments_environment__WEBPACK_IMPORTED_MODULE_19__[
                "environment"
              ].i18nPrefix,
              "/assets/i18n/"
            ),
            ".json"
          );
        }

        var CoreModule = function CoreModule(parentModule, faIconLibrary) {
          _classCallCheck(this, CoreModule);

          if (parentModule) {
            throw new Error(
              "CoreModule is already loaded. Import only in AppModule"
            );
          }

          faIconLibrary.addIcons(
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faCog"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faBars"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faRocket"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faPowerOff"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faUserCircle"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faPlayCircle"
            ],
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__[
              "faGithub"
            ],
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__[
              "faMediumM"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_37__[
              "faMusic"
            ],
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__[
              "faTwitter"
            ],
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__[
              "faInstagram"
            ],
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_38__[
              "faYoutube"
            ]
          );
        };

        CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: CoreModule
        });
        CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function CoreModule_Factory(t) {
            return new (t || CoreModule)(
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
                CoreModule,
                12
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                  "FaIconLibrary"
                ]
              )
            );
          },
          providers: [
            {
              provide:
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                  "HTTP_INTERCEPTORS"
                ],
              useClass:
                _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_31__[
                  "HttpErrorInterceptor"
                ],
              multi: true
            },
            {
              provide:
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
              useClass:
                _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_28__[
                  "AppErrorHandler"
                ]
            },
            {
              provide:
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__[
                  "RouterStateSerializer"
                ],
              useClass:
                _router_custom_serializer__WEBPACK_IMPORTED_MODULE_29__[
                  "CustomSerializer"
                ]
            }
          ],
          imports: [
            [
              // angular
              _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                "HttpClientModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], // material
              _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__[
                "MatSidenavModule"
              ],
              _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__[
                "MatToolbarModule"
              ],
              _angular_material_list__WEBPACK_IMPORTED_MODULE_12__[
                "MatListModule"
              ],
              _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__[
                "MatMenuModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__[
                "MatIconModule"
              ],
              _angular_material_select__WEBPACK_IMPORTED_MODULE_15__[
                "MatSelectModule"
              ],
              _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                "MatTooltipModule"
              ],
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                "MatSnackBarModule"
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_36__[
                "MatButtonModule"
              ], // ngrx
              _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(
                _core_state__WEBPACK_IMPORTED_MODULE_20__["reducers"],
                {
                  metaReducers:
                    _core_state__WEBPACK_IMPORTED_MODULE_20__["metaReducers"]
                }
              ),
              _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__[
                "StoreRouterConnectingModule"
              ].forRoot(),
              _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__[
                "EffectsModule"
              ].forRoot([
                _auth_auth_effects__WEBPACK_IMPORTED_MODULE_21__["AuthEffects"],
                _settings_settings_effects__WEBPACK_IMPORTED_MODULE_34__[
                  "SettingsEffects"
                ],
                _google_analytics_google_analytics_effects__WEBPACK_IMPORTED_MODULE_32__[
                  "GoogleAnalyticsEffects"
                ]
              ]),
              _environments_environment__WEBPACK_IMPORTED_MODULE_19__[
                "environment"
              ].production
                ? []
                : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__[
                    "StoreDevtoolsModule"
                  ].instrument({
                    name: "Angular NgRx Material Starter"
                  }), // 3rd party
              _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                "FontAwesomeModule"
              ],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                "TranslateModule"
              ].forRoot({
                loader: {
                  provide:
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                      "TranslateLoader"
                    ],
                  useFactory: HttpLoaderFactory,
                  deps: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                      "HttpClient"
                    ]
                  ]
                }
              })
            ], // angular
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], // material
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__[
              "MatSidenavModule"
            ],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__[
              "MatToolbarModule"
            ],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__[
              "MatListModule"
            ],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__[
              "MatMenuModule"
            ],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__[
              "MatIconModule"
            ],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__[
              "MatSelectModule"
            ],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
              "MatTooltipModule"
            ],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
              "MatSnackBarModule"
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_36__[
              "MatButtonModule"
            ], // 3rd party
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
              "FontAwesomeModule"
            ],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](
              CoreModule,
              {
                imports: [
                  // angular
                  _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                    "HttpClientModule"
                  ],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], // material
                  _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__[
                    "MatSidenavModule"
                  ],
                  _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__[
                    "MatToolbarModule"
                  ],
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_12__[
                    "MatListModule"
                  ],
                  _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__[
                    "MatMenuModule"
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__[
                    "MatIconModule"
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_15__[
                    "MatSelectModule"
                  ],
                  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                    "MatTooltipModule"
                  ],
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                    "MatSnackBarModule"
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_36__[
                    "MatButtonModule"
                  ],
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"],
                  _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__[
                    "StoreRouterConnectingModule"
                  ],
                  _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__[
                    "EffectsRootModule"
                  ],
                  _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__[
                    "StoreDevtoolsModule"
                  ], // 3rd party
                  _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                    "FontAwesomeModule"
                  ],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                    "TranslateModule"
                  ]
                ],
                exports: [
                  // angular
                  _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], // material
                  _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__[
                    "MatSidenavModule"
                  ],
                  _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__[
                    "MatToolbarModule"
                  ],
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_12__[
                    "MatListModule"
                  ],
                  _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__[
                    "MatMenuModule"
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__[
                    "MatIconModule"
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_15__[
                    "MatSelectModule"
                  ],
                  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                    "MatTooltipModule"
                  ],
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                    "MatSnackBarModule"
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_36__[
                    "MatButtonModule"
                  ], // 3rd party
                  _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                    "FontAwesomeModule"
                  ],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                    "TranslateModule"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            CoreModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    imports: [
                      // angular
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                        "CommonModule"
                      ],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                        "HttpClientModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_17__[
                        "FormsModule"
                      ], // material
                      _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__[
                        "MatSidenavModule"
                      ],
                      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__[
                        "MatToolbarModule"
                      ],
                      _angular_material_list__WEBPACK_IMPORTED_MODULE_12__[
                        "MatListModule"
                      ],
                      _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__[
                        "MatMenuModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__[
                        "MatIconModule"
                      ],
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_15__[
                        "MatSelectModule"
                      ],
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                        "MatTooltipModule"
                      ],
                      _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                        "MatSnackBarModule"
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_36__[
                        "MatButtonModule"
                      ], // ngrx
                      _ngrx_store__WEBPACK_IMPORTED_MODULE_4__[
                        "StoreModule"
                      ].forRoot(
                        _core_state__WEBPACK_IMPORTED_MODULE_20__["reducers"],
                        {
                          metaReducers:
                            _core_state__WEBPACK_IMPORTED_MODULE_20__[
                              "metaReducers"
                            ]
                        }
                      ),
                      _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__[
                        "StoreRouterConnectingModule"
                      ].forRoot(),
                      _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__[
                        "EffectsModule"
                      ].forRoot([
                        _auth_auth_effects__WEBPACK_IMPORTED_MODULE_21__[
                          "AuthEffects"
                        ],
                        _settings_settings_effects__WEBPACK_IMPORTED_MODULE_34__[
                          "SettingsEffects"
                        ],
                        _google_analytics_google_analytics_effects__WEBPACK_IMPORTED_MODULE_32__[
                          "GoogleAnalyticsEffects"
                        ]
                      ]),
                      _environments_environment__WEBPACK_IMPORTED_MODULE_19__[
                        "environment"
                      ].production
                        ? []
                        : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__[
                            "StoreDevtoolsModule"
                          ].instrument({
                            name: "Angular NgRx Material Starter"
                          }), // 3rd party
                      _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                        "FontAwesomeModule"
                      ],
                      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                        "TranslateModule"
                      ].forRoot({
                        loader: {
                          provide:
                            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                              "TranslateLoader"
                            ],
                          useFactory: HttpLoaderFactory,
                          deps: [
                            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                              "HttpClient"
                            ]
                          ]
                        }
                      })
                    ],
                    declarations: [],
                    providers: [
                      {
                        provide:
                          _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                            "HTTP_INTERCEPTORS"
                          ],
                        useClass:
                          _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_31__[
                            "HttpErrorInterceptor"
                          ],
                        multi: true
                      },
                      {
                        provide:
                          _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                            "ErrorHandler"
                          ],
                        useClass:
                          _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_28__[
                            "AppErrorHandler"
                          ]
                      },
                      {
                        provide:
                          _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__[
                            "RouterStateSerializer"
                          ],
                        useClass:
                          _router_custom_serializer__WEBPACK_IMPORTED_MODULE_29__[
                            "CustomSerializer"
                          ]
                      }
                    ],
                    exports: [
                      // angular
                      _angular_forms__WEBPACK_IMPORTED_MODULE_17__[
                        "FormsModule"
                      ], // material
                      _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__[
                        "MatSidenavModule"
                      ],
                      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__[
                        "MatToolbarModule"
                      ],
                      _angular_material_list__WEBPACK_IMPORTED_MODULE_12__[
                        "MatListModule"
                      ],
                      _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__[
                        "MatMenuModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__[
                        "MatIconModule"
                      ],
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_15__[
                        "MatSelectModule"
                      ],
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                        "MatTooltipModule"
                      ],
                      _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__[
                        "MatSnackBarModule"
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_36__[
                        "MatButtonModule"
                      ], // 3rd party
                      _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                        "FontAwesomeModule"
                      ],
                      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__[
                        "TranslateModule"
                      ]
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: CoreModule,
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
                    },
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
                    }
                  ]
                },
                {
                  type:
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__[
                      "FaIconLibrary"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/core.state.ts":
      /*!************************************!*\
    !*** ./src/app/core/core.state.ts ***!
    \************************************/

      /*! exports provided: reducers, metaReducers, selectAuthState, selectSettingsState, selectRouterState */

      /***/
      function srcAppCoreCoreStateTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "reducers", function() {
          return reducers;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "metaReducers", function() {
          return metaReducers;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectAuthState",
          function() {
            return selectAuthState;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectSettingsState",
          function() {
            return selectSettingsState;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectRouterState",
          function() {
            return selectRouterState;
          }
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngrx/router-store */
          "../../node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./meta-reducers/init-state-from-local-storage.reducer */
          "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts"
        );
        /* harmony import */

        var _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./meta-reducers/debug.reducer */
          "./src/app/core/meta-reducers/debug.reducer.ts"
        );
        /* harmony import */

        var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./auth/auth.reducer */
          "./src/app/core/auth/auth.reducer.ts"
        );
        /* harmony import */

        var _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./settings/settings.reducer */
          "./src/app/core/settings/settings.reducer.ts"
        );

        var reducers = {
          auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"],
          settings:
            _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__[
              "settingsReducer"
            ],
          router:
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
        };
        var metaReducers = [
          _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_3__[
            "initStateFromLocalStorage"
          ]
        ];

        if (
          !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]
            .production
        ) {
          if (
            !_environments_environment__WEBPACK_IMPORTED_MODULE_2__[
              "environment"
            ].test
          ) {
            metaReducers.unshift(
              _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_4__["debug"]
            );
          }
        }

        var selectAuthState = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"]
        )("auth");
        var selectSettingsState = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"]
        )("settings");
        var selectRouterState = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"]
        )("router");
        /***/
      },

    /***/
    "./src/app/core/error-handler/app-error-handler.service.ts":
      /*!*****************************************************************!*\
    !*** ./src/app/core/error-handler/app-error-handler.service.ts ***!
    \*****************************************************************/

      /*! exports provided: AppErrorHandler */

      /***/
      function srcAppCoreErrorHandlerAppErrorHandlerServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AppErrorHandler",
          function() {
            return AppErrorHandler;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _notifications_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../notifications/notification.service */
          "./src/app/core/notifications/notification.service.ts"
        );
        /** Application-wide error handler that adds a UI notification to the error handling
         * provided by the default Angular ErrorHandler.
         */

        var AppErrorHandler =
          /*#__PURE__*/
          (function(_angular_core__WEBPAC) {
            _inherits(AppErrorHandler, _angular_core__WEBPAC);

            var _super = _createSuper(AppErrorHandler);

            function AppErrorHandler(notificationsService) {
              var _this8;

              _classCallCheck(this, AppErrorHandler);

              _this8 = _super.call(this);
              _this8.notificationsService = notificationsService;
              return _this8;
            }

            _createClass(AppErrorHandler, [
              {
                key: "handleError",
                value: function handleError(error) {
                  var displayMessage = "An error occurred.";

                  if (
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_1__[
                      "environment"
                    ].production
                  ) {
                    displayMessage += " See console for details.";
                  }

                  this.notificationsService.error(displayMessage);

                  _get(
                    _getPrototypeOf(AppErrorHandler.prototype),
                    "handleError",
                    this
                  ).call(this, error);
                }
              }
            ]);

            return AppErrorHandler;
          })(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]);

        AppErrorHandler.ɵfac = function AppErrorHandler_Factory(t) {
          return new (t || AppErrorHandler)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _notifications_notification_service__WEBPACK_IMPORTED_MODULE_2__[
                "NotificationService"
              ]
            )
          );
        };

        AppErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AppErrorHandler,
          factory: AppErrorHandler.ɵfac
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppErrorHandler,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
              }
            ],
            function() {
              return [
                {
                  type:
                    _notifications_notification_service__WEBPACK_IMPORTED_MODULE_2__[
                      "NotificationService"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/google-analytics/google-analytics.effects.ts":
      /*!*******************************************************************!*\
    !*** ./src/app/core/google-analytics/google-analytics.effects.ts ***!
    \*******************************************************************/

      /*! exports provided: GoogleAnalyticsEffects */

      /***/
      function srcAppCoreGoogleAnalyticsGoogleAnalyticsEffectsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "GoogleAnalyticsEffects",
          function() {
            return GoogleAnalyticsEffects;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngrx/effects */
          "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );

        var GoogleAnalyticsEffects = function GoogleAnalyticsEffects(router) {
          var _this9 = this;

          _classCallCheck(this, GoogleAnalyticsEffects);

          this.router = router;
          this.pageView = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"]
          )(
            function() {
              return function() {
                return _this9.router.events.pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
                    function(event) {
                      return (
                        event instanceof
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                          "NavigationEnd"
                        ]
                      );
                    }
                  ),
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
                    function(event) {
                      window.ga("set", "page", event.urlAfterRedirects);
                      window.ga("send", "pageview");
                    }
                  )
                );
              };
            },
            {
              dispatch: false
            }
          );
        };

        GoogleAnalyticsEffects.ɵfac = function GoogleAnalyticsEffects_Factory(
          t
        ) {
          return new (t || GoogleAnalyticsEffects)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };

        GoogleAnalyticsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: GoogleAnalyticsEffects,
          factory: GoogleAnalyticsEffects.ɵfac
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            GoogleAnalyticsEffects,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
              }
            ],
            function() {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/http-interceptors/http-error.interceptor.ts":
      /*!******************************************************************!*\
    !*** ./src/app/core/http-interceptors/http-error.interceptor.ts ***!
    \******************************************************************/

      /*! exports provided: HttpErrorInterceptor */

      /***/
      function srcAppCoreHttpInterceptorsHttpErrorInterceptorTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "HttpErrorInterceptor",
          function() {
            return HttpErrorInterceptor;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /** Passes HttpErrorResponse to application-wide error handler */

        var HttpErrorInterceptor =
          /*#__PURE__*/
          (function() {
            function HttpErrorInterceptor(injector) {
              _classCallCheck(this, HttpErrorInterceptor);

              this.injector = injector;
            }

            _createClass(HttpErrorInterceptor, [
              {
                key: "intercept",
                value: function intercept(request, next) {
                  var _this10 = this;

                  return next.handle(request).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
                      error: function error(err) {
                        if (
                          err instanceof
                          _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                            "HttpErrorResponse"
                          ]
                        ) {
                          var appErrorHandler = _this10.injector.get(
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                              "ErrorHandler"
                            ]
                          );

                          appErrorHandler.handleError(err);
                        }
                      }
                    })
                  );
                }
              }
            ]);

            return HttpErrorInterceptor;
          })();

        HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) {
          return new (t || HttpErrorInterceptor)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
            )
          );
        };

        HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: HttpErrorInterceptor,
          factory: HttpErrorInterceptor.ɵfac
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HttpErrorInterceptor,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
              }
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/local-storage/local-storage.service.ts":
      /*!*************************************************************!*\
    !*** ./src/app/core/local-storage/local-storage.service.ts ***!
    \*************************************************************/

      /*! exports provided: LocalStorageService */

      /***/
      function srcAppCoreLocalStorageLocalStorageServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "LocalStorageService",
          function() {
            return LocalStorageService;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var APP_PREFIX = "ww-";

        var LocalStorageService =
          /*#__PURE__*/
          (function() {
            function LocalStorageService() {
              _classCallCheck(this, LocalStorageService);
            }

            _createClass(
              LocalStorageService,
              [
                {
                  key: "setItem",
                  value: function setItem(key, value) {
                    localStorage.setItem(
                      "".concat(APP_PREFIX).concat(key),
                      JSON.stringify(value)
                    );
                  }
                },
                {
                  key: "getItem",
                  value: function getItem(key) {
                    return JSON.parse(
                      localStorage.getItem("".concat(APP_PREFIX).concat(key))
                    );
                  }
                },
                {
                  key: "removeItem",
                  value: function removeItem(key) {
                    localStorage.removeItem("".concat(APP_PREFIX).concat(key));
                  }
                  /** Tests that localStorage exists, can be written to, and read from. */
                },
                {
                  key: "testLocalStorage",
                  value: function testLocalStorage() {
                    var testValue = "testValue";
                    var testKey = "testKey";
                    var retrievedValue;
                    var errorMessage =
                      "localStorage did not return expected value";
                    this.setItem(testKey, testValue);
                    retrievedValue = this.getItem(testKey);
                    this.removeItem(testKey);

                    if (retrievedValue !== testValue) {
                      throw new Error(errorMessage);
                    }
                  }
                }
              ],
              [
                {
                  key: "loadInitialState",
                  value: function loadInitialState() {
                    return Object.keys(localStorage).reduce(function(
                      state,
                      storageKey
                    ) {
                      if (storageKey.includes(APP_PREFIX)) {
                        var stateKeys = storageKey
                          .replace(APP_PREFIX, "")
                          .toLowerCase()
                          .split(".")
                          .map(function(key) {
                            return key
                              .split("-")
                              .map(function(token, index) {
                                return index === 0
                                  ? token
                                  : token.charAt(0).toUpperCase() +
                                      token.slice(1);
                              })
                              .join("");
                          });
                        var currentStateRef = state;
                        stateKeys.forEach(function(key, index) {
                          if (index === stateKeys.length - 1) {
                            currentStateRef[key] = JSON.parse(
                              localStorage.getItem(storageKey)
                            );
                            return;
                          }

                          currentStateRef[key] = currentStateRef[key] || {};
                          currentStateRef = currentStateRef[key];
                        });
                      }

                      return state;
                    },
                    {});
                  }
                }
              ]
            );

            return LocalStorageService;
          })();

        LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
          return new (t || LocalStorageService)();
        };

        LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: LocalStorageService,
          factory: LocalStorageService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LocalStorageService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/meta-reducers/debug.reducer.ts":
      /*!*****************************************************!*\
    !*** ./src/app/core/meta-reducers/debug.reducer.ts ***!
    \*****************************************************/

      /*! exports provided: debug */

      /***/
      function srcAppCoreMetaReducersDebugReducerTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "debug", function() {
          return debug;
        });

        function debug(reducer) {
          return function(state, action) {
            var newState = reducer(state, action);
            console.log("[DEBUG] action: ".concat(action.type), {
              payload: action.payload,
              oldState: state,
              newState: newState
            });
            return newState;
          };
        }
        /***/
      },

    /***/
    "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
      /*!*****************************************************************************!*\
    !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
    \*****************************************************************************/

      /*! exports provided: initStateFromLocalStorage */

      /***/
      function srcAppCoreMetaReducersInitStateFromLocalStorageReducerTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "initStateFromLocalStorage",
          function() {
            return initStateFromLocalStorage;
          }
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../local-storage/local-storage.service */
          "./src/app/core/local-storage/local-storage.service.ts"
        );

        function initStateFromLocalStorage(reducer) {
          return function(state, action) {
            var newState = reducer(state, action);

            if (
              [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()
              ].includes(action.type)
            ) {
              return Object.assign(
                Object.assign({}, newState),
                _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__[
                  "LocalStorageService"
                ].loadInitialState()
              );
            }

            return newState;
          };
        }
        /***/
      },

    /***/
    "./src/app/core/notifications/notification.service.ts":
      /*!************************************************************!*\
    !*** ./src/app/core/notifications/notification.service.ts ***!
    \************************************************************/

      /*! exports provided: NotificationService */

      /***/
      function srcAppCoreNotificationsNotificationServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "NotificationService",
          function() {
            return NotificationService;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/snack-bar */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
        );

        var NotificationService =
          /*#__PURE__*/
          (function() {
            function NotificationService(snackBar, zone) {
              _classCallCheck(this, NotificationService);

              this.snackBar = snackBar;
              this.zone = zone;
            }

            _createClass(NotificationService, [
              {
                key: "default",
                value: function _default(message) {
                  this.show(message, {
                    duration: 2000,
                    panelClass: "default-notification-overlay"
                  });
                }
              },
              {
                key: "info",
                value: function info(message) {
                  this.show(message, {
                    duration: 2000,
                    panelClass: "info-notification-overlay"
                  });
                }
              },
              {
                key: "success",
                value: function success(message) {
                  this.show(message, {
                    duration: 2000,
                    panelClass: "success-notification-overlay"
                  });
                }
              },
              {
                key: "warn",
                value: function warn(message) {
                  this.show(message, {
                    duration: 2500,
                    panelClass: "warning-notification-overlay"
                  });
                }
              },
              {
                key: "error",
                value: function error(message) {
                  this.show(message, {
                    duration: 3000,
                    panelClass: "error-notification-overlay"
                  });
                }
              },
              {
                key: "show",
                value: function show(message, configuration) {
                  var _this11 = this;

                  // Need to open snackBar from Angular zone to prevent issues with its position per
                  // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
                  this.zone.run(function() {
                    return _this11.snackBar.open(message, null, configuration);
                  });
                }
              }
            ]);

            return NotificationService;
          })();

        NotificationService.ɵfac = function NotificationService_Factory(t) {
          return new (t || NotificationService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__[
                "MatSnackBar"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
            )
          );
        };

        NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: NotificationService,
          factory: NotificationService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            NotificationService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__[
                      "MatSnackBar"
                    ]
                },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/pronoun/pronoun.service.ts":
      /*!*************************************************!*\
    !*** ./src/app/core/pronoun/pronoun.service.ts ***!
    \*************************************************/

      /*! exports provided: PronounService */

      /***/
      function srcAppCorePronounPronounServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "PronounService",
          function() {
            return PronounService;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );

        var PronounService =
          /*#__PURE__*/
          (function() {
            function PronounService(http) {
              var _this12 = this;

              _classCallCheck(this, PronounService);

              this.http = http;
              this.path =
                _environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                  "environment"
                ].base +
                _environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                  "environment"
                ].prefix +
                "pronouns";
              this.pronouns$ = this.http.get(this.path);
              this.random$ = this.pronouns$.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                  function(res) {
                    return _this12.getRandomPro(res);
                  }
                )
              );
              this.pronouns$.subscribe(function(pns) {
                return (_this12.pronouns = pns);
              });
            }

            _createClass(PronounService, [
              {
                key: "getPronoun",
                value: function getPronoun(tag) {
                  return this.pronouns.filter(function(p) {
                    return p.tag === tag;
                  })[0];
                }
              },
              {
                key: "getRandomPro",
                value: function getRandomPro(options) {
                  return options[Math.floor(Math.random() * options.length)];
                }
              }
            ]);

            return PronounService;
          })();

        PronounService.ɵfac = function PronounService_Factory(t) {
          return new (t || PronounService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };

        PronounService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: PronounService,
          factory: PronounService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            PronounService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                      "HttpClient"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/router/custom-serializer.ts":
      /*!**************************************************!*\
    !*** ./src/app/core/router/custom-serializer.ts ***!
    \**************************************************/

      /*! exports provided: CustomSerializer */

      /***/
      function srcAppCoreRouterCustomSerializerTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CustomSerializer",
          function() {
            return CustomSerializer;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var CustomSerializer =
          /*#__PURE__*/
          (function() {
            function CustomSerializer() {
              _classCallCheck(this, CustomSerializer);
            }

            _createClass(CustomSerializer, [
              {
                key: "serialize",
                value: function serialize(routerState) {
                  var route = routerState.root;

                  while (route.firstChild) {
                    route = route.firstChild;
                  }

                  var url = routerState.url,
                    queryParams = routerState.root.queryParams;
                  var _route = route,
                    params = _route.params;
                  return {
                    url: url,
                    params: params,
                    queryParams: queryParams
                  };
                }
              }
            ]);

            return CustomSerializer;
          })();

        CustomSerializer.ɵfac = function CustomSerializer_Factory(t) {
          return new (t || CustomSerializer)();
        };

        CustomSerializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: CustomSerializer,
          factory: CustomSerializer.ɵfac
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CustomSerializer,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/settings/settings.actions.ts":
      /*!***************************************************!*\
    !*** ./src/app/core/settings/settings.actions.ts ***!
    \***************************************************/

      /*! exports provided: actionSettingsChangeLanguage, actionSettingsChangeGlossLevel, actionSettingsChangeBreakdownLevel, actionSettingsChangeBreakdownTranslationLevel, actionSettingsChangeTranslationLevel, actionSettingsChangeRootHighlight, actionSettingsChangePronounHighlight, actionSettingsChangeAspectHighlight, actionSettingsChangePrepronominalPrefixHighlight, actionSettingsChangeTmpAffixHighlight, actionSettingsChangePostAspectualSuffixHighlight, actionSettingsChangeTestApi, actionSettingsChangeTheme, actionSettingsChangeAutoNightMode, actionSettingsChangeStickyHeader, actionSettingsChangeAnimationsPage, actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeAnimationsElements, actionSettingsChangeHour */

      /***/
      function srcAppCoreSettingsSettingsActionsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeLanguage",
          function() {
            return actionSettingsChangeLanguage;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeGlossLevel",
          function() {
            return actionSettingsChangeGlossLevel;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeBreakdownLevel",
          function() {
            return actionSettingsChangeBreakdownLevel;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeBreakdownTranslationLevel",
          function() {
            return actionSettingsChangeBreakdownTranslationLevel;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeTranslationLevel",
          function() {
            return actionSettingsChangeTranslationLevel;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeRootHighlight",
          function() {
            return actionSettingsChangeRootHighlight;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangePronounHighlight",
          function() {
            return actionSettingsChangePronounHighlight;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeAspectHighlight",
          function() {
            return actionSettingsChangeAspectHighlight;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangePrepronominalPrefixHighlight",
          function() {
            return actionSettingsChangePrepronominalPrefixHighlight;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeTmpAffixHighlight",
          function() {
            return actionSettingsChangeTmpAffixHighlight;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangePostAspectualSuffixHighlight",
          function() {
            return actionSettingsChangePostAspectualSuffixHighlight;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeTestApi",
          function() {
            return actionSettingsChangeTestApi;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeTheme",
          function() {
            return actionSettingsChangeTheme;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeAutoNightMode",
          function() {
            return actionSettingsChangeAutoNightMode;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeStickyHeader",
          function() {
            return actionSettingsChangeStickyHeader;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeAnimationsPage",
          function() {
            return actionSettingsChangeAnimationsPage;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeAnimationsPageDisabled",
          function() {
            return actionSettingsChangeAnimationsPageDisabled;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeAnimationsElements",
          function() {
            return actionSettingsChangeAnimationsElements;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "actionSettingsChangeHour",
          function() {
            return actionSettingsChangeHour;
          }
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );

        var actionSettingsChangeLanguage = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Language",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeGlossLevel = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Gloss Level",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeBreakdownLevel = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Breakdown Level",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeBreakdownTranslationLevel = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Breakdown Translation Level",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeTranslationLevel = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Translation Level",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeRootHighlight = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Root Highlight",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangePronounHighlight = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Pronoun Highlight",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeAspectHighlight = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Aspect Highlight",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangePrepronominalPrefixHighlight = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change PrepronominalPrefix Highlight",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeTmpAffixHighlight = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change TmpAffix Highlight",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangePostAspectualSuffixHighlight = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change postAspectualSuffix Highlight",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeTestApi = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change TestApi",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeTheme = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Theme",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeAutoNightMode = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Auto Night Mode",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeStickyHeader = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Sticky Header",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeAnimationsPage = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Animations Page",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeAnimationsPageDisabled = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Animations Page Disabled",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeAnimationsElements = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Animations Elements",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        var actionSettingsChangeHour = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"]
        )(
          "[Settings] Change Hours",
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()
        );
        /***/
      },

    /***/
    "./src/app/core/settings/settings.effects.ts":
      /*!***************************************************!*\
    !*** ./src/app/core/settings/settings.effects.ts ***!
    \***************************************************/

      /*! exports provided: SETTINGS_KEY, SettingsEffects */

      /***/
      function srcAppCoreSettingsSettingsEffectsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() {
          return SETTINGS_KEY;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SettingsEffects",
          function() {
            return SettingsEffects;
          }
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/cdk/overlay */
          "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngrx/effects */
          "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! rxjs */
          "../../node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _core_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../core.state */
          "./src/app/core/core.state.ts"
        );
        /* harmony import */

        var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../local-storage/local-storage.service */
          "./src/app/core/local-storage/local-storage.service.ts"
        );
        /* harmony import */

        var _animations_animations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../animations/animations.service */
          "./src/app/core/animations/animations.service.ts"
        );
        /* harmony import */

        var _title_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../title/title.service */
          "./src/app/core/title/title.service.ts"
        );
        /* harmony import */

        var _settings_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./settings.actions */
          "./src/app/core/settings/settings.actions.ts"
        );
        /* harmony import */

        var _settings_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./settings.selectors */
          "./src/app/core/settings/settings.selectors.ts"
        );

        var SETTINGS_KEY = "SETTINGS";
        var INIT = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(
          "ww-init-effect-trigger"
        );

        var SettingsEffects = function SettingsEffects(
          actions$,
          store,
          router,
          overlayContainer,
          localStorageService,
          titleService,
          animationsService,
          translateService
        ) {
          var _this13 = this;

          _classCallCheck(this, SettingsEffects);

          this.actions$ = actions$;
          this.store = store;
          this.router = router;
          this.overlayContainer = overlayContainer;
          this.localStorageService = localStorageService;
          this.titleService = titleService;
          this.animationsService = animationsService;
          this.translateService = translateService;
          this.changeHour = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"]
          )(function() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(
              60000
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mapTo"])(
                new Date().getHours()
              ),
              Object(
                rxjs_operators__WEBPACK_IMPORTED_MODULE_7__[
                  "distinctUntilChanged"
                ]
              )(),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(
                function(hour) {
                  return Object(
                    _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                      "actionSettingsChangeHour"
                    ]
                  )({
                    hour: hour
                  });
                }
              )
            );
          });
          this.persistSettings = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"]
          )(
            function() {
              return _this13.actions$.pipe(
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeAnimationsElements"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeAnimationsPage"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeAnimationsPageDisabled"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeAutoNightMode"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeLanguage"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeStickyHeader"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeTestApi"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeGlossLevel"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeBreakdownLevel"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeBreakdownTranslationLevel"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeTranslationLevel"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeAspectHighlight"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangePostAspectualSuffixHighlight"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangePrepronominalPrefixHighlight"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangePronounHighlight"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeRootHighlight"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeTmpAffixHighlight"
                  ],
                  _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                    "actionSettingsChangeTheme"
                  ]
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"]
                )(
                  _this13.store.pipe(
                    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(
                      _core_state__WEBPACK_IMPORTED_MODULE_8__[
                        "selectSettingsState"
                      ]
                    )
                  )
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
                  function(_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                      action = _ref3[0],
                      settings = _ref3[1];

                    return _this13.localStorageService.setItem(
                      SETTINGS_KEY,
                      settings
                    );
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
          this.updateRouteAnimationType = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"]
          )(
            function() {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(
                INIT,
                _this13.actions$.pipe(
                  Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(
                    _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                      "actionSettingsChangeAnimationsElements"
                    ],
                    _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                      "actionSettingsChangeAnimationsPage"
                    ]
                  )
                )
              ).pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"]
                )(
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
                    _this13.store.pipe(
                      Object(
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"]
                      )(
                        _settings_selectors__WEBPACK_IMPORTED_MODULE_13__[
                          "selectPageAnimations"
                        ]
                      )
                    ),
                    _this13.store.pipe(
                      Object(
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"]
                      )(
                        _settings_selectors__WEBPACK_IMPORTED_MODULE_13__[
                          "selectElementsAnimations"
                        ]
                      )
                    )
                  ])
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
                  function(_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2),
                      action = _ref5[0],
                      _ref5$ = _slicedToArray(_ref5[1], 2),
                      pageAnimations = _ref5$[0],
                      elementsAnimations = _ref5$[1];

                    return _this13.animationsService.updateRouteAnimationType(
                      pageAnimations,
                      elementsAnimations
                    );
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
          this.updateTheme = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"]
          )(
            function() {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(
                INIT,
                _this13.actions$.pipe(
                  Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(
                    _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                      "actionSettingsChangeTheme"
                    ]
                  )
                )
              ).pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"]
                )(
                  _this13.store.pipe(
                    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(
                      _settings_selectors__WEBPACK_IMPORTED_MODULE_13__[
                        "selectEffectiveTheme"
                      ]
                    )
                  )
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
                  function(_ref6) {
                    var _ref7 = _slicedToArray(_ref6, 2),
                      action = _ref7[0],
                      effectiveTheme = _ref7[1];

                    var classList = _this13.overlayContainer.getContainerElement()
                      .classList;

                    var toRemove = Array.from(classList).filter(function(item) {
                      return item.includes("-theme");
                    });

                    if (toRemove.length) {
                      classList.remove.apply(
                        classList,
                        _toConsumableArray(toRemove)
                      );
                    }

                    classList.add(effectiveTheme);
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
          this.setTranslateServiceLanguage = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"]
          )(
            function() {
              return _this13.store.pipe(
                Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(
                  _settings_selectors__WEBPACK_IMPORTED_MODULE_13__[
                    "selectSettingsLanguage"
                  ]
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_7__[
                    "distinctUntilChanged"
                  ]
                )(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
                  function(language) {
                    return _this13.translateService.use(language);
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
          this.setTitle = Object(
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"]
          )(
            function() {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(
                _this13.actions$.pipe(
                  Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(
                    _settings_actions__WEBPACK_IMPORTED_MODULE_12__[
                      "actionSettingsChangeLanguage"
                    ]
                  )
                ),
                _this13.router.events.pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
                    function(event) {
                      return (
                        event instanceof
                        _angular_router__WEBPACK_IMPORTED_MODULE_0__[
                          "ActivationEnd"
                        ]
                      );
                    }
                  )
                )
              ).pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
                  function() {
                    _this13.titleService.setTitle(
                      _this13.router.routerState.snapshot.root,
                      _this13.translateService
                    );
                  }
                )
              );
            },
            {
              dispatch: false
            }
          );
        };

        SettingsEffects.ɵfac = function SettingsEffects_Factory(t) {
          return new (t || SettingsEffects)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__[
                "OverlayContainer"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__[
                "LocalStorageService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _title_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _animations_animations_service__WEBPACK_IMPORTED_MODULE_10__[
                "AnimationsService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__[
                "TranslateService"
              ]
            )
          );
        };

        SettingsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjectable"
        ]({
          token: SettingsEffects,
          factory: SettingsEffects.ɵfac
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            SettingsEffects,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
              }
            ],
            function() {
              return [
                {
                  type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
                },
                {
                  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
                },
                {
                  type:
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__[
                      "OverlayContainer"
                    ]
                },
                {
                  type:
                    _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__[
                      "LocalStorageService"
                    ]
                },
                {
                  type:
                    _title_title_service__WEBPACK_IMPORTED_MODULE_11__[
                      "TitleService"
                    ]
                },
                {
                  type:
                    _animations_animations_service__WEBPACK_IMPORTED_MODULE_10__[
                      "AnimationsService"
                    ]
                },
                {
                  type:
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__[
                      "TranslateService"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/settings/settings.model.ts":
      /*!*************************************************!*\
    !*** ./src/app/core/settings/settings.model.ts ***!
    \*************************************************/

      /*! exports provided: NIGHT_MODE_THEME */

      /***/
      function srcAppCoreSettingsSettingsModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "NIGHT_MODE_THEME",
          function() {
            return NIGHT_MODE_THEME;
          }
        );

        var NIGHT_MODE_THEME = "BLACK-THEME";
        /***/
      },

    /***/
    "./src/app/core/settings/settings.reducer.ts":
      /*!***************************************************!*\
    !*** ./src/app/core/settings/settings.reducer.ts ***!
    \***************************************************/

      /*! exports provided: initialState, settingsReducer */

      /***/
      function srcAppCoreSettingsSettingsReducerTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "initialState", function() {
          return initialState;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "settingsReducer",
          function() {
            return settingsReducer;
          }
        );
        /* harmony import */

        var _settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./settings.model */
          "./src/app/core/settings/settings.model.ts"
        );
        /* harmony import */

        var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./settings.actions */
          "./src/app/core/settings/settings.actions.ts"
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );

        var initialState = {
          language: "en",
          theme: "DEFAULT-THEME",
          autoNightMode: false,
          nightTheme:
            _settings_model__WEBPACK_IMPORTED_MODULE_0__["NIGHT_MODE_THEME"],
          stickyHeader: true,
          pageAnimations: true,
          pageAnimationsDisabled: false,
          elementsAnimations: true,
          testApi: false,
          glossLevel: false,
          breakdownLevel: false,
          translationBreakdownLevel: false,
          translationLevel: true,
          rootHighlight: false,
          pronounHighlight: true,
          aspectHighlight: false,
          postAspectualSuffix: false,
          prepronominalPrefix: false,
          tmpAffix: false,
          hour: 0
        };
        var reducer = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"]
        )(
          initialState,
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeLanguage"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeTheme"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeAutoNightMode"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeTestApi"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeStickyHeader"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeAnimationsPage"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeAnimationsElements"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeHour"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeGlossLevel"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeBreakdownLevel"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeBreakdownTranslationLevel"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeTranslationLevel"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeAspectHighlight"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangePostAspectualSuffixHighlight"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangePrepronominalPrefixHighlight"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangePronounHighlight"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeRootHighlight"
            ],
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeTmpAffixHighlight"
            ],
            function(state, action) {
              return Object.assign(Object.assign({}, state), action);
            }
          ),
          Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(
            _settings_actions__WEBPACK_IMPORTED_MODULE_1__[
              "actionSettingsChangeAnimationsPageDisabled"
            ],
            function(state, _ref8) {
              var pageAnimationsDisabled = _ref8.pageAnimationsDisabled;
              return Object.assign(Object.assign({}, state), {
                pageAnimationsDisabled: pageAnimationsDisabled,
                pageAnimations: false
              });
            }
          )
        );

        function settingsReducer(state, action) {
          return reducer(state, action);
        }
        /***/
      },

    /***/
    "./src/app/core/settings/settings.selectors.ts":
      /*!*****************************************************!*\
    !*** ./src/app/core/settings/settings.selectors.ts ***!
    \*****************************************************/

      /*! exports provided: selectSettings, selectSettingsStickyHeader, selectSettingsLanguage, selectTheme, selectPageAnimations, selectElementsAnimations, selectAutoNightMode, selectTestApi, selectNightTheme, selectHour, selectIsNightHour, selectEffectiveTheme */

      /***/
      function srcAppCoreSettingsSettingsSelectorsTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectSettings",
          function() {
            return selectSettings;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectSettingsStickyHeader",
          function() {
            return selectSettingsStickyHeader;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectSettingsLanguage",
          function() {
            return selectSettingsLanguage;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "selectTheme", function() {
          return selectTheme;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectPageAnimations",
          function() {
            return selectPageAnimations;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectElementsAnimations",
          function() {
            return selectElementsAnimations;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectAutoNightMode",
          function() {
            return selectAutoNightMode;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "selectTestApi", function() {
          return selectTestApi;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectNightTheme",
          function() {
            return selectNightTheme;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "selectHour", function() {
          return selectHour;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectIsNightHour",
          function() {
            return selectIsNightHour;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "selectEffectiveTheme",
          function() {
            return selectEffectiveTheme;
          }
        );
        /* harmony import */

        var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @ngrx/store */
          "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */

        var _core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core.state */
          "./src/app/core/core.state.ts"
        );

        var selectSettings = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(
          _core_state__WEBPACK_IMPORTED_MODULE_1__["selectSettingsState"],
          function(state) {
            return state;
          }
        );
        var selectSettingsStickyHeader = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(state) {
          return state.stickyHeader;
        });
        var selectSettingsLanguage = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(state) {
          return state.language;
        });
        var selectTheme = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.theme;
        });
        var selectPageAnimations = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.pageAnimations;
        });
        var selectElementsAnimations = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.elementsAnimations;
        });
        var selectAutoNightMode = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.autoNightMode;
        });
        var selectTestApi = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.testApi;
        });
        var selectNightTheme = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.nightTheme;
        });
        var selectHour = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectSettings, function(settings) {
          return settings.hour;
        });
        var selectIsNightHour = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectAutoNightMode, selectHour, function(autoNightMode, hour) {
          return autoNightMode && (hour >= 21 || hour <= 7);
        });
        var selectEffectiveTheme = Object(
          _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"]
        )(selectTheme, selectNightTheme, selectIsNightHour, function(
          theme,
          nightTheme,
          isNightHour
        ) {
          return (isNightHour ? nightTheme : theme).toLowerCase();
        });
        /***/
      },

    /***/
    "./src/app/core/title/title.service.ts":
      /*!*********************************************!*\
    !*** ./src/app/core/title/title.service.ts ***!
    \*********************************************/

      /*! exports provided: TitleService */

      /***/
      function srcAppCoreTitleTitleServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "TitleService", function() {
          return TitleService;
        });
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */
          "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../environments/environment */
          "./src/environments/environment.ts"
        );

        var TitleService =
          /*#__PURE__*/
          (function() {
            function TitleService(translateService, title) {
              _classCallCheck(this, TitleService);

              this.translateService = translateService;
              this.title = title;
            }

            _createClass(TitleService, [
              {
                key: "setTitle",
                value: function setTitle(snapshot, lazyTranslateService) {
                  var _this14 = this;

                  var lastChild = snapshot;

                  while (lastChild.children.length) {
                    lastChild = lastChild.children[0];
                  }

                  var title = lastChild.data.title;
                  var translate = lazyTranslateService || this.translateService;

                  if (title) {
                    translate
                      .get(title)
                      .pipe(
                        Object(
                          rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"]
                        )(function(translatedTitle) {
                          return translatedTitle !== title;
                        })
                      )
                      .subscribe(function(translatedTitle) {
                        return _this14.title.setTitle(
                          ""
                            .concat(translatedTitle, " - ")
                            .concat(
                              _environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                                "environment"
                              ].appName
                            )
                        );
                      });
                  } else {
                    this.title.setTitle(
                      _environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                        "environment"
                      ].appName
                    );
                  }
                }
              }
            ]);

            return TitleService;
          })();

        TitleService.ɵfac = function TitleService_Factory(t) {
          return new (t || TitleService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                "TranslateService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
            )
          );
        };

        TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjectable"
        ]({
          token: TitleService,
          factory: TitleService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            TitleService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                      "TranslateService"
                    ]
                },
                {
                  type:
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                      "Title"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/core/verb/verb.service.ts":
      /*!*******************************************!*\
    !*** ./src/app/core/verb/verb.service.ts ***!
    \*******************************************/

      /*! exports provided: VerbService */

      /***/
      function srcAppCoreVerbVerbServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "VerbService", function() {
          return VerbService;
        });
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );

        var VerbService =
          /*#__PURE__*/
          (function() {
            function VerbService(http) {
              var _this15 = this;

              _classCallCheck(this, VerbService);

              this.http = http;
              this.path =
                _environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                  "environment"
                ].base +
                _environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                  "environment"
                ].prefix +
                "verbs";
              this.verbs$ = this.http.get(this.path);
              this.random$ = this.verbs$.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                  function(res) {
                    return _this15.getRandomOption(res);
                  }
                )
              );
              this.verbs$.subscribe(function(verbs) {
                return (_this15.verbs = verbs);
              });
            }

            _createClass(VerbService, [
              {
                key: "getRandomOption",
                value: function getRandomOption(options) {
                  return options[Math.floor(Math.random() * options.length)];
                }
              },
              {
                key: "getVerb",
                value: function getVerb(tag) {
                  return this.verbs.filter(function(v) {
                    return v.tag === tag;
                  })[0];
                }
              },
              {
                key: "searchEntries",
                value: function searchEntries(terms) {
                  var _this16 = this;

                  return terms.pipe(
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[
                        "debounceTime"
                      ]
                    )(100),
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[
                        "distinctUntilChanged"
                      ]
                    )(),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                      function(val) {
                        return _this16.verbs.filter(function(verb) {
                          if (val && val.length > 2) {
                            return (
                              verb.gloss
                                .toLowerCase()
                                .indexOf(val.toLowerCase()) > -1 ||
                              verb.tag
                                .toLowerCase()
                                .indexOf(val.toLowerCase()) > -1
                            );
                          } else {
                            return true;
                          }
                        });
                      }
                    )
                  );
                }
              }
            ]);

            return VerbService;
          })();

        VerbService.ɵfac = function VerbService_Factory(t) {
          return new (t || VerbService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
            )
          );
        };

        VerbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjectable"
        ]({
          token: VerbService,
          factory: VerbService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            VerbService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
                args: [
                  {
                    providedIn: "root"
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                      "HttpClient"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/big-input/big-input-action/big-input-action.component.ts":
      /*!*********************************************************************************!*\
    !*** ./src/app/shared/big-input/big-input-action/big-input-action.component.ts ***!
    \*********************************************************************************/

      /*! exports provided: BigInputActionComponent */

      /***/
      function srcAppSharedBigInputBigInputActionBigInputActionComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "BigInputActionComponent",
          function() {
            return BigInputActionComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/button */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/icon */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */

        var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @fortawesome/angular-fontawesome */
          "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"
        );

        function BigInputActionComponent_mat_icon_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              0,
              "mat-icon",
              4
            );
          }

          if (rf & 2) {
            var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "fontSet",
              ctx_r0.fontSet
            )("fontIcon", ctx_r0.fontIcon);
          }
        }

        function BigInputActionComponent_fa_icon_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              0,
              "fa-icon",
              5
            );
          }

          if (rf & 2) {
            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "icon",
              ctx_r1.faIcon
            );
          }
        }

        function BigInputActionComponent_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              ctx_r2.label
            );
          }
        }

        var BigInputActionComponent =
          /*#__PURE__*/
          (function() {
            function BigInputActionComponent() {
              _classCallCheck(this, BigInputActionComponent);

              this.disabled = false;
              this.fontSet = "";
              this.fontIcon = "";
              this.faIcon = "";
              this.label = "";
              this.color = "";
              this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "EventEmitter"
              ]();
              this.hasFocus = false;
            }

            _createClass(BigInputActionComponent, [
              {
                key: "onClick",
                value: function onClick() {
                  this.action.emit();
                }
              }
            ]);

            return BigInputActionComponent;
          })();

        BigInputActionComponent.ɵfac = function BigInputActionComponent_Factory(
          t
        ) {
          return new (t || BigInputActionComponent)();
        };

        BigInputActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: BigInputActionComponent,
          selectors: [["ww-big-input-action"]],
          inputs: {
            disabled: "disabled",
            fontSet: "fontSet",
            fontIcon: "fontIcon",
            faIcon: "faIcon",
            label: "label",
            color: "color"
          },
          outputs: {
            action: "action"
          },
          decls: 4,
          vars: 4,
          consts: [
            ["mat-raised-button", "", "color", "color", 3, "disabled", "click"],
            [3, "fontSet", "fontIcon", 4, "ngIf"],
            [3, "icon", 4, "ngIf"],
            [4, "ngIf"],
            [3, "fontSet", "fontIcon"],
            [3, "icon"]
          ],
          template: function BigInputActionComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "button",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function BigInputActionComponent_Template_button_click_0_listener(
                  $event
                ) {
                  return ctx.onClick();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                1,
                BigInputActionComponent_mat_icon_1_Template,
                1,
                2,
                "mat-icon",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                2,
                BigInputActionComponent_fa_icon_2_Template,
                1,
                1,
                "fa-icon",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                3,
                BigInputActionComponent_span_3_Template,
                2,
                1,
                "span",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "disabled",
                ctx.disabled
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.fontSet && ctx.fontIcon && !ctx.faIcon
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.faIcon
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.label
              );
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__[
              "FaIconComponent"
            ]
          ],
          styles: [
            "button[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 10px;\n}\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  font-size: 18px;\n}\nbutton[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9iaWctaW5wdXQvYmlnLWlucHV0LWFjdGlvbi9iaWctaW5wdXQtYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9zaGFyZWQvYmlnLWlucHV0L2JpZy1pbnB1dC1hY3Rpb24vYmlnLWlucHV0LWFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9iaWctaW5wdXQvYmlnLWlucHV0LWFjdGlvbi9iaWctaW5wdXQtYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxuICBtYXQtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBmYS1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4iLCJidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuYnV0dG9uIG1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuYnV0dG9uIGZhLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            BigInputActionComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-big-input-action",
                    templateUrl: "./big-input-action.component.html",
                    styleUrls: ["./big-input-action.component.scss"],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ChangeDetectionStrategy"
                      ].OnPush
                  }
                ]
              }
            ],
            null,
            {
              disabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              fontSet: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              fontIcon: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              faIcon: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              label: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              color: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              action: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/big-input/big-input/big-input.component.ts":
      /*!*******************************************************************!*\
    !*** ./src/app/shared/big-input/big-input/big-input.component.ts ***!
    \*******************************************************************/

      /*! exports provided: BigInputComponent */

      /***/
      function srcAppSharedBigInputBigInputBigInputComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "BigInputComponent",
          function() {
            return BigInputComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/card */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );

        var _c0 = function _c0(a0) {
          return {
            "has-focus": a0
          };
        };

        var _c1 = ["*"];

        var BigInputComponent = function BigInputComponent() {
          _classCallCheck(this, BigInputComponent);

          this.value = "";
          this.disabled = false;
          this.hasFocus = false;
        };

        BigInputComponent.ɵfac = function BigInputComponent_Factory(t) {
          return new (t || BigInputComponent)();
        };

        BigInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: BigInputComponent,
          selectors: [["ww-big-input"]],
          inputs: {
            placeholder: "placeholder",
            value: "value",
            disabled: "disabled"
          },
          ngContentSelectors: _c1,
          decls: 3,
          vars: 6,
          consts: [
            [1, "big-input", 3, "ngClass"],
            [3, "value", "placeholder", "disabled", "focus", "blur"]
          ],
          template: function BigInputComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "mat-card",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "input",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "focus",
                function BigInputComponent_Template_input_focus_1_listener(
                  $event
                ) {
                  return (ctx.hasFocus = true);
                }
              )(
                "blur",
                function BigInputComponent_Template_input_blur_1_listener(
                  $event
                ) {
                  return (ctx.hasFocus = false);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                  4,
                  _c0,
                  ctx.hasFocus
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "value",
                ctx.value
              )("placeholder", ctx.placeholder)("disabled", ctx.disabled);
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]
          ],
          styles: [
            ".big-input[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 10px 10px 20px;\n}\n.big-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border: 0;\n  font-size: 20px;\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9iaWctaW5wdXQvYmlnLWlucHV0L2JpZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvc2hhcmVkL2JpZy1pbnB1dC9iaWctaW5wdXQvYmlnLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9zaGFyZWQvYmlnLWlucHV0L2JpZy1pbnB1dC9iaWctaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xuXG4gIGlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICB9XG59XG4iLCIuYmlnLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xufVxuLmJpZy1pbnB1dCBpbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59Il19 */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            BigInputComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-big-input",
                    templateUrl: "./big-input.component.html",
                    styleUrls: ["./big-input.component.scss"],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ChangeDetectionStrategy"
                      ].OnPush
                  }
                ]
              }
            ],
            null,
            {
              placeholder: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              value: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ],
              disabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/logo/logo.component.ts":
      /*!***********************************************!*\
    !*** ./src/app/shared/logo/logo.component.ts ***!
    \***********************************************/

      /*! exports provided: LogoComponent */

      /***/
      function srcAppSharedLogoLogoComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "LogoComponent", function() {
          return LogoComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! animejs */
          "../../../node_modules/animejs/anime.min.js"
        );
        /* harmony import */

        var animejs__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/
          __webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);

        var LogoComponent =
          /*#__PURE__*/
          (function() {
            function LogoComponent(router) {
              _classCallCheck(this, LogoComponent);

              this.router = router;
            }

            _createClass(LogoComponent, [
              {
                key: "ngAfterViewInit",
                value: function ngAfterViewInit() {
                  animejs__WEBPACK_IMPORTED_MODULE_2__({
                    targets: "#lineDrawing .lines path",
                    strokeDashoffset: [
                      animejs__WEBPACK_IMPORTED_MODULE_2__["setDashoffset"],
                      0
                    ],
                    easing: "easeInOutCubic",
                    color: "#fff",
                    duration: 550,
                    complete: function complete(anim) {
                      document
                        .getElementById("svgGroup")
                        .classList.add("animated");
                    },
                    delay: function delay(el, i) {
                      return i * 450;
                    }
                  });
                }
              }
            ]);

            return LogoComponent;
          })();

        LogoComponent.ɵfac = function LogoComponent_Factory(t) {
          return new (t || LogoComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };

        LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: LogoComponent,
          selectors: [["ww-logo"]],
          decls: 13,
          vars: 0,
          consts: [
            ["id", "lineDrawing"],
            ["width", "281.7", "height", "35.37", "viewBox", "0 0 281.7 35.37"],
            [
              "id",
              "svgGroup",
              "stroke-linecap",
              "round",
              "fill-rule",
              "evenodd",
              "font-size",
              "9pt",
              "stroke",
              "#fff",
              "stroke-width",
              "0.25mm",
              "fill",
              "none",
              1,
              "lines"
            ],
            [
              "d",
              "M 43.065 7.065 L 34.425 32.04 Q 34.335 32.355 34.11 32.805 A 1.488 1.488 0 0 1 33.941 33.061 Q 33.632 33.449 32.917 33.998 A 3.592 3.592 0 0 1 30.914 34.731 A 4.543 4.543 0 0 1 30.623 34.74 Q 29.295 34.74 28.327 33.998 A 6.369 6.369 0 0 1 27.787 33.536 Q 27.262 33.03 27.045 32.535 L 21.78 17.01 Q 16.785 31.77 16.695 32.04 Q 16.625 32.249 16.42 32.594 A 8.294 8.294 0 0 1 16.29 32.805 Q 15.975 33.3 15.57 33.705 A 3.463 3.463 0 0 1 14.203 34.568 A 3.5 3.5 0 0 1 13.095 34.74 Q 11.655 34.74 10.732 34.065 Q 10.127 33.622 9.783 33.179 A 2.452 2.452 0 0 1 9.495 32.715 L 9.18 32.04 L 0.495 7.065 A 17.274 17.274 0 0 1 0.278 6.37 Q 0.086 5.699 0.026 5.233 A 2.978 2.978 0 0 1 0 4.86 Q 0 3.17 2.657 2.155 A 11.067 11.067 0 0 1 3.015 2.025 Q 4.32 1.575 5.377 1.575 A 2.483 2.483 0 0 1 6.046 1.66 A 1.786 1.786 0 0 1 6.998 2.295 A 3.973 3.973 0 0 1 7.355 2.85 Q 7.708 3.502 8.01 4.5 L 12.96 19.53 L 17.865 4.725 A 4.756 4.756 0 0 1 18.548 3.383 A 3.894 3.894 0 0 1 20.16 2.115 Q 20.88 1.8 22.027 1.8 Q 23.175 1.8 24.165 2.543 A 5.96 5.96 0 0 1 24.689 2.981 Q 25.226 3.49 25.418 3.987 A 1.786 1.786 0 0 1 25.425 4.005 L 30.6 19.62 L 35.55 4.5 A 39.529 39.529 0 0 1 35.722 4.016 Q 35.874 3.594 35.998 3.291 A 8.722 8.722 0 0 1 36.135 2.97 A 1.997 1.997 0 0 1 36.399 2.549 Q 36.621 2.272 36.967 2.003 A 2.216 2.216 0 0 1 37.986 1.568 A 3.005 3.005 0 0 1 38.475 1.53 Q 39.173 1.53 40.061 1.801 A 9.54 9.54 0 0 1 40.59 1.98 A 9.213 9.213 0 0 1 41.764 2.486 Q 43.018 3.145 43.418 4.007 A 2.003 2.003 0 0 1 43.605 4.86 A 2.243 2.243 0 0 1 43.575 5.191 Q 43.494 5.72 43.193 6.673 A 27.656 27.656 0 0 1 43.065 7.065 Z",
              "id",
              "0",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 43.086 18.303 A 12.613 12.613 0 0 0 42.255 22.95 Q 42.255 26.55 44.167 29.408 A 15.033 15.033 0 0 0 44.787 30.266 A 12.477 12.477 0 0 0 48.87 33.728 A 14.255 14.255 0 0 0 49.088 33.84 A 12.204 12.204 0 0 0 54.63 35.19 Q 57.6 35.19 60.367 33.818 A 11.139 11.139 0 0 0 62.798 32.178 A 13.411 13.411 0 0 0 65.07 29.543 A 11.285 11.285 0 0 0 66.286 27.148 A 12.272 12.272 0 0 0 67.005 22.905 A 15.236 15.236 0 0 0 66.997 22.403 A 11.536 11.536 0 0 0 63.27 14.018 A 15.63 15.63 0 0 0 63.153 13.909 A 12.197 12.197 0 0 0 54.675 10.53 Q 49.815 10.53 46.035 14.04 A 11.523 11.523 0 0 0 43.086 18.303 Z M 51.66 26.168 A 6.002 6.002 0 0 0 52.792 26.861 A 4.247 4.247 0 0 0 54.585 27.27 Q 56.07 27.27 57.555 26.145 A 3.64 3.64 0 0 0 58.958 23.789 A 5.549 5.549 0 0 0 59.04 22.815 A 5.538 5.538 0 0 0 58.904 21.547 Q 58.679 20.591 58.083 19.935 A 3.403 3.403 0 0 0 57.645 19.53 A 5.255 5.255 0 0 0 56.147 18.703 A 4.603 4.603 0 0 0 54.63 18.45 A 4.572 4.572 0 0 0 52.056 19.251 A 5.908 5.908 0 0 0 51.615 19.575 A 3.63 3.63 0 0 0 50.333 21.724 A 5.598 5.598 0 0 0 50.22 22.883 Q 50.22 25.065 51.66 26.168 Z",
              "id",
              "1",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 77.85 21.42 L 77.85 30.87 A 26.127 26.127 0 0 1 77.846 31.355 Q 77.833 32.034 77.782 32.423 A 2.527 2.527 0 0 1 77.685 32.851 Q 77.619 33.06 77.515 33.29 A 5.552 5.552 0 0 1 77.355 33.615 A 1.798 1.798 0 0 1 76.602 34.299 Q 75.927 34.652 74.777 34.749 A 11.17 11.17 0 0 1 73.845 34.785 Q 71.957 34.785 70.997 34.2 A 2.354 2.354 0 0 1 70.74 34.02 A 2.162 2.162 0 0 1 70.153 33.16 Q 70.023 32.827 69.965 32.417 A 4.611 4.611 0 0 1 69.93 32.085 L 69.93 30.78 L 69.93 14.985 A 26.127 26.127 0 0 1 69.934 14.5 Q 69.947 13.821 69.997 13.433 Q 70.054 12.997 70.287 12.482 A 5.4 5.4 0 0 1 70.38 12.285 A 1.735 1.735 0 0 1 71.135 11.563 Q 72.056 11.07 73.89 11.07 Q 76.59 11.07 77.265 12.105 A 2.955 2.955 0 0 1 77.62 12.79 A 2.377 2.377 0 0 1 77.76 13.59 Q 77.98 13.282 78.394 12.845 A 14.188 14.188 0 0 1 78.412 12.825 A 2.628 2.628 0 0 1 78.687 12.58 Q 79.166 12.202 80.141 11.662 A 25.913 25.913 0 0 1 80.235 11.61 A 8.084 8.084 0 0 1 81.114 11.19 Q 81.977 10.845 82.687 10.845 A 16.518 16.518 0 0 1 83.433 10.861 Q 84.015 10.887 84.465 10.958 A 9.255 9.255 0 0 1 85.219 11.109 A 12.635 12.635 0 0 1 86.04 11.34 Q 86.895 11.61 87.457 12.263 A 1.944 1.944 0 0 1 87.8 12.863 Q 88.02 13.455 88.02 14.355 Q 88.02 15.604 87.377 17.056 A 10.638 10.638 0 0 1 87.165 17.505 A 3.898 3.898 0 0 1 86.607 18.351 A 2.453 2.453 0 0 1 84.69 19.215 Q 83.88 19.215 83.137 18.855 A 3.181 3.181 0 0 0 82.464 18.624 Q 82.133 18.547 81.742 18.516 A 7.107 7.107 0 0 0 81.18 18.495 Q 79.965 18.495 78.907 19.35 A 3.133 3.133 0 0 0 78.263 20.041 A 2.428 2.428 0 0 0 77.85 21.42 Z",
              "id",
              "2",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 112.455 3.96 L 112.455 30.825 A 26.127 26.127 0 0 1 112.451 31.31 Q 112.438 31.989 112.387 32.378 A 2.409 2.409 0 0 1 112.275 32.843 Q 112.201 33.062 112.082 33.299 A 4.846 4.846 0 0 1 111.96 33.525 Q 111.285 34.74 108.157 34.74 Q 105.03 34.74 104.67 32.535 A 6.18 6.18 0 0 1 100.953 34.568 A 9.051 9.051 0 0 1 99.405 34.695 A 9.158 9.158 0 0 1 93.969 32.88 A 13.448 13.448 0 0 1 92.025 31.163 Q 88.695 27.63 88.695 22.928 Q 88.695 18.225 92.047 14.67 A 13.173 13.173 0 0 1 94.485 12.61 A 8.941 8.941 0 0 1 99.405 11.115 A 7.903 7.903 0 0 1 101.607 11.406 A 5.869 5.869 0 0 1 104.58 13.365 L 104.58 3.915 A 26.127 26.127 0 0 1 104.584 3.43 Q 104.597 2.751 104.647 2.363 A 2.669 2.669 0 0 1 104.747 1.92 Q 104.813 1.707 104.916 1.476 A 5.427 5.427 0 0 1 105.053 1.193 Q 105.39 0.54 106.245 0.27 A 4.879 4.879 0 0 1 106.899 0.116 Q 107.587 0 108.517 0 Q 109.935 0 110.79 0.27 A 2.398 2.398 0 0 1 111.348 0.523 A 1.713 1.713 0 0 1 111.982 1.215 A 5.503 5.503 0 0 1 112.19 1.68 Q 112.282 1.915 112.334 2.128 A 2.546 2.546 0 0 1 112.387 2.408 Q 112.44 2.809 112.452 3.521 A 26.668 26.668 0 0 1 112.455 3.96 Z M 97.74 25.65 Q 98.91 26.865 100.575 26.865 A 3.729 3.729 0 0 0 102.164 26.532 A 3.678 3.678 0 0 0 103.343 25.65 Q 104.445 24.435 104.445 22.973 A 3.993 3.993 0 0 0 103.749 20.732 A 5.28 5.28 0 0 0 103.387 20.25 A 3.459 3.459 0 0 0 100.888 19.003 A 4.837 4.837 0 0 0 100.53 18.99 A 4.229 4.229 0 0 0 99.192 19.192 A 3.466 3.466 0 0 0 97.65 20.228 A 4.564 4.564 0 0 0 96.884 21.421 A 3.825 3.825 0 0 0 96.57 22.95 A 3.639 3.639 0 0 0 97.328 25.165 A 4.985 4.985 0 0 0 97.74 25.65 Z",
              "id",
              "3",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 157.995 7.065 L 149.355 32.04 Q 149.265 32.355 149.04 32.805 A 1.488 1.488 0 0 1 148.871 33.061 Q 148.562 33.449 147.847 33.998 A 3.592 3.592 0 0 1 145.844 34.731 A 4.543 4.543 0 0 1 145.553 34.74 Q 144.225 34.74 143.257 33.998 A 6.369 6.369 0 0 1 142.717 33.536 Q 142.192 33.03 141.975 32.535 L 136.71 17.01 Q 131.715 31.77 131.625 32.04 Q 131.555 32.249 131.35 32.594 A 8.294 8.294 0 0 1 131.22 32.805 Q 130.905 33.3 130.5 33.705 A 3.463 3.463 0 0 1 129.133 34.568 A 3.5 3.5 0 0 1 128.025 34.74 Q 126.585 34.74 125.662 34.065 Q 125.057 33.622 124.713 33.179 A 2.452 2.452 0 0 1 124.425 32.715 L 124.11 32.04 L 115.425 7.065 A 17.274 17.274 0 0 1 115.208 6.37 Q 115.016 5.699 114.956 5.233 A 2.978 2.978 0 0 1 114.93 4.86 Q 114.93 3.17 117.587 2.155 A 11.067 11.067 0 0 1 117.945 2.025 Q 119.25 1.575 120.307 1.575 A 2.483 2.483 0 0 1 120.976 1.66 A 1.786 1.786 0 0 1 121.928 2.295 A 3.973 3.973 0 0 1 122.285 2.85 Q 122.638 3.502 122.94 4.5 L 127.89 19.53 L 132.795 4.725 A 4.756 4.756 0 0 1 133.478 3.383 A 3.894 3.894 0 0 1 135.09 2.115 Q 135.81 1.8 136.957 1.8 Q 138.105 1.8 139.095 2.543 A 5.96 5.96 0 0 1 139.619 2.981 Q 140.156 3.49 140.348 3.987 A 1.786 1.786 0 0 1 140.355 4.005 L 145.53 19.62 L 150.48 4.5 A 39.529 39.529 0 0 1 150.652 4.016 Q 150.804 3.594 150.928 3.291 A 8.722 8.722 0 0 1 151.065 2.97 A 1.997 1.997 0 0 1 151.329 2.549 Q 151.551 2.272 151.897 2.003 A 2.216 2.216 0 0 1 152.916 1.568 A 3.005 3.005 0 0 1 153.405 1.53 Q 154.103 1.53 154.991 1.801 A 9.54 9.54 0 0 1 155.52 1.98 A 9.213 9.213 0 0 1 156.694 2.486 Q 157.948 3.145 158.348 4.007 A 2.003 2.003 0 0 1 158.535 4.86 A 2.243 2.243 0 0 1 158.505 5.191 Q 158.424 5.72 158.123 6.673 A 27.656 27.656 0 0 1 157.995 7.065 Z",
              "id",
              "4",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 176.31 25.515 L 165.645 25.515 A 2.036 2.036 0 0 0 166.221 26.928 Q 166.57 27.308 167.13 27.63 A 6.702 6.702 0 0 0 168.592 28.265 A 5.351 5.351 0 0 0 170.1 28.485 Q 172.71 28.485 174.195 27.945 L 174.69 27.765 A 7.6 7.6 0 0 1 175.322 27.507 Q 175.969 27.278 176.455 27.27 A 2.132 2.132 0 0 1 176.49 27.27 A 2.08 2.08 0 0 1 177.848 27.792 Q 178.455 28.298 178.965 29.295 A 7.984 7.984 0 0 1 179.273 30.019 Q 179.407 30.386 179.476 30.714 A 3.164 3.164 0 0 1 179.55 31.365 A 2.962 2.962 0 0 1 177.876 34.013 Q 175.544 35.37 169.965 35.37 A 16.503 16.503 0 0 1 166.821 35.083 A 12.851 12.851 0 0 1 164.048 34.223 A 11.796 11.796 0 0 1 161.906 33.007 A 8.933 8.933 0 0 1 160.02 31.185 Q 157.185 27.54 157.185 23.04 A 14.178 14.178 0 0 1 157.745 18.957 A 10.969 10.969 0 0 1 160.852 13.973 A 12.648 12.648 0 0 1 168.666 10.628 A 16.705 16.705 0 0 1 170.01 10.575 Q 176.265 10.575 179.19 14.985 Q 180.72 17.325 180.72 20.093 A 8.856 8.856 0 0 1 180.599 21.609 Q 180.457 22.425 180.148 23.066 A 3.899 3.899 0 0 1 179.347 24.188 A 5.131 5.131 0 0 1 178.19 25.044 A 3.955 3.955 0 0 1 176.31 25.515 Z M 165.555 21.42 L 171.225 21.42 A 2.959 2.959 0 0 0 171.865 21.357 Q 172.772 21.155 172.91 20.306 A 2.032 2.032 0 0 0 172.935 19.98 A 2.197 2.197 0 0 0 172.779 19.139 A 2.041 2.041 0 0 0 172.148 18.315 A 2.598 2.598 0 0 0 171.296 17.874 Q 170.922 17.756 170.469 17.712 A 5.89 5.89 0 0 0 169.897 17.685 A 3.888 3.888 0 0 0 168.214 18.084 Q 167.602 18.374 166.995 18.878 A 5.302 5.302 0 0 0 166.267 19.599 Q 165.555 20.471 165.555 21.42 Z",
              "id",
              "5",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 206.865 15.03 L 206.865 30.78 A 26.127 26.127 0 0 1 206.861 31.265 Q 206.848 31.944 206.797 32.333 Q 206.745 32.734 206.544 33.23 A 6.286 6.286 0 0 1 206.415 33.525 A 1.827 1.827 0 0 1 205.592 34.288 Q 204.779 34.695 203.332 34.695 Q 200.891 34.695 200.055 34.093 A 1.482 1.482 0 0 1 200.047 34.088 A 2.313 2.313 0 0 1 199.159 32.746 A 3.267 3.267 0 0 1 199.08 32.31 Q 197.415 34.695 193.522 34.695 A 8.659 8.659 0 0 1 188.711 33.2 Q 187.509 32.415 186.373 31.218 A 16.572 16.572 0 0 1 186.3 31.14 Q 182.97 27.585 182.97 22.883 Q 182.97 18.18 186.322 14.648 Q 189.675 11.115 193.68 11.115 A 7.535 7.535 0 0 1 195.402 11.305 A 6.422 6.422 0 0 1 196.47 11.655 A 12.771 12.771 0 0 1 197.052 11.921 Q 197.648 12.212 198.006 12.483 A 2.505 2.505 0 0 1 198.225 12.668 A 7.452 7.452 0 0 1 198.65 13.106 Q 198.868 13.351 199.035 13.59 Q 199.279 11.315 201.981 11.094 A 7.487 7.487 0 0 1 202.59 11.07 Q 204.024 11.07 204.857 11.25 A 3.836 3.836 0 0 1 205.2 11.34 A 2.398 2.398 0 0 1 205.758 11.593 A 1.713 1.713 0 0 1 206.392 12.285 A 5.503 5.503 0 0 1 206.6 12.75 Q 206.692 12.985 206.744 13.198 A 2.546 2.546 0 0 1 206.797 13.478 Q 206.85 13.879 206.862 14.591 A 26.668 26.668 0 0 1 206.865 15.03 Z M 190.845 22.95 A 3.592 3.592 0 0 0 191.647 25.209 A 4.902 4.902 0 0 0 192.015 25.628 A 3.819 3.819 0 0 0 194.785 26.82 A 4.61 4.61 0 0 0 194.85 26.82 A 3.729 3.729 0 0 0 196.439 26.487 A 3.678 3.678 0 0 0 197.618 25.605 Q 198.72 24.39 198.72 22.928 A 3.993 3.993 0 0 0 198.024 20.687 A 5.28 5.28 0 0 0 197.662 20.205 A 3.447 3.447 0 0 0 195.154 18.956 A 4.744 4.744 0 0 0 194.827 18.945 A 4.065 4.065 0 0 0 193.407 19.184 A 3.564 3.564 0 0 0 191.947 20.205 A 4.723 4.723 0 0 0 191.194 21.351 A 3.808 3.808 0 0 0 190.845 22.95 Z",
              "id",
              "6",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 235.8 17.055 L 226.485 33.03 A 3.355 3.355 0 0 1 225.906 33.75 Q 225.615 34.029 225.235 34.281 A 6.173 6.173 0 0 1 225.045 34.403 A 4.458 4.458 0 0 1 224.183 34.818 A 3.311 3.311 0 0 1 223.087 35.01 Q 222.12 35.01 221.242 34.538 Q 220.365 34.065 220.005 33.57 L 219.6 33.075 L 210.24 17.055 A 9.788 9.788 0 0 1 209.81 16.273 Q 209.34 15.308 209.34 14.625 A 2.442 2.442 0 0 1 209.804 13.227 Q 210.344 12.439 211.513 11.712 A 10.27 10.27 0 0 1 211.68 11.61 Q 213.055 10.814 213.965 10.658 A 2.465 2.465 0 0 1 214.38 10.62 A 2.594 2.594 0 0 1 215.036 10.698 A 1.82 1.82 0 0 1 215.932 11.228 A 5.047 5.047 0 0 1 216.318 11.704 Q 216.707 12.243 217.125 13.05 L 223.02 24.39 L 228.915 13.05 A 70.134 70.134 0 0 1 229.147 12.652 Q 229.456 12.127 229.639 11.842 A 9.046 9.046 0 0 1 229.658 11.813 A 2.101 2.101 0 0 1 229.901 11.508 Q 230.12 11.278 230.445 11.048 Q 230.898 10.727 231.604 10.675 A 3.846 3.846 0 0 1 231.885 10.665 Q 232.637 10.665 233.861 11.325 A 12.593 12.593 0 0 1 234.36 11.61 Q 236.31 12.772 236.635 14.06 A 2.117 2.117 0 0 1 236.7 14.58 A 2.537 2.537 0 0 1 236.621 15.174 Q 236.476 15.771 236.066 16.566 A 12.808 12.808 0 0 1 235.8 17.055 Z",
              "id",
              "7",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 256.275 25.515 L 245.61 25.515 A 2.036 2.036 0 0 0 246.186 26.928 Q 246.535 27.308 247.095 27.63 A 6.702 6.702 0 0 0 248.557 28.265 A 5.351 5.351 0 0 0 250.065 28.485 Q 252.675 28.485 254.16 27.945 L 254.655 27.765 A 7.6 7.6 0 0 1 255.287 27.507 Q 255.934 27.278 256.42 27.27 A 2.132 2.132 0 0 1 256.455 27.27 A 2.08 2.08 0 0 1 257.813 27.792 Q 258.42 28.298 258.93 29.295 A 7.984 7.984 0 0 1 259.238 30.019 Q 259.372 30.386 259.441 30.714 A 3.164 3.164 0 0 1 259.515 31.365 A 2.962 2.962 0 0 1 257.841 34.013 Q 255.509 35.37 249.93 35.37 A 16.503 16.503 0 0 1 246.786 35.083 A 12.851 12.851 0 0 1 244.013 34.223 A 11.796 11.796 0 0 1 241.871 33.007 A 8.933 8.933 0 0 1 239.985 31.185 Q 237.15 27.54 237.15 23.04 A 14.178 14.178 0 0 1 237.71 18.957 A 10.969 10.969 0 0 1 240.817 13.973 A 12.648 12.648 0 0 1 248.631 10.628 A 16.705 16.705 0 0 1 249.975 10.575 Q 256.23 10.575 259.155 14.985 Q 260.685 17.325 260.685 20.093 A 8.856 8.856 0 0 1 260.564 21.609 Q 260.422 22.425 260.113 23.066 A 3.899 3.899 0 0 1 259.312 24.188 A 5.131 5.131 0 0 1 258.155 25.044 A 3.955 3.955 0 0 1 256.275 25.515 Z M 245.52 21.42 L 251.19 21.42 A 2.959 2.959 0 0 0 251.83 21.357 Q 252.737 21.155 252.875 20.306 A 2.032 2.032 0 0 0 252.9 19.98 A 2.197 2.197 0 0 0 252.744 19.139 A 2.041 2.041 0 0 0 252.113 18.315 A 2.598 2.598 0 0 0 251.261 17.874 Q 250.887 17.756 250.434 17.712 A 5.89 5.89 0 0 0 249.862 17.685 A 3.888 3.888 0 0 0 248.179 18.084 Q 247.567 18.374 246.96 18.878 A 5.302 5.302 0 0 0 246.232 19.599 Q 245.52 20.471 245.52 21.42 Z",
              "id",
              "8",
              "vector-effect",
              "non-scaling-stroke"
            ],
            [
              "d",
              "M 271.53 21.42 L 271.53 30.87 A 26.127 26.127 0 0 1 271.526 31.355 Q 271.513 32.034 271.462 32.423 A 2.527 2.527 0 0 1 271.365 32.851 Q 271.299 33.06 271.195 33.29 A 5.552 5.552 0 0 1 271.035 33.615 A 1.798 1.798 0 0 1 270.282 34.299 Q 269.607 34.652 268.457 34.749 A 11.17 11.17 0 0 1 267.525 34.785 Q 265.637 34.785 264.677 34.2 A 2.354 2.354 0 0 1 264.42 34.02 A 2.162 2.162 0 0 1 263.833 33.16 Q 263.703 32.827 263.645 32.417 A 4.611 4.611 0 0 1 263.61 32.085 L 263.61 30.78 L 263.61 14.985 A 26.127 26.127 0 0 1 263.614 14.5 Q 263.627 13.821 263.677 13.433 Q 263.734 12.997 263.967 12.482 A 5.4 5.4 0 0 1 264.06 12.285 A 1.735 1.735 0 0 1 264.815 11.563 Q 265.736 11.07 267.57 11.07 Q 270.27 11.07 270.945 12.105 A 2.955 2.955 0 0 1 271.3 12.79 A 2.377 2.377 0 0 1 271.44 13.59 Q 271.66 13.282 272.074 12.845 A 14.188 14.188 0 0 1 272.092 12.825 A 2.628 2.628 0 0 1 272.367 12.58 Q 272.846 12.202 273.821 11.662 A 25.913 25.913 0 0 1 273.915 11.61 A 8.084 8.084 0 0 1 274.794 11.19 Q 275.657 10.845 276.367 10.845 A 16.518 16.518 0 0 1 277.113 10.861 Q 277.695 10.887 278.145 10.958 A 9.255 9.255 0 0 1 278.899 11.109 A 12.635 12.635 0 0 1 279.72 11.34 Q 280.575 11.61 281.137 12.263 A 1.944 1.944 0 0 1 281.48 12.863 Q 281.7 13.455 281.7 14.355 Q 281.7 15.604 281.057 17.056 A 10.638 10.638 0 0 1 280.845 17.505 A 3.898 3.898 0 0 1 280.287 18.351 A 2.453 2.453 0 0 1 278.37 19.215 Q 277.56 19.215 276.817 18.855 A 3.181 3.181 0 0 0 276.144 18.624 Q 275.813 18.547 275.422 18.516 A 7.107 7.107 0 0 0 274.86 18.495 Q 273.645 18.495 272.587 19.35 A 3.133 3.133 0 0 0 271.943 20.041 A 2.428 2.428 0 0 0 271.53 21.42 Z",
              "id",
              "9",
              "vector-effect",
              "non-scaling-stroke"
            ]
          ],
          template: function LogoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "svg",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "g",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "path",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                4,
                "path",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "path",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "path",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                7,
                "path",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                8,
                "path",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "path",
                9
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                10,
                "path",
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                11,
                "path",
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                12,
                "path",
                12
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "#lineDrawing[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3NoYXJlZC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9zaGFyZWQvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmVEcmF3aW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDI1cHg7XG59IiwiI2xpbmVEcmF3aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDI1cHg7XG59Il19 */"
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LogoComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-logo",
                    templateUrl: "logo.component.html",
                    styleUrls: ["./logo.component.scss"]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/pipes/animate-only/animate-only.ts":
      /*!***********************************************************!*\
    !*** ./src/app/shared/pipes/animate-only/animate-only.ts ***!
    \***********************************************************/

      /*! exports provided: AnimateOnlyPipe */

      /***/
      function srcAppSharedPipesAnimateOnlyAnimateOnlyTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AnimateOnlyPipe",
          function() {
            return AnimateOnlyPipe;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var AnimateOnlyPipe =
          /*#__PURE__*/
          (function() {
            function AnimateOnlyPipe() {
              _classCallCheck(this, AnimateOnlyPipe);
            }

            _createClass(AnimateOnlyPipe, [
              {
                key: "transform",
                // Returns only Animate pronouns
                value: function transform(value) {
                  return value.filter(function(pn) {
                    return pn["gloss"].toLowerCase() !== "it";
                  });
                }
              }
            ]);

            return AnimateOnlyPipe;
          })();

        AnimateOnlyPipe.ɵfac = function AnimateOnlyPipe_Factory(t) {
          return new (t || AnimateOnlyPipe)();
        };

        AnimateOnlyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefinePipe"
        ]({
          name: "animateOnly",
          type: AnimateOnlyPipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AnimateOnlyPipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
                args: [
                  {
                    name: "animateOnly"
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/pipes/capitalize/capitalize.ts":
      /*!*******************************************************!*\
    !*** ./src/app/shared/pipes/capitalize/capitalize.ts ***!
    \*******************************************************/

      /*! exports provided: CapitalizePipe */

      /***/
      function srcAppSharedPipesCapitalizeCapitalizeTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CapitalizePipe",
          function() {
            return CapitalizePipe;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var CapitalizePipe =
          /*#__PURE__*/
          (function() {
            function CapitalizePipe() {
              _classCallCheck(this, CapitalizePipe);
            }

            _createClass(CapitalizePipe, [
              {
                key: "transform",
                value: function transform(value) {
                  if (value) {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                  }

                  return value;
                }
              }
            ]);

            return CapitalizePipe;
          })();

        CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
          return new (t || CapitalizePipe)();
        };

        CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefinePipe"
        ]({
          name: "capitalize",
          type: CapitalizePipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CapitalizePipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
                args: [
                  {
                    name: "capitalize"
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/pipes/decapitalize/decapitalize.ts":
      /*!***********************************************************!*\
    !*** ./src/app/shared/pipes/decapitalize/decapitalize.ts ***!
    \***********************************************************/

      /*! exports provided: DecapitalizePipe */

      /***/
      function srcAppSharedPipesDecapitalizeDecapitalizeTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "DecapitalizePipe",
          function() {
            return DecapitalizePipe;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var DecapitalizePipe =
          /*#__PURE__*/
          (function() {
            function DecapitalizePipe() {
              _classCallCheck(this, DecapitalizePipe);
            }

            _createClass(DecapitalizePipe, [
              {
                key: "transform",
                value: function transform(value) {
                  // Move all uppercase characters to lowercase except 'I'
                  var find = /([A-H,J-Z]|I\w)/;
                  var re = new RegExp(find, "g");
                  value = value.replace(re, function(v) {
                    return v.toLowerCase();
                  });
                  return value;
                }
              }
            ]);

            return DecapitalizePipe;
          })();

        DecapitalizePipe.ɵfac = function DecapitalizePipe_Factory(t) {
          return new (t || DecapitalizePipe)();
        };

        DecapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefinePipe"
        ]({
          name: "decapitalize",
          type: DecapitalizePipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            DecapitalizePipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
                args: [
                  {
                    name: "decapitalize"
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/rtl-support/rtl-support.directive.ts":
      /*!*************************************************************!*\
    !*** ./src/app/shared/rtl-support/rtl-support.directive.ts ***!
    \*************************************************************/

      /*! exports provided: RtlSupportDirective */

      /***/
      function srcAppSharedRtlSupportRtlSupportDirectiveTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "RtlSupportDirective",
          function() {
            return RtlSupportDirective;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );

        var RtlSupportDirective =
          /*#__PURE__*/
          (function() {
            function RtlSupportDirective(el, translate) {
              _classCallCheck(this, RtlSupportDirective);

              this.el = el;
              this.translate = translate;
              el.nativeElement.style.textAlign =
                translate.currentLang === "he" ? "right" : "left";
              el.nativeElement.style.direction =
                translate.currentLang === "he" ? "rtl" : "ltr";
            }

            _createClass(RtlSupportDirective, [
              {
                key: "ngOnInit",
                value: function ngOnInit() {
                  var _this17 = this;

                  this.subscription = this.translate.onLangChange.subscribe(
                    function(event) {
                      _this17.el.nativeElement.style.textAlign =
                        event.lang === "he" ? "right" : "left";
                      _this17.el.nativeElement.style.direction =
                        event.lang === "he" ? "rtl" : "ltr";
                    }
                  );
                }
              },
              {
                key: "ngOnDestroy",
                value: function ngOnDestroy() {
                  if (this.subscription) {
                    this.subscription.unsubscribe();
                  }
                }
              }
            ]);

            return RtlSupportDirective;
          })();

        RtlSupportDirective.ɵfac = function RtlSupportDirective_Factory(t) {
          return new (t || RtlSupportDirective)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__[
                "TranslateService"
              ]
            )
          );
        };

        RtlSupportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: RtlSupportDirective,
          selectors: [["", "rtl", ""]]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            RtlSupportDirective,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
                args: [
                  {
                    selector: "[rtl]" // tslint:disable-line
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
                },
                {
                  type:
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__[
                      "TranslateService"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/shared.module.ts":
      /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

      /*! exports provided: SharedModule */

      /***/
      function srcAppSharedSharedModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "SharedModule", function() {
          return SharedModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/button */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */

        var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/button-toggle */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js"
        );
        /* harmony import */

        var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/menu */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js"
        );
        /* harmony import */

        var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/select */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"
        );
        /* harmony import */

        var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/tabs */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
        );
        /* harmony import */

        var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/input */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
        );
        /* harmony import */

        var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/progress-spinner */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js"
        );
        /* harmony import */

        var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/chips */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js"
        );
        /* harmony import */

        var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/material/checkbox */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
        );
        /* harmony import */

        var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/card */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */

        var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material/list */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @angular/material/icon */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @angular/material/tooltip */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js"
        );
        /* harmony import */

        var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @angular/material/snack-bar */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
        );
        /* harmony import */

        var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! @angular/material/slide-toggle */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js"
        );
        /* harmony import */

        var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! @angular/material/stepper */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js"
        );
        /* harmony import */

        var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! @angular/material/divider */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js"
        );
        /* harmony import */

        var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! @angular/material/slider */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js"
        );
        /* harmony import */

        var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! @angular/material/datepicker */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js"
        );
        /* harmony import */

        var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! @angular/material/core */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! @angular/material/grid-list */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js"
        );
        /* harmony import */

        var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! @fortawesome/angular-fontawesome */
          "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"
        );
        /* harmony import */

        var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! @fortawesome/free-solid-svg-icons */
          "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js"
        );
        /* harmony import */

        var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! @fortawesome/free-brands-svg-icons */
          "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js"
        );
        /* harmony import */

        var _big_input_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./big-input/big-input/big-input.component */
          "./src/app/shared/big-input/big-input/big-input.component.ts"
        );
        /* harmony import */

        var _big_input_big_input_action_big_input_action_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./big-input/big-input-action/big-input-action.component */
          "./src/app/shared/big-input/big-input-action/big-input-action.component.ts"
        );
        /* harmony import */

        var _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./rtl-support/rtl-support.directive */
          "./src/app/shared/rtl-support/rtl-support.directive.ts"
        );
        /* harmony import */

        var _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./logo/logo.component */
          "./src/app/shared/logo/logo.component.ts"
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ngx-toastr */
          "../../node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
        );
        /* harmony import */

        var _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./pipes/animate-only/animate-only */
          "./src/app/shared/pipes/animate-only/animate-only.ts"
        );
        /* harmony import */

        var _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./pipes/capitalize/capitalize */
          "./src/app/shared/pipes/capitalize/capitalize.ts"
        );
        /* harmony import */

        var _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./pipes/decapitalize/decapitalize */
          "./src/app/shared/pipes/decapitalize/decapitalize.ts"
        );
        /* harmony import */

        var ngx_echarts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ngx-echarts */
          "../../node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js"
        );

        var SharedModule = function SharedModule(faIconLibrary) {
          _classCallCheck(this, SharedModule);

          faIconLibrary.addIcons(
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_27__[
              "faGithub"
            ],
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_27__[
              "faMediumM"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faPlus"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faEdit"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faTrash"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faTimes"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faCaretUp"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faCaretDown"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faExclamationTriangle"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faFilter"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faTasks"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faCheck"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faMusic"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faSquare"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faLanguage"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faPaintBrush"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faLightbulb"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faKeyboard"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faWindowMaximize"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faStream"
            ],
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__[
              "faBook"
            ]
          );
        };

        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: SharedModule
        });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                  "FaIconLibrary"
                ]
              )
            );
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__[
                "TranslateModule"
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                "MatButtonModule"
              ],
              _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
                "MatButtonToggleModule"
              ],
              _angular_material_select__WEBPACK_IMPORTED_MODULE_7__[
                "MatSelectModule"
              ],
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__[
                "MatTabsModule"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_9__[
                "MatInputModule"
              ],
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__[
                "MatProgressSpinnerModule"
              ],
              _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__[
                "MatChipsModule"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_13__[
                "MatCardModule"
              ],
              _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__[
                "MatCheckboxModule"
              ],
              _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__[
                "MatGridListModule"
              ],
              _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                "MatListModule"
              ],
              _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__[
                "MatMenuModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__[
                "MatIconModule"
              ],
              _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                "MatTooltipModule"
              ],
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__[
                "MatSnackBarModule"
              ],
              _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__[
                "MatStepperModule"
              ],
              _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__[
                "MatSlideToggleModule"
              ],
              _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__[
                "MatDividerModule"
              ],
              ngx_echarts__WEBPACK_IMPORTED_MODULE_36__["NgxEchartsModule"],
              ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"].forRoot({
                maxOpened: 1,
                autoDismiss: true,
                positionClass: "toast-top-center"
              }),
              _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                "FontAwesomeModule"
              ]
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
              "MatButtonModule"
            ],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
              "MatButtonToggleModule"
            ],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__[
              "MatMenuModule"
            ],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__[
              "MatTabsModule"
            ],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__[
              "MatChipsModule"
            ],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__[
              "MatGridListModule"
            ],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__[
              "MatInputModule"
            ],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__[
              "MatProgressSpinnerModule"
            ],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__[
              "MatCheckboxModule"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__[
              "MatCardModule"
            ],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
              "MatListModule"
            ],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__[
              "MatSelectModule"
            ],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__[
              "MatIconModule"
            ],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
              "MatTooltipModule"
            ],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__[
              "MatSnackBarModule"
            ],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__[
              "MatSlideToggleModule"
            ],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__[
              "MatStepperModule"
            ],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__[
              "MatDividerModule"
            ],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__[
              "MatSliderModule"
            ],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__[
              "MatDatepickerModule"
            ],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_23__[
              "MatNativeDateModule"
            ],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
              "FontAwesomeModule"
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              SharedModule,
              {
                declarations: [
                  _big_input_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_28__[
                    "BigInputComponent"
                  ],
                  _big_input_big_input_action_big_input_action_component__WEBPACK_IMPORTED_MODULE_29__[
                    "BigInputActionComponent"
                  ],
                  _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__[
                    "LogoComponent"
                  ],
                  _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_30__[
                    "RtlSupportDirective"
                  ],
                  _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_33__[
                    "AnimateOnlyPipe"
                  ],
                  _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_34__[
                    "CapitalizePipe"
                  ],
                  _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_35__[
                    "DecapitalizePipe"
                  ]
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__[
                    "TranslateModule"
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                    "MatButtonModule"
                  ],
                  _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
                    "MatButtonToggleModule"
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_7__[
                    "MatSelectModule"
                  ],
                  _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__[
                    "MatTabsModule"
                  ],
                  _angular_material_input__WEBPACK_IMPORTED_MODULE_9__[
                    "MatInputModule"
                  ],
                  _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__[
                    "MatProgressSpinnerModule"
                  ],
                  _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__[
                    "MatChipsModule"
                  ],
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_13__[
                    "MatCardModule"
                  ],
                  _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__[
                    "MatCheckboxModule"
                  ],
                  _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__[
                    "MatGridListModule"
                  ],
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                    "MatListModule"
                  ],
                  _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__[
                    "MatMenuModule"
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__[
                    "MatIconModule"
                  ],
                  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                    "MatTooltipModule"
                  ],
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__[
                    "MatSnackBarModule"
                  ],
                  _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__[
                    "MatStepperModule"
                  ],
                  _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__[
                    "MatSlideToggleModule"
                  ],
                  _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__[
                    "MatDividerModule"
                  ],
                  ngx_echarts__WEBPACK_IMPORTED_MODULE_36__["NgxEchartsModule"],
                  ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"],
                  _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                    "FontAwesomeModule"
                  ]
                ],
                exports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                    "ReactiveFormsModule"
                  ],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__[
                    "TranslateModule"
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                    "MatButtonModule"
                  ],
                  _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
                    "MatButtonToggleModule"
                  ],
                  _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__[
                    "MatMenuModule"
                  ],
                  _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__[
                    "MatTabsModule"
                  ],
                  _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__[
                    "MatChipsModule"
                  ],
                  _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__[
                    "MatGridListModule"
                  ],
                  _angular_material_input__WEBPACK_IMPORTED_MODULE_9__[
                    "MatInputModule"
                  ],
                  _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__[
                    "MatProgressSpinnerModule"
                  ],
                  _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__[
                    "MatCheckboxModule"
                  ],
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_13__[
                    "MatCardModule"
                  ],
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                    "MatListModule"
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_7__[
                    "MatSelectModule"
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__[
                    "MatIconModule"
                  ],
                  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                    "MatTooltipModule"
                  ],
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__[
                    "MatSnackBarModule"
                  ],
                  _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__[
                    "MatSlideToggleModule"
                  ],
                  _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__[
                    "MatStepperModule"
                  ],
                  _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__[
                    "MatDividerModule"
                  ],
                  _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__[
                    "MatSliderModule"
                  ],
                  _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__[
                    "MatDatepickerModule"
                  ],
                  _angular_material_core__WEBPACK_IMPORTED_MODULE_23__[
                    "MatNativeDateModule"
                  ],
                  _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                    "FontAwesomeModule"
                  ],
                  _big_input_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_28__[
                    "BigInputComponent"
                  ],
                  _big_input_big_input_action_big_input_action_component__WEBPACK_IMPORTED_MODULE_29__[
                    "BigInputActionComponent"
                  ],
                  _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__[
                    "LogoComponent"
                  ],
                  _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_30__[
                    "RtlSupportDirective"
                  ],
                  _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_33__[
                    "AnimateOnlyPipe"
                  ],
                  _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_34__[
                    "CapitalizePipe"
                  ],
                  _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_35__[
                    "DecapitalizePipe"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SharedModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        "CommonModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                        "FormsModule"
                      ],
                      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__[
                        "TranslateModule"
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                        "MatButtonModule"
                      ],
                      _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
                        "MatButtonToggleModule"
                      ],
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_7__[
                        "MatSelectModule"
                      ],
                      _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__[
                        "MatTabsModule"
                      ],
                      _angular_material_input__WEBPACK_IMPORTED_MODULE_9__[
                        "MatInputModule"
                      ],
                      _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__[
                        "MatProgressSpinnerModule"
                      ],
                      _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__[
                        "MatChipsModule"
                      ],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_13__[
                        "MatCardModule"
                      ],
                      _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__[
                        "MatCheckboxModule"
                      ],
                      _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__[
                        "MatGridListModule"
                      ],
                      _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                        "MatListModule"
                      ],
                      _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__[
                        "MatMenuModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__[
                        "MatIconModule"
                      ],
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                        "MatTooltipModule"
                      ],
                      _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__[
                        "MatSnackBarModule"
                      ],
                      _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__[
                        "MatStepperModule"
                      ],
                      _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__[
                        "MatSlideToggleModule"
                      ],
                      _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__[
                        "MatDividerModule"
                      ],
                      ngx_echarts__WEBPACK_IMPORTED_MODULE_36__[
                        "NgxEchartsModule"
                      ],
                      ngx_toastr__WEBPACK_IMPORTED_MODULE_32__[
                        "ToastrModule"
                      ].forRoot({
                        maxOpened: 1,
                        autoDismiss: true,
                        positionClass: "toast-top-center"
                      }),
                      _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                        "FontAwesomeModule"
                      ]
                    ],
                    declarations: [
                      _big_input_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_28__[
                        "BigInputComponent"
                      ],
                      _big_input_big_input_action_big_input_action_component__WEBPACK_IMPORTED_MODULE_29__[
                        "BigInputActionComponent"
                      ],
                      _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__[
                        "LogoComponent"
                      ],
                      _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_30__[
                        "RtlSupportDirective"
                      ],
                      _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_33__[
                        "AnimateOnlyPipe"
                      ],
                      _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_34__[
                        "CapitalizePipe"
                      ],
                      _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_35__[
                        "DecapitalizePipe"
                      ]
                    ],
                    exports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        "CommonModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                        "FormsModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                        "ReactiveFormsModule"
                      ],
                      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__[
                        "TranslateModule"
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                        "MatButtonModule"
                      ],
                      _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
                        "MatButtonToggleModule"
                      ],
                      _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__[
                        "MatMenuModule"
                      ],
                      _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__[
                        "MatTabsModule"
                      ],
                      _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__[
                        "MatChipsModule"
                      ],
                      _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__[
                        "MatGridListModule"
                      ],
                      _angular_material_input__WEBPACK_IMPORTED_MODULE_9__[
                        "MatInputModule"
                      ],
                      _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__[
                        "MatProgressSpinnerModule"
                      ],
                      _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__[
                        "MatCheckboxModule"
                      ],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_13__[
                        "MatCardModule"
                      ],
                      _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                        "MatListModule"
                      ],
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_7__[
                        "MatSelectModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__[
                        "MatIconModule"
                      ],
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                        "MatTooltipModule"
                      ],
                      _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__[
                        "MatSnackBarModule"
                      ],
                      _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__[
                        "MatSlideToggleModule"
                      ],
                      _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__[
                        "MatStepperModule"
                      ],
                      _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__[
                        "MatDividerModule"
                      ],
                      _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__[
                        "MatSliderModule"
                      ],
                      _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__[
                        "MatDatepickerModule"
                      ],
                      _angular_material_core__WEBPACK_IMPORTED_MODULE_23__[
                        "MatNativeDateModule"
                      ],
                      _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                        "FontAwesomeModule"
                      ],
                      _big_input_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_28__[
                        "BigInputComponent"
                      ],
                      _big_input_big_input_action_big_input_action_component__WEBPACK_IMPORTED_MODULE_29__[
                        "BigInputActionComponent"
                      ],
                      _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__[
                        "LogoComponent"
                      ],
                      _rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_30__[
                        "RtlSupportDirective"
                      ],
                      _pipes_animate_only_animate_only__WEBPACK_IMPORTED_MODULE_33__[
                        "AnimateOnlyPipe"
                      ],
                      _pipes_capitalize_capitalize__WEBPACK_IMPORTED_MODULE_34__[
                        "CapitalizePipe"
                      ],
                      _pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_35__[
                        "DecapitalizePipe"
                      ]
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__[
                      "FaIconLibrary"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/assets/logo.png":
      /*!*****************************!*\
    !*** ./src/assets/logo.png ***!
    \*****************************/

      /*! no static exports found */

      /***/
      function srcAssetsLogoPng(module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "logo.png";
        /***/
      },

    /***/
    "./src/environments/environment.ts":
      /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

      /*! exports provided: environment */

      /***/
      function srcEnvironmentsEnvironmentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "environment", function() {
          return environment;
        }); // The file contents for the current environment will overwrite these during build.
        // The build system defaults to the dev environment which uses `environment.ts`, but if you do
        // `ng build --env=prod` then `environment.prod.ts` will be used instead.
        // The list of which env maps to which file can be found in `.angular-cli.json`.

        var packageJson = __webpack_require__(
          /*! ../../../../package.json */
          "../../package.json"
        );

        var environment = {
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
          base: "//localhost:5000",
          prefix: "/api/v1/",
          test_prefix: "/api/v2/",
          versions: {
            app: packageJson.version,
            angular: packageJson.dependencies["@angular/core"],
            ngrx: packageJson.dependencies["@ngrx/store"],
            material: packageJson.dependencies["@angular/material"],
            bootstrap: packageJson.dependencies.bootstrap,
            rxjs: packageJson.dependencies.rxjs,
            ngxtranslate: packageJson.dependencies["@ngx-translate/core"],
            fontAwesome:
              packageJson.dependencies["@fortawesome/fontawesome-free"],
            angularCli: packageJson.devDependencies["@angular/cli"],
            typescript: packageJson.devDependencies["typescript"],
            cypress: packageJson.devDependencies["cypress"]
          }
        };
        /***/
      },

    /***/
    "./src/main.ts":
      /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

      /*! no exports provided */

      /***/
      function srcMainTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */
          "./src/app/app.module.ts"
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */
          "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }

        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          ["catch"](function(err) {
            return console.error(err);
          });
        /***/
      },

    /***/
    0:
      /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/pinea/wordweaver-GUI/refactor/projects/word-weaver/src/main.ts */
          "./src/main.ts"
        );
        /***/
      }
  },
  [[0, "runtime", "vendor"]]
]);
//# sourceMappingURL=main-es5.js.map
