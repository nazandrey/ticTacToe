'use strict';

describe('Service: checkVictoryFnStorage', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var checkVictoryFnStorage;
  beforeEach(inject(function (_checkVictoryFnStorage_) {
    checkVictoryFnStorage = _checkVictoryFnStorage_;
  }));

  it('should return default function', function () {
    //should be returned, not called
    expect(checkVictoryFnStorage.getByKey('default')).toBeFunction();
  });
});
