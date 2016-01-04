'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.toGame = function(){
      $location.url("/game");
    }
    
    $scope.toGameOptions = function(){
      $location.url("/game_options");
    }
  });
