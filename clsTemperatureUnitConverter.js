// Basic Temperature Unit Converter in JavaScript, nothing fancy, Folks!
// Made with ❤️ in JavaScript by Alvison Hunter - March 24th, 2021
// JavaScript, Python & Web Development tips at: https://bit.ly/3p9hpqj

/** Class to convert Celsius degrees to Kelvin or Viceversa. */
class TemperatureUnitConverter {
  /**
   * Setup the values to be converted. If no param is passed, we use default params.
   * @param {number} celsiousDegrees - Celsius value.
   * @param {number} kelvinDegrees - Kelvin value.
   */
   constructor(celsiousDegrees, kelvinDegrees) {
    this.celsius = celsiousDegrees || 1;
    this.kelvin = kelvinDegrees  || 273.15;
  }

  // --------------    GETTERS AND SETTERS   -------------

  /**
   * Get or set the celsius value.
   * @return {number} The celsius value.
   */
  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    this._celsius = value;
  }

  /**
   * Get or set the kelvin degrees value.
   * @return {number} The kelvin degrees value.
   */
  get kelvin() {
    return this._kelvin;
  }
  set kelvin(value) {
    this._kelvin = value;
  }

  // --------------    REGULAR METHODS   --------------

  /**
   * Convert a number containing a celsius value into a kelvin value.
   * @param {number} celsiusParam - The celsius value to be converted. Default param added if no param is passed.
   * @return {string} An string message with the converted values using the console log method.
   */
  celsiusToKelvin(celsiusParam = this.celsius) {
    this.kelvin = celsiusParam + 273.15;
    console.log(
      `${celsiusParam} °C were converted successfully to : ${parseFloat(
        this.kelvin
      ).toFixed(2)} °K.`
    );
  }

  /**
   * Convert a number containing a kelvin value into a celsius value.
   * @param {number} kelvinParam - The kelvin value to be converted. Default param added if no param is passed.
   * @return {string} An string message with the converted values using the console log method.
   */
  kelvinToCelsius(kelvinParam = this.kelvin) {
    this.celsius = kelvinParam - 273.15;
    console.log(
      `${kelvinParam} °K were converted successfully to : ${parseFloat(
        this.celsius
      ).toFixed(2)} °C.`
    );
  }
} // End  of the class

//  Let us create the instance of this class, shall we?
let unitconverter = new TemperatureUnitConverter(10, 500);

// Let us check the initial values of both units
console.log(
  `Initial values for Both Units: °C: ${unitconverter.celsius} | °K: ${unitconverter.kelvin}`
);

unitconverter.celsiusToKelvin(); // Converting to Kelvin without params
unitconverter.kelvinToCelsius(500); // Converting to Celsius using params

// Prepare the conversion  to get 303.15 K  changin current Celsius values
unitconverter.celsius = 30;
unitconverter.celsiusToKelvin(); // Converting to Kelvin without params
