'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.utils
 * @description
 * # utils
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('utils', function () {
    function unique(arr1,arr2){      
      var result = arr1.concat(arr2);
      result = result.filter(function (item, pos) {return result.indexOf(item) == pos});
      return result;
    }

    return {
      unique: unique
    };
  });
