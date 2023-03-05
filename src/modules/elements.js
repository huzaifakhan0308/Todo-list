import dltIcon from '../assets/icons/bin.png';

const element = (obj) => {
  const li = document.createElement('li');
  li.id = `${obj.index}`;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList = 'checkbox';
  checkbox.checked = obj.completed
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      textArea.classList.add('completed');
    } else {
      textArea.classList.remove('completed');
    }
  });
  const textArea = document.createElement('textarea');
  textArea.classList = 'childTextArea';
  textArea.value = `${obj.value}`;
  if(obj.completed) {
    textArea.classList.add('completed');
  }
  const img = document.createElement('img');
  img.classList = 'dltIcon';
  img.src = dltIcon;
  li.append(checkbox, textArea, img);
  document.querySelector('ul').appendChild(li);
};

export default element;