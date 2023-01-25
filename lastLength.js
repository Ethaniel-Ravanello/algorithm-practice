function lastLength(s) {
	let trim = s.trim();
	let split = trim.split(" ");
	let le = split.length;
	let result = "";

	for (let i = 0; i < le; i++) {
		if (split[i] === split[le - 1]) {
			result = result + split[le - 1];
		}
	}

	return result;
}

console.log(lastLength("   fly me   to   the moon  "));
