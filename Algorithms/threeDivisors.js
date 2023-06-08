// Given a positive integer value N. The task is to find how many numbers
// less than or equal to N have numbers of divisors exactly equal to 3.

function threeDivisors(N) {
  let counter = 0;
  for (let i = 4; i <= N; i++) {
    if (isPrime2(Math.sqrt(i))) {
      counter++;
    }
  }
  return counter;
}

function isInt(n) {
  return n % 1 === 0;
}

function isPrime2(n) {
  if (n % 1 !== 0) return false;
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
