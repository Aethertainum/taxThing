// Itemize state tax? reported  : not reported;


// Smallest of three? Store on obj or arr?
// 1: sales (2400) - state (300) = 100. Diff between sales and state

// 2: total itemized (6500) - standard deduction (300) = 200. Diff between itemized and standard

// 3: refund amt = 300. Compare amt of refund.


// Sales tax vs state\

function StateRefundTaxable(itemized,salesTax,stateTax,itemized,standard) {
  var taxable = itemized.toUpperCase() === 'yes'? true : false;

  if(taxable) {
      // use the three patters from above to assign values to variables;
      // compare the three values and use the minimum value.
  }
}