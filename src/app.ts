// easiest way to support fetch in tests, jsdom is not available in jest.setup.js
if (!window.fetch) {
  window.fetch = require('cross-fetch');
}

import SettingsActions from './actions/settings_actions';
import ThemeActions from './actions/theme_actions';
import LoggingReactions from './reactions/logging_reactions';
import RouterReactions from './reactions/router_reactions';
import SettingsReactions from './reactions/settings_reactions';
import WindowReactions from './reactions/window_reactions';
import BrowserEffects from './side_effects/browser_effects';
import NavigationEffects from './side_effects/navigation_effects';
import AccountStore from './stores/account_store';
import AuthStore from './stores/auth_store';
import RouterStore from './stores/router_store';
import SettingsStore from './stores/settings_store';
import UIStore from './stores/ui_store';
import RouterActions from './actions/router_actions';
import UIActions from './actions/ui_actions';

export default class App {
  actions = {
    ui: new UIActions(this),
    theme: new ThemeActions(this),
    settings: new SettingsActions(this),
    router: new RouterActions(this)
  };

  stores = {
    ui: new UIStore(this),
    router: new RouterStore(this),
    auth: new AuthStore(this),
    account: new AccountStore(this),
    settings: new SettingsStore(this)
  };

  effects = { browser: new BrowserEffects(this), navigation: new NavigationEffects(this) };

  reactions = {
    window: new WindowReactions(this),
    router: new RouterReactions(this),
    logging: new LoggingReactions(this),
    settings: new SettingsReactions(this)
  };

  /**
   * All reactions go here
   */
  async start() {
    this.actions.settings.loadSettings();
    this.reactions.settings.persistReaction.start();
    this.reactions.router.urlLocationTracker.start();
    this.reactions.window.windowSizeTrackingReaction.start();
  }
}
