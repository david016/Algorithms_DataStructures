function allPrimesNaive(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime2(i)) console.log(i);
  }
}

// allPrimesNaive(24);

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

// sieve of eratosthenes
function allPrimesErato(num) {
  let nums = new Array(num + 1).fill(true);
  for (let i = 2; i * i <= num; i++) {
    if (nums[i]) {
      for (let j = i * 2; j <= num; j += i) {
        nums[j] = false;
      }
    }
  }
  for (let i = 2; i < num; i++) {
    if (nums[i]) {
      console.log(i);
    }
  }
}

// allPrimesErato(35);
function allPrimesErato2(num) {
  let nums = new Array(num + 1).fill(true);
  for (let i = 2; i <= num; i++) {
    if (nums[i]) {
      console.log(i);
      for (let j = i * i; j <= num; j += i) {
        nums[j] = false;
      }
    }
  }
}

allPrimesErato2(100);
