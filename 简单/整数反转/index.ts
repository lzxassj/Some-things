/**
 * 数学方法
 * @param {number} x
 * @return {number}
 *
 * xxx >> 0 是位移运算，0代表移动0位成整数
 * 因为考虑到数值范围[-2147483648, 2147483647]，所以运算的时候，任何一步都不能存在溢出，风险代码请看reverse_two。
 * 所以我们考虑边界值的时候应该这样（newX代表翻转后得到的新整数）：
 * 1. newX > (_max / 10) >> 0：如果部分翻转后，大于同长度的max数字，翻转后的数字肯定大于max，溢出
 * 2. (newX === (_max / 10) >> 0 && digit > 7)：因为max末尾是7，所以翻转后的数字末尾大于7，那肯定也是溢出
 * 3. newX < (_min / 10) >> 0： 如果部分翻转后，小于同长度的min数字，那么翻转后的数字肯定小于min，溢出
 * 4. (newX === (_min / 10) >> 0 && digit < -8)： 因为min末尾是8，如果前面都相等，末尾数字小于-8（入参数负数的话，取得的余数也是负数），溢出
 */
const reverse_one = (x: number): number => {
  const _max = 2147483648;
  const _min = -2147483647;

  let newX = 0,
    digit = 0;
  while (x !== 0) {
    // 如果x是负数，余数也是负数
    digit = x % 10;

    if (newX > (_max / 10) >> 0 || (newX === (_max / 10) >> 0 && digit > 7)) {
      return 0;
    } else if (
      newX < (_min / 10) >> 0 ||
      (newX === (_min / 10) >> 0 && digit < -8)
    ) {
      return 0;
    }
    newX = newX * 10 + digit;
    x = (x / 10) >> 0;
  }

  return newX;
};

/**
 * 
 * 存在溢出风险
 */
const reverse_two = (x: number): number => {
  const _max = 2147483648;
  const _min = -2147483647;

  let newX = 0;
  while (x !== 0) {
    /**
     * 这一步存在溢出风险，
     */
    newX = newX * 10 + (x % 10);

    x = (x / 10) >> 0;
  }

  return newX > _max || newX < _min ? 0 : newX;
};
