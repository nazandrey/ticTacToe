'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.simpleCheckVictory
 * @description
 * # simpleCheckVictory
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('simpleCheckVictory', function () {
    var VICTORY_COUNT = 5;

    function _defaultCheckTemplate (fieldModel, playerList, iterator) {
      var winner = "";
      playerList.forEach(function (player) {
        var mainShape = player.getMainShape(),
          countInARow = 0;
        iterator (fieldModel, __checkWinner, __checkShape);

        function __checkShape (cell) {
          if(cell === mainShape) {
            countInARow++;
          } else {
            countInARow = 0;
          }
        }

        function __checkWinner() {
          if(countInARow >= VICTORY_COUNT) {
            winner = player.name;
          }
        }
      });

      return winner;
    }

    function _checkHorizontal (fieldModel, playerList) {
      var iterator = function (fieldModel, checkWinner, checkShape) {
        for (var row = 0; row < fieldModel.length; row++) {
          for (var col = 0; col < fieldModel[row].length; col++) {
            checkShape(fieldModel[row][col]);
          }
          if(checkWinner()){
            break;
          }
        }
      };

      return _defaultCheckTemplate (fieldModel, playerList, iterator);
    }

    function _checkVertical (fieldModel, playerList) {
      var iterator = function (fieldModel, checkWinner, checkShape) {
        for (var col = 0; col < fieldModel[0].length; col++) {
          for (var row = 0; row < fieldModel.length; row++) {
            checkShape(fieldModel[row][col]);
          }
          if(checkWinner()){
            break;
          }
        }
      };

      return _defaultCheckTemplate (fieldModel, playerList, iterator);
    }

    function _checkDiagonal (fieldModel, playerList) {
      var iterator = function (fieldModel, checkWinner, checkShape) {
        var startRow = 0,
          startCol = 0;
        while (startRow < fieldModel.length && startCol < fieldModel[0].length) {
          for (var row = startRow, col = startCol; row < fieldModel.length && col < fieldModel[0].length; row++, col++) {
            checkShape(fieldModel[row][col]);
          }
          if(checkWinner()){
            break;
          }
          if(startRow < fieldModel.length - 1) {
            startRow++;
          } else {
            startCol++;
          }
        }
      };

      return _defaultCheckTemplate (fieldModel, playerList, iterator);
    }

    function _checkReverseDiagonal (fieldModel, playerList) {
      var iterator = function (fieldModel, checkWinner, checkShape) {
        var startRow = 0,
          startCol = 0;
        while (startRow < fieldModel.length && startCol < fieldModel[0].length) {
          for (var row = startRow, col = startCol; row > 0 && col < fieldModel[0].length; row--, col++) {
            checkShape(fieldModel[row][col]);
          }
          if(checkWinner()){
            break;
          }
          if(startRow < fieldModel.length - 1) {
            startRow++;
          } else {
            startCol++;
          }
        }
      };

      return _defaultCheckTemplate (fieldModel, playerList, iterator);
    }

    function simpleCheckVictoryFn (fieldModel, playerList) {
      if(!fieldModel || !playerList) return;

      return _checkHorizontal(fieldModel, playerList) || _checkVertical(fieldModel, playerList) || _checkDiagonal(fieldModel, playerList) || _checkReverseDiagonal(fieldModel, playerList);
    }

    return simpleCheckVictoryFn;
  });
