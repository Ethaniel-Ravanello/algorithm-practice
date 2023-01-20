function plusMinus(arr) {
	let positive = 0;
	let negative = 0;
	let zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positive += 1;
		} else if (arr[i] < 0) {
			negative += 1;
		} else if (arr[i] === 0) {
			zero += 1;
		}
	}
	let positivePlus = positive / arr.length;
	let negativePlus = negative / arr.length;
	let zeroPlus = zero / arr.length;

	return console.log(
		positivePlus.toFixed(5) +
			"\n" +
			negativePlus.toFixed(5) +
			"\n" +
			zeroPlus.toFixed(5)
	);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
