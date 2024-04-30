const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  if (arr1.length !== arr2.length){ // condition will first test the length of the element inside the array.
    return false; //if not equal, it will return false and stop the execution. 
  }
  // after the above code completes and the both arrays are equal in length, it will move to the next code below 
  for (let i = 0; i < arr1.length; i++){  
    if (arr1[i] !== arr2[i]){ //testing the element of both array using index with the help of the loop
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; 
  const result = eqObjects(actual, expected);
  if (result) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const obj1 = { a: '1', b: 2 };
const obj2 = { a: '1', b: 2 };
assertObjectsEqual(obj1, obj2);
