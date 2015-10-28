'use strict';

describe('Service: playerGenerator', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var playerGenerator;
  beforeEach(inject(function (_playerGenerator_) {
    playerGenerator = _playerGenerator_;
  }));

  it('should do something', function () {
    expect(!!playerGenerator).toBe(true);
  });

});
