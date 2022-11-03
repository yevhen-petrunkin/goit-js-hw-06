const inputRef = document.querySelector('#validation-input');
const defaultLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', () => {
  if (inputRef.value.length === Number(defaultLength)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
