// Display 3 first elements of an array using forEach. .
// Made with ❤️ in JavaScript by Alvison Hunter - March 21st, 2021
// JavaScript, Python & Web Development tips at: https://bit.ly/3p9hpqj
const displayFirstThreeArrElements=()=> {
    const arrLanguages=[ "Python", "JavaScript", "GoLang", "Java", "C#"];
  let BreakException = {};
  let newArr = [];
  try {
    let x = arrLanguages.forEach((el, index)=> {
      newArr.push(el); // Fill new array with the current array elements
            if(index === 2)  throw BreakException; // End if  for BreakException
        } );// End  of the forEach loop
    } catch (e) {
  if (e !== BreakException) throw e;
        newArr.forEach( elem =>{
      console.log(`➟ ${elem}.`);
  }); // End of new Array forEach
}  // End of Catch 
} // End of Function 

displayFirstThreeArrElements(); // Call the function

