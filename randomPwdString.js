// This function will generate a random string based on the parameter number, useful for temp passwords
const fnRandomString = (argLength) => {
  // receptor of the generated string, this will contain the x amount of character based on args
  let generatedString = "";
  // The string that we will be using as a reference to add the characters, including special ones such @
  let baseString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*+&^%$#!";
  let charactersLength = baseString.length;
  // refactor this to a ES6 friendly version, by using one of the looping helpers that we count with in ES6
  [...baseString].every(function (element, index) {
    // start building the string getting a random character each time based on the baseString
    generatedString += baseString.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    // using the index of this helper, if it is equal to args-1 we stop the loop, otherwise
    // we keep adding characters to the generated String,   this is not a good practice btw...
    return index !== argLength - 1; // trick to break this loop, not an official version :)
  });
  return generatedString; // Once is ready, the funtcion returns the results :)
};
console.log("Final Result: ", fnRandomString(6).toUpperCase()); // duh
