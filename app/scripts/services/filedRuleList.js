'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.fieldRuleList
 * @description
 * # fieldRuleList
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('fieldRuleList', function () {
    var DEFAULT_FIELD_RULE_LIST = {
      col: 15,
      row: 15
    },
      currRuleList = DEFAULT_FIELD_RULE_LIST;

    function get () {
      return currRuleList;
    }

    return {
      get: get
    };
  });
