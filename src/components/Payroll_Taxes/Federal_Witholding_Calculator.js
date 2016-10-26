import React from 'react';
import WitholdingChart from './Witholding_Chart';

const FederalWitholding = (props) => {
  const frequency = props.info.frequency;
  const grossPay = props.info.GI/WitholdingChart[frequency].period;     
  const allowances = props.info.allowances * WitholdingChart[frequency].amt;

  return (
    <div>
      {'Payroll subject to federal witholding: $' + ( grossPay - allowances )}
    </div>
  );
}

export default FederalWitholding;