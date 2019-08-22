import App from '../app';
import { darkTheme, lightTheme } from '../style/themes';

test('load settings', () => {
  const app = new App();
  expect(app.stores.settings.theme).toBe(lightTheme);
  localStorage.setItem('guest:settings', JSON.stringify(JSON.stringify({ theme: 'dark' })));
  app.actions.settings.loadSettings();
  expect(app.stores.settings.theme).toBe(darkTheme);
  localStorage.setItem('guest:settings', JSON.stringify(JSON.stringify({ theme: 'light' })));
  app.actions.settings.loadSettings();
  expect(app.stores.settings.theme).toBe(lightTheme);
});
