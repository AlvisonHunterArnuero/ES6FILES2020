const arrNumbers = [23, 71, 33, 82, 1];
const sumTwoSmallestNumbers = (arrNumbers) => {
  let firstLowest = Math.min(...arrNumbers);
  let index = arrNumbers.indexOf(firstLowest);
  while (index > -1) {
    arrNumbers.splice(index, 1);
    index = arrNumbers.indexOf(firstLowest);
  }
  let secondLowest = Math.min(...arrNumbers);
  return firstLowest + secondLowest;
};

sumTwoSmallestNumbers([19, 5, 42, 2, 77]); // 7
sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6
sumTwoSmallestNumbers([3, 87, 45, 12, 7]); // 10
sumTwoSmallestNumbers([23, 71, 33, 82, 1]); // 24
sumTwoSmallestNumbers([52, 76, 14, 12, 4]); // 16
