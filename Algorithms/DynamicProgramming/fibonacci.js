function fibSlow(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibSlow(n - 1) + fibSlow(n - 2);
}

console.log(fibSlow(5));
console.log(fibSlow(40));

// Memo (Top-Down )

function fibMemo(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) {
    return memo[n];
  }
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(5));
console.log(fibMemo(100));

// Tabulation - Bottom-up

function fibTabu(n) {
  let arr = new Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fibTabu(5));
console.log(fibTabu(100));

// Tabulation imrpoved

function fibTabu2(n) {
  let temp;
  let prePrevious = 0;
  let previous = 1;

  for (let i = 2; i <= n; i++) {
    temp = previous;
    previous = previous + prePrevious;
    prePrevious = temp;
  }
  return previous;
}

console.log(fibTabu2(5));
console.log(fibTabu2(100));
