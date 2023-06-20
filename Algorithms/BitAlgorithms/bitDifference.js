function bitDifference(a, b) {
  let counter = 0;
  while (a !== b) {
    if ((a & 1) !== (b & 1)) {
      counter++;
    }
    a = a >> 1;
    b = b >> 1;
  }
  return counter;
}

console.log(bitDifference(10, 20)); // 4
console.log(bitDifference(20, 25)); // 3
