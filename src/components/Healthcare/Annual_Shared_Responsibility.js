// Master note! add an exemption function for if the income for single is below 10,300 for single
// and below 20,600 for married. It increases at the same rate for peolpe of 65 || older.

// The cap on the amount for a family to pay is 975 for the healthcare penalty! Add funcitonality for that as well.

// All of the functions in this file need to be separated out and put into a shared health responsibility directory.
function twoPercentFormula(householdincome, threshold) {
  return (householdincome - threshold ) * .02;
}

function flatAmount(adults,children) {
  return (325 * adults) + (162.5 * children);
}

function SingleSharedResponsibility(householdincome,status,age1,age2,children) {
  var threshold, adults;
  var children = children || 0;


  // These status checkers define the adults variable and the threshold variable
  // Create a separate function for this logic. Make it look something like the following
  // func(status,age1,age2) => { adults, threshold, amt1, amt1 }
  // Since this is returning an object, maybe make it a class?
    if(status.toUpperCase() === 'SINGLE') {

     adults = 1; 
     threshold = age1 < 65? 10300 : 11850; 
    }

    if(status.toUpperCase() === 'MARRIEDJOINT') {

      age1 = age1 < 65? 10300 : 11550;
      age2 = age2 < 65? 10300 : 11550;

      adults = 2;

      threshold = age1 + age2;
    }

    var twoPct = twoPercentFormula(householdincome,threshold);

    var flatAmt = flatAmount(adults,children);

  this.AmountResponsible = twoPct > flatAmt? twoPct : flatAmt;
}

var test = new SingleSharedResponsibility(30000,'marriedjoint',37);

// console.log(SingleSharedResponsibility(30000,'marriedjoint',37))
console.log(test);





