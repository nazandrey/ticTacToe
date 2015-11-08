'use strict';

describe('Service: rules', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var rules;
  beforeEach(inject(function (_rules_) {
    rules = _rules_;
  }));

  it('should have field rules', function () {
    expect(rules.getFieldRules).toBeFunction();
    expect(rules.getFieldRules()).toBeDefined();
  });
  
  it('should have player rules', function () {
    expect(rules.getPlayerRules).toBeFunction();
    expect(rules.getPlayerRules()).toBeDefined();
  });
  
  it('should have turn rules', function () {
    expect(rules.getTurnRules).toBeFunction();
    expect(rules.getTurnRules()).toBeDefined();
  });

});
