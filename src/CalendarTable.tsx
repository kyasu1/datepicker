import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import moment = require('moment');
import cs = require('classnames');
import { Calendar } from './Calendar';
import { Day } from './Day';

const styles = require('./DatePicker.css');

interface ICalendar {
  calendar: Calendar;
}

@observer
export class CalendarTable extends React.Component<ICalendar, {}> {
  render() {
    const {editing, opening, date, selected, weeks} = this.props.calendar;
    const year = date.year();
    const month = date.month() + 1;
    const days = ['日', '月', '火', '水', '木', '金', '土'];

    return (
      <div ref="datepicker">
        <div>{editing ? '編集中' : 'OK'}</div>
        <input
          type="text"
          className={styles.text}
          value={this.props.calendar.text}
          onBlur={(e) => this.handleInputBlur(e)}
          onClick={e => this.handleInputClick(e)}
          onChange={e => this.handleInputChange(e)}
        />
        {
          opening ?
          <div tabIndex={1} onBlur={(e) => this.handleCalendarBlur(e)} className={styles.calendar} >
            <table>
              <thead>
                <tr>
                  <th onClick={() => this.props.calendar.date = this.props.calendar.date.clone().add(-1, 'months')}>{'<'}</th>
                  <th colSpan="5">{`${year}年${month}月`}</th>
                  <th onClick={() => this.props.calendar.date = this.props.calendar.date.clone().add( 1, 'months')}>{'>'}</th>
                </tr>
                <tr>
                  {days.map((d, i) => <th key={i}>{d}</th>}
                </tr>
              </thead>
              <tbody>
              {weeks.map(
                (week, i) =>
                <tr key={i} className={styles.week}>
                  {
                    week.map((d, j) =>
                          <Day key={j} cell={d} selected={selected} handleClick={(v) => this.handleDaySelect(v)} />
                         )
                  }
                </tr>
              )}
              </tbody>
            </table>
          </div> :
          null
        }
      </div>
    );
  }

  handleInputBlur(e) {
    if (this.props.calendar.validate() === false) {
      e.target.focus();
    } else {
      this.props.calendar.update();
    }
  }

  handleInputClick(e) {
    this.props.calendar.editing = true;
    this.props.calendar.opening = true;
  }

  handleInputChange(e) {
    this.props.calendar.text = e.target.value.trim();
  }

  handleDaySelect(current: moment.Moment) {
    this.props.calendar.set(current);
  }

  handleCalendarBlur(e) {
    e.stopPropagation();
    this.props.calendar.opening = false;
  }
}

