//Te sugiero hacerlo de esta forma, no te compliques mucho con tanto codigo!
// un consejo, no pases valores numericos como string si no es necesario.
Array.from(
  Object.keys(JSON.parse('{ "S":"10", "M":"5", "XL":"5", "XXL":null}'))
).forEach((element) => console.log(element));
