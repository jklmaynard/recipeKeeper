var recipeKeeper = angular.module('recipeKeeper', ['ui.router']);

recipeKeeper.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('recipes', {
    url: "/recipes"
    templateUrl: "partials/recipes.html"
  })

});
