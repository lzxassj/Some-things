/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let res = 0;
  const helper = function (root, sum) {
    if (root === null) {
      return 0;
    }
    helper(root.left, sum);
    helper(root.right, sum);
    check(root, sum, 0);
  };

  const check = function (root, sum, count) {
    if (root === null) {
      return;
    }

    count += root.val;
    if (count === sum) {
      res++;
    }

    check(root.left, sum, count);
    check(root.right, sum, count);
  };
  helper(root, sum);
  return res;
};