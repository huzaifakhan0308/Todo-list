/* eslint-disable no-unused-vars */
import './style.css';
import './modules/icons.js';
import Obj from './modules/obj.js';
import Element from './modules/elements.js';
import Newlist from './modules/newList.js';

const newList = new Newlist();
const input = document.querySelector('.add-list-input');

document.querySelector('ul').addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'dltIcon') {
    newList.remove(e.target.parentElement.classList[0]);
    e.target.parentElement.remove();
  }
  const textArea = document.querySelectorAll('.childTextArea');
  textArea.forEach((area) => {
    area.addEventListener('keyup', ((e) => {
      area.style.height = '25px';
      const height = e.target.scrollHeight;
      area.style.height = `${height}px`;
    }));
  });
}));

document.querySelector('.add-newlist-icon').addEventListener('click', (() => {
  const obj = new Obj(input.value);
  newList.add(obj);
  Element(obj);
}));
