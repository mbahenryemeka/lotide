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

const middle = function (array){
  if (array.length <= 2) {
    return [];
  }else if(array.length % 2 === 1){
    return [array[Math.floor(array.length/2)]];
  }else{
    return [array[(array.length/2)-1], array[(array.length/2)]];
  }
};

assertArraysEqual(middle([1]), [2,3]); // Should fail
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]); // Should fail
assertArraysEqual(middle([1, 2, 3, 4]), [2, "string"]); // Should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass