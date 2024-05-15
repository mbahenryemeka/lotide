const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);  //get the keys in array
  for (let key of keys) {           // iterate over the keys in array
    if (object[key] === value) {    // compare the value of the key with the value given
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
