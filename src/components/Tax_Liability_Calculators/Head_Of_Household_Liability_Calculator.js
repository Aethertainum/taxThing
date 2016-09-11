'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function headOfHouseholdWrapper(income) {
  function headofHousehold(totalIncome, n) {
  var taxRate, tier, lower;

  if (totalIncome <= 13150) {
    lower = 0;
    tier = 1;
    taxRate = 0.10;
  }

  if (totalIncome > 13150 && totalIncome <= 50200) {
    lower = 13150;
    tier = 2;
    taxRate = 0.15;
  }

  if (totalIncome > 50200 && totalIncome <= 129600) {
    lower = 50200;
    tier = 3;
    taxRate = 0.25;
  }

  if (totalIncome > 129600 && totalIncome <= 209850) {
    lower = 129600;
    tier = 4;
    taxRate = 0.28;
  }

  if (totalIncome > 209850 && totalIncome <= 411500) {
    lower = 209850;
    tier = 5;
    taxRate = 0.33;
  }

  if (totalIncome > 411500 && totalIncome <= 439000) {
    lower = 411500;
    tier = 6;
    taxRate = 0.35;
  }

  if (totalIncome > 439000) {
    lower = 439000;
    tier = 7;
    taxRate = 0.396;
  }

  // Use these for debugging purposes.
  // console.log('Tier', tier);
  // console.log('-------');
  // console.log('Total Income:', totalIncome);
  // console.log('Lower:', lower);
  // console.log('Tax Rate:', taxRate);
  // console.log('Amount:', (totalIncome - lower) * taxRate);

  // Termination
  if (n < 0) {
    
  }
  // Base Case
  if (n === 0) {
    return 0;
  }

  return ((totalIncome - lower) * taxRate + headofHousehold(lower, tier - 1));
  }
  return headofHousehold(income).toFixed(2);
}


// Uncomment this to see the Married Joint Filing's taxable income
console.log('Your total joint-tax liability is:','$'+ headOfHouseholdWrapper(123212));

exports.default = headOfHouseholdWrapper;