/**
 * 方法一
 *
 * 如果当前值和val相等，则splice(比方法二慢的原因，进行数组操作)
 *
 * 时间复杂度：O(n)，n为数组长度
 * 空间复杂度：O(1)
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (; i < nums.length; ) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return i;
};

/**
 * 方法二
 * 时间复杂度：O(n)，n为数组长度
 * 空间复杂度：O(1)
 *
 * 效率比方法一高，效率高的原因是没有将重组数字删除（题目让我们不需要考虑数组中超出新长度后面的元素）
 * 这题和删除排序数组中的重复项相似，也是用到了快慢指针(currentIndex)，当前值和val不等，则把慢指针数值赋值为i对应的数值，慢指针往前走一步，最终currentIndex就是新数组长度
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 慢指针
  let currentIndex = 0;

  // 快指针
  let i = 0;
  for (; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }
  return currentIndex;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
removeElement(nums, val);
