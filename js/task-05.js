const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const defaultValue = outputRef.textContent;
console.log(defaultValue);

inputRef.addEventListener('input', () => {
  if (inputRef.value === '') {
    outputRef.textContent = defaultValue;
    return outputRef.textContent;
  }

  outputRef.textContent = inputRef.value;
});
console.log(defaultValue);
