
//JS statements that provide truthy values

//first
var x = 10;
var y = 20;
var bool = (x!=y);
console.log(bool); 

//second
var x = 100;
var y = 1000;
var bool = (x<y);
console.log(bool);

//third
var str = "Hello World!"
var bool = str.includes("!")
console.log(bool);

// JS statements that provide falsy values

//first
var a = 1;
var b = "1";
var result = (a===b);
console.log(result);

//second
var string = "Hello World";
var bool = string.includes("!");
console.log(bool);

//third
let cars = NaN;
console.log(cars); 