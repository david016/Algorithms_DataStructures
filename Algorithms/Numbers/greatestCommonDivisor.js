function greatestCommonDivisorNaive(a, b) {
  let smaller = Math.min(a, b);
  let bigger = Math.max(a, b);
  let divisor = 1;
  for (let i = smaller; i > 1; i--) {
    if (smaller % i === 0 && bigger % i === 0) {
      divisor = i;
      return divisor;
    }
  }
  return divisor;
}

function GCDEuclidian(a, b) {
  let smaller = Math.min(a, b);
  let bigger = Math.max(a, b);

  while (smaller !== 1) {
    if (bigger % smaller === 0) {
      return smaller;
    }

    let temp1 = bigger - smaller;
    bigger = Math.max(smaller, temp1);
    smaller = Math.min(smaller, temp1);
  }
  return smaller;
}

function GCDEuclidianOptimised(a, b) {
  let smaller = Math.min(a, b);
  let bigger = Math.max(a, b);

  while (smaller !== 1) {
    if (bigger % smaller === 0) {
      return smaller;
    }
    [smaller, bigger] = [bigger % smaller, smaller];
  }
  return smaller;
}

function GCDBest(a, b) {
  if (b === 0) {
    return a;
  }
  return GCDBest(b, a % b);
}

console.log(GCDBest(28, 17));
