function allDivisors(num) {
  if (num !== 1) {
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) console.log(i);
    }
  }
  console.log(num);
}

// allDivisors(12);

// efficient, but not in order
function allDivisors2(num) {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) {
      console.log(i);
      break;
    }
    if (num % i === 0) {
      console.log(i);
      console.log(num / i);
    }
  }
}
// allDivisors2(25);

// efficient in order
function allDivisors3(num) {
  let i;
  for (i = 1; i * i < num; i++) {
    if (num % i === 0) console.log(i);
  }
  for (i; i >= 1; i--) {
    if (num % i === 0) console.log(num / i);
  }
}
allDivisors3(25);
allDivisors3(24);
