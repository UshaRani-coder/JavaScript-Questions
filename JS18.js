const prompt = require('prompt-sync')();

let age = prompt("Enter your age:");
if(age>=18){
   console.log("You are old enough to drive");
}
else{
    console.log(`wait for ${18-age} years `)
}
