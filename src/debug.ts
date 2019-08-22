import { isDevBuild } from './helpers/runtime';

if (isDevBuild) {
  //@ts-ignore
  window.debug = {
    modules: {
      luxon: require('luxon')
    }
  };
}

const mobx = require('mobx');

declare global {
  interface Window {
    mobx: typeof mobx;
  }
}

window.mobx = mobx;
