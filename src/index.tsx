import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {TimerView} from './TimerView';
import {AppState} from './AppState';

const appState =  new AppState();

window['__myapp_container__'] = document.getElementById('root');

ReactDOM.render(<TimerView appState={appState} />, window['__myapp_container__']);
