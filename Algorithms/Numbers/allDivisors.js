function allDivisors(num) {
  if (num !== 1) {
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) console.log(i);
    }
  }
  console.log(num);
}

allDivisors(12);
