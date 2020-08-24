
//Implement a function that takes in a string and returns a count of each of the letters in that sentence. 
let countLetters = function (sentence) {
  let returnObject = {};
  for (letter of sentence) {
    if (returnObject[letter]) {
      returnObject[letter] += 1;
    } else {
      returnObject[letter] = 1;
    }
  }
  return returnObject;
}
module.exports = countLetters;