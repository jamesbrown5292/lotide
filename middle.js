
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

//test cases
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
