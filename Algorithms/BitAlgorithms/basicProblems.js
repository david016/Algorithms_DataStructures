// Given a number N, the task is to check whether the given number
// is a power of 2 or not.

function isPowerOf2(number) {
  while (number > 1) {
    if (number & 1) return false;
    number = number >> 1;
  }
  return true;
}
console.log(isPowerOf2(8)); // 1000
console.log(isPowerOf2(3)); // 0011

function isPowerOf2Clever(number) {
  // 1000 & 0111 === 0
  return (number & (number - 1)) === 0;
}
console.log(isPowerOf2Clever(8)); // 1000
console.log(isPowerOf2Clever(3)); // 0011

// Given a number N, find the most significant set bit in
// the given number.
function mostSignificantBit(num) {
  // 42 (101010) -> 32 (100000)
  return 1 << findLog(num);
}

console.log(mostSignificantBit(42));

function findLog(num) {
  let counter = 0;
  while ((num >>= 1)) {
    counter++;
  }
  return counter;
}
