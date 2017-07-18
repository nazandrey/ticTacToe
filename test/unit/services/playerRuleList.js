'use strict';

describe('Service: playerRuleList', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var playerRuleList,
    currPlayerRuleList;
  beforeEach(inject(function (_playerRuleList_) {
    playerRuleList = _playerRuleList_;
    currPlayerRuleList = playerRuleList.get();
  }));

  it('should give player rule list', function () {
    expect(currPlayerRuleList).toBeObject();
  });

  it('should have shapeArr in given field rule list', function () {
    expect(currPlayerRuleList.playerShapeArr).toBeArray();
  });
});
