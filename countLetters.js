const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (let single of string) {
    if (single !== " ") {
      if (result[single]) {
        result[single] += 1;
      } else {
        result[single] = 1;
      }
    }
  }
  return result;
};


