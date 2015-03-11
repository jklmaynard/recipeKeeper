recipeKeeper.controller('RecipesCtrl', function RecipesCtrl($scope, RecipesFactory) {
  $scope.recipes = RecipesFactory.recipes;
  $scope.RecipesFactory = RecipesFactory;
});
