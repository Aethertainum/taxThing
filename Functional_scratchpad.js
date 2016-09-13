var master =  {
  householdIncome: null,
  filingStatus: 'single',
  age1: null,
  age2: null,
  adults: this.adults || 0,
  children: this.children || 0,
  threshold: null,
  calcThreshold: function() {
    var amt1, amt2;
      if(this.filingStatus.toUpperCase() === 'SINGLE') {  
        this.adults = 1;
        this.threshold = this.age1 < 65? 10300 : 11850;
      }
      
      if(this.filingStatus.toUpperCase() === 'MARRIEDJOIN') {
        amt1 = this.age1 < 65? 10300 : 11550;
        amt2 = this.age2 < 65? 10300 : 11550;
        this.threshold = amt1 + amt2;
      }
  },
  twoPercentFormula: function() {
      this.calcThreshold();
    return (this.householdIncome - this.threshold) * 0.02;
  },
  flatAmountFormula: function() {
    return (325 * this.adults) + (162.5 * this.children);
  },
  singleSharedResponsibility: function() {
    var twoPct = this.twoPercentFormula();
    var flatAmt = this.flatAmountFormula();
    return twoPct > flatAmt? twoPct : flatAmt;
  }
};

console.log(master.singleSharedResponsibility());



