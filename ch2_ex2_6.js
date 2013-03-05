var cv = require('opencv')

var doCanny = function(im, low, high, aperture){
  if (im.channels() !=1)
    throw "Canny only handles gray scale images"

  var out = im.clone()

  out.canny(low, high, aperture);

  return out
}


cv.readImage(process.argv[2], function(e, im){
  im.convertGrayscale()
  
  var im2 = doCanny(im, 10, 100, 3)

  var w1 = new cv.NamedWindow("Example Gray")
    , w2 = new cv.NamedWindow("Example Canny")

  w1.show(im)
  w2.show(im2)

  setTimeout(function(){
    w1.destroy()
    w2.destroy()
  }, 5000)

})
