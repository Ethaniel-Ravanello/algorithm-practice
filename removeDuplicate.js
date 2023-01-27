function removeDuplicate(head) {
	let result = [];

	for (let i of head) {
		if (result.indexOf(i) === -1) {
			result.push(i);
		}
	}
	return result;
}

console.log(removeDuplicate([1, 1, 2, 3, 4, 6, 6, 7, 8]));
