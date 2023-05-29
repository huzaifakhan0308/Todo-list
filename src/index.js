import './style.css';
import './modules/importAssets.js';
import Obj from './modules/newValue.js';
import Element from './modules/elements.js';
import Methods from './modules/methods.js';
import { getItem } from './modules/localstorage.js';

const methods = new Methods();
const todoList = getItem();

if (todoList) {
  methods.array = todoList;
  methods.array.forEach((x) => Element(x));
}

document.querySelector('ul').addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'dltIcon') {
    e.target.parentElement.remove();
    methods.remove(e.target.parentElement.id);
  }
  document.querySelectorAll('.childTextArea').forEach((area) => {
    area.addEventListener('keyup', ((e) => {
      methods.editing(area);
      area.style.height = '25px';
      const height = e.target.scrollHeight;
      area.style.height = `${height}px`;
    }));
  });
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((x) => {
    x.addEventListener('change', ((e) => {
      methods.boolean(e.target);
    }));
  });
}));

const input = document.querySelector('.add-list-input');

document.querySelector('.add-new-todo').addEventListener('click', (() => {
  if (input.value !== '') {
    const obj = new Obj(input.value);
    methods.add(obj);
    Element(obj);
    input.value = '';
  }
}));

document.querySelector('.clear-all-btn').addEventListener('click', (() => {
  methods.clearAllCmpl();
}));