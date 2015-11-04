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
      restrict: 'E',
      transclude: true,
      scope: {
        cellData: '=data',
        turn: '='
      },
      link: function(scope, element, attrs) {   
        scope.$watch("cellData.shape",function(newShape, oldShape){    
          if(newShape !== oldShape || !scope.shapeView){
            scope.shapeView = shape.getView(newShape);
          }
        })
      }
    };
  });
