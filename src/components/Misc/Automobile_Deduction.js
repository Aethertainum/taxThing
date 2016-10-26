function AutomobileDeduction(automobilePrice,percentageUsedForBusiness) {

  var preBonusDepreciation = automobilePrice * (percentageUsedForBusiness / 100);
  // console.log(preBonusDepreciation);
  var remainingBasis = preBonusDepreciation * .5;
  // console.log(remainingBasis);
  var MACRSfactor = .2;


  this.deductible = (remainingBasis - (remainingBasis * MACRSfactor)) * .5;
}

// For testing purposes
// var test = new AutomobileDeduction(28000,80);

// console.log(test);
module.exports = AutomobileDeduction;
