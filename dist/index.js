"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var TimerView_1 = require('./TimerView');
var AppState_1 = require('./AppState');
var appState = new AppState_1.AppState();
window['__myapp_container__'] = document.getElementById('root');
ReactDOM.render(React.createElement(TimerView_1.TimerView, {appState: appState}), window['__myapp_container__']);
