const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");

var port = process.env.PORT || 1234;

const server = http.createServer(function(req, res) {
  //console.log(req.headers)
  let path = url.parse(req.url, true);
  var valid_cc = luhn_algo(parseInt(path.query['ccnum']));

  if ( valid_cc == 1) {
    res.writeHead(200, "OK");
    res.end('Success');

  } else {
    res.writeHead(400, "not ok");
    res.write(util.inspect(path.query) + "\n\n");
    res.end('End of msg to browser');
  }
});

server.listen(port, function() {
  console.log("Listening on port 1234");
});

// Takes a credit card string value and returns true on valid number
function luhn_algo(value) {
  // Accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	let nCheck = 0, bEven = false;
	value = value.toString().replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}
