var interestExclusion = require('./Bond_Interest_Exclusion.js');

// This variable is being assigned to the calcBondInterestExclusion function's returned object's excludable value.
// This is for testing purposes and is not ideal. We want this information thrown as parameters to come from a master location.
// such as a state or object.
var otherWiseExcludable = interestExclusion.calcBondInterestExclusion(3000,1000,3500).excludable;
function calcBondInterestExclusionPhaseout(modAGI,status) {
  var denom = status.toUpperCase() === 'SINGLE'? 15000 : 30000;
  var limitAmt = status.toUpperCase() !== 'MARRIEDJOINT'? 77200: 115750;
  var reductionAmt = otherWiseExcludable * ((modAGI - limitAmt)/denom);

  return {
    excludable: otherWiseExcludable - reductionAmt,
    taxable: reductionAmt
  }
}
console.log(calcBondInterestExclusionPhaseout(77950,'single'))