function birthdayCakeCandles(candles) {
	let maxNum = Math.max(...candles);
	let result = 0;

	for (let i = 0; i < candles.length; i++) {
		if (candles[i] === maxNum) {
			result++;
		}
	}
	return result;
}
