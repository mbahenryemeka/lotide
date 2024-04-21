const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");