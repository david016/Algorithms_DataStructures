function isPrime(n) {
  if (n == 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function isPrime2(n) {
  if (n == 1) return false;
  if (n == 2 || n == 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i <= Math.floor(Math.sqrt(n)); i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime2(121));
