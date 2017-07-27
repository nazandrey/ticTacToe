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
    $scope.turn = turn;

    function turn (row, col) {
      if (typeof $scope.fieldModel[row][col] !== "undefined") {
        if ($scope.currPlayer.shapeArr.length === 1){
          $scope.fieldModel[row][col] = $scope.playerList[0].getMainShape(); //intentional error on playerList instead of currPlayer for next test
          _changePlayer();
        }
      }
    }

    function _changePlayer () {
      var currPlayerIdx = $scope.playerList.indexOf($scope.currPlayer);
      if (currPlayerIdx === $scope.playerList.length) {
        $scope.currPlayer = $scope.playerList[0];
      } else {
        $scope.currPlayer = $scope.playerList[currPlayerIdx + 1];
      }
    }

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
