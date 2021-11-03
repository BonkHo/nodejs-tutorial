const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
	console.log(`Data recieved.`);
});

customEmitter.on("response", (name, id) => {
	console.log(`Username is: ${name}`);
	console.log(`User ID is: ${id}`);
});

customEmitter.emit("response", "John", 34);
