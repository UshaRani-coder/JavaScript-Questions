//importing "prompt-sync" module
const prompt = require("prompt-sync")();

let base = prompt("Enter the base of the triangle");
console.log(`base of the triangle is:${base}`);
let height = prompt("Enter the height of the triangle");
console.log(`height of the triangle is:${height}`);
let area = (base*height)/2;
console.log(`area of the triangle is ${area}`);

