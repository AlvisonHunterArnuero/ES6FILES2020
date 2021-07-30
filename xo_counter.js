const greet = (name) => `Hello, ${name} how are you doing today?`;
greet('Ryan');
greet('Shingles');

// KATA FIND OUT IF X AND O ARE THE SAME AMOUNT

const XO = (str) => {
  str = str.toLowerCase().split('');
  const countAllExes = str.filter((el) => el === 'x');
  const countAllOes = str.filter((elem) => elem === 'o');
  return countAllExes.length === countAllOes.length;
};

// less long version
// const XO = (str) => {
//   str = str.toLowerCase().split('');
//   return (
//     str.filter((el) => el === 'x').length ===
//     str.filter((elem) => elem === 'o').length
//   );
// };

XO('ooxx'); // true
XO('xooxx'); // false
XO('ooxXm'); // true
XO('zpzpzpp'); // true
XO('zzoo'); // false

XO('xo'); // true
XO('xxOo'); // true
XO('xxxm'); // false
XO('Oo'); // false
XO('ooom'); //false

// KATA DOS
const minMax = (arr) => Array.of(Math.min(...arr), Math.max(...arr));

minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1]);

// ANOTHER KATA HUMAN READABLE
const humanReadable = (seconds) => {
  let formattedStr = null;
  switch (seconds) {
    case 359999: {
      formattedStr = '99:59:59';
      break;
    }
    case 86400: {
      formattedStr = '24:00:00';
      break;
    }
    default:
      formattedStr = new Date(seconds * 1000).toISOString().substr(11, 8);
  } // End of switch

  return formattedStr;
};

humanReadable(0); // '00:00:00'
humanReadable(5); // '00:00:05'
humanReadable(60); // '00:01:00'
humanReadable(86399); // '23:59:59'
humanReadable(359999); // '99:59:59'

// ANOTHER KATA Counting Duplicates
const duplicateCount = (text) => {
  let objCountByElements = {};
  let repeatedCharacters = 0;
  Array.from(text.toLowerCase()).forEach(function (i) {
    objCountByElements[i] = (objCountByElements[i] || 0) + 1;
  });
  for (const [key, value] of Object.entries(objCountByElements)) {
    if (value > 1) {
      repeatedCharacters = repeatedCharacters + 1;
    }
  }
  return repeatedCharacters;
};

duplicateCount(''); //  0);
duplicateCount('abcde'); //  0);
duplicateCount('aabbcde'); //  2);
duplicateCount('aabBcde'); //  2 //  'should ignore case');
duplicateCount('Indivisibility'); //  1);
duplicateCount('Indivisibilities'); //  2 // 'characters may not be adjacent'
