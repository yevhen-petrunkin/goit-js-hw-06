const spanRef = document.querySelector('.widget .color');
const btnRef = document.querySelector('.widget .change-color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}
