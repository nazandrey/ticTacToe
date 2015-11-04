'use strict';

describe('Directive: cell', function () {

  // load the directive's module
  beforeEach(module('ticTacToeApp'));

  var element,
    scope,
    cellScope;
  
  //https://github.com/karma-runner/karma-ng-html2js-preprocessor
  
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.s_data = {shape:'circle'};
    scope.s_turn = function(){};
    element = angular.element('<cell data="s_data" turn="s_turn"></cell>');
    element = $compile(element)(scope);
    scope.$digest();
    cellScope = element.isolateScope();
  }));

  it('should data be defined', inject(function ($compile, $timeout) {  
    $timeout(function() {  
      expect(cellScope.cellData).toBeObject();
      expect(cellScope.shapeView).toBeDefined();
      expect(cellScope.turn).toBeFunction();
    }, 0 , false);
    
    $timeout.flush();
  }));
  
  it('should shape watcher work', inject(function ($timeout, $compile) {    
    $timeout(function() { 
      scope.rData.shape = 'cross';
      expect(cellScope.shapeView).toBeDefined();
    }, 0 , false);
    
    $timeout.flush();
  }));
});
