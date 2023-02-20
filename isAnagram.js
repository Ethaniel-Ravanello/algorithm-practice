function isAnagram(s, t) {
  s = s.split("").sort().join();
  t = t.split("").sort().join();
  let abcdefg;
  let zero;
  let zero1;
  let zero2;
  if (s === t) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram);
