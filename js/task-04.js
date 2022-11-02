let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
  console.log(counterValue);
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
  console.log(counterValue);
});
