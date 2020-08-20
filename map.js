

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

//UPDATED VERSION
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

//Implement a function that takes in a string and returns a count of each of the letters in that sentence.
let countLetters = function (sentence) {
  let returnObject = {};
  for (let letter of sentence) {
    if (returnObject[letter]) {
      returnObject[letter] += 1;
    } else {
      returnObject[letter] = 1;
    }
  }
  return returnObject;
};

let letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//takes in object and value. Reads the object's keys. If the value passed in is equal to the value at object[key], then return key
//if not, return undefine
const findKeyByValue = function(obj, val) {

  let objectKeys = Object.keys(obj);
  for (let key of objectKeys) {
    let keyName = obj[key];
    if (keyName === val) {
      return key;
    }
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //Retrieve objects' keys
  let getKeys = function(obj) {
    return Object.keys(obj);
  };

  let keys1 = getKeys(object1);
  let keys2 = getKeys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let item of keys1) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if (eqArrays(object1[item], object2[item])) {
          return true;
        }
      }
    }
    return false;
  }
};

//IMPLEMENT ASSERT OBJECTS EQUAL

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    return "`😀👍 Object comparison passed, objects are the same ";
  } else {
    return "😫👎 Array comparison failed, objects are not the same";
  }
};

//Implement map
const map =  (wordsArray, callback) => {
  const results = [];
  for (let item of wordsArray) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
let upperCase = map(words, word => word[0].toUpperCase());
console.log(assertArraysEqual(upperCase, [ 'G', 'C', 'T', 'M', 'T' ]));
