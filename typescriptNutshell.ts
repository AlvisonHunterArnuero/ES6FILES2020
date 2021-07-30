let myString: string = 'TypeScript is cool';
let myNum: number = 1976;
let myBool: boolean = true;
let myAny = -4;
console.log(myString, myNum, myBool, myAny);

// Array Types
let strArr: string[] = ['Alvison', 'Hunter', 'Jinotepe'];
let numArr: number[] = [23, 34, 56, 78];
let boolArr: boolean[] = [true, false, false, true];
let strNumTuple: [string, string, number] = ['Alvison', 'Hunter', 45];
let myUnion: string | number = 'Xilotepelt';

// functions void null undefined
const ageCalculator = (currentYear: number, num2: number): number =>
  currentYear - num2;
let currentYear: number = new Date().getFullYear();
console.log(ageCalculator(currentYear, 1992));

const substractWithStrings = (
  strNum1: string | number,
  strNum2: string | number
): number => {
  typeof strNum1 == 'string' ? (strNum1 = parseInt(strNum1)) : null;
  typeof strNum2 == 'string' ? (strNum2 = parseInt(strNum2)) : null;
  return strNum1 - strNum2;
};
console.log(substractWithStrings(2021, 1945));

// void function
const errorMessages = (strText: string): void => {
  console.log(strText);
};
errorMessages('Error: This is the void function in action.');
// Null and undefined
const n: null = null;
const u: undefined = undefined;

//  Enums
enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

const getDailyMotivationalQuote = (day: Days) => {
  switch (day) {
    case Days.MONDAY:
      return 'Get a coffee and  get busy, dude!';
    case Days.TUESDAY:
      return 'Well, it  is time to row, young fellow!';
    case Days.WEDNESDAY:
      return 'We are in the middle, fellow!';
    case Days.THURSDAY:
      return 'Dude, it is almost Friday, yeeyy!';
    case Days.FRIDAY:
      return 'Push, through, only 1  day left!';
  }
};
console.log(getDailyMotivationalQuote(new Date().getDay()));

// Interfaces

interface BestFifaPlayer {
  name: string;
  goals: number;
  isGoat: boolean;
  country?: string;
}

const showFifaGoat = (player: BestFifaPlayer) => {
  return (
    player.name + ' is ' + (player.isGoat ? 'the G.O.A.T' : 'not a G.O.A.T')
  );
};

let cr7: BestFifaPlayer = {
  name: 'Cristiano Ronaldo',
  goals: 86,
  isGoat: true,
};
console.log(showFifaGoat(cr7));

// Basic on Classes, super inheritance in TypeScript
// Another class example Basic one
class Car {
  public carBriefSummary: string;
  constructor(
    public carBrand: string,
    public engineType: string,
    public carColour: string,
    public trimLevel: string,
    public serialNumber: number,
    public bodyStyle: string,
    public modelYear: number
  ) {
    this.carBriefSummary =
      carBrand +
      '|' +
      engineType +
      '|' +
      carColour +
      '|' +
      trimLevel +
      '|' +
      serialNumber +
      '|' +
      bodyStyle +
      '|' +
      modelYear;
  }
}

interface Vehicle {
  carBrand: string;
  engineType: string;
  carColour: string;
  trimLevel: string; // Standard Sport Luxury
  serialNumber: number;
  bodyStyle: string; // Coupe Sedan Hatchback Convertible Wagon SUV
  modelYear: number;
}

const displayCarDetails = (vehicle: Vehicle) => {
  console.log("Car's additional specifications: ");
  return (
    'carType:' +
    vehicle.trimLevel +
    ' Brand: ' +
    vehicle.carBrand +
    ' Serial Number: ' +
    vehicle.serialNumber
  );
};

let car = new Car(
  'Toyota Yaris',
  'Gasoline',
  'Blue',
  'Sport',
  908766,
  'Sedan',
  2008
);
console.log(car.carBriefSummary);

// Another class type, a bit more advance
class Greeter {
  greeting: string;
  constructor(public msg: string) {
    this.greeting = msg;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('James');
console.log(greeter.greet());

// Super Example
class Animal {
  protected name: string;
  constructor(newName: string) {
    this.name = newName;
  }
  move(distanceInMetters: number = 0) {
    console.log('Moved ' + distanceInMetters + ' mts.');
  }
}
class Rhino extends Animal {
  constructor() {
    super('Rhino');
  }
  getAnimalName() {
    return `This animal instance has a name of ${this.name}`;
  }
}

let kitty = new Animal('Cat');
let rhino = new Rhino();
console.log(rhino.getAnimalName());

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  // override parent method as well
  move(distanceInMetters = 5) {
    super.move(distanceInMetters);
  }
}

let snake = new Snake('Slithy');
console.log(snake.move());
