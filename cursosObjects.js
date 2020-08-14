// WE WILL CONVERT AN ARRAY OF OBJECTS INTO AN ARRAY USING THE MAP HELPER AND DESTRUCTURING
// WE WILL BE USING SOME OF THE COURSES OF UNIVERSIDAD DE INGIENERIA [UNI] MANAGUA AS SAMPLES
const classes = [
  ["Cloud Computing", "9:00 AM", "Danilo Rodríguez", "Estudios de Posgrado"],
  [
    "Hacking y Ciber Seguridad",
    "8:00 AM",
    "Jorge Gutiérrez",
    "Recinto Ricardo Morales Avilés"
  ],
  [
    "Desarrollo de Aplicaciones con Visual C# y SQL Server",
    "10:15 AM",
    "Denis Guido",
    "Edificio de Posgrado"
  ],
  [
    "Redes de Computadoras Avanzado",
    "11:30 AM",
    "Carlos Rodriguez",
    "Edificio de Posgrado"
  ]
];

const classesAsObject = classes.map(item => {
  return { topic: item[0], time: item[1], teacher: item[2], location: item[3] };
});
// LET US PRINT THE GENERATED ARRAY ON THIS LINE, HOPE YOU LIKE THIS EXCERCISE, GUYS!
classesAsObject;
