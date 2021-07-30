/** Gerardo Emmanuel PM Por supuesto, todo lo que han dicho es correcto, vos y yo lo sabemos,  pero muchos aun no lo saben y entran por estos grupos con el deseo de aprender, muchos no saben sobre la forma correcta y mas apropiada de clonar arreglos, tampoco el concepto de shallow copy y deep copy con respecto a la asignacion por referencia o el trabajar  por valor, y en que casos uno  es shallow y el otro es  deep  copy,  en fin, son muchas cosas de la cual podriamos hablar sobre este y muchos otros temas super padres de JavaScript en general, cierto colega?
*/

// Por ejemplo, estas usando ES6, eso esta tremendisimo, te felicito por eso,
// pero igual que el famoso spread operator puedes usar tambien lo siguiente:
let newArray = Array.from(oldArray) ;

// o si quieres ir muy a la vieja escuela, puedes usarlo con el metodo slice()
let newArray02  = oldArray.slice() ;

// o quizas tambien lo puedas hacer usando el metodo concat() que da el mismo resultado
let newArray03  = oldArray.concat() ;

// Si nos vamos al moderno EcmaScript, el cual a incorporado tremendas caracteristicas
// de lenguajes como python y C Sharp, lo cual me parece formidable, podriamos ir asi:
let newArray04 = [...oldArray];

// o si deseas otra cosa colega,  para otro tipo de caso, puedes perfectamente crear
// hasta un object a partir de oldArray usando para eso el Object con su metodo assign
let newArray05  = Object.assign({}, oldArray);

/*  y usando esto nos dara mas bien un object, en fin, estas cosas vos las conoces
pero hay otros que no porque estan comenzando, asi que demosle un chance a todos, 
para que tambien puedan aprender, que te parece la idea, estimado colega? */





