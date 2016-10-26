'use strict';
// 1231 transactions are defined as <>. They are used in trade, held 1+ yrs.
// They are subjected to either 1245 or 1250 recapture provisions

// Net gains on 1231 assets get preferrential tax treatment.

// Net losses are treated as ORDINARY losses, rather than capital losses..
// this allows you to deduct beyond the normal 3k deduction permitted to CAPITAL losses.

var twelveFifty = require('./1250_Recapture');
var twelveFortyFive = require('./1245_Recapture');

// Gain on a 1231 asset is calculated as
// =====================================
// Realized gain
// -
// lesser of respective provision rates (1250/1245) or the accumulated depreciation on the asset.
// =
// 1231 gain.

function twelveThirtyOneGain(realizedGain,recapture) {
 this.recapture = 
}

module.exports = twelveThirtyOneGain;
