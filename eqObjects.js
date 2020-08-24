
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
/*const eqObjects = function(object1, object2) {
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
    };
    return false;
  }
};
*/
//new recursive implementation of eqObjects 

const eqObjects = function(o1, o2){
  let result = true;
  let o1keys = Object.keys(o1);
  let o2keys = Object.keys(o2);
  let o1Vals = Object.values(o1);
  let o2Vals = Object.values(o2);
  //if the key arrays are not the same length then return false
  for (let key of o1keys) {
    for (let key2 of o2keys) {
      if (o1keys.length !== o2keys.length) {
        return false;
      } else { //if the key arrays are the same length, look at the values
        //if both values are of type object
        for (let val of o1Vals) {
          for (let val2 of o2Vals) {
            if (typeof val !== "object" && typeof val2 !== "object" && val !== val2) {
              result = false;
            } else if (typeof val === "object" && typeof val2 === "object" && !Array.isArray(val) && !Array.isArray(val2)) {
              return eqObjects(val, val2);
            }
          }
        }
      }
    }
  }
  return result;
};



console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects(    { a: { y: 0, z: 1 }, b: 2 }   ,   { a: { z: 1 }, b: 2 }   )) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false