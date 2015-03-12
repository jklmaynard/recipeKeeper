recipeKeeper.controller('InstructionsCtrl', function InstructionsCtrl($scope, $stateParams, RecipesFactory, UtilitiesFactory) {
  $scope.recipe = UtilitiesFactory.findById(RecipesFactory.recipes, $stateParams.recipeId)
  $scope.addInstructions = function() {
    $scope.recipe.cookTime = $scope.cookTime;
    $scope.recipe.ovenTemp = $scope.ovenTemp;
    $scope.recipe.steps = $scope.steps;
    $scope.recipe.pairings = $scope.pairings;

  };

  $scope.editCookTime = function() {
    $scope.recipe.cookTime = $scope.cookTime;
    $scope.cookTime = null;
  };
  $scope.editOvenTemp = function() {
    $scope.recipe.ovenTemp = $scope.ovenTemp;
    $scope.ovenTemp = null;
  };
  $scope.editSteps = function() {
    $scope.recipe.steps = $scope.steps;
    $scope.steps = null;
  };
  $scope.editPairings = function() {
    $scope.recipe.pairings = $scope.pairings;
    $scope.pairings = null;
  };
})
