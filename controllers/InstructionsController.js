recipeKeeper.controller('InstructionsCtrl', function InstructionsCtrl($scope, $stateParams, RecipesFactory, UtilitiesFactory) {
  $scope.recipe = UtilitiesFactory.findById(RecipesFactory.recipes, $stateParams.recipeId)
  $scope.addInstructions = function() {
    $scope.recipe.instructions.push({
      cookTime: $scope.cookTime,
      ovenTemp: $scope.ovenTemp,
      steps: $scope.steps,
      pairings: $scope.pairings,
      tags: []
    }); debugger
    $scope.cookTime = null;
    $scope.ovenTemp = null;
    $scope.steps = null;
    $scope.pairings = null;
  };
})
