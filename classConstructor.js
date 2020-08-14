class developerTasks {
  constructor(name) {
    this.name = name;
    this.boolResponse = false;
  }
  //First, let's setup my getters & setters
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length <= 0) {
      console.log("Name cannot be empty");
      return;
    }
    this._name = value;
  }

  get boolResponse() {
    return this._boolResponse;
  }

  set boolResponse(value) {
    this._boolResponse = value;
  }
  // My method to print the delivery status
  isDeliveredToday() {
    this.name.toUpperCase() === "TITO"
      ? (this.boolResponse = true)
      : (this.boolResponse = false);
    console.log(`Developer:  ${this.name}`);
    console.log(`Delivered today: ${this.boolResponse}`);
  }
}
developerTasks.prototype.title = "Software Engineer";

// let's now instantiate this class using Tito as param
let response = new developerTasks("Tito");
response.isDeliveredToday();
