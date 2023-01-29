function plusMinus(arr) {
	let plus = 0;
	let minus = 0;
	let zero = 0;
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			plus++;
		} else if (arr[i] < 0) {
			minus++;
		} else if (arr[i] === 0) {
			zero++;
		}
	}
	plus = plus / arr.length;
	minus = minus / arr.length;
	zero = zero / arr.length;

	plus = plus.toPrecision(5);
	minus = minus.toPrecision(5);
	zero = zero.toPrecision(5);
	console.log(plus);
	console.log(minus);
	console.log(zero);
}
