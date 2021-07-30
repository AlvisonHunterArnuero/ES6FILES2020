// Some of the nice features of ES6
// Made with ❤️ in javaScript by Alvison Hunter - January 13th, 2021
// 1.  Object [key] setting syntax
const fnObjectKeys = () => {
  // 1.  Object [key] setting syntax
  let key3 = 'FavoriteLanguage';
  let objProgrammingLanguages = {
    key1: 'TypeScript',
    key2: 'Python',
    [key3]: 'JavaScript',
    key4: 'Kotlin',
  };
  console.log(`Variable Key: ${objProgrammingLanguages[key3]}`);
  for (const [key, value] of Object.entries(objProgrammingLanguages)) {
    console.log(`${key} is ${value}`);
  }
};

fnObjectKeys();

// 2.  Using Arrow Functions
const addTwo = (a) => a + 2;
addTwo(4);

const nums = (first, ...rest) => rest;
console.log(nums(1, 2, 3, 4));

// Destructuring object values
const objLocation = {
  developer: 'Alvison Hunter',
  country: 'Nicaragua',
  city: 'Jinotepe',
};

const fnDevHomeTown = ({ developer, city }) => {
  console.log(`${developer} comes from ${city}.`);
};
fnDevHomeTown(objLocation);

// Adds a 10% tax to total
const calculateTotal = (total) => {
  console.log(`Total is: ${total * 1.1}`);
};
calculateTotal(10);

// 3.  using the find/findIndex methods
let ages = [12, 19, 6, 4, 24, 43];
let firstAdult = ages.find((age) => age >= 18);
let firstAdultIndex = ages.findIndex((age) => age >= 18);
console.log(`First Adult: ${firstAdult}`);
console.log(`Position: ${firstAdultIndex}`);

// 4.  The Spread Operator: ...
const fnSpreadOp = () => {
  let num_01 = [9, 4, 7, 1];
  let num_02 = [2, 5, 8, 3];
  let findMin = Math.min(...num_01); // 1
  let findMax = Math.max(...num_01); // 1
  console.log(`Min value: ${findMin} | Max value: ${findMax}`);
  let arrFinal = [...num_01, ...num_02];
  console.log(`Concatenated array: ${arrFinal}`);
};

fnSpreadOp();

// 5.  Template Literals - Multiline String
const fnTemplateLiterals = () => {
  let multilineString = `This is how you as developer
could use the Multiline String feature of ES6
with the help from Template Literals`;
  // Let us print the variable and we won't have any
  // affectation in the multilines, it will remain like it is
  console.log(multilineString);

  // Let us use Basic interpolation now
  let objSum = { addend_01: 12, addend_02: 38 };
  console.log(`Total Sum is : ${objSum.addend_01 + objSum.addend_02}`);
};
// Time to call the function to run this code now
fnTemplateLiterals();

// 6.  Default Argument Values in functions
const greetDeveloper = (name = 'Alvison') => {
  console.log(`Hi, ${name}: How are you?`);
};
greetDeveloper();

// You can have a function that receives another function
// as parameter, this is the HOF or high order function type
const functionAsParamsInHOF = async (name = 'Brendan Eich', callback) => {
  if (callback && typeof callback === 'function') {
    callback();
  }
  console.log(`This is JavaScript, ${name}!`);
};

// Let's declare the callback function now
const callbackFunction = () => {
  let weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let d = new Date().getDay();
  console.log(`This comes from the CB function. Today is ${weekday[d]}`);
};

functionAsParamsInHOF(callbackFunction());

// Declare a function and pass it as param to another one
// By Assign it to a default param to validate if it has
// an assigned value or if is empty or not being passed.
const isRequired = () => {
  throw new Error('This Param is required');
};

const fnParamIsRequired = (name = isRequired()) => {
  console.log(`Thanks for passing the required params, ${name}`);
};
fnParamIsRequired('');

// Let us use the same case above but  declaring an object
// and getting its methods as a getter, cool it isn't?
const objVerifyParams = {
  errMsg: 'Required argument is missing.',
  get isRequired() {
    throw new Error(this.errMsg);
  },
};

const bindHOFparamToObjMethod = (name = objVerifyParams.isRequired) =>
  console.log(`Final Param: ${name}`);
bindHOFparamToObjMethod();
