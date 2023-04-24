let today = new Date();

let seconds = today.getSeconds();

//year today

let year = today.getFullYear();
console.log(year);

//month today

let month = today.getMonth();
console.log(month+1);

//date today

let date = today.getDate();
console.log(date);

//day today

let day = today.getDay();
console.log(day+1);

//hours now

let hours = today.getHours();
console.log(hours);

//minutes now

let minutes = today.getMinutes();
console.log(minutes);

// number of seconds elapsed from January 1, 1970 to now

let otherDate = new Date(01/01/1970)
let secondsElapsed = (today-otherDate)/1000;
console.log(secondsElapsed);

