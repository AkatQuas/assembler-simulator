(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akat/playground/assembler-simulator/src/main.ts */"zUnb");


/***/ }),

/***/ "0OMU":
/*!********************************************!*\
  !*** ./src/app/labels/labels.component.ts ***!
  \********************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _simulator_memory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../simulator/memory.service */ "II0G");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_numeral_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/numeral.pipe */ "EHuE");
/* harmony import */ var _shared_get_char_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-char.pipe */ "R+vU");







function LabelsComponent_ng_container_10_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "getChar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ('", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.memory.data[data_r1.value]), "') ");
} }
function LabelsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LabelsComponent_ng_container_10_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.jumpToLine(data_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "numeral");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "numeral");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LabelsComponent_ng_container_10_ng_template_11_Template, 3, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, data_r1.value, ctx_r0.displayHex), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx_r0.memory.data[data_r1.value], ctx_r0.displayHex), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.memory.data[data_r1.value] >= 32 && ctx_r0.memory.data[data_r1.value] <= 126);
} }
class LabelsComponent {
    constructor(memory) {
        this.memory = memory;
        this.displayHex = false;
        this.labels = {};
        this.jump = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._data = [];
    }
    ngOnChanges(changes) {
        const currentValue = changes.labels.currentValue;
        if (currentValue) {
            if (Object.keys(currentValue).length > 0) {
                this._data = [1];
            }
            else {
                this._data = [];
            }
        }
    }
    jumpToLine(index) {
        this.jump.emit(index);
    }
}
LabelsComponent.ɵfac = function LabelsComponent_Factory(t) { return new (t || LabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_simulator_memory_service__WEBPACK_IMPORTED_MODULE_1__["MemoryService"])); };
LabelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelsComponent, selectors: [["app-labels"]], inputs: { displayHex: "displayHex", labels: "labels" }, outputs: { jump: "jump" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 5, consts: [[3, "nzShowPagination", "nzData"], [4, "ngFor", "ngForOf"], [1, "codelabel"], [1, "codelabel-name"], [1, "codelable-line"], [3, "click"], [1, "codelabel-value"], [3, "ngIf"]], template: function LabelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LabelsComponent_ng_container_10_Template, 12, 10, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowPagination", false)("nzData", ctx._data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, ctx.labels));
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _shared_numeral_pipe__WEBPACK_IMPORTED_MODULE_4__["NumeralPipe"], _shared_get_char_pipe__WEBPACK_IMPORTED_MODULE_5__["GetCharPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYWJlbHMuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "0iQO":
/*!**************************************************!*\
  !*** ./src/app/simulator/simulator.component.ts ***!
  \**************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _simulator_cpu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../simulator/cpu.service */ "oO9f");
/* harmony import */ var _simulator_memory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../simulator/memory.service */ "II0G");
/* harmony import */ var _assembler_assembler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assembler/assembler.service */ "LGyc");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_tab_support_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/tab-support.directive */ "HLAI");
/* harmony import */ var _shared_select_line_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/select-line.directive */ "3Evw");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../uploader/uploader.component */ "1rDD");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _registers_registers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../registers/registers.component */ "ksR8");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../output/output.component */ "z+Vf");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../labels/labels.component */ "0OMU");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../instruction/instruction.component */ "iAtR");
/* harmony import */ var _shared_numeral_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/numeral.pipe */ "EHuE");





























function SimulatorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-alert", 34);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMessage", ctx_r0.error);
} }
function SimulatorComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-instruction");
} }
function SimulatorComponent_15_ng_template_0_Template(rf, ctx) { }
function SimulatorComponent_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimulatorComponent_15_ng_template_0_Template, 0, 0, "ng-template");
} }
function SimulatorComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimulatorComponent_ng_template_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.run(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SimulatorComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimulatorComponent_ng_template_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Stop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SimulatorComponent_ng_container_32_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "numeral");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, m_r16, ctx_r18.displayHex));
} }
function SimulatorComponent_ng_container_32_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimulatorComponent_ng_container_32_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const index_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.jumpToLine(index_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "numeral");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, m_r16, ctx_r19.displayHex));
} }
function SimulatorComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SimulatorComponent_ng_container_32_small_3_Template, 3, 4, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SimulatorComponent_ng_container_32_a_4_Template, 4, 4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const index_r17 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r9.getMemoryCellCss(index_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r9.getMemoryInnerCellCss(index_r17))("ngSwitch", ctx_r9.isInstruction(index_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
} }
function SimulatorComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r25.speed)("nzLabel", item_r25.desc);
} }
class SimulatorComponent {
    constructor(cpu, memory, assembler, message) {
        this.cpu = cpu;
        this.memory = memory;
        this.assembler = assembler;
        this.message = message;
        this.error = '';
        this.assembled = false;
        this.isRunning = false;
        this.displayHex = true;
        this.displayInstr = true;
        this.displayA = true;
        this.displayB = true;
        this.displayC = true;
        this.displayD = true;
        this.speeds = [
            { speed: 1, desc: '1 Hz' },
            { speed: 4, desc: '4 Hz' },
            { speed: 8, desc: '8 Hz' },
            { speed: 16, desc: '16 Hz' },
            { speed: 32, desc: '32 Hz' },
        ];
        this.speed = 16;
        this.selectedLine = -1;
        this.code = `;Simple example
;Writes "Hello 42" to the output

  JMP start
hello:
  DB "Hello 42!"  ; Variable
  DB 0            ; String terminator

start:
  MOV C, hello    ; Point to var
  MOV D, 232      ; Point to output
  CALL print
  HLT             ; Stop execution

print:            ; print(C:*from, D:*to)
  PUSH A
  PUSH B
  MOV B, 0
.loop:
  MOV A, [C]      ; Get char from var
  MOV [D], A      ; Write to output
  INC C
  INC D
  CMP B, [C]      ; Check if end
  JNZ .loop       ; jump if not

  POP B
  POP A
  RET`;
        this.runner = null;
    }
    reset() {
        if (this.isRunning) {
            this.message.create('warning', `Can not reset simulator when running!`);
            return;
        }
        this.cpu.reset();
        this.memory.reset();
        this.assembled = false;
        this.error = '';
        this.selectedLine = -1;
        this.mapping = {};
        this.labels = {};
    }
    executeStep() {
        if (!this.assembled) {
            this.message.create('error', `Can not execute before assembling!`);
            return;
        }
        try {
            // Execute
            // make CPU step once, execute one instruction
            const res = this.cpu.step();
            if (this.cpu.ip in this.mapping) {
                this.selectedLine = this.mapping[this.cpu.ip];
            }
            return res;
        }
        catch (error) {
            this.error = `${error}`;
            return false;
        }
    }
    run() {
        this.ensureProgramLoaded();
        this.isRunning = true;
        this.runner = window.setTimeout(() => {
            if (this.executeStep() === true) {
                this.run();
            }
            else {
                this.isRunning = false;
            }
        }, 1000 / this.speed);
    }
    stop() {
        window.clearTimeout(this.runner);
        this.isRunning = false;
    }
    ensureProgramLoaded() {
        let needAssemble = true;
        do {
            for (let i = 0, l = this.memory.data.length; i < l; i++) {
                if (this.memory.data[i] !== 0) {
                    needAssemble = false;
                    break;
                }
            }
        } while (false);
        if (needAssemble) {
            this.assemble();
        }
    }
    assemble() {
        if (this.assembled) {
            return;
        }
        try {
            this.reset();
            const assembly = this.assembler.go(this.code);
            this.mapping = assembly.mapping;
            this.labels = assembly.labels;
            const binary = assembly.code;
            if (binary.length > this.memory.data.length) {
                throw new Error(`Binary code does not fit into the memory. Max ${this.memory.data.length} bytes are allowed`);
            }
            for (let i = 0, l = binary.length; i < l; i++) {
                this.memory.data[i] = binary[i];
            }
            this.assembled = true;
        }
        catch (error) {
            this.assembled = false;
            if (error.line !== undefined) {
                this.error = `${error.line} | ${error.error}`;
                this.selectedLine = error.line;
            }
            else {
                this.error = error;
            }
        }
    }
    parsedCode(code) {
        this.code = code;
    }
    jumpToLine(index) {
        window.document.querySelector('#sourceCode').scrollIntoView();
        this.selectedLine = this.mapping[index];
    }
    isInstruction(index) {
        return (this.mapping !== undefined &&
            this.mapping[index] !== undefined &&
            this.displayInstr);
    }
    getMemoryCellCss(index) {
        if (index >= _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OUTPUT_START_INDEX"]) {
            return 'output-bg';
        }
        if (this.isInstruction(index)) {
            return 'instr-bg';
        }
        if (index > this.cpu.sp && index <= _shared_constants__WEBPACK_IMPORTED_MODULE_0__["MAX_SP"]) {
            return 'stack-bg';
        }
        return '';
    }
    getMemoryInnerCellCss(index) {
        if (index === this.cpu.ip) {
            return 'marker marker-ip';
        }
        if (index === this.cpu.sp) {
            return 'marker marker-sp';
        }
        if (index === this.cpu.gpr[0] && this.displayA) {
            return 'marker marker-a';
        }
        if (index === this.cpu.gpr[1] && this.displayB) {
            return 'marker marker-b';
        }
        if (index === this.cpu.gpr[2] && this.displayC) {
            return 'marker marker-c';
        }
        if (index === this.cpu.gpr[3] && this.displayD) {
            return 'marker marker-d';
        }
        return '';
    }
}
SimulatorComponent.ɵfac = function SimulatorComponent_Factory(t) { return new (t || SimulatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_simulator_cpu_service__WEBPACK_IMPORTED_MODULE_2__["CpuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_simulator_memory_service__WEBPACK_IMPORTED_MODULE_3__["MemoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_assembler_assembler_service__WEBPACK_IMPORTED_MODULE_4__["AssemblerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
SimulatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimulatorComponent, selectors: [["app-simulator"]], decls: 60, vars: 22, consts: [[3, "nzBorderless"], [3, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "8"], ["nzTitle", "Code", 3, "nzExtra"], ["id", "sourceCode", "rows", "30", "nz-input", "", "tabSupport", "", 1, "source-code", 3, "selectedLine", "ngModel", "ngModelChange"], ["textarea", ""], ["instructionSet", ""], [3, "onParse"], ["nz-button", "", 3, "click"], ["nz-icon", "", "nzType", "apartment", "nzTheme", "outline"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["runButton", ""], ["stopButton", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "step-forward", "nzTheme", "outline"], ["nz-icon", "", "nzType", "undo", "nzTheme", "outline"], ["nzTitle", "CPU & Memory"], [3, "displayHex"], ["nz-typography", ""], [1, "source-code", "memorys"], [4, "ngFor", "ngForOf"], [3, "displayHex", "labels", "jump"], ["nzTitle", "Display Controls"], ["nzTitle", "Clock speed"], [3, "ngModel", "nzSize", "ngModelChange"], ["nzTitle", "Instructions"], ["nzCheckedChildren", "Show", "nzUnCheckedChildren", "Hide", 3, "ngModel", "ngModelChange"], ["nzTitle", "View"], ["nzTitle", "Register addressing"], ["nzTitle", "A"], ["nzTitle", "B"], ["nzTitle", "C"], ["nzTitle", "D"], ["nzType", "error", 3, "nzMessage"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "fast-forward", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 3, "click"], ["nz-icon", "", "nzType", "pause", "nzTheme", "outline"], [1, "memory-block", 3, "ngClass"], [3, "ngClass", "ngSwitch"], [4, "ngSwitchDefault"], [3, "click", 4, "ngSwitchCase"], [3, "click"], [3, "nzValue", "nzLabel"]], template: function SimulatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimulatorComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SimulatorComponent_ng_template_7_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-button-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-uploader", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onParse", function SimulatorComponent_Template_app_uploader_onParse_11_listener($event) { return ctx.parsedCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimulatorComponent_Template_button_click_12_listener() { return ctx.assemble(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Assemble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SimulatorComponent_15_Template, 1, 0, undefined, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SimulatorComponent_ng_template_16_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SimulatorComponent_ng_template_18_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimulatorComponent_Template_button_click_20_listener() { return ctx.executeStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimulatorComponent_Template_button_click_23_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "app-registers", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "RAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SimulatorComponent_ng_container_32_Template, 5, 4, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "app-output");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "app-labels", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jump", function SimulatorComponent_Template_app_labels_jump_41_listener($event) { return ctx.jumpToLine($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nz-descriptions", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nz-descriptions-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_select_ngModelChange_45_listener($event) { return ctx.speed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, SimulatorComponent_ng_container_46_Template, 2, 2, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nz-descriptions-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-switch", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_switch_ngModelChange_48_listener($event) { return ctx.displayInstr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-descriptions-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-switch", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_switch_ngModelChange_50_listener($event) { return ctx.displayHex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "nz-descriptions", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nz-descriptions-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nz-switch", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_switch_ngModelChange_53_listener($event) { return ctx.displayA = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "nz-descriptions-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-switch", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_switch_ngModelChange_55_listener($event) { return ctx.displayB = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "nz-descriptions-item", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-switch", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_switch_ngModelChange_57_listener($event) { return ctx.displayC = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-descriptions-item", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "nz-switch", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_nz_switch_ngModelChange_59_listener($event) { return ctx.displayD = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBorderless", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExtra", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedLine", ctx.selectedLine)("ngModel", ctx.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRunning)("ngIfThen", _r7)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayHex", ctx.displayHex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.memory.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayHex", ctx.displayHex)("labels", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.speed)("nzSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.speeds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayInstr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayHex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayB);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayC);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayD);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _shared_tab_support_directive__WEBPACK_IMPORTED_MODULE_11__["TabSupportDirective"], _shared_select_line_directive__WEBPACK_IMPORTED_MODULE_12__["SelectedLineDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_15__["UploaderComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__["NzDividerComponent"], _registers_registers_component__WEBPACK_IMPORTED_MODULE_19__["RegistersComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_20__["NzTypographyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _output_output_component__WEBPACK_IMPORTED_MODULE_21__["OutputComponent"], _labels_labels_component__WEBPACK_IMPORTED_MODULE_22__["LabelsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_23__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_23__["NzDescriptionsItemComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__["NzSelectComponent"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_25__["NzSwitchComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_26__["NzAlertComponent"], _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_27__["InstructionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__["NzOptionComponent"]], pipes: [_shared_numeral_pipe__WEBPACK_IMPORTED_MODULE_28__["NumeralPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW11bGF0b3IuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "1rDD":
/*!************************************************!*\
  !*** ./src/app/uploader/uploader.component.ts ***!
  \************************************************/
/*! exports provided: UploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderComponent", function() { return UploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







class UploaderComponent {
    constructor() {
        this.onParse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopUpload = (file) => {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                this.onParse.emit(e.target.result.toString());
            };
            return false;
        };
    }
}
UploaderComponent.ɵfac = function UploaderComponent_Factory(t) { return new (t || UploaderComponent)(); };
UploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploaderComponent, selectors: [["app-uploader"]], outputs: { onParse: "onParse" }, decls: 4, vars: 1, consts: [[3, "nzBeforeUpload"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"]], template: function UploaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload .asm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBeforeUpload", ctx.stopUpload);
    } }, directives: [ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_1__["NzUploadComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWRlci5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "3Evw":
/*!*************************************************!*\
  !*** ./src/app/shared/select-line.directive.ts ***!
  \*************************************************/
/*! exports provided: SelectedLineDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedLineDirective", function() { return SelectedLineDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SelectedLineDirective {
    constructor(el) {
        this.el = el;
        this.selectedLine = -1;
    }
    ngOnChanges(changes) {
        if (changes.selectedLine) {
            const { selectedLine } = changes;
            if (selectedLine.currentValue >= 0) {
                const element = this.el.nativeElement;
                const lines = element.value.split('\n');
                // Calculate start/end
                let startPos = 0;
                for (let x = 0; x < lines.length; x++) {
                    if (x == selectedLine.currentValue) {
                        break;
                    }
                    startPos += lines[x].length + 1;
                }
                const endPos = lines[selectedLine.currentValue].length + startPos;
                // // Chrome / Firefox
                if (typeof element.selectionStart != 'undefined') {
                    element.focus();
                    element.selectionStart = startPos;
                    element.selectionEnd = endPos;
                }
            }
        }
    }
}
SelectedLineDirective.ɵfac = function SelectedLineDirective_Factory(t) { return new (t || SelectedLineDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SelectedLineDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SelectedLineDirective, selectors: [["", "selectedLine", ""]], inputs: { selectedLine: "selectedLine" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C/Bq":
/*!*************************************!*\
  !*** ./src/app/shared/nz.module.ts ***!
  \*************************************/
/*! exports provided: NzModule, NzIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModule", function() { return NzModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzIcons", function() { return NzIcons; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















const exports = [
    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__["NzDrawerModule"],
    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzGridModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__["NzMessageModule"],
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectModule"],
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__["NzSwitchModule"],
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
    ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__["NzTypographyModule"],
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
];
const ngZorroConfig = {
    card: { nzSize: 'small' },
    table: { nzSize: 'small' },
};
class NzModule {
}
NzModule.ɵfac = function NzModule_Factory(t) { return new (t || NzModule)(); };
NzModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: NzModule });
NzModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
        {
            provide: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NZ_CONFIG"],
            useValue: ngZorroConfig,
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]].concat(exports), ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__["NzDrawerModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzGridModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](NzModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__["NzDrawerModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzGridModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"]], exports: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__["NzDrawerModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzGridModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_17__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"]] }); })();
const NzIcons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ApartmentOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["FastForwardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["PauseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["StepForwardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["UndoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["UploadOutline"],
];


/***/ }),

/***/ "EHuE":
/*!****************************************!*\
  !*** ./src/app/shared/numeral.pipe.ts ***!
  \****************************************/
/*! exports provided: NumeralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumeralPipe", function() { return NumeralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NumeralPipe {
    transform(value, isHex) {
        if (isHex) {
            const hex = value.toString(16).toUpperCase();
            // return hex.length === 1 ? '0'+hex : hex;
            return ('00' + hex).slice(-2);
        }
        return value.toString(10);
    }
}
NumeralPipe.ɵfac = function NumeralPipe_Factory(t) { return new (t || NumeralPipe)(); };
NumeralPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numeral", type: NumeralPipe, pure: true });


/***/ }),

/***/ "HLAI":
/*!*************************************************!*\
  !*** ./src/app/shared/tab-support.directive.ts ***!
  \*************************************************/
/*! exports provided: TabSupportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSupportDirective", function() { return TabSupportDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TabSupportDirective {
    constructor() { }
    handleKeyDown(event) {
        if (event.key === 'Tab') {
            const target = event.target;
            const val = target.value;
            const start = target.selectionStart;
            const end = target.selectionEnd;
            target.value = val.substring(0, start) + '\t' + val.substring(end);
            target.selectionStart = target.selectionEnd = start + 1;
            event.preventDefault();
            return false;
        }
    }
}
TabSupportDirective.ɵfac = function TabSupportDirective_Factory(t) { return new (t || TabSupportDirective)(); };
TabSupportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TabSupportDirective, selectors: [["", "tabSupport", ""]], hostBindings: function TabSupportDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TabSupportDirective_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } } });


/***/ }),

/***/ "II0G":
/*!*********************************************!*\
  !*** ./src/app/simulator/memory.service.ts ***!
  \*********************************************/
/*! exports provided: MemoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryService", function() { return MemoryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MemoryService {
    constructor() {
        this.output$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.lastAccess = -1;
        this.data = new Array(256);
        this.reset();
    }
    /**
     * load value from address
     * @param address
     */
    load(address) {
        this.checkAddress(address);
        this.lastAccess = address;
        return this.data[address];
    }
    /**
     * store value at address
     * @param address
     * @param value
     */
    store(address, value) {
        this.checkAddress(address);
        this.lastAccess = address;
        this.data[address] = value;
        if (address >= _shared_constants__WEBPACK_IMPORTED_MODULE_1__["OUTPUT_START_INDEX"]) {
            this.emitOutput();
        }
    }
    /**
     * reset memory to 0000000...0
     */
    reset() {
        this.lastAccess = -1;
        const { data } = this;
        for (let index = 0, l = this.data.length; index < l; index++) {
            data[index] = 0;
        }
        this.emitOutput();
    }
    /**
     * check address validation
     * @param address
     */
    checkAddress(address) {
        if (address < 0 || address >= this.data.length) {
            throw new Error(`Memory access violation at ${address}`);
        }
    }
    emitOutput() {
        this.output$.next(this.data.slice(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["OUTPUT_START_INDEX"]));
    }
}
MemoryService.ɵfac = function MemoryService_Factory(t) { return new (t || MemoryService)(); };
MemoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MemoryService, factory: MemoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LGyc":
/*!************************************************!*\
  !*** ./src/app/assembler/assembler.service.ts ***!
  \************************************************/
/*! exports provided: AssemblerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblerService", function() { return AssemblerService; });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AssemblerService {
    go(input) {
        // Regex group indexes for operands
        const op1_group = 3;
        const op2_group = 7;
        // Contains the program code & data generated by the assembler
        const code = [];
        // Contains the mapping from instructions to assembler line
        const mapping = {};
        // Hash map of label used to replace the labels after the assembler generated the code
        const labels = {};
        // Hash of uppercase labels used to detect duplicates
        const normalizedLabels = {};
        // Split text into code lines
        const lines = input.split('\n');
        for (let i = 0, l = lines.length; i < l; i++) {
            try {
                const match = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["REGEX"].exec(lines[i]);
                if (match[1] !== undefined || match[2] !== undefined) {
                    if (match[1] !== undefined) {
                        this.addLabel(match[1], normalizedLabels, labels, code);
                    }
                    if (match[2] !== undefined) {
                        const instr = match[2].toUpperCase();
                        let p1, p2, opCode;
                        // Add mapping instr pos to line number
                        // Don't do it for DB as this is not a real instruction
                        if (instr !== 'DB') {
                            mapping[code.length] = i;
                        }
                        switch (instr) {
                            case 'DB':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                if (p1.type === 'number') {
                                    code.push(p1.value);
                                }
                                else if (p1.type === 'numbers') {
                                    for (let j = 0, k = p1.value.length; j < k; j++) {
                                        code.push(p1.value[j]);
                                    }
                                }
                                else {
                                    throw new Error('DB does not support this operand');
                                }
                                break;
                            case 'NOP':
                                this.checkNoExtraArg('NOP', match[op1_group]);
                                code.push(_shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].NOPE);
                                break;
                            case 'HLT':
                                this.checkNoExtraArg('HLT', match[op1_group]);
                                code.push(_shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].NONE);
                                break;
                            case 'MOV':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REG_TO_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_ADDRESS_TO_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REGADDRESS_TO_REG;
                                }
                                else if (p1.type === 'address' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REG_TO_ADDRESS;
                                }
                                else if (p1.type === 'regaddress' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REG_TO_REGADDRESS;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_NUMBER_TO_REG;
                                }
                                else if (p1.type === 'address' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_NUMBER_TO_ADDRESS;
                                }
                                else if (p1.type === 'regaddress' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_NUMBER_TO_REGADDRESS;
                                }
                                else {
                                    throw new Error('MOV does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'ADD':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_REG_TO_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_REGADDRESS_TO_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_ADDRESS_TO_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_NUMBER_TO_REG;
                                }
                                else {
                                    throw new Error('ADD does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'SUB':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_REG_FROM_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_REGADDRESS_FROM_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_ADDRESS_FROM_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_NUMBER_FROM_REG;
                                }
                                else {
                                    throw new Error('SUB does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'INC':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].INC_REG;
                                }
                                else {
                                    throw new Error('INC does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'DEC':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DEC_REG;
                                }
                                else {
                                    throw new Error('DEC does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'CMP':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_REG_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_REGADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_ADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_NUMBER_WITH_REG;
                                }
                                else {
                                    throw new Error('CMP does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'JMP':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JMP_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JMP_ADDRESS;
                                }
                                else {
                                    throw new Error('JMP does not support this operands');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'JC':
                            case 'JB':
                            case 'JNAE':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JC_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JC_ADDRESS;
                                }
                                else {
                                    throw new Error(`${instr}  does not support this operand`);
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'JNC':
                            case 'JNB':
                            case 'JAE':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNC_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNC_ADDRESS;
                                }
                                else {
                                    throw new Error(`${instr}  does not support this operand`);
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'JZ':
                            case 'JE':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JZ_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JZ_ADDRESS;
                                }
                                else {
                                    throw new Error(`${instr} does not support this operand`);
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'JNZ':
                            case 'JNE':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNZ_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNZ_ADDRESS;
                                }
                                else {
                                    throw new Error(`${instr} does not support this operand`);
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'JA':
                            case 'JNBE':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JA_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JA_ADDRESS;
                                }
                                else {
                                    throw new Error(`${instr} does not support this operand`);
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'JNA':
                            case 'JBE':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNA_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNA_ADDRESS;
                                }
                                else {
                                    throw new Error(`${instr} does not support this operand`);
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'PUSH':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_REG;
                                }
                                else if (p1.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_REGADDRESS;
                                }
                                else if (p1.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_ADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_NUMBER;
                                }
                                else {
                                    throw new Error('PUSH does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'POP':
                                p1 = this.getValue(match[op1_group]);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                this.checkOneOperand(instr, p1);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].POP_REG;
                                }
                                else {
                                    throw new Error('POP does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'CALL':
                                p1 = this.getValue(match[op1_group]);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                this.checkOneOperand(instr, p1);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CALL_REGADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CALL_ADDRESS;
                                }
                                else {
                                    throw new Error('CALL does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'RET':
                                this.checkNoExtraArg(instr, match[op1_group]);
                                opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].RET;
                                code.push(opCode);
                                break;
                            case 'MUL':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_REG;
                                }
                                else if (p1.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_REGADDRESS;
                                }
                                else if (p1.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_ADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_NUMBER;
                                }
                                else {
                                    throw new Error('MUL does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'DIV':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_REG;
                                }
                                else if (p1.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_REGADDRESS;
                                }
                                else if (p1.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_ADDRESS;
                                }
                                else if (p1.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_NUMBER;
                                }
                                else {
                                    throw new Error('DIV does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'AND':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_REG_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_REGADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_ADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_NUMBER_WITH_REG;
                                }
                                else {
                                    throw new Error('AND does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'OR':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_REG_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_REGADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_ADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_NUMBER_WITH_REG;
                                }
                                else {
                                    throw new Error('OR does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'XOR':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_REG_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_REGADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_ADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_NUMBER_WITH_REG;
                                }
                                else {
                                    throw new Error('XOR does not support this operands');
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'NOT':
                                p1 = this.getValue(match[op1_group]);
                                this.checkOneOperand(instr, p1);
                                this.checkNoExtraArg(instr, match[op2_group]);
                                if (p1.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].NOT_REG;
                                }
                                else {
                                    throw new Error('NOT does not support this operand');
                                }
                                code.push(opCode, p1.value);
                                break;
                            case 'SHL':
                            case 'SAL':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_REG_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_REGADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_ADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_NUMBER_WITH_REG;
                                }
                                else {
                                    throw new Error(`${instr} does not support this operands`);
                                }
                                code.push(opCode, p1.value, p2.value);
                                break;
                            case 'SHR':
                            case 'SAR':
                                p1 = this.getValue(match[op1_group]);
                                p2 = this.getValue(match[op2_group]);
                                this.checkTwoOperands(instr, p1, p2);
                                if (p1.type === 'register' && p2.type === 'register') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_REG_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'regaddress') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_REGADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'address') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_ADDRESS_WITH_REG;
                                }
                                else if (p1.type === 'register' && p2.type === 'number') {
                                    opCode = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_NUMBER_WITH_REG;
                                }
                                else {
                                    throw new Error(`${instr} does not support this operands`);
                                }
                                break;
                            default:
                                throw new Error(`Invalid instruction: ${match[2]}`);
                        }
                    }
                }
                else {
                    // Check if line starts with a comment otherwise the line contains an error and can not be parsed
                    const line = lines[i].trim();
                    if (line !== '' && line.slice(0, 1) !== ';') {
                        throw new Error('Syntax error');
                    }
                }
            }
            catch (error) {
                throw { error, line: i };
            }
        }
        // Replace label
        for (let i = 0, l = code.length; i < l; i++) {
            if (typeof code[i] !== 'number') {
                if (code[i] in labels) {
                    code[i] = labels[code[i]];
                }
                else {
                    throw { error: 'Undefined label: ' + code[i] };
                }
            }
        }
        return { code, mapping, labels };
    }
    parseNumber(input) {
        if (input.slice(0, 2) === '0x') {
            return parseInt(input.slice(2), 16);
        }
        if (input.slice(0, 2) === '0o') {
            return parseInt(input.slice(2), 8);
        }
        if (input.slice(input.length - 1) === 'b') {
            return parseInt(input.slice(0, input.length - 1), 2);
        }
        if (input.slice(input.length - 1) === 'd') {
            return parseInt(input.slice(0, input.length - 1), 10);
        }
        if (_shared_constants__WEBPACK_IMPORTED_MODULE_0__["RegexNum"].exec(input)) {
            return parseInt(input, 10);
        }
        throw new Error('Invalid number format');
    }
    /**
     * Allowed formats: 200, 200d, 0xA4, 0o48, 101b
     * Allowed registers: A, B, C, D, SP
     * @param input
     * @returns
     */
    parseRegister(input) {
        input = input.toUpperCase();
        if (input === 'A') {
            return 0;
        }
        if (input === 'B') {
            return 1;
        }
        if (input === 'C') {
            return 2;
        }
        if (input === 'D') {
            return 3;
        }
        if (input === 'SP') {
            return 4;
        }
        return undefined;
    }
    parseOffsetAddressing(input) {
        input = input.toUpperCase();
        let m = 0;
        let base = 0;
        if (input[0] === 'A') {
            base = 0;
        }
        else if (input[0] === 'B') {
            base = 1;
        }
        else if (input[0] === 'C') {
            base = 2;
        }
        else if (input[0] === 'D') {
            base = 3;
        }
        else if (input.slice(0, 2) === 'SP') {
            base = 4;
        }
        else {
            return undefined;
        }
        let offset_start = 1;
        if (base === 4) {
            offset_start = 2;
        }
        if (input[offset_start] === '-') {
            m = -1;
        }
        else if (input[offset_start] === '+') {
            m = 1;
        }
        else {
            return undefined;
        }
        let offset = m * parseInt(input.slice(offset_start + 1), 10);
        if (offset < -16 || offset > 15) {
            throw new Error('offset must be a value between -16...+15');
        }
        if (offset < 0) {
            offset = 32 + offset; // two's complement representation in 5-bit
        }
        return offset * 8 + base; // shift offset 3 bits right and add code for register
    }
    /**
     * Allowed: Register, Label or Number; SP+/-Number is allowed for 'regaddress' type
     * @param input
     * @param typeReg register type
     * @param typeNumber number type
     * @returns
     */
    parseRegOrNumber(input, typeReg, typeNumber) {
        let register = this.parseRegister(input);
        if (register !== undefined) {
            return { type: typeReg, value: register };
        }
        const label = this.parseLabel(input);
        if (label !== undefined) {
            return { type: typeNumber, value: label };
        }
        if (typeReg === 'regaddress') {
            register = this.parseOffsetAddressing(input);
            if (register !== undefined) {
                return { type: typeReg, value: register };
            }
        }
        const value = this.parseNumber(input);
        if (isNaN(value)) {
            throw new Error(`Not a ${typeNumber}: ${value}`);
        }
        if (value < 0 || value > 255) {
            throw new Error(`${typeNumber} must have a value between 0-255`);
        }
        return { type: typeNumber, value };
    }
    parseLabel(input) {
        return _shared_constants__WEBPACK_IMPORTED_MODULE_0__["RegexLabel"].exec(input) ? input : undefined;
    }
    checkOneOperand(instr, p1) {
        if (!p1) {
            throw new Error(`${instr} needs one operand`);
        }
    }
    checkTwoOperands(instr, p1, p2) {
        if (!p1 || !p2) {
            throw new Error(`${instr} needs one operand`);
        }
    }
    checkNoExtraArg(instr, arg) {
        if (arg !== undefined) {
            throw new Error(`${instr}: too many arguments`);
        }
    }
    /**
     * parse operands
     * @param input
     * @returns
     */
    getValue(input) {
        if (!input) {
            return null;
        }
        switch (input.slice(0, 1)) {
            case '[': // [number] or [register]
                const address = input.slice(1, input.length - 1);
                return this.parseRegOrNumber(address, 'regaddress', 'address');
            case '"': // "String"
                const text = input.slice(1, input.length - 1);
                const chars = [];
                for (let i = 0, l = text.length; i < l; i++) {
                    chars.push(text.charCodeAt(i));
                }
                return { type: 'numbers', value: chars };
            case "'": // 'C'
                const character = input.slice(1, input.length - 1);
                if (character.length > 1) {
                    throw new Error('Only one character is allowed. Use String instead');
                }
                return { type: 'number', value: character.charCodeAt(0) };
            default:
                // REGISTER, NUMBER or LABEL
                return this.parseRegOrNumber(input, 'register', 'number');
        }
    }
    addLabel(label, normalizedLabels, labels, code) {
        const upperLabel = label.toUpperCase();
        if (upperLabel in normalizedLabels) {
            throw new Error(`Duplicate label: ${label};`);
        }
        if (upperLabel === 'A' ||
            upperLabel === 'B' ||
            upperLabel === 'C' ||
            upperLabel === 'D') {
            throw new Error(`Label contains keyword: ${upperLabel}`);
        }
        labels[label] = code.length;
    }
}
AssemblerService.ɵfac = function AssemblerService_Factory(t) { return new (t || AssemblerService)(); };
AssemblerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssemblerService, factory: AssemblerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _flag_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flag.pipe */ "iLqX");
/* harmony import */ var _get_char_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-char.pipe */ "R+vU");
/* harmony import */ var _numeral_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numeral.pipe */ "EHuE");
/* harmony import */ var _select_line_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-line.directive */ "3Evw");
/* harmony import */ var _tab_support_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-support.directive */ "HLAI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







const exports = [
    _flag_pipe__WEBPACK_IMPORTED_MODULE_1__["FlagPipe"],
    _numeral_pipe__WEBPACK_IMPORTED_MODULE_3__["NumeralPipe"],
    _tab_support_directive__WEBPACK_IMPORTED_MODULE_5__["TabSupportDirective"],
    _select_line_directive__WEBPACK_IMPORTED_MODULE_4__["SelectedLineDirective"],
    _get_char_pipe__WEBPACK_IMPORTED_MODULE_2__["GetCharPipe"],
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_flag_pipe__WEBPACK_IMPORTED_MODULE_1__["FlagPipe"],
        _numeral_pipe__WEBPACK_IMPORTED_MODULE_3__["NumeralPipe"],
        _tab_support_directive__WEBPACK_IMPORTED_MODULE_5__["TabSupportDirective"],
        _select_line_directive__WEBPACK_IMPORTED_MODULE_4__["SelectedLineDirective"],
        _get_char_pipe__WEBPACK_IMPORTED_MODULE_2__["GetCharPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_flag_pipe__WEBPACK_IMPORTED_MODULE_1__["FlagPipe"],
        _numeral_pipe__WEBPACK_IMPORTED_MODULE_3__["NumeralPipe"],
        _tab_support_directive__WEBPACK_IMPORTED_MODULE_5__["TabSupportDirective"],
        _select_line_directive__WEBPACK_IMPORTED_MODULE_4__["SelectedLineDirective"],
        _get_char_pipe__WEBPACK_IMPORTED_MODULE_2__["GetCharPipe"]] }); })();


/***/ }),

/***/ "R+vU":
/*!*****************************************!*\
  !*** ./src/app/shared/get-char.pipe.ts ***!
  \*****************************************/
/*! exports provided: GetCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCharPipe", function() { return GetCharPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GetCharPipe {
    transform(value) {
        const text = String.fromCharCode(value);
        if (text.trim() === '') {
            return '\u00A0\u00A0';
        }
        return text;
    }
}
GetCharPipe.ɵfac = function GetCharPipe_Factory(t) { return new (t || GetCharPipe)(); };
GetCharPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getChar", type: GetCharPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulator/simulator.component */ "0iQO");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-simulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzContentComponent"], _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_3__["SimulatorComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzFooterComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instruction/instruction.component */ "iAtR");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./labels/labels.component */ "0OMU");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./output/output.component */ "z+Vf");
/* harmony import */ var _registers_registers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registers/registers.component */ "ksR8");
/* harmony import */ var _shared_nz_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/nz.module */ "C/Bq");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./simulator/simulator.component */ "0iQO");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./uploader/uploader.component */ "1rDD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _shared_nz_module__WEBPACK_IMPORTED_MODULE_14__["NzModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"].forRoot(_shared_nz_module__WEBPACK_IMPORTED_MODULE_14__["NzIcons"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_10__["InstructionComponent"],
        _output_output_component__WEBPACK_IMPORTED_MODULE_12__["OutputComponent"],
        _labels_labels_component__WEBPACK_IMPORTED_MODULE_11__["LabelsComponent"],
        _registers_registers_component__WEBPACK_IMPORTED_MODULE_13__["RegistersComponent"],
        _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_16__["SimulatorComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_17__["UploaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
        _shared_nz_module__WEBPACK_IMPORTED_MODULE_14__["NzModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple 8-bit Assembler Simulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  background-color: #428bca;\n  color: #ffffff;\n  padding: 0 15px;\n  font-size: 18px;\n  height: 100%;\n  margin: 0 -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIC01MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [["nzTitle", "More Infomation"], ["nzTitle", "Original simulator"], ["href", "https://schweigi.github.io/assembler-simulator/", "target", "_blank", "rel", "noopener noreferrer"], ["nzTitle", "Blog with details"], ["href", "https://www.mschweighauser.com/make-your-own-assembler-simulator-in-javascript-part1/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.mschweighauser.com/author/schweigi/", "target", "_blank", "rel", "noopener noreferrer"], ["nzTitle", "GitHub"], ["href", "https://github.com/AkatQuas/assembler-simulator", "target", "_blank", "rel", "noopener noreferrer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-descriptions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-descriptions-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Simulator Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-descriptions-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Make your own Assembler simulator in JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0by\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Macro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-descriptions-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "8-Bit Simulator with Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_1__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_1__["NzDescriptionsItemComponent"]], encapsulation: 2 });


/***/ }),

/***/ "iAtR":
/*!******************************************************!*\
  !*** ./src/app/instruction/instruction.component.ts ***!
  \******************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");






const _c0 = function () { return [1]; };
function InstructionComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This simulator provides a simplified assembler syntax (based on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NASM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ") and is simulating a x86 like cpu. In depth documentation and introduction to assembler can be found on the following websites: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assembly - Wikipedia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The Art of Assembly Language Programming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NASM Language Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The simulator consists of a 8-bit cpu and 256 bytes of memory. All instructions (code) and variables (data) needs to fit inside the memory. For simplicity every instruction (and operand) is 1 byte. Therefore a MOV instruction will use 3 bytes of memory. The simulator provides a console output which is memory mapped from 0xE8 to 0xFF. Memory mapped means that every value written to this memory block is visible on the console. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Syntax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The syntax is similar as most assemblers are using. Every instruction must be on their own line. Labels are optional and must either start with a letter or a dot (.) and end with a colon. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "label: instruction operands\t; Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Valid number formats for constants are:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Decimal: 200\nDecimal: 200d\nHex: 0xA4\nOctal: 0o48\nBinary: 101b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " It is possible to define a number using a character or multiple numbers (see instruction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ") by using a string. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Character: 'A'\nString: \"Hello World!\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Operands can either be one of the four general purpose registers, stack pointer register, a memory address or a constant. Stack pointer register can only be used as operand in MOV, ADD, SUB, CMP, INC and DEC instructions. Instead of defining an address as a constant or by using a register you can use labels. The assembler will then replace the label with the corresponding constant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "General purpose (GP) register: A, B, C, D\nStack pointer register: SP\nAddress using a GP register: [A]\nAddress using a GP register and offset: [D-3]\nAddress using SP register and offset: [SP+2]\nAddress using a constant: [100]\nAddress using a label: label\nConstant: Any number between 0..255 (8bit unsigned)\nOffset for indirect addressing: Integer between -16..+15 (sign is mandatory)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MOV - Copy a value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Copies a value from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "src");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "dest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ". The MOV instruction is the only one able to directly modify the memory. SP can be used as operand with MOV. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MOV reg, reg\nMOV reg, address\nMOV reg, constant\nMOV address, reg\nMOV address, constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "DB - Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Defines a variable. A variable can either be a single number, character or a string. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "DB constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Math operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Addition and Subtraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Adds two numbers together or subtract one number form another. This operations will modify the carry and zero flag. SP can be used as operand with ADD and SUB. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "ADD reg, reg\nADD reg, address\nADD reg, constant\nSUB reg, reg\nSUB reg, address\nSUB reg, constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Increment and Decrement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Increments or decrements a register by one. This operations will modify the carry and zero flag. SP can be used as operand with INC and DEC. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "INC reg\nDEC reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Multiplication and division");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Multiplies or divides the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " register with the given value. This operations will modify the carry and zero flag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "MUL reg\nMUL address\nMUL constant\nDIV reg\nDIV address\nDIV constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Logical instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " The following logical instructions are supported: AND, OR, XOR, NOT. This operations will modify the carry and zero flag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "AND reg, reg\nAND reg, address\nAND reg, constant\nOR reg, reg\nOR reg, address\nOR reg, constant\nXOR reg, reg\nXOR reg, address\nXOR reg, constant\nNOT reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Shift instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " The following shift instructions are supported: SHL/SAL and SHR/SAR. As this simulator only supports unsigned numbers SHR and SAR yield the same result. This operations will modify the carry and zero flag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "SHL reg, reg\nSHL reg, address\nSHL reg, constant\nSHR reg, reg\nSHR reg, address\nSHR reg, constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "CMP - Compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Compares two values and sets the zero flag to true if they are equal. SP can be used as operand with CMP. Use this instruction before a conditional jump. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "CMP reg, reg\nCMP reg, address\nCMP reg, constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Jumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "JMP - Unconditional jump");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Let the instruction pointer do a unconditional jump to the defined address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "MP address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Conditional jumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Let the instruction pointer do a conditional jump to the defined address. See the table below for the available conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nz-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Alternatives");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "JC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Jump if carry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Carry = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "JB, JNAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "JNC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Jump if no carry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Carry = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "JNB, JAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "JZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Jump if zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Zero = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "JB, JE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "JNZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Jump if no zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Zero = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "JNE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "JA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Carry = FALSE && Zero = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "JNBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "JNBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "not <=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Carry = FALSE && Zero = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "JA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "JAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, ">=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Carry = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "JNC, JNB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "JNB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "not <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Carry = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "JNC, JAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "JB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Carry = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "JC, JNAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "JNAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "not >=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Carry = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "JC, JB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "JBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "C = TRUE or Z = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "JNA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "JNA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "not >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "C = TRUE or Z = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "JBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "JE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Z = TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "JZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "JNE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "!=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Z = FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "JNZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "CALL - Function call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Call can be used to jump into a subroutine (function). Pushes the instruction address of the next instruction to the stack and jumps to the specified address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "CALL address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "RET - Exit a subroutine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Exits a subroutines by popping the return address previously pushed by the CALL instruction. Make sure the SP is balanced before calling RET otherwise the instruction pointer will have an ambiguous value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "RET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Stack instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "PUSH - Push to stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Pushes a value to the stack. The stack grows down and the current position is available in the stack pointer register (SP). This instruction will decrease the SP. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "PUSH reg\nPUSH address\nPUSH constant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "POP - Pop from stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Pops a value from the stack to a register. This instruction will increase the SP. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "POP reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Other instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "HLT - Stops the processor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Stops operation of the processor. Hit Reset button to reset IP before restarting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "HLT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("nzShowPagination", false);
} }
class InstructionComponent {
    constructor() {
        this.visible = false;
    }
    open() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }
}
InstructionComponent.ɵfac = function InstructionComponent_Factory(t) { return new (t || InstructionComponent)(); };
InstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionComponent, selectors: [["app-instruction"]], decls: 4, vars: 3, consts: [["nz-button", "", "nzType", "link", 3, "click"], ["nzPlacement", "right", "nzTitle", "Instruction", 3, "nzWidth", "nzClosable", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], ["href", "http://www.nasm.us", "target", "_blank"], ["href", "http://en.wikipedia.org/wiki/Assembly_language", "target", "_blank"], ["href", "http://cs.smith.edu/~thiebaut/ArtOfAssembly/artofasm.html", "target", "_blank"], ["href", "http://www.nasm.us/xdoc/2.10.09/html/nasmdoc3.html", "target", "_blank"], ["nz-typography", ""], [3, "nzData", "nzShowPagination"]], template: function InstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionComponent_Template_a_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Instruction Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function InstructionComponent_Template_nz_drawer_nzOnClose_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InstructionComponent_ng_container_3_Template, 283, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 1000)("nzClosable", false)("nzVisible", ctx.visible);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__["NzDrawerComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__["NzDrawerContentDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__["NzTypographyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"]], styles: ["pre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imluc3RydWN0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsicHJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDkuNXB4O1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzMzMztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "iLqX":
/*!*************************************!*\
  !*** ./src/app/shared/flag.pipe.ts ***!
  \*************************************/
/*! exports provided: FlagPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagPipe", function() { return FlagPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FlagPipe {
    transform(value) {
        return value.toString().toUpperCase();
    }
}
FlagPipe.ɵfac = function FlagPipe_Factory(t) { return new (t || FlagPipe)(); };
FlagPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "flag", type: FlagPipe, pure: true });


/***/ }),

/***/ "ksR8":
/*!**************************************************!*\
  !*** ./src/app/registers/registers.component.ts ***!
  \**************************************************/
/*! exports provided: RegistersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistersComponent", function() { return RegistersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _simulator_cpu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../simulator/cpu.service */ "oO9f");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _shared_numeral_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/numeral.pipe */ "EHuE");
/* harmony import */ var _shared_flag_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/flag.pipe */ "iLqX");






const _c0 = function () { return [1]; };
class RegistersComponent {
    constructor(cpu) {
        this.cpu = cpu;
        this.displayHex = false;
    }
}
RegistersComponent.ɵfac = function RegistersComponent_Factory(t) { return new (t || RegistersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_simulator_cpu_service__WEBPACK_IMPORTED_MODULE_1__["CpuService"])); };
RegistersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistersComponent, selectors: [["app-registers"]], inputs: { displayHex: "displayHex" }, decls: 67, vars: 37, consts: [["nz-typography", ""], [3, "nzData", "nzNoResult", "nzShowPagination"], [2, "text-align", "center"], [1, "source-code", 2, "text-align", "center"], ["ng-class", "displayA && 'marker marker-a'"], ["ng-class", "displayB && 'marker marker-b'"], ["ng-class", "displayC && 'marker marker-c'"], ["ng-class", "displayD && 'marker marker-d'"], [1, "marker", "marker-ip"], [1, "marker", "marker-sp"]], template: function RegistersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registers / Flags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "numeral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "numeral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "numeral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "numeral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "numeral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "numeral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0))("nzNoResult", null)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 12, ctx.cpu.gpr[0], ctx.displayHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 15, ctx.cpu.gpr[1], ctx.displayHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 18, ctx.cpu.gpr[2], ctx.displayHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 21, ctx.cpu.gpr[3], ctx.displayHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 24, ctx.cpu.ip, ctx.displayHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 27, ctx.cpu.sp, ctx.displayHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 30, ctx.cpu.zero));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 32, ctx.cpu.carry));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 34, ctx.cpu.fault));
    } }, directives: [ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_2__["NzTypographyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__["NzTbodyComponent"]], pipes: [_shared_numeral_pipe__WEBPACK_IMPORTED_MODULE_4__["NumeralPipe"], _shared_flag_pipe__WEBPACK_IMPORTED_MODULE_5__["FlagPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RlcnMuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "oO9f":
/*!******************************************!*\
  !*** ./src/app/simulator/cpu.service.ts ***!
  \******************************************/
/*! exports provided: CpuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpuService", function() { return CpuService; });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _memory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memory.service */ "II0G");



class CpuService {
    constructor(memory) {
        this.memory = memory;
        this.reset();
    }
    /**
     * reset the states,
     * simulates the restart
     */
    reset() {
        this.gpr = [0, 0, 0, 0];
        this.sp = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["MAX_SP"];
        this.ip = 0;
        this.zero = false;
        this.carry = false;
        this.fault = false;
    }
    /**
     * On each CPU cycle, the next step is executed.
     *
     * Each step does only execute one single instruction.
     */
    step() {
        if (this.fault) {
            throw new Error('FAULT. Reset the CPU to continue.');
        }
        try {
            if (this.ip < 0 || this.ip >= this.memory.data.length) {
                throw new Error('Instruction pointer is outside of memory');
            }
            let regTo, regFrom, memFrom, memTo, num;
            // load the instruction from memory at `this.ip` position
            const instr = this.memory.load(this.ip);
            switch (instr) {
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].NONE:
                    // noop operation, abort
                    return false;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].NOPE:
                    // do nothing
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REG_TO_REG:
                    // move the value from `regFrom` to `regTo`
                    // move regTo regFrom
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.setGPR_SP(regTo, this.getGPR_SP(regFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_ADDRESS_TO_REG:
                    // move the value from `memFrom` to `regTo`
                    // move regTo memFrom
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REGADDRESS_TO_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REG_TO_ADDRESS:
                    memTo = this.memory.load(++this.ip);
                    regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.memory.store(memTo, this.getGPR_SP(regFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_REG_TO_REGADDRESS:
                    regTo = this.memory.load(++this.ip);
                    regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.memory.store(this.indirectRegisterAddress(regTo), this.getGPR_SP(regFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_NUMBER_TO_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_NUMBER_TO_ADDRESS:
                    memTo = this.memory.load(++this.ip);
                    num = this.memory.load(++this.ip);
                    this.memory.store(memTo, num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MOV_NUMBER_TO_REGADDRESS:
                    regTo = this.memory.load(++this.ip);
                    num = this.memory.load(++this.ip);
                    this.memory.store(this.indirectRegisterAddress(regTo), num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_REG_TO_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) + this.getGPR_SP(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_REGADDRESS_TO_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) +
                        this.memory.load(this.indirectRegisterAddress(regFrom))));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_ADDRESS_TO_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) + this.memory.load(memFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].ADD_NUMBER_TO_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) + num));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_REG_FROM_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) - this.gpr[regFrom]));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_REGADDRESS_FROM_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) -
                        this.memory.load(this.indirectRegisterAddress(regFrom))));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_ADDRESS_FROM_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) - this.memory.load(memFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SUB_NUMBER_FROM_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) - num));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].INC_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) + 1));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DEC_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) - 1));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_REG_WITH_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
                    this.checkOperation(this.getGPR_SP(regTo) - this.getGPR_SP(regFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_REGADDRESS_WITH_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.checkOperation(this.getGPR_SP(regTo) -
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_ADDRESS_WITH_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.checkOperation(this.getGPR_SP(regTo) - this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CMP_NUMBER_WITH_REG:
                    regTo = this.checkGPR_SP(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.checkOperation(this.getGPR_SP(regTo) - num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JMP_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    this.jump(this.gpr[regTo]);
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JMP_ADDRESS:
                    num = this.memory.load(++this.ip);
                    this.jump(num);
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JC_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    if (this.carry) {
                        this.jump(this.gpr[regTo]);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JC_ADDRESS:
                    num = this.memory.load(++this.ip);
                    if (this.carry) {
                        this.jump(num);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNC_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    if (!this.carry) {
                        this.jump(this.gpr[regTo]);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNC_ADDRESS:
                    num = this.memory.load(++this.ip);
                    if (!this.carry) {
                        this.jump(num);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JZ_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    if (this.zero) {
                        this.jump(this.gpr[regTo]);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JZ_ADDRESS:
                    num = this.memory.load(++this.ip);
                    if (this.zero) {
                        this.jump(num);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNZ_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    if (!this.zero) {
                        this.jump(this.gpr[regTo]);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNZ_ADDRESS:
                    num = this.memory.load(++this.ip);
                    if (!this.zero) {
                        this.jump(num);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JA_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    if (!this.zero && !this.carry) {
                        this.jump(this.gpr[regTo]);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JA_ADDRESS:
                    num = this.memory.load(++this.ip);
                    if (!this.zero && !this.carry) {
                        this.jump(num);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNA_REGADDRESS: // JNA REG
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    if (this.zero || this.carry) {
                        this.jump(this.gpr[regTo]);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].JNA_ADDRESS:
                    num = this.memory.load(++this.ip);
                    if (this.zero || this.carry) {
                        this.jump(num);
                    }
                    else {
                        this.ip++;
                    }
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_REG:
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.push(this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_REGADDRESS:
                    regFrom = this.memory.load(++this.ip);
                    this.push(this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_ADDRESS:
                    memFrom = this.memory.load(++this.ip);
                    this.push(this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].PUSH_NUMBER:
                    num = this.memory.load(++this.ip);
                    this.push(num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].POP_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.pop();
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CALL_REGADDRESS:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    this.push(this.ip + 1);
                    this.jump(this.gpr[regTo]);
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].CALL_ADDRESS:
                    num = this.memory.load(++this.ip);
                    this.push(this.ip + 1);
                    this.jump(num);
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].RET:
                    this.jump(this.pop());
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_REG: // A = A * REG
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[0] = this.checkOperation(this.gpr[0] * this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_REGADDRESS: // A = A * [REG]
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[0] = this.checkOperation(this.gpr[0] *
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_ADDRESS: // A = A * [NUMBER]
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[0] = this.checkOperation(this.gpr[0] * this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].MUL_NUMBER: // A = A * NUMBER
                    num = this.memory.load(++this.ip);
                    this.gpr[0] = this.checkOperation(this.gpr[0] * num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_REG: // A = A / REG
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[0] = this.checkOperation(this.division(this.gpr[regFrom]));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_REGADDRESS: // A = A / [REG]
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[0] = this.checkOperation(this.division(this.memory.load(this.indirectRegisterAddress(regFrom))));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_ADDRESS: // A = A / [NUMBER]
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[0] = this.checkOperation(this.division(this.memory.load(memFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].DIV_NUMBER: // A = A / NUMBER
                    num = this.memory.load(++this.ip);
                    this.gpr[0] = this.checkOperation(this.division(num));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_REG_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] & this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_REGADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] &
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_ADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] & this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].AND_NUMBER_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] & num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_REG_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] | this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_REGADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] |
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_ADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] | this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].OR_NUMBER_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] | num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_REG_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] ^ this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_REGADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] ^
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_ADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] ^ this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].XOR_NUMBER_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] ^ num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].NOT_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.checkOperation(~this.gpr[regTo]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_REG_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] << this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_REGADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] <<
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_ADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] << this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHL_NUMBER_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] << num);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_REG_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.checkGPR(this.memory.load(++this.ip));
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] >>> this.gpr[regFrom]);
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_REGADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    regFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] >>>
                        this.memory.load(this.indirectRegisterAddress(regFrom)));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_ADDRESS_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    memFrom = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] >>> this.memory.load(memFrom));
                    this.ip++;
                    break;
                case _shared_constants__WEBPACK_IMPORTED_MODULE_0__["OPCodes"].SHR_NUMBER_WITH_REG:
                    regTo = this.checkGPR(this.memory.load(++this.ip));
                    num = this.memory.load(++this.ip);
                    this.gpr[regTo] = this.checkOperation(this.gpr[regTo] >>> num);
                    this.ip++;
                    break;
                default:
                    break;
            }
            return true;
        }
        catch (error) {
            this.fault = true;
            throw error;
        }
    }
    /**
     * ensure the register index valid
     * @param regIndex
     * @returns
     */
    checkGPR(regIndex) {
        if (regIndex < 0 || regIndex >= this.gpr.length) {
            throw new Error(`Invalid register index: ${regIndex}`);
        }
        return regIndex;
    }
    /**
     * ensure the register index valid
     * @param regIndex
     * @returns
     */
    checkGPR_SP(regIndex) {
        if (regIndex < 0 || regIndex >= this.gpr.length + 1) {
            throw new Error(`Invalid register index: ${regIndex}`);
        }
        return regIndex;
    }
    setGPR_SP(reg, value) {
        if (reg >= 0 && reg < this.gpr.length) {
            this.gpr[reg] = value;
            return;
        }
        if (reg === this.gpr.length) {
            this.sp = value;
            // Not likely to happen, since we always get here after checkOpertion().
            if (this.sp < _shared_constants__WEBPACK_IMPORTED_MODULE_0__["MIN_SP"]) {
                throw new Error('Stack overflow');
            }
            if (this.sp > _shared_constants__WEBPACK_IMPORTED_MODULE_0__["MAX_SP"]) {
                throw new Error('Stack underflow');
            }
            return;
        }
        throw new Error(`Invalid register: ${reg};`);
    }
    getGPR_SP(reg) {
        if (reg >= 0 && reg < this.gpr.length) {
            return this.gpr[reg];
        }
        if (reg === this.gpr.length) {
            return this.sp;
        }
        throw new Error(`Invalid register: ${reg};`);
    }
    indirectRegisterAddress(value) {
        const reg = value % 8;
        let base;
        if (reg < this.gpr.length) {
            base = this.gpr[reg];
        }
        else {
            base = this.sp;
        }
        let offset = Math.floor(value / 8);
        if (offset > 15) {
            offset = offset - 32;
        }
        return base + offset;
    }
    checkOperation(value) {
        let zero = false;
        let carry = false;
        if (value >= 256) {
            carry = true;
            value = value % 256;
        }
        else if (value === 0) {
            zero = true;
        }
        else if (value < 0) {
            carry = true;
            value = 255 - (-value % 256);
        }
        this.carry = carry;
        this.zero = zero;
        return value;
    }
    jump(newIP) {
        this.memory.checkAddress(newIP);
        this.ip = newIP;
    }
    push(value) {
        this.memory.store(this.sp--, value);
        if (this.sp < _shared_constants__WEBPACK_IMPORTED_MODULE_0__["MIN_SP"]) {
            throw new Error('Stack overflow');
        }
    }
    pop() {
        const value = this.memory.load(++this.sp);
        if (this.sp > _shared_constants__WEBPACK_IMPORTED_MODULE_0__["MAX_SP"]) {
            throw new Error('Stack underflow');
        }
        return value;
    }
    division(divisor) {
        if (divisor === 0) {
            throw new Error('Division by 0');
        }
        return Math.floor(this.gpr[0] / divisor);
    }
}
CpuService.ɵfac = function CpuService_Factory(t) { return new (t || CpuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_memory_service__WEBPACK_IMPORTED_MODULE_2__["MemoryService"])); };
CpuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CpuService, factory: CpuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s0Cq":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: REGEX, RegexNum, RegexLabel, MIN_SP, MAX_SP, OUTPUT_START_INDEX, OPCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX", function() { return REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexNum", function() { return RegexNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexLabel", function() { return RegexLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SP", function() { return MIN_SP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SP", function() { return MAX_SP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTPUT_START_INDEX", function() { return OUTPUT_START_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPCodes", function() { return OPCodes; });
/**
 *  Use https://www.debuggex.com/
 *  Matches: "label: INSTRUCTION (["')OPERAND1(]"'), (["')OPERAND2(]"')
 *  GROUPS:      1       2               3                    7
 */
const REGEX = /^[\t ]*(?:([.A-Za-z]\w*)[:])?(?:[\t ]*([A-Za-z]{2,4})(?:[\t ]+(\[(\w+((\+|-)\d+)?)\]|\".+?\"|\'.+?\'|[.A-Za-z0-9]\w*)(?:[\t ]*[,][\t ]*(\[(\w+((\+|-)\d+)?)\]|\".+?\"|\'.+?\'|[.A-Za-z0-9]\w*))?)?)?/;
// MATCHES: "(+|-)INTEGER"
const RegexNum = /^[-+]?[0-9]+$/;
// MATCHES: "(.L)abel"
const RegexLabel = /^[.A-Za-z]\w*$/;
const MIN_SP = 0;
const MAX_SP = 231;
const OUTPUT_START_INDEX = 232;
var OPCodes;
(function (OPCodes) {
    OPCodes[OPCodes["NONE"] = 0] = "NONE";
    OPCodes[OPCodes["NOPE"] = 1] = "NOPE";
    OPCodes[OPCodes["MOV_REG_TO_REG"] = 2] = "MOV_REG_TO_REG";
    OPCodes[OPCodes["MOV_ADDRESS_TO_REG"] = 3] = "MOV_ADDRESS_TO_REG";
    OPCodes[OPCodes["MOV_REGADDRESS_TO_REG"] = 4] = "MOV_REGADDRESS_TO_REG";
    OPCodes[OPCodes["MOV_REG_TO_ADDRESS"] = 5] = "MOV_REG_TO_ADDRESS";
    OPCodes[OPCodes["MOV_REG_TO_REGADDRESS"] = 6] = "MOV_REG_TO_REGADDRESS";
    OPCodes[OPCodes["MOV_NUMBER_TO_REG"] = 7] = "MOV_NUMBER_TO_REG";
    OPCodes[OPCodes["MOV_NUMBER_TO_ADDRESS"] = 8] = "MOV_NUMBER_TO_ADDRESS";
    OPCodes[OPCodes["MOV_NUMBER_TO_REGADDRESS"] = 9] = "MOV_NUMBER_TO_REGADDRESS";
    OPCodes[OPCodes["ADD_REG_TO_REG"] = 10] = "ADD_REG_TO_REG";
    OPCodes[OPCodes["ADD_REGADDRESS_TO_REG"] = 11] = "ADD_REGADDRESS_TO_REG";
    OPCodes[OPCodes["ADD_ADDRESS_TO_REG"] = 12] = "ADD_ADDRESS_TO_REG";
    OPCodes[OPCodes["ADD_NUMBER_TO_REG"] = 13] = "ADD_NUMBER_TO_REG";
    OPCodes[OPCodes["SUB_REG_FROM_REG"] = 14] = "SUB_REG_FROM_REG";
    OPCodes[OPCodes["SUB_REGADDRESS_FROM_REG"] = 15] = "SUB_REGADDRESS_FROM_REG";
    OPCodes[OPCodes["SUB_ADDRESS_FROM_REG"] = 16] = "SUB_ADDRESS_FROM_REG";
    OPCodes[OPCodes["SUB_NUMBER_FROM_REG"] = 17] = "SUB_NUMBER_FROM_REG";
    OPCodes[OPCodes["INC_REG"] = 18] = "INC_REG";
    OPCodes[OPCodes["DEC_REG"] = 19] = "DEC_REG";
    OPCodes[OPCodes["CMP_REG_WITH_REG"] = 20] = "CMP_REG_WITH_REG";
    OPCodes[OPCodes["CMP_REGADDRESS_WITH_REG"] = 21] = "CMP_REGADDRESS_WITH_REG";
    OPCodes[OPCodes["CMP_ADDRESS_WITH_REG"] = 22] = "CMP_ADDRESS_WITH_REG";
    OPCodes[OPCodes["CMP_NUMBER_WITH_REG"] = 23] = "CMP_NUMBER_WITH_REG";
    OPCodes[OPCodes["JMP_REGADDRESS"] = 30] = "JMP_REGADDRESS";
    OPCodes[OPCodes["JMP_ADDRESS"] = 31] = "JMP_ADDRESS";
    OPCodes[OPCodes["JC_REGADDRESS"] = 32] = "JC_REGADDRESS";
    OPCodes[OPCodes["JC_ADDRESS"] = 33] = "JC_ADDRESS";
    OPCodes[OPCodes["JNC_REGADDRESS"] = 34] = "JNC_REGADDRESS";
    OPCodes[OPCodes["JNC_ADDRESS"] = 35] = "JNC_ADDRESS";
    OPCodes[OPCodes["JZ_REGADDRESS"] = 36] = "JZ_REGADDRESS";
    OPCodes[OPCodes["JZ_ADDRESS"] = 37] = "JZ_ADDRESS";
    OPCodes[OPCodes["JNZ_REGADDRESS"] = 38] = "JNZ_REGADDRESS";
    OPCodes[OPCodes["JNZ_ADDRESS"] = 39] = "JNZ_ADDRESS";
    OPCodes[OPCodes["JA_REGADDRESS"] = 40] = "JA_REGADDRESS";
    OPCodes[OPCodes["JA_ADDRESS"] = 41] = "JA_ADDRESS";
    OPCodes[OPCodes["JNA_REGADDRESS"] = 42] = "JNA_REGADDRESS";
    OPCodes[OPCodes["JNA_ADDRESS"] = 43] = "JNA_ADDRESS";
    OPCodes[OPCodes["PUSH_REG"] = 50] = "PUSH_REG";
    OPCodes[OPCodes["PUSH_REGADDRESS"] = 51] = "PUSH_REGADDRESS";
    OPCodes[OPCodes["PUSH_ADDRESS"] = 52] = "PUSH_ADDRESS";
    OPCodes[OPCodes["PUSH_NUMBER"] = 53] = "PUSH_NUMBER";
    OPCodes[OPCodes["POP_REG"] = 54] = "POP_REG";
    OPCodes[OPCodes["CALL_REGADDRESS"] = 55] = "CALL_REGADDRESS";
    OPCodes[OPCodes["CALL_ADDRESS"] = 56] = "CALL_ADDRESS";
    OPCodes[OPCodes["RET"] = 57] = "RET";
    OPCodes[OPCodes["MUL_REG"] = 60] = "MUL_REG";
    OPCodes[OPCodes["MUL_REGADDRESS"] = 61] = "MUL_REGADDRESS";
    OPCodes[OPCodes["MUL_ADDRESS"] = 62] = "MUL_ADDRESS";
    OPCodes[OPCodes["MUL_NUMBER"] = 63] = "MUL_NUMBER";
    OPCodes[OPCodes["DIV_REG"] = 64] = "DIV_REG";
    OPCodes[OPCodes["DIV_REGADDRESS"] = 65] = "DIV_REGADDRESS";
    OPCodes[OPCodes["DIV_ADDRESS"] = 66] = "DIV_ADDRESS";
    OPCodes[OPCodes["DIV_NUMBER"] = 67] = "DIV_NUMBER";
    OPCodes[OPCodes["AND_REG_WITH_REG"] = 70] = "AND_REG_WITH_REG";
    OPCodes[OPCodes["AND_REGADDRESS_WITH_REG"] = 71] = "AND_REGADDRESS_WITH_REG";
    OPCodes[OPCodes["AND_ADDRESS_WITH_REG"] = 72] = "AND_ADDRESS_WITH_REG";
    OPCodes[OPCodes["AND_NUMBER_WITH_REG"] = 73] = "AND_NUMBER_WITH_REG";
    OPCodes[OPCodes["OR_REG_WITH_REG"] = 74] = "OR_REG_WITH_REG";
    OPCodes[OPCodes["OR_REGADDRESS_WITH_REG"] = 75] = "OR_REGADDRESS_WITH_REG";
    OPCodes[OPCodes["OR_ADDRESS_WITH_REG"] = 76] = "OR_ADDRESS_WITH_REG";
    OPCodes[OPCodes["OR_NUMBER_WITH_REG"] = 77] = "OR_NUMBER_WITH_REG";
    OPCodes[OPCodes["XOR_REG_WITH_REG"] = 78] = "XOR_REG_WITH_REG";
    OPCodes[OPCodes["XOR_REGADDRESS_WITH_REG"] = 79] = "XOR_REGADDRESS_WITH_REG";
    OPCodes[OPCodes["XOR_ADDRESS_WITH_REG"] = 80] = "XOR_ADDRESS_WITH_REG";
    OPCodes[OPCodes["XOR_NUMBER_WITH_REG"] = 81] = "XOR_NUMBER_WITH_REG";
    OPCodes[OPCodes["NOT_REG"] = 82] = "NOT_REG";
    OPCodes[OPCodes["SHL_REG_WITH_REG"] = 90] = "SHL_REG_WITH_REG";
    OPCodes[OPCodes["SHL_REGADDRESS_WITH_REG"] = 91] = "SHL_REGADDRESS_WITH_REG";
    OPCodes[OPCodes["SHL_ADDRESS_WITH_REG"] = 92] = "SHL_ADDRESS_WITH_REG";
    OPCodes[OPCodes["SHL_NUMBER_WITH_REG"] = 93] = "SHL_NUMBER_WITH_REG";
    OPCodes[OPCodes["SHR_REG_WITH_REG"] = 94] = "SHR_REG_WITH_REG";
    OPCodes[OPCodes["SHR_REGADDRESS_WITH_REG"] = 95] = "SHR_REGADDRESS_WITH_REG";
    OPCodes[OPCodes["SHR_ADDRESS_WITH_REG"] = 96] = "SHR_ADDRESS_WITH_REG";
    OPCodes[OPCodes["SHR_NUMBER_WITH_REG"] = 97] = "SHR_NUMBER_WITH_REG";
})(OPCodes || (OPCodes = {}));


/***/ }),

/***/ "z+Vf":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _simulator_memory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../simulator/memory.service */ "II0G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_get_char_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-char.pipe */ "R+vU");






function OutputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "getChar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, m_r1));
} }
class OutputComponent {
    constructor(memory) {
        this.memory = memory;
        this.outputStartIndex = _shared_constants__WEBPACK_IMPORTED_MODULE_1__["OUTPUT_START_INDEX"];
    }
    ngOnDestroy() {
        var _a;
        (_a = this.output$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    ngOnInit() {
        this.output$ = this.memory.output$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((v) => void (this.data = v)))
            .subscribe();
    }
}
OutputComponent.ɵfac = function OutputComponent_Factory(t) { return new (t || OutputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_simulator_memory_service__WEBPACK_IMPORTED_MODULE_3__["MemoryService"])); };
OutputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OutputComponent, selectors: [["app-output"]], decls: 2, vars: 1, consts: [[1, "source-code", "output"], [4, "ngFor", "ngForOf"], [1, "char"]], template: function OutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OutputComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_shared_get_char_pipe__WEBPACK_IMPORTED_MODULE_5__["GetCharPipe"]], styles: [".output[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.output[_ngcontent-%COMP%]   .char[_ngcontent-%COMP%] {\n  width: 1rem;\n  background-color: #dfdfdf;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dHB1dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBSEE7RUFJSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6Im91dHB1dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRwdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5jaGFyIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => void console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map