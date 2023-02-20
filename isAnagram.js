function isAnagram(s, t) {
  s = s.split("").sort().join();
  t = t.split("").sort().join();
  let abcdefg;
  let zero;
  if (s === t) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram);
