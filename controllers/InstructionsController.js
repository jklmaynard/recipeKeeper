recipeKeeper.controller('InstructionsCtrl', function InstructionsCtrl($scope, $stateParams, RecipesFactory, UtilitiesFactory) {
  $scope.recipe = UtilitiesFactory.findById(RecipesFactory.recipes, $stateParams.recipeId)
  $scope.addInstructions = function() {
    $scope.recipe.cookTime = $scope.cookTime;
    $scope.recipe.ovenTemp = $scope.ovenTemp;
    $scope.recipe.steps = $scope.steps;
    $scope.recipe.pairings = $scope.pairings;

  };

  $scope.addIngredients = function() {
    $scope.recipe.ingredients.push({
      ingredient: $scope.ingredient,
      amount: $scope.amount
    });

    $scope.ingredient = null;
    $scope.amount = null;
  };

})
