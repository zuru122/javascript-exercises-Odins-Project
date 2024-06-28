const removeFromArray = function (array, ...remove) {
  arrayLength = array.length;
  let newArray = [];
  for (i = 0; i < arrayLength; i++) {
    //check if the current element should not be removed
    if (!remove.includes(array[i])) {
      //if it should not be removed, add it to the new array.
      newArray.push(array[i]);
    }
  }
  return newArray;
};

//expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);

// Check my code
// arrays = [1, 2, 3, 4];
// newArray = removeFromArray(arrays, 3, 2);
// console.log(newArray);

// Do not edit below this line
module.exports = removeFromArray;
