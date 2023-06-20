// abc -> "", "a", "b", "ba", "c", "ca", "cb","cba"

function powerSet(str) {
  let substr = "";
  let bitSize = 1 << str.length;
  for (let i = 0; i < bitSize; i++) {
    for (let j = 0; j < str.length; j++) {
      if ((i >> j) & 1) {
        substr += str[j];
      }
    }
    console.log(substr);
    substr = "";
  }
}
powerSet("abc");
