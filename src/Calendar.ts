import {observable, computed} from 'mobx';
import moment = require('moment');

export class Calendar {
  @observable private _text: string;
  @observable editing: boolean = false; // テキストボックスを編集中かどうか判断するフラグ
  @observable opening: boolean = false; // カレンダーの開閉をコントロールするフラグ
  @observable selected: moment.Moment;
  @observable date:moment.Moment;
  formatType: number;

  constructor(theMoment?: moment.Moment, formatType?: number) {
    if (theMoment) {
      this._text = theMoment.format('YYYY-MM-DD');
      this.selected = theMoment;
      this.date = theMoment;
    } else {
      const today = moment();
      this._text = today.format('YYYY-MM-DD');
      this.selected = today;
      this.date = today;
    }
  }

  @computed get weeks() {
    const year:number = this.date.year();
    const month:number = this.date.month();
    const last_day:number = this.date.clone().endOf('month').date();
    const wday:number = this.date.clone().startOf('month').day();
    let weeks: moment.Moment[][];

    weeks = [];
    for (let row = 0 ; row < 6 ; row++) {
      weeks[row] = [];
      const day = row * 7 - wday + 1;
      for (let col = 0 ; col < 7 ; col++) {
        weeks[row][col] = moment(new Date(year, month, day + col));
      }
    }
    return weeks;
  }

  get text(): string {
    return this._text;
  }

  set text(theText: string) {
    this._text = theText;
    if (this.editing === false) {
      if (moment(this._text).isValid() === true) {
        this.selected = moment(this._text);
        this.date = moment(this._text);
      }
    }
  }

  update() {
    const date = moment(this._text);
    this.selected = date;
    this.date = date;
    this.editing = false;
//    this.opening = false;
  }

  set(value:moment.Moment) {
    if (value && value.isValid() === true) {
      this.text = value.format('YYYY-MM-DD');
      this.selected = value;
      this.date = value;
    }
  }

  validate() : boolean {
    const dateArray = this._text.split(/[\/\- ]/g, 3);
    console.log(dateArray);

    if (dateArray.length !== 3) {
      console.log('less than 3');
      return false;
    }

    if (dateArray.map(e => e.search(/^\d*$/g) === 0).reduce((a, b) => a && b) === false) {
      console.log('not number');
      return false;
    }

    if (moment(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`, 'YYYY-MM-DD').isValid() === false) {
      console.log('invalid date');
      return false;
    }

    return true;  
  }
  
}
