function factorial(num) {
  let res = [1];
  for (let i = 2; i <= num; i++) {
    res = multiplyNumbersInArr(res, i);
  }
  return res;
}

function multiplyNumbersInArr(arr, num) {
  let carry = 0;
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i] * num + carry;
    arr[i] = product % 10;
    carry = Math.floor(product / 10);
  }

  while (carry) {
    arr.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return arr;
}

console.log(factorial(20));
// 321*5 = 615
// 456 * 9 =  4104
// [6,5,4] * 9
// [4] zvysok 5
// [4,0] zv 5
// [4,0,1] zv 4
// [4,0,1,4]
