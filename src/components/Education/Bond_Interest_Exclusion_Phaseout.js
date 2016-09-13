// This is if I want it to be a class using a certain type of instantiation style which I forget the name of.
// ==============================================================================================
// function CalcBondInterestExclusionPhaseout(modAGI,status,otherWiseExcludable,limitAmt) {
//   // These denominators are a static number determined in tax laws that may be subjected to changing annually.
//   var obj = {}; 
//   var denom = status.toUpperCase() === 'SINGLE'? 15000 : 30000;
//   var reductionAmt = otherWiseExcludable * ((modAGI - limitAmt)/denom);
//   obj.excludable = otherWiseExcludable - reductionAmt;
//   obj.taxable = reductionAmt;

//   return obj;
// }

// console.log(CalcBondInterestExclusionPhaseout(77950,'single',125,77200))

// This is if I want to have it become a class utilizing pseudoclassical instantiation styles.
// Will most likely be swapped out for ES6 syntax.
// ==============================================================================================
function CalcBondInterestExclusionPhaseout(modAGI,status,otherWiseExcludable,limitAmt) {
  var denom = status.toUpperCase() === 'SINGLE'? 15000 : 30000;
  var reductionAmt = otherWiseExcludable * ((modAGI - limitAmt)/denom);
  this.excludable = otherWiseExcludable - reductionAmt;
  this.taxable = reductionAmt;
}

// var test = new CalcBondInterestExclusionPhaseout(77950,'single',125,77200);

// console.log(test);


module.exports = CalcBondInterestExclusionPhaseout;




