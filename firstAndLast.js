// function firstAndLast(nums, target) {
// 	let result = [-1, -1];

// 	for (let i = 0; i < nums.length; i++) {
// 		if (result[0] < 0 && nums[i] === target) result[0] = i;
// 		if (result[1] < 0 && nums[nums.length - i] === target)
// 			result[1] = nums[nums.length - i];
// 	}
// 	console.log(result);
// }

// firstAndLast([1], 1);

let nums = [1, 1, 2, 6, 3, 3, 3];

let numsFilter = nums.filter((num) => {
	return num !== 3;
});

console.log(numsFilter);
