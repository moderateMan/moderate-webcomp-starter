import { makeAutoObservable } from "mobx";

class Global {
  num = 123;

  constructor() {
    makeAutoObservable(this);
  }

  increaseNum() {
    this.num += 1;
    console.log(this.num);
  }
}

export default new Global();
