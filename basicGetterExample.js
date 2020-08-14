let objUser = {
  name: "Will",
  lastName: "Smith",
  greet: "Greetings",
  // seteamos una funcion como propiedad aca mira
  greetUser: function (argGreet) {
    this.greet = argGreet === undefined ? "Forgot to greet" : argGreet;
    return `👋 ${this.greet}, ${this.name} ${this.lastName}`;
  },

  // Getters y Setters los tiras por aca ordenaditos
  // Este es un getter
  get Name() {
    return `Name: ${this.name}`;
  },
  get fullName() {
    return `👤 User's Full Name: ${this.name} ${this.lastName}`;
  },
  // este es un setter
  set Name(value) {
    this.name = value;
  },
};
// Probemos primero sacar el nombre inicial que tenemos
console.log("Name: ", objUser.name); // te saldria el inicial Will

// Ahora cambialo de esta forma, sin clavos ya por el setter
objUser.Name = "Fresh"; // para cambiar el nombre
objUser.lastName = "Prince"; // para cambiar el apellido

// Revisemos ahora que todo este cambiado a como deberia
console.log("✍️ Name: ", objUser.name); // saldria ahora el nuevo nombre
console.log("✍️ Last Name: ", objUser.lastName); // saldria ahora el nuevo apellido

// Aqui puedes incluso obtener todo el nombre con ese getter
objUser.fullName;
// Aqui puedes llamar al metodo que le agregamos como propiedad,
// vos sabes la funcion que declaramos antes de los getters y setters
objUser.greetUser();

// Ahora limpiemos todo el nombre, como pedia el ejercicio
objUser.Name = "";

// Pasemos ahora a agregar esto implementado en una funcion, veamos entonces!
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // Age es calculado en base al año actual menos el año del cumple
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
    set(value) {
      let now = new Date();
      let yearOfBirth = now.getFullYear() - value;
      this.birthday = new Date(yearOfBirth, now.getMonth(), now.getDate());
    },
  });
}
// Pongamos esto en accion instanciando dicha funcion a un nuevo object
let jonas = new User("Jonas", new Date(1996, 07, 15));
// birthday lo conseguimos aqui de esta forma
console.log(`🎂 Birthday Date: ${String(jonas.birthday).substring(4, 10)}`);
// Asi sacamos la edad actual tambien
console.log(`🙂 Current age for ${jonas.name} is ${jonas.age} years old`);
