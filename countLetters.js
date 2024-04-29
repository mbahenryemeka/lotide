const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string){
  const result = {}; 
  let single = string.split(""); // convert the string into a separate letter in array
  for( let i = 0; i < single.length; i++){
    if (single[i] !== " "){  // ignore spaces inbetween in the new array
      if(single[i]){   
        if (result[single[i]]){   // check whether the value in the index of i is already a key in the object result
          result[single[i]] += 1; // if it is a key, then add 1 to the value of the key
        }else{
          result[single[i]] = 1;  //if not a key, initialize the key with a value of 1
        }
      }
    }   
  }
  return result;
};

