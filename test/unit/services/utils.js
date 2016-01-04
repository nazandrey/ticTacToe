'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  it('should merge and remove duplicates', function () {
    expect(utils.unique).toBeFunction();
    expect(utils.unique(['a','b'],['b','c'])).toEqual(['a','b','c']);
  });

});
