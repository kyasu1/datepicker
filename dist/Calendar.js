"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mobx_1 = require('mobx');
var moment = require('moment');
var Calendar = (function () {
    function Calendar(theMoment, formatType) {
        this.editing = false;
        this.opening = false;
        if (theMoment) {
            this._text = theMoment.format('YYYY-MM-DD');
            this.selected = theMoment;
            this.date = theMoment;
        }
        else {
            var today = moment();
            this._text = today.format('YYYY-MM-DD');
            this.selected = today;
            this.date = today;
        }
    }
    Object.defineProperty(Calendar.prototype, "weeks", {
        get: function () {
            var year = this.date.year();
            var month = this.date.month();
            var last_day = this.date.clone().endOf('month').date();
            var wday = this.date.clone().startOf('month').day();
            var weeks;
            weeks = [];
            for (var row = 0; row < 6; row++) {
                weeks[row] = [];
                var day = row * 7 - wday + 1;
                for (var col = 0; col < 7; col++) {
                    weeks[row][col] = moment(new Date(year, month, day + col));
                }
            }
            return weeks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (theText) {
            this._text = theText;
            if (this.editing === false) {
                if (moment(this._text).isValid() === true) {
                    this.selected = moment(this._text);
                    this.date = moment(this._text);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Calendar.prototype.update = function () {
        var date = moment(this._text);
        this.selected = date;
        this.date = date;
        this.editing = false;
    };
    Calendar.prototype.set = function (value) {
        if (value && value.isValid() === true) {
            this.text = value.format('YYYY-MM-DD');
            this.selected = value;
            this.date = value;
        }
    };
    Calendar.prototype.validate = function () {
        var dateArray = this._text.split(/[\/\- ]/g, 3);
        console.log(dateArray);
        if (dateArray.length !== 3) {
            console.log('less than 3');
            return false;
        }
        if (dateArray.map(function (e) { return e.search(/^\d*$/g) === 0; }).reduce(function (a, b) { return a && b; }) === false) {
            console.log('not number');
            return false;
        }
        if (moment(dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2], 'YYYY-MM-DD').isValid() === false) {
            console.log('invalid date');
            return false;
        }
        return true;
    };
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "_text", void 0);
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "editing", void 0);
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "opening", void 0);
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "selected", void 0);
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "date", void 0);
    __decorate([
        mobx_1.computed
    ], Calendar.prototype, "weeks", null);
    return Calendar;
}());
exports.Calendar = Calendar;
