function bigInt(digits) {
	let join = digits.join("");
	let plus = BigInt(join) + BigInt(1);
	let string = plus.toString();
	let split = string.split("");

	return split;
}

console.log(bigInt([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
