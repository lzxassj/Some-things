/**
 * 时间复杂度：O(n)，n为数组长度
 * 空间复杂度：O(1)
 * 
 * 通过双指针的方式，进行前后对比
 * 1. 当nums长度小于2的时候，直接返回长度
 * 2. 当nums长度大于2的时候：
 *   · 用currentIndex记录慢指针对应的位置（也就是去重后的尾部）
 *   · i为快指针，快指针从索引1开始（索引0的时候，肯定不需要处理）
 *   · 快慢指针所对应的数字进行对比，如果不相等，慢指针往后移动一位，并且给慢指针的位置进行赋值
 * 
 * @param {number[]} nums
 * @return {number}
 *
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let currentIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[currentIndex] !== nums[i]) {
      nums[++currentIndex] = nums[i];
    }
  }
  return currentIndex + 1;
};

const x = [1, 1, 2];
removeDuplicates(x);
