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
module.exports = countOnly;



