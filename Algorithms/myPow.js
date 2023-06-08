function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  if (exponent < 0) {
    base = 1 / base;
    exponent = -exponent;
  }

  let result = 1;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }

  return result;
}
