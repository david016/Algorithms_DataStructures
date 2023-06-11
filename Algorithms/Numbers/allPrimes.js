function allPrimesNaive(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime2(i)) console.log(i);
  }
}

allPrimesNaive(24);

function isPrime2(num) {
  if (num == 1) return false;
  if (num == 2 || num == 3) return true;
  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i <= Math.floor(Math.sqrt(num)); i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}
