(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-about-about-module"],
  {
    /***/ "./src/app/pages/about/about-routing.module.ts":
      /*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
      /*! exports provided: AboutRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AboutRoutingModule",
          function() {
            return AboutRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./about/about.component */ "./src/app/pages/about/about/about.component.ts"
        );

        const routes = [
          {
            path: "",
            component:
              _about_about_component__WEBPACK_IMPORTED_MODULE_2__[
                "AboutComponent"
              ],
            data: { title: "ww.menu.about" }
          }
        ];
        class AboutRoutingModule {}
        AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({ type: AboutRoutingModule });
        AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AboutRoutingModule_Factory(t) {
            return new (t || AboutRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
          ]
        });
        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              AboutRoutingModule,
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
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AboutRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forChild(routes)
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

    /***/ "./src/app/pages/about/about.module.ts":
      /*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
      /*! exports provided: AboutModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AboutModule",
          function() {
            return AboutModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts"
        );
        /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./about/about.component */ "./src/app/pages/about/about/about.component.ts"
        );
        /* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts"
        );

        class AboutModule {}
        AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({ type: AboutModule });
        AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AboutModule_Factory(t) {
            return new (t || AboutModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                "SharedModule"
              ],
              _about_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                "AboutRoutingModule"
              ]
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              AboutModule,
              {
                declarations: [
                  _about_about_component__WEBPACK_IMPORTED_MODULE_3__[
                    "AboutComponent"
                  ]
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                    "SharedModule"
                  ],
                  _about_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                    "AboutRoutingModule"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AboutModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    declarations: [
                      _about_about_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AboutComponent"
                      ]
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        "CommonModule"
                      ],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                        "SharedModule"
                      ],
                      _about_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                        "AboutRoutingModule"
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

    /***/ "./src/app/pages/about/about/about.component.ts":
      /*!******************************************************!*\
  !*** ./src/app/pages/about/about/about.component.ts ***!
  \******************************************************/
      /*! exports provided: AboutComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AboutComponent",
          function() {
            return AboutComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../core/core.module */ "./src/app/core/core.module.ts"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );

        class AboutComponent {
          constructor() {
            this.routeAnimationsElements =
              _core_core_module__WEBPACK_IMPORTED_MODULE_1__[
                "ROUTE_ANIMATIONS_ELEMENTS"
              ];
            this.releaseButler = __webpack_require__(
              /*! ../../../../assets/release-butler.png */ "./src/assets/release-butler.png"
            );
          }
          ngOnInit() {}
        }
        AboutComponent.ɵfac = function AboutComponent_Factory(t) {
          return new (t || AboutComponent)();
        };
        AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AboutComponent,
          selectors: [["ww-about"]],
          decls: 15,
          vars: 10,
          consts: [
            [
              1,
              "background",
              "page__content",
              "shadow-box",
              "vmargin-right-20",
              "vmargin-left-20"
            ],
            [1, "gradient"],
            [1, "container"],
            [1, "actions"],
            [3, "ngClass"]
          ],
          template: function AboutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
                5,
                "translate"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
                9,
                "translate"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "h2"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
                13,
                "translate"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  5,
                  4,
                  "ww.title.long"
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                ctx.routeAnimationsElements
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  9,
                  6,
                  "ww.about.slogan"
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  13,
                  8,
                  "ww.about.text"
                )
              );
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
          pipes: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]
          ],
          styles: [
            'h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3em;\n  text-transform: uppercase;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  text-transform: uppercase;\n}\n\n.background[_ngcontent-%COMP%] {\n  padding: 80px 0 0 0;\n  position: relative;\n}\n\n.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px;\n  z-index: 1;\n}\n\n.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  padding: 20px 10px 30px 10px;\n}\n\n.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 5px 10px 0;\n}\n\n.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.actions-main[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 3px 24px;\n}\n\n.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 1px;\n}\n\n.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 50px auto;\n  letter-spacing: 0.01px;\n  overflow-wrap: break-word;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  display: inline-block;\n  word-wrap: break-word;\n  white-space: normal;\n  margin: 0 0 10px 0;\n}\n\n.background[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: url(\'intro.jpg\') no-repeat center top;\n  background-size: cover;\n  opacity: 0.7;\n  content: "";\n  z-index: 0;\n}\n\n.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 51%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: "";\n  z-index: 0;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.follow-releases[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto 60px auto;\n}\n\n.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n\n.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 3px solid;\n}\n\n.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 80%;\n  margin: 20px auto 0 auto;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.contributors[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto 60px auto;\n}\n\n.contributors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 3px solid;\n}\n\n.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 8px;\n  width: 100px;\n  display: inline-block;\n  text-align: center;\n}\n\n.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 0 0 0;\n  line-height: 16px;\n}\n\n.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  border: 5px solid;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n@media (max-width: ) {\n  .background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin: 50px 0;\n  }\n  .background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  .follow-releases[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n@media (max-width: ) {\n  .background[_ngcontent-%COMP%] {\n    padding: 40px 0 0 0;\n  }\n  .background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    line-height: 1em;\n  }\n  .background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin: 40px 0 0 0;\n  }\n  .background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 10px 0 20px 0;\n  }\n  .background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%] {\n    width: auto;\n    margin: 40px auto 40px auto;\n  }\n\n  .follow-releases[_ngcontent-%COMP%] {\n    margin: 0 auto 40px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDREo7O0FER0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNETjs7QURJSTtFQUNFLG9CQUFBO0FDRk47O0FESU07RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDRlI7O0FES007RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNIUjs7QURRRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDTko7O0FEUUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTk47O0FEVUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDUko7O0FEWUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1ZOOztBRGNFO0VBQ0Usa0JBQUE7QUNaSjs7QURnQkE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FDYkY7O0FEZUU7RUFDRSxpQkFBQTtBQ2JKOztBRGVJO0VBQ0Usd0JBQUE7QUNiTjs7QURpQkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQ2ZKOztBRG9CQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUNqQkY7O0FEb0JJO0VBQ0Usd0JBQUE7QUNsQk47O0FEc0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNwQko7O0FEc0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDcEJOOztBRHNCTTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ3BCUjs7QUR1Qk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtHQUFBO0FDckJSOztBRDRCQTtFQUVJO0lBQ0UsY0FBQTtFQzFCSjtFRDRCRTtJQUNFLFdBQUE7RUMxQko7O0VENkJBO0lBQ0UsV0FBQTtFQzFCRjtFRDRCRTtJQUNFLGVBQUE7RUMxQko7QUFDRjs7QUQ4QkE7RUFDRTtJQUNFLG1CQUFBO0VDNUJGO0VEOEJFO0lBQ0UsZ0JBQUE7RUM1Qko7RUQrQkU7SUFDRSxrQkFBQTtFQzdCSjtFRCtCSTtJQUNFLHNCQUFBO0VDN0JOO0VEZ0NJO0lBQ0UsV0FBQTtFQzlCTjtFRGtDRTtJQUNFLFdBQUE7SUFDQSwyQkFBQTtFQ2hDSjs7RURvQ0E7SUFDRSx3QkFBQTtFQ2pDRjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3V0aWxpdGllcy9jb25maWcnO1xuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJhY2tncm91bmQge1xuICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmFjdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgei1pbmRleDogMTtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMzBweCAxMHB4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgbWFyZ2luOiAwIDVweCAxMHB4IDA7XG5cbiAgICAgICYuYWN0aW9ucy1tYWluIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcGFkZGluZzogM3B4IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGZhLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5nZXQtc3RhcnRlZCB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMXB4O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgY29kZSB7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICB9XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW50cm8uanBnJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIC5ncmFkaWVudCB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTElO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4uZm9sbG93LXJlbGVhc2VzIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gNjBweCBhdXRvO1xuXG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuXG4gICAgYSB7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbn1cblxuLmNvbnRyaWJ1dG9ycyB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDYwcHggYXV0bztcblxuICBwIHtcbiAgICBhIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgICB9XG4gIH1cblxuICAuY29udHJpYnV0b3JzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBhIHtcbiAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBtZCkpIHtcbiAgLmJhY2tncm91bmQge1xuICAgIC5hY3Rpb25zIHtcbiAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgIH1cbiAgICAuZ2V0LXN0YXJ0ZWQge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG4gIC5mb2xsb3ctcmVsZWFzZXMge1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBzbSkpIHtcbiAgLmJhY2tncm91bmQge1xuICAgIHBhZGRpbmc6IDQwcHggMCAwIDA7XG5cbiAgICBoMSB7XG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIG1hcmdpbjogNDBweCAwIDAgMDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2V0LXN0YXJ0ZWQge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46IDQwcHggYXV0byA0MHB4IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmZvbGxvdy1yZWxlYXNlcyB7XG4gICAgbWFyZ2luOiAwIGF1dG8gNDBweCBhdXRvO1xuICB9XG59XG4iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJhY2tncm91bmQge1xuICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFja2dyb3VuZCAuYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmJhY2tncm91bmQgLmFjdGlvbnMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAzMHB4IDEwcHg7XG59XG4uYmFja2dyb3VuZCAuYWN0aW9ucyBhIHtcbiAgbWFyZ2luOiAwIDVweCAxMHB4IDA7XG59XG4uYmFja2dyb3VuZCAuYWN0aW9ucyBhLmFjdGlvbnMtbWFpbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweCAyNHB4O1xufVxuLmJhY2tncm91bmQgLmFjdGlvbnMgYSBmYS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDFweDtcbn1cbi5iYWNrZ3JvdW5kIC5nZXQtc3RhcnRlZCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMXB4O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhY2tncm91bmQgLmdldC1zdGFydGVkIGNvZGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJhY2tncm91bmQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW50cm8uanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDA7XG59XG4uYmFja2dyb3VuZCAuZ3JhZGllbnQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MSU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDA7XG59XG4uYmFja2dyb3VuZCAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9sbG93LXJlbGVhc2VzIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gNjBweCBhdXRvO1xufVxuLmZvbGxvdy1yZWxlYXNlcyBwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4uZm9sbG93LXJlbGVhc2VzIHAgYSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbn1cbi5mb2xsb3ctcmVsZWFzZXMgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY29udHJpYnV0b3JzIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gNjBweCBhdXRvO1xufVxuLmNvbnRyaWJ1dG9ycyBwIGEge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG59XG4uY29udHJpYnV0b3JzIC5jb250cmlidXRvcnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29udHJpYnV0b3JzIC5jb250cmlidXRvcnMtd3JhcHBlciBhIHtcbiAgbWFyZ2luOiA4cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udHJpYnV0b3JzIC5jb250cmlidXRvcnMtd3JhcHBlciBhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmNvbnRyaWJ1dG9ycyAuY29udHJpYnV0b3JzLXdyYXBwZXIgYSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiA1cHggc29saWQ7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICkge1xuICAuYmFja2dyb3VuZCAuYWN0aW9ucyB7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG4gIH1cbiAgLmJhY2tncm91bmQgLmdldC1zdGFydGVkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5mb2xsb3ctcmVsZWFzZXMge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5mb2xsb3ctcmVsZWFzZXMgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiApIHtcbiAgLmJhY2tncm91bmQge1xuICAgIHBhZGRpbmc6IDQwcHggMCAwIDA7XG4gIH1cbiAgLmJhY2tncm91bmQgaDEge1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gIH1cbiAgLmJhY2tncm91bmQgLmFjdGlvbnMge1xuICAgIG1hcmdpbjogNDBweCAwIDAgMDtcbiAgfVxuICAuYmFja2dyb3VuZCAuYWN0aW9ucyBzcGFuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xuICB9XG4gIC5iYWNrZ3JvdW5kIC5hY3Rpb25zIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5iYWNrZ3JvdW5kIC5nZXQtc3RhcnRlZCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gNDBweCBhdXRvO1xuICB9XG5cbiAgLmZvbGxvdy1yZWxlYXNlcyB7XG4gICAgbWFyZ2luOiAwIGF1dG8gNDBweCBhdXRvO1xuICB9XG59Il19 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AboutComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-about",
                    templateUrl: "./about.component.html",
                    styleUrls: ["./about.component.scss"],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ChangeDetectionStrategy"
                      ].OnPush
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

    /***/ "./src/assets/release-butler.png":
      /*!***************************************!*\
  !*** ./src/assets/release-butler.png ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "release-butler.png";

        /***/
      }
  }
]);
//# sourceMappingURL=pages-about-about-module-es2015.js.map
