const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array){
  let newArray = array.slice(1); // Remove the first element of the array
  return newArray;
}
// Test case 
const words = ["Yo Yo","Lighthouse","Labs"];
const answer = tail(words); // tail function removes the first element in the array giving output of the second and third element.

//Apply the assertEqual function to check the actual and the expected
assertEqual(answer[0], "Lighthouse");
assertEqual(answer[1], "Labs");
assertEqual(words.length, 3);
assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0);

