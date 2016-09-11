var calcBondInterestExclusion = function(principle,interest,expenses) {
  var proceeds = principle + interest;
  var excludable = interest - (interest * (expenses/proceeds));
  var taxable = interest - excludable;

  return {
   excludable: excludable,
   taxable: taxable
  }
}
// console.log(calcBondInterestExclusion(3000,1000,3500));
// console.log(calcBondInterestExclusion(3000,1000,3500).excludable)
// console.log(calcBondInterestExclusion(3000,1000,3500).taxable)


// The stuff below is for testing the Bond_Exclusion_Phaseout.js function
module.exports = {
  calcBondInterestExclusion: calcBondInterestExclusion  
}