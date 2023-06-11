function printPrimeFactors(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      n = n / i;
      i = 1;
    }
  }
  console.log(n);
}

printPrimeFactors(45);
