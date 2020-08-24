
const eqArrays = require('./eqArrays');

let assertArraysEqual = function(arr1, arr2) {
  let arraysEqual = eqArrays(arr1, arr2);
  if (arraysEqual === true) {
    console.log(`😀👍 Array comparison passed ${arraysEqual} === true`);
  } else {
    console.log(`😫👎 Array comparison failed: ${arraysEqual} === false`);
  }
};

module.exports = assertArraysEqual;
