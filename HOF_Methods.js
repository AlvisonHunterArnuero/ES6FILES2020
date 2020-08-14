console.log("=== Ejemplo con el Método INCLUDE() ===");
const arrNumeros = [1, 2, 3, 4, 5];
console.log("Esta este numero incluido en la lista? ", arrNumeros.includes(2));
const arrMascotas = ["gato", "perro", "gallo", "vaca", "cerdo", "caballo"];
console.log("Esta este animal en la lista? ", arrMascotas.includes("gato"));
console.log("Esta este animal en la lista? ", arrMascotas.includes("cerdo"));
console.log("Esta este animal en la lista? ", arrMascotas.includes("gallina"));

console.log("=== Ejemplo con el Método REDUCE() ===");
const arrSuma = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// sumar los valores del arreglo
console.log(arrSuma.reduce(reducer));
// 5 + suma de los elementos del arreglo
console.log(arrSuma.reduce(reducer, 5));

console.log("=== Ejemplo con el Método EVERY() ===");
// veamos si todos los numeros del arreglo son menores que 50
const isPriceGreaterThan200 = (currentValue) => currentValue > 200;
const arrCellphonesPrices = [400, 320, 269, 900, 230, 430];
console.log(
  "Todos los celulares mas caros que 200?  ",
  arrCellphonesPrices.every(isPriceGreaterThan200)
);

console.log("=== Ejemplo con el Método FOREACH() ===");
const arrNames = ["Alvison", "Declan", "Liam", "Siara"];
arrNames.forEach((element) => console.log(`Yo soy ${element} Hunter`));

console.log("=== Ejemplo con el Método SOME() ===");
const arrSuperHeroes = ["Batman", "Superman", "Wonder Woman", "Spiderman"];
const isHero = (hero) => hero === "Batman";
// se espera que retorne un true por batman
console.log("Es Batman un Superheroe? ", arrSuperHeroes.some(isHero));

console.log("=== Ejemplo con el Método FIND() ===");
const arrTitles = [
  "Web Developer",
  "Software Engineer",
  "Visual Designer",
  "UX/UI ",
];
const found = arrTitles.find((title) => title === "Web Developer");
console.log(
  found
    ? `se encontro este término ${found}`
    : `No se encontro el termino ${found}`
);

console.log("=== Ejemplo con el Método FILTER() ===");
const lastNames = [
  "Serrano",
  "Lopez",
  "Espinoza",
  "Acevedo",
  "Arnuero",
  "Rivera",
];
const result = lastNames.filter((lastName) => lastName.length > 6);
// Retorna un arreglo asi   [ 'Serrano', 'Espinoza', 'Acevedo', 'Arnuero' ]
console.log("Apellidos con mas de 6 letras: ", result);
