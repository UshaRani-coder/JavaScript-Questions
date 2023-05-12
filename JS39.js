const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//- Use forEach to console.log each name in the names array.
names.forEach(e=>{console.log(e);})

//- Use forEach to console.log each country in the countries array.
countries.forEach(e=>{console.log(e);})

//- Use forEach to console.log each number in the numbers array.
numbers.forEach(e=>{console.log(e)});

//- Use map to create a new array by changing each country to uppercase in the countries array.
   let uppercase = countries.map(e=>{
    return e.toUpperCase();
   }) ;
   console.log(uppercase);
    
//- Use map to create an array of countries length from countries array.
    let lengthsArray = countries.map(e=>{
        return e.length;
    })
    console.log(lengthsArray);
    
 //- Use map to create a new array by changing each number to square in the numbers array
    let sqArray = numbers.map(e=>{
        return e*e;
    });
    console.log(sqArray);

 //- Use map to change to each name to uppercase in the names array
    let updatedCase = names.map(e=>{
        return e.toUpperCase();
    })
    console.log(updatedCase);

 //- Use map to map the products array to its corresponding prices.
    let map = products.map(e=>{
        return (`${e.product} : ${e.price}`);
    })
    console.log(map);

//- Use filter to filter out countries containing land.
   let filtered = countries.filter(e=>{
        if(e.toLowerCase().includes('land')){
            return e;
        }
    })
    console.log(filtered);

//- Use filter to filter out countries having six character.
    let filter6Chars = countries.filter(e=>{
        if(e.length===6){
            return e;

        }
    })
    console.log(filter6Chars);

//- Use filter to filter out countries containing six letters and more in the country array.
    let sixAndMore = countries.filter(e=>{
        if(e.length>=6){
            return e;
        }
    })
    console.log(sixAndMore);

//- Use filter to filter out country start with 'E';
    let start_E = countries.filter(e=>{
       e.split('');
       if(e[0]==='E'){
        return e;
       }
    })
    console.log(start_E);
    
//- Use filter to filter out only prices with values.
    let only_Prices = products.filter(obj=>{
        if((obj.price)!=('') && (obj.price)!=(' ')){
            return obj.price;
}
    })
    console.log(only_Prices);
    let arr = [];
    for(let i=0; i<only_Prices.length; i++){
       let obj ={
        price : only_Prices[i].price
       }
       arr.push(obj);
    
    }
    console.log(arr);

// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
    let array = [1,"usha",3,undefined,"loves",5,"coding",true];
  let getStringLists = array.filter(e=>{
       if(typeof(e)=="string"){
        return e;
      }
    })
    console.log(getStringLists);


//- Use reduce to sum all the numbers in the numbers array.
  let sum =  numbers.reduce(reducefn);
    function reducefn(accumulator,value){
        return accumulator+value;
    }
    console.log(sum);
   
//- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
   countries.unshift("Estonia");
   countries.pop("IceLand");
   let concatenated = countries.reduce((prev,curr)=>{
        return prev + "," +" "+ curr;
   })
    console.log(`${concatenated} and IceLand are north European countries`);

//- Use some to check if some names' length greater than seven in names array
  let res = names.some((element)=>{
     return element.length>7;
   })
 console.log(res);

//- Use every to check if all the countries contain the word land
  let every =  countries.every(e=>{
      return e.includes("land");
  })
  console.log(every);


  //- Explain the difference between find and findIndex.
/* find:
       find() Array method will search inside an array and it'll return the first element 
  for which the callback function returns the truthy value.If it doesn't find one,then it'll
  return undefined.
   findIndex:
       The JavaScript array findIndex() method returns the index of first element of the given array that satisfies 
       the provided function condition. It returns -1, if no element satisfies the condition
 */


//- Use find to find the first country containing only six letters in the countries array
    let find = countries.find(e=>{
        return e.length===6;
    })
    console.log(find);

//- Use findIndex to find the position of the first country containing only six letters in the countries array
    let findIndex = countries.findIndex(e=>{
        return e.length==6;
    })
    console.log(findIndex);

//- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
    console.log(countries.findIndex(e=>{
        return e==="Norway";
     }));
//- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
    console.log(countries.findIndex(e=>{
        return e==="Russia";
    }));
