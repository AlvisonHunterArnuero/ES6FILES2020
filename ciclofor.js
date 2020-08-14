// Declaremos la variable que almacenara el producto
let producto = 0;
// Los ciclos for comienzan por lo general en cero, pero
// por motivos del ejemplo decidí comenzar este con el uno
for (let numero = 1; numero < 13; numero++) {
  // Se ejecuta 12 veces, con valores del num 1 hasta el 12.
  producto = numero * 9;
  console.log("9 Multiplicado por", numero, "  = ", producto);
}
