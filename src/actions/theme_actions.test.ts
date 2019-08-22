import App from '../app';
import { darkTheme, lightTheme } from '../style/themes';

test('toggleTheme', async () => {
  const app = new App();
  const store = app.stores.settings;
  expect(store.theme).toBe(lightTheme);
  await app.actions.theme.toggleTheme();
  expect(store.theme).toBe(darkTheme);
  await app.actions.theme.toggleTheme();
  expect(store.theme).toBe(lightTheme);
  await app.actions.theme.toggleTheme();
  expect(store.theme).toBe(darkTheme);
});
