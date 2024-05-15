

const letterPositions = function(sentence) {
  const results = {};  // initialized as an empty object
  let newSentence = sentence.split("");
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] !== " ") { // ignore spaces
      if (results[newSentence[i]]) { //check whether the key exist
        results[newSentence[i]].push(i);// add the key value with the index number
      } else {
        results[newSentence[i]] = [i];  // create a key and add the key value with the index number.
      }
    }
  }
  return results;
};
module.exports = letterPositions;