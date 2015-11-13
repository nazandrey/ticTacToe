describe('game shape appear', function() {
  beforeEach(function(){
    browser.get('/#/game');
    browser.waitForAngular();
  });
  
  it('should be', function() { 
    var cellArr = element.all(by.tagName('cell'));
    for(var i = 0; i < 2; i++){
      var cell = cellArr.get(i);
      expect(cell.getText()).toBe("( )");   
      cell.click();
      var currShape = (i%2 === 0) ? "(o)" : "(x)";
      expect(cell.getText()).toBe(currShape);
    }
  });  
});