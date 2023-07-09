// Given two numbers a and b, find the sum of a and b.
// Since the sum can be very large,find the sum modulo 109+7
function sumUnderModulo(a, b) {
  const mod = BigInt(1000000007);
  return (a + b) % mod;
}

console.log(sumUnderModulo(9223372036854775807n, 9223372036854775807n));

// You are given two numbers a and b. You need to find the
// multiplication of a and b under modulo M (M as 109+7).
function multiplicationUnderModulo(a, b) {
  const mod = BigInt(1000000007);
  return (a * b) % mod;
}

console.log(
  multiplicationUnderModulo(9223372036854775807n, 9223372036854775807n)
);

// Given two integers ‘a’ and ‘m’. The task is to find the
// smallest modular multiplicative inverse of ‘a’ under modulo ‘m’.
function modInverse(a, m) {
  for (let i = 1; i < m; i++) {
    if ((i * a) % m == 1) {
      return i;
    }
  }
  return -1;
}

// chat gpt version using euclidian algorithm
function modInverse(a, m) {
  let [oldR, r] = [a, m];
  let [oldS, s] = [1, 0];
  let [oldT, t] = [0, 1];

  while (r !== 0) {
    const quotient = Math.floor(oldR / r);
    [oldR, r] = [r, oldR - quotient * r];
    [oldS, s] = [s, oldS - quotient * s];
    [oldT, t] = [t, oldT - quotient * t];
  }

  if (oldR === 1) {
    // Modular inverse exists
    return ((oldS % m) + m) % m;
  } else {
    // Modular inverse does not exist
    return -1;
  }
}

const a = 4;
const m = 11;
const modularInverse = modInverse(a, m);

console.log(modularInverse);
