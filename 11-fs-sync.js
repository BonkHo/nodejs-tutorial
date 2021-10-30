// file system module
const fs = require("fs");

// sets variable to file's contents
const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");

console.log("Start");
// creates a new file or overwrites the existing one
fs.writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first} ${second}`,
	// flag 'a' appends to the file
	{ flag: "a" }
);
console.log("Task Complete");
console.log("Starting next");
