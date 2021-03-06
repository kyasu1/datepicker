import {observable} from 'mobx';

export class AppState {
  @observable timer = 0;
  @observable text = '';

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }
  
  resetTimer() {
    this.timer = 0;
  }
}

