/* Given an array of integers, return indices of the two numbers
such that they add up to a specific target.You may assume that
each input would have exactly one solution, and you may not
use the same element twice. */

const getSumElements = (arrNumbers, args_target) => {
  let firstElement =   0;
  let secondElement = 0;
  let arrFinalResults = [];
  // Let's obtain the second element based on the first value
 let  arrFilteredElements = arrNumbers.filter(
    (el) => el + arrNumbers[0] === args_target
  );
  // Let's add the first element to this array that returned from the filtered one.
  arrFilteredElements.unshift(arrNumbers[0]);
  // Tine to roll up the sleeves and retrieve those indeces we are looking for
firstElement  = arrNumbers.indexOf(arrFilteredElements[0]);
  secondElement = arrNumbers.indexOf(arrFilteredElements[1]);
// Let's fill up the final array containing the indeces of these elements
  arrFinalResults.unshift(firstElement,secondElement);
  // let us return the results into the vast void of the JavaScript World
  return "New Array is: [" + arrFilteredElements + "] with the following indeces: " +  arrFinalResults;
};
// Put it into action now, fellows
getSumElements([2, 7, 11, 15], 9); // index is 0,1
getSumElements([2, 1, 17, 7], 9); // index is 0,3
getSumElements([7, 1, 4, 9,8,2], 9); // index is 0,5
