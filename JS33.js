
function calculateBMI(weight,height){
let bmi = (weight)/(height*height);
console.log(bmi.toFixed(1));
if(bmi<18.5){
    console.log("The person is Underweight");
}
else if(18.5<=bmi<=24.9){
    console.log("The person is Normal");
}
else if(25<=bmi<=29.9){
    console.log("The person is Overweight");
}
else if(bmi>=30){
    console.log("The person is obese");
}
}

calculateBMI(61,1.6);
