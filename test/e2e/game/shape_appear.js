describe('game shape appear', function() {
  var IMG_PATH_PREFIX = 'images/',
    IMG_EXTENSION = '.png',
    EMPTY = IMG_PATH_PREFIX + 'empty' + IMG_EXTENSION,
    CROSS = IMG_PATH_PREFIX + 'cross' + IMG_EXTENSION,
    CIRCLE = IMG_PATH_PREFIX + 'circle' + IMG_EXTENSION;
    
  beforeEach(function(){
    browser.get('/#/game');
    browser.waitForAngular();
  });
  
  it('should be', function() { 
    var cellArr = element.all(by.css('#field div[cell] div'));
    for(var i = 0; i < 2; i++){
      var cell = cellArr.get(i);
      expect(cell.getCssValue('background-image')).toContain(EMPTY);       
      cell.click();
      var currShape = (i%2 === 0) ? CIRCLE : CROSS;
      expect(cell.getCssValue('background-image')).toContain(currShape); 
    }
  });  
});