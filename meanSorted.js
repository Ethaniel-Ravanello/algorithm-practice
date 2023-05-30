function meanSorted(arr) {
  let sort = arr.sort((a, b) => a - b);

  let plus = sort.reduce((a, b) => a + b, 0) / sort.length;
  console.log(plus);
}

meanSorted([1, 2, 3, 4]);
