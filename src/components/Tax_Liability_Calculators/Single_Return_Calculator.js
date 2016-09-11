
function SingleTaxWrapper(income) {
  function SingleTax(totalIncome, n) {
  var taxRate, tier, lower;

  if (totalIncome <= 9225) {
    lower = 0;
    tier = 1;
    taxRate = 0.10;
  }

  if (totalIncome > 9225 && totalIncome <= 37450) {
    lower = 9225;
    tier = 2;
    taxRate = 0.15;
  }

  if (totalIncome > 37450 && totalIncome <= 90750) {
    lower = 37450;
    tier = 3;
    taxRate = 0.25;
  }

  if (totalIncome > 90750 && totalIncome <= 189300) {
    lower = 90750;
    tier = 4;
    taxRate = 0.28;
  }

  if (totalIncome > 189300 && totalIncome <= 411500) {
    lower = 189300;
    tier = 5;
    taxRate = 0.33;
  }

  if (totalIncome > 411500 && totalIncome <= 413200) {
    lower = 411500;
    tier = 6;
    taxRate = 0.35;
  }

  if (totalIncome > 413200) {
    lower = 413200;
    tier = 7;
    taxRate = 0.396;
  }

  // Use these for debugging purposes.
  // console.log('Tier', tier);
  // console.log('-------');
  // console.log('Total Income:', totalIncome);
  // console.log('Lower:', lower);
  // console.log('Tax Rate:', taxRate);
  // console.log('Amount:', (totalIncome - lower) * taxRate);

  // Termination
  if (n < 0) {
    return;
  }
  // Base Case
  if (n === 0) {
    return 0;
  }

  return ((totalIncome - lower) * taxRate + SingleTax(lower, tier - 1));
  }
  return SingleTax(income).toFixed(2);
}

console.log('Your total single-tax liability is:','$'+ SingleTaxWrapper(68500));

