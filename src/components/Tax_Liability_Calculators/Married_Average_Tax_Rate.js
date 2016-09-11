'use strict';

var _MarriedJointReturnCalculator = require('./Married_Joint_Return_Calculator');

var _MarriedJointReturnCalculator2 = _interopRequireDefault(_MarriedJointReturnCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function averageTaxRate(taxLiability, taxableIncome) {
  return taxLiability / taxableIncome;
} 

// Uncomment this to run the code and see pertinent info
console.log( 'Your Average Tax Rate is: ' + (averageTaxRate((0, _MarriedJointReturnCalculator2.default)(114706), 114706) * 100).toFixed(2) + '%');