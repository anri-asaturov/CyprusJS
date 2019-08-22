import { observable, computed, autorun, reaction, when } from 'mobx';

/**
 * Reacting to observables
 */

export default class Balance {
  @observable cents = 123;

  @computed get euros() {
    return this.cents / 100;
  }

  set euros(value) {
    this.cents = value * 100;
  }
}

const balance = new Balance();

// -- Autorun

const disposer = autorun(() => {
  console.log(`Your balance is ${balance.euros} eur.`);
});

disposer();

// autorun(()=>, { delay: 1000 })

// -- When

when(() => balance.cents < 100, () => console.log('Your balance is too low! Go get some work!'));

// -- Reaction

const settings = observable({
  threshold: 100
});

reaction(
  () => balance.cents < settings.threshold,
  () => console.log('Your balance is too low! Go get some work!')
);
