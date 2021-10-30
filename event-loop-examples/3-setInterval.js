// setInterval is asynchronous and will be offloaded
setInterval(() => {
	console.log("Hello");
}, 2000);

// console.log is synchronous and willbe executed in order
console.log("This runs first.");
console.log("This runs second.");
