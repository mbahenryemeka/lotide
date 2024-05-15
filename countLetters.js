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

module.exports = countLetters;
