/**
 * @callback onProjectionCompleted
 * @param {boolean} isHighSalesPerson - Employee's current goal achievement status
 */

"use strict";
let initYear = 2016;
const HIGH_SALES_COMMISSION = 0.12;
const LOW_SALES_COMMISSION = 0.04;

// This callback function will display employee's yearly salary projections with bonus included
const displayProjectionCallback = (employeeStipend, year) => {
  console.log(
    `| Projected Year ${year} | Salary with Bonus: ${employeeStipend} dollars |`
  );
};

// This second callback will display a congrats message if employee has reached
// the top sales goal in an specific moment of the projection if he or she maintains
// the amount of sales or the average provided by them when calling the main function.
const onProjectionCompleted = (isHighSalesPerson) => {
  if (isHighSalesPerson) {
    console.log(
      "Congrats, You are one of the Top Salesperson within the company."
    );
  }
};

/**
 * @param {number} employeeStipend - Employee's current based Earnings.
 * @param {number} yearlyEmolumentIncrement - Yearly Emolument increment.
 * @param {string} employeeName - Employee's Full Name.
 * @param {number} projectedYears - Years to be projected.
 * @param {number} yearlySalesAvg - Employee's yearly sales average.
 * @param {onProjectionCompleted} callback - Confirms if employee reached sales Goal
 *
 */
const closure = (
  employeeStipend,
  yearlyEmolumentIncrement,
  employeeName,
  projectedYears,
  yearlySalesAvg,
  onProjectionCompleted
) => {
  let i = 1; // counter to break the while loop iteration
  let salesCommission = 0; // sales comission earned by employee
  let isHighSalesPerson = false; // User starts as not a high sales person

  //If employee's sales average per year is greater than 250, he gets
  // a high sales comission of 12% of the regular salary otherwise
  // the employee will get a 4% of the regular salary
  if (yearlySalesAvg > 250) {
    salesCommission = yearlySalesAvg * HIGH_SALES_COMMISSION;
  } else {
    salesCommission = yearlySalesAvg * LOW_SALES_COMMISSION;
  }
  // Let's set the isHighSalesPerson bool variable to the adecuate value
  isHighSalesPerson =   yearlySalesAvg > 250 ? true : false;
  console.log(`Dear ${employeeName}:`);
  console.log(
    "Please find below the yearly sales bonus projections for your profile."
  );
  // We will iterate the amount of projected years making these calculations
  // and calling the callback function within this closure to have global access
  // to some of the main function properties or methods
  while (i <= projectedYears) {
    employeeStipend += yearlyEmolumentIncrement + salesCommission;
    initYear += 1;
    displayProjectionCallback(employeeStipend, initYear);
    i += 1;
  }
  // Once we have completed the projection per year, we need to call another
  // callback fn that will display a msg congratulating the employee if this
  //person were able to be a High Sales Person during these years based on the
  // historical numbers provided as average in the main function parameters
  onProjectionCompleted(isHighSalesPerson);
};

//Time to call the closure o'er here, folks, this will be awesome!
closure(2300, 100, "Brendan Eich", 4, 300, onProjectionCompleted);
closure(1500, 70, "Evan You", 5, 400, onProjectionCompleted);
