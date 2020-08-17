// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //if the values are the same, return success message
  if(actual === expected) {
    console.log(`😀👍Assertion Passed: ${actual} === ${expected}`)
  } else {
  //...else return fail statement
    console.log(`😫👎Assertion Failed: ${actual} !== ${expected}`)
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("James's Laptop", "James's Laptop");
assertEqual("Hello", "Bonjour");
assertEqual(12, 12);
assertEqual(12, 19);


