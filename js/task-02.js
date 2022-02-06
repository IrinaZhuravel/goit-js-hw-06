const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientListEl = document.querySelector('#ingredients');

const ingredientListItemEl = ingredients.map((element)=>{
      const listItemEl = document.createElement('li');
      listItemEl.textContent = element;
      listItemEl.classList.add('item');
      return listItemEl;
});

ingredientListEl.append(...ingredientListItemEl);

