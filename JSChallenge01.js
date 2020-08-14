const cadena = "what is the sum of 3445 + 5443";
console.log(
  "Resultado Final es:",
  Array.of(
    (cadena.match(/[a-z]/g) || []).length,
    (cadena.match(/[A-Z]/g) || []).length,
    (cadena.match(/[0-9]/g) || []).length
  )
);
// Output: 'Resultado Final es:' [ 14, 0, 8 ]
