'use strict';

/**
 * @ngdoc directive
 * @name ticTacToeApp.directive:cell
 * @description
 * # cell
 */
angular.module('ticTacToeApp')
  .directive('cell', function () {
    return {
      templateUrl: 'views/directive_templates/cell.html',
      restrict: 'E',
      transclude: true,
      scope: {
        'objectArr':'=',
        'turn':'=turn',
        'coordX':'=',
        'coordY':'='
      },
      link: function(scope, element, attrs) {
        
      }
    };
  });
