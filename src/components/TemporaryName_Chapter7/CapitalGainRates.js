// Capital Gain Rates
// ------------------

function CapitalGains(regularTax) {
  this.info = 'these are long-term captial gain tax percentages';
  this.longTerm = 0;

  if(regularTax > .35) {
    this.longTerm = .2;
  }
  else if (regularTax >= .15 && regularTax <= .35 ) {
    this.longTerm = .15;
  } else {
    this.longTerm = 0;
  }
}

// For testing purposes
// var test = new CapitalGains(.36);

// console.log(test);
module.exports = CapitalGains;
