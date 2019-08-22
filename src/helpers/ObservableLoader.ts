import { observable, action } from 'mobx';

export default class ObservableLoader<TRet> {
  requestId = 0;
  @observable loading = false;
  @observable loadedOnce = false;
  /** Last return value of async process, does not clear if subsequent process errors out. */
  @observable.ref result?: TRet;
  /** Timestamp of last successful process execution, does not clear if subsequent process errors out. */
  @observable lastSuccessTimestamp?: number;

  /** Error of the last execution if it failed. Clears on subsequent successful run. */
  @observable.ref error?: Error;
  /** Timestamp of the last execution if it failed. Clears on subsequent successful run. */
  @observable errorTimestamp?: number;

  constructor(private process: () => Promise<TRet>) {}

  @action private setSuccess(result: TRet) {
    this.result = result;
    this.loadedOnce = true;
    this.loading = false;
    this.lastSuccessTimestamp = Date.now();

    this.error = undefined;
    this.errorTimestamp = undefined;
  }

  @action private setError(err: Error) {
    console.error(err);
    let error = err;
    if (!(error instanceof Error)) {
      error = new Error(String(err));
    }
    this.error = error;
    this.errorTimestamp = Date.now();
    this.loading = false;
  }

  @action.bound
  async load(force = false) {
    if (!force && this.loading) return;
    this.loading = true;
    const requestId = ++this.requestId;
    try {
      const result = await this.process();
      if (requestId !== this.requestId) return;
      this.setSuccess(result);
    } catch (err) {
      this.setError(err);
    }
  }
}
