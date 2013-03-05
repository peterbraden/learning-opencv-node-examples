var cv = require('opencv')
  , assert = require('assert')

var doPyrDown = function(im, filter){
  assert.equal(im.width() % 2, 0)
  assert.equal(im.height() % 2, 0)

  out = im.clone()

  out.pyrDown(filter)
  return out
}


cv.readImage(process.argv[2], function(err, im){
  var win1 = new cv.NamedWindow("Example1")
    , win2 = new cv.NamedWindow("Example2")

  win1.show(im)
 
  var img2 = doPyrDown(im);

  win2.show(img2);

  setTimeout(function(){
    win1.destroy()
    win2.destroy()
  }, 10000)
})
