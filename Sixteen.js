const prompt = require('prompt-sync')();

let r = prompt("Enter the radius of the circle");
let pi = 3.14;
let area = pi*r*r;
console.log(`area of the circle is ${area}`);
let circumference = 2*pi*r;
console.log(`circumference of the circle is ${circumference}`)


