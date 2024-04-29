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


const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB)) {  //implement function resuse. the eqArrays function can compare both the length of the arrays and the elements inside the array to ascertain whether they are equal.
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${arrA} === ${arrB}`);// information to log out when arrA === arrB
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${arrA} !== ${arrB}`); // information to log out when arrA !== arrB
  }
};

const letterPositions = function(sentence) {
  const results = {};  // initialized as an empty object
  let newSentence = sentence.split("");
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] !== " ") { // ignore spaces
      if (results[newSentence[i]]) { //check whether the key exist
        results[newSentence[i]].push(i);// add the key value with the index number
      } else {
        results[newSentence[i]] = [i];  // create a key and add the key value with the index number.
      }
    }
  }
  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("why me lord").h, [1]);
assertArraysEqual(letterPositions("jesus is lord").i, [3]);