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
let eqArrays = function(arr1, arr2) {
  let tailOne = tail(arr1).join(', ');
  let tailTwo = tail(arr2).join(', ');
  if (head(arr1) === head(arr2) && tailOne === tailTwo) {
    return true;
  } else {
    return false;
  }
};
assertEqual(eqArrays([12, 32, 23], [12, 32, 23]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
