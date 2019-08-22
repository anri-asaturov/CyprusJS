import { observable, computed } from 'mobx';

export default class Balance {
  @observable cents = 123;

  // @computed get euros() {
  //   return this.cents / 100;
  // }

  // set euros(value) {
  //   this.cents = value * 100;
  // }
}

const balance = new Balance();

console.log(balance.cents);

//console.log(balance.euros);
//balance.euros = 55;
