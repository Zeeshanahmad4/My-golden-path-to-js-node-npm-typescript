//ADD a module from other file 

require('./greet');

//use a function from other module

//file that is exporting function

var greet = function(){
    console.log("hello");
};

module.exports = greet;

//file that is importing funciton

var zee = require('./greet');

zee();
