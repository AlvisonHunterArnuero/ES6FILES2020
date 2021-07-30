const add = (strFirstNum, strSecondNum) => {
  let strTotals = ''; // our result will be stored in a string.
  // if s2 is longer than s1, swap them.
  if (strSecondNum.length > strFirstNum.length) {
    [strFirstNum, strSecondNum] = [strSecondNum, strFirstNum];
  }
  // declare the variables I will with an init value
  // number that is carried to next decimal place. Initially to zero.
  [tmpValueStr, carry, additionOfDigits, a, b] = ['', 0, 0, 0, 0];

  for (let i = 0; i < strFirstNum.length; i++) {
    // get ith digit of strFirstNum from right, we store it in a
    a = parseInt(strFirstNum.charAt(strFirstNum.length - 1 - i));
    // get ith digit of strSecondNum from right, we store it in b
    b = parseInt(strSecondNum.charAt(strSecondNum.length - 1 - i));
    // make sure b is a number,
    // (this is useful in case, strSecondNum is shorter than strFirstNum
    b = b ? b : 0;
    // add a and b along with carry, store it in a temp value string type variable.
    tmpValueStr = (carry + a + b).toString();
    additionOfDigits = tmpValueStr.charAt(tmpValueStr.length - 1);

    // split the string into carry and additionOfDigits ( least significant digit of abSum.
    carry = parseInt(tmpValueStr.substr(0, tmpValueStr.length - 1));
    // if carry is not number, make it zero.
    carry = carry ? carry : 0;

    // append additionOfDigits to 'sum'. If we reach leftmost digit, append abSum which includes carry too
    strTotals =
      i === strFirstNum.length - 1
        ? tmpValueStr + strTotals
        : additionOfDigits + strTotals;
  }

  return strTotals;
};

add('1', '1'); // '2'
add('123', '456'); // '579'
add('888', '222'); // '1110'
add('1372', '69'); // '1441'
add('12', '456'); // '468'
add('101', '100'); // '201'
add('63829983432984289347293874', '90938498237058927340892374089'); // '91002328220491911630239667963'

add('1', '1'); // '2'
add('123', '456'); // '579'
add('888', '222'); // '1110'
add('1372', '69'); // '1441'
add('12', '456'); // '468'
add('101', '100'); // '201'
add('63829983432984289347293874', '90938498237058927340892374089'); // '91002328220491911630239667963'
