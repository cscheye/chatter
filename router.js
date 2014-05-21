var url = require('url')
var fs = require('fs');
var mime = require('mime')


var router = function(req, res) {

  if (req.url === '/'){
    console.log(req.url);
    writeRes('index.html');
  } else {
    console.log(req.url);
    writeRes(req.url);
  }

  function writeRes(filename) {
    var path = "./public/" + filename;
    console.log(path)
    fs.readFile(path, { encoding: 'utf-8' }, function(err, data) {
      if (err) {
        res.statusCode = 404;
        res.end('Could not find file')
      } else {
        res.writeHead(
          200,
          {"Content-Type" : mime.lookup(path)});
        res.end(data);
      }

    })
  }

};


module.exports = router;