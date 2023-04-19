export const getItem = () => JSON.parse(localStorage.getItem('todo-list'));

export const setItem = (array) => localStorage.setItem('todo-list', JSON.stringify(array));