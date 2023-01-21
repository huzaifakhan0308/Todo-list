let indexNumber = 1;

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
    const li = document.querySelectorAll('li');
    for (let i = 0; i < newArray.length; i += 1) {
      let index = i;
      index += 1;
      newArray[i].index = index;
      li[i].id = index;
    }
    this.array = newArray;
    localStorage.setItem('todo-list', JSON.stringify(this.array));
  }

  editing(textArea) {
    for (let i = 0; i < this.array.length; i += 1) {
      if (this.array[i].index === parseInt(textArea.parentElement.id, 10)) {
        this.array[i].value = textArea.value;
      }
    }
    localStorage.setItem('todo-list', JSON.stringify(this.array));
  }
}

export default NewList;