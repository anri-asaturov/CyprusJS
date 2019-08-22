import * as mobx from 'mobx';

/**
 * Observable objects, arrays, maps
 */

// --- Objects
// synonym: observable.object
const robot = mobx.observable({
  name: 'Bender',
  age: 100
});

console.log(robot.name, robot.age);

// --- Arrays

// synonym: observable.array
const names = mobx.observable(['Bender', 'Leela', 'Fry']);

console.log(names[1]);
//names.remove('Fry')
//names.observe(()=>{})
//names.intercept(()=>{})
//names.clear();

// --- Maps

// synonym: observable(new Map())
const charMap = mobx.observable.map();

charMap.set('Bender', { age: 100, superPower: 'Shiny metal ass' });
charMap.set('Leela', { age: 26, superPower: 'Karate chops' });

// charMap.observe()
// charMap.intercept()

console.log(charMap.get('Bender'));

// -- Shallow observables

// observable.shallow(...)
// observable.shallowObject(...)
// observable.shallowArray(...)
// etc.
