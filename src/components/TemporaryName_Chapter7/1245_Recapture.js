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
