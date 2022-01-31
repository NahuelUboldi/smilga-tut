const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

console.log(data);

//when you import this way you execute the code in the module
require('./7-mind-greande');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
