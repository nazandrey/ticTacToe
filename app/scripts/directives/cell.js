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
        cellData: '=data',
        turn: '='
      },
      link: function(scope, element, attrs) {   
        scope.$watch("cellData.shape",function(newShape, oldShape){    
          if(newShape !== oldShape || !scope.shapeView){
            scope.shapeView = _getShapeView(newShape);
          }
        })
        
        function _getShapeView(shape){          
          switch(shape){
            case 'empty': 
              return ' ';
            case 'circle': 
              return 'o';
            case 'cross':
              return 'x';
            default:
              console.warn('no shapeView found for: ', shape);
              return '';              
          }
        }
        
        
        /*
        scope.turn = function(){
          var shapeArr = scope.getCurrPlayerShapeArr();
          if(shapeArr.length === 1){
            if(shapeArr[0] === 'circle'){
              scope.shape = 'o';
            } else if (shapeArr[0] === 'cross'){
              scope.shape = 'x';
            }
          }
        };*/
      }
    };
  });
