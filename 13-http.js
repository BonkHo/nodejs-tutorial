const { readFile } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to the home page.");
	} else if (req.url === "/about") {
		res.end("Welcome to the about page.");
	} else {
		res.end(`
      <h1>Oops</h1> 
      <p>We can't seem to find the page that you are looking for.</p>
      <a href="/"> Back Home </a>
      `);
	}
});

server.listen(5000);
console.log("Server is running on: http://localhost:5000");
