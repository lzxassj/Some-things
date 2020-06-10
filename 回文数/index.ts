/**
 * 数学方法
 * @param {number} x
 * @return {boolean}
 * 回文数的特性及时翻转后还保持一样，通过这一特点可以发现，把该数字后半段翻转后也和前半段一样，所以只需要后半段和前半段做对比
 */
const isPalindrome_one = (x: number): boolean => {
  /**
   * 必然不是回文数，直接返回false
   * 1. 小于0
   * 2. 最后一位是0，且参数不等0；因为除了0以外，其他数字都不会已0开始
   */
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let reverseNumber = 0;
  while (x > reverseNumber) {
    /**
     * 上一轮的个位数，是这一轮的十位数，所以reverseNumber乘以10，再加上x的个位数（通过10取余得出）
     */
    reverseNumber = reverseNumber * 10 + (x % 10);

    /**
     * 取出个位数后，除以十取整，得出下一轮的获取个位数的基础值
     */
    x = Math.floor(x / 10);
  }

  /**
   * 入参位数可能是偶数，可能是奇数，当遇到奇数的时候，reverseNumber除以10向上取整就可以和x做对比
   */
  return x === reverseNumber || x === Math.floor(reverseNumber / 10);
};

/**
 * 字符串方法
 * @param {number} x
 * @return {boolean}
 * 把数字转换成数组，通过reverse()函数进行数组翻转，然后再join成字符串，最后和入参做对比（可以转换成数字或字符串做对比）
 */
const isPalindrome_two = (x: number): boolean => {
  if (x < 0 || (x % 10 === 0 && x > 0)) {
    return false;
  }
  const _x = `${x}`.split("").reverse().join("");
  return parseInt(_x) === x;
  // return _x === `${x}`;
};
