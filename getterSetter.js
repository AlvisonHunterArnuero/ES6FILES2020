
/* En JavaScript, se puede usar un setter para ejecutar una función cada vez que
se intenta cambiar una propiedad específica. Los setters se usan con mayor frecuencia
junto con getters para crear un tipo de pseudo-propiedad. No debe aparecer en un objeto
literal con otro conjunto o con una entrada de datos para la misma propiedad */

let cadena = 'Nicaraguense por gracia de Dios';
const cuentaLetras = (palabra, letra_inicial) => {
  let letras = new Map();
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (!letras.has(letra)) {
      letras.set(letra, 1);
    } else {
      letras.set(letra, letras.get(letra) + 1);
    }
  }
  return letras.get(letra_inicial);
};

let a_count = cuentaLetras(cadena, 'g');
console.log("Esta letra se repite ", a_count, " veces en esta cadena!");
