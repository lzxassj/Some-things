/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归，深度遍历
 * 每次遍历，left和right两两交换，最终返回的root就是翻转后的
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null) {
    return null;
  }
  
  [root.left, root.right] = [root.right, root.left];
  
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
