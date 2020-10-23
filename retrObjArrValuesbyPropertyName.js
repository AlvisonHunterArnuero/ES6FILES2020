arrJSWorld = [
  { a: "1", b: "vueJS" },
  { a: "2", b: "AngularJS" },
  { a: "3", b: "ReactJS" },
];
// function to obtain the values from elements of this array
const objFilter = (obj, argPropertyName) => {
  let arrFinal = []; // we will store results on this array
  // let us verify that this argument is indeed an array
  if (Array.isArray(obj)) {
    //iterate the array to retrieve key and value[we will use value only]
    for (const [key, value] of Object.entries(obj)) {
      //assign the obtained value to a variable
      let objItem = value;
      //let's iterate the elements of this obj item, to retrieve its values
      for (const [key, value] of Object.entries(objItem)) {
        // if the property of this item is the given argument,
        // let's add it to our final resulting array of values
        if (key === argPropertyName) arrFinal.push(value);
      }
    } // end of the for of the obj item
    console.log("Values Retrieved", arrFinal);
  }
  return arrFinal; // return the new array with the values
};
//call the function passing obj & property name as params
objFilter(arrJSWorld, "a");
//Made with ❤️ in JavaScript by Alvison Hunter - August 26th, 2020
