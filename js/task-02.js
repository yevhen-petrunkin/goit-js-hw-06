const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

const updatedIngredients = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');
  return ingredientRef;
});

ingredientsRef.append(...updatedIngredients);

console.log(ingredientsRef);
