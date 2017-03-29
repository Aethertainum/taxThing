import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
import MarriedTaxJointWrapper from './components/Tax_Liability_Calculators/Married_Joint_Return_Calculator.js';
// import PropertyStatus from './components/propertyStatus';
import DependentCredit from './components/Credits/Child_Dependent_Care_Credit';
import FederalWitholding from './components/Payroll_Taxes/Federal_Witholding/Federal_Witholding_Calculator';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { status: 'married-filing-joint', GI: 150000, AGI: 108370,
    federalWitholding: { GI: 18000, allowances: 2, frequency: 'semimonthly' },
    credits: { AGI: 18744, dependents: 1, qualifiedExpenses: 1240 }
    };

  }

  render() {
    return (
      <div>
        <MarriedTaxJointWrapper AGI={this.state.AGI} />
        <FederalWitholding info={this.state.federalWitholding} />
        <DependentCredit credits={this.state.credits} />
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
