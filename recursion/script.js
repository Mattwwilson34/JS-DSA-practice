const fact = (x) => {
  if (x === 1) return 1;
  return x * fact(x - 1);
};

// console.log(fact(3));

const sum = (array) => {
  if (array.length <= 0) return 0;
  console.log(array);
  return array[0] + sum(array.slice(1));
};

// console.log(sum([2, 4, 5]));

const countItems = (array) => {
  if (array.length <= 0) return 0;
  console.log(array);
  return 1 + countItems(array.slice(1));
};

console.log(countItems([1, 4, 6]));
