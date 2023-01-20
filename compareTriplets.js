function compareTriplets(a, b) {
	let bob = 0;
	let alice = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] < b[i]) {
			bob++;
		} else if (a[i] > b[i]) {
			alice++;
		}
	}
	return [alice, bob];
}

console.log(compareTriplets());
