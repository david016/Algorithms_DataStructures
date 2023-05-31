function canSum(target, arr) {
  if (target === 0) {
    return true;
  }
  if (target < 0) {
    return false;
  }
  for (const num of arr) {
    if (canSum(target - num, arr)) {
      return true;
    }
  }
  return false;
}

console.log(canSum(7, [5, 3, 4, 7]));
