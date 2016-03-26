import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import {observer} from 'mobx-react';

import {Calendar} from './Calendar';
import {CalendarTable} from './CalendarTable';

import {AppState} from './AppState';
interface Props {
  appState: AppState;
}

import moment = require('moment');

let calendar = new Calendar(moment('2013/1/11', 'YYYY/MM/DD'));

@observer
export class TimerView extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <h3>SOULD NOW WORKING!!</h3>
                <CalendarTable calendar={calendar} />
                <DevTools />
            </div>
        );
     }
};

