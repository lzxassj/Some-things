/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeavesOne = function (root) {
  let sum = 0;

  /**
   * 
   * @param root 当前树节点
   * @param isLeft 是否左树节点
   */
  const check = (root, isLeft) => {
    if (root !== null) {
      if (root.left === null && root.right === null && isLeft) {
        sum += root.val;
      } else {
        check(root.left, true);
        check(root.right, false);
      }
    }
  };
  check(root, false);
  return sum;
};


/**
 * 方法一：迭代
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeavesTwo = function (root) {
  let sum = 0;
  if (root === null) {
    return sum;
  }

  const queue = [root];
  while (queue.length) {
    let i = queue.length;
    while (i--) {
      const item = queue.shift();

      // 如果是左叶子节点，执行sum += item.left.val;
      if (item.left && item.left.left === null && item.left.right === null) {
        sum += item.left.val;
      } else { // 反之，吧左右树节点压入队列
        if (item.left) {
          queue.push(item.left);
        }
        if (item.right) {
          queue.push(item.right);
        }
      }
    }
  }
  return sum;
};