/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let shorter = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    shorter = height[i] < height[j] ? height[i++] : height[j--];
    max = Math.max(max, shorter * (j - i + 1));
  }
  return max;
};

const x = maxArea([2, 3, 4, 5, 18, 17, 6]);
console.log(x);
