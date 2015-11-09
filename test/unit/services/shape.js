'use strict';

describe('Service: shape', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var shape;
  beforeEach(inject(function (_shape_) {
    shape = _shape_;
  }));
  
  it('should get empty', function () {
    expect(shape.getView('empty')).toBe(' ');
  });
  
  it('should get circle', function () {
    expect(shape.getView('circle')).toBe('o');
  });
  
  it('should get cross', function () {
    expect(shape.getView('cross')).toBe('x');
  });
  
  it('should get warn', function () {
    spyOn(console, 'warn');
    expect(shape.getView('warnShape')).toBe('');
    expect(console.warn).toHaveBeenCalled();    
  });
});
