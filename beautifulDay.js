function beautifulDays(i, j, k) {
	console.time("Running Time");
	let result = [];
	let beautiful = [];

	while (i <= j) {
		result.push(i);
		i++;
	}
	for (let l = 0; l < result.length; l++) {
		let reverse = parseFloat(
			result[l]
				.toString()
				.split("")
				.reduce((rev, char) => char + rev, "")
		);
		let hasil = (result[l] - reverse) / k;
		if (hasil % 1 === 0) beautiful.push(result[l]);
	}
	console.timeEnd("Running Time");
	return beautiful;
}

console.log(beautifulDays(20, 23, 6));
