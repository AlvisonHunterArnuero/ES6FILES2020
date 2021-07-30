// Using a regular class structure
class RoleController {
  greeting: string;

  constructor(greeting: string = 'JavaScript Nicaragua') {
    this.greeting = greeting;
  }

  greet() {
    return `Hi,  ${this.greeting}`;
  }
}

let greetingStr = 'Capulinense de corazon';
const adminRole = new RoleController(greetingStr);
adminRole.greet(); //'Hi,  Comunidad JS'

const guestRole = new RoleController();
guestRole.greet(); //'Hi,  Capulinense de corazon

// Using interfaces to centralize the properties in an object
interface CreateRoles {
  name: string;
  age: number;
  greeting: string;
  role: string;
  sayHi(): string;
}

class RoleCtrl {
  name: string;
  age: number;
  role: string;
  greeting: string;

  constructor(
    name: string,
    age: number,
    role: string,
    greeting: string = 'Tito viene de Ernestito'
  ) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.greeting = greeting;
  }

  sayHi() {
    return `You're ${this.age} Years Old. Your Message is: ${this.greeting}`;
  }
}

const itAdvisor01: CreateRoles = new RoleCtrl(
  'Rafael Chavarria',
40,
  'Software Architect',
  'Sisisisisisisisiiii'
);
console.log(`Hi ${itAdvisor01.name}, You're a ${itAdvisor01.role}`);
itAdvisor01.sayHi();

// custom type
type Programmer = {
  name: string;
  knownFor: string[];
};

const ada: Programmer = {
  name: "Ada Lovelace",
  knownFor: ['Mathematics', 'Computing', 'First Programmer'],
  age: 36
};

console.log(ada.name, ada.knownFor)


