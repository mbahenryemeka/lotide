const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F6D1} \u{1F6D1} \u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Ogam_na_south", "Ogam_na_chinko");
assertEqual("Let's play", "Let us play");
assertEqual(23,1925);



const countOnly = function (allItems, itemsToCount) {
  const results = {};
for (const item of allItems) {  // loop through the allitem array sampling them one by one.
    if (itemsToCount[item]) {  //check if the item exist in the itemToCount and set it to true. If the value is false or undefined, the code block will be skipped.
      if (results[item]) {  //check whether the item already has a count in the result object. 
        results[item] += 1;  // if yes, increment the count by 1.
      }else {
        results[item] = 1;  // if no, create a new key for the item and initialize it with 1.
      }
    }
  }
  return results;
};





const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


