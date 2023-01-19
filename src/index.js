/* eslint-disable no-unused-vars */
import './style.css';
import Obj from './modules/obj.js';
import Newlist from './modules/newList.js';
import variables from './modules/variables.js';
import RefreshIcon from './assets/icons/refresh-ccw.svg';
import ArrowIcon from './assets/icons/corner-down-left.svg';

variables.RefreshIcon.src = RefreshIcon;
variables.AddNewListIcon.src = ArrowIcon;
document.querySelector('.add-newlist-icon').addEventListener('click', (() => {
  const newList = new Newlist();
  newList.add(Obj);
}));
