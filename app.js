const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
	console.log("Server is listening at: http://localhost:5000.");
	res.end("Welcome");
});

server.listen(5000);
