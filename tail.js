const tail = function(array) {
  let newArray = array.slice(1); // Remove the first element of the array
  return newArray;
};
module.exports = tail;
