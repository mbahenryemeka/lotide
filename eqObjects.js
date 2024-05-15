const eqArrays = require('./assertEqual');
const eqObjects = function (object1, object2){
  const keysObj1 = Object.keys(object1);  //get the keys of Object1
  const keysObj2 = Object.keys(object2);  //get the keys of Object2
  if (keysObj1.length === keysObj2.length) {
    for (let key of keysObj1){
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }else {
    return false;
  }
};

module.exports = eqObjects;