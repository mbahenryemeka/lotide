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

//function to generate a new array that does contain the elements in arrY that are not in arrZ
const without = function (arrY, arrZ){ // arrY is the source array while arrZ is a itemsToRemove array.
  let newArray = []; // this array will house the new output
      for (let i=0; i<arrY.length; i++){
      if (!arrZ.includes(arrY[i])){ // every element in the arrY is compared with the whole sample of arrZ to check whether arrZ contain that single element of arrY
        newArray.push(arrY[i]); // if the element is not in the arrZ, it will push that value into the newArray
      }
    }
  return newArray;
};


assertArraysEqual(without([1,2,3,4,5], [1,3]),[2,4,5]); // should pass
assertArraysEqual(without([6,7,9,"atom"],[2,3,4]), [3,5]);// should fail