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
var Day_1 = require('./Day');
var styles = require('./DatePicker.css');
var CalendarTable = (function (_super) {
    __extends(CalendarTable, _super);
    function CalendarTable() {
        _super.apply(this, arguments);
    }
    CalendarTable.prototype.render = function () {
        var _this = this;
        var _a = this.props.calendar, editing = _a.editing, opening = _a.opening, date = _a.date, selected = _a.selected, weeks = _a.weeks;
        var year = date.year();
        var month = date.month() + 1;
        return (React.createElement("div", {ref: "datepicker"}, React.createElement("div", null, editing ? '編集中' : 'OK'), React.createElement("input", {type: "text", className: styles.text, value: this.props.calendar.text, onBlur: function (e) { return _this.handleInputBlur(e); }, onClick: function (e) { return _this.handleInputClick(e); }, onChange: function (e) { return _this.handleInputChange(e); }}), opening ?
            React.createElement("div", {tabIndex: 1, onBlur: function (e) { return _this.handleCalendarBlur(e); }, className: styles.calendar}, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {onClick: function () { return _this.props.calendar.date = _this.props.calendar.date.clone().add(-1, 'months'); }}, '<'), React.createElement("th", {colSpan: "5"}, year + "\u5E74" + month + "\u6708"), React.createElement("th", {onClick: function () { return _this.props.calendar.date = _this.props.calendar.date.clone().add(1, 'months'); }}, '>')), React.createElement("tr", null, React.createElement("th", null, "日"), React.createElement("th", null, "月"), React.createElement("th", null, "火"), React.createElement("th", null, "水"), React.createElement("th", null, "木"), React.createElement("th", null, "金"), React.createElement("th", null, "土"))), React.createElement("tbody", null, weeks.map(function (week, i) {
                return React.createElement("tr", {key: i, className: styles.week}, week.map(function (d, j) {
                    return React.createElement(Day_1.Day, {key: j, cell: d, selected: selected, handleClick: function (v) { return _this.handleDaySelect(v); }});
                }));
            })))) :
            null));
    };
    CalendarTable.prototype.handleInputBlur = function (e) {
        if (this.props.calendar.validate() === false) {
            e.target.focus();
        }
        else {
            this.props.calendar.update();
        }
    };
    CalendarTable.prototype.handleInputClick = function (e) {
        this.props.calendar.editing = true;
        this.props.calendar.opening = true;
    };
    CalendarTable.prototype.handleInputChange = function (e) {
        this.props.calendar.text = e.target.value.trim();
    };
    CalendarTable.prototype.handleDaySelect = function (current) {
        this.props.calendar.set(current);
    };
    CalendarTable.prototype.handleCalendarBlur = function (e) {
        e.stopPropagation();
        this.props.calendar.opening = false;
    };
    CalendarTable = __decorate([
        mobx_react_1.observer
    ], CalendarTable);
    return CalendarTable;
}(React.Component));
exports.CalendarTable = CalendarTable;
