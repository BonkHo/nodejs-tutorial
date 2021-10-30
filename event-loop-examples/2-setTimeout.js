console.log("First");

// setTimeout is asynchronous and will be offloaded (run last)
setTimeout(() => {
	console.log("Second");
}, 0);

console.log("Third");

console.log("Fourth");
