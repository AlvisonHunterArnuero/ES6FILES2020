const addBinary = (argNum01, argNum02) => {
  let strBinNumber = "";
  let sum = argNum01 + argNum02;
  while (sum > 0) {
    strBinNumber = (sum % 2) + strBinNumber;
    sum = Math.floor(sum / 2);
  }
  return strBinNumber;
};
addBinary(4567, 1234);
