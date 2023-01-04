// Binary search
// Takes a sorted array and a number
// It returns the element index being searched for

// split the arry in half
// check that index for the number
// determine if too high or too low
// repeat until element is found

const binarySearch = (list, item) => {
  //
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    //
    let mid = Math.floor((low + high) / 2);

    let guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

let list = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(list, 8));
