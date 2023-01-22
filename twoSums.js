function twoSums() {
	let result = [];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] + nums[i + 1] === target) {
			let indexA = nums.indexOf(nums[i]);
			let indexB = nums.indexOf(nums[i + 1]);
			result.push(indexA, indexB);
		}
	}
	return result;
}

console.log(twoSums([[2, 7, 11, 15]]));
