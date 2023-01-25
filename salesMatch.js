function salesMatch(ar) {
	ar.sort((a, b) => a - b);
	let counter = 0;

	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === ar[i + 1]) {
			counter++;
			i++;
		}
	}
	return counter;
}
