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

//Implement assertArraysEqual which takes two arrays
let assertArraysEqual = function(arr1, arr2) {
  let arraysEqual = eqArrays(arr1, arr2);
  if (arraysEqual === true) {
    console.log(`😀👍 Array comparison passed ${arraysEqual} === true`);
  } else {
    console.log(`😫👎 Array comparison failed: ${arraysEqual} === false`);
  }
};

const takeUntil = (array, callback) => {
  let returnArray = [];
  for (let item of array) {
    if (callback(item) !== true) {
      returnArray.push(item);
    } else {
      break;
    }
  }
  return returnArray;
};


//will return a slice of the arry with elemets taken from the beginnning
//it will keep going until callbac returns truthy value