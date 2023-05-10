let uniqueList = [];
let nonUniqueList = [];
let arr = [1,2,3,3,4,5,4,20];
arr.forEach((item)=>
{ 
    if(uniqueList.includes(item)){
    nonUniqueList.push(item);
}
else{
    uniqueList.push(item);
}
}
);
console.log(`Unique list of items is ${nonUniqueList}`);
console.log(`Non-Unique list of items is ${uniqueList}`);
