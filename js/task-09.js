const spanRef = document.querySelector('.widget .color');
const btnRef = document.querySelector('.widget .change-color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  btnRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}
