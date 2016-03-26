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
var mobx_react_devtools_1 = require('mobx-react-devtools');
var mobx_react_1 = require('mobx-react');
var Calendar_1 = require('./Calendar');
var CalendarTable_1 = require('./CalendarTable');
var moment = require('moment');
var calendar = new Calendar_1.Calendar(moment('2013/1/11', 'YYYY/MM/DD'));
var TimerView = (function (_super) {
    __extends(TimerView, _super);
    function TimerView() {
        _super.apply(this, arguments);
    }
    TimerView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h3", null, "SOULD NOW WORKING!!"), React.createElement(CalendarTable_1.CalendarTable, {calendar: calendar}), React.createElement(mobx_react_devtools_1.default, null)));
    };
    TimerView = __decorate([
        mobx_react_1.observer
    ], TimerView);
    return TimerView;
}(React.Component));
exports.TimerView = TimerView;
;
