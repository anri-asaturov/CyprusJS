import { action } from 'mobx';
import App from '../app';

export default class SettingsActions {
  constructor(private app: App) {}

  @action
  loadSettings() {
    const store = this.app.stores.settings;
    const json = this.app.effects.browser.getLocalStorageItem<string>('guest', 'settings');
    if (json !== null) {
      store.deserialize(json);
    }
    console.log('Settings loaded.');
  }
}
