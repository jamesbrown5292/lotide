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

module.exports = takeUntil;
//will return a slice of the arry with elemets taken from the beginnning
//it will keep going until callbac returns truthy value