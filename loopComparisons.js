console.log("=== Ejemplo con el Método INCLUDE() ===");
var num = [1, 2, 3, 4, 5, 0];
for (let i = 0, total = numbers.length; i < total; i = i + 1) {
  if (num <= 0) {
    console.log("0 present in array");
  }
}

console.log("=== Ejemplo con el Método REDUCE() ===");
var num = [1, 2, 3, 4, 5, 0];
var isZeroFree = num.every((e) => e > 0);
if (!isZeroFree) {
  console.log("0 present in array");
}
