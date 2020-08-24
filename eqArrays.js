const assertEqual = function(actual, expected) {
  //if the values are the same, return success message
  if (actual === expected) {
    console.log(`😀👍Assertion Passed: ${actual} === ${expected}`);
  } else {
  //...else return fail statement
    console.log(`😫👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

let head = function(array) {
  return array[0];
};

let tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

//if the heads and tails of the array are the same, then the arrays are the same, so we can return true.
/*let eqArrays = function(arr1, arr2) {
  let tailOne = tail(arr1).join(', '); 
  let tailTwo = tail(arr2).join(', '); //take the array that comes out of tail and turn it into a string/number
  if (head(arr1) === head(arr2) && tailOne === tailTwo) {
    return true;
  } else {
    return false;
  }
};
let upperCase = map(words, word => word[0].toUpperCase())
assertArraysEqual */

//Recursive solution to eqArrays

const eqArrays = function(a1, a2) {
  let result = true;
  for (let i = 0; i < a1.length; i++ ) {
    //if the two arrays are different lengths, result is false;
    if (a1.length !== a2.length) {
      return false; 
    };
    if (typeof a1[i] === "number" && typeof a2[i] === "number") {
      if (a1[i] !== a2[i]) {
        return false;
      }
    };
    if (typeof a1[i] === "object" && typeof a2[i] === "object") {
      if (!Array.isArray(a1[i]) && !Array.isArray(a2[i])) {
        return false;
      }
    } 
    result = eqArrays(a1[i], a2[i]);
  }
  return result;
};

module.exports = eqArrays;