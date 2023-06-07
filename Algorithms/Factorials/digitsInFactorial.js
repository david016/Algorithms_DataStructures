function digitsInFactorial(N) {
  let res = 0;
  for (let i = 1; i <= N; i++) {
    res += Math.log10(i);
  }
  return 1 + Math.floor(res);
}
console.log(digitsInFactorial(5));
