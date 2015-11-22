'use strict';

/**
 * @ngdoc directive
 * @name ticTacToeApp.directive:cell
 * @description
 * # cell
 */
angular.module('ticTacToeApp')
  .directive('cell', function (shape) {
    return {
      templateUrl: 'views/directive_templates/cell.html',
      restrict: 'A',
      transclude: true,
      scope: {
        cellData: '=data',
        turn: '='
      },
      link: function(scope, element, attrs) {  
        var IMG_PATH_PREFIX = 'images/',
          IMG_EXTENSION = '.png';
        scope.$watch("cellData.shape",function(newShape, oldShape){    
          if(newShape !== oldShape || !scope.shapeView){
            scope.shapeViewSrc = IMG_PATH_PREFIX + newShape + IMG_EXTENSION;
          }
        })
      }
    };
  });
