// GLOBALS
/*
__dirname - path to current directory
__filename - file name
require - function to use modules (common js)
module - info about current module (file)
process - info about env where the program is being executed
*/
console.log(__dirname);
console.log(__filename);

//MODULES
/*
commonJS, every file is module (by default)
Modules - Encapsulated code (only share minimun)

module is an object, you can acces it with console.log(module)

set the export first then require in other file
*/
console.log(module);
const variable = 'texto';
module.export = variable;
const exportedVar = require('./4-names.js');
