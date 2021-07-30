/* --------------------------------------------------------------------------
Array forEach and Filter methods using EcmaScript 6 - JavaScript Excercise
Made with ❤️ in JavaScript by Alvison Hunter - March 10th, 2021
JavaScript, Python and Web Development tips at: https://bit.ly/3p9hpqj
----------------------------------------------------------------------------- */
const retrievePassword = (array) => {
  array.reverse();
  let finalStr = "";
  sortedArr = array.filter((elem) => elem !== "*");
  sortedArr.forEach((elem) => {
    finalStr += elem;
  });
  console.log(finalStr);
};
const myArr = ["a", "*", "l", "*", "o", "H"];
retrievePassword(myArr);