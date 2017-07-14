'use strict';

describe('Service: fieldRuleList', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var fieldRuleList,
    currFieldRuleList;
  beforeEach(inject(function (_fieldRuleList_) {
    fieldRuleList = _fieldRuleList_;
    currFieldRuleList = fieldRuleList.get();
  }));

  it('should give field rule list', function () {
    expect(currFieldRuleList).toBeObject();
  });

  it('should have row and col in given field rule list', function () {
    expect(currFieldRuleList.col).toBeNumber();
    expect(currFieldRuleList.row).toBeNumber();
  });
});
