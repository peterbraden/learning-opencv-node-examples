var cv = require('opencv')

var example2_4 = function(image){
  var w1 = new cv.NamedWindow("Example2_4-in")
    , w2 = new cv.NamedWindow("Example2_4-out")

  w1.show(image)

  out = image.clone()
  out.gaussianBlur([5,5])

  w2.show(out)

  setTimeout(function(){
    w1.destroy()
    w2.destroy()
  }, 5000)
}

cv.readImage(process.argv[2], function(e, im){
  example2_4(im)
})
