recipeKeeper.controller('RecipeCtrl', function RecipeCtrl($scope, RecipesFactory) {
  $scope.recipes = RecipesFactory.recipes;
  $scope.RecipesFactory = RecipesFactory;
});
