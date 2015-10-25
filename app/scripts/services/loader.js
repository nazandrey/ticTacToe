'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.loader
 * @description
 * # loader
 * Service in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('loader', function () {
  
    return {
      show: function(){},
      hide: function(){}
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
