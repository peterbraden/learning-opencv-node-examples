var cv = require('opencv')

cv.readImage(process.argv[2], function(err, im){
  var win = new cv.NamedWindow("Example1")

  win.show(im);

  setTimeout(function(){
    win.destroy()
  }, 5000)
})


