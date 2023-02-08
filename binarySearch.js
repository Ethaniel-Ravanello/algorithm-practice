// let a = ["a", "b"];
// let b = ["b", "a"];

// console.log(a === b);

function string(s) {
	let result = "";
	let split = s.split("");

	for (let i = 0; i < split.length; i++) {
		result += split[i];
		if (result === result.split("").reverse().join("") && result.length > 1) {
			return result;
		}
	}
}

console.log(string("babad"));
