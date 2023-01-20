function staircase(n) {
	let result = "";

	for (let i = 0; i < n; i++) {
		if (i <= n - 1) {
			result += `*`;
		}
	}
	return result;
}

console.log(staircase(6));
