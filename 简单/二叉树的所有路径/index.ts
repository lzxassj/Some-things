/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 方法一：递归
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const check = function (root, link) {
    if (root !== null) {
      link += root.val;

      if (root.left === null && root.right === null) {
        arr.push(link);
      } else {
        link += "->";
        check(root.left, link);
        check(root.right, link);
      }
    }
  };
  
  const arr = [];
  check(root, "");
  return arr;
};