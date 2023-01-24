"use strict";
console.log('why is this not working');
// recursive function
function sumRange(n) {
    // base case
    if (n === 0)
        return n;
    // recursive case
    n += sumRange(n - 1);
    // recusion has ended return
    return n;
}
const sum = sumRange(3);
// iterative funciton
function sumRangeIterative(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}
const sum2 = sumRangeIterative(3);
// recursive function
function power(base, exponent) {
    // base case
    if (exponent === 0)
        return 1;
    // recursive case
    // need to call power again
    base *= power(base, exponent - 1);
    return base;
}
// iterative case
function powerIterative(base, exp) {
    let total = base;
    if (exp === 0)
        return 1;
    while (exp > 0) {
        total += base * base;
        exp--;
    }
    return total;
}
// factorial recursive
function fact(n) {
    // base case
    if (n === 0)
        return 1;
    // recursive case
    n = n * fact(n - 1);
    return n;
}
function factIterative(n) {
    for (let i = n; i > 1; i--) {
        n *= i - 1;
    }
    return n;
}
// next tast is # 4 and can be found at https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion// next tast is # 4 and can be found at https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
function all(arr, callback) {
    let copy = [...arr];
    // base case
    if (arr.length === 0)
        return true;
    // recursive case
    if (callback(copy[0])) {
        copy.shift();
        return all(copy, callback);
    }
    else {
        return false;
    }
}
// Recursive solution
function productOfArray(arr) {
    let copy = [...arr];
    // base case
    if (arr.length === 0)
        return 1;
    // recursive case
    copy.shift();
    let total = arr[0] * productOfArray(copy);
    return total;
}
console.log(productOfArray([1, 2, 3, 4, 5]));
//# sourceMappingURL=script.js.map