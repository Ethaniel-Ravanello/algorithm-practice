function miniMaxSum(arr) {
	let maximum = 0;
	let minimum = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		minimum += arr[i];
	}
	for (let j = 1; j < arr.length; j++) {
		maximum += arr[j];
	}
	let result = [maximum, minimum];
	return result;
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
