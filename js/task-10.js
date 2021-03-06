
  
 const inputEl = document.querySelector('input');
 const createBtnEl = document.querySelector('[data-create]');
 const destroyBtnRef = document.querySelector('[data-destroy]');
 const boxesEl = document.querySelector('#boxes');
 
 createBtnEl.addEventListener('click', () => {
     createBoxes(inputEl.value);
 });
 destroyBtnRef.addEventListener('click', onDestroyBtnClick);
 
 function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 
 function onDestroyBtnClick() {
     boxesEl.innerHTML = '';
     inputEl.value = '';
 }
 
 function createBoxes(amount) {
     let size = 30;
     const array = [];
     for (let i = 1; i <= amount; i += 1) {
         const color = getRandomHexColor();
         array.push(
             `<div class = "box" style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`,
         );
         size += 10;
     }
     boxesEl.insertAdjacentHTML('beforeend', array.join(''));
 }
