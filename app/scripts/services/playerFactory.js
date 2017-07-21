'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.playerFactory
 * @description
 * # playerFactory
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('playerFactory', function (playerRuleList) {
    var playerShapeArrList = playerRuleList.get().playerShapeArr;

    function createPlayer () {
      var player = null;
      if (playerShapeArrList && playerShapeArrList.length) {
        var playerShapeArr = playerShapeArrList.shift();

        player = {
          shapeArr: playerShapeArr,
          getMainShape: function () { return this.shapeArr[0]; }
        }
      }
      return player;
    }

    return {
      createPlayer: createPlayer
    };
  });
