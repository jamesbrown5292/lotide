//Implement a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
//create an iterateAndFlatten function to be called every time we enconuter an array
let flatten = function(twoDArray) {
  let emptyArray = [];
  //iterate through the array, if the item is a number, push it
  //..to empty array, else if it's an array...
  for (let index in twoDArray) {
    if (typeof twoDArray[index] === "number") {
      emptyArray.push(twoDArray[index]);
    //...iterate through the sub array and push the values onto empty array
    } else if (Array.isArray(twoDArray[index])) {
      for (let position in twoDArray[index]) {
        emptyArray.push(twoDArray[index][position]);
      }
    }
  }
  return emptyArray;
};

module.exports = flatten;
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
