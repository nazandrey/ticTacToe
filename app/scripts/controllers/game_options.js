'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:GameOptionsCtrl
 * @description
 * # GameOptionsCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('GameOptionsCtrl', function ($scope, rules) {
    $scope.optionArr = {
      player: {
        packageArr:{
          bomb: false,
          wall: false
        }
      }
    };
    $scope.packageArr = [];
    
    $scope.$watch("optionArr.player.packageArr",function(newVal,oldVal){
      $scope.packageArr = [];
      
      if(newVal){
        if(newVal.bomb) $scope.packageArr.push('bomb');
        if(newVal.wall) $scope.packageArr.push('wall');
      }
      
    },true);
    
    $scope.applyGameOptions = function(){      
      rules.setPlayerPackageArrRules($scope.packageArr);
    }
    
  });
