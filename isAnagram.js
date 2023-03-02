function isAnagram(s, t) {
  s = s.split("").sort().join();
  t = t.split("").sort().join();
  let abcdefg;
  let testing;
  if (s === t) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram);
