//- Create a closure which has one inner function
function calculate(x) {
    function add(y) {
        return x+y;
    }
    return add;
}

const add3 = calculate(3);
const add4 = calculate(4);

console.log(add3); 
console.log(add3()); 

console.log(add3(6)); 
console.log(add4(2));

//- Create a closure which has three inner function
function closure(N){
    let number = N;
    function one(N1){
        let number1 = N1;

        function two(N2){
            let number2 = N2;

            function three(N3){
                let number3 = N3;
               console.log(`${number1},${number2},${number3}`)
            }
            return three;
        }
        return two;
    }
    return one;
}
closure(0)(1)(2)(3);