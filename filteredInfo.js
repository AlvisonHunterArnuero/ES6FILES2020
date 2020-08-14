// This one is in GIST already
// Using Array Helpers Excercise - This uses Filter()
const numbers = [10, 20, 30];
function reject() {
  let lessThanFifteen = numbers.filter(function(number) {
    return number < 15;
  });
  return ` Number that is less than 15 is: ${lessThanFifteen}`;
}
reject();

// Another Helper Excercise - This uses Find()
const ladders = [
  { id: 1, height: 20 },
  { id: 2, height: 30 },
  { id: 3, height: 25 }
];
function findWhere(array, criteria) {
  let property = Object.keys(criteria)[0];
  var results = array.find(function(result) {
    return result[property] === criteria[property];
  });
  return `Item # ${results.id} is a ladder of ${results.height} feet of height.`;
}
findWhere(ladders, { height: 25 });

// Another one for helpers this one is with reducer()
const desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" }
];
let deskTypes = desks.reduce(
  function(total, desk) {
    desk.type === "sitting" ? ++total.sitting : ++total.standing;
    return total;
  },
  { sitting: 0, standing: 0 }
);
deskTypes;

// Another one for helpers this one is with reducer()
const numeros = [1, 1, 2, 3, 4, 4];
function ElementoUnico(array) {
  return array.reduce((arr, num) => {
    if (arr.indexOf(num) === -1) {
      arr.push(array.find(n => n === num));
    }
    return arr;
  }, []);
}
ElementoUnico(numeros);
