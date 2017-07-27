'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.playerFactory
 * @description
 * # playerFactory
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('playerFactory', function () {
    function createPlayerList (playerShapeArrList) {
      var playerCount = 0;

      return playerShapeArrList && playerShapeArrList.map ? playerShapeArrList.map(__createPlayer) : [];

      function __createPlayer (shapeArr) {
        return {
          name: "player" + (++playerCount),
          shapeArr: shapeArr,
          getMainShape: function () { return this.shapeArr[0]; }
        };
      }
    }

    return {
      createPlayerList: createPlayerList
    };
  });
