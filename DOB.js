/*
Routine: Basic Birthday Message Reminder
Author : // Made with ❤️ in JavaScript by Alvison Hunter - February 10th, 2021
*/

// Date of birth, we assign it to a variable in Year-Month-Day Format
let dateOfBirth = '2021-02-10';

// Now let us capture current year, month and day like this
let dt = new Date();
let curYear = dt.getFullYear();
let curMonth = dt.getMonth();
let curDay = dt.getDate();

// We do the same with the current Date, exactly like this:
let currentDate =
  curYear +
  '-' +
  ('0' + (curMonth + 1)).slice(-2) +
  '-' +
  ('0' + curDay).slice(-2);

// Validate if currentDate is equals or greater than BirthDay date
let isBirthDay = Date.parse(currentDate) >= Date.parse(dateOfBirth);
// If is true print a happy birthday message or not a bday message otherwise :(
let bdayMsg = isBirthDay
  ? 'Happy Birthday, Dear osito'
  : 'Your Birthday is not today.';
console.log(bdayMsg);

// Ready, dear osito, nothing fancy, we could do something more sofisticated
// but to start is a good excercise, we could advance it later on, Osito Towers
