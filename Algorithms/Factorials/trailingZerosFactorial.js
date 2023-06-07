function trailingZeros(n) {
  let counter = 0;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
    if (fact % 10 === 0) {
      counter++;
      fact /= 10;
    }
  }
  return counter;
}
// console.log(trailingZeros(10));

function trailingZerosImproved(n) {
  if (n < 5) return 0;
  return Math.floor(n / 5) + trailingZerosImproved(Math.floor(n / 5));
}

function trailingZerosIterative(n) {
  let res = 0;
  for (let i = 5; i <= n; i *= 5) {
    res += Math.floor(n / i);
  }
  return res;
}

console.log(trailingZerosImproved(101));
console.log(trailingZerosIterative(101));
