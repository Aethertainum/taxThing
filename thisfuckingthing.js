// 'use strict';

// function ThisFuckingThing(cost,month,year) {
//   this.depreciation = ;
// }


// Me being Lazy
// var string = '(1,2.461),(2,2.247),(3,2.033),(4,1.819),(5,1.605),(6,1.391),(7,1.177),(8,.963),(9,.749),(10,.535),(11,.32),(12,.107)';

// function test(arg) {
//   var string = arg.split('');
//   // console.log(string);
// for (var i = 0; i < string.length; i++) {
//   if(string[i] === '(') {
//     string[i] = '{'
//   } else if (string[i] === ')') {
//     string[i] = '}';
//   }
// }
//   return string;
// }

// console.log(test(string).join(''));


function AutomobileDeduction(automobilePrice,percentageUsedForBusiness) {

  var preBonusDepreciation = automobilePrice * (percentageUsedForBusiness / 100);
  // console.log(preBonusDepreciation);
  var remainingBasis = preBonusDepreciation * .5;
  // console.log(remainingBasis);
  var MACRSfactor = .2;


  this.deductible = (remainingBasis - (remainingBasis * MACRSfactor)) * .5;
}

var test = new AutomobileDeduction(28000,80);

// console.log(test);


// Note bonus depreciaton is calculated as 50% of asset's balance after deducting section 179.
// For example $650,000 of equipment - $500,000 = $150,000 * 50% = $75,000;


// MACRS Half year depreciation is as follows.
// $650,000 - $500,000 - $75,000 (bonus amt) = $75,000. Take the amt and multiply it by the appropriate
// half year convention rate in this case, it is 14.29% (7 year property), so 
// $75,000 * 14.29% = $10,718



function BonusDepreciation(expenseAmt) {
  var section179 = 500000;

  this.bonusDepreciation = (expenseAmt - section179) * .5;

}

var test2 = new BonusDepreciation(650000);

console.log(test2);


function MACRSHalfYearDepreciation() {
  ;
}







