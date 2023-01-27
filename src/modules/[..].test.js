import Newlist from './newList.js';

const task = {
  value: 'editing',
  completed: false,
  index: null,
};

const functions = new Newlist();

describe('Edit task', () => {
  it('editing a task text', () => {
    functions.add(task);
    expect(functions.editing({ value: 'huzaifa' })).toStrictEqual([{ value: 'huzaifa', completed: false, index: 1 }]);
  });

  it('changing a complete status', () => {
    expect(functions.boolean(true)).toStrictEqual([{ value: 'huzaifa', completed: true, index: 1 }]);
  });

  it('deleting a completed status', () => {
    expect(functions.clearAllCmpl(task)).toHaveLength(0);
  });
});