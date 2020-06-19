/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归
 * 根据二叉搜索树(BST, Binary Search Tree)的特点，我们可以分析出：
 * 1、如果p，q的值都小于root的值，那么p和q都位于左树
 * 2、如果p，q的值都大于root的值，那么p和q都位于右树
 * 3、除了1和2的情况外，说明当前root节点就是公共祖先（LCA）节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const currentVal = root.val;
  if (p.val > currentVal && q.val > currentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < currentVal && q.val < currentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};
