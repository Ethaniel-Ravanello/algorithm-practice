function isAnagram(s, t) {
  s = s.split("").sort().join();
  t = t.split("").sort().join();
  let abcdefg;
  let abcdef1;
  if (s === t) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram);
