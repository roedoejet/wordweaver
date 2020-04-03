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
  ["pages-settings-settings-module"],
  {
    /***/
    "./src/app/pages/settings/settings-routing.module.ts":
      /*!***********************************************************!*\
    !*** ./src/app/pages/settings/settings-routing.module.ts ***!
    \***********************************************************/

      /*! exports provided: SettingsRoutingModule */

      /***/
      function srcAppPagesSettingsSettingsRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SettingsRoutingModule",
          function() {
            return SettingsRoutingModule;
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

        var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./settings/settings-container.component */
          "./src/app/pages/settings/settings/settings-container.component.ts"
        );

        var routes = [
          {
            path: "",
            component:
              _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_2__[
                "SettingsContainerComponent"
              ],
            data: {
              title: "ww.menu.settings"
            }
          }
        ];

        var SettingsRoutingModule = function SettingsRoutingModule() {
          _classCallCheck(this, SettingsRoutingModule);
        };

        SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: SettingsRoutingModule
        });
        SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function SettingsRoutingModule_Factory(t) {
            return new (t || SettingsRoutingModule)();
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
              SettingsRoutingModule,
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
            SettingsRoutingModule,
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

    /***/
    "./src/app/pages/settings/settings.module.ts":
      /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

      /*! exports provided: SettingsModule */

      /***/
      function srcAppPagesSettingsSettingsModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SettingsModule",
          function() {
            return SettingsModule;
          }
        );
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

        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/shared.module */
          "./src/app/shared/shared.module.ts"
        );
        /* harmony import */

        var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./settings-routing.module */
          "./src/app/pages/settings/settings-routing.module.ts"
        );
        /* harmony import */

        var _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./settings/settings-container.component */
          "./src/app/pages/settings/settings/settings-container.component.ts"
        );

        var SettingsModule = function SettingsModule() {
          _classCallCheck(this, SettingsModule);
        };

        SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: SettingsModule
        });
        SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function SettingsModule_Factory(t) {
            return new (t || SettingsModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                "SharedModule"
              ],
              _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__[
                "SettingsRoutingModule"
              ]
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              SettingsModule,
              {
                declarations: [
                  _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_4__[
                    "SettingsContainerComponent"
                  ]
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                    "SharedModule"
                  ],
                  _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__[
                    "SettingsRoutingModule"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SettingsModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    declarations: [
                      _settings_settings_container_component__WEBPACK_IMPORTED_MODULE_4__[
                        "SettingsContainerComponent"
                      ]
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        "CommonModule"
                      ],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                        "SharedModule"
                      ],
                      _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__[
                        "SettingsRoutingModule"
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
    "./src/app/pages/settings/settings/settings-container.component.ts":
      /*!*************************************************************************!*\
    !*** ./src/app/pages/settings/settings/settings-container.component.ts ***!
    \*************************************************************************/

      /*! exports provided: SettingsContainerComponent */

      /***/
      function srcAppPagesSettingsSettingsSettingsContainerComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SettingsContainerComponent",
          function() {
            return SettingsContainerComponent;
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

        var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../core/core.module */
          "./src/app/core/core.module.ts"
        );
        /* harmony import */

        var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../core/settings/settings.actions */
          "./src/app/core/settings/settings.actions.ts"
        );
        /* harmony import */

        var _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../core/settings/settings.selectors */
          "./src/app/core/settings/settings.selectors.ts"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/checkbox */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/icon */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */

        var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @fortawesome/angular-fontawesome */
          "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"
        );
        /* harmony import */

        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/form-field */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
        );
        /* harmony import */

        var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/select */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/forms */
          "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/material/slide-toggle */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js"
        );
        /* harmony import */

        var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/core */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );

        function SettingsContainerComponent_ng_container_7_mat_option_49_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-option",
              22
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              2,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var l_r7 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "value",
              l_r7.value
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                2,
                2,
                "ww.settings.general.language." + l_r7.label
              ),
              " "
            );
          }
        }

        function SettingsContainerComponent_ng_container_7_mat_option_68_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-option",
              22
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              2,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var t_r8 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "value",
              t_r8.value
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                2,
                2,
                "ww.settings.themes." + t_r8.label
              ),
              " "
            );
          }
        }

        function SettingsContainerComponent_ng_container_7_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "div",
              1
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "h2"
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
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "mat-checkbox",
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_7_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r9.onPronounHighlightSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              8,
              " Pronouns "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              9,
              "mat-checkbox",
              7
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_9_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r11.onRootHighlightSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Verb ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "mat-checkbox",
              8
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_11_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r12.onAspectHighlightSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              12,
              " Aspect "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              13,
              "mat-checkbox",
              9
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_13_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r13.onPrepronominalPrefixHighlightHighlightSelect(
                  $event
                );
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              14,
              " Required "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              15,
              "mat-checkbox",
              10
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_15_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r14.onTmpAffixHighlightSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Temp ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              17,
              "mat-checkbox",
              11
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_17_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r15.onPostAspectualSuffixHighlightSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              18,
              " Post Aspectual Suffix "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              22,
              "div",
              1
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              23,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              24,
              "h2"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              26,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              27,
              "div",
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              28,
              "mat-checkbox",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_28_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r16.onGlossLevelSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              29,
              " Gloss Tier "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              30,
              "mat-checkbox",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_30_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r17.onBreakdownLevelSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              31,
              " Breakdown Tier "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              32,
              "mat-checkbox",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_32_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r18.onBreakdownTranslationLevelSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              33,
              " Breakdown Translation Tier "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              34,
              "mat-checkbox",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_checkbox_change_34_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r19.onTranslationLevelSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              35,
              " Translation Tier "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              38,
              "div",
              1
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              39,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              40,
              "h2"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              42,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              43,
              "div",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              44,
              "mat-icon",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              45,
              "fa-icon",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              46,
              "mat-form-field"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              47,
              "mat-select",
              16
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "selectionChange",
              function SettingsContainerComponent_ng_container_7_Template_mat_select_selectionChange_47_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r20.onLanguageSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              48,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              49,
              SettingsContainerComponent_ng_container_7_mat_option_49_Template,
              3,
              4,
              "mat-option",
              17
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              50,
              "div",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              51,
              "mat-icon",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              52,
              "fa-icon",
              18
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              53,
              "mat-placeholder"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              55,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              56,
              "mat-slide-toggle",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_slide_toggle_change_56_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r21.onStickyHeaderToggle($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              57,
              "div",
              1
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              58,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              59,
              "h2"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              61,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              62,
              "div",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              63,
              "mat-icon",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              64,
              "fa-icon",
              19
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              65,
              "mat-form-field"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              66,
              "mat-select",
              20
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "selectionChange",
              function SettingsContainerComponent_ng_container_7_Template_mat_select_selectionChange_66_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r22.onThemeSelect($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              67,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              68,
              SettingsContainerComponent_ng_container_7_mat_option_68_Template,
              3,
              4,
              "mat-option",
              17
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              69,
              "div",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              70,
              "mat-icon",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              71,
              "fa-icon",
              21
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              72,
              "mat-placeholder"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              74,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              75,
              "mat-slide-toggle",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_slide_toggle_change_75_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r23.onAutoNightModeToggle($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              76,
              "div",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              77,
              "mat-placeholder"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              79,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              80,
              "mat-slide-toggle",
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "change",
              function SettingsContainerComponent_ng_container_7_Template_mat_slide_toggle_change_80_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r10
                );

                var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r24.onTestApiToggle($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              82,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }

          if (rf & 2) {
            var settings_r4 = ctx.ngIf;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              ctx_r3.routeAnimationsElements
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                5,
                31,
                "ww.settings.general.highlighting"
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.pronounHighlight
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.rootHighlight
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.aspectHighlight
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.prepronominalPrefixHighlight
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.tmpAffixHighlight
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.postAspectualSuffixHighlight
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              ctx_r3.routeAnimationsElements
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                26,
                33,
                "ww.settings.general.tiers"
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.glossLevel
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.breakdownLevel
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.breakdownTranslationLevel
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.translationLevel
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              ctx_r3.routeAnimationsElements
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                42,
                35,
                "ww.settings.general.title"
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "placeholder",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                48,
                37,
                "ww.settings.general.placeholder"
              )
            )("ngModel", settings_r4.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              ctx_r3.languages
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                55,
                39,
                "ww.settings.themes.sticky-header"
              ),
              " "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.stickyHeader
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              ctx_r3.routeAnimationsElements
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                61,
                41,
                "ww.settings.themes.title"
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "placeholder",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                67,
                43,
                "ww.settings.themes.placeholder"
              )
            )("ngModel", settings_r4.theme);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              ctx_r3.themes
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                74,
                45,
                "ww.settings.themes.night-mode"
              ),
              " "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.autoNightMode
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                79,
                47,
                "ww.settings.advanced"
              ),
              " "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "checked",
              settings_r4.test_api
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                82,
                49,
                "ww.settings.testApi"
              ),
              " "
            );
          }
        }

        var SettingsContainerComponent =
          /*#__PURE__*/
          (function() {
            function SettingsContainerComponent(store) {
              _classCallCheck(this, SettingsContainerComponent);

              this.store = store;
              this.routeAnimationsElements =
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__[
                  "ROUTE_ANIMATIONS_ELEMENTS"
                ];
              this.themes = [
                {
                  value: "DEFAULT-THEME",
                  label: "blue"
                },
                {
                  value: "LIGHT-THEME",
                  label: "light"
                },
                {
                  value: "NATURE-THEME",
                  label: "nature"
                },
                {
                  value: "BLACK-THEME",
                  label: "dark"
                }
              ];
              this.languages = [
                {
                  value: "en",
                  label: "en"
                },
                {
                  value: "fr",
                  label: "fr"
                }
              ];
            }

            _createClass(SettingsContainerComponent, [
              {
                key: "ngOnInit",
                value: function ngOnInit() {
                  this.settings$ = this.store.pipe(
                    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(
                      _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__[
                        "selectSettings"
                      ]
                    )
                  );
                }
              },
              {
                key: "onLanguageSelect",
                value: function onLanguageSelect(_ref) {
                  var language = _ref.value;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeLanguage"
                      ]
                    )({
                      language: language
                    })
                  );
                }
              },
              {
                key: "onGlossLevelSelect",
                value: function onGlossLevelSelect(_ref2) {
                  var glossLevel = _ref2.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeGlossLevel"
                      ]
                    )({
                      glossLevel: glossLevel
                    })
                  );
                }
              },
              {
                key: "onBreakdownLevelSelect",
                value: function onBreakdownLevelSelect(_ref3) {
                  var breakdownLevel = _ref3.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeBreakdownLevel"
                      ]
                    )({
                      breakdownLevel: breakdownLevel
                    })
                  );
                }
              },
              {
                key: "onBreakdownTranslationLevelSelect",
                value: function onBreakdownTranslationLevelSelect(_ref4) {
                  var breakdownTranslationLevel = _ref4.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeBreakdownTranslationLevel"
                      ]
                    )({
                      breakdownTranslationLevel: breakdownTranslationLevel
                    })
                  );
                }
              },
              {
                key: "onTranslationLevelSelect",
                value: function onTranslationLevelSelect(_ref5) {
                  var translationLevel = _ref5.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeTranslationLevel"
                      ]
                    )({
                      translationLevel: translationLevel
                    })
                  );
                }
              },
              {
                key: "onRootHighlightSelect",
                value: function onRootHighlightSelect(_ref6) {
                  var rootHighlight = _ref6.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeRootHighlight"
                      ]
                    )({
                      rootHighlight: rootHighlight
                    })
                  );
                }
              },
              {
                key: "onPronounHighlightSelect",
                value: function onPronounHighlightSelect(_ref7) {
                  var pronounHighlight = _ref7.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangePronounHighlight"
                      ]
                    )({
                      pronounHighlight: pronounHighlight
                    })
                  );
                }
              },
              {
                key: "onAspectHighlightSelect",
                value: function onAspectHighlightSelect(_ref8) {
                  var aspectHighlight = _ref8.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeAspectHighlight"
                      ]
                    )({
                      aspectHighlight: aspectHighlight
                    })
                  );
                }
              },
              {
                key: "onPrepronominalPrefixHighlightHighlightSelect",
                value: function onPrepronominalPrefixHighlightHighlightSelect(
                  _ref9
                ) {
                  var prepronominalPrefixHighlight = _ref9.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangePrepronominalPrefixHighlight"
                      ]
                    )({
                      prepronominalPrefixHighlight: prepronominalPrefixHighlight
                    })
                  );
                }
              },
              {
                key: "onTmpAffixHighlightSelect",
                value: function onTmpAffixHighlightSelect(_ref10) {
                  var tmpAffixHighlight = _ref10.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeTmpAffixHighlight"
                      ]
                    )({
                      tmpAffixHighlight: tmpAffixHighlight
                    })
                  );
                }
              },
              {
                key: "onPostAspectualSuffixHighlightSelect",
                value: function onPostAspectualSuffixHighlightSelect(_ref11) {
                  var postAspectualSuffixHighlight = _ref11.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangePostAspectualSuffixHighlight"
                      ]
                    )({
                      postAspectualSuffixHighlight: postAspectualSuffixHighlight
                    })
                  );
                }
              },
              {
                key: "onTestApiToggle",
                value: function onTestApiToggle(_ref12) {
                  var testApi = _ref12.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeTestApi"
                      ]
                    )({
                      testApi: testApi
                    })
                  );
                }
              },
              {
                key: "onThemeSelect",
                value: function onThemeSelect(_ref13) {
                  var theme = _ref13.value;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeTheme"
                      ]
                    )({
                      theme: theme
                    })
                  );
                }
              },
              {
                key: "onAutoNightModeToggle",
                value: function onAutoNightModeToggle(_ref14) {
                  var autoNightMode = _ref14.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeAutoNightMode"
                      ]
                    )({
                      autoNightMode: autoNightMode
                    })
                  );
                }
              },
              {
                key: "onStickyHeaderToggle",
                value: function onStickyHeaderToggle(_ref15) {
                  var stickyHeader = _ref15.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeStickyHeader"
                      ]
                    )({
                      stickyHeader: stickyHeader
                    })
                  );
                }
              },
              {
                key: "onPageAnimationsToggle",
                value: function onPageAnimationsToggle(_ref16) {
                  var pageAnimations = _ref16.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeAnimationsPage"
                      ]
                    )({
                      pageAnimations: pageAnimations
                    })
                  );
                }
              },
              {
                key: "onElementsAnimationsToggle",
                value: function onElementsAnimationsToggle(_ref17) {
                  var elementsAnimations = _ref17.checked;
                  this.store.dispatch(
                    Object(
                      _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__[
                        "actionSettingsChangeAnimationsElements"
                      ]
                    )({
                      elementsAnimations: elementsAnimations
                    })
                  );
                }
              }
            ]);

            return SettingsContainerComponent;
          })();

        SettingsContainerComponent.ɵfac = function SettingsContainerComponent_Factory(
          t
        ) {
          return new (t || SettingsContainerComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
            )
          );
        };

        SettingsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: SettingsContainerComponent,
          selectors: [["ww-settings"]],
          decls: 9,
          vars: 6,
          consts: [
            [1, "container"],
            [1, "row"],
            [1, "col-sm-12"],
            [4, "ngIf"],
            [1, "col-md-6", "group", 3, "ngClass"],
            [1, "icon-form-field", "checkboxes"],
            [1, "pronouns", 3, "checked", "change"],
            [1, "root", 3, "checked", "change"],
            [1, "aspect", 3, "checked", "change"],
            [1, "prepronominal_prefix", 3, "checked", "change"],
            [1, "tmp_affix", 3, "checked", "change"],
            [1, "post_aspectual_suffix", 3, "checked", "change"],
            [3, "checked", "change"],
            [1, "icon-form-field"],
            ["color", "accent"],
            ["icon", "language", "color", "accent"],
            [
              "name",
              "language",
              3,
              "placeholder",
              "ngModel",
              "selectionChange"
            ],
            [3, "value", 4, "ngFor", "ngForOf"],
            ["icon", "bars", "color", "accent"],
            ["icon", "paint-brush", "color", "accent"],
            ["name", "themes", 3, "placeholder", "ngModel", "selectionChange"],
            ["icon", "lightbulb", "color", "accent"],
            [3, "value"]
          ],
          template: function SettingsContainerComponent_Template(rf, ctx) {
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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                7,
                SettingsContainerComponent_ng_container_7_Template,
                83,
                51,
                "ng-container",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  5,
                  2,
                  "ww.settings.title"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  8,
                  4,
                  ctx.settings$
                )
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__[
              "MatCheckbox"
            ],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__[
              "FaIconComponent"
            ],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__[
              "MatFormField"
            ],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__[
              "MatPlaceholder"
            ],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__[
              "MatSlideToggle"
            ],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]
          ],
          pipes: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]
          ],
          styles: [
            ".container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  text-transform: uppercase;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n}\n\n.group[_ngcontent-%COMP%] {\n  margin: 0 0 40px 0;\n}\n\n.icon-form-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  height: 65.5px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%] {\n  -webkit-box-flex: 2;\n          flex: 2 1 auto;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin: 0 6px 6px 0;\n  font-size: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n\n.checkboxes[_ngcontent-%COMP%] {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzL3NldHRpbmdzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3Mvc2V0dGluZ3MtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDSjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy9zZXR0aW5ncy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaDEge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZ3JvdXAge1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG59XG5cbi5pY29uLWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjUuNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hdC1wbGFjZWhvbGRlciB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gIH1cbn1cblxubWF0LWljb24ge1xuICBtYXJnaW46IDAgNnB4IDZweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5jaGVja2JveGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaDEge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZ3JvdXAge1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG59XG5cbi5pY29uLWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjUuNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb24tZm9ybS1maWVsZCBtYXQtcGxhY2Vob2xkZXIge1xuICBmbGV4OiAyIDEgYXV0bztcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW46IDAgNnB4IDZweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5jaGVja2JveGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SettingsContainerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-settings",
                    templateUrl: "./settings-container.component.html",
                    styleUrls: ["./settings-container.component.scss"],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ChangeDetectionStrategy"
                      ].OnPush
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
      }
  }
]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map
