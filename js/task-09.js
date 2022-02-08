//const colorSpanEl = document.querySelector('span.color');
//const changeColorButtonEl = document.querySelector('button.change-color');

//changeColorButtonEl.addEventListener('click', onColorChangeClick);

//function getRandomHexColor() {
  //return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}

//function onColorChangeClick() {
  //colorSpanEl.textContent = getRandomHexColor();
  //document.body.style.backgroundColor = getRandomHexColor();
//}
const changeColorButtonEl = document.querySelector('button.change-color');
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorChangeClick () {
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').innerHTML = bodyEl.style.backgroundColor;
  
}
changeColorButtonEl.addEventListener('click', onColorChangeClick);
