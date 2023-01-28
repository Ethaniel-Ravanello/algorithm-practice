function addTwoNumbers(l1, l2) {
	let re1 = l1.reverse().toString().replaceAll(",", "");
	let re2 = l2.reverse().toString().replaceAll(",", "");

	let int1 = parseInt(re1, 10);
	let int2 = parseInt(re2, 10);

	let plus = int1 + int2;

	let final = Array.from(String(plus), Number).reverse();

	console.log(final);
}

addTwoNumbers([2, 4, 3], [5, 6, 4]);
