import ObservableLoader from './ObservableLoader';
import { when } from 'mobx';

test('Observable loader', async () => {
  let c = 0;
  const process = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => (c < 2 ? resolve(++c) : reject(c)), 10);
    });
  };
  const l = new ObservableLoader(process);

  expect(l.error).toBeUndefined();
  expect(l.errorTimestamp).toBeUndefined();
  expect(l.lastSuccessTimestamp).toBeUndefined();
  expect(l.result).toBeUndefined();
  expect(l.loading).toBe(false);
  expect(l.loadedOnce).toBe(false);

  l.load(); // regular case

  expect(l.error).toBeUndefined();
  expect(l.errorTimestamp).toBeUndefined();
  expect(l.lastSuccessTimestamp).toBeUndefined();
  expect(l.result).toBeUndefined();
  expect(l.loading).toBe(true);
  expect(l.loadedOnce).toBe(false);

  await when(() => !l.loading);

  expect(l.error).toBeUndefined();
  expect(l.errorTimestamp).toBeUndefined();
  expect(typeof l.lastSuccessTimestamp).toBe('number');
  expect(Date.now() - Number(l.lastSuccessTimestamp)).toBeLessThan(100);
  expect(l.result).toBe(c);
  expect(l.loading).toBe(false);
  expect(l.loadedOnce).toBe(true);

  l.load(); // calling again while already loading
  expect(l.loading).toBe(true);
  l.load();

  expect(l.error).toBeUndefined();
  expect(l.errorTimestamp).toBeUndefined();
  expect(typeof l.lastSuccessTimestamp).toBe('number');
  expect(l.result).toBe(c);
  expect(l.loading).toBe(true);
  expect(l.loadedOnce).toBe(true);

  await when(() => !l.loading);

  expect(l.error).toBeUndefined();
  expect(l.errorTimestamp).toBeUndefined();
  expect(typeof l.lastSuccessTimestamp).toBe('number');
  expect(Date.now() - Number(l.lastSuccessTimestamp)).toBeLessThan(100);
  expect(l.result).toBe(c);
  expect(l.loading).toBe(false);
  expect(l.loadedOnce).toBe(true);

  l.load(); // error case
  await when(() => !l.loading);

  expect(l.error instanceof Error).toBe(true);
  expect(typeof l.errorTimestamp).toBe('number');
  expect(Date.now() - Number(l.errorTimestamp)).toBeLessThan(100);
  expect(typeof l.lastSuccessTimestamp).toBe('number');
  expect(l.result).toBe(c);
  expect(l.loading).toBe(false);
  expect(l.loadedOnce).toBe(true);

  c = 0;
  l.load(); // success after error case
  await when(() => !l.loading);

  expect(l.error).toBeUndefined();
  expect(l.errorTimestamp).toBeUndefined();
  expect(typeof l.lastSuccessTimestamp).toBe('number');
  expect(Date.now() - Number(l.lastSuccessTimestamp)).toBeLessThan(100);
  expect(l.result).toBe(c);
  expect(l.loading).toBe(false);
  expect(l.loadedOnce).toBe(true);
});
