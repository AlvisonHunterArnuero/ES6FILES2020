// Made with ❤️ in JavaScript by Alvison Hunter - January 25th, 2021
// This only works if you try it on the browser console.
let num = 0;
let arrNumbers = [...Array(5).keys()];
const findMaxNum = ()=>{
console.log('Introduce 5 numeros')
for (const value of arrNumbers) {
num = prompt('Introduzca los numeros');
  arrNumbers[value] = num;
  num+=1;
} // End of for      
  maxNumber  = Math.max.apply(Math, arrNumbers.map(function(n) { return n; }))
console.log(`Max number in ${arrNumbers} is the number ${maxNumber}`)
} // End of function


