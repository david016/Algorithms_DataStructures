// Given the first 2 terms A and B of a Geometric Series. The task is to find the Nth term of the series.
// Input:
// A = 1
// B = 2
// N = 5
// Output: 16
// Explanation: Common ratio = 2,
// Hence second term is 1*(2)(5-1) = 24 = 16 .

// Constraints:
// -100 <= A <= 100
// -100 <= B <= 100
// 1 <= N <= 5

function gPTerm(a, b, n) {
  if (n == 1) return a;

  let temp = a;
  for (let i = 2; i <= n; i++) {
    temp *= b / a;
  }
  return temp;
}
