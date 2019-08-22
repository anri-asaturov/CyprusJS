import { DateTime, LocalZone } from 'luxon';
import { computed, observable } from 'mobx';
import App from '../app';
import ObservableClock from '../helpers/ObservableClock';
import { ScreenClassType } from '../ui/grid/media';

export default class UIStore {
  constructor(private app: App) {}
  private clock = new ObservableClock();

  @observable screenClass: ScreenClassType = 'md';

  @computed get isMobileScreen() {
    return this.screenClass === 'xs';
  }
  @computed get isDesktopScreen() {
    return !this.isMobileScreen;
  }

  // Returns observable Date that will update every clockUpdateInterval seconds.
  @computed get websiteClock() {
    //@ts-ignore luxon will be rewritten in TS soon
    return this.userClock.setZone('America/Los_Angeles');
  }

  @computed get userClock() {
    return DateTime.fromMillis(this.clock.timestamp);
  }
}
