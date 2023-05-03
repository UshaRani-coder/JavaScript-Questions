const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//sorting the array
ages.sort(compare);
function compare(a,b){
    return (a-b);
}
console.log(ages);
//finding the min and max age
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(min);
console.log(max);
//finding the median
let median = (ages[(ages.length)/2]+ages[((ages.length)/2)-1])/2;
console.log(median);
//finding the average age
let sum = 0;
for(let i=0; i<ages.length; i++){
    sum = sum + ages[i];
}
let average = sum/ages.length;
console.log(average);
//finding the range
let range = (max-min);
console.log(range);
// -
let minAvg = (min-average);
let maxAvg = (max-average);
console.log(Math.abs(minAvg));
console.log(Math.abs(maxAvg));