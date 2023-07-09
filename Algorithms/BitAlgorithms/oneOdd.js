// Given an array of positive integers. All numbers occur
// an even number of times except one number which occurs
// an odd number of times. Find the number in O(n) time &
// constant space.

function oneOdd(arr) {
  let res;
  return arr.reduce((previous, current) => {
    return previous ^ current;
  });
}

console.log(oneOdd([1, 1, 5, 7, 5, 9, 9]));
