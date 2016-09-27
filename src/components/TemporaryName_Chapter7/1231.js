// 1231 transactions are defines as <>
// They are subjected to either 1245 or 1250 provisions

var twelveFifty = require('./1250_Recapture');
var twelveFortyFive = require('./1245_Recapture');


// Realized gain is calculated as
// ==============================
// Asset cost basis 
// -
// Depreciation (according to the depreciation methods and conventions such as MACRS or straight-line)
// =
// Adjusted basis


// Selling price 
// -
// Adjusted basis
// =
// Realized gain. (this is what will be subjected to the provisions (1245 || 1250) respective tax rates) 

// Example:
// Truck (5-year property)$10,000
// - MACRS half-year convention depreciation $6,160
// = Adjusted basis $3,840

// Selling price $7,000
// - Adjusted basis $3,840
// = Realized gain $ $3,160


// Gain on a 1231 asset is calculated as
// =====================================
// Realized gain
// -
//respective provision
// =
// 1231 gain.