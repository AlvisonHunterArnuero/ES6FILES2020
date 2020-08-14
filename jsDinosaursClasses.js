// let us start writing the main class, from Here I will build the other ones by extending it
class Monster {
  constructor(options) {
    this.name = options.name;
    this.type = options.type;
    this.ingest = options.ingest;
    this.health = 100;
  }
  Introduce(msg) {
    return `Hey humans: My name is ${this.name}.  ${msg}.`;
  }
}
// Time to build Godzilla extending the Parent Class properties and methods, I love this!
class Godzilla extends Monster {
  Roar(roarMsg) {
    return `When angry or hungry, the ${this.type}  usually ${roarMsg}.`;
  }
  Walk(walksound) {
    return `When ${this.name} walks, it sounds like ${walksound}.`;
  }
  Eat(mealtype) {
    return `${this.name} is ${mealtype}  hence he is a ${this.ingest}.`;
  }
}
// Last, let us build a pair of Dinosaurs for this example, using the code below as told.
const Rex = new Godzilla({
  name: "Godzilla",
  type: "Tyrannosaurus",
  ingest: "Carnivore"
});
const Bronto = new Godzilla({
  name: "Brontie",
  type: "Brontosaurus",
  ingest: "Herbivore"
});
// Okey guys, Rex is on his way to shine on this JavaScript Code, get ready!
Rex.Introduce("I shall devour you guys!");
Rex.Walk("clomp.. clomp... clomp");
Rex.Roar("snorts heavely");
Rex.Eat("an animal that feeds on flesh");
// Now the Brontosaurus will have something to say here
Bronto.Introduce("I am a friendly dude");
Bronto.Walk("blam... blam... blam");
Bronto.Roar("hisses strongly");
Bronto.Eat("an animal that feeds on plants");
// See you on the next screenshot guys, have fun coding!
