'use strict';
// Recall that the these parameters will be pulled from the state object, which will extend it's data from instances of other 
// classes I've created. Additionally, we may only want to have the deductible returned from this class, and not all of the other irrelevenat informatio.

function MedicalExpenses(AGI,medExpense,spouseAge1,spouseAge2) {
  var threshold = spouseAge1 >= 65 || spouseAge2 >= 65? .075 : .1;
  this.sourceClass = MedicalExpenses.prototype.constructor;
  this.threshold = threshold;
  this.deductible = medExpense - AGI * threshold;
}

// For testing purposes
var test = new MedicalExpenses(50000,4200,67,null);
console.log(test);

module.exports = MedicalExpenses;
