function firstAndLast(nums, target) {
	let result = [-1, -1];

	for (let i = 0; i < nums.length; i++) {
		if (result[0] < 0 && nums[i] === target) result[0] = i;
		if (result[1] < 0 && nums[nums.length - i] === target)
			result[1] = nums.length - i;
	}
	return result;
}

console.log(firstAndLast([1], 1));
