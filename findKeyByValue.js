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
module.exports = findKeyByValue;