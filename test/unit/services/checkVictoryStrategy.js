'use strict';

describe('Service: checkVictoryStrategy', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var checkVictoryStrategy;
  beforeEach(inject(function (_checkVictoryStrategy_) {
    checkVictoryStrategy = _checkVictoryStrategy_;
  }));

  it('should do something', function () {
    expect(!!checkVictoryStrategy).toBe(true);
  });

});
