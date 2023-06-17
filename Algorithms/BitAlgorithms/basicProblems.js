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
