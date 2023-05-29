import Methods from '../src/modules/methods.js';

const task = {
  value: 'editing',
  completed: true,
  index: null,
};

const functions = new Methods();

describe('Edit task', () => {
  functions.add(task);
  it('editing a task text', () => {
    expect(functions.editing({ value: 'huzaifa' })).toStrictEqual([{ value: 'huzaifa', completed: true, index: 1 }]);
  });

  it('deleting a completed status', () => {
    expect(functions.clearAllCmpl()).toHaveLength(0);
  });
});