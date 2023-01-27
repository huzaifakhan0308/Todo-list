import Abc from './modules/newList.js';

// class LocalStorageMock {
//   constructor() {
//     this.store = {};
//   }

//   clear() {
//     this.store = {};
//   }

//   getItem(key) {
//     return this.store[key] || null;
//   }

//   setItem(key, value) {
//     this.store[key] = String(value);
//   }

//   removeItem(key) {
//     delete this.store[key];
//   }
// }

// global.localStorage = new LocalStorageMock();

const functions = new Abc();
const obj1 = { value: 'hello', completed: false, index: null };
const obj2 = { value: 'world', completed: false, index: null };

describe('functionality methods', () => {
  test('Add new task', () => {
    expect(functions.add(obj1)).toStrictEqual([{ value: 'hello', completed: false, index: 1 }]);
  });

  test('Add new task', () => {
    expect(functions.add(obj2)).toStrictEqual([{ value: 'hello', completed: false, index: 1 }, { value: 'world', completed: false, index: 2 }]);
  });

  test('remove a task', () => {
    expect(functions.remove(2)).toStrictEqual([{ value: 'world', completed: false, index: 1 }]);
  });
});