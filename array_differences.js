// First hand solution
const arrayDiff = (a, b) => a.filter((item) => !b.includes(item));

// An alternative solution using sets
const arrayDiff2 = (firstArr, secondArr) => {
  const set1 = new Set(secondArr);
  return firstArr.filter((value) => !set1.has(value));
};

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
console.log(arrayDiff([], [4, 5])); // []
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([1, 8, 2], [])); // [1,8,2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
