import './style.css';
import './modules/icons.js';
import Obj from './modules/obj.js';
import Element from './modules/elements.js';
import Newlist from './modules/newList.js';
import { getItem } from './modules/localstorage.js';

const newList = new Newlist();
const input = document.querySelector('.add-list-input');

const todoList = getItem();

if (todoList) {
  newList.array = todoList;
  newList.array.forEach((x) => Element(x));
}

document.querySelector('ul').addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'dltIcon') {
    e.target.parentElement.remove();
    newList.remove(e.target.parentElement.id);
  }
  document.querySelectorAll('.childTextArea').forEach((area) => {
    area.addEventListener('keyup', ((e) => {
      newList.editing(area);
      area.style.height = '25px';
      const height = e.target.scrollHeight;
      area.style.height = `${height}px`;
    }));
  });
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((x) => {
    x.addEventListener('change', ((e) => {
      newList.boolean(e.target);
    }));
  });
}));

document.querySelector('.add-newlist-icon').addEventListener('click', (() => {
  if (input.value !== '') {
    const obj = new Obj(input.value);
    newList.add(obj);
    Element(obj);
    input.value = '';
  }
}));

document.querySelector('.clear-all-btn').addEventListener('click', (() => {
  newList.clearAllCmpl();
}));