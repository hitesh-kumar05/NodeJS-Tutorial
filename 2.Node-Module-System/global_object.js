
//global obejct is prefind object which can not create itself.
/*The global object in Node.js is an object that provides access to global variables and functions across
different modules in your application. Any variable or function that you define without the var, let, or 
const keyword becomes a property of the global object.*/

// app.js
global.myVariable = 'Hello, Global!';

// anotherModule.js
console.log(myVariable); // Outputs: Hello, Global!

//The directory name of the current module. 
console.log(__dirname);

//The file name of the current module. This is the current module file's absolute path with symlinks resolved.
console.log(__filename);

//require use to another file of content.
var a = require('../1. Getting started/first_node_program');

//import ,export
