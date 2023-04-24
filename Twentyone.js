const prompt = require('prompt-sync')();

let userInput = prompt("Enter the month:").toLowerCase();
let Autumn = ['september','october','november'];
let winter = ['december','january','february'];
let spring = ['march','april','may'];
let summer = ['june','july','august'];
if(Autumn.includes(userInput)){
    console.log("The season is Autumn");
}
else if(winter.includes(userInput)){
    console.log("The season is Winter");
}
else if(spring.includes(userInput)){
    console.log("The season is Spring");
}
else {
    console.log("The season is Summer");
}
