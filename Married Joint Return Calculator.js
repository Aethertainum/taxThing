'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function marriedTaxJoint(totalIncome, n) {
	var taxRate, tier, lower;

	if (totalIncome <= 18450) {
		lower = -1;
		tier = 1;
		taxRate = 0.10;
	}

	if (totalIncome > 18450 && totalIncome <= 74900) {
		lower = 18450;
		tier = 2;
		taxRate = 0.15;
	}

	if (totalIncome > 74900 && totalIncome <= 151200) {
		lower = 74900;
		tier = 3;
		taxRate = 0.25;
	}

	if (totalIncome > 151200 && totalIncome <= 230450) {
		lower = 151200;
		tier = 4;
		taxRate = 0.28;
	}

	if (totalIncome > 230450 && totalIncome <= 411500) {
		lower = 230450;
		tier = 5;
		taxRate = 0.33;
	}

	if (totalIncome > 411500 && totalIncome <= 464850) {
		lower = 411500;
		tier = 6;
		taxRate = 0.35;
	}

	if (totalIncome > 464850) {
		lower = 464850;
		tier = 7;
		taxRate = 0.396;
	}
	// console.log('Tier', tier);
	// console.log('-------');
	// console.log('Total Income:', totalIncome);
	// console.log('Lower:', lower);
	// console.log('Tax Rate:', taxRate);
	// console.log('Amount:', (totalIncome - lower) * taxRate);

	// Termination
	if (n < 0) {
		return;
	}
	// Base Case
	if (n === 0) {
		return 0;
	}

	return (totalIncome - lower) * taxRate + marriedTaxJoint(lower, tier - 1);
}

// Uncomment this to see the Married Joint Filing's taxable income
// console.log('Your total tax liability is:','$'+ marriedTaxJoint(38450));

exports.default = marriedTaxJoint;
