recipeKeeper.controller('InstructionsCtrl', function InstructionsCtrl($scope, $stateParams, RecipesFactory, UtilitiesFactory) {
  $scope.recipe = UtilitiesFactory.findById(RecipesFactory.recipes, $stateParams.recipeId)
  console.log("The page is loading with the controller.")
  $scope.addInstructions = function() {
    $scope.recipe.instructions.push({
      cookTime: $scope.cookTime,
      ovenTemp: $scope.ovenTemp,
      steps: $scope.steps,
      pairings: $scope.pairings,
      tags: []
    });
    $scope.cookTime = null;
    $scope.overTemp = null;
    $scope.steps = null;
    $scope.pairings = null;
  };
})
