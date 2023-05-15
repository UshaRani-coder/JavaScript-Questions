const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//- Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants;
console.log(`e=${e},gravity=${gravity},Human-body-temperature=${humanBodyTemp},Water-boiling-point=${waterBoilingTemp}`);

//- Destructure and assign the elements of countries array to fin, est, sw, den, nor
const[fin,est,sw,den,nor] = countries;
console.log(`fin:${fin},est=${est},sw=${sw},den=${den},nor=${nor}`);

//- Destructure the rectangle object by its properties or keys.
const{width,height,area,perimeter} = rectangle;
console.log(`width=${width},height=${height},area=${area},perimeter=${perimeter}`);

//- Iterate through the users array and get all the keys of the object using destructuring
let array = [];
for(let i=0; i<users.length; i++){
    const{name,scores,skills,age}=users[i];
    array.push(users[i].name);
    array.push(users[i].scores);
    array.push(users[i].skills);
    array.push(users[i].age);
    
}
console.log(array);

//- Find the persons who have less than two skills
let filtered = users.filter(e=>{
    if(e.skills.length<2){
        return e.name;
    }
})
console.log(filtered);

