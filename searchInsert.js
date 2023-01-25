function searchInsert(nums, target) {
	let start = 0;
	let end = nums.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (start <= end) {
		if (nums[mid] > target) {
			end = --mid;
			console.log(end);
		} else if (nums[mid] < target) {
			start = ++mid;
			console.log(start);
		} else {
			return mid;
		}
	}
	return start;
}

console.log(searchInsert([1, 2, 3, 6, 8], 4));
