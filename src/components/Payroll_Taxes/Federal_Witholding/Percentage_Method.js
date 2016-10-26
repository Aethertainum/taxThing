import React from 'react';
// import the tables later

//The equation goes:
// flatAmt + (pct * ( subjectToWithholding - lower ) )
const PercentageMethod = (props) => {
  const withholding = props.witholding;



  return (
    <div>
      Federal witholding amount:{' $' + ( 17.8 + (.15 * (withholding - 222) ) ).toFixed(2)}
    </div>
  );
}

export default PercentageMethod;