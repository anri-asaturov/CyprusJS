import { observable, action } from 'mobx';

/**
 * Actions
 */

export default class Animation {
  @observable frames = 1000;

  @action slowDown(factor: number) {
    this.frames /= factor;
  }

  @action.bound reset() {
    this.frames = 1000;
  }
}

// runInAction(()=>)

// action(()=>)
