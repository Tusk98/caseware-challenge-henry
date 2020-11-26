const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
var Luhn = require('luhn-js');

const server = http.createServer(function(req, res) {
  //console.log(req.headers)
  let path = url.parse(req.url, true);
  var valid_cc = Luhn.isValid(path.query['ccnum']);

  if ( valid_cc == 1) {
    res.writeHead(200, "OK");
    res.end('Success');

  } else {
    res.writeHead(400, "not ok");
    res.write(util.inspect(path.query) + "\n\n");

    res.end('End of msg to browser');
  }
});

server.listen(1234, function() {
  console.log("Listening on port 1234");
});
