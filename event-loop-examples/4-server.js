const http = require("http");

const server = http.createServer((req, res) => {
	console.log("request received");
	res.end("Hello World!");
});

server.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});
