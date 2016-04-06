angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};
  var movieId = null;

  factory.getPokemon = function(title) {
    var pokemon = Math.floor(Math.random()*718) +1;
    return $http({
      method: 'GET',
      url: 'https://www.omdbapi.com/?t='+title
    });
  };
  return factory;

}]);
