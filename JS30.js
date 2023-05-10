function hexGen(range) {
let rand = Math.round(Math.random()*range);
let hexConvert = rand.toString(16);
console.log(hexConvert);
}
hexGen(9999999);
