
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

module.exports = middle;


