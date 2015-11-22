'use strict';

describe('Directive: cell', function () {

  // load the directive's module
  beforeEach(module('ticTacToeApp'));

  var element,
    scope,
    cellScope,
    template;

  beforeEach(module('app/views/directive_templates/cell.html'));
  
  beforeEach(inject(function ($templateCache, $rootScope, $compile) {
    template = $templateCache.get('app/views/directive_templates/cell.html');
		$templateCache.put('views/directive_templates/cell.html',template);
    
    scope = $rootScope.$new();
    scope.s_data = {shape:'circle'};
    scope.s_turn = function(){};
    element = angular.element('<div cell data="s_data" turn="s_turn"></div>');
    element = $compile(element)(scope);
    scope.$digest();
    cellScope = element.isolateScope();
  }));

  it('should data be defined', function () {  
    expect(cellScope.cellData).toBeObject();
    expect(cellScope.shapeViewSrc).toBeDefined();
    expect(cellScope.turn).toBeFunction();
  });
  
  it('should shape watcher work', function () {  
    scope.s_data.shape = 'cross';
    scope.$digest();
    expect(cellScope.shapeViewSrc).toBeDefined();
  });
});
