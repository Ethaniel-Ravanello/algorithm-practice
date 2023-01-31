function removeDuplicate(head) {
	let result = [];

	for (let i of head) {
		if (result.indexOf(i) === -1) {
			result.push(i);
		}
	}
	return result;
}

console.log(removeDuplicate([1, 2, 1, 2, 2, 3, 4, 5, 5, 5, 5]));
