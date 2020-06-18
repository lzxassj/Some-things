/**
 * 暴力法，依次对比
 * @param {string[]} strs
 * @return {string}
 *
 */
var longestCommonPrefixOne = function (strs) {
  // 当入参长度为0或为空，直接返回
  if (!strs || strs.length === 0) {
    return "";
  }

  // 初始化公共前缀为第一个元素值
  let str = strs[0];

  // strs中的元素两两对比
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // 循环字符串长度（不超过str长度和当前strs元素长度）,两两对比
    for (j = 0; j < str.length && j < strs[i].length; j++) {
      // 当找到不相等字符串时，break循环，因为公共部分已经产生
      if (str[j] !== strs[i][j]) {
        break;
      }
    }

    if (j === 0) {
      // 如果j还是为0，说明没有公共部分，break外层循环
      str = "";
      break;
    } else {
      // 反之，通过j的数值，来截取公共前缀
      str = str.substr(0, j);
    }
  }
  return str;
};

/**
 * 二分法
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixTwo = function (strs) {
  // 当入参长度为0或为空，直接返回
  if (!strs || strs.length === 0) {
    return "";
  }

  // 初始化最小长度
  let minLen = strs[0].length;

  // 循环找出strs中最小长度数值，因为最大公共前缀肯定不会超过最小字符串长度
  let i=0;
  for (;i<strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }

  let [low, high] = [0, minLen]; // 双指针初始化
  let mid = 0;
  while (low <= high) {
    // 二分标志位计算
    mid = ((low + high) / 2) >> 0;
    if (isCommonPreFix(strs, mid)) { // 如果前半段返回true，说明前半段字符串是所有字符串的公共前缀（部分或者正好），所以舍弃前半段，在后半段进行二分，从mid+1到high进行二分
      low = mid + 1;
    } else { // 否则说明前半段字符串有多余的字符(全都不是或者部分)，所以舍弃后半段，继续在前半段进行二分，从0到mid-1进行二分
      high = mid - 1;
    }
  }
  // 最后0到high的字符串就是最大公共前缀，high为0，说明公共前缀
  return strs[0].substr(0, high);
};

/**
 * 通过正则，匹配开始字符串
 * @param strs 
 * @param mid 
 * t
 */
var isCommonPreFix = function (strs, mid) {
  const str = strs[0].substr(0, mid),
    reg = new RegExp(`^${str}`);
  for (let i = 0; i < strs.length; i++) {
    if (!strs[i].match(reg)) {
      return false;
    }
  }
  return true;
};
