import Methods from '../src/modules/methods.js';

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
const obj2 = { value: 'world', completed: false, index: null };

const functions = new Methods();

describe('add and remove function', () => {
  it('Add new task', () => {
    const liMock = [
      { id: 1 },
      { id: 2 },
    ];
    document.querySelectorAll = jest.fn(() => liMock);
    expect(functions.add(obj1)).toEqual([{ value: 'hello', completed: false, index: 1 }]);
    expect(functions.add(obj2)).toEqual(
      [
        { value: 'hello', completed: false, index: 1 },
        { value: 'world', completed: false, index: 2 },
      ],
    );
  });

  it('remove task', () => {
    expect(functions.remove(1)).toHaveLength(1);
  });

  it('editing a task text', () => {
    const textAreaMock = {
      value: 'huzaifa',
      parentElement: { id: 1 },
    };
    expect(functions.editing(textAreaMock)).toStrictEqual([{ value: 'huzaifa', completed: false, index: 1 }]);
  });

  it('changing value of checkbox', () => {
    const checkboxMock = {
      checked: true,
      parentElement: { id: 1 },
    };
    expect(functions.boolean(checkboxMock)).toStrictEqual([{ value: 'huzaifa', completed: true, index: 1 }]);
  });

  it('deleting a completed status', () => {
    expect(functions.clearAllCmpl()).toHaveLength(0);
  });
});