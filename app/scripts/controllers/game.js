'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('GameCtrl', function ($scope, fieldRuleList, playerRuleList, checkVictoryStrategy) {
    $scope.fieldRuleList = fieldRuleList.get();
    $scope.playerRuleList = playerRuleList.get();
    $scope.checkVictory = checkVictoryStrategy.getCurr();
  });
