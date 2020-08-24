const eqObjects = require('./eqObjects')

//IMPLEMENT ASSERT OBJECTS EQUAL

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    return "`😀👍 Object comparison passed, objects are the same ";
  } else {
    return "😫👎 Array comparison failed, objects are not the same";
  }
};

module.exports = assertObjectsEqual;
