import React from 'react';
import ReactDOM from 'react-dom';
 
import MarriedTaxJointWrapper from './components/Married_Joint_Return_Calculator.js'

// Create a new component. 
// This component should produce some HTML.
const App = () => {
  return (
    <div>
      <MarriedTaxJointWrapper />
    </div>
  ); 
}

// Add this component's generated HTML and render it
// To the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 