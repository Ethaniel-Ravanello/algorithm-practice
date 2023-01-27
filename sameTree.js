function sameTree(p, q) {
	for (let i = 0; i < p.length; i++) {
		if (p[i] === q[i]) {
			return;
		} else {
			return false;
		}
	}
	return true;
}

console.log(sameTree([1, 1, 2, 4], [1, 2, 2, 4]));
