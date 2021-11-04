const { createReadStream } = require("fs");

// Streams are objects that let you read data from a source in a continuous manner.
// Streams can be used to read and write from a file, network socket, or other source.

const stream = createReadStream("./content/bigfile.txt", {
	highWaterMark: 90000,
	encoding: "utf-8",
});

// Default buffer is 64kb
// Last Buffer - remainder
// highWaterMark - Controls the size of the buffer
// const stream = createReadStream("./content/bigfile.txt", { highWaterMark: 1 });
// const stream = createReadStream("./content/bigfile.txt", { encoding: 'utf-8' });

stream.on("data", (res) => {
	console.log(res);
});

stream.on("error", (err) => {
	console.log(err);
});
