const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object, value) {
  const aok = Object.keys(object);  //get the keys in array
  for (let loop of aok) {           // iterate over the keys in array
    if (object[loop] === value) {    // compare the value of the key with the value given
      return loop;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const myCode = {
  first: "Programming is difficult",
  second: "But i am not going to relent",
  third: "Learning it is the only option for me"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(myCode, "Learning it is the only option for me"), "third");
assertEqual(findKeyByValue(myCode, "Programming is difficult"), undefined);