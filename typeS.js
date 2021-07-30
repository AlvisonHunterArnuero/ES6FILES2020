const arrMessages = [
  'Clever is the enemy of clear',
    'Learn something new every day',
    'Comments are mostly evil',
    'Test your sh—code before you ship it',
    'Only write code if you absolutely have to'
];

const randomChoice = (arr) => {
return arr[Math.floor(Math.random() * arr.length)];
}
randomChoice(arrMessages);

// Copiando un arreglo
const carBrands = ['Ford','BMW','Ferrari'];
const newCarBrands = [...carBrands];
console.log(newCarBrands); // [ 'Ford', 'BMW', 'Ferrari' ]

// Expandiendo un arreglo
const  lang = ['JavaScript','Go','C#'];
const newLang = [...lang, 'Python'];
console.log(newLang); // [ 'JavaScript', 'Go', 'C#', 'Python' ]

// Expandiendo un object
let  developer = {name: "Alvison",   curLang:"JavaScript"}
developer = {...developer, newLang: "Python"};
console.log(developer); // { name: 'Alvison', curLang: 'JavaScript', newLang: 'Python' }

// Using old school JavaScript null check
const user = "chapulinColorado"
if(user !== null && user !== undefined){console.log('No contaban con mi astucia');}
// Using modern EcmaScript null check
if(user){console.log('No contaban con mi astucia');} // No contaban con mi astucia

// using the optional chaining operator
const coolDev = {
  fullName:"Alvison Hunter",
                 tools:{ 
                   lang: {
                     name:"JavaScript", 
                     lib: "React", 
                     frmwrk: "Vue"
                   } // End lang
                 }
}

// the old way
if(coolDev && coolDev.tools & coolDev.tools.lang && coolDev.tools.lang.name){console.log("This guy probably knows ReactJ")}



