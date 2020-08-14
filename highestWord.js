const high = (argSentences) => {
  let arrABC = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arrTemp = [];
  let arrString = [];
  let maxValue = [];
  let arrWords = []; // convert strTemp to an Array of words
  // Get the whole sentence to be an array of words first
  arrWords = argSentences.split(" ");
  // now split each character as an array value to be compared
  let arrGeneratedValue = Array.from(argSentences.toString());
  // find numeric values for each character of the phrase
  for (i = 0; i < arrGeneratedValue.length; i++) {
    arrTemp[i] = arrABC.indexOf(arrGeneratedValue[i]);
  }
  // convert this array Temp to a whole string of numbers
  arrString = arrTemp.join("");
  // clear the arrTemp to be used again on this function
  arrTemp.splice(0, arrTemp.length);
  // we now conver that string to an array separated by the -1 (space)
  arrTemp = arrString.split("-1").map((x) => +x);
  console.log(arrTemp);
  // let us get the max number from the array Temp now
  maxValue = arrWords[arrTemp.indexOf(Math.max(...arrTemp))];
  return maxValue;
};

high("man i need a taxi up to ubud");
/*
'man i need a taxi up to ubud', 'taxi'
'what time are we climbing up the volcano', 'volcano'
'take me to semynak', 'semynak'
*/
