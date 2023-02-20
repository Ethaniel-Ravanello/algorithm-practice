function isAnagram(s, t) {
  s = s.split("").sort().join();
  t = t.split("").sort().join();
  let abcdefg;
  let zero0;
  let zero1;
  let zero2;
  let zero3;
  let zero4;
  if (s === t) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram);
