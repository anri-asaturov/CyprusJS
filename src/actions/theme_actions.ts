import { action } from 'mobx';
import App from '../app';
import { darkTheme, lightTheme } from '../style/themes';

export default class ThemeActions {
  constructor(private app: App) {}

  @action
  toggleTheme() {
    const store = this.app.stores.settings;
    store.theme = store.theme === lightTheme ? darkTheme : lightTheme;
  }
}
