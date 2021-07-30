const oddOrEven = (array) =>  array.length === 0 ? "even" : array.reduce((acc, val) => acc + val) % 2 == 0 ? "even"  : "odd";

oddOrEven([0]) //  "even"
oddOrEven([0, 1, 4]) //  "odd"
oddOrEven([0, -1, -5]) //,"even"

oddOrEven([0, 1, 2]) //  "odd"
oddOrEven([0, 1, 3]) //  "even"
oddOrEven([1023, 1, 2]) //,"even"

oddOrEven([0]) // , 'even'
oddOrEven([1]) // , 'odd'
oddOrEven([]) // , 'even'

/*
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
Cat Years
15 cat years for first year | 
+9 cat years for second year | 
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year 
+5 dog years for each year after that
*/
const humanYearsCatYearsDogYears = humanYears => {
  if(humanYears === 1) return [humanYears, 15, 15]
 if (humanYears===2) return[humanYears, 24,24];
  if (humanYears>2) return [humanYears, 24 + ((humanYears-2)*4), 24 + ((humanYears-2)*5)];
}

humanYearsCatYearsDogYears(1) //  [1,15,15]
humanYearsCatYearsDogYears(2) // [2,24,24]
humanYearsCatYearsDogYears(10) //  [10,56,64]

const userData = [{
    "data": [{
        "idproducto": 1,
        "idcategoria": 1,
        "codigo": 5436,
        "nombre": "Prueba 1",
        "precio_venta": 40000,
        "stock": 4,
        "descripcion": "PruebaDescripta",
        "imagen": null,
        "estado": 1
    }]
}];
console.log(userData[0].data[0].codigo) // 5436