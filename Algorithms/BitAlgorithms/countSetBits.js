function countSetBitsNaive(num) {
  let counter = 0;
  while (num !== 0) {
    if (num & 1) {
      counter++;
    }
    num = num >> 1;
  }
  return counter;
}
console.log(countSetBitsNaive(0));

// Brian Kernighan’s Algorithm:
function countSetBits(num) {
  let counter = 0;
  while (num > 0) {
    num = num & (num - 1);
    counter++;
  }
  return counter;
}

console.log(countSetBits(31));

// creating lookup table
function lookUpTable() {
  let table = new Array(256);
  table[0] = 0;
  for (let i = 1; i < 256; i++) {
    table[i] = (i & 1) + table[i >> 1];
  }
  return table;
}

function countSetBitsWithtable(num) {
  let table = lookUpTable();
  return (
    table[num & 255] +
    table[(num >> 8) & 255] +
    table[(num >> 16) & 255] +
    table[num >> 24]
  );
}
console.log(countSetBitsWithtable(17));
console.log(countSetBitsWithtable(31));
console.log(countSetBitsWithtable(255));
console.log(countSetBitsWithtable(256));

// count   1        3             8
// 0 1     2    3    4    5    6    7
// 0 0001 0010 0011 0100 0101 0110 0111

//  8    9    10   11   12   13   14   15
// 1000 1001 1010 1011 1100 1101 1110 1111

// You are given a number N. Find the total count of set bits
// for all numbers from 1 to N(both inclusive).
function totalSetBits(N) {
  if (N <= 0) return 0;
  let result = 0;

  let log = findLog(N);
  let lastPowerOf2 = 1 << log;

  let diff = N - lastPowerOf2 + 1;
  N = N ^ lastPowerOf2;

  result += (log * lastPowerOf2) / 2 + diff + totalSetBits(N);

  return result;
}

console.log(totalSetBits(21));

function findLog(num) {
  let counter = 0;
  while ((num >>= 1)) {
    counter++;
  }
  return counter;
}
// 0000 0
// 0001 1
// 0010 2
// 0011 3
// 0100 4
// 0101 5
// 0110 6
// 0111 7
function totalSetBits2(num) {
  let bit = 1;
  let res = 0;
  let frequencyPattern = 2;
  let remainder;
  while (bit <= num) {
    res += (Math.floor((num + 1) / frequencyPattern) * frequencyPattern) / 2;
    remainder = ((num + 1) % frequencyPattern) - frequencyPattern / 2;
    if (remainder > 0) res += remainder;
    bit *= 2;
    frequencyPattern *= 2;
  }
  return res;
}
console.log(totalSetBits2(5));
console.log(totalSetBits2(10));

// optimal solution
function countSetBitsOptimal(num) {
  //Ignoring 0 as all the bits are unset.
  num++;
  let count = 0;

  //Counting set bits from 1 to n.
  for (let x = 2; x / 2 < num; x = x * 2) {
    //Total count of pairs of 0s and 1s.
    let quotient = Math.floor(num / x);
    //quotient gives the complete count of pairs of 1s.
    //Multiplying it with the (current power of 2)/2 will give
    //the count of 1s in the current bit.
    count += quotient * (x / 2);

    let remainder = num % x;
    //If the count of pairs is odd then we add the remaining 1s
    //which could not be grouped together.
    if (remainder > x / 2) count += remainder - x / 2;
  }

  //returning count of set bits.
  return count;
}
console.log(countSetBitsOptimal(5));
console.log(countSetBitsOptimal(10));
