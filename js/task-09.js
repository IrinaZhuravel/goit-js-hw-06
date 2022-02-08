
const changeColorButtonEl = document.querySelector('button.change-color');
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function onColorChangeClick () {
  
//   bodyEl.style.backgroundColor = getRandomHexColor();
//   document.querySelector('.color').innerHTML = bodyEl.style.backgroundColor;
  
// }

function onColorChangeClick () {
  const color =  getRandomHexColor()
  bodyEl.style.backgroundColor = color;
  document.querySelector('.color').innerHTML = color;
  
}
changeColorButtonEl.addEventListener('click', onColorChangeClick);
