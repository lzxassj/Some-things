/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归方法
 * 相关标签：树，深度优先搜索
 * 
 * 1. p == null && q === null，返回true
 * 2. p == null || q === null，返回false
 * 3. p.val !== q.val，返回false
 * 4. 继续搜索
 * 
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q === null) {
    return true;
  }

  if (p == null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  // 判断两棵树相同，那就要判断左右两边是否完全相同
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};