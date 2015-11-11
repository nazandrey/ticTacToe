describe('game shape appear', function() {
  browser.get('http://localhost:9001/#/game');
  browser.refresh();
  
  beforeEach(function(){
    browser.waitForAngular();
  });
  
  it('should be', function() { 
    var cellArr = element.all(by.tagName('cell'));
    for(var i = 3; i < 6; i++){
      var cell = cellArr.get(i);
      expect(cell.getText()).toBe("( )");   
      cell.click();
      var currShape = i%2 ? "(o)" : "(x)";
      expect(cell.getText()).toBe(currShape);
    }
  });  
});