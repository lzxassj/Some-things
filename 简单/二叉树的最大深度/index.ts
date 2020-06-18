/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一： 递归，深度遍历
 * 时间复杂度：O(n)
 * 空间复杂度： O(log⁡(n))
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthOne = function (root) {
  if(root === null) {
    return 0;
  }
  
  // 递归left和right，并且取值大+1作为返回值
  return 1 + Math.max(maxDepthOne(root.left), maxDepthOne(root.right))
  
};

/**
 * 方法二：迭代，广度优先遍历
 */
var maxDepthTwo = function (root) {
  if (root === null) {
    return 0;
  }
  const queue = [root];
  let dep = 0,
    len = 0,
    item;

  while (queue.length) {
    len = queue.length;
    /**
     * 通过len获取每一层的元素个数，并迭代减1，直至0表示当前层遍历结束
     */
    while (len--) {
      // 取出头部元素(表示当前层)
      item = queue.shift();

      // 往队列尾部增加元素，这些元素表示下一层的内容
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }
    // 每一层遍历完后加1
    dep++;
  }
  return dep;
};


/**
 * 测试用例代码
 */
const x = {
  val: 5,
  left: {
    val: 5,
    left: { val: 5, left: null, right: null },
    right: null,
  },
  right: {
    val: 5,
    left: {
      val: 5,
      left: null,
      right: { val: 5, left: { val: 5, left: null, right: null }, right: null },
    },
    right: null,
  },
};
maxDepthOne(x);
