function median(arr) {
  let sort = arr.sort((a, b) => a - b);
  let result = [];
  let mid = Math.floor((sort.length - 1) / 2);

  if (sort.length % 2 === 0) {
    result.push(sort[mid]);
    result.push(sort[mid + 1]);
  } else {
    result.push(sort[mid]);
  }
  console.log(result);
  console.log(sort);
  console.log(mid);
}

median([2, 3, 6, 72, 8, 1, 5]);
