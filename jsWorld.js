let javaScriptWorld = [
  { name: "VueJS", type: "framework" },
  { name: "ReactJS", type: "library" },
  { name: "Angular", type: "framework" },
  { name: "BackboneJS", type: "framework" },
  { name: "Polymer", type: "library" },
  { name: "EmberJS", type: "framework" },
];
// con el bucle for tradicional, seria algo asi
let myFrameworkUsingFor = [];
for (var i = 0; i < javaScriptWorld.length; i++) {
  if (javaScriptWorld[i].type === "framework") {
    myFrameworkUsingFor.push(javaScriptWorld[i]);
  }
}
console.log("Con Bucle Antiguo: ", myFrameworkUsingFor);
//-------------------------------------------------------------
// aqui ya aplicando el Método Filter(), con menos código
let myFrameworkUsingFilter = javaScriptWorld.filter((framework) => {
  return framework.type === "framework";
});
console.log("Con Bucle Moderno: ", myFrameworkUsingFilter);
