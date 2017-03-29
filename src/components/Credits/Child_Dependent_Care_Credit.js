import React from 'react';

const DependentCredit = (props) => {
  const dependents = props.credits.dependents;
  const AGI = props.credits.AGI;
  const qualifiedExpenses = props.credits.qualifiedExpenses;
 
  const percentage = (AGI) => {
    let compare = 43001;
    let percentage = .2;
    let pass = false;
        for(let i = 0; i < 15, !pass; i++, compare-=2000, percentage+=.01) {
        if(AGI >= compare) {
          percentage -=.01;
          pass = true;
        }
    }
    return percentage;
  };

  return (
    <div>
      {'Child tax credit is: $' + (qualifiedExpenses * percentage(AGI)).toFixed(2)}
    </div>
  );
};

export default DependentCredit;
