// let's prepare our objects, along with some values
let Obj1 = {type:"Fiat", model:"500", color:"white"};
let Obj2 = {type:"Honda", model:"200", color:"black"};
let  Obj3 = {type:"Toyota", model:"300", color:"gray"};
// Now is time to declare a set to store these objects
let setObjects = new Set();
// Let' add them to this collection
setObjects.add(Obj1);
setObjects.add(Obj2);
setObjects.add(Obj3);
let newArray = Array.from(setObjects)
  
let iterator = newArray.entries(); 
for (let e of iterator) { 
  console.log('==>', e); 
} 
// Time to display it on the screen, I love this console method (dir)
console.dir(newArray);
