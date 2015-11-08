'use strict';

describe('Directive: field', function () {

  // load the directive's module
  beforeEach(module('ticTacToeApp'));

  var element,
    scope,
    fieldScope,
    fieldCtrl,
    template;

  beforeEach(module('app/views/directive_templates/field.html'));
  beforeEach(module('app/views/directive_templates/cell.html'));
  
  beforeEach(inject(function ($templateCache, $rootScope, $compile, shape) {
    template = $templateCache.get('app/views/directive_templates/field.html');
		$templateCache.put('views/directive_templates/field.html',template);
    template = $templateCache.get('app/views/directive_templates/cell.html');
		$templateCache.put('views/directive_templates/cell.html',template);
    
    scope = $rootScope.$new();
    scope.turn = 'turnFn';
    element = angular.element('<field></field>');
    element = $compile(element)(scope);
    scope.$digest();
    fieldScope = element.scope();
    fieldCtrl = element.controller('field');
  }));

  it('should inherit ctrl turn', function () {  
      expect(fieldScope.fieldTurn).toBe('turnFn');
  });
  
  it('should init itself', function () {  
    scope.field_rules = {height:1, width:1};
    fieldCtrl.init();
    expect(fieldScope.field).toBeObject();
    expect(fieldScope.field[0][0]).toBeDefined();
  });
  
  it('should return itself', function () {      
    fieldScope.field = 'field';
    var outsideField = fieldCtrl.getField();       
    expect(outsideField).toBe('field');
  });
  
  it('should call when it is ready',inject(function($compile){
    var isEventEmmited = false;
    scope.$on('fieldready', function(){
      isEventEmmited = true;
    });
    element = angular.element('<field></field>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(isEventEmmited).toBeTrue();
  }))
});
