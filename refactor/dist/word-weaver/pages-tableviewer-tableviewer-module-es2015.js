(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-tableviewer-tableviewer-module"],
  {
    /***/ "./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts":
      /*!**********************************************************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: TableviewerConjPanelComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerConjPanelComponent",
          function() {
            return TableviewerConjPanelComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../core/core.module */ "./src/app/core/core.module.ts"
        );
        /* harmony import */ var _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../tableviewer-selection.service */ "./src/app/pages/tableviewer/tableviewer-selection.service.ts"
        );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ngx-toastr */ "../../node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
        );
        /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! lodash */ "../../node_modules/lodash/lodash.js"
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../core/settings/settings.selectors */ "./src/app/core/settings/settings.selectors.ts"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js"
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js"
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );
        /* harmony import */ var _shared_pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/pipes/decapitalize/decapitalize */ "./src/app/shared/pipes/decapitalize/decapitalize.ts"
        );

        const _c0 = ["explorer"];
        function TableviewerConjPanelComponent_div_0_div_1_select_6_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "select",
              22
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngModelChange",
              function TableviewerConjPanelComponent_div_0_div_1_select_6_Template_select_ngModelChange_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r45
                );
                const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](3);
                return (ctx_r44.depth = $event);
              }
            )(
              "ngModelChange",
              function TableviewerConjPanelComponent_div_0_div_1_select_6_Template_select_ngModelChange_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r45
                );
                const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](3);
                return ctx_r46.conjugate();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "option",
              23
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "option",
              24
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "option",
              25
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "option",
              26
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngModel",
              ctx_r39.depth
            )("matTooltipShowDelay", ctx_r39.showDelay.value)(
              "matTooltipHideDelay",
              ctx_r39.hideDelay.value
            )("matTooltipPosition", ctx_r39.tooltipPosition);
          }
        }
        function TableviewerConjPanelComponent_div_0_div_1_button_7_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              27
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerConjPanelComponent_div_0_div_1_button_7_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r48
                );
                const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](3);
                ctx_r47.order = !ctx_r47.order;
                return ctx_r47.conjugate();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              28
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cached");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matTooltipShowDelay",
              ctx_r40.showDelay.value
            )("matTooltipHideDelay", ctx_r40.hideDelay.value)(
              "matTooltipPosition",
              ctx_r40.tooltipPosition
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_1_mat_icon_9_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              29
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_div_1_mat_icon_10_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              29
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grid_on");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_div_1_button_11_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              30
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerConjPanelComponent_div_0_div_1_button_11_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r50
                );
                const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](3);
                return ctx_r49.download();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              31
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "get_app");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matTooltipShowDelay",
              ctx_r43.showDelay.value
            )("matTooltipHideDelay", ctx_r43.hideDelay.value)(
              "matTooltipPosition",
              ctx_r43.tooltipPosition
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_1_Template(rf, ctx) {
          if (rf & 1) {
            const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h3",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              "Conjugation toolbar"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "div",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "button",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerConjPanelComponent_div_0_div_1_Template_button_click_4_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r52
                );
                const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](2);
                return ctx_r51.conjugate();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              5,
              " Conjugate "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              6,
              TableviewerConjPanelComponent_div_0_div_1_select_6_Template,
              9,
              4,
              "select",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              7,
              TableviewerConjPanelComponent_div_0_div_1_button_7_Template,
              3,
              3,
              "button",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              8,
              "button",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerConjPanelComponent_div_0_div_1_Template_button_click_8_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r52
                );
                const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](2);
                return ctx_r53.toggleExplorer();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              9,
              TableviewerConjPanelComponent_div_0_div_1_mat_icon_9_Template,
              2,
              0,
              "mat-icon",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              10,
              TableviewerConjPanelComponent_div_0_div_1_mat_icon_10_Template,
              2,
              0,
              "mat-icon",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              11,
              TableviewerConjPanelComponent_div_0_div_1_button_11_Template,
              3,
              3,
              "button",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              12,
              "button",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerConjPanelComponent_div_0_div_1_Template_button_click_12_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r52
                );
                const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](2);
                return (ctx_r54.show_toolbar = !ctx_r54.show_toolbar);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              13,
              "mat-icon",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r30.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r30.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matTooltipShowDelay",
              ctx_r30.showDelay.value
            )("matTooltipHideDelay", ctx_r30.hideDelay.value)(
              "matTooltipPosition",
              ctx_r30.tooltipPosition
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r30.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r30.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r30.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matTooltipShowDelay",
              ctx_r30.showDelay.value
            )("matTooltipHideDelay", ctx_r30.hideDelay.value)(
              "matTooltipPosition",
              ctx_r30.tooltipPosition
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_hr_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
          }
        }
        function TableviewerConjPanelComponent_div_0_button_4_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              32
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerConjPanelComponent_div_0_button_4_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r56
                );
                const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ](2);
                return (ctx_r55.show_toolbar = !ctx_r55.show_toolbar);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              33
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              "add_circle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "matTooltipShowDelay",
              ctx_r32.showDelay.value
            )("matTooltipHideDelay", ctx_r32.hideDelay.value)(
              "matTooltipPosition",
              ctx_r32.tooltipPosition
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_h3_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "h3",
              34
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please select one or more boxes from the "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "b"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Person");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "b"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              8,
              "b"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Verb");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              10,
              " panels and then press the enter key or conjugate button to see your selection "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_h3_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "h3",
              35
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please select one or more boxes from the 'Person', 'Time' and 'Verb' panels. "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              3,
              " and then press the button above to conjugate! "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_ng_template_9_ng_container_0_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "mat-spinner",
              36
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
        }
        function TableviewerConjPanelComponent_div_0_ng_template_9_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              0,
              TableviewerConjPanelComponent_div_0_ng_template_9_ng_container_0_Template,
              2,
              0,
              "ng-container",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }
          if (rf & 2) {
            const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r36.loading &&
                !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  1,
                  1,
                  ctx_r36.response$
                )
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_11_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
          }
        }
        function TableviewerConjPanelComponent_div_0_div_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              37
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_11_div_1_Template,
              1,
              0,
              "div",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r37.chart_response
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              42
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h3",
              43
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Error ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "p",
              44
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "p",
              44
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              6,
              " Please remove some of the checked options described above and try again. "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const response_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]().ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              response_r60
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_th_7_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "th"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h3"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "English");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        const _c1 = function(a0) {
          return { highlight: a0 };
        };
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_span_3_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              53
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const item_r72 = ctx.$implicit;
            const settings_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](5).ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵclassMapInterpolate1"
            ]("", item_r72["classes"], " no-padding header-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                5,
                _c1,
                (settings_r29 == null
                  ? null
                  : settings_r29.highlight[item_r72["type"]]) ||
                  (settings_r29 == null
                    ? null
                    : settings_r29.highlight[item_r72["classes"]])
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              item_r72["value"]
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_4_span_1_span_2_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              55
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_4_span_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              53
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_4_span_1_span_2_Template,
              2,
              0,
              "span",
              54
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const item_r75 = ctx.$implicit;
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2).$implicit;
            const settings_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](4).ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵclassMapInterpolate1"
            ]("", item_r75["classes"], " no-padding header-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                6,
                _c1,
                (settings_r29 == null
                  ? null
                  : settings_r29.highlight[item_r75["type"]]) ||
                  (settings_r29 == null
                    ? null
                    : settings_r29.highlight[item_r75["classes"]])
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              item_r75["value"],
              " "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              conjugation_r66["main"].indexOf(item_r75) <
                conjugation_r66["main"].length - 1
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_4_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "h5",
              49
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_4_span_1_Template,
              3,
              8,
              "span",
              50
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              conjugation_r66["main"]
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_5_span_1_span_3_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              55
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_5_span_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              53
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              2,
              "decapitalize"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_5_span_1_span_3_Template,
              2,
              0,
              "span",
              54
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const item_r81 = ctx.$implicit;
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2).$implicit;
            const settings_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](4).ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵclassMapInterpolate1"
            ]("", item_r81["classes"], " no-padding header-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                8,
                _c1,
                (settings_r29 == null
                  ? null
                  : settings_r29.highlight[item_r81["type"]]) ||
                  (settings_r29 == null
                    ? null
                    : settings_r29.highlight[item_r81["classes"]])
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                2,
                6,
                item_r81["value"]
              ),
              " "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              conjugation_r66["secondary"].indexOf(item_r81) <
                conjugation_r66["secondary"].length - 1
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_5_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "h5",
              49
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_5_span_1_Template,
              4,
              10,
              "span",
              50
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              conjugation_r66["secondary"]
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h4_7_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "h4",
              56
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "span",
              57
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              conjugation_r66["translation"]
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_8_span_1_span_3_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              55
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_8_span_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              53
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              2,
              "decapitalize"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_8_span_1_span_3_Template,
              2,
              0,
              "span",
              54
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const item_r88 = ctx.$implicit;
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2).$implicit;
            const settings_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](4).ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵclassMapInterpolate1"
            ]("", item_r88["classes"], " no-padding header-text");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                8,
                _c1,
                (settings_r29 == null
                  ? null
                  : settings_r29.highlight[item_r88["type"]]) ||
                  (settings_r29 == null
                    ? null
                    : settings_r29.highlight[item_r88["classes"]])
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                2,
                6,
                item_r88["value"]
              ),
              " "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              conjugation_r66["ternary"].indexOf(item_r88) <
                conjugation_r66["ternary"].length - 1
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_8_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "h5",
              49
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_8_span_1_Template,
              4,
              10,
              "span",
              50
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const conjugation_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              conjugation_r66["ternary"]
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "tr",
              47
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "td",
              48
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "h3",
              49
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_span_3_Template,
              2,
              7,
              "span",
              50
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              4,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_4_Template,
              2,
              1,
              "h5",
              51
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              5,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_5_Template,
              2,
              1,
              "h5",
              51
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              6,
              "td",
              48
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              7,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h4_7_Template,
              3,
              1,
              "h4",
              52
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              8,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_h5_8_Template,
              2,
              1,
              "h5",
              51
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const conjugation_r66 = ctx.$implicit;
            const settings_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](4).ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              conjugation_r66["main"]
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              settings_r29 == null ? null : settings_r29.level.breakdown_tier
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              settings_r29 == null ? null : settings_r29.level.gloss_tier
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              settings_r29 == null ? null : settings_r29.level.translation_tier
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              settings_r29 == null ? null : settings_r29.level.english_tier
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "table",
              45
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "thead"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "tr"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "th"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "h3"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              6,
              "translate"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              7,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_th_7_Template,
              3,
              0,
              "th",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              8,
              "tbody"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              9,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_tr_9_Template,
              9,
              5,
              "tr",
              46
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const response_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]().ngIf;
            const settings_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2).ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                6,
                3,
                "ww.language"
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              (settings_r29 == null ? null : settings_r29.level.english_tier) ||
                (settings_r29 == null
                  ? null
                  : settings_r29.level.translation_tier)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              response_r60
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              39
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_12_div_1_div_1_Template,
              7,
              1,
              "div",
              40
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              TableviewerConjPanelComponent_div_0_div_12_div_1_table_2_Template,
              10,
              5,
              "table",
              41
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const response_r60 = ctx.ngIf;
            const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r59.isString(response_r60)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r59.isString(response_r60)
            );
          }
        }
        function TableviewerConjPanelComponent_div_0_div_12_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_12_div_1_Template,
              3,
              2,
              "div",
              38
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵreference"
            ](10);
            const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                2,
                2,
                ctx_r38.response$
              )
            )("ngIfElse", _r35);
          }
        }
        function TableviewerConjPanelComponent_div_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerConjPanelComponent_div_0_div_1_Template,
              15,
              11,
              "div",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "div",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              TableviewerConjPanelComponent_div_0_hr_3_Template,
              1,
              0,
              "hr",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              4,
              TableviewerConjPanelComponent_div_0_button_4_Template,
              3,
              3,
              "button",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "div",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              6,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              7,
              TableviewerConjPanelComponent_div_0_h3_7_Template,
              11,
              0,
              "h3",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              8,
              TableviewerConjPanelComponent_div_0_h3_8_Template,
              4,
              0,
              "h3",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              9,
              TableviewerConjPanelComponent_div_0_ng_template_9_Template,
              2,
              3,
              "ng-template",
              null,
              9,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵtemplateRefExtractor"
              ]
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              11,
              TableviewerConjPanelComponent_div_0_div_11_Template,
              2,
              1,
              "div",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              12,
              TableviewerConjPanelComponent_div_0_div_12_Template,
              3,
              4,
              "div",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r28.show_toolbar
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r28.show_toolbar
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r28.show_toolbar
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r28.response$ && !ctx_r28.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r28.response$ && !ctx_r28.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r28.showExplorer
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              !ctx_r28.showExplorer
            );
          }
        }
        class TableviewerConjPanelComponent {
          constructor(
            conjugationService,
            selectionService,
            http,
            toastr,
            store,
            affixService,
            pronounService,
            verbService
          ) {
            this.conjugationService = conjugationService;
            this.selectionService = selectionService;
            this.http = http;
            this.toastr = toastr;
            this.store = store;
            this.affixService = affixService;
            this.pronounService = pronounService;
            this.verbService = verbService;
            this.showDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "FormControl"
            ](1000);
            this.hideDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "FormControl"
            ](200);
            this.tooltipPosition = "above";
            this.showExplorer = false;
            this.loading = false;
            this.show_toolbar = true;
            this.order = true;
            this.depth = 1;
          }
          ngOnInit() {
            this.settings$ = this.store.pipe(
              Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(
                _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_9__[
                  "selectSettings"
                ]
              )
            );
          }
          conjugate() {
            this.loading = true;
            if (!this.showExplorer) {
              this.response$ = this.conjugationService.conjugateTable(
                this.selectionService.selection
              );
              console.log(this.response$);
              this.response$.subscribe(x => console.log(x));
              return this.response$;
            } else {
              let order = "PT";
              if (this.order) {
                order = "TP";
              }
              this.chart_response$ = this.createChart(
                this.selectionService.selection,
                order,
                this.depth
              );
              this.chart_response$.subscribe(r => (this.chart_response = r));
            }
          }
          createChartData(res, order, depth) {
            let data = [];
            let verbs = [];
            let chartOption = {
              tooltip: {
                show: false,
                trigger: "item",
                triggerOn: "mousemove"
              },
              toolbox: {
                feature: {
                  saveAsImage: { title: "save", show: false }
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
            let node;
            for (let conjugation of res) {
              conjugation = conjugation.values;
              let v = conjugation.root["tag"];
              let t = this.affixService.getAffOption(conjugation.affopt)[
                "gloss"
              ];
              let vb = this.verbService.getVerb(v);
              let p;
              if (vb["thematic_relation"] === "red") {
                p = this.pronounService.getPronoun(
                  conjugation.pronoun["agent"]
                )["gloss"];
              } else if (vb["thematic_relation"] === "blue") {
                p = this.pronounService.getPronoun(
                  conjugation.pronoun["patient"]
                )["gloss"];
              } else {
                p =
                  this.pronounService.getPronoun(conjugation.pronoun["agent"])[
                    "gloss"
                  ] +
                  " > " +
                  this.pronounService.getPronoun(
                    conjugation.pronoun["patient"]
                  )["obj_gloss"];
              }
              const val = this.returnValue(conjugation);
              if (order === "TP") {
                node = Object(
                  lodash__WEBPACK_IMPORTED_MODULE_8__["merge"]
                )(node, { [v]: { [t]: { [p]: val } } });
              } else {
                node = Object(
                  lodash__WEBPACK_IMPORTED_MODULE_8__["merge"]
                )(node, { [v]: { [p]: { [t]: val } } });
              }
            }
            for (const verb of Object.keys(node)) {
              verbs.push(verb);
              let nv = { name: verb, children: [] };
              for (const second of Object.keys(node[verb])) {
                const ns = { name: second, children: [] };
                for (const third of Object.keys(node[verb][second])) {
                  let nt = {
                    name: third,
                    children: [{ name: node[verb][second][third] }]
                  };
                  ns["children"].push(nt);
                }
                nv["children"].push(ns);
              }
              data.push(nv);
            }
            let top = 0;
            let initialTreeDepth = 0;
            if (verbs.length < 2) {
              initialTreeDepth = depth;
            } else {
              // verbs.forEach(v => {
              //   chartOption.legend['data'].push({
              //     name: v,
              //     icon: 'rectangle'
              //   });
              // });
            }
            for (var j = 0; j < data.length; j++) {
              top += 20;
              let ser = {
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
          returnValue(conjugation) {
            let morphemes = [conjugation.root, conjugation.pronoun].concat(
              conjugation.affixes
            );
            morphemes = morphemes.sort(function(a, b) {
              return a.position - b.position;
            });
            return morphemes.map(m => m.value).join("");
          }
          createChart(tableargs, order, depth) {
            return this.conjugationService
              .conjugate(tableargs)
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"]
                )(res => this.createChartData(res, order, depth))
              );
          }
          isString(val) {
            return typeof val === "string";
          }
          toggleExplorer() {
            this.showExplorer = !this.showExplorer;
            this.conjugate();
          }
          download() {
            const query_args = this.conjugationService
              .createRequestUrl(this.selectionService.selection)
              .toString();
            const query_args_docx = this.conjugationService
              .createRequestUrl(this.selectionService.selection, [
                { param: "docx", value: "true" }
              ])
              .toString();
            const url = this.conjugationService.path + "?" + query_args;
            const docx_url =
              this.conjugationService.path + "?" + query_args_docx;
            this.http.get(url).subscribe(
              data => {
                console.log(data);
                window.location.href = docx_url;
                this.updateToast(data);
              },
              error => {
                console.log(error);
                this.updateToast(false, error.status);
              }
            );
          }
          updateToast(success, code = 200) {
            if (success) {
              this.toastr.success("File succesfully downloaded");
            } else {
              this.toastr.error(
                "This file couldn't be downloaded. Please make sure your conjugation is valid.",
                "Whoops!"
              );
            }
          }
        }
        TableviewerConjPanelComponent.ɵfac = function TableviewerConjPanelComponent_Factory(
          t
        ) {
          return new (t || TableviewerConjPanelComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_3__[
                "ConjugationService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_4__[
                "TableviewerSelectionService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_3__["AffixService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_3__["PronounService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_3__["VerbService"]
            )
          );
        };
        TableviewerConjPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TableviewerConjPanelComponent,
          selectors: [["ww-tableviewer-conj-panel"]],
          viewQuery: function TableviewerConjPanelComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
                _c0,
                true
              );
            }
            if (rf & 2) {
              var _t;
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵloadQuery"
                ]())
              ) && (ctx.explorer = _t.first);
            }
          },
          decls: 2,
          vars: 3,
          consts: [
            ["class", "panel", 4, "ngIf"],
            [1, "panel"],
            ["class", "panel__header", 4, "ngIf"],
            [1, "panel__underline", "height-5"],
            [4, "ngIf"],
            [
              "class",
              "float-right ui-button toolbar__tool",
              "mat-icon-button",
              "",
              "matTooltip",
              "Show toolbar",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click",
              4,
              "ngIf"
            ],
            [1, "panel__content"],
            [
              "class",
              "desktop-only center-text margin-top-100 padding-20",
              4,
              "ngIf"
            ],
            ["class", "mobile-only padding-15 center-text", 4, "ngIf"],
            ["spinner", ""],
            ["class", "full-width full-height", 4, "ngIf"],
            [1, "panel__header"],
            [1, "panel__title"],
            [1, "panel__toolbar", "toolbar"],
            ["mat-raised-button", "", 1, "conjugate", "mat-accent", 3, "click"],
            [
              "class",
              "toolbar__tool ui-button",
              "matTooltip",
              "Select how many nodes to display",
              3,
              "ngModel",
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "ngModelChange",
              4,
              "ngIf"
            ],
            [
              "class",
              "toolbar__tool ui-button",
              "mat-icon-button",
              "",
              "matTooltip",
              "Switch pronoun and tense nodes",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click",
              4,
              "ngIf"
            ],
            [
              "mat-icon-button",
              "",
              "matTooltip",
              "Switch between grid and tree views",
              1,
              "ui-button",
              "toolbar__tool",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click"
            ],
            ["aria-label", "Conjugate", 4, "ngIf"],
            [
              "class",
              "ui-button toolbar__tool",
              "mat-icon-button",
              "",
              "matTooltip",
              "Download conjugations as file",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click",
              4,
              "ngIf"
            ],
            [
              "mat-icon-button",
              "",
              "matTooltip",
              "Hide toolbar",
              1,
              "ui-button",
              "toolbar__tool",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click"
            ],
            ["aria-label", "Hide toolbar"],
            [
              "matTooltip",
              "Select how many nodes to display",
              1,
              "toolbar__tool",
              "ui-button",
              3,
              "ngModel",
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "ngModelChange"
            ],
            ["value", "0"],
            ["value", "1"],
            ["value", "2"],
            ["value", "3"],
            [
              "mat-icon-button",
              "",
              "matTooltip",
              "Switch pronoun and tense nodes",
              1,
              "toolbar__tool",
              "ui-button",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click"
            ],
            ["aria-label", "Switch pronoun and temp"],
            ["aria-label", "Conjugate"],
            [
              "mat-icon-button",
              "",
              "matTooltip",
              "Download conjugations as file",
              1,
              "ui-button",
              "toolbar__tool",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click"
            ],
            ["aria-label", "Download conjugations"],
            [
              "mat-icon-button",
              "",
              "matTooltip",
              "Show toolbar",
              1,
              "float-right",
              "ui-button",
              "toolbar__tool",
              3,
              "matTooltipShowDelay",
              "matTooltipHideDelay",
              "matTooltipPosition",
              "click"
            ],
            ["aria-label", "Show toolbar"],
            [1, "desktop-only", "center-text", "margin-top-100", "padding-20"],
            [1, "mobile-only", "padding-15", "center-text"],
            [1, "centered", "margin-top-100"],
            [1, "full-width", "full-height"],
            ["id", "table-container", "class", "rel", 4, "ngIf", "ngIfElse"],
            ["id", "table-container", 1, "rel"],
            ["class", "error__container", 4, "ngIf"],
            ["class", "full-width abs", 4, "ngIf"],
            [1, "error__container"],
            [1, "error__header"],
            [1, "error__message"],
            [1, "full-width", "abs"],
            ["class", "b--bottom", 4, "ngFor", "ngForOf"],
            [1, "b--bottom"],
            [1, "center-text"],
            ["id", "main"],
            [3, "class", "ngClass", 4, "ngFor", "ngForOf"],
            ["id", "main", 4, "ngIf"],
            ["id", "main", "class", "no-padding header-text", 4, "ngIf"],
            [3, "ngClass"],
            ["class", "gloss-dividers header-text", 4, "ngIf"],
            [1, "gloss-dividers", "header-text"],
            ["id", "main", 1, "no-padding", "header-text"],
            [1, "translation"]
          ],
          template: function TableviewerConjPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                0,
                TableviewerConjPanelComponent_div_0_Template,
                13,
                7,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  1,
                  1,
                  ctx.settings$
                )
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__[
              "MatTooltip"
            ],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "SelectControlValueAccessor"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "ɵangular_packages_forms_forms_x"
            ],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__[
              "MatSpinner"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"],
            _shared_pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_16__[
              "DecapitalizePipe"
            ]
          ],
          styles: [
            "button.conjugate[_ngcontent-%COMP%] {\n  line-height: 1.875em !important;\n  padding: 0 1em !important;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLWNvbmotcGFuZWwvdGFibGV2aWV3ZXItY29uai1wYW5lbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvdGFibGV2aWV3ZXIvdGFibGV2aWV3ZXItY29uai1wYW5lbC90YWJsZXZpZXdlci1jb25qLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy90YWJsZXZpZXdlci90YWJsZXZpZXdlci1jb25qLXBhbmVsL3RhYmxldmlld2VyLWNvbmotcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uY29uanVnYXRlIHtcbiAgICBsaW5lLWhlaWdodDogMS44NzVlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59IiwiYnV0dG9uLmNvbmp1Z2F0ZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjg3NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufSJdfQ== */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerConjPanelComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-tableviewer-conj-panel",
                    templateUrl: "./tableviewer-conj-panel.component.html",
                    styleUrls: ["./tableviewer-conj-panel.component.scss"],
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
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__[
                      "ConjugationService"
                    ]
                },
                {
                  type:
                    _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_4__[
                      "TableviewerSelectionService"
                    ]
                },
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                      "HttpClient"
                    ]
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
                },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
                {
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__[
                      "AffixService"
                    ]
                },
                {
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__[
                      "PronounService"
                    ]
                },
                {
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__[
                      "VerbService"
                    ]
                }
              ];
            },
            {
              explorer: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                  args: ["explorer"]
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ "./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts":
      /*!**********************************************************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: TableviewerPersPanelComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerPersPanelComponent",
          function() {
            return TableviewerPersPanelComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../tableviewer-selection.service */ "./src/app/pages/tableviewer/tableviewer-selection.service.ts"
        );
        /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../core/core.module */ "./src/app/core/core.module.ts"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/button-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
        );

        function TableviewerPersPanelComponent_button_10_Template(rf, ctx) {
          if (rf & 1) {
            const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerPersPanelComponent_button_10_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r106
                );
                const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r105.toggleSelectAll();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_all");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerPersPanelComponent_button_11_Template(rf, ctx) {
          if (rf & 1) {
            const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerPersPanelComponent_button_11_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r108
                );
                const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r107.toggleSelectAll();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_all");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerPersPanelComponent_button_12_Template(rf, ctx) {
          if (rf & 1) {
            const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerPersPanelComponent_button_12_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r110
                );
                const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r109.toggleSelectAll();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_all");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerPersPanelComponent_button_13_Template(rf, ctx) {
          if (rf & 1) {
            const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerPersPanelComponent_button_13_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r112
                );
                const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r111.toggleSelectAll();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_all");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerPersPanelComponent_mat_list_15_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-checkbox",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const value_r114 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "color",
              "red"
            )("formControlName", value_r114.tag);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              value_r114.gloss
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_15_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-list",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerPersPanelComponent_mat_list_15_div_1_Template,
              3,
              3,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formGroup",
              ctx_r101.agCheckboxGroup
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](
                2,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  3,
                  6,
                  ctx_r101.agCheckboxPossibleValues
                ),
                0,
                ctx_r101.limit
              )
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_16_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-checkbox",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const value_r116 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "color",
              "red"
            )("formControlName", value_r116.tag);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              value_r116.gloss
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_16_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-list",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerPersPanelComponent_mat_list_16_div_1_Template,
              3,
              3,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formGroup",
              ctx_r102.agCheckboxGroup
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](
                2,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  3,
                  5,
                  ctx_r102.agCheckboxPossibleValues
                ),
                ctx_r102.limit
              )
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_17_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-checkbox",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const value_r118 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "color",
              "blue"
            )("formControlName", value_r118.tag);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              value_r118.gloss
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-list",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerPersPanelComponent_mat_list_17_div_1_Template,
              3,
              3,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formGroup",
              ctx_r103.patCheckboxGroup
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](
                2,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  3,
                  6,
                  ctx_r103.patCheckboxPossibleValues
                ),
                0,
                ctx_r103.limit
              )
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_18_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-checkbox",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const value_r120 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "color",
              "blue"
            )("formControlName", value_r120.tag);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              value_r120.gloss
            );
          }
        }
        function TableviewerPersPanelComponent_mat_list_18_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-list",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerPersPanelComponent_mat_list_18_div_1_Template,
              3,
              3,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formGroup",
              ctx_r104.patCheckboxGroup
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](
                2,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  3,
                  5,
                  ctx_r104.patCheckboxPossibleValues
                ),
                ctx_r104.limit
              )
            );
          }
        }
        class TableviewerPersPanelComponent {
          constructor(pnService, selectionService) {
            this.pnService = pnService;
            this.selectionService = selectionService;
            this.agCheckboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
              "FormGroup"
            ]({});
            this.agCheckboxPossibleValues = this.pnService.pronouns$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                values => {
                  values.forEach(value => {
                    this.agCheckboxGroup.addControl(
                      value["tag"],
                      new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
                        "FormControl"
                      ](this.agCheckedValues.indexOf(value["tag"]) !== -1)
                    );
                  });
                  return values;
                }
              )
            );
            this.agCheckedValues = [];
            this.patCheckboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
              "FormGroup"
            ]({});
            this.patCheckboxPossibleValues = this.pnService.pronouns$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                values => {
                  values.forEach(value => {
                    this.patCheckboxGroup.addControl(
                      value["tag"],
                      new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
                        "FormControl"
                      ](this.patCheckedValues.indexOf(value["tag"]) !== -1)
                    );
                  });
                  return values;
                }
              )
            );
            this.patCheckedValues = [];
            this.role = "agent";
            this.limit = 8;
            this.selectAllAg = false;
            this.selectAllPat = false;
          }
          ngOnInit() {}
          pushAgChanges(c) {
            this.selectionService.updateAgents(c);
          }
          pushPatChanges(c) {
            this.selectionService.updatePatients(c);
          }
          filterTrue(c) {
            return Object.keys(c).filter(k => {
              return c[k];
            });
          }
          toggleSelectAll() {
            if (this.role === "agent") {
              this.selectAllAg = !this.selectAllAg;
              this.agCheckboxPossibleValues.subscribe(pns => {
                pns.forEach(pn =>
                  this.agCheckboxGroup.controls[pn.tag].setValue(
                    this.selectAllAg
                  )
                );
              });
            } else if (this.role === "patient") {
              this.selectAllPat = !this.selectAllPat;
              this.patCheckboxPossibleValues.subscribe(pns => {
                pns.forEach(pn =>
                  this.patCheckboxGroup.controls[pn.tag].setValue(
                    this.selectAllPat
                  )
                );
              });
            }
          }
          checkRole() {
            console.log(this.role);
          }
        }
        TableviewerPersPanelComponent.ɵfac = function TableviewerPersPanelComponent_Factory(
          t
        ) {
          return new (t || TableviewerPersPanelComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_2__["PronounService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_1__[
                "TableviewerSelectionService"
              ]
            )
          );
        };
        TableviewerPersPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TableviewerPersPanelComponent,
          selectors: [["ww-tableviewer-pers-panel"]],
          decls: 19,
          vars: 17,
          consts: [
            [1, "panel"],
            [1, "panel__header"],
            [1, "panel__title"],
            [1, "panel__toolbar--right", "toolbar"],
            [
              "name",
              "fontStyle",
              "aria-label",
              "Font Style",
              1,
              "toolbar__tool",
              3,
              "ngModel",
              "ngModelChange"
            ],
            ["value", "agent", 1, "bg-red"],
            ["value", "patient", 1, "bg-blue"],
            [
              "class",
              "toolbar__tool",
              "mat-icon-button",
              "",
              3,
              "click",
              4,
              "ngIf"
            ],
            [
              "class",
              "toolbar__tool bg-red color-white",
              "mat-icon-button",
              "",
              3,
              "click",
              4,
              "ngIf"
            ],
            [
              "class",
              "toolbar__tool bg-blue color-white",
              "mat-icon-button",
              "",
              3,
              "click",
              4,
              "ngIf"
            ],
            [1, "panel__content"],
            [
              "class",
              "panel__list pro one",
              "role",
              "list",
              3,
              "formGroup",
              4,
              "ngIf"
            ],
            [
              "class",
              "panel__list pro two",
              "role",
              "list",
              3,
              "formGroup",
              4,
              "ngIf"
            ],
            ["mat-icon-button", "", 1, "toolbar__tool", 3, "click"],
            ["aria-label", "Select all"],
            [
              "mat-icon-button",
              "",
              1,
              "toolbar__tool",
              "bg-red",
              "color-white",
              3,
              "click"
            ],
            [
              "mat-icon-button",
              "",
              1,
              "toolbar__tool",
              "bg-blue",
              "color-white",
              3,
              "click"
            ],
            ["role", "list", 1, "panel__list", "pro", "one", 3, "formGroup"],
            [4, "ngFor", "ngForOf"],
            [3, "color", "formControlName"],
            ["role", "list", 1, "panel__list", "pro", "two", 3, "formGroup"]
          ],
          template: function TableviewerPersPanelComponent_Template(rf, ctx) {
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
                "h3",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Person");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "mat-button-toggle-group",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function TableviewerPersPanelComponent_Template_mat_button_toggle_group_ngModelChange_5_listener(
                  $event
                ) {
                  return (ctx.role = $event);
                }
              )(
                "ngModelChange",
                function TableviewerPersPanelComponent_Template_mat_button_toggle_group_ngModelChange_5_listener(
                  $event
                ) {
                  return ctx.checkRole();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "mat-button-toggle",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Agent");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "mat-button-toggle",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                9,
                "Patient"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                10,
                TableviewerPersPanelComponent_button_10_Template,
                3,
                0,
                "button",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                11,
                TableviewerPersPanelComponent_button_11_Template,
                3,
                0,
                "button",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                12,
                TableviewerPersPanelComponent_button_12_Template,
                3,
                0,
                "button",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                13,
                TableviewerPersPanelComponent_button_13_Template,
                3,
                0,
                "button",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                15,
                TableviewerPersPanelComponent_mat_list_15_Template,
                4,
                8,
                "mat-list",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                16,
                TableviewerPersPanelComponent_mat_list_16_Template,
                4,
                7,
                "mat-list",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                17,
                TableviewerPersPanelComponent_mat_list_17_Template,
                4,
                8,
                "mat-list",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                18,
                TableviewerPersPanelComponent_mat_list_18_Template,
                4,
                7,
                "mat-list",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.role
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                "color-white",
                ctx.role !== "patient"
              )("faded", ctx.role === "patient");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                "color-white",
                ctx.role !== "agent"
              )("faded", ctx.role === "agent");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.selectAllAg && ctx.role === "agent"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.selectAllAg && ctx.role === "agent"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.selectAllPat && ctx.role === "patient"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.selectAllPat && ctx.role === "patient"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.role === "agent"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.role === "agent"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.role === "patient"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.role === "patient"
              );
            }
          },
          directives: [
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
              "MatButtonToggleGroup"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__[
              "MatButtonToggle"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__[
              "MatCheckbox"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXBlcnMtcGFuZWwvdGFibGV2aWV3ZXItcGVycy1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerPersPanelComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-tableviewer-pers-panel",
                    templateUrl: "./tableviewer-pers-panel.component.html",
                    styleUrls: ["./tableviewer-pers-panel.component.scss"],
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
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_2__[
                      "PronounService"
                    ]
                },
                {
                  type:
                    _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_1__[
                      "TableviewerSelectionService"
                    ]
                }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/pages/tableviewer/tableviewer-selection.service.ts":
      /*!********************************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer-selection.service.ts ***!
  \********************************************************************/
      /*! exports provided: TableviewerSelectionService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerSelectionService",
          function() {
            return TableviewerSelectionService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

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
        TableviewerSelectionService.ɵfac = function TableviewerSelectionService_Factory(
          t
        ) {
          return new (t || TableviewerSelectionService)();
        };
        TableviewerSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: TableviewerSelectionService,
          factory: TableviewerSelectionService.ɵfac,
          providedIn: "root"
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerSelectionService,
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

    /***/ "./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts":
      /*!**********************************************************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: TableviewerTempPanelComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerTempPanelComponent",
          function() {
            return TableviewerTempPanelComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../core/core.module */ "./src/app/core/core.module.ts"
        );
        /* harmony import */ var _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../tableviewer-selection.service */ "./src/app/pages/tableviewer/tableviewer-selection.service.ts"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
        );

        function TableviewerTempPanelComponent_button_5_Template(rf, ctx) {
          if (rf & 1) {
            const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerTempPanelComponent_button_5_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r125
                );
                const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r124.toggleSelectAll();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_all");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerTempPanelComponent_button_6_Template(rf, ctx) {
          if (rf & 1) {
            const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function TableviewerTempPanelComponent_button_6_Template_button_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r127
                );
                const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r126.toggleSelectAll();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-icon",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_all");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function TableviewerTempPanelComponent_div_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-checkbox",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const value_r128 = ctx.$implicit;
            const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formGroup",
              ctx_r123.checkboxGroup
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formControlName",
              value_r128.tag
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              value_r128.gloss
            );
          }
        }
        class TableviewerTempPanelComponent {
          constructor(affixService, selectionService) {
            this.affixService = affixService;
            this.selectionService = selectionService;
            this.checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
              "FormGroup"
            ]({});
            this.checkboxPossibleValues = this.affixService.affoptions$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                values => {
                  values.forEach(value => {
                    this.checkboxGroup.addControl(
                      value["tag"],
                      new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
                        "FormControl"
                      ](this.checkedValues.indexOf(value["tag"]) !== -1)
                    );
                  });
                  return values;
                }
              )
            );
            this.checkedValues = [];
            this.chosenTimes = [];
            this.selectAll = false;
          }
          ngOnInit() {}
          pushChanges(c) {
            this.selectionService.updateAffOptions(c);
          }
          filterTrue(c) {
            return Object.keys(c).filter(k => {
              return c[k];
            });
          }
          toggleSelectAll() {
            this.selectAll = !this.selectAll;
            this.checkboxPossibleValues.subscribe(ts => {
              ts.forEach(t =>
                this.checkboxGroup.controls[t.tag].setValue(this.selectAll)
              );
            });
          }
        }
        TableviewerTempPanelComponent.ɵfac = function TableviewerTempPanelComponent_Factory(
          t
        ) {
          return new (t || TableviewerTempPanelComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_1__["AffixService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_2__[
                "TableviewerSelectionService"
              ]
            )
          );
        };
        TableviewerTempPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TableviewerTempPanelComponent,
          selectors: [["ww-tableviewer-temp-panel"]],
          decls: 10,
          vars: 5,
          consts: [
            [1, "panel"],
            [1, "panel__header"],
            [1, "panel__title"],
            [1, "panel__toolbar", "toolbar"],
            [
              "class",
              "toolbar__tool",
              "mat-icon-button",
              "",
              3,
              "click",
              4,
              "ngIf"
            ],
            [
              "class",
              "toolbar__tool bg-accent margin-right-15 color-white",
              "mat-icon-button",
              "",
              3,
              "click",
              4,
              "ngIf"
            ],
            ["role", "list", 1, "list", "panel__list"],
            [3, "formGroup", 4, "ngFor", "ngForOf"],
            ["mat-icon-button", "", 1, "toolbar__tool", 3, "click"],
            ["aria-label", "Select all"],
            [
              "mat-icon-button",
              "",
              1,
              "toolbar__tool",
              "bg-accent",
              "margin-right-15",
              "color-white",
              3,
              "click"
            ],
            [3, "formGroup"],
            [3, "formControlName"]
          ],
          template: function TableviewerTempPanelComponent_Template(rf, ctx) {
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
                "h3",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Time");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                5,
                TableviewerTempPanelComponent_button_5_Template,
                3,
                0,
                "button",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                6,
                TableviewerTempPanelComponent_button_6_Template,
                3,
                0,
                "button",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-list",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                8,
                TableviewerTempPanelComponent_div_8_Template,
                3,
                3,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.selectAll
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.selectAll
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  9,
                  3,
                  ctx.checkboxPossibleValues
                )
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__[
              "MatCheckbox"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXRlbXAtcGFuZWwvdGFibGV2aWV3ZXItdGVtcC1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerTempPanelComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-tableviewer-temp-panel",
                    templateUrl: "./tableviewer-temp-panel.component.html",
                    styleUrls: ["./tableviewer-temp-panel.component.scss"],
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
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__[
                      "AffixService"
                    ]
                },
                {
                  type:
                    _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_2__[
                      "TableviewerSelectionService"
                    ]
                }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts":
      /*!**********************************************************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: TableviewerVerbPanelComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerVerbPanelComponent",
          function() {
            return TableviewerVerbPanelComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../core/core.module */ "./src/app/core/core.module.ts"
        );
        /* harmony import */ var _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../tableviewer-selection.service */ "./src/app/pages/tableviewer/tableviewer-selection.service.ts"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/chips */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
        );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
        );

        function TableviewerVerbPanelComponent_mat_chip_5_Template(rf, ctx) {
          if (rf & 1) {
            const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-chip",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "removed",
              function TableviewerVerbPanelComponent_mat_chip_5_Template_mat_chip_removed_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r134
                );
                const verb_r132 = ctx.$implicit;
                const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r133.remove(verb_r132);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "mat-icon",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const verb_r132 = ctx.$implicit;
            const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              "bg-" +
                ctx_r129.verbService.getVerb(verb_r132)["thematic_relation"]
            )("selectable", true)("removable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              " ",
              ctx_r129.verbService.getVerb(verb_r132)["display"],
              " "
            );
          }
        }
        function TableviewerVerbPanelComponent_mat_list_11_div_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-checkbox",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "span",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const value_r136 = ctx.$implicit;
            const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formGroup",
              ctx_r135.checkboxGroup
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "formControlName",
              value_r136.tag
            )(
              "disabled",
              ctx_r135.selectionService.selection.root.indexOf(value_r136.tag) <
                0 && ctx_r135.selectionService.selection.root.length >= 3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              value_r136.gloss + " - ",
              " "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngClass",
              "color-" + value_r136.thematic_relation
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              value_r136.display
            );
          }
        }
        function TableviewerVerbPanelComponent_mat_list_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-list",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              TableviewerVerbPanelComponent_mat_list_11_div_1_Template,
              5,
              6,
              "div",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngForOf",
              ctx_r130.viewableVerbs
            );
          }
        }
        function TableviewerVerbPanelComponent_p_12_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "p",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "Sorry, we can't find any verbs that match '",
              ctx_r131.searchField.value,
              "'"
            );
          }
        }
        class TableviewerVerbPanelComponent {
          constructor(verbService, fb, selectionService) {
            this.verbService = verbService;
            this.fb = fb;
            this.selectionService = selectionService;
            this.verbs$ = this.verbService.verbs$;
            this.checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
              "FormGroup"
            ]({});
            this.checkedValues = [];
            this.increment = 1000;
            this.bottomLimit = 0;
            this.selection = [];
            // initialize form with list of checkboxes
            this.verbSubscription = this.verbs$.subscribe(values => {
              values.forEach(value => {
                this.checkboxGroup.addControl(
                  value["tag"],
                  new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
                    "FormControl"
                  ](this.checkedValues.indexOf(value["tag"]) !== -1)
                );
              });
              return values;
            });
            // subscribe to search input
            this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
              "FormControl"
            ]();
            this.verbForm = this.fb.group({ search: this.searchField });
            this.searchField.valueChanges
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"]
                )(100),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                  term => {
                    return this.getEntriesFrom(term);
                  }
                )
              )
              .subscribe(result => {
                this.viewableVerbs = result;
              });
            // create selection observable
            this.checkboxGroup.valueChanges.subscribe(c => {
              c = this.filterTrue(c);
              if (c) {
                this.pushChanges(c);
              }
            });
          }
          ngOnInit() {}
          ngOnDestroy() {
            this.verbSubscription.unsubscribe();
          }
          pushChanges(c) {
            this.selectionService.updateVerbs(c);
          }
          filterTrue(c) {
            return Object.keys(c).filter(k => {
              return c[k];
            });
          }
          getEntriesFrom(term) {
            let vbs = this.verbService.verbs
              .filter(v => {
                return this.filterEntries(v, term);
              })
              .slice(this.bottomLimit, this.increment);
            return vbs;
          }
          filterEntries(v, term) {
            return (
              v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
              v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1
            );
          }
          swipePrev() {
            if (this.bottomLimit - this.increment > 0) {
              this.bottomLimit -= this.increment;
              // this.topLimit -= this.increment;
              // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
            } else {
              this.bottomLimit = 0;
              // this.topLimit = this.increment;
              // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
            }
          }
          swipeNext() {
            if (this.bottomLimit + this.increment < this.topLimit) {
              this.bottomLimit += this.increment;
              // this.topLimit += this.increment;
              // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
            } else {
              this.bottomLimit = this.topLimit - this.increment;
              // this.topLimit = this.verbs.length;
              // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
            }
          }
          remove(verb) {
            this.checkboxGroup.controls[verb].setValue(false);
          }
        }
        TableviewerVerbPanelComponent.ɵfac = function TableviewerVerbPanelComponent_Factory(
          t
        ) {
          return new (t || TableviewerVerbPanelComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _core_core_module__WEBPACK_IMPORTED_MODULE_1__["VerbService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_2__[
                "TableviewerSelectionService"
              ]
            )
          );
        };
        TableviewerVerbPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TableviewerVerbPanelComponent,
          selectors: [["ww-tableviewer-verb-panel"]],
          decls: 13,
          vars: 4,
          consts: [
            [1, "panel"],
            [1, "panel__header"],
            [1, "panel__title"],
            [1, "panel__toolbar", "toolbar"],
            [
              "class",
              "toolbar__tool",
              3,
              "ngClass",
              "selectable",
              "removable",
              "removed",
              4,
              "ngFor",
              "ngForOf"
            ],
            [1, "panel__content"],
            [1, "margin-20"],
            [3, "formGroup"],
            [
              "autocomplete",
              "off",
              "type",
              "text",
              "placeholder",
              "Type a verb",
              "aria-label",
              "Number",
              "matInput",
              "",
              "formControlName",
              "search"
            ],
            ["class", "panel__list", "role", "list", 4, "ngIf"],
            ["class", "margin-top-50 margin-30", 4, "ngIf"],
            [
              1,
              "toolbar__tool",
              3,
              "ngClass",
              "selectable",
              "removable",
              "removed"
            ],
            ["matChipRemove", ""],
            ["role", "list", 1, "panel__list"],
            [3, "formGroup", 4, "ngFor", "ngForOf"],
            [1, "margin-5", 3, "formControlName", "disabled"],
            [3, "ngClass"],
            [1, "margin-top-50", "margin-30"]
          ],
          template: function TableviewerVerbPanelComponent_Template(rf, ctx) {
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
                "h3",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Verb");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "mat-chip-list",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                5,
                TableviewerVerbPanelComponent_mat_chip_5_Template,
                4,
                4,
                "mat-chip",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "form",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "mat-form-field",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                10,
                "input",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                11,
                TableviewerVerbPanelComponent_mat_list_11_Template,
                2,
                1,
                "mat-list",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                12,
                TableviewerVerbPanelComponent_p_12_Template,
                2,
                1,
                "p",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.selectionService.selection.root
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "formGroup",
                ctx.verbForm
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.viewableVerbs && ctx.searchField.value !== ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.searchField.value !== "" &&
                  ctx.searchField.value !== null &&
                  (ctx.viewableVerbs == null
                    ? null
                    : ctx.viewableVerbs.length) === 0
              );
            }
          },
          directives: [
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__[
              "MatFormField"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__[
              "MatChipRemove"
            ],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__[
              "MatCheckbox"
            ]
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyLXZlcmItcGFuZWwvdGFibGV2aWV3ZXItdmVyYi1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerVerbPanelComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-tableviewer-verb-panel",
                    templateUrl: "./tableviewer-verb-panel.component.html",
                    styleUrls: ["./tableviewer-verb-panel.component.scss"],
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
                  type:
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__[
                      "VerbService"
                    ]
                },
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
                },
                {
                  type:
                    _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_2__[
                      "TableviewerSelectionService"
                    ]
                }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/pages/tableviewer/tableviewer.module.ts":
      /*!*********************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer.module.ts ***!
  \*********************************************************/
      /*! exports provided: TableviewerSelectionService, TableviewerModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerModule",
          function() {
            return TableviewerModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./tableviewer/tableviewer.component */ "./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts"
        );
        /* harmony import */ var _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./tableviewer-conj-panel/tableviewer-conj-panel.component */ "./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts"
        );
        /* harmony import */ var _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./tableviewer-pers-panel/tableviewer-pers-panel.component */ "./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts"
        );
        /* harmony import */ var _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./tableviewer-temp-panel/tableviewer-temp-panel.component */ "./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts"
        );
        /* harmony import */ var _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./tableviewer-verb-panel/tableviewer-verb-panel.component */ "./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts"
        );
        /* harmony import */ var _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./tableviewer-selection.service */ "./src/app/pages/tableviewer/tableviewer-selection.service.ts"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerSelectionService",
          function() {
            return _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_7__[
              "TableviewerSelectionService"
            ];
          }
        );

        /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts"
        );

        class TableviewerModule {}
        TableviewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({ type: TableviewerModule });
        TableviewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function TableviewerModule_Factory(t) {
            return new (t || TableviewerModule)();
          },
          providers: [
            _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_7__[
              "TableviewerSelectionService"
            ]
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              TableviewerModule,
              {
                declarations: [
                  _tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_2__[
                    "TableviewerComponent"
                  ],
                  _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_3__[
                    "TableviewerConjPanelComponent"
                  ],
                  _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_4__[
                    "TableviewerPersPanelComponent"
                  ],
                  _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__[
                    "TableviewerTempPanelComponent"
                  ],
                  _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_6__[
                    "TableviewerVerbPanelComponent"
                  ]
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                    "SharedModule"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    declarations: [
                      _tableviewer_tableviewer_component__WEBPACK_IMPORTED_MODULE_2__[
                        "TableviewerComponent"
                      ],
                      _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_3__[
                        "TableviewerConjPanelComponent"
                      ],
                      _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_4__[
                        "TableviewerPersPanelComponent"
                      ],
                      _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__[
                        "TableviewerTempPanelComponent"
                      ],
                      _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_6__[
                        "TableviewerVerbPanelComponent"
                      ]
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        "CommonModule"
                      ],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                        "SharedModule"
                      ]
                    ],
                    providers: [
                      _tableviewer_selection_service__WEBPACK_IMPORTED_MODULE_7__[
                        "TableviewerSelectionService"
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

    /***/ "./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts":
      /*!************************************************************************!*\
  !*** ./src/app/pages/tableviewer/tableviewer/tableviewer.component.ts ***!
  \************************************************************************/
      /*! exports provided: TableviewerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TableviewerComponent",
          function() {
            return TableviewerComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../tableviewer-conj-panel/tableviewer-conj-panel.component */ "./src/app/pages/tableviewer/tableviewer-conj-panel/tableviewer-conj-panel.component.ts"
        );
        /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/grid-list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js"
        );
        /* harmony import */ var _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../tableviewer-pers-panel/tableviewer-pers-panel.component */ "./src/app/pages/tableviewer/tableviewer-pers-panel/tableviewer-pers-panel.component.ts"
        );
        /* harmony import */ var _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../tableviewer-verb-panel/tableviewer-verb-panel.component */ "./src/app/pages/tableviewer/tableviewer-verb-panel/tableviewer-verb-panel.component.ts"
        );
        /* harmony import */ var _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../tableviewer-temp-panel/tableviewer-temp-panel.component */ "./src/app/pages/tableviewer/tableviewer-temp-panel/tableviewer-temp-panel.component.ts"
        );

        // Imports

        const _c0 = ["conjPanel"];
        class TableviewerComponent {
          constructor() {
            this.breakpoint = 1100;
            this.useTestAPI = false;
          }
          handleKeyboardEvent(event) {
            // if (event.keyCode === 13) {
            this.conjPanel.conjugate();
            // }
          }
          ngOnInit() {
            this.cols = window.innerWidth <= this.breakpoint ? 3 : 12;
            this.rows = window.innerWidth <= this.breakpoint ? 1 : 2;
            this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 6;
            this.conjrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
            this.halfrowspan = window.innerWidth <= this.breakpoint ? 1 : 1;
            this.fullrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
          }
          onResize(event) {
            this.cols = event.target.innerWidth <= this.breakpoint ? 3 : 12;
            this.rows = window.innerWidth <= this.breakpoint ? 1 : 2;
            this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 6;
            this.conjrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
            this.halfrowspan = window.innerWidth <= this.breakpoint ? 1 : 1;
            this.fullrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
          }
          conjugate() {
            this.conjPanel.conjugate();
          }
        }
        TableviewerComponent.ɵfac = function TableviewerComponent_Factory(t) {
          return new (t || TableviewerComponent)();
        };
        TableviewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TableviewerComponent,
          selectors: [["ww-tableviewer"]],
          viewQuery: function TableviewerComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
                _c0,
                true
              );
            }
            if (rf & 2) {
              var _t;
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵloadQuery"
                ]())
              ) && (ctx.conjPanel = _t.first);
            }
          },
          hostBindings: function TableviewerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "keyup.enter",
                function TableviewerComponent_keyup_enter_HostBindingHandler(
                  $event
                ) {
                  return ctx.handleKeyboardEvent($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]
              );
            }
          },
          decls: 12,
          vars: 9,
          consts: [
            [1, "container", "page__content", "vwidth-90", "centered"],
            ["rowHeight", "18em", 1, "margin-bottom-50", 3, "cols", "resize"],
            [
              1,
              "br-tl",
              "b--left",
              "b--right",
              "b--top",
              "bg-white",
              3,
              "colspan",
              "rowspan"
            ],
            [1, "custom-scroll", "full-width", "full-height"],
            [1, "b--top", "b--left", "bg-white", 3, "colspan", "rowspan"],
            ["conjPanel", ""],
            [
              1,
              "br--tr",
              "br--br",
              "b--left",
              "b--right",
              "b--top",
              "b--bottom",
              "bg-white",
              3,
              "colspan",
              "rowspan"
            ],
            [
              1,
              "br--bl",
              "b--top",
              "b--left",
              "b--right",
              "b--bottom",
              "bg-white",
              3,
              "colspan",
              "rowspan"
            ],
            [1, "custom-scroll", "full-width"],
            [1, "height-100"]
          ],
          template: function TableviewerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "mat-grid-list",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "resize",
                function TableviewerComponent_Template_mat_grid_list_resize_1_listener(
                  $event
                ) {
                  return ctx.onResize($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "mat-grid-tile",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "ww-tableviewer-pers-panel",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "mat-grid-tile",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "ww-tableviewer-conj-panel",
                3,
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-grid-tile",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                8,
                "ww-tableviewer-verb-panel",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "mat-grid-tile",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                10,
                "ww-tableviewer-temp-panel",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                11,
                "div",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "cols",
                ctx.cols
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "colspan",
                3
              )("rowspan", ctx.halfrowspan);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "colspan",
                ctx.conjcolspan
              )("rowspan", ctx.conjrowspan);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "colspan",
                3
              )("rowspan", ctx.fullrowspan);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "colspan",
                3
              )("rowspan", ctx.halfrowspan);
            }
          },
          directives: [
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__[
              "MatGridList"
            ],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__[
              "MatGridTile"
            ],
            _tableviewer_pers_panel_tableviewer_pers_panel_component__WEBPACK_IMPORTED_MODULE_3__[
              "TableviewerPersPanelComponent"
            ],
            _tableviewer_conj_panel_tableviewer_conj_panel_component__WEBPACK_IMPORTED_MODULE_1__[
              "TableviewerConjPanelComponent"
            ],
            _tableviewer_verb_panel_tableviewer_verb_panel_component__WEBPACK_IMPORTED_MODULE_4__[
              "TableviewerVerbPanelComponent"
            ],
            _tableviewer_temp_panel_tableviewer_temp_panel_component__WEBPACK_IMPORTED_MODULE_5__[
              "TableviewerTempPanelComponent"
            ]
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3RhYmxldmlld2VyL3RhYmxldmlld2VyL3RhYmxldmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TableviewerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-tableviewer",
                    templateUrl: "./tableviewer.component.html",
                    styleUrls: ["./tableviewer.component.scss"],
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
            {
              conjPanel: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                  args: ["conjPanel"]
                }
              ],
              handleKeyboardEvent: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
                  args: ["document:keyup.enter", ["$event"]]
                }
              ]
            }
          );
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=pages-tableviewer-tableviewer-module-es2015.js.map
