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

let greetingStr = 'Comunidad JS';
const adminRole = new RoleController(greetingStr);
adminRole.greet(); //'Hi,  Comunidad JS'

const guestRole = new RoleController();
guestRole.greet(); //'Hi,  JavaScript Nicaragua'

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
    greeting: string = 'JS Nicaragua'
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
  'John Wick',
  35,
  'Admin Support',
  'Carpe Diem'
);
console.log(`Hi ${itAdvisor01.name}, You're an ${itAdvisor01.role}`);
itAdvisor01.sayHi();

type Programmer = {
  name: string;
  knownFor: string[];
  age: number;
};

const ada: Programmer = {
  name: 'Ada Lovelace',
  knownFor: ['Mathematics', 'Computing', 'First Programmer'],
  age: 36,
};

console.log(ada.name, ada.knownFor);

