function twoOdd(arr) {
  let tempRes = 0;
  for (const num of arr) {
    tempRes = tempRes ^ num;
  }
  let firstSetBit = leastSignificantBit(tempRes);
  let res = 0;
  for (const num of arr) {
    if (num & firstSetBit) {
      res = res ^ num;
    }
  }
  console.log(res);
  console.log(res ^ tempRes);
}

console.log(twoOdd([1, 2, 2, 3, 3, 3, 3, 4, 5, 5]));

function leastSignificantBit(num) {
  return num & ~(num - 1);
}
// 00011100     00011100
// 00011011 -> ~11100100
