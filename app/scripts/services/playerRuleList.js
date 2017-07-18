'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.playerRuleList
 * @description
 * # playerRuleList
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('playerRuleList', function () {
    var DEFAULT_PLAYER_RULE_LIST = {
      playerShapeArr: [
        ['circle'],
        ['cross']
      ]
    },
      currPlayerListRules = DEFAULT_PLAYER_RULE_LIST;

    function get() {
      return currPlayerListRules;
    }

    return {
      get: get
    };
  });
