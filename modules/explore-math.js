
//Common JS Module Syntax
const math = require('./math.js');
//will the following work

console.log("The module contains", math);

//a module can contain functions (also known as behaviors)

const sum = math.add(1, 2);
console.log("The sum is ", sum);
const difference = math.sub(1, 2);
console.log("The difference is ", difference);

//a module can also contain special values
console.log("the value of pi is ", math.PI);
console.log("teh value of e is ", math.E);