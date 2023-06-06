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

console.log(trailingZeros(10));
