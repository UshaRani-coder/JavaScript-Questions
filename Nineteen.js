const prompt = require('prompt-sync')();

let number = prompt("Enter the number:");
if((number%2)==0){
    console.log("The number is EVEN");
}
else {
    console.log("The number is ODD");
}