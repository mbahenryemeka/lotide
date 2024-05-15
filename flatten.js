const flatten = function (array){
  let newArray = [];
  for ( let oya of array){
    if (Array.isArray(oya)){
      for(let insideoya of oya){
        newArray.push(insideoya);
      }
    }else {
      newArray.push(oya)
    }
  }
  return newArray;
};
module.exports = flatten;