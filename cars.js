// my array declaration with each object and cars details
const arrCars = [
  { type: "Wagon", make: "Infiniti", color: "Gray" },
  { type: "Sedan", make: "Honda", color: "Black" },
  { type: "Convertible", make: "Porsche", color: "Silver" },
  { type: "Hatchback", make: "Volkswagen", color: "White" }
];
// function to pull this information via map method
function pluck(array, property) {
  // let us declare the container of the generated array
  let newArray = [];
  // let us proceed to populate it with this iteration
  newArray = array.map(function (arr) {
    // here is the magic part, the property name of the object
    return arr[property];
  });
  // Let us now display the results as it is expected LOL
  return newArray;
}
// Try out the function with 3 property names for each object
pluck(arrCars, "color");
pluck(arrCars, "type");
pluck(arrCars, "make");

// We all love JavaScript as we freaking love our traditional
// Sunday's Nacatamales, don't we, guys? Good Nite, team!