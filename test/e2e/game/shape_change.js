describe('game shape change', function() {
  var p = require('path');
  console.log(p.normalize('../hacks/phantom_click.js'));
  var phantomClick = require('../hacks/phantom_click.js'); 
  
  
  

  beforeEach(function(){
    browser.get('/#/game');
    browser.waitForAngular();
    phantomClick.init();
  });
  
  it('should change in first time and not in second', function() { 
    var cell = element.all(by.tagName('cell')).first();
    expect(cell.getText()).toBe("( )");   
    cell.click();
    expect(cell.getText()).toBe("(o)");  
    cell.click();
    expect(cell.getText()).toBe("(o)");  
  });  
});