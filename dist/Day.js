"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var moment = require('moment');
var cs = require('classnames');
var styles = require('./Day.css');
var Day = (function (_super) {
    __extends(Day, _super);
    function Day() {
        _super.apply(this, arguments);
    }
    Day.prototype.render = function () {
        var _this = this;
        var _a = this.props, cell = _a.cell, selected = _a.selected;
        var isToday = cell.isSame(moment(), 'day');
        var isSelected = cell.isSame(selected, 'day');
        var isSunday = cell.day() === 0;
        var isSaturday = cell.day() === 6;
        return (React.createElement("td", {"data-selected": selected, className: cs(styles.day, isToday && styles.today, isSunday && styles.sunday, isSaturday && styles.saturday, isSelected && styles.selected), onClick: function (e) { return _this.handleClick(e, cell); }}, cell.date()));
    };
    Day.prototype.handleClick = function (e, cell) {
        console.log(e);
        this.props.handleClick(cell);
    };
    return Day;
}(React.Component));
exports.Day = Day;
