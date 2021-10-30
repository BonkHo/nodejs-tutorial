const { readFile } = require("fs");

console.log("This runs first");

readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
	console.log("Task Complete");
});

console.log("This runs second");
