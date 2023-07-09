function posOfRightMostDiffBit(n, m) {
  if (m === n) {
    return -1;
  }
  let counter = 1;
  while (n > 0 || m > 0) {
    if ((n & 1) !== (m & 1)) {
      return counter;
    }
    n = n >> 1;
    m = m >> 1;
    counter++;
  }
  return counter;
}
console.log(posOfRightMostDiffBit(52, 4));
