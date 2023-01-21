function kangaroo(x1, v1, x2, v2) {
	let total1 = x1 + v1;
	let total2 = x2 + v2;
	let result1 = total1;
	let result2 = total2;
	let response = "NO";

	for (let i = 0; i < 5000; i++) {
		if (result1 === result2) {
			response = "YES";
			break;
		} else if (result1 !== result2) {
			result1 += v1;
			result2 += v2;
			response = "NO";
		}
	}
	console.log(response);
}

kangaroo(2081, 8403, 9107, 8400);
