let indexNumber = 0;

class NewList {
  constructor() {
    this.array = [];
  }

  add(obj) {
    const getItem = JSON.parse(localStorage.getItem('todo-list'));
    if (this.array.length > 0) {
      indexNumber = getItem[getItem.length - 1].index;
      indexNumber += 1;
    }
    obj.index = indexNumber;
    this.array.push(obj);
    localStorage.setItem('todo-list', JSON.stringify(this.array));
  }

  remove(index) {
    const newArray = this.array.filter((x) => x.index !== parseInt(index, 10));
    this.array = newArray;
    localStorage.setItem('todo-list', JSON.stringify(this.array));
  }
}

export default NewList;