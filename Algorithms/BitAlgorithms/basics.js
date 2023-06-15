// If we want to set a bit at nth position in number 'num',
// it can be done using 'OR' operator( | ). First we left
// shift '1' to n position via (1 << (n-1)) Then, use 'OR'
// operator to set bit at that position.'OR' operator is used
// because it will set the bit even if the bit is unset
// previously in binary representation of number 'num'.

// 5 - 101 --> 7 - 111
let num = 5;
num = (1 << 1) | num;
console.log(num);

// How to unset/clear a bit at n'th position in the number 'num'

// Suppose we want to unset a bit at nth position in number 'num'
// then we have to do this with the help of 'AND' (&) operator.
// First we left shift '1' to n position via (1 << (n-1)) than
// we use bitwise NOT operator '~' to unset this shifted '1'.
// Now after clearing this left shifted '1' i.e making it to '0'
// we will 'AND'(&) with the number 'num' that will unset bit at
// nth position.

// 6 - 110 --> 4 - 100
let num2 = 6;
//  (1 << 1) <=> ...010
// ~(1 << 1) <=> ...101
num2 = ~(1 << 1) & num2;
console.log(num2);

// Toggling a bit at nth position : Toggling means to turn bit
// 'on'(1) if it was 'off'(0) and to turn 'off'(0) if it was 'on'
// (1) previously. We will be using 'XOR' operator here

// 10 -> 1010
// 2  -> 0010
let num3 = 10;
let num4 = 2;
// 1000
let bitMask = 1 << 3;

console.log(num3 ^ bitMask);
console.log(num4 ^ bitMask);
