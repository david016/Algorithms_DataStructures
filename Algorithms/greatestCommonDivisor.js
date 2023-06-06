function greatestCommonDivisorNaive(a, b) {
  let smaller = Math.min(a, b);
  let bigger = Math.max(a, b);
  let divisor = 1;
  for (let i = smaller; i > 1; i--) {
    if (smaller % i === 0 && bigger % i === 0) {
      divisor = i;
      return divisor;
    }
  }
  return divisor;
}

console.log(greatestCommonDivisorNaive(75, 100));
console.log(greatestCommonDivisorNaive(12, 8));
