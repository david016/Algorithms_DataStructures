// BRUTE FORCE

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

// console.log(canSum(7, [5, 3, 4, 7]));

// MEMO

function canSumMemo(target, arr, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (const num of arr) {
    if (canSumMemo(target - num, arr, memo) === true) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
}

// console.log(canSumMemo(7, [2, 3]));
// console.log(canSumMemo(7, [2, 4]));
// console.log(canSumMemo(7, [5, 3, 4, 7]));
// console.log(canSumMemo(8, [2, 3, 5]));
// console.log(canSumMemo(300, [7, 14]));

// TABULATION

function canSumTabu(target, arrOfNums) {
  let table = new Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    for (const num of arrOfNums) {
      if (i - num >= 0 && table[i - num]) {
        table[i] = true;
      }
    }
  }
  return table[target - 1];
}

// console.log(canSumTabu(7, [2, 3]));
// console.log(canSumTabu(7, [2, 4]));
// console.log(canSumTabu(7, [5, 3, 4, 7]));
// console.log(canSumTabu(8, [2, 3, 5]));
// console.log(canSumTabu(300, [7, 14]));
