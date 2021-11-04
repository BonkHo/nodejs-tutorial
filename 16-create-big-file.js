const { writeFileSync } = require("fs");

// Flag 'a' appends to the file
for (let i = 0; i < 1000000; i++) {
	writeFileSync("./content/bigfile.txt", `Hello world ${i}\n`, { flag: "a" });
}
