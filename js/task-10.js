const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

inputRef.addEventListener('input', () => inputRef.value);
createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  let boxSize = 30;
  const boxArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    box.style.backgroundColor = getRandomHexColor();
    boxArray.push(box);
    boxSize += 10;
  }
  boxesContainerRef.append(...boxArray);
  inputRef.reset();
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  let boxSize = 30;
}
