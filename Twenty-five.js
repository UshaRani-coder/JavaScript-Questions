const prompt = require('prompt-sync')();

const shoppingCart = ['Milk','Coffee','Tea','Honey'];
if(shoppingCart.includes('Meat')===false){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}
if(shoppingCart.includes('Sugar')===false){
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
}
function remove(){
let userInput = prompt("Are you allergetic to honey?");
if(userInput==="true" || "yes"){
    shoppingCart.splice(4,1);
    console.log(shoppingCart);
}
else if(userInput==="false"||"no"){
    shoppingCart.splice(4,0,'Honey');
    console.log(shoppingCart);
}
}
remove();
function modify(){
shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);
}
modify();