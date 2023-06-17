// If we want to set a bit at nth position in number 'num',
// it can be done using 'OR' operator( | ). First we left
// shift '1' to n position via (1 << (n-1)) Then, use 'OR'
// operator to set bit at that position.'OR' operator is used
// because it will set the bit even if the bit is unset
// previously in binary representation of number 'num'.

function setBit(number, position) {
  let bitMask = 1 << (position - 1);
  return bitMask | number;
}
// 5 - 101 --> 7 - 111
console.log(`Setting 101 to 111: ${setBit(5, 2)}`);

// How to unset/clear a bit at n'th position in the number 'num'

// Suppose we want to unset a bit at nth position in number 'num'
// then we have to do this with the help of 'AND' (&) operator.
// First we left shift '1' to n position via (1 << (n-1)) than
// we use bitwise NOT operator '~' to unset this shifted '1'.
// Now after clearing this left shifted '1' i.e making it to '0'
// we will 'AND'(&) with the number 'num' that will unset bit at
// nth position.

function unsetBit(number, position) {
  let bitMask = 1 << (position - 1);
  return number & bitMask;
}
// 6 - 110 --> 4 - 100
console.log(`Unsetting 110 to 100: ${unsetBit(6, 3)}`);

// Toggling a bit at nth position : Toggling means to turn bit
// 'on'(1) if it was 'off'(0) and to turn 'off'(0) if it was 'on'
// (1) previously. We will be using 'XOR' operator here
function bitTogling(number, position) {
  let bitMask = 1 << (position - 1);
  return number ^ bitMask;
}
// 10 -> 1010
// 2  -> 0010
let num3 = 10;
let num4 = 2;
console.log(`Bit togling 1010 to 0010 ${bitTogling(10, 4)}`); //0010
console.log(`Bit togling 0010 to 1010 ${bitTogling(2, 4)}`); //0010

// Checking if bit at nth position is set or unset:
// 1) Left shift given number 1 by n-1 to create a number that has
// only set bit as n-th bit. temp = 1 << (n-1)
// 2) If bitwise AND of n and temp is non-zero, then result is
// SET else result is NOT SET. The bitwise AND should be between
// number, temp. As n is the bit here, not number. Simply, if
// (N & (1 << k)) > 0) its "Set".
function isSet(number, position) {
  let temp = 1 << (position - 1);
  if ((number & temp) > 0) {
    console.log("Set");
    return true;
  } else {
    console.log("Unset");
    return false;
  }
}
console.log(isSet(10, 4));

function divideBy2(num) {
  return num >> 1;
}
console.log(divideBy2(9));

function multiplyBy2(num) {
  return num << 1;
}
console.log(multiplyBy2(9));

// Find log base 2 of a 32 bit integer:
function findLog(num) {
  let counter = 0;
  while ((num >>= 1)) {
    // num = num >> 1
    counter++;
  }
  return counter;
}
console.log("Log 15 base 2: ", findLog(15));
console.log("Log 16 base 2: ", findLog(16));
console.log("Log 17 base 2: ", findLog(17));
