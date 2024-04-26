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
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: arrA === arrB`);// information to log out when arrA === arrB
  }else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: arrA !== arrB`); // information to log out when arrA !== arrB
  }
};

//Two identical arrays (should pass):
assertArraysEqual([1, 2, 3], [1, 2, 3]);
//Two different arrays (should fail):
assertArraysEqual([1, 2, 3], [3, 2, 1]);
//Arrays with different lengths (should fail):
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
//Arrays with identical nested arrays (should pass):
assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]);
//Arrays with different nested arrays (should fail):
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]);
//Identical arrays with different data types (should fail):
assertArraysEqual(['1', '2', '3'], [1, 2, 3]);