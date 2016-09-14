'use strict';

var MarriedTaxJoint = require('./Married_Joint_Return_Calculator');

function AverageTaxRate(taxLiability, taxableIncome) {
  this.averageTaxRate = ((taxLiability / taxableIncome) * 100).toFixed(2) + '%';
}

// For testing purposes
// var test = new AverageTaxRate(new MarriedTaxJoint(150000).marriedTaxJointLiability,150000);

// console.log(test);

module.exports = AverageTaxRate;
