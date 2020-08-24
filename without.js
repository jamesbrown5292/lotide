//Implement without which will return a subset of a given array, removing unwanted elements.
//This function should take in  source array and a itemsToRemove array
let without = function(source, itemsToRemove) {
  //iterate through the ITR array, if item in ITR appears in source, apply a filter to source
  let newArray = source.filter(word => !itemsToRemove.includes(word));
  return newArray;
};
//return a new array with only those elements from source that are not present in the itemsToRemove array.
module.exports = without;
