recipeKeeper.factory('RecipesFactory', function RecipesFactory() {
  var factory = {};
  factory.recipes = [];
  factory.addRecipe = function() {
    factory.recipes.push({ name: factory.recipeName, id: factory.recipes.length + 1, instructions: [] });
    factory.recipeName = null;
  }
  return factory;
});
