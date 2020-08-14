// my array declaration with each object and cars details
const arrCars = [
  { type: "Wagon", make: "Infiniti", color: "Gray", year:"2018" },
  { type: "Sedan", make: "Honda", color: "Black" , year:"2020"},
  { type: "Convertible", make: "Porsche", color: "Silver" , year:"2014"},
  { type: "Hatchback", make: "Volkswagen", color: "White", year:"2012" }
];
// function to pull this information via map method
function pluck(array, arg01,arg02,arg03,arg04) {
  // let us declare the container of the generated array
  let newArray = [];
  // let us proceed to populate it with this iteration
  newArray = array.map(function (arr) {
    // here is the magic part, the property name of the object
    return `TYPE: ${ arr[arg01]} \n MAKE: ${arr[arg02]} \n COLOR: ${arr[arg03]} \nYEAR: ${arr[arg04]}\n`;
  });
  // Let us now display the results as it is expected LOL
  return newArray;
}
// Try out the function with 3 property names for each object
pluck(arrCars, "type", "make", "color","year");
// We all love JavaScript as we freaking love our traditional
// Sunday's Nacatamales, don't we, guys? Good Nite, team!




