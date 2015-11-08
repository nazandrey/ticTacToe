'use strict';

describe('Service: shape', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var shape;
  beforeEach(inject(function (_shape_) {
    shape = _shape_;
  }));

  it('should get circle', function () {
    expect(shape.getView('circle')).toBe('o');
  });

});
