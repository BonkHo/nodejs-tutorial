const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const flatten = _.flattenDeep(items);

console.log(flatten);

console.log("Hello World");
