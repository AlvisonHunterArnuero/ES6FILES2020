let bebidasNicas = [
  'Pinolillo',
  'Tiste',
  'Pozol',
  'Linaza',
  'Chía',
  'Fresco de Jengibre',
];
let bebidasNicas02 = [
  ...bebidasNicas,
  'Cacao con leche',
  'Semilla de Jícaro',
  'Grama',
];
console.log(bebidasNicas02);

let fifaPlayers2020 = [
  {
    player: 'Cristiano Ronaldo',
    team: 'Juventus FC',
  },
  {
    player: 'Kylian Mbappé',
    team: 'Paris Saint-Germain',
  },
  {
    player: 'Robert Lewandowski',
    team: 'FC Bayern München',
  },
];
let fifaPlayers2021 = [
  ...fifaPlayers2020,
  {
    player: 'Mohamed Salah',
    team: 'Liverpool FC',
  },
];
fifaPlayers2021.forEach((player) => console.log(player));

/* --------------------------- Ternary Operator -------------------------------- */
const regularHours = 40;
let workedHours = 45;
let overtimeHours = 0;

// Regular JavaScript
if (workedHours > 40) {
  overtimeHours = workedHours - regularHours;
  console.log(`Overtime: ${overtimeHours}.`);
} else {
  console.log('"No overtime hours"');
}

// Using the Ternary Operator
console.log(workedHours > 40 ? `Overtime: ${overtimeHours}` : 'No Overtime');

/* --------------------------- Template Literals -------------------------------- */
// We could write in  a single line
let singleLine = `Nicaragua is wonderful`;

// Or we could use multiple lines when using template literals
let multiLines = `You have no idea of how much
              I love the template literals feature of ES6`;

// We could incorporate values of variables in between text content
let num1 = 20;
let num2 = 35;
let sum = num1 + num2;
let result = `The sum of ${num1} plus ${num2} is ${sum}.`;
console.log(result);

/* --------------------- Optional Chaining Operator -------------------------- */
const profile = {
  developer: {
    name: 'Alvison Hunter',
    language: 'JavaScript',
    library: 'React',
  },
};

// Regular JavaScript, we would do it like this
if (
  profile &&
  profile.developer &&
  profile.developer.name === 'Alvison Hunter'
) {
  console.log('Front End Developer');
}

// With Optional Chaining Operator, this goes like this
if (profile?.developer?.name === 'Alvison Hunter') {
  console.log('Front End Developer');
}

/* --------------------- Nullish Coalescing Operator  -------------------------- */
// Let's try first when the value is null
let payload = null;
const response = payload ?? 'Payload is empty or Null';
console.log(response);

// The opposite, when it is not null
let num = 12;
const isNull = num ?? 'Empty or Null';
console.log(`Current Num value is: ${isNull}`);
