function containDuplicate(nums) {
	nums.sort();
	for (let i = 0; i < nums.length - i; i++) {
		if (nums[i] === 0) {
			return false;
		}
		if (nums[i] === nums[i + 1]) {
			return true;
		}
	}
	return false;
}

console.log(containDuplicate([0]));
