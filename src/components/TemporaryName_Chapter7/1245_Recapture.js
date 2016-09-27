// Asset cost basis 
 // -
// Depreciation (using something like straight-line or MACRS)
// =
// Adjusted basis


// Selling price 
// -
// Adjusted basis
// =
// Realized gain.


// Example below.

// Truck (5-year property)$10,000
// - MACRS half-year convention depreciation $6,160
// = Adjusted basis $3,840

// Selling price $7,000
// - Adjusted basis $3,840
// = Realized gain $ $3,160


// Note: this may just be a general recapture function.
// you want to export this to be used by the various number-coded properties.
function TwelveFortyFiveCapture() {
  // return lesser of the recognized gain or the accumulated depreciation on the asset as ordinary
  // income
}

module.exports = TwelveFortyFiveCapture;
