import React from 'react';

const test = (props) => {
  const rentalDays = props.rented;
  const personalDays = props.personal;
  const tenPctOfRentalDays = .1 * rentalDays;
  const greaterOf = 14 > tenPctOfRentalDays? 14 : tenPctOfRentalDays ;
  let status;

   if(rentalDays < 15) {
    status = 'personal';
   } else if(personalDays < greaterOf) {
      status = 'rental;';
   } else {
      status = 'personal/rental;';
   }

   return (
    <div>
      {status}
    </div>
   );
}

export default PropertyStatus;



