import React from 'react';
// import MarriedTaxJointWrapper from './MarriedTaxJoint_Return_Calculator';
// var marriedTaxJoint = require('./Married_Joint_Return_Calculator');

const AverageTaxRate = (taxLiability, taxableIncome) => {
  return (
    <div>
    { ((taxLiability / taxableIncome) * 100).toFixed(2) + '%' }
    </div>
  )
}

// For testing purposes
// const test = AverageTaxRate(MarriedTaxJoint(150000),150000);

// console.log(test);

export default AverageTaxRate;
