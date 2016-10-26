import React from 'react';
// import MarriedTaxJointWrapper from './Married_Joint_Return_Calculator';
import SingleTaxWrapper from './Single_Return_Calculator';
import HeadOfHouseholdWrapper from './Head_Of_Household_Liability_Calculator';
// This calculator will call on the appropriate calculator that matches the filing status.
const MasterLiabilityCalculator = (props) => {
  const status = props.status;

  if(status === 'married-filing-joint') {
    
  }

  if(status === 'single') {

  }

  if(status === 'head of household') {

  }
}