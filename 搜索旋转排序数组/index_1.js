/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length - 1;
  let l = 0,
    r = n;

  if (n === 0 && nums[n] === target) {
    return n;
  }

  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    console.log(`l: ${l}, r: ${r}, mid: ${mid}`);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[n] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};

let nums = [5,1,3],
  target = 3;

console.log(search(nums, target));

// [4, 5, 6, 7, 0, 1, 2][(2, 4, 5, 6, 7, 0, 1)][
//   (39, 40, 55, 11, 21, 24, 30, 33, 35)
// ];
// [4,5,0,1,2,3]

// console.log(nums.splice(0, 2));
