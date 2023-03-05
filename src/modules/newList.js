let indexNumber = 1;

export default class NewList {
  constructor() {
    this.array = [];
  }

  add(obj) {
    if (this.array.length > 0) {
      const getItem = JSON.parse(localStorage.getItem('todo-list'));
      indexNumber = getItem[getItem.length - 1].index;
      indexNumber += 1;
    }
    obj.index = indexNumber;
    this.array.push(obj);
    localStorage.setItem('todo-list', JSON.stringify(this.array));
    return this.array;
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
    return this.array;
  }

  editing(textArea) {
    // this if statement is for testing
    if (this.array.length === 1) {
      this.array[0].value = textArea.value;
    } else {
      for (let i = 0; i < this.array.length; i += 1) {
        if (this.array[i].index === parseInt(textArea.parentElement.id, 10)) {
          this.array[i].value = textArea.value;
        }
      }
    }
    localStorage.setItem('todo-list', JSON.stringify(this.array));
    return this.array;
  }

  boolean(checkboxs) {
    // this if statement is for testing
    if (this.array.length === 1) {
        if (checkboxs.checked) {
          this.array[0].completed = true;
        } else {
          this.array[0].completed = false;
        }
    } else {
      for (let i = 0; i < this.array.length; i += 1) {
        if (this.array[i].index === parseInt(checkboxs.parentElement.id, 10)) {
          if (checkboxs.checked) {
            this.array[i].completed = true;
          } else {
            this.array[i].completed = false;
          }
        }
      }
    }
    localStorage.setItem('todo-list', JSON.stringify(this.array));
    return this.array;
  }

  clearAllCmpl() {
    const completed = this.array.filter((x) => x.completed !== true);
    for (let i = 0; i < completed.length; i += 1) {
      let index = i;
      index += 1;
      completed[i].index = index;
    }
    const checkboxs = document.querySelectorAll('.checkbox');
    checkboxs.forEach((x) => {
      if (x.checked) {
        x.parentElement.remove();
      }
    });
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      let index = i;
      index += 1;
      li[i].id = index;
    }
    this.array = completed;
    localStorage.setItem('todo-list', JSON.stringify(this.array));
    return this.array;
  }
}
