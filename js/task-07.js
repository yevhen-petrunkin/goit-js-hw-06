const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('change', onChange);

function onChange(event) {
  spanRef.style.fontSize = event.currentTarget.value + 'px';
  // spanRef.style.fontSize = `${inputRef.value}px`; // Альтернативний варіант
}
