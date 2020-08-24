// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //if the values are the same, return success message
  if (actual === expected) {
    console.log(`😀👍Assertion Passed: ${actual} === ${expected}`);
  } else {
  //...else return fail statement
    console.log(`😫👎Assertion Failed: ${actual} !== ${expected}`);
  }
};
console.log(assertEqual(5, 5));
module.exports = assertEqual;


