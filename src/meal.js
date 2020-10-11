function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(foodItemName, price, type) {

var menuItem = {
  name: foodItemName,
  price: price,
  type: type
}
return menuItem;
}

function addIngredients(ingredientName, ingredients) {
  if (ingredients.includes(ingredientName)){
      return
  } else {
    ingredients.push(ingredientName);
  }
  return ingredients;
}


function formatPrice(initialPrice) {
    return `$${initialPrice}`;
}

function decreasePrice(decreasedPrice) {
  return decreasedPrice * .90
}

function createRecipe(title, ingredientName, menuType) {

var recipe = {
  title: title,
  ingredients: ingredientName,
  type: menuType
}
return recipe;

}


module.exports = {
  nameMenuItem,
  createMenuItem,
   addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
