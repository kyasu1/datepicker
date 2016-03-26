"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var mobx_react_1 = require('mobx-react');
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        _super.apply(this, arguments);
    }
    DatePicker.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("input", {type: "text", ref: "input", onBlur: function (e) { return _this.props.onBlur(e); }, onKeyPress: function (e) { return _this.props.onKeyPress(e); }, value: this.props.text})));
    };
    DatePicker = __decorate([
        mobx_react_1.observer
    ], DatePicker);
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
