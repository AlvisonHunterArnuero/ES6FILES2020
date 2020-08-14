// 2. Escriba la función isEmpty (obj) que devuelve verdadero
// si el objeto no tiene propiedades, de lo contrario, falso.
let objUser = {
  name: "Alvison",
  lastName: "Hunter",
  // getters aca aunque no los estas usando para nada en este caso
  get Name() {
    console.log(`Name: ${this.name}`);
  },
  get fullName() {
    console.log(`Full Name: ${this.name} ${this.lastName}`);
  },
};
// declaremos la funcion aqui, usaremos ES6 para esto mas practico asi
const isEmpty = (obj) => {
  let msg = "Is this object empty? ";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return console.log(`${msg} false`);
    }
  }
  return console.log(`${msg} true`);
};

isEmpty(objUser);
