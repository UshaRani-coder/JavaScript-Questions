let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
