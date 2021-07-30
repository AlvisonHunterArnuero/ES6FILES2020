/************* 1a pregunta **************/
const a = [1, 2, 3, 4];
const b = a;
b[0] = 99;
console.log(a);

/************ 2a pregunta **************/
const x = { a: 1 } === { a: 1 };
console.log(`{ a: 1 } === { a: 1 } is: ${x}`);

/***** 3a pregunta **************/
const lista1 = ['1', '2', '3'];
const intArray = lista1.map((el) => parseInt(el));
console.log(`Integers Array: ${intArray}`);

/***** 4a pregunta **************/
/*
 *  Given an array of integer numbers A[ ],
 *  and a integer number B, write a function that returns true
 *  if any pair of numbers inside of A[ ] is equal to B.
 *  Example: A=[1,2,5]; B=7; f(A,B) => true (since 2+5=7)
 */
const sumOfTwo = (A, B) => {
  let dif = A[0];
  for (el in A) {
    dif += A[parseInt(el)];
  }
  return dif === B;
}; // End of function

const l1 = [1, 2, 3];
const n1 = 7;
const n2 = 8;
console.log(sumOfTwo(l1, n1)); // this should be true
console.log(sumOfTwo(l1, n2)); // this should be false

/*------------ Preguntas Extras en el Whatssap ------------*/

// Object to string basic  example
const obj01 = { a: 'r', b: 'o', c: 'b', d: 'e', e: 'r', f: 't', g: 'o' };
console.log(Object.values(obj01).join(''));

/* remove repeated values from object and return it afterwards  */
const obj02 = { a: 'r', b: 'r', c: 'b', d: 'r', e: 'r', f: 't', g: 'r' };

//  Let us create a set for this case
const mySet = new Set();

// Let's create an array with the values from the given object
const arrFromValues = Object.values(obj02);

// Populate this set with the retrieved  values
arrFromValues.forEach((el) => mySet.add(el));

// Iterate the set now to display it on the screen
for (let item of mySet.values()) console.log(item);
