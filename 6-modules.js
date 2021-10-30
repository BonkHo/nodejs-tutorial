// MODULES - Files that contain related code
// Why use modules?
// Modules help organize and structure code when projects become larger

const { john, peter } = require("./4-names.js");
const sayHi = require("./5-utils.js");
sayHi("Susan");
sayHi(john);
sayHi(peter);
require("./8-mind-grenade");
