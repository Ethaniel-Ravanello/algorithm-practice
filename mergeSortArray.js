function mergeSortArrat(arr1, arr2) {
	let filter1 = arr1.filter((num) => {
		return num !== 0;
	});
	let filter2 = arr2.filter((num) => {
		return num !== 0;
	});

	let combine = filter1.concat(filter2);
	let sortCombine = combine.sort();

	return sortCombine;
}

console.log(mergeSortArrat([1, 2, 3, 0, 0, 0], [2, 5, 6]));
