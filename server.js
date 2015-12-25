var http = require('http');

var server = http.createServer();
server.listen(process.env.PORT || 81);

server.on('listening', function () {
  console.log("Server listening on port %d in %s mode");
});

server.on('request', function(req,  res) {
	res.end("app dev " + JSON.stringify(req.rawHeaders));
});
