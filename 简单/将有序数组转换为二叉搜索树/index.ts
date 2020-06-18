/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归（中序遍历，深度优先）
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const createBST = function (start, end) {
    if (start > end) {
      return null;
    }

    // 始终选择中间位置右边的元素作为根节点
    const mid = Math.ceil((start + end) / 2);

    // 始终选择中间位置左边的元素作为根节点
    // const mid = (start + end) / 2 >> 0;

    const node = new TreeNode(nums[mid]);
    node.left = createBST(start, mid - 1);
    node.right = createBST(mid + 1, end);

    return node;
  };

  return createBST(0, nums.length - 1);
};

/**
 * 测试用例代码
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const x = [-10, -3, 0, 5, 9];
sortedArrayToBST(x);
