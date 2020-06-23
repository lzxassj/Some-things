/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归，自底向上
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const check = function (root) {
    if (root === null) {
      return 0;
    }

    const left = check(root.left);
    const right = check(root.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }

    return 1 + Math.max(left, right);
  };

  return check(root) > -1;
};
