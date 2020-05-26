/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var mainIdx = 0;

  var _search = function (nums, target) {
    const idx = parseInt(nums.length / 2);

    if (nums[idx] === target) {
      return mainIdx + idx;
    }

    if (nums.length <= 1) {
      return -1;
    }

    // 左边是排好序的
    if (
      (nums[idx] > nums[idx - 1] && nums[idx - 1] >= nums[0]) ||
      nums[idx] < nums[idx - 1]
    ) {
      if (nums[idx - 1] >= target && nums[0] <= target) {
        return _search(nums.splice(0, idx), target);
      } else {
        mainIdx += idx + 1;
        return _search(nums.splice(idx + 1, nums.length - idx - 1), target);
      }
    } else if (nums[idx] <= target && nums[nums.length - 1] >= target) {
      mainIdx += idx + 1;
      return _search(nums.splice(idx + 1, nums.length - idx - 1), target);
    } else {
      return _search(nums.splice(0, idx), target);
    }
  };

  return _search(nums, target);
};
