'use strict';

/**
 * @ngdoc directive
 * @name ticTacToeApp.directive:field
 * @description
 * # field
 */
angular.module('ticTacToeApp')
  .directive('field', function () {
    return {
      templateUrl: 'views/directive_templates/field.html',
      restrict: 'E',
      scope: {
        'rules':'=',
        'ctrlGetCurrPlayerShapeArr':'&getCurrPlayerShapeArr'
      },
      link: function (scope, element, attrs) {
        scope.field = initField();
        
        function initField(){
          var return_field = [], 
            rules = scope.rules;
          for(var cell_row_idx = 0;cell_row_idx < rules.height;cell_row_idx++){
            return_field[cell_row_idx] = [];
            for(var cell_idx = 0;cell_idx < rules.width;cell_idx++){
              return_field[cell_row_idx][cell_idx] = initCellInfo();
            }
          }
          return return_field;
        }
        
        function initCellInfo(){
          return {
            type: 'empty'
          };
        }
      }
    };
  });
