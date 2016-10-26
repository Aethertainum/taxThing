function BonusDepreciation(expenseAmt) {
  var section179 = 500000;

  this.bonusDepreciation = (expenseAmt - section179) * .5;

}

// For Testing purposes
// var test2 = new BonusDepreciation(650000);

// console.log(test2);
module.exports = BonusDepreciation;
