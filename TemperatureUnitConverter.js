class TemperatureUnitConverter {
  constructor(degC, degK) {
    this.celsius = degC;
    this.kelvin = degK;
  }
  //First, let's setup my getters & setters
  get celsius() { return this._celsius;  }
  set celsius(value) {  this._celsius = value; }
  get kelvin() {return this._kelvin;}
  set kelvin(value) { this._kelvin = value; }
  // Methods to make the conversions
  celsiusToKelvin(celsiusValue) {
     this.celsius = celsiusValue + 273.15
    console.log(`Converted successfully to : ${ this.celsius} °C.`);
  }
  
    kelvinToCelsius(kelvinValue) {
     this.kelvin = kelvinValue + 273.15
    console.log(`Converted successfully to : ${ this.kelvin} °K.`);
  }
} // End  of class

//  Let us create the instance of this class
let unitconverter = new TemperatureUnitConverter(10,20);
unitconverter.isDeliveredToday();
