import RefreshIcon from '../assets/icons/refresh-ccw.svg';
import ArrowIcon from '../assets/icons/corner-down-left.svg';

const refreshIcon = new Image();
refreshIcon.src = RefreshIcon;
document.querySelector('.refresh').append(refreshIcon);
const addNewListIcon = new Image();
addNewListIcon.src = ArrowIcon;
document.querySelector('.add-new-todo').append(addNewListIcon);
