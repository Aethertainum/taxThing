'use strict';

var _MarriedJointReturnCalculator = require('./Married Joint Return Calculator');

var _MarriedJointReturnCalculator2 = _interopRequireDefault(_MarriedJointReturnCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function averageTaxRate(taxLiability, totalIncome) {
  return taxLiability / totalIncome;
} 

// Uncomment this to run the code and see pertinent info
console.log( 'Your Average Tax Rate is: ' + (averageTaxRate((0, _MarriedJointReturnCalculator2.default)(38450), 38450) * 100).toFixed(2) + '%');