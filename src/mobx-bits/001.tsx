import * as mobx from 'mobx';

/**
 * Basic observable syntax
 */

const name = mobx.observable.box('');

name.set('hello');

const dispose = name.observe(change => {
  console.log(`Value changed from ${change.oldValue} to ${change.newValue}`);
});

name.set('Cyprus JS');

console.log(name.get());
