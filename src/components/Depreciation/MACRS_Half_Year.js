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