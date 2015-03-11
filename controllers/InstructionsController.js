recipeKeeper.controller('InstructionsCtrl', function InstructionsCtrl($scope, $stateParams, RecipesFactory, UtilitiesFactory) {
  $scope.recipe = UtilitiesFactory.findById(RecipesFactory.recipes, $stateParams.recipeId)
  $scope.addInstructions = function() {
    $scope.recipe.cookTime = $scope.cookTime;
    $scope.recipe.ovenTemp = $scope.ovenTemp;
    $scope.recipe.steps = $scope.steps;
    $scope.recipe.pairings = $scope.pairings;

    $scope.cookTime = null;
    $scope.ovenTemp = null;
    $scope.steps = null;
    $scope.pairings = null;
  };
})
