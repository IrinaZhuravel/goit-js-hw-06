const fontSizeEl = document.querySelector('#font-size-control');
const textResize = document.querySelector('#text');

fontSizeEl.addEventListener('input', onSizeChange);

function onSizeChange() {
  const fontSize = fontSizeEl.value;
  textResize.style.fontSize = `${fontSize}px`;
}
