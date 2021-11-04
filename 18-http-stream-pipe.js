const http = require("http");
const fs = require("fs");

http
	.createServer(function (req, res) {
		const fileStream = fs.createReadStream("./content/bigfile.txt", "utf8");
		// Instead of sending all data in a single instance, data is sent in chunks
		// the .pipe method feeds the data in realtime to the response object
		fileStream.on("open", () => {
			fileStream.pipe(res);
		});
		fileStream.on("error", (err) => {
			res.end(err);
		});
	})
	.listen(5000);

console.log("Server running on: http://localhost:5000");
