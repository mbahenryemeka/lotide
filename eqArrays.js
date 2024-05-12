const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // condition will first test the length of the element inside the array.
    return false; //if not equal, it will return false and stop the execution.
  }
  // after the above code completes and the both arrays are equal in length, it will move to the next code below
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { //testing the element of both array using index with the help of the loop
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;
