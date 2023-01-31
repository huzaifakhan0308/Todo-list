import NewList from './newList.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

const obj1 = { value: 'hello', completed: false, index: null };

const functions = new NewList();

describe('add and remove function', () => {
  it('Add new task', () => {
    expect(functions.add(obj1)).toStrictEqual([{ value: 'hello', completed: false, index: 1 }]);
  });

  it('remove task', () => {
    expect(functions.remove(1)).toHaveLength(0);
  });
});