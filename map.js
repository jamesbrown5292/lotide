
//Implement map
const map =  (wordsArray, callback) => {
  const results = [];
  for (let item of wordsArray) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
