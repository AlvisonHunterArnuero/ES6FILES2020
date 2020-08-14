/*
Calculate the row sums of this triangle from the 
row index (starting at index 1) 
Test.assertEquals(rowSumOddNumbers(1), 1);
Test.assertEquals(rowSumOddNumbers(42), 74088);
*/
//                   total += Number(input[i]);
         //     return total;
function rowSumOddNumbers(n) {
  const arrElements = [];
  let sum = 0;
  let counter = 1;
  // let's get the odd elements
  for (let i = 0; i < n; i++) {
   if( i % 2 ===0)
   {
     arrElements.push(i+1);
   };
}
  console.log(arrElements);
    for (let j = 0; j < arrElements[counter]; j++) {
   console.log('==>',arrElements[j]);
}
  return `End Result is:  ${sum}`;
}

rowSumOddNumbers(42);