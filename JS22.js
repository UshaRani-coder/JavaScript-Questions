const prompt = require('prompt-sync')();

let userInput = prompt("Enter the month:").toLowerCase();
let months = {
    january : 31, 
    february : 28,
    march : 31,
    april : 30,
    may : 31,
    june : 30,
    july : 31,
    august : 30,
    september : 31,
    october : 30,
    november : 31,
    december : 31

}


for(let key in months){
     if(key === userInput){
        console.log(`${userInput} month has ${months[key]} days`);
    }
    
}
