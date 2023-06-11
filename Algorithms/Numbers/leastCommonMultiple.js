function lCMNaive(a, b) {
  return (a * b) / gCD(a, b);
}

function gCD(a, b) {
  if (b === 0) {
    return a;
  }
  return gCD(b, a % b);
}

console.log(lCMNaive(15, 6));
