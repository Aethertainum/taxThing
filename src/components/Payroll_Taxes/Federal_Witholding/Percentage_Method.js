import React from 'react';
// import the tables later

//The equation goes:
// flatAmt + (pct * ( subjectToWithholding - lower ) )
const PercentageMethod = (props) => {
  const withholding = props.witholding;



  return (
    <div>
      Federal witholding amount:{' $' + ( 38.6 + (.15 * (withholding - 480) ) ).toFixed(2)}
    </div>
  );
}

export default PercentageMethod;

//Why was this on the flash cards?

// 750 Semi-monthly 2 claims: 750 - allowances = 416.6 (b) , 
// 416.6 - 96 (where did 96 come from?) = 320.6 * 10% = 32.06.
// This deviates from the formula 