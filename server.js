var http = require('http');

var server = http.createServer();
server.listen(process.env.PORT || 81);

server.on('listening', function () {
  console.log("Server listening on port %d in %s mode");
});

server.on('request', function(req,  res) {
	var obj = {
		branch: "master",
		process: {
			env: JSON.stringify(process.env)
		},
		req: {
			header: JSON.stringify(req.headers),
			rawHeaders: JSON.stringify(req.rawHeaders)
		}
	}
	res.end(JSON.stringify(obj));
});
