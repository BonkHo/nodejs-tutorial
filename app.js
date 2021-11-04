const http = require("http");
const fs = require("fs");

http
	.createServer(function (req, res) {
		const text = fs.readFileSync("./content/bigfile.txt", "utf8");
		res.end(text);
	})
	.listen(5000);

console.log("Server running on: http://localhost:5000");
