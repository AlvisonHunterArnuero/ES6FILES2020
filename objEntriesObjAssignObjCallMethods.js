// ------------------------------------------------------------------------------
// | Basic operations with Obj assign Method, Map collection Type & call Function
// | Get monthly payments for Top FIFA players before & After latest transfers
// | Made with ❤️ in JavaScript-ES6 by Alvison Hunter Arnuero - April 19th, 2021
// | More JavaScript, Python & Web Development tips at: https://bit.ly/3p9hpqj
// -----------------------------------------------------------------------------

const playerOne = {
  fullName: 'Cristiano Ronaldo',
  transfer: 'Real Madrid - Juventus',
  monthlySalary: 291850,
  currentSalary(hike = 5000) {
    console.log(
      `${this.fullName} | New Salary with Hike: €${(
        Math.round((this.monthlySalary += hike) * 100) / 100
      ).toLocaleString()}`
    );
  },
};

// New Object without the currentSalary Method of PlayerOne
let playerTwo = {
  fullName: 'Neymar Junior',
  transfer: 'Barcelona - PSG',
  monthlySalary: 185000,
};

// Using the Object class Assign method
// The empty {} as the first argument,
// this will ensure you don't mutate
// the original given object
const playerThree = Object.assign(
  {},
  {
    fullName: 'Kylian Mbappe',
    transfer: 'Monaco - PSG',
    monthlySalary: 262300,
  }
);

// Using the new Map collection type
let playerMap = new Map([
  ['fullName', 'Antoine Griezmann'],
  ['transfer', 'Atletico Madrid - Barcelona'],
  ['monthlySalary', 120500],
]);

// Using the fromEntries method of the Object class
const playerFour = Object.fromEntries(playerMap);

// Using the spread Operator &  updating the properties as we declared this new object
const playerFive = {
  ...playerTwo,
  fullName: 'Philippe Coutinho',
  transfer: 'Liverpool - Barcelona',
  monthlySalary: 875450,
};

// This is just a divider on the screen, nothing fancy!
const divider = (chr = '-', reps = 70) => {
  console.log(chr.repeat(reps));
};

// Print First Player information
divider();
console.log(
  `Previous Salary before Transfer: €${(
    Math.round(playerOne.monthlySalary * 100) / 100
  ).toLocaleString()}`
);
playerOne.currentSalary();
divider();

// Print second Player information
console.log(
  `Previous Salary before Transfer: €${(
    Math.round(playerTwo.monthlySalary * 100) / 100
  ).toLocaleString()}`
);
// Using the call method
playerOne.currentSalary.call(playerTwo);
divider();

// Print third Player information
console.log(
  `Previous Salary before Transfer: €${(
    Math.round(playerThree.monthlySalary * 100) / 100
  ).toLocaleString()}`
);
// Let's use the apply method, passing first
// an array as param in order to make it work
playerOne.currentSalary.apply(playerThree, [24500]);
divider();

// Print fourth Player information
console.log(
  `Previous Salary before Transfer: €${(
    Math.round(playerFour.monthlySalary * 100) / 100
  ).toLocaleString()}`
);
// Let's use bind on this scenario, taking into
// consideration that bind returns a function
let playerFourCurrentSalary = playerOne.currentSalary.bind(playerFour, 2506);
playerFourCurrentSalary();
divider();

// Print fifth Player information
console.log(
  `Previous Salary before Transfer: €${(
    Math.round(playerFive.monthlySalary * 100) / 100
  ).toLocaleString()}`
);
playerOne.currentSalary.call(playerFive, 9000);
divider();
