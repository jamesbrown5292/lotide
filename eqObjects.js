const eqObjects = function(o1, o2) {
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

module.exports = eqObjects;

