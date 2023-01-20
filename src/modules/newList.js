/* eslint-disable no-plusplus */
let indexNumber = 0;

class NewList {
  constructor() {
    this.array = [];
  }

  add(obj) {
    obj.index = indexNumber;
    this.array.push(obj);
    indexNumber++;
    localStorage.setItem('todo-list', JSON.stringify(this.array));
  }

  remove(index) {
    const newArray = this.array.filter((x) => x.index !== parseInt(index, 10));
    this.array = newArray;
  }
}

export default NewList;