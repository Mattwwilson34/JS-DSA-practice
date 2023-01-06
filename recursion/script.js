const fact = (x) => {
  if (x === 1) return 1;
  return x * fact(x - 1);
};

// console.log(fact(3));

const sum = (array) => {
  if (array.length <= 0) return 0;
  return array[0] + sum(array.slice(1));
};

// console.log(sum([2, 4, 5]));

const countItems = (array) => {
  if (array.length <= 0) return 0;
  return 1 + countItems(array.slice(1));
};

// console.log(countItems([1, 4, 6]));

// chatGPT code
function findMax(arr) {
  // base case: if the array has only one element, return that element
  if (arr.length == 1) {
    return arr[0];
  }

  // recursive case: compare the first element in the array with the maximum of the rest of the array
  let maxRest = findMax(arr.slice(1));
  //
  if (arr[0] > maxRest) {
    return arr[0];
  } else {
    return maxRest;
  }
}

// Remember when thinking about recursive functions
// you will be building up a call stack of function
// calls that will then work backwards to get you
// to the correct answer.

// #5 | arr[0] = 4 | arr.length === 1      --> return 4 which is arr[0]
// #4 | arr[0] = 2 | maxRest = 4 --> 4 > 2 --> return 4 which is maxRest
// #3 | arr[0] = 1 | maxRest = 4 --> 4 > 1 --> return 4 which is maxRest
// #2 | arr[0] = 5 | maxRest = 4 --> 4 < 5 --> return 5 which is arr[0]
// #1 | arr[0] = 3 | maxRest = 5 --> 5 > 3 --> return 5 which is maxRest

// The above represents how the function calls are added to the call
// stack until we hit the base case and then the comparisons occur as
// we pop each function off the call stack.
