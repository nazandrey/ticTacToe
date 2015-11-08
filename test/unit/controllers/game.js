'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  var Game_ctrl,
    Field_ctrl,
    scope,
    template;
  
  beforeEach(module('app/views/directive_templates/field.html'));
  beforeEach(module('app/views/directive_templates/cell.html'));
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($templateCache, $controller, $rootScope) {
    template = $templateCache.get('app/views/directive_templates/field.html');
		$templateCache.put('views/directive_templates/field.html',template);
    template = $templateCache.get('app/views/directive_templates/cell.html');
		$templateCache.put('views/directive_templates/cell.html',template);
    
    scope = $rootScope.$new();
    Game_ctrl = $controller('GameCtrl', {
      $scope: scope
    });
    scope.$digest();
    Field_ctrl = $('#field').controller('field');
    
  }));

  it('should have field rules', function () {
    expect(scope.field_rules).toBeDefined();
  });
  
  it('should have player rules', function () {
    expect(scope.player_rules).toBeDefined();
  });
  
  it('should have turn rules', inject(function (rules) {
    expect(rules.getTurnRules()).toBeDefined();
  }));
  
  it('should not to change shape if this is not empty already', inject(function () {
    //this is for e2e testing
    /*
    var field = Field_ctrl.getField(),
      col = 0,
      row = 0,
      old_shape = field[row][col].shape,
      curr_player_shape_arr = scope.getCurrPlayerShapeArr();
    scope.turn(row,col);
    field = Field_ctrl.getField();
    var new_shape = field[row][col].shape;
    expect(new_shape).not.toBe(old_shape);
    expect(curr_player_shape_arr).toContain(new_shape);
    
    curr_player_shape_arr = scope.getCurrPlayerShapeArr();
    old_shape = new_shape;
    scope.turn(row,col);
    field = Field_ctrl.getField();
    new_shape = field[row][col].shape;
    expect(new_shape).toBe(old_shape);
    expect(curr_player_shape_arr).toContain(new_shape);
    */
  }));
  
});
