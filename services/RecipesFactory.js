recipeKeeper.factory('RecipesFactory', function RecipesFactory() {
  var factory = {};
  factory.recipes = [];
  factory.addRecipe = function() {
    factory.recipes.push({
      name: factory.recipeName,
      id: factory.recipes.length + 1,
      ingredients: []
    });
    factory.recipeName = null;
  };

  factory.deleteRecipe = function(recipe) {
    var index = factory.recipes.indexOf(recipe)
    factory.recipes.splice(index, 1);
  }

  return factory;
});
