const eqArrays = require('./eqArrays.js');
const assertArraysEqual = function (arrA, arrB){
  if (eqArrays(arrA, arrB)){  //implement function resuse. the eqArrays function can compare both the length of the arrays and the elements inside the array to ascertain whether they are equal.
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${arrA} === ${arrB}`);// information to log out when arrA === arrB
  }else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${arrA} !== ${arrB}`); // information to log out when arrA !== arrB
  }
};

module.exports = assertArraysEqual;