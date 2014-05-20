var url = require('url')
var fs = require('fs');


var router = function(req, res) {

  if (req.url === '/'){
    console.log(req.url);
    writeRes('./public/index.html');
  } else {
    console.log(req.url);
    writeRes(req.url);
  }

  function writeRes(filename) {
    fs.readFile(filename, { encoding: 'utf-8' }, function(err, data) {
      if (err) {
        res.statusCode = 404;
        res.write("Could not find file: " + filename)
      } else {
        res.write(data);
      }
      res.end();
    })
  }

};


module.exports = router;