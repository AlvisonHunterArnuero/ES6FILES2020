console.log("======== Obtener Numero Random ========");
// primero declaramos la funcion que asignaremos aca
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// por higher order, asignamos el resultado a esta variable
let giveMeRandom = getRandomInt;
//imprimamos resultados por aca
console.log("Primer Numero Random es:  ", giveMeRandom(700));
console.log("Segundo Numero Random es:  ", giveMeRandom(360));

console.log("==== Multiplicar 9 x 12 primeros numeros ====");
// Declaramos la funcion anonima para hacer la multiplicacion
const multiplicar = (n) => n * 9;
// mandamos a mapear este arreglo asegurandonos de pasar
// la funcion de multiplicacion que hara el trabajo por nosotros
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(multiplicar));
