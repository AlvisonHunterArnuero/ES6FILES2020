// Recently requested in the JavaScript Nicaragua WS-Group
function removeCharacter() {
  let strRawSource = '(123) 1234-678';
  let strResults = strRawSource.replace('(', '');
  strResults = strResults.replace(')', '');
  return strResults;
}
// Let us call the function here
removeCharacter();  // expected results '123 1234-678'
