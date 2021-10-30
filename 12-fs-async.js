// fs module
const fs = require("fs");

// aysnc readFile that checks to see if a file exists
// when a file exists the function will return the file
// otherwise the function will log the error and return
console.log("Start");
fs.readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	fs.readFile("./content/first.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		fs.writeFile(
			"./content/result-async.txt",
			`This is the result: ${first} ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("Task Complete");
			}
		);
	});
});
// callback hell

// This executes before the asnyc callbacks are called
console.log("Starting next task");
