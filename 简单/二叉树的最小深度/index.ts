/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：迭代，广度优先
 * @param {TreeNode} root
 * @return {number}
 */
var minDepthOne = function (root) {
  if (root === null) {
    return 0;
  }

  let dep = 1,
    node;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    while (len--) {
      node = queue.shift();
      // 题目要求是到叶子节点最短距离，所以只有当left和right都为空的时候，才表示是叶子节点
      if (node && node.left === null && node.right === null) {
        return dep;
      } else {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    dep++;
  }
};

/**
 * 方法一：递归，深度优先
 * @param {TreeNode} root
 * @return {number}
 */
var minDepthTwo = function(root) {
  if(root === null) {
    return 0;
  }
  
  const m1 = minDepthTwo(root.left);
  const m2 = minDepthTwo(root.right);
  
  /**
   * root.left === null || root.right === null
   * 当left和right不同时为null时，说明至少有一个是null，直接返回大的那个，这里无论left为null还是right为null，下一轮递归返回的都是0，所以我们不需要知道m1和m2谁大，直接相加就可以
   */
  return root.left === null || root.right === null ? m1 + m2 + 1 : Math.min(m1, m2) + 1;
}

let xx = { val: 4, left: { val: 4, left: null, right: null }, right: null };
minDepthTwo(xx);
