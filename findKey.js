const findKey = (obj, callback) => {
  for (key of Object.keys(obj)) {
    let callbackResult = callback(obj[key])
    if (callbackResult) {   
      return key;
    }
  }
}

module.exports = findKey;