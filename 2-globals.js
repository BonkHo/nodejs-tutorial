// GLOBALS - No Window object in node

// __dirname - Path to current directory
// __filenme - File name
// require   - Function to use modules (CommonJS)
// module    - Info about current module (file)
// process   - Info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
	console.log("Hello World");
}, 1000);
