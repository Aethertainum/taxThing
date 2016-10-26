'use strict';

// var depreciationObj = require('add a file path here for a file with all the depreciaton forumlas required into a single obj');

// Adjusted Basis is calculated as.
// ================================
// Asset cost basis 
// -
// Depreciation (according to the depreciation methods and conventions such as MACRS or straight-line)
// =
// Adjusted basis

function AdjustedBasis(assetCostBasis,assetType,depreciationObj) {
  var depreciationAmt;
    // if(assetType === ) {depreciationAmt = depreciationObj.x()}
    // if(assetType === ) {depreciationAmt = depreciationObj.y()}
    // if(assetType === ) {depreciationAmt = depreciationObj.z()}

  this.adjustedBasis = assetCostBasis - depreciationAmt;
}

module.exports = AdjustedBasis;
