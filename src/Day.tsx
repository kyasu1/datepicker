import * as React from 'react';
import * as ReactDOM from 'react-dom';
import moment = require('moment');
import cs = require('classnames');
import styles = require('./Day.css');

interface IDay {
  cell: moment.Moment;
  selected: moment.Moment;
  handleClick: Function;
}

export class Day extends React.Component<IDay, {}> {
  render() {
    const {cell, selected} = this.props;  
    const isToday = cell.isSame(moment(), 'day');
    const isSelected = cell.isSame(selected, 'day');
    const isSunday = cell.day() === 0;
    const isSaturday = cell.day() === 6;
    return (
      <td
        data-selected={selected}
        className={cs(
          styles.day,
          isToday && styles.today,
          isSunday && styles.sunday,
          isSaturday && styles.saturday,
          isSelected && styles.selected
        )}
        onClick={(e) => this.handleClick(e, cell)}
      >
        {cell.date()}
      </td>
    );
  }

  handleClick(e, cell) {
    console.log(e);
    /*
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    */
    this.props.handleClick(cell);
  }
}
