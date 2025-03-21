const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
})

ingredientsList.append(...ingredientItems)

// ingredients.forEach((ingredient) => {
//   const ingredientItem = document.createElement("li"); 
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add("item");
//   ingredientsList.append(ingredientItem)
// })

