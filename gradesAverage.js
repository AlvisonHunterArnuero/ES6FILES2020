const notas = [
  { nombre: "Juancho", nota: 8, sexo: "M" },
  { nombre: "Simona", nota: 12, sexo: "F" },
  { nombre: "Billie", nota: 16, sexo: "M" },
  { nombre: "Chepito", nota: 2, sexo: "M" },
  { nombre: "Eleazar", nota: 4, sexo: "M" },
  { nombre: "Petrona", nota: 18, sexo: "F" },
  { nombre: "Demetrio", nota: 5, sexo: "M" },
  { nombre: "Julieta", nota: 13, sexo: "F" },
  { nombre: "Conchitq", nota: 15, sexo: "F" },
  { nombre: "Juanita", nota: 9, sexo: "F" },
];
// cuantos chicos y chicas hay en el aula
let esChico = (estudiante) => estudiante.sexo === "M";
let esChica = (estudiante) => estudiante.sexo === "F";

// usemos esChico y esChica para filtrar estos datos para ambos sexoos
let cuantosChicos = (notas) => notas.filter(esChico);
let cuantosChicas = (notas) => notas.filter(esChica);
// Calculemos el average general de las notas aca
let average = (notas) =>
  notas.reduce((acc, curr) => acc + curr.nota, 0) / notas.length;
// Nota maxima la sacamos aca con esta funcioncita usando max method de Math
let notaMaxima = (notas) =>
  Math.max(...notas.map((estudiante) => estudiante.nota));
// Nota minima, tambien la hacemos con map
let notaMinima = (notas) =>
  Math.min(...notas.map((estudiante) => estudiante.nota));
// ahora asignaremos  los resultados anteriores  a unas variables
let averageDelAula = average(notas);
let averagePorChicos = average(cuantosChicos(notas));
let averagePorChicas = average(cuantosChicas(notas));
let notaMasAlta = notaMaxima(notas);
let notaMasBaja = notaMinima(notas);
let notaMaximaChicos = notaMaxima(cuantosChicos(notas));
let notaMinimaChicos = notaMinima(cuantosChicos(notas));
let notaMaximaChicas = notaMaxima(cuantosChicas(notas));
let notaMinimaChicas = notaMinima(cuantosChicas(notas));

// ya podemos usarlas todas para mostrar los datos en pantalla
console.log("El average total por el aula fue de  ", averageDelAula);
console.log(
  "La nota mas alta fue ",
  notaMasAlta,
  " y la mas baja fue ",
  notaMasBaja
);
console.log(
  "Average por chicos fue: ",
  averagePorChicos,
  "y por chicas fue de: ",
  averagePorChicas
);
console.log(
  "La nota mas baja por chicos fue: ",
  notaMinimaChicos,
  "y por chicas fue ",
  notaMinimaChicas
);
console.log(
  "La nota mas alta por chicos fue: ",
  notaMaximaChicos,
  "y por chicas fue ",
  notaMaximaChicas
);
