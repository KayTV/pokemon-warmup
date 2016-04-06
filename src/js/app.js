angular.module("pokemonGenerator", [])
.controller("MainController",
            function ($http, $scope) {
  $scope.generatePokemon = function () {
    var random = Math.floor(Math.random() * 720)+1;
    $scope.loadingName = true;

    $http({
      url: 'http://pokeapi.co/api/v2/pokemon/' +
            random + '/',
      method: 'GET'
    })
    .then(function (result) {
      console.log(result.data.sprites);
      $scope.pokemon = result.data;
      $scope.img = result.data.sprites.front_default;
      $scope.loadingName = false;
    });
  };

  $scope.generateMove = function () {
    var random = Math.floor(Math.random() * 639)+1;
    $scope.loadingMove = true;

    $http({
      url: 'http://pokeapi.co/api/v2/move/' +
            random + '/',
      method: 'GET'
    })
    .then(function (result) {
      $scope.move = result.data.names[0].name;
      $scope.loadingMove = false;
    });
  };
});
