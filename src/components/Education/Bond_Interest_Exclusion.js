// Cut off
// -------
// return all interest as income

// Subject to phase-out
// --------------------
// a: proceeds exceed school costs -> subj to a 2nd formula ->return post formula post phase-out numbers
// b: proceeds do not exceed school costs -> return post phase-out numbers

// Not subjected to phase-out
// a: proceeds exceed school costs -> subjected to a scond formula -> return post formula numbers
// b: proceeds do not exceed school costs -> no tax on any interest

var _ = require('underscore');
var CalcBondInterestExclusionPhaseout = require('./Bond_Interest_Exclusion_Phaseout');


var CalcBondInterestExclusion = function(modAGI,status,principle,interest,expenses) {
  var proceeds = principle + interest;
  var phaseOutRangeBeginsAt = status.toUpperCase() !== 'MARRIEDJOINT'? 77200 : 115750;
  var eliminationBeginsAt = status.toUpperCase() !== 'MARRIEDJOINT'? 92200 : 145750;
  var proceedsExceedExpense = interest - (interest * (expenses/proceeds))
  
  if(modAGI > eliminationBeginsAt) {
    this.taxable = interest;
    this.excludable = 0;
    // The return is implicit when using the pseudoclassical instantiation style.
    // return this;
  } else if (modAGI > phaseOutRangeBeginsAt){
    if(proceeds > expenses) {
    var otherwiseExclude = proceedsExceedExpense;
     var phasedOut = new CalcBondInterestExclusionPhaseout(modAGI,status,otherwiseExclude,phaseOutRangeBeginsAt);
      _.extend(this,phasedOut);
      // return this;
    } else {
      
    }
  } else {
      this.taxable = interest - (interest * (expenses/proceeds));
      this.excludable = interest - this.taxable;
      // return this;
  }

};

// function CalcBondInterestExclusionPhaseout(modAGI,status,otherWiseExcludable,limitAmt) {
//   var obj = {}; 
//   var denom = status.toUpperCase() === 'SINGLE'? 15000 : 30000;
//   var reductionAmt = otherWiseExcludable * ((modAGI - limitAmt)/denom);
//   obj.excludable = otherWiseExcludable - reductionAmt;
//   obj.taxable = reductionAmt;

//   return obj;
// }

console.log(new CalcBondInterestExclusion(50000,'single',3500,1500,2000)); 