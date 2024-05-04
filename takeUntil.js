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


const assertArraysEqual = function (arrA, arrB){
  if (eqArrays(arrA, arrB)){  //implement function resuse. the eqArrays function can compare both the length of the arrays and the elements inside the array to ascertain whether they are equal.
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${arrA} === ${arrB}`);// information to log out when arrA === arrB
  }else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${arrA} !== ${arrB}`); // information to log out when arrA !== arrB
  }
};
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};
const data1 = [1, 2, -2, 7, 2, -5, 2, 4, 5];
const data2 = [25,16,45,89,33,40,33,77,45];
const data3 = [ 14,16,-2, 10];

assertArraysEqual((takeUntil(data1, x => x < -4)), [1,2,-2,7,2]);
assertArraysEqual((takeUntil(data2, x => x === 89)), [25,16,45]);
assertArraysEqual((takeUntil(data3, x => x > 20)), [14,16,-2, 10]);
