class Master  {
  constructor(householdIncome,filingStatus,age1,age2,children) {
  this.householdIncome = householdIncome,
  this.filingStatus = filingStatus,
  this.age1 = age1,
  this.age2 = age2,
  this.adults =  0,
  this.children = children || 0,
  this.threshold = null,
  this.calcThreshold = function() {
    var amt1, amt2;
      if(this.filingStatus.toUpperCase() === 'SINGLE') {  
        this.adults = 1;
        this.threshold = this.age1 < 65? 10300 : 11850;
      }
      
      if(this.filingStatus.toUpperCase() === 'MARRIEDJOINT') {
        amt1 = this.age1 < 65? 10300 : 11550;
        amt2 = this.age2 < 65? 10300 : 11550;
        this.adults = 2;
        this.threshold = amt1 + amt2;
      }
  },
  this.twoPercentFormula = function() {
      this.calcThreshold();
    return (this.householdIncome - this.threshold) * 0.02;
  },
  this.flatAmountFormula = function() {
    return (325 * this.adults) + (162.5 * this.children);
  },
  this.singleSharedResponsibility = function() {
    var twoPct = this.twoPercentFormula();
    var flatAmt = this.flatAmountFormula();
    return twoPct > flatAmt? twoPct : flatAmt;
    };
  }
}

var test = new Master(50000,'marriedjoint',40,1);

console.log(test.singleSharedResponsibility());



