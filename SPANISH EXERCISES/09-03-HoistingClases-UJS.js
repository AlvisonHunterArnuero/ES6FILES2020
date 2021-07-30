//NO es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
//let persona2 = new Persona('Karla', 'Juarez');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos';//set nombre('Juan Carlos')
console.log( persona1.nombre );//get nombre

let persona2 = new Persona('Karla', 'Juarez');
console.log( persona2 );