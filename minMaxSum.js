function miniMaxSum(arr) {
	arr.sort();
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let max = sum - arr[0];
	let min = sum - arr[arr.length - 1];

	console.log(min, max);
}
