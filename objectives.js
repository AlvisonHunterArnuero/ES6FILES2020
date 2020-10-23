const myObjectives = {
  'arrOitems': ['help', 'learn','collaborate'],
  showObjectives: function() { 
   console.log('My Personal Objectves');
return this.arrOitems.forEach( element => console.log(`${this.arrOitems.indexOf(element) + 1 } - ${element}`));
  }
};
let  alvison = Object.create(myObjectives);
alvison.showObjectives(); 
