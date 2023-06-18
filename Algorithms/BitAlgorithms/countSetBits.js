function countSetBits(num) {
  let counter = 0;
  while (num !== 0) {
    if (num & 1) {
      counter++;
    }
    num = num >> 1;
  }
  return counter;
}
console.log(countSetBits(0));
