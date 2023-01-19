const refreshIcon = new Image();
document.querySelector('.refresh').appendChild(refreshIcon);
const addNewListIcon = new Image();
document.querySelector('.add-newlist-icon').appendChild(addNewListIcon);

module.exports = {
  RefreshIcon: refreshIcon,
  AddNewListIcon: addNewListIcon,
};