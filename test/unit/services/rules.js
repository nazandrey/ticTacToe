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
  
  it('should set field rules', function () {
    expect(rules.setFieldRules).toBeFunction();
    rules.setFieldRules({test: 'test setFieldRules'});
    expect(rules.getFieldRules().test).toBe('test setFieldRules');
  });
  
  it('should set player rules', function () {
    expect(rules.setPlayerRules).toBeFunction();
    rules.setPlayerRules({test: 'test setPlayerRules'});
    expect(rules.getPlayerRules().test).toBe('test setPlayerRules');
  });
  
  it('should set player package arr rules', function () {
    expect(rules.setPlayerPackageArrRules).toBeFunction();
    rules.setPlayerPackageArrRules(['wall']);
    expect(rules.getPlayerRules().packageArr).toEqual([['circle','wall'],['cross','wall']]);
    rules.setPlayerPackageArrRules(['bomb']);
    expect(rules.getPlayerRules().packageArr).toEqual([['circle','bomb'],['cross','bomb']]);
    rules.setPlayerPackageArrRules([]);
    expect(rules.getPlayerRules().packageArr).toEqual([['circle'],['cross']]);
  });
  
  it('should set turn rules', function () {
    expect(rules.setTurnRules).toBeFunction();
    rules.setTurnRules({test: 'test setTurnRules'});
    expect(rules.getTurnRules().test).toBe('test setTurnRules');
  });

});
