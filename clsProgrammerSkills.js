class ProgrammerSkills {
  constructor(argName, argFavLang, argLibrary, argFramework) {
    this.name = argName;
    this.language = argFavLang;
    this.library = argLibrary;
    this.framework = argFramework;
  }
  displaySkills() {
    console.log(`Name: ${this.name} | Language: ${this.language}`);
    console.log(`Library: ${this.library} | Framework: ${this.framework}`);
  }
}

let coder = new ProgrammerSkills(
  "Alvison Hunter",
  "JavaScript",
  "ReactJS",
  "AngularJS, VueJS"
);
coder.displaySkills();
