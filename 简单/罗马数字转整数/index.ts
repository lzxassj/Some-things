/**
 * @param {string} s
 * @return {number}
 * 通过题目给的6种情况，可以得知，如果前面字母比后面字母小，那么就是双字母，得数规则就是后面字母减去前面字母；
 * 因为是字符串，所有可以直接通过数字索引进行长度循环，不需要split；
 */
var romanToInt = function (s) {
  const _map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let preNum = _map[s[0]],
    total = 0,
    i = 1; // 以为索引0已经在循环体外赋值给preNum，所有循环从1开始
  for (i; i < s.length; i++) {
    if (_map[s[i]] > preNum) {
      total -= preNum;
    } else {
      total += preNum;
    }
    preNum = _map[s[i]];
  }
  // 因为循环到最后一个字符串的时候，没有在循环中进行运算，所以在循环外加上最后一次preNum
  total += preNum;
  return total;
};

const s = "MMXCIV";
romanToInt(s);
