const input = document.querySelector('input#name-input');
const label = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange() {
  label.textContent = input.value;
  if (input.value.trim() === '') {
    label.textContent = 'Anonymous';
  }
}
