
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

const assertEqual = function(actual, expected) {
  //if the values are the same, return success message
  if (actual === expected) {
    console.log(`😀👍Assertion Passed: ${actual} === ${expected}`);
  } else {
  //...else return fail statement
    console.log(`😫👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(arr1, arr2) {
  let tailOne = tail(arr1).join(', ');
  let tailTwo = tail(arr2).join(', ');
  if (head(arr1) === head(arr2) && tailOne === tailTwo) {
    return true;
  } else {
    return false;
  }
};

let assertArraysEqual = function(arr1, arr2) {
  let arraysEqual = eqArrays(arr1, arr2);
  if (arraysEqual === true) {
    console.log(`😀👍 Array comparison passed ${arraysEqual} === true`);
  } else {
    console.log(`😫👎 Array comparison failed: ${arraysEqual} === false`);
  }
};
//implement a funtion middle which returns the middle value of an array
let middle = function(arr1) {
  let arrayLength = arr1.length;
  let midValue = Math.floor(arrayLength / 2);
  if (arrayLength <= 2) {
    return [];
  } else {
    if (arrayLength % 2 === 0) {
      let startIndex = midValue - 1;
      return arr1.slice(startIndex, startIndex + 2);
    } else {
      return arr1[midValue];
    }
  }
};


//Implement a count only function which takes a collection of items and return counts for a specific subset of those items

//fuction takes an array and objec
let countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);