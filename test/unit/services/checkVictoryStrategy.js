'use strict';

describe('Service: checkVictoryStrategy', function () {

  beforeEach(module('ticTacToeApp'));

  var checkVictoryStrategy;
  beforeEach(inject(function (_checkVictoryStrategy_) {
    checkVictoryStrategy = _checkVictoryStrategy_;
  }));

  it('should give check victory fn', function () {
    expect(checkVictoryStrategy.getCurr).toBeFunction();
    expect(checkVictoryStrategy.getCurr()).toBeFunction();
  });
});
