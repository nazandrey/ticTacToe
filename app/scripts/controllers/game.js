'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('GameCtrl', function ($scope, fieldRuleList, playerRuleList, checkVictoryStrategy, playerFactory) {
    $scope.fieldRuleList = fieldRuleList.get();
    $scope.playerRuleList = playerRuleList.get();
    $scope.checkVictory = checkVictoryStrategy.getCurr();
    $scope.fieldModel = _createField();
    $scope.playerList = playerFactory.createPlayerList($scope.playerRuleList.playerShapeArr);
    $scope.currPlayer = $scope.playerList[0];
    $scope.turn = function () {};

    function _createField () {
      var fieldModel = [];
      for (var row = 0; row < $scope.fieldRuleList.row; row++) {
        fieldModel.push(new Array($scope.fieldRuleList.col));
        for (var col = 0; col < $scope.fieldRuleList.col; col++) {
          fieldModel[row][col] = "";
        }
      }
      return fieldModel;
    }
  });
