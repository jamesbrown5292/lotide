//Recursive solution to eqArrays

const eqArrays = function(a1, a2) {
  let result = true;
  for (let i = 0; i < a1.length; i++) {
    //if the two arrays are different lengths, result is false;
    if (a1.length !== a2.length) {
      return false;
    }
    if (typeof a1[i] === "number" && typeof a2[i] === "number") {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    if (typeof a1[i] === "object" && typeof a2[i] === "object") {
      if (!Array.isArray(a1[i]) && !Array.isArray(a2[i])) {
        return false;
      }
    }
    result = eqArrays(a1[i], a2[i]);
  }
  return result;
};

module.exports = eqArrays;