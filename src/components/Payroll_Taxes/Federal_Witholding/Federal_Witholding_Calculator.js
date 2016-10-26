import React, { Component } from 'react';
import WitholdingChart from './Witholding_Chart';
import PercentageMethod from './Percentage_Method';


//Maybe change this back to a functional component. Each section's
//component that handles data entry should be classes, so they can re-render on 
// input changes. Find out if the children that re-render need to be classes to re-render as well.
class FederalWitholding extends Component {
  constructor(props) {
    super(props);

    const frequency = this.props.info.frequency;
    const grossPay = this.props.info.GI/WitholdingChart[frequency].period;     
    const allowances = props.info.allowances * WitholdingChart[frequency].amt;
    const subjectToWitholding = grossPay - allowances;

    this.state = { subjectToWitholding };
  }

  render() {
    return (
      <div> 
        Payroll subject to federal witholding:{' $' + this.state.subjectToWitholding}
        <PercentageMethod witholding={this.state.subjectToWitholding} />
      </div>
    );
  }
}

export default FederalWitholding;