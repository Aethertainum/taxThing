'use strict';

var adjustedBasis = require('');

// Realized gain is calculated as
// ==============================
// Selling price 
// -
// Adjusted basis
// =
// Realized gain. (this is what will be subjected to the provisions (1245 || 1250) respective tax rates) 

function RealizedGains(sellingPrice) {
  sellingPrice - adjustedBasis.adjustedBasis;
}

module.exports = RealizedGains;
