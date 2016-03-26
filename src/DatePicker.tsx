import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import * as styles from './DatePicker.css';

interface IDatePicker {
  text: string;
  onBlur: Function;
  onKeyPress: Function;
}

@observer
export class DatePicker extends React.Component<IDatePicker, {}> {
  render() {
    return (
      <div>
        <input type="text"
          ref="input"
          onBlur={(e: React.FormEvent) => this.props.onBlur(e)}
          onKeyPress={e => this.props.onKeyPress(e) }
          value={this.props.text}
        />
      </div>
    );
  }
}
