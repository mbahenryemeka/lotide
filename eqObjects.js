const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const keysObj1 = Object.keys(object1);  //get the keys of Object1
  const keysObj2 = Object.keys(object2);  //get the keys of Object2
  if (keysObj1.length === keysObj2.length) {  //compare the length of elements
    for (let key of keysObj1) {
      if (object1[key] !== object2[key]){   // compare the values of key
        return false;
      }
      
    }
    return true;

  }
  return false;  
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);





