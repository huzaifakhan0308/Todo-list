import Newlist from './newList.js';

const task = {
  value: 'editing',
  completed: true,
  index: null,
};

const functions = new Newlist();

describe('Edit task', () => {
  functions.add(task);
  it('editing a task text', () => {
    expect(functions.editing({ value: 'huzaifa' })).toStrictEqual([{ value: 'huzaifa', completed: true, index: 1 }]);
  });

  it('deleting a completed status', () => {
    expect(functions.clearAllCmpl()).toHaveLength(0);
  });
});