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
