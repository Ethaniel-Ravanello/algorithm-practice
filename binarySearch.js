// let a = ["a", "b"];
// let b = ["b", "a"];

// console.log(a === b);

function string(s) {
	let result = [];
	let split = s.split("");

	for (let i = 0; i < split.length; i++) {
		result.push(split[i]);
		if (result === result.reverse() || result.length > 1) {
			console.log(result);
			console.log(result.reverse());
			console.log(result === result.reverse());
			break;
		}
	}
}

string("babad");
