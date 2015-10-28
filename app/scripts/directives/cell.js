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
        'getCurrPlayerShapeArr':'&getCurrPlayerShapeArr',
        'row':'=',
        'col':'='
      },
      link: function(scope, element, attrs) {
        scope.shape = ' ';
        
        scope.turn = function(){
          var shapeArr = scope.getCurrPlayerShapeArr();
          if(shapeArr.length === 1){
            if(shapeArr[0] === 'circle'){
              scope.shape = 'o';
            } else if (shapeArr[0] === 'cross'){
              scope.shape = 'x';
            }
          }
        };
      }
    };
  });
