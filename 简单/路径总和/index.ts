/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归，深度优先
 * 从根节点开始，每次经过一个节点的时候，从目标值里减去节点的值，一直到叶子节点判断目标值是不是0
 * 时间复杂度：我们访问每个节点一次，时间复杂度为 O(N) ，其中 N 是节点个数。
 * 空间复杂度：最坏情况下，整棵树是非平衡的，例如每个节点都只有一个孩子，递归会调用 N 次（树的高度），因此栈的空间开销是 O(N) 。但在最好情况下，树是完全平衡的，高度只有log(N)，因此在这种情况下空间复杂度只有 O(log(N)) 。
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }

  sum -= root.val;
  if (root.left === null && root.right === null) {
    return sum === 0;
  } else {
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
  }
};
