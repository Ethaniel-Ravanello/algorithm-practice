function breakingRecords(scores) {
	let highestScore = scores[0];
	let lowestScore = scores[0];
	let highestScoreCount = 0;
	let lowestScoreCount = 0;

	for (let i = 1; i < scores.length; i++) {
		if (scores[i] > highestScore) {
			highestScore = scores[i];
			highestScoreCount++;
		} else if (scores[i] < lowestScore) {
			lowestScore = scores[i];
			lowestScoreCount++;
		}
	}
	return [highestScoreCount, lowestScoreCount];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 60, 90]));
