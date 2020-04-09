function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tableviewer-tableviewer-module"], {
  /***/
  "./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: TableviewerConjPanelComponent */

  /***/
  function srcAppPagesTableviewerTableviewerConjPanelTableviewerConjPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerConjPanelComponent", function () {
      return TableviewerConjPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "../../node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../core/settings/settings.selectors */
    "./src/app/core/settings/settings.selectors.ts");
    /* harmony import */


    var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @biesbjerg/ngx-translate-extract-marker */
    "../../node_modules/@biesbjerg/ngx-translate-extract-marker/fesm2015/biesbjerg-ngx-translate-extract-marker.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-echarts */
    "../../node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/pipes/decapitalize/decapitalize */
    "./src/app/shared/pipes/decapitalize/decapitalize.ts");

    var _c0 = ["explorer"];

    function TableviewerConjPanelComponent_div_0_div_1_select_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableviewerConjPanelComponent_div_0_div_1_select_8_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r144.depth$.next($event.target.selectedIndex);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "ww.tableviewer.conj.depth-tip"))("matTooltipShowDelay", ctx_r139.showDelay.value)("matTooltipHideDelay", ctx_r139.hideDelay.value)("matTooltipPosition", ctx_r139.tooltipPosition);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_1_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerConjPanelComponent_div_0_div_1_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r146.order$.next(!ctx_r146.order$.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "swap_horiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "ww.tableviewer.conj.order-tip"))("matTooltipShowDelay", ctx_r140.showDelay.value)("matTooltipHideDelay", ctx_r140.hideDelay.value)("matTooltipPosition", ctx_r140.tooltipPosition);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_1_mat_icon_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "account_tree");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableviewerConjPanelComponent_div_0_div_1_mat_icon_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grid_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableviewerConjPanelComponent_div_0_div_1_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerConjPanelComponent_div_0_div_1_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r148.download();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "get_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipShowDelay", ctx_r143.showDelay.value)("matTooltipHideDelay", ctx_r143.hideDelay.value)("matTooltipPosition", ctx_r143.tooltipPosition);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerConjPanelComponent_div_0_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r150.manualConjugation$.next("clicked");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableviewerConjPanelComponent_div_0_div_1_select_8_Template, 10, 6, "select", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableviewerConjPanelComponent_div_0_div_1_button_10_Template, 4, 6, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerConjPanelComponent_div_0_div_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r152.toggleExplorer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableviewerConjPanelComponent_div_0_div_1_mat_icon_14_Template, 2, 0, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableviewerConjPanelComponent_div_0_div_1_mat_icon_16_Template, 2, 0, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableviewerConjPanelComponent_div_0_div_1_button_18_Template, 3, 3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerConjPanelComponent_div_0_div_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r153.show_toolbar = !ctx_r153.show_toolbar;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, "ww.tableviewer.conj.title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, "ww.tableviewer.conj.conjugate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, ctx_r130.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 21, ctx_r130.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 23, "ww.tableviewer.conj.explorer-tip"))("matTooltipShowDelay", ctx_r130.showDelay.value)("matTooltipHideDelay", ctx_r130.hideDelay.value)("matTooltipPosition", ctx_r130.tooltipPosition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 25, ctx_r130.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 27, ctx_r130.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, ctx_r130.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 31, "ww.tableviewer.conj.hide-toolbar-tip"))("matTooltipShowDelay", ctx_r130.showDelay.value)("matTooltipHideDelay", ctx_r130.hideDelay.value)("matTooltipPosition", ctx_r130.tooltipPosition);
      }
    }

    function TableviewerConjPanelComponent_div_0_hr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
      }
    }

    function TableviewerConjPanelComponent_div_0_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerConjPanelComponent_div_0_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155);

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r154.show_toolbar = !ctx_r154.show_toolbar;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "ww.tableviewer.conj.show-toolbar-tip"))("matTooltipShowDelay", ctx_r132.showDelay.value)("matTooltipHideDelay", ctx_r132.hideDelay.value)("matTooltipPosition", ctx_r132.tooltipPosition);
      }
    }

    function TableviewerConjPanelComponent_div_0_h4_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r133.routeAnimationsElements)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "ww.tableviewer.conj.instructions"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_h3_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ww.tableviewer.conj.instructions-mobile"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_ng_template_13_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TableviewerConjPanelComponent_div_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableviewerConjPanelComponent_div_0_ng_template_13_ng_container_0_Template, 2, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r136.loading && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r136.response$));
      }
    }

    function TableviewerConjPanelComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var response_r157 = ctx.ngIf;

        var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r137.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", response_r157);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var response_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ww.tableviewer.conj.error.title"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "ww.tableviewer.conj.error.message"), " ");
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ww.translation-language"));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        highlight: a0
      };
    };

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r171 = ctx.$implicit;

        var settings_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r171["classes"], " no-padding header-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, (settings_r129 == null ? null : settings_r129.highlight[item_r171["type"]]) || (settings_r129 == null ? null : settings_r129.highlight[item_r171["classes"]])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r171["value"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_4_span_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_4_span_1_span_2_Template, 2, 0, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r174 = ctx.$implicit;

        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var settings_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r174["classes"], " no-padding header-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, (settings_r129 == null ? null : settings_r129.highlight[item_r174["type"]]) || (settings_r129 == null ? null : settings_r129.highlight[item_r174["classes"]])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r174["value"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conjugation_r165["main"].indexOf(item_r174) < conjugation_r165["main"].length - 1);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_4_span_1_Template, 3, 8, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r165["main"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_5_span_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "decapitalize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_5_span_1_span_3_Template, 2, 0, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r180 = ctx.$implicit;

        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var settings_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r180["classes"], " no-padding header-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, (settings_r129 == null ? null : settings_r129.highlight[item_r180["type"]]) || (settings_r129 == null ? null : settings_r129.highlight[item_r180["classes"]])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, item_r180["value"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conjugation_r165["secondary"].indexOf(item_r180) < conjugation_r165["secondary"].length - 1);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_5_span_1_Template, 4, 10, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r165["secondary"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h4_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conjugation_r165["translation"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_8_span_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "decapitalize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_8_span_1_span_3_Template, 2, 0, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = ctx.$implicit;

        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var settings_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r187["classes"], " no-padding header-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, (settings_r129 == null ? null : settings_r129.highlight[item_r187["type"]]) || (settings_r129 == null ? null : settings_r129.highlight[item_r187["classes"]])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, item_r187["value"]), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conjugation_r165["ternary"].indexOf(item_r187) < conjugation_r165["ternary"].length - 1);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_8_span_1_Template, 4, 10, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conjugation_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r165["ternary"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_span_3_Template, 2, 7, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_4_Template, 2, 1, "h5", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_5_Template, 2, 1, "h5", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h4_7_Template, 3, 1, "h4", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_h5_8_Template, 2, 1, "h5", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conjugation_r165 = ctx.$implicit;

        var settings_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r165["main"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r129.level.breakdown);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r129.level.gloss);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r129.level.translation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r129.level["breakdown-translation"]);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_table_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableviewerConjPanelComponent_div_0_div_17_table_4_th_7_Template, 4, 3, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableviewerConjPanelComponent_div_0_div_17_table_4_tr_9_Template, 9, 5, "tr", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var response_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        var settings_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "ww.language"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r129.level["breakdown-translation"] || settings_r129.level.translation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", response_r159);
      }
    }

    function TableviewerConjPanelComponent_div_0_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableviewerConjPanelComponent_div_0_div_17_div_3_Template, 9, 7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableviewerConjPanelComponent_div_0_div_17_table_4_Template, 10, 5, "table", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var response_r159 = ctx.ngIf;

        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r138.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.isString(response_r159));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r138.isString(response_r159));
      }
    }

    function TableviewerConjPanelComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableviewerConjPanelComponent_div_0_div_1_Template, 24, 33, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableviewerConjPanelComponent_div_0_hr_3_Template, 1, 0, "hr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableviewerConjPanelComponent_div_0_button_4_Template, 4, 6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableviewerConjPanelComponent_div_0_h4_7_Template, 2, 4, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableviewerConjPanelComponent_div_0_h3_10_Template, 2, 3, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableviewerConjPanelComponent_div_0_ng_template_13_Template, 2, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableviewerConjPanelComponent_div_0_div_15_Template, 5, 4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableviewerConjPanelComponent_div_0_div_17_Template, 5, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.show_toolbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.show_toolbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r128.show_toolbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx_r128.response$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx_r128.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx_r128.response$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, ctx_r128.showExplorer$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 16, ctx_r128.chartResponse$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 18, ctx_r128.response$))("ngIfElse", _r135);
      }
    }

    var TableviewerConjPanelComponent = /*#__PURE__*/function () {
      function TableviewerConjPanelComponent(conjugationService, selectionService, http, store, affixService, pronounService, verbService, notificationService) {
        _classCallCheck(this, TableviewerConjPanelComponent);

        this.conjugationService = conjugationService;
        this.selectionService = selectionService;
        this.http = http;
        this.store = store;
        this.affixService = affixService;
        this.pronounService = pronounService;
        this.verbService = verbService;
        this.notificationService = notificationService;
        this.showDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1000);
        this.hideDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](200);
        this.tooltipPosition = "above";
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_3__["ROUTE_ANIMATIONS_ELEMENTS"]; // Non-reactive states

        this.loading = false;
        this.show_toolbar = true; // Reactive conjugation triggers

        this.showExplorer$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.manualConjugation$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.order$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](true);
        this.depth$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](1);
      }

      _createClass(TableviewerConjPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.settings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSettings"]));
          this.conjugationTrigger$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.manualConjugation$, this.showExplorer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skip"])(1)), this.depth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skip"])(1)), this.order$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skip"])(1)));
          this.response$ = this.conjugationTrigger$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (triggered) {
            return _this.showExplorer$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (showExplorer) {
            if (!showExplorer) {
              return _this.conjugationService.conjugateTable(_this.selectionService.selection);
            } else {
              return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }
          }));
          this.chartResponse$ = this.conjugationTrigger$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (triggered) {
            return _this.showExplorer$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (showExplorer) {
            if (showExplorer) {
              var order = "PT";

              if (_this.order$.value) {
                order = "TP";
              }

              return _this.createChart(_this.selectionService.selection, order, _this.depth$.value);
            } else {
              return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }
          }));
          this.response$.subscribe(function (x) {
            return console.log(x);
          });
          this.chartResponse$.subscribe(function (x) {
            return console.log(x);
          });
        }
      }, {
        key: "createChartData",
        value: function createChartData(res, order, depth) {
          var data = [];
          var verbs = [];
          var chartOption = {
            tooltip: {
              show: false,
              trigger: "item",
              triggerOn: "mousemove"
            },
            toolbox: {
              feature: {
                saveAsImage: {
                  title: "save",
                  show: false
                }
              }
            },
            legend: {
              top: "2%",
              left: "3%",
              orient: "vertical",
              data: [],
              borderColor: "#c23531"
            },
            series: []
          };
          var node;

          var _iterator = _createForOfIteratorHelper(res),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var conjugation = _step.value;
              conjugation = conjugation.values;
              var v = conjugation.root["tag"];
              var t = this.affixService.getAffOption(conjugation.affopt)["gloss"];
              var vb = this.verbService.getVerb(v);
              var p = void 0;

              if (vb["thematic_relation"] === "red") {
                p = this.pronounService.getPronoun(conjugation.pronoun["agent"])["gloss"];
              } else if (vb["thematic_relation"] === "blue") {
                p = this.pronounService.getPronoun(conjugation.pronoun["patient"])["gloss"];
              } else {
                p = this.pronounService.getPronoun(conjugation.pronoun["agent"])["gloss"] + " > " + this.pronounService.getPronoun(conjugation.pronoun["patient"])["obj_gloss"];
              }

              var val = this.returnValue(conjugation);

              if (order === "TP") {
                node = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["merge"])(node, _defineProperty({}, v, _defineProperty({}, t, _defineProperty({}, p, val))));
              } else {
                node = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["merge"])(node, _defineProperty({}, v, _defineProperty({}, p, _defineProperty({}, t, val))));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          for (var _i = 0, _Object$keys = Object.keys(node); _i < _Object$keys.length; _i++) {
            var verb = _Object$keys[_i];
            verbs.push(verb);
            var nv = {
              name: verb,
              children: []
            };

            for (var _i2 = 0, _Object$keys2 = Object.keys(node[verb]); _i2 < _Object$keys2.length; _i2++) {
              var second = _Object$keys2[_i2];
              var ns = {
                name: second,
                children: []
              };

              for (var _i3 = 0, _Object$keys3 = Object.keys(node[verb][second]); _i3 < _Object$keys3.length; _i3++) {
                var third = _Object$keys3[_i3];
                var nt = {
                  name: third,
                  children: [{
                    name: node[verb][second][third]
                  }]
                };
                ns["children"].push(nt);
              }

              nv["children"].push(ns);
            }

            data.push(nv);
          }

          var top = 0;
          var initialTreeDepth = 0;

          if (verbs.length < 2) {
            initialTreeDepth = depth;
          } else {
            verbs.forEach(function (v) {
              chartOption.legend["data"].push(v);
            });
          }

          for (var j = 0; j < data.length; j++) {
            top += 20;
            var ser = {
              type: "tree",
              name: data[j]["name"],
              data: [data[j]],
              top: top.toString() + "%",
              left: "12%",
              bottom: "25%",
              right: "20%",
              symbolSize: 7,
              initialTreeDepth: initialTreeDepth,
              label: {
                normal: {
                  position: "bottom",
                  verticalAlign: "middle",
                  align: "middle"
                }
              },
              leaves: {
                label: {
                  normal: {
                    position: "top",
                    verticalAlign: "middle",
                    align: "middle"
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

          return chartOption;
        }
      }, {
        key: "returnValue",
        value: function returnValue(conjugation) {
          var morphemes = [conjugation.root, conjugation.pronoun].concat(conjugation.affixes);
          morphemes = morphemes.sort(function (a, b) {
            return a.position - b.position;
          });
          return morphemes.map(function (m) {
            return m.value;
          }).join("");
        }
      }, {
        key: "createChart",
        value: function createChart(tableargs, order, depth) {
          var _this2 = this;

          return this.conjugationService.conjugate(tableargs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return _this2.createChartData(res, order, depth);
          }));
        }
      }, {
        key: "isString",
        value: function isString(val) {
          return typeof val === "string";
        }
      }, {
        key: "toggleExplorer",
        value: function toggleExplorer() {
          this.showExplorer$.next(!this.showExplorer$.value);
        }
      }, {
        key: "download",
        value: function download() {
          var _this3 = this;

          var query_args = this.conjugationService.createRequestUrl(this.selectionService.selection).toString();
          var query_args_docx = this.conjugationService.createRequestUrl(this.selectionService.selection, [{
            param: "docx",
            value: "true"
          }]).toString();
          var url = this.conjugationService.path + "?" + query_args;
          var docx_url = this.conjugationService.path + "?" + query_args_docx;
          this.http.get(url).subscribe(function (data) {
            console.log(data);
            window.location.href = docx_url;

            _this3.updateToast(data);
          }, function (error) {
            console.log(error);

            _this3.updateToast(false, error.status);
          });
        }
      }, {
        key: "updateToast",
        value: function updateToast(success) {
          var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

          if (success) {
            this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_9__["marker"])("ww.tableviewer.notifications.download.success"), {}, "success");
          } else {
            this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_9__["marker"])("ww.tableviewer.notifications.download.error"), {}, "error");
          }
        }
      }]);

      return TableviewerConjPanelComponent;
    }();

    TableviewerConjPanelComponent.ɵfac = function TableviewerConjPanelComponent_Factory(t) {
      return new (t || TableviewerConjPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["ConjugationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["TableviewerSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["AffixService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["PronounService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["VerbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]));
    };

    TableviewerConjPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableviewerConjPanelComponent,
      selectors: [["ww-tableviewer-conj-panel"]],
      viewQuery: function TableviewerConjPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.explorer = _t.first);
        }
      },
      decls: 2,
      vars: 3,
      consts: [["class", "panel", 4, "ngIf"], [1, "panel"], ["class", "panel__header panel__header--tableview", 4, "ngIf"], [1, "panel__underline", "height-5"], [4, "ngIf"], ["class", "float-right ui-button toolbar__tool", "mat-icon-button", "", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click", 4, "ngIf"], ["class", "desktop-only center-text margin-top-100 padding-20", 3, "ngClass", "innerHTML", 4, "ngIf"], ["class", "mobile-only padding-15 center-text", 3, "innerHTML", 4, "ngIf"], ["spinner", ""], ["class", "full-width full-height", 3, "hidden", 4, "ngIf"], [3, "hidden", 4, "ngIf", "ngIfElse"], [1, "panel__header", "panel__header--tableview"], [1, "panel__title"], [1, "panel__toolbar", "toolbar"], ["mat-raised-button", "", 1, "conjugate", "mat-accent", 3, "click"], ["class", "toolbar__tool ui-button", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "change", 4, "ngIf"], ["class", "toolbar__tool ui-button", "mat-icon-button", "", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "ui-button", "toolbar__tool", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click"], ["aria-label", "Conjugate", 4, "ngIf"], ["class", "ui-button toolbar__tool", "mat-icon-button", "", "matTooltip", "'ww.tableviewer.conj.download-tip' | translate", 3, "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click", 4, "ngIf"], ["aria-label", "Hide toolbar"], [1, "toolbar__tool", "ui-button", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "change"], ["value", "0"], ["selected", "", "value", "1"], ["value", "2"], ["value", "3"], ["mat-icon-button", "", 1, "toolbar__tool", "ui-button", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click"], ["aria-label", "Switch pronoun and temp"], ["aria-label", "Conjugate"], ["mat-icon-button", "", "matTooltip", "'ww.tableviewer.conj.download-tip' | translate", 1, "ui-button", "toolbar__tool", 3, "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click"], ["aria-label", "Download conjugations"], ["mat-icon-button", "", 1, "float-right", "ui-button", "toolbar__tool", 3, "matTooltip", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipPosition", "click"], ["aria-label", "Show toolbar"], [1, "desktop-only", "center-text", "margin-top-100", "padding-20", 3, "ngClass", "innerHTML"], [1, "mobile-only", "padding-15", "center-text", 3, "innerHTML"], [1, "centered", "margin-top-100"], [1, "full-width", "full-height", 3, "hidden"], ["echarts", "", 1, "demo-chart", 3, "options"], ["explorer", ""], [3, "hidden"], ["id", "table-container", 1, "rel"], ["class", "error__container", 4, "ngIf"], ["class", "full-width abs", 4, "ngIf"], [1, "error__container"], [1, "error__header"], [1, "error__message"], [1, "full-width", "abs"], [1, "center-text"], ["class", "b--bottom", 4, "ngFor", "ngForOf"], [1, "b--bottom"], ["id", "main"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], ["id", "main", 4, "ngIf"], ["id", "main", "class", "no-padding header-text", 4, "ngIf"], [3, "ngClass"], ["class", "gloss-dividers header-text", 4, "ngIf"], [1, "gloss-dividers", "header-text"], ["id", "main", 1, "no-padding", "header-text"], [1, "translation"]],
      template: function TableviewerConjPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableviewerConjPanelComponent_div_0_Template, 19, 20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.settings$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"], _shared_pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_17__["DecapitalizePipe"]],
      styles: ["button.conjugate[_ngcontent-%COMP%] {\n  line-height: 1.875em !important;\n  padding: 0 1em !important;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLWNvbmotcGFuZWwvdGFibGV2aWV3ZXItY29uai1wYW5lbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvdGFibGV2aWV3ZXIvdGFibGV2aWV3ZXItY29uai1wYW5lbC90YWJsZXZpZXdlci1jb25qLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy90YWJsZXZpZXdlci90YWJsZXZpZXdlci1jb25qLXBhbmVsL3RhYmxldmlld2VyLWNvbmotcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uY29uanVnYXRlIHtcbiAgbGluZS1oZWlnaHQ6IDEuODc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAxZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4iLCJidXR0b24uY29uanVnYXRlIHtcbiAgbGluZS1oZWlnaHQ6IDEuODc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAxZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerConjPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ww-tableviewer-conj-panel",
          templateUrl: "./tableviewer-conj-panel.component.html",
          styleUrls: ["./tableviewer-conj-panel.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_3__["ConjugationService"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_3__["TableviewerSelectionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_3__["AffixService"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_3__["PronounService"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_3__["VerbService"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
        }];
      }, {
        explorer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["explorer"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: TableviewerPersPanelComponent */

  /***/
  function srcAppPagesTableviewerTableviewerPersPanelTableviewerPersPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerPersPanelComponent", function () {
      return TableviewerPersPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    function TableviewerPersPanelComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", ctx_r195.agent.value.length - 1, " ", (ctx_r195.agent.value == null ? null : ctx_r195.agent.value.length) === 2 ? "other" : "others", ") ");
      }
    }

    function TableviewerPersPanelComponent_mat_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pn_r199 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pn_r199);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pn_r199.gloss);
      }
    }

    function TableviewerPersPanelComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", ctx_r197.patient.value.length - 1, " ", (ctx_r197.patient.value == null ? null : ctx_r197.patient.value.length) === 2 ? "other" : "others", ") ");
      }
    }

    function TableviewerPersPanelComponent_mat_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pn_r200 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pn_r200);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pn_r200.gloss);
      }
    }

    var TableviewerPersPanelComponent = /*#__PURE__*/function () {
      function TableviewerPersPanelComponent(pnService, selectionService) {
        _classCallCheck(this, TableviewerPersPanelComponent);

        this.pnService = pnService;
        this.selectionService = selectionService;
        this.agent = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.patient = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.possiblePronouns$ = this.pnService.pronouns$;
      }

      _createClass(TableviewerPersPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // TODO: Redux
          this.agent.valueChanges.subscribe(function (pns) {
            return _this4.pushAgChanges(pns.map(function (pn) {
              return pn.tag;
            }));
          }); // TODO: Redux

          this.patient.valueChanges.subscribe(function (pns) {
            return _this4.pushPatChanges(pns.map(function (pn) {
              return pn.tag;
            }));
          });
        } // TODO: Redux

      }, {
        key: "pushAgChanges",
        value: function pushAgChanges(c) {
          this.selectionService.updateAgents(c);
        } // TODO: Redux

      }, {
        key: "pushPatChanges",
        value: function pushPatChanges(c) {
          this.selectionService.updatePatients(c);
        } // TODO: Redux

      }, {
        key: "filterTrue",
        value: function filterTrue(c) {
          return Object.keys(c).filter(function (k) {
            return c[k];
          });
        }
      }]);

      return TableviewerPersPanelComponent;
    }();

    TableviewerPersPanelComponent.ɵfac = function TableviewerPersPanelComponent_Factory(t) {
      return new (t || TableviewerPersPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["PronounService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["TableviewerSelectionService"]));
    };

    TableviewerPersPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableviewerPersPanelComponent,
      selectors: [["ww-tableviewer-pers-panel"]],
      decls: 25,
      vars: 21,
      consts: [[1, "panel"], [1, "panel__header--tableview", "panel__header"], [1, "panel__title"], [1, "control"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]],
      template: function TableviewerPersPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableviewerPersPanelComponent_span_12_Template, 2, 2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableviewerPersPanelComponent_mat_option_13_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableviewerPersPanelComponent_span_22_Template, 2, 2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableviewerPersPanelComponent_mat_option_23_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "ww.tableviewer.pers.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 13, "ww.tableviewer.pers.select-agent"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.agent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.agent.value ? ctx.agent == null ? null : ctx.agent.value[0] == null ? null : ctx.agent.value[0].gloss : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.agent.value == null ? null : ctx.agent.value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, ctx.possiblePronouns$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 17, "ww.tableviewer.pers.select-patient"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.patient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.patient.value ? ctx.patient == null ? null : ctx.patient.value[0] == null ? null : ctx.patient.value[0].gloss : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.patient.value == null ? null : ctx.patient.value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, ctx.possiblePronouns$));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".control[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  margin-top: 5px;\n}\n\nbutton.deselect[_ngcontent-%COMP%] {\n  padding: 0 1em !important;\n  height: 20px;\n  margin: 16px 8px;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXBlcnMtcGFuZWwvdGFibGV2aWV3ZXItcGVycy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvdGFibGV2aWV3ZXIvdGFibGV2aWV3ZXItcGVycy1wYW5lbC90YWJsZXZpZXdlci1wZXJzLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXBlcnMtcGFuZWwvdGFibGV2aWV3ZXItcGVycy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sIHtcbiAgLy8gd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuYnV0dG9uLmRlc2VsZWN0IHtcbiAgcGFkZGluZzogMCAxZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDE2cHggOHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbiIsIi5jb250cm9sIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuYnV0dG9uLmRlc2VsZWN0IHtcbiAgcGFkZGluZzogMCAxZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDE2cHggOHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerPersPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ww-tableviewer-pers-panel",
          templateUrl: "./tableviewer-pers-panel.component.html",
          styleUrls: ["./tableviewer-pers-panel.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["PronounService"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["TableviewerSelectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tableviewer/tableviewer-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TableviewerRoutingModule */

  /***/
  function srcAppPagesTableviewerTableviewerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerRoutingModule", function () {
      return TableviewerRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tableviewer/tableviewer.component */
    "./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts");

    var routes = [{
      path: "",
      component: _tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_2__["TableviewerComponent"],
      data: {
        title: "ww.menu.tableviewer"
      }
    }];

    var TableviewerRoutingModule = function TableviewerRoutingModule() {
      _classCallCheck(this, TableviewerRoutingModule);
    };

    TableviewerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TableviewerRoutingModule
    });
    TableviewerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TableviewerRoutingModule_Factory(t) {
        return new (t || TableviewerRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableviewerRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: TableviewerTempPanelComponent */

  /***/
  function srcAppPagesTableviewerTableviewerTempPanelTableviewerTempPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerTempPanelComponent", function () {
      return TableviewerTempPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    function TableviewerTempPanelComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", (ctx_r201.times.value == null ? null : ctx_r201.times.value.length) - 1, " ", (ctx_r201.times.value == null ? null : ctx_r201.times.value.length) === 2 ? "other" : "others", ") ");
      }
    }

    function TableviewerTempPanelComponent_mat_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r203 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", time_r203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time_r203.gloss);
      }
    }

    var TableviewerTempPanelComponent = /*#__PURE__*/function () {
      function TableviewerTempPanelComponent(affixService, selectionService) {
        _classCallCheck(this, TableviewerTempPanelComponent);

        this.affixService = affixService;
        this.selectionService = selectionService;
        this.times = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.possibleTimes$ = this.affixService.affoptions$;
      }

      _createClass(TableviewerTempPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          // TODO: Redux
          this.times.valueChanges.subscribe(function (affopts) {
            return _this5.pushChanges(affopts.map(function (affopt) {
              return affopt.tag;
            }));
          });
        } // TODO: Redux

      }, {
        key: "pushChanges",
        value: function pushChanges(c) {
          this.selectionService.updateAffOptions(c);
        } // TODO: Redux

      }, {
        key: "filterTrue",
        value: function filterTrue(c) {
          return Object.keys(c).filter(function (k) {
            return c[k];
          });
        }
      }]);

      return TableviewerTempPanelComponent;
    }();

    TableviewerTempPanelComponent.ɵfac = function TableviewerTempPanelComponent_Factory(t) {
      return new (t || TableviewerTempPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["AffixService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["TableviewerSelectionService"]));
    };

    TableviewerTempPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableviewerTempPanelComponent,
      selectors: [["ww-tableviewer-temp-panel"]],
      decls: 15,
      vars: 12,
      consts: [[1, "panel"], [1, "panel__header", "panel__header--tableview"], [1, "panel__title"], [1, "control"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]],
      template: function TableviewerTempPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableviewerTempPanelComponent_span_12_Template, 2, 2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableviewerTempPanelComponent_mat_option_13_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "ww.tableviewer.temp.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "ww.tableviewer.temp.select"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.times);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.times.value == null ? null : ctx.times.value.length) ? ctx.times.value[0].gloss : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.times.value == null ? null : ctx.times.value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx.possibleTimes$));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".control[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: 25px;\n  margin-top: -10px;\n}\n\n.panel[_ngcontent-%COMP%] {\n  top: 0;\n  position: absolute;\n}\n\nbutton.deselect[_ngcontent-%COMP%] {\n  padding: 0 1em !important;\n  height: 20px;\n  margin: 16px 8px;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXRlbXAtcGFuZWwvdGFibGV2aWV3ZXItdGVtcC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvdGFibGV2aWV3ZXIvdGFibGV2aWV3ZXItdGVtcC1wYW5lbC90YWJsZXZpZXdlci10ZW1wLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLE1BQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy90YWJsZXZpZXdlci90YWJsZXZpZXdlci10ZW1wLXBhbmVsL3RhYmxldmlld2VyLXRlbXAtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLnBhbmVsIHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmJ1dHRvbi5kZXNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMWVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxNnB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4iLCIuY29udHJvbCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLnBhbmVsIHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmJ1dHRvbi5kZXNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMWVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxNnB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerTempPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ww-tableviewer-temp-panel",
          templateUrl: "./tableviewer-temp-panel.component.html",
          styleUrls: ["./tableviewer-temp-panel.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["AffixService"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["TableviewerSelectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: TableviewerVerbPanelComponent */

  /***/
  function srcAppPagesTableviewerTableviewerVerbPanelTableviewerVerbPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerVerbPanelComponent", function () {
      return TableviewerVerbPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    function TableviewerVerbPanelComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableviewerVerbPanelComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r207.remove();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ww.tableviewer.verb.deselect"), " ");
      }
    }

    function TableviewerVerbPanelComponent_mat_list_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r210 = ctx.$implicit;

        var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r209.checkboxGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r209.selectionService.selection.root.indexOf(value_r210.tag) < 0 && ctx_r209.selectionService.selection.root.length >= 3)("formControlName", value_r210.tag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", value_r210.gloss + " - ", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "color-" + value_r210.thematic_relation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r210.display);
      }
    }

    function TableviewerVerbPanelComponent_mat_list_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableviewerVerbPanelComponent_mat_list_12_div_1_Template, 5, 6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r205.viewableVerbs$));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        value: a0
      };
    };

    function TableviewerVerbPanelComponent_p_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, "ww.tableviewer.verb.no-matching-verb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r206.searchField.value)));
      }
    }

    var TableviewerVerbPanelComponent = /*#__PURE__*/function () {
      function TableviewerVerbPanelComponent(verbService, fb, selectionService) {
        var _this6 = this;

        _classCallCheck(this, TableviewerVerbPanelComponent);

        this.verbService = verbService;
        this.fb = fb;
        this.selectionService = selectionService;
        this.verbs$ = this.verbService.verbs$;
        this.checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.checkedValues = [];
        this.increment = 1000;
        this.bottomLimit = 0;
        this.selection = []; // subscribe to search input

        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.verbForm = this.fb.group({
          search: this.searchField
        });
        this.viewableVerbs$ = this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) {
          // Find matches
          var matches = _this6.getEntriesFrom(term); // Add controls


          matches.forEach(function (value) {
            _this6.checkboxGroup.addControl(value["tag"], new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this6.checkedValues.indexOf(value["tag"]) !== -1));
          }); // Return matches

          return matches;
        })); // TODO: Redux
        // create selection observable

        this.checkboxGroup.valueChanges.subscribe(function (c) {
          c = _this6.filterTrue(c);

          if (c) {
            _this6.pushChanges(c);
          }
        });
      }

      _createClass(TableviewerVerbPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // TODO: Redux

      }, {
        key: "pushChanges",
        value: function pushChanges(c) {
          this.selectionService.updateVerbs(c);
        } // TODO: Redux

      }, {
        key: "filterTrue",
        value: function filterTrue(c) {
          return Object.keys(c).filter(function (k) {
            return c[k];
          });
        }
      }, {
        key: "getEntriesFrom",
        value: function getEntriesFrom(term) {
          var _this7 = this;

          var vbs = this.verbService.verbs.filter(function (v) {
            return _this7.filterEntries(v, term);
          }).slice(this.bottomLimit, this.increment);
          return vbs;
        }
      }, {
        key: "filterEntries",
        value: function filterEntries(v, term) {
          return v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 || v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1;
        }
      }, {
        key: "remove",
        value: function remove() {
          var _this8 = this;

          Object.keys(this.checkboxGroup.controls).forEach(function (k) {
            return _this8.checkboxGroup.controls[k].setValue(false);
          });
        }
      }]);

      return TableviewerVerbPanelComponent;
    }();

    TableviewerVerbPanelComponent.ɵfac = function TableviewerVerbPanelComponent_Factory(t) {
      return new (t || TableviewerVerbPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["VerbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["TableviewerSelectionService"]));
    };

    TableviewerVerbPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableviewerVerbPanelComponent,
      selectors: [["ww-tableviewer-verb-panel"]],
      decls: 15,
      vars: 12,
      consts: [[1, "panel"], [1, "panel__header", "panel__header--tableview"], [1, "panel__title"], ["class", "mat-accent conjugate deselect", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "panel__content"], [1, "control", 3, "formGroup"], ["autocomplete", "off", "type", "text", "aria-label", "Number", "matInput", "", "formControlName", "search", 3, "placeholder"], ["class", "panel__list", "role", "list", 4, "ngIf"], ["class", "unfound", 4, "ngIf"], ["mat-raised-button", "", 1, "mat-accent", "conjugate", "deselect", 3, "click"], ["role", "list", 1, "panel__list"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "margin-5", 3, "disabled", "formControlName"], [3, "ngClass"], [1, "unfound"]],
      template: function TableviewerVerbPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableviewerVerbPanelComponent_button_5_Template, 3, 3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableviewerVerbPanelComponent_mat_list_12_Template, 3, 3, "mat-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableviewerVerbPanelComponent_p_13_Template, 4, 6, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_5_0 = null;
          var currVal_5 = ctx.searchField.value !== "" && ctx.searchField.value !== null && ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx.viewableVerbs$)) == null ? null : tmp_5_0.length) === 0;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "ww.tableviewer.verb.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectionService.selection.root.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.verbForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "ww.tableviewer.verb.placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchField.value !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_5);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".panel__content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n}\n\n.control[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: 25px;\n  margin-top: 10px;\n}\n\n.panel__list[_ngcontent-%COMP%] {\n  max-height: 8em;\n  overflow-y: auto;\n  padding: 5px;\n  overflow-x: hidden;\n}\n\nbutton.deselect[_ngcontent-%COMP%] {\n  padding: 0 1em !important;\n  height: 20px;\n  margin: 16px 8px;\n  line-height: 1;\n}\n\n.unfound[_ngcontent-%COMP%] {\n  border: 2px solid #03a9f4;\n  border-radius: 5px;\n  padding: 10px;\n  margin: -5px 30px 0 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXZlcmItcGFuZWwvdGFibGV2aWV3ZXItdmVyYi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvdGFibGV2aWV3ZXIvdGFibGV2aWV3ZXItdmVyYi1wYW5lbC90YWJsZXZpZXdlci12ZXJiLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esd0JBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXZlcmItcGFuZWwvdGFibGV2aWV3ZXItdmVyYi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbF9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xufVxuXG4uY29udHJvbCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGFuZWxfX2xpc3Qge1xuICBtYXgtaGVpZ2h0OiA4ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5idXR0b24uZGVzZWxlY3Qge1xuICBwYWRkaW5nOiAwIDFlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMTZweCA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4udW5mb3VuZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwM2E5ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAtNXB4IDMwcHggMCAzMHB4O1xufVxuIiwiLnBhbmVsX19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG59XG5cbi5jb250cm9sIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wYW5lbF9fbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDhlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmJ1dHRvbi5kZXNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMWVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxNnB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi51bmZvdW5kIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAzYTlmNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IC01cHggMzBweCAwIDMwcHg7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerVerbPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ww-tableviewer-verb-panel",
          templateUrl: "./tableviewer-verb-panel.component.html",
          styleUrls: ["./tableviewer-verb-panel.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["VerbService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["TableviewerSelectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tableviewer/tableviewer.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer.module.ts ***!
    \*********************************************************/

  /*! exports provided: TableviewerModule */

  /***/
  function srcAppPagesTableviewerTableviewerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerModule", function () {
      return TableviewerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tableviewer/tableviewer.component */
    "./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts");
    /* harmony import */


    var _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tableviewer-conj-panel/tableviewer-conj-panel.component */
    "./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts");
    /* harmony import */


    var _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tableviewer-pers-panel/tableviewer-pers-panel.component */
    "./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts");
    /* harmony import */


    var _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tableviewer-temp-panel/tableviewer-temp-panel.component */
    "./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts");
    /* harmony import */


    var _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tableviewer-verb-panel/tableviewer-verb-panel.component */
    "./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _tableviewer_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tableviewer-routing.module */
    "./src/app/pages/tableviewer/tableviewer-routing.module.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-echarts */
    "../../node_modules/ngx-echarts/fesm2015/ngx-echarts.js");

    var TableviewerModule = function TableviewerModule() {
      _classCallCheck(this, TableviewerModule);
    };

    TableviewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TableviewerModule
    });
    TableviewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TableviewerModule_Factory(t) {
        return new (t || TableviewerModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _tableviewer_routing_module__WEBPACK_IMPORTED_MODULE_7__["TableviewerRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableviewerModule, {
        declarations: [_tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_1__["TableviewerComponent"], _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_2__["TableviewerConjPanelComponent"], _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_3__["TableviewerPersPanelComponent"], _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_4__["TableviewerTempPanelComponent"], _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_5__["TableviewerVerbPanelComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _tableviewer_routing_module__WEBPACK_IMPORTED_MODULE_7__["TableviewerRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_1__["TableviewerComponent"], _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_2__["TableviewerConjPanelComponent"], _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_3__["TableviewerPersPanelComponent"], _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_4__["TableviewerTempPanelComponent"], _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_5__["TableviewerVerbPanelComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _tableviewer_routing_module__WEBPACK_IMPORTED_MODULE_7__["TableviewerRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts ***!
    \************************************************************************/

  /*! exports provided: TableviewerComponent */

  /***/
  function srcAppPagesTableviewerTableviewerTableviewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableviewerComponent", function () {
      return TableviewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/fesm2015/grid-list.js");
    /* harmony import */


    var _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tableviewer-verb-panel/tableviewer-verb-panel.component */
    "./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts");
    /* harmony import */


    var _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tableviewer-conj-panel/tableviewer-conj-panel.component */
    "./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts");
    /* harmony import */


    var _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tableviewer-pers-panel/tableviewer-pers-panel.component */
    "./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts");
    /* harmony import */


    var _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tableviewer-temp-panel/tableviewer-temp-panel.component */
    "./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts");

    var _c0 = ["conjPanel"]; // Imports
    // import { TableviewerConjPanelComponent } from '../tableviewer-conj-panel/tableviewer-conj-panel.component';

    var TableviewerComponent = /*#__PURE__*/function () {
      // @HostListener('document:keyup', ['$event'])
      // handleKeyboardEvent(event: KeyboardEvent) {
      //   if (event.keyCode === 13) {
      //     this.conjPanel.conjugate();
      //   }
      // }
      function TableviewerComponent() {
        _classCallCheck(this, TableviewerComponent);

        this.breakpoint = 1100;
        this.useTestAPI = false;
      }

      _createClass(TableviewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = window.innerWidth <= this.breakpoint ? 3 : 12;
          this.rows = window.innerWidth <= this.breakpoint ? 1 : 5;
          this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 9;
          this.conjrowspan = window.innerWidth <= this.breakpoint ? 3 : 5;
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.cols = event.target.innerWidth <= this.breakpoint ? 3 : 12;
          this.rows = window.innerWidth <= this.breakpoint ? 1 : 5;
          this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 9;
          this.conjrowspan = window.innerWidth <= this.breakpoint ? 3 : 5;
        }
      }, {
        key: "conjugate",
        value: function conjugate() {
          this.conjPanel.conjugate();
        }
      }]);

      return TableviewerComponent;
    }();

    TableviewerComponent.ɵfac = function TableviewerComponent_Factory(t) {
      return new (t || TableviewerComponent)();
    };

    TableviewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableviewerComponent,
      selectors: [["ww-tableviewer"]],
      viewQuery: function TableviewerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.conjPanel = _t.first);
        }
      },
      decls: 11,
      vars: 9,
      consts: [[1, "container", "page__content", "vwidth-90", "centered", "margin-bottom-50"], ["rowHeight", "8em", 3, "cols", "resize"], [1, "br--tl", "b--left", "b--top", "b--bottom", "bg-white", 3, "colspan", "rowspan"], [1, "custom-scroll", "full-width", "full-height"], [1, "b--top", "b--left", "b--right", "br--tr", "br--br", "b--bottom", "bg-white", 3, "colspan", "rowspan"], ["conjPanel", ""], [1, "b--left", "bg-white", 3, "colspan", "rowspan"], [1, "br--bl", "b--top", "b--left", "b--bottom", "bg-white", 3, "colspan", "rowspan"], [1, "custom-scroll", "full-width"]],
      template: function TableviewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function TableviewerComponent_Template_mat_grid_list_resize_1_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ww-tableviewer-verb-panel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ww-tableviewer-conj-panel", 3, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ww-tableviewer-pers-panel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ww-tableviewer-temp-panel", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.conjcolspan)("rowspan", ctx.conjrowspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 1);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_2__["TableviewerVerbPanelComponent"], _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_3__["TableviewerConjPanelComponent"], _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_4__["TableviewerPersPanelComponent"], _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__["TableviewerTempPanelComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyL3RhYmxldmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableviewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ww-tableviewer",
          templateUrl: "./tableviewer.component.html",
          styleUrls: ["./tableviewer.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        conjPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["conjPanel"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-tableviewer-tableviewer-module-es5.js.map