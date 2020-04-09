(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wordmaker-wordmaker-module"],{

/***/ "./src/app/core/animations/value.animations.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/animations/value.animations.ts ***!
  \*****************************************************/
/*! exports provided: fadeAnimation, listAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fadeAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("3000ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("3000ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true })
    ])
]);
const listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("listAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])("10ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })))
        ], { optional: true })
        // query(':leave',
        // [style({ opacity: 1 }), stagger('10ms', animate('50ms ease-out', style({ opacity: 0 })))],
        // { optional: true }
        // )
    ])
]);


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker-conj-step/wordmaker-conj-step.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker-conj-step/wordmaker-conj-step.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WordmakerConjStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerConjStepComponent", function() { return WordmakerConjStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/settings/settings.selectors */ "./src/app/core/settings/settings.selectors.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/decapitalize/decapitalize */ "./src/app/shared/pipes/decapitalize/decapitalize.ts");












const _c0 = function (a0) { return { highlight: a0 }; };
function WordmakerConjStepComponent_div_14_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const settings_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r51["classes"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, (settings_r43 == null ? null : settings_r43.highlight[item_r51["type"]]) || (settings_r43 == null ? null : settings_r43.highlight[item_r51["classes"]])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r51["value"], "");
} }
function WordmakerConjStepComponent_div_14_div_1_h4_3_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordmakerConjStepComponent_div_14_div_1_h4_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerConjStepComponent_div_14_div_1_h4_3_span_1_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const settings_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r54["classes"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, (settings_r43 == null ? null : settings_r43.highlight[item_r54["type"]]) || (settings_r43 == null ? null : settings_r43.highlight[item_r54["classes"]])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r54["value"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conjugation_r45["main"].indexOf(item_r54) < conjugation_r45["main"].length - 1);
} }
function WordmakerConjStepComponent_div_14_div_1_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerConjStepComponent_div_14_div_1_h4_3_span_1_Template, 3, 8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r45["main"]);
} }
function WordmakerConjStepComponent_div_14_div_1_h4_4_span_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordmakerConjStepComponent_div_14_div_1_h4_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "decapitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WordmakerConjStepComponent_div_14_div_1_h4_4_span_1_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const settings_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r60["classes"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, (settings_r43 == null ? null : settings_r43.highlight[item_r60["type"]]) || (settings_r43 == null ? null : settings_r43.highlight[item_r60["classes"]])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, item_r60["value"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conjugation_r45["secondary"].indexOf(item_r60) < conjugation_r45["secondary"].length - 1);
} }
function WordmakerConjStepComponent_div_14_div_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerConjStepComponent_div_14_div_1_h4_4_span_1_Template, 4, 10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r45["secondary"]);
} }
function WordmakerConjStepComponent_div_14_div_1_h4_5_span_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordmakerConjStepComponent_div_14_div_1_h4_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "decapitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WordmakerConjStepComponent_div_14_div_1_h4_5_span_1_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const settings_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r66["classes"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, (settings_r43 == null ? null : settings_r43.highlight[item_r66["type"]]) || (settings_r43 == null ? null : settings_r43.highlight[item_r66["classes"]])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, item_r66["value"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conjugation_r45["ternary"].indexOf(item_r66) < conjugation_r45["ternary"].length - 1);
} }
function WordmakerConjStepComponent_div_14_div_1_h4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerConjStepComponent_div_14_div_1_h4_5_span_1_Template, 4, 10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r45["ternary"]);
} }
function WordmakerConjStepComponent_div_14_div_1_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conjugation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", conjugation_r45["translation"], " ");
} }
function WordmakerConjStepComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerConjStepComponent_div_14_div_1_span_2_Template, 2, 7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WordmakerConjStepComponent_div_14_div_1_h4_3_Template, 2, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WordmakerConjStepComponent_div_14_div_1_h4_4_Template, 2, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WordmakerConjStepComponent_div_14_div_1_h4_5_Template, 2, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WordmakerConjStepComponent_div_14_div_1_h4_6_Template, 3, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conjugation_r45 = ctx.$implicit;
    const settings_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", conjugation_r45["main"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r43 == null ? null : settings_r43.level.breakdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r43 == null ? null : settings_r43.level.gloss);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r43 == null ? null : settings_r43.level["breakdown-translation"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", settings_r43 == null ? null : settings_r43.level.translation);
} }
function WordmakerConjStepComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerConjStepComponent_div_14_div_1_Template, 7, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r42.word$));
} }
class WordmakerConjStepComponent {
    constructor(store, selectionService, conjugationService) {
        this.store = store;
        this.selectionService = selectionService;
        this.conjugationService = conjugationService;
    }
    ngOnInit() {
        this.settings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_core_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSettings"]));
        this.word$ = this.selectionService.selection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(selection => {
            if (selection.root &&
                ((selection.root.thematic_relation === "purple" &&
                    selection.agent &&
                    selection.patient) ||
                    (selection.root.thematic_relation === "red" && selection.agent) ||
                    (selection.root.thematic_relation === "blue" && selection.patient))) {
                const args = Object.entries(selection).reduce((a, [k, v]) => (v == null ? a : Object.assign(Object.assign({}, a), { [k]: [v.tag] })), {});
                return this.conjugationService
                    .conjugate(args)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(conjugations => this.conjugationService.createTiers(conjugations)));
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
        }));
    }
}
WordmakerConjStepComponent.ɵfac = function WordmakerConjStepComponent_Factory(t) { return new (t || WordmakerConjStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_5__["WordmakerSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_5__["ConjugationService"])); };
WordmakerConjStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordmakerConjStepComponent, selectors: [["ww-wordmaker-conj-step"]], decls: 16, vars: 9, consts: [[1, "margin-top-20", "panel", "centered", "full-width"], [1, "panel__header"], [1, "container"], [1, "row"], [1, "margin-0", "font-lg"], [1, "congratulations", "col-sm-12"], [1, "font-lg", 3, "innerHTML"], [1, "margin-bottom-50"], ["class", "panel__content", 4, "ngIf"], [1, "panel__content"], ["id", "conjugation-result", "class", "conjugation center-text", 4, "ngFor", "ngForOf"], ["id", "conjugation-result", 1, "conjugation", "center-text"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngClass"]], template: function WordmakerConjStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WordmakerConjStepComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "ww.wordmaker.conj.congratulations-header"), "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, "ww.wordmaker.conj.congratulations-text"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx.settings$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _shared_pipes_decapitalize_decapitalize__WEBPACK_IMPORTED_MODULE_8__["DecapitalizePipe"]], styles: ["h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXItY29uai1zdGVwL3dvcmRtYWtlci1jb25qLXN0ZXAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXItY29uai1zdGVwL3dvcmRtYWtlci1jb25qLXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsU0FBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvd29yZG1ha2VyL3dvcmRtYWtlci1jb25qLXN0ZXAvd29yZG1ha2VyLWNvbmotc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLFxuaDQge1xuICBtYXJnaW46IDA7XG59XG4iLCJoMyxcbmg0IHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerConjStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-wordmaker-conj-step",
                templateUrl: "./wordmaker-conj-step.component.html",
                styleUrls: ["./wordmaker-conj-step.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_5__["WordmakerSelectionService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_5__["ConjugationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker-home/wordmaker-home.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker-home/wordmaker-home.component.ts ***!
  \****************************************************************************/
/*! exports provided: WordmakerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerHomeComponent", function() { return WordmakerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







class WordmakerHomeComponent {
    constructor() {
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"];
    }
    ngOnInit() { }
}
WordmakerHomeComponent.ɵfac = function WordmakerHomeComponent_Factory(t) { return new (t || WordmakerHomeComponent)(); };
WordmakerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordmakerHomeComponent, selectors: [["ww-wordmaker-home"]], decls: 11, vars: 10, consts: [[1, "container", "page", "page__content", "vwidth-90", "centered", "center-text"], [1, "welcome", "margin-top-100"], [3, "ngClass"], [3, "innerHTML"], ["mat-fab", "", "id", "start", "routerLink", "stepper", 1, "ui-button", "mat-fab", "mat-accent"]], template: function WordmakerHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.routeAnimationsElements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ww.wordmaker.home.welcome"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "ww.wordmaker.home.instructions"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "ww.wordmaker.home.start"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".welcome[_ngcontent-%COMP%] {\n  height: em(644);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXItaG9tZS93b3JkbWFrZXItaG9tZS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvd29yZG1ha2VyL3dvcmRtYWtlci1ob21lL3dvcmRtYWtlci1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvd29yZG1ha2VyL3dvcmRtYWtlci1ob21lL3dvcmRtYWtlci1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xuICBoZWlnaHQ6IGVtKDY0NCk7XG59XG4iLCIud2VsY29tZSB7XG4gIGhlaWdodDogZW0oNjQ0KTtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-wordmaker-home",
                templateUrl: "./wordmaker-home.component.html",
                styleUrls: ["./wordmaker-home.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker-pers-step/wordmaker-pers-step.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker-pers-step/wordmaker-pers-step.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WordmakerPersStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerPersStepComponent", function() { return WordmakerPersStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









function WordmakerPersStepComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} }
function WordmakerPersStepComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordmakerPersStepComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordmakerPersStepComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ww.wordmaker.pers.select-intransitive-pronoun"));
} }
function WordmakerPersStepComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ww.wordmaker.pers.select-transitive-pronoun"), " ");
} }
function WordmakerPersStepComponent_div_12_div_1_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerPersStepComponent_div_12_div_1_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const pn_r85 = ctx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r86.select("pat", pn_r85, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pn_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pn_r85.obj_gloss, " ");
} }
function WordmakerPersStepComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerPersStepComponent_div_12_div_1_mat_chip_2_Template, 4, 1, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pronouns_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pronouns_r80);
} }
function WordmakerPersStepComponent_div_12_div_2_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerPersStepComponent_div_12_div_2_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const pn_r90 = ctx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r91.select("ag", pn_r90, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pn_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pn_r90.obj_gloss, " ");
} }
function WordmakerPersStepComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerPersStepComponent_div_12_div_2_mat_chip_2_Template, 4, 1, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pronouns_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pronouns_r80);
} }
function WordmakerPersStepComponent_div_12_div_3_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerPersStepComponent_div_12_div_3_mat_chip_5_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const pn_r96 = ctx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r97.select("ag", pn_r96, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pn_r96 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r94.selectedAgent === pn_r96 ? "color-white bg-red" : "bg-white color-black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pn_r96.gloss, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r94.selectedAgent === pn_r96 ? "color-white" : "color-red");
} }
function WordmakerPersStepComponent_div_12_div_3_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerPersStepComponent_div_12_div_3_mat_chip_10_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const pn_r99 = ctx.$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r100.select("pat", pn_r99, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pn_r99 = ctx.$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r95.selectedPatient === pn_r99 ? "color-white bg-blue" : "bg-white color-black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pn_r99.obj_gloss, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r95.selectedPatient === pn_r99 ? "color-white" : "color-blue");
} }
function WordmakerPersStepComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WordmakerPersStepComponent_div_12_div_3_mat_chip_5_Template, 4, 3, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WordmakerPersStepComponent_div_12_div_3_mat_chip_10_Template, 4, 3, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pronouns_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ww.wordmaker.pers.patient-informal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pronouns_r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "ww.wordmaker.pers.agent-informal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pronouns_r80);
} }
function WordmakerPersStepComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerPersStepComponent_div_12_div_1_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerPersStepComponent_div_12_div_2_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WordmakerPersStepComponent_div_12_div_3_Template, 11, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.selectedVerb.thematic_relation === "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.selectedVerb.thematic_relation === "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.selectedVerb.thematic_relation === "purple");
} }
class WordmakerPersStepComponent {
    constructor(pronounService) {
        this.pronounService = pronounService;
        this.selectedPers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.pronouns$ = this.pronounService.pronouns$;
    }
    // TODO: refactor
    select(role, pn, transitive) {
        if (transitive) {
            if (role === "ag") {
                this.selectedAgent = pn;
                if (this.selectedPatient) {
                    this.selectedPers.emit({
                        agent: this.selectedAgent,
                        patient: this.selectedPatient
                    });
                }
                else {
                    this.selectedPers.emit({ agent: this.selectedAgent });
                }
            }
            else if (role === "pat") {
                this.selectedPatient = pn;
                if (this.selectedAgent) {
                    this.selectedPers.emit({
                        agent: this.selectedAgent,
                        patient: this.selectedPatient
                    });
                }
                else {
                    this.selectedPers.emit({ patient: this.selectedPatient });
                }
            }
        }
        else {
            if (role === "ag") {
                this.selectedPers.emit({ agent: pn });
            }
            else if (role === "pat") {
                this.selectedPers.emit({ patient: pn });
            }
        }
    }
}
WordmakerPersStepComponent.ɵfac = function WordmakerPersStepComponent_Factory(t) { return new (t || WordmakerPersStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["PronounService"])); };
WordmakerPersStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordmakerPersStepComponent, selectors: [["ww-wordmaker-pers-step"]], inputs: { selectedVerb: "selectedVerb" }, outputs: { selectedPers: "selectedPers" }, decls: 14, vars: 8, consts: [[1, "margin-top-20", "panel", "centered", "full-width"], ["loading", ""], [1, "panel__header--small"], [1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "instructions", "col-sm-12"], [4, "ngIf"], [1, "margin-bottom-50"], ["class", "panel__content--large", 4, "ngIf", "ngIfElse"], [1, "centered"], [1, "panel__content--large"], ["class", "pwidth-50--desktop pwidth-100--mobile centered", 4, "ngIf"], [1, "pwidth-50--desktop", "pwidth-100--mobile", "centered"], ["class", "bg-white border-accent color-black", 3, "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "border-accent", "color-black", 3, "click"], [1, "margin-left-5", "color-blue", "icon-md"], [1, "margin-left-5", "color-red", "icon-md"], ["class", "border-accent", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "bg-white border-accent", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "border-accent", 3, "ngClass", "click"], [1, "margin-left-5", "icon-md", 3, "ngClass"], [1, "bg-white", "border-accent", 3, "ngClass", "click"]], template: function WordmakerPersStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerPersStepComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WordmakerPersStepComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WordmakerPersStepComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WordmakerPersStepComponent_p_9_Template, 3, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WordmakerPersStepComponent_p_10_Template, 3, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WordmakerPersStepComponent_div_12_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedVerb.thematic_relation !== "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedVerb.thematic_relation !== "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedVerb.thematic_relation !== "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedVerb.thematic_relation === "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.pronouns$))("ngIfElse", _r73);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXItcGVycy1zdGVwL3dvcmRtYWtlci1wZXJzLXN0ZXAuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerPersStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-wordmaker-pers-step",
                templateUrl: "./wordmaker-pers-step.component.html",
                styleUrls: ["./wordmaker-pers-step.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["PronounService"] }]; }, { selectedVerb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedPers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WordmakerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerRoutingModule", function() { return WordmakerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wordmaker_wordmaker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordmaker/wordmaker.component */ "./src/app/pages/wordmaker/wordmaker/wordmaker.component.ts");
/* harmony import */ var _wordmaker_home_wordmaker_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wordmaker-home/wordmaker-home.component */ "./src/app/pages/wordmaker/wordmaker-home/wordmaker-home.component.ts");






const routes = [
    {
        path: "stepper",
        component: _wordmaker_wordmaker_component__WEBPACK_IMPORTED_MODULE_2__["WordmakerComponent"],
        data: { title: "ww.menu.wordmaker.stepper" }
    },
    {
        path: "",
        component: _wordmaker_home_wordmaker_home_component__WEBPACK_IMPORTED_MODULE_3__["WordmakerHomeComponent"],
        data: { title: "ww.menu.wordmaker.home" }
    }
];
class WordmakerRoutingModule {
}
WordmakerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WordmakerRoutingModule });
WordmakerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WordmakerRoutingModule_Factory(t) { return new (t || WordmakerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WordmakerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker-temp-step/wordmaker-temp-step.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker-temp-step/wordmaker-temp-step.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WordmakerTempStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerTempStepComponent", function() { return WordmakerTempStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









function WordmakerTempStepComponent_div_13_div_1_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerTempStepComponent_div_13_div_1_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const temp_r123 = ctx.$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r124.onChipClick(temp_r123.values.affopt); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](temp_r123.translation);
} }
function WordmakerTempStepComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerTempStepComponent_div_13_div_1_mat_chip_2_Template, 2, 1, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temps_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", temps_r120);
} }
function WordmakerTempStepComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerTempStepComponent_div_13_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temps_r120 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", temps_r120.length > 0);
} }
class WordmakerTempStepComponent {
    constructor(affixService, conjugationService, selectionService) {
        this.affixService = affixService;
        this.conjugationService = conjugationService;
        this.selectionService = selectionService;
        this.selectedTemp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.temps$ = this.selectionService.selection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(selection => {
            if (selection.root &&
                ((selection.root.thematic_relation === "purple" &&
                    selection.agent &&
                    selection.patient) ||
                    (selection.root.thematic_relation === "red" && selection.agent) ||
                    (selection.root.thematic_relation === "blue" && selection.patient))) {
                const args = Object.entries(selection).reduce((a, [k, v]) => (v == null ? a : Object.assign(Object.assign({}, a), { [k]: [v.tag] })), {});
                args["aff-option"] = [];
                return this.conjugationService.conjugate(args);
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
        }));
    }
    onChipClick(tag) {
        this.returnAffoptFromTag$(tag).subscribe(t => {
            this.selectedTemp.emit(t);
        });
    }
    returnAffoptFromTag$(tag) {
        return this.affixService.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(affopts => {
            const picked_ao = affopts.filter(ao => ao["tag"] === tag)[0];
            return picked_ao;
        }));
    }
    returnAffoptFromGloss$(gloss) {
        return this.affixService.affoptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(affopts => {
            const picked_ao = affopts.filter(ao => ao["gloss"] === gloss)[0];
            return picked_ao;
        }));
    }
}
WordmakerTempStepComponent.ɵfac = function WordmakerTempStepComponent_Factory(t) { return new (t || WordmakerTempStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["AffixService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["ConjugationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["WordmakerSelectionService"])); };
WordmakerTempStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordmakerTempStepComponent, selectors: [["ww-wordmaker-temp-step"]], inputs: { selectedVerb: "selectedVerb", selectedPers: "selectedPers" }, outputs: { selectedTemp: "selectedTemp" }, decls: 15, vars: 6, consts: [[1, "margin-top-20", "panel", "centered", "full-width"], [1, "panel__header--small"], [1, "container"], [1, "row"], [1, "instructions", "col-sm-12"], [1, "margin-bottom-50"], ["class", "panel__content--large", 4, "ngIf"], [1, "panel__content--large"], ["class", "pwidth-50--desktop pwidth-100--mobile centered", 4, "ngIf"], [1, "pwidth-50--desktop", "pwidth-100--mobile", "centered"], ["class", "bg-white color-black border-accent", 3, "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "color-black", "border-accent", 3, "click"]], template: function WordmakerTempStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WordmakerTempStepComponent_div_13_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, "ww.wordmaker.temp.select-temp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, ctx.temps$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXItdGVtcC1zdGVwL3dvcmRtYWtlci10ZW1wLXN0ZXAuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerTempStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-wordmaker-temp-step",
                templateUrl: "./wordmaker-temp-step.component.html",
                styleUrls: ["./wordmaker-temp-step.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["AffixService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["ConjugationService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["WordmakerSelectionService"] }]; }, { selectedVerb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedPers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedTemp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker-verb-step/wordmaker-verb-step.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker-verb-step/wordmaker-verb-step.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WordmakerVerbStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerVerbStepComponent", function() { return WordmakerVerbStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_animations_value_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/animations/value.animations */ "./src/app/core/animations/value.animations.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

















const _c0 = function (a0) { return { number: a0 }; };
function WordmakerVerbStepComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "ww.wordmaker.verb.select-verb-multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r103.viewableVerbs$)) == null ? null : tmp_0_0.length)), " ");
} }
function WordmakerVerbStepComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ww.wordmaker.verb.select-verb-single"));
} }
const _c1 = function (a0) { return { value: a0 }; };
function WordmakerVerbStepComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, "ww.wordmaker.verb.no-matching-verbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r105.searchField.value)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function WordmakerVerbStepComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 16);
} }
function WordmakerVerbStepComponent_mat_chip_list_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ww.wordmaker.verb.try-again"));
} }
function WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verb_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](verb_r112.display);
} }
function WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verb_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](verb_r112.gloss);
} }
function WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const verb_r112 = ctx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r117.select(verb_r112); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "brightness_1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verb_r112 = ctx.$implicit;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r111.display_language !== "english");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r111.display_language === "english");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (verb_r112 == null ? null : verb_r112.thematic_relation) ? "color-" + (verb_r112 == null ? null : verb_r112.thematic_relation) : "");
} }
function WordmakerVerbStepComponent_mat_chip_list_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WordmakerVerbStepComponent_mat_chip_list_18_p_1_Template, 3, 3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WordmakerVerbStepComponent_mat_chip_list_18_mat_chip_2_Template, 5, 3, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verbs_r109 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", verbs_r109.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", verbs_r109);
} }
class WordmakerVerbStepComponent {
    constructor(verbService, fb) {
        this.verbService = verbService;
        this.fb = fb;
        this.viewableVerbs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.language = "ww.language";
        this.display_language = "english";
        this.selectedVerb = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // subscribe to search input
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.verbForm = this.fb.group({ search: this.searchField });
    }
    ngOnInit() {
        this.verbService.verbs$.subscribe(x => this.viewableVerbs$.next(x));
        this.searchField.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(term => this.viewableVerbs$.next(this.filterEntries(term))))
            .subscribe();
    }
    filterEntries(term) {
        return this.verbService.verbs.filter(v => v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
            v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }
    select(verb) {
        this.selectedVerb.emit(verb);
    }
    sortVerbs(verbs) {
        if (this.display_language === "english") {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"])(verbs, ["gloss"]);
        }
        else {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"])(verbs, ["display"]);
        }
    }
}
WordmakerVerbStepComponent.ɵfac = function WordmakerVerbStepComponent_Factory(t) { return new (t || WordmakerVerbStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_1__["VerbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
WordmakerVerbStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordmakerVerbStepComponent, selectors: [["ww-wordmaker-verb-step"]], outputs: { selectedVerb: "selectedVerb" }, decls: 20, vars: 13, consts: [[1, "margin-top-20", "full-width", "centered", "panel"], [1, "panel__header", "container"], [1, "row"], [1, "col-sm-12"], [1, "margin-left-25", "font-md"], [1, "margin-bottom-20", 3, "formGroup"], ["autocomplete", "off", "type", "text", "value", "", "aria-label", "Number", "matInput", "", "formControlName", "search", 3, "placeholder"], [1, "instructions", "col-sm-12", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [1, "margin-bottom-50"], [1, "panel__content"], ["loading", ""], ["class", "panel__list custom-scroll", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [1, "centered"], [1, "panel__list", "custom-scroll"], [4, "ngIf"], ["class", "margin-5 bg-white border-accent", 3, "click", 4, "ngFor", "ngForOf"], [1, "margin-5", "bg-white", "border-accent", 3, "click"], ["class", "centered color-black", 4, "ngIf"], [1, "icon-sm", "margin-left-5", 3, "ngClass"], [1, "centered", "color-black"]], template: function WordmakerVerbStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WordmakerVerbStepComponent_p_11_Template, 4, 8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WordmakerVerbStepComponent_p_12_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WordmakerVerbStepComponent_p_13_Template, 2, 6, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WordmakerVerbStepComponent_ng_template_16_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WordmakerVerbStepComponent_mat_chip_list_18_Template, 3, 2, "mat-chip-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.viewableVerbs$)) == null ? null : tmp_2_0.length;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.verbForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "ww.wordmaker.verb.search-placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, ctx.viewableVerbs$))("ngIfElse", _r106);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXItdmVyYi1zdGVwL3dvcmRtYWtlci12ZXJiLXN0ZXAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_core_animations_value_animations__WEBPACK_IMPORTED_MODULE_6__["fadeAnimation"], _core_animations_value_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerVerbStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-wordmaker-verb-step",
                templateUrl: "./wordmaker-verb-step.component.html",
                styleUrls: ["./wordmaker-verb-step.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [_core_animations_value_animations__WEBPACK_IMPORTED_MODULE_6__["fadeAnimation"], _core_animations_value_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]]
            }]
    }], function () { return [{ type: _core_core_module__WEBPACK_IMPORTED_MODULE_1__["VerbService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, { selectedVerb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker.module.ts ***!
  \*****************************************************/
/*! exports provided: WordmakerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerModule", function() { return WordmakerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _wordmaker_wordmaker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordmaker/wordmaker.component */ "./src/app/pages/wordmaker/wordmaker/wordmaker.component.ts");
/* harmony import */ var _wordmaker_conj_step_wordmaker_conj_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordmaker-conj-step/wordmaker-conj-step.component */ "./src/app/pages/wordmaker/wordmaker-conj-step/wordmaker-conj-step.component.ts");
/* harmony import */ var _wordmaker_pers_step_wordmaker_pers_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wordmaker-pers-step/wordmaker-pers-step.component */ "./src/app/pages/wordmaker/wordmaker-pers-step/wordmaker-pers-step.component.ts");
/* harmony import */ var _wordmaker_verb_step_wordmaker_verb_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wordmaker-verb-step/wordmaker-verb-step.component */ "./src/app/pages/wordmaker/wordmaker-verb-step/wordmaker-verb-step.component.ts");
/* harmony import */ var _wordmaker_temp_step_wordmaker_temp_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wordmaker-temp-step/wordmaker-temp-step.component */ "./src/app/pages/wordmaker/wordmaker-temp-step/wordmaker-temp-step.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _wordmaker_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wordmaker-routing.module */ "./src/app/pages/wordmaker/wordmaker-routing.module.ts");
/* harmony import */ var _wordmaker_home_wordmaker_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wordmaker-home/wordmaker-home.component */ "./src/app/pages/wordmaker/wordmaker-home/wordmaker-home.component.ts");










class WordmakerModule {
}
WordmakerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WordmakerModule });
WordmakerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WordmakerModule_Factory(t) { return new (t || WordmakerModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _wordmaker_routing_module__WEBPACK_IMPORTED_MODULE_7__["WordmakerRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WordmakerModule, { declarations: [_wordmaker_wordmaker_component__WEBPACK_IMPORTED_MODULE_1__["WordmakerComponent"],
        _wordmaker_conj_step_wordmaker_conj_step_component__WEBPACK_IMPORTED_MODULE_2__["WordmakerConjStepComponent"],
        _wordmaker_pers_step_wordmaker_pers_step_component__WEBPACK_IMPORTED_MODULE_3__["WordmakerPersStepComponent"],
        _wordmaker_verb_step_wordmaker_verb_step_component__WEBPACK_IMPORTED_MODULE_4__["WordmakerVerbStepComponent"],
        _wordmaker_temp_step_wordmaker_temp_step_component__WEBPACK_IMPORTED_MODULE_5__["WordmakerTempStepComponent"],
        _wordmaker_home_wordmaker_home_component__WEBPACK_IMPORTED_MODULE_8__["WordmakerHomeComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _wordmaker_routing_module__WEBPACK_IMPORTED_MODULE_7__["WordmakerRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _wordmaker_wordmaker_component__WEBPACK_IMPORTED_MODULE_1__["WordmakerComponent"],
                    _wordmaker_conj_step_wordmaker_conj_step_component__WEBPACK_IMPORTED_MODULE_2__["WordmakerConjStepComponent"],
                    _wordmaker_pers_step_wordmaker_pers_step_component__WEBPACK_IMPORTED_MODULE_3__["WordmakerPersStepComponent"],
                    _wordmaker_verb_step_wordmaker_verb_step_component__WEBPACK_IMPORTED_MODULE_4__["WordmakerVerbStepComponent"],
                    _wordmaker_temp_step_wordmaker_temp_step_component__WEBPACK_IMPORTED_MODULE_5__["WordmakerTempStepComponent"],
                    _wordmaker_home_wordmaker_home_component__WEBPACK_IMPORTED_MODULE_8__["WordmakerHomeComponent"]
                ],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _wordmaker_routing_module__WEBPACK_IMPORTED_MODULE_7__["WordmakerRoutingModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/wordmaker/wordmaker/wordmaker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/wordmaker/wordmaker/wordmaker.component.ts ***!
  \******************************************************************/
/*! exports provided: WordmakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordmakerComponent", function() { return WordmakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ "../../node_modules/@biesbjerg/ngx-translate-extract-marker/fesm2015/biesbjerg-ngx-translate-extract-marker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/fesm2015/stepper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _wordmaker_verb_step_wordmaker_verb_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wordmaker-verb-step/wordmaker-verb-step.component */ "./src/app/pages/wordmaker/wordmaker-verb-step/wordmaker-verb-step.component.ts");
/* harmony import */ var _wordmaker_pers_step_wordmaker_pers_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wordmaker-pers-step/wordmaker-pers-step.component */ "./src/app/pages/wordmaker/wordmaker-pers-step/wordmaker-pers-step.component.ts");
/* harmony import */ var _wordmaker_temp_step_wordmaker_temp_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wordmaker-temp-step/wordmaker-temp-step.component */ "./src/app/pages/wordmaker/wordmaker-temp-step/wordmaker-temp-step.component.ts");
/* harmony import */ var _wordmaker_conj_step_wordmaker_conj_step_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wordmaker-conj-step/wordmaker-conj-step.component */ "./src/app/pages/wordmaker/wordmaker-conj-step/wordmaker-conj-step.component.ts");



















const _c0 = ["stepper"];
function WordmakerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r27.verbLabel)));
} }
function WordmakerComponent_ww_wordmaker_verb_step_7_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ww-wordmaker-verb-step", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedVerb", function WordmakerComponent_ww_wordmaker_verb_step_7_Template_ww_wordmaker_verb_step_selectedVerb_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onVerbSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordmakerComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r29.persLabel)));
} }
function WordmakerComponent_ww_wordmaker_pers_step_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ww-wordmaker-pers-step", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedPers", function WordmakerComponent_ww_wordmaker_pers_step_15_Template_ww_wordmaker_pers_step_selectedPers_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onPersSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedVerb", ctx_r30.verbFormGroup.controls.verbCtrl.value);
} }
function WordmakerComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r31.tempLabel)));
} }
function WordmakerComponent_ww_wordmaker_temp_step_26_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ww-wordmaker-temp-step", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTemp", function WordmakerComponent_ww_wordmaker_temp_step_26_Template_ww_wordmaker_temp_step_selectedTemp_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onTempSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedVerb", ctx_r32.verbFormGroup.controls.verbCtrl.value)("selectedPers", ctx_r32.persFormGroup.controls.persCtrl.value);
} }
function WordmakerComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ww.wordmaker.finished"));
} }
function WordmakerComponent_ww_wordmaker_conj_step_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ww-wordmaker-conj-step");
} }
class WordmakerComponent {
    constructor(formBuilder, notificationService, affixService, pronounService, verbService, selectionService, translate) {
        this.formBuilder = formBuilder;
        this.notificationService = notificationService;
        this.affixService = affixService;
        this.pronounService = pronounService;
        this.verbService = verbService;
        this.selectionService = selectionService;
        this.translate = translate;
        this.isLinear = true;
        this.verbLabel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.verb.question"));
        this.persLabel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.pers.question"));
        this.tempLabel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.temp.question"));
    }
    ngOnInit() {
        // console.log(this.stepper.selectedIndex)
        // this.stepper.valueChanges.subscribe(x => console.log(x.selected))
        // Step 1: Verb
        this.verbFormGroup = this.formBuilder.group({
            verbCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.verbFormGroup.controls.verbCtrl.valueChanges.subscribe(x => {
            if (x) {
                this.verbLabel.next(x.gloss);
            }
            else {
                this.verbLabel.next("ww.wordmaker.verb.question");
            }
            this.selectionService.updateVerb(x);
        });
        // Step 2: Pronoun
        this.persFormGroup = this.formBuilder.group({
            persCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.persFormGroup.controls.persCtrl.valueChanges.subscribe(x => {
            if (x) {
                let label = "";
                if ("agent" in x && "patient" in x) {
                    label = x.agent.gloss + " > " + x.patient.gloss;
                    this.selectionService.updateAgent(x.agent);
                    this.selectionService.updatePatient(x.patient);
                }
                else if ("agent" in x) {
                    this.selectionService.updateAgent(x.agent);
                    label = x.agent.gloss;
                }
                else if ("patient" in x) {
                    this.selectionService.updatePatient(x.patient);
                    label = x.patient.gloss;
                }
                this.persLabel.next(label);
            }
            else {
                this.persLabel.next("ww.wordmaker.pers.question");
            }
        });
        // Step 3: Temporal
        this.tempFormGroup = this.formBuilder.group({
            tempCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.tempFormGroup.controls.tempCtrl.valueChanges.subscribe(x => {
            if (x) {
                this.tempLabel.next(x.gloss);
            }
            else {
                this.tempLabel.next("ww.wordmaker.temp.question");
            }
            this.selectionService.updateAffOption(x);
        });
    }
    // tslint:disable-next-line: use-life-cycle-interface
    ngAfterViewInit() {
        this.currentStep$ = this.stepper.selectedIndex.valueChanges;
    }
    randomX(x) {
        return x[Math.floor(Math.random() * (x.length - 1) + 1)];
    }
    selectRandomIfNull(type) {
        if (type === "verb" && !this.verbFormGroup.controls.verbCtrl.value) {
            this.onVerbSelect(this.randomX(this.verbService.verbs), true);
        }
        else if (type === "pers" && !this.persFormGroup.controls.persCtrl.value) {
            if (this.verbFormGroup.controls.verbCtrl.value.thematic_relation ===
                "purple") {
                // TODO: Filter options
                this.onPersSelect({
                    agent: this.randomX(this.pronounService.pronouns),
                    patient: this.randomX(this.pronounService.pronouns)
                });
            }
            else if (this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red") {
                this.onPersSelect({
                    agent: this.randomX(this.pronounService.pronouns)
                }, true);
            }
            else if (this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue") {
                this.onPersSelect({
                    patient: this.randomX(this.pronounService.pronouns)
                }, true);
            }
        }
        else if (type === "temp" && !this.tempFormGroup.controls.tempCtrl.value) {
            this.onTempSelect(this.randomX(this.affixService.affixoptions), true);
        }
    }
    onVerbSelect($event, random = false) {
        // Reset following steps
        this.selectionService.updateAgent("");
        this.selectionService.updatePatient("");
        this.selectionService.updateAffOption("");
        this.persFormGroup.reset();
        this.tempFormGroup.reset();
        this.verbFormGroup.controls.verbCtrl.setValue($event);
        if (random) {
            this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.random.verb"), { value: $event.gloss }, "success");
        }
        else {
            this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.selected.verb"), { value: $event.gloss }, "success");
        }
        this.stepper.next();
    }
    onPersSelect($event, random = false) {
        this.persFormGroup.controls.persCtrl.setValue($event);
        let completed = false;
        // Reset following step
        this.selectionService.updateAffOption("");
        this.tempFormGroup.reset();
        if ("agent" in $event && "patient" in $event) {
            if (random) {
                this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.random.pers.transitive"), { agent: $event.agent.gloss, patient: $event.patient.gloss }, "success");
            }
            else {
                this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.selected.pers.transitive"), { agent: $event.agent.gloss, patient: $event.patient.gloss }, "success");
            }
            completed = true;
        }
        else if ("agent" in $event) {
            if (this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red") {
                if (random) {
                    this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.random.pers.intransitive"), { value: $event.agent.gloss }, "success");
                }
                else {
                    this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.selected.pers.intransitive"), { value: $event.agent.gloss }, "success");
                }
                completed = true;
            }
        }
        else if ("patient" in $event) {
            if (this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue") {
                if (random) {
                    this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.random.pers.intransitive"), { value: $event.patient.gloss }, "success");
                }
                else {
                    this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.selected.pers.intransitive"), { value: $event.patient.gloss }, "success");
                }
                completed = true;
            }
        }
        if (completed) {
            this.stepper.next();
        }
    }
    onTempSelect($event, random = false) {
        this.tempFormGroup.controls.tempCtrl.setValue($event);
        if (random) {
            this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.random.temp"), { value: $event.gloss }, "success");
        }
        else {
            this.notificationService.translated(Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__["marker"])("ww.wordmaker.notifications.selected.temp"), { value: $event.gloss }, "success");
        }
        this.stepper.next();
    }
}
WordmakerComponent.ɵfac = function WordmakerComponent_Factory(t) { return new (t || WordmakerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_2__["AffixService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_2__["PronounService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_2__["VerbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_2__["WordmakerSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
WordmakerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordmakerComponent, selectors: [["ww-wordmaker"]], viewQuery: function WordmakerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 44, vars: 36, consts: [[1, "container", "page__content", "vwidth-90", "centered", "margin-bottom-50"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "step-container"], [3, "selectedVerb", 4, "ngIf", "ngIfElse"], [1, "margin-top-30"], ["mat-raised-button", "", "matStepperNext", "", 1, "mat-accent", "float-right", 3, "click"], [3, "selectedVerb", "selectedPers", 4, "ngIf", "ngIfElse"], ["mat-raised-button", "", "matStepperPrevious", "", 1, "mat-accent", "float-left"], [3, "selectedVerb", "selectedPers", "selectedTemp", 4, "ngIf", "ngIfElse"], [4, "ngIf", "ngIfElse"], ["mat-raised-button", "", 1, "mat-accent", "float-right", 3, "click"], [3, "selectedVerb"], [3, "selectedVerb", "selectedPers"], [3, "selectedVerb", "selectedPers", "selectedTemp"]], template: function WordmakerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WordmakerComponent_ng_template_5_Template, 3, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WordmakerComponent_ww_wordmaker_verb_step_7_Template, 1, 0, "ww-wordmaker-verb-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerComponent_Template_button_click_9_listener() { return ctx.selectRandomIfNull("verb"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WordmakerComponent_ng_template_14_Template, 3, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WordmakerComponent_ww_wordmaker_pers_step_15_Template, 1, 1, "ww-wordmaker-pers-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerComponent_Template_button_click_20_listener() { return ctx.selectRandomIfNull("pers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WordmakerComponent_ng_template_25_Template, 3, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WordmakerComponent_ww_wordmaker_temp_step_26_Template, 1, 2, "ww-wordmaker-temp-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerComponent_Template_button_click_31_listener() { return ctx.selectRandomIfNull("temp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WordmakerComponent_ng_template_35_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WordmakerComponent_ww_wordmaker_conj_step_36_Template, 1, 0, "ww-wordmaker-conj-step", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordmakerComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r26.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.verbFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.verbFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.selectedIndex === 0)("ngIfElse", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, "ww.wordmaker.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.persFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.persFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.selectedIndex === 1)("ngIfElse", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 24, "ww.wordmaker.previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 26, "ww.wordmaker.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.tempFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.persFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.selectedIndex === 2)("ngIfElse", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 28, "ww.wordmaker.previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 30, "ww.wordmaker.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.selectedIndex === 3)("ngIfElse", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 32, "ww.wordmaker.previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 34, "ww.wordmaker.restart"));
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _wordmaker_verb_step_wordmaker_verb_step_component__WEBPACK_IMPORTED_MODULE_9__["WordmakerVerbStepComponent"], _wordmaker_pers_step_wordmaker_pers_step_component__WEBPACK_IMPORTED_MODULE_10__["WordmakerPersStepComponent"], _wordmaker_temp_step_wordmaker_temp_step_component__WEBPACK_IMPORTED_MODULE_11__["WordmakerTempStepComponent"], _wordmaker_conj_step_wordmaker_conj_step_component__WEBPACK_IMPORTED_MODULE_12__["WordmakerConjStepComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".step-container[_ngcontent-%COMP%] {\n  max-height: 40%;\n  height: 40%;\n  min-height: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL3dvcmRtYWtlci93b3JkbWFrZXIvd29yZG1ha2VyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy93b3JkbWFrZXIvd29yZG1ha2VyL3dvcmRtYWtlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3dvcmQtd2VhdmVyL3NyYy9hcHAvcGFnZXMvd29yZG1ha2VyL3dvcmRtYWtlci93b3JkbWFrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MCU7XG4gIGhlaWdodDogNDAlO1xuICBtaW4taGVpZ2h0OiA0MCU7XG59XG4iLCIuc3RlcC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MCU7XG4gIGhlaWdodDogNDAlO1xuICBtaW4taGVpZ2h0OiA0MCU7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordmakerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ww-wordmaker",
                templateUrl: "./wordmaker.component.html",
                styleUrls: ["./wordmaker.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_2__["AffixService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_2__["PronounService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_2__["VerbService"] }, { type: _core_core_module__WEBPACK_IMPORTED_MODULE_2__["WordmakerSelectionService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["stepper"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-wordmaker-wordmaker-module-es2015.js.map