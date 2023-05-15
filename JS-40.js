const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//- create an empty set
let set = new Set();

//- Create a set containing 0 to 10 using loop
for(let i=0; i<=10; i++){
    set.add(i);       
}
console.log(set);

//- Remove an element from a set
set.delete(0);
console.log(set);

//- Clear a set
set.clear();
console.log(set);

//- Create a set of 5 string elements from array
let arrayRandom = [1,2,3,"Go!","Dilip","you","can","solve","it"];
arrayRandom.forEach(e=>{
    if(typeof e === "string" && set.size<5){
       return set.add(e);
    }
})
console.log(set);

//- Create a map of countries and number of characters of a country
let map = new Map();
countries.forEach(e=>{
for(let [key,value] of countries){
    let key = e;
    let value = e.length;
    map.set(key,value);
}
})
console.log(map)