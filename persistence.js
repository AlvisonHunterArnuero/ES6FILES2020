/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
persistence(4) === 0 // because 4 is already a one-digit number
*/
const persistence = (num) => {
  let mpAttempts = 0;
  if (num < 9) {
    return 0;
  } else {
    let arr = num.toString(10).replace(/\D/g, "0").split("").map(Number);
    do {
      let n = 1;
      for (let i = 0; i < arr.length; i++) {
        n = n * arr[i];
      }
      arr = n.toString(10).replace(/\D/g, "0").split("").map(Number);
      console.log(
        `Multiplicative Persistence #${mpAttempts + 1} ==>  [${arr}]`
      );
      mpAttempts += 1;
    } while (arr.length != 1);
    console.log(
      `Multiplicative Persistences: ${mpAttempts} for number [${num}]`
    );
  } // End of Else
  return mpAttempts;
};
persistence(999);

/*
const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
}

*/
