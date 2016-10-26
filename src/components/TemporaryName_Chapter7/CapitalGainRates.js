// Capital Gain Rates
// ------------------


// Refer to the image of MasterData_1. This is important, because the tax brackets ranges change annually
// furthermore, the bracket rates themselves can change. The most vital information (AGI) will most
// likely need to be accessed by all functions in this program.

function CapitalGains(regularTax) {
  this.info = 'these are long-term captial gain tax percentages';
  this.longTerm = regularTax <= .15? 0 : null;

  if(regularTax > .35) {
    this.longTerm = .2;
  }
  else if (regularTax >= .25 && regularTax <= .35 ) {
    this.longTerm = .15;
  } 
}

// For testing purposes
var test = new CapitalGains(.16);

console.log(test);
module.exports = CapitalGains;

// 20% is for the top bracket people having 39.6% taxable income.
// 15% is for the people in the 25, 28, 33, and 35% brackets.
// 0% is for the people below 15% bracket.
