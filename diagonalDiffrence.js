function diagonalDifference(arr) {
	let n = arr.length;
	let lSum = 0;
	let rSum = 0;

	for (let i = 0; i < n; i++) {
		lSum += arr[i][i];
		rSum += arr[n - 1 - i][i];
	}
	return Math.abs(lSum - rSum);
}
