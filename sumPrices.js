// Made with ❤️ in javaScript by Alvison Hunter - September 1st, 2020
/* This obj shouldna have these numeric values as strings, bad practice.
but if that could be the case from where this data is received,
we simply parse them in order to use it the sum of all these elements*/
const Fruits = [
  { name: "Apple", price: "150" },
  { name: "Pineapple", price: "60" },
  { name: "Banana", price: "80" },
  { name: "Pear", price: "200" },
  { name: "Orange", price: "130" },
  { name: "Watermelon", price: "160" },
  { name: "Mango", price: "50" },
];
const sumArrValues = (array, currency = "dollars") => {
  const sum = array.reduce(
    (accumulator, fruit) => (accumulator += parseInt(fruit.price)),
    0
  );
  return `Total due for fruits is ${sum} ${currency}`;
};
// pass the array and the type of currency I am using.
//second param is optional and default will be dollars
sumArrValues(Fruits, "Cordobas");
