// create a function that returns the smallest number of an array
const findSmallest = (array) => {
  let smallest = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    // compare smallest with current index
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  let newArray = [];

  for (i = 0; array.length > 0; i++) {
    // find the smallest element in the array
    smallest = findSmallest(array);
    newArray.push(array[smallest]);
    array.splice(smallest, 1);
  }
  return newArray;
};

console.log(selectionSort([9, 2, 45, 13, 16, 1, 0])); // [0, 1, 2, 9, 13, 16, 45]

