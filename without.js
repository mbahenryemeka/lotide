//function to generate a new array that does contain the elements in arrY that are not in arrZ
const without = function (arrY, arrZ){ // arrY is the source array while arrZ is a itemsToRemove array.
  let newArray = []; // this array will house the new output
      for (let i=0; i<arrY.length; i++){
      if (!arrZ.includes(arrY[i])){ // every element in the arrY is compared with the whole sample of arrZ to check whether arrZ contain that single element of arrY
        newArray.push(arrY[i]); // if the element is not in the arrZ, it will push that value into the newArray
      }
    }
  return newArray;
};
module.exports = without;

