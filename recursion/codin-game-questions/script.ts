// recursive function
function sumRange(n: number): number {
	// base case
	if (n === 0) return n

	// recursive case
	n += sumRange(n - 1)

	// recusion has ended return
	return n;
}

const sum = sumRange(3);

// iterative funciton
function sumRangeIterative(n: number): number {
	let sum = 0;

	for (let i = n; i > 0; i--) {
		sum += i;
	}
	return sum;
}

const sum2 = sumRangeIterative(3);

// recursive function
function power(base: number, exponent: number): number {
	// base case
	if (exponent === 0) return 1

	// recursive case
	// need to call power again
	base *= power(base, exponent - 1);

	return base;
}

// iterative case
function powerIterative(base: number, exp: number): number {
	let total = base;
	if (exp === 0) return 1

	while (exp > 0) {
		total += base * base
		exp--
	}
	return total;
}

// factorial recursive
function fact(n: number): number {
	// base case
	if (n === 0) return 1

	// recursive case
	n = n * fact(n - 1)

	return n;
}

function factIterative(n: number): number {
	for (let i = n; i > 1; i--) {
		n *= i - 1;
	}
	return n
}

// next tast is # 4 and can be found at https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion// next tast is # 4 and can be found at https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
