/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：广度优先搜索
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) {
    return [];
  }
  const queue = [root],
    _return = [];
  let len = 0;
  while (queue.length) {
    len = queue.length;
    const arr = [];
    while (len--) {
      root = queue.shift();
      arr.push(root.val);

      if (root.left) {
        queue.push(root.left);
      }
      if (root.right) {
        queue.push(root.right);
      }
    }
    _return.unshift(arr);
  }
  return _return;
};

/**
 * 测试用例代码
 */
const x = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
};
levelOrderBottom(x);
