//printing the sum of all evens from 0 to 100
var evenSum = 0;
var oddSum = 0;
for(var i=0; i<=100; i++){
    if(i%2==0){
        evenSum = evenSum+i;
    }
}
console.log(`Sum of all evens is ${evenSum}`);
//printing the sum of all odds ferom 0 to 100
for(var i=0; i<=100; i++){
   if(i%2==1){
        oddSum = oddSum+i;
   }  
}
console.log(`Sum of all odds is ${oddSum}`)