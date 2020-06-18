interface TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归
 * 把给定的树，对等分，中间折一下，左右两边能完全重合的，就是镜像对称。
 * 引入check方法，参数是p和q，当p往左子节点移动的时候（或右子节点），q就往右子节点移动（或左子节点），然后两个节点比较，依次递归；
 *
 * 时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。
 * 空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricOne = function (root: TreeNode) {
  if (root) {
    check(root.left, root.right);
  } else {
    return true;
  }
};

const check = function (p: TreeNode, q: TreeNode) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
};

/**
 * 方法二：迭代
 * 
 * queue增加一个额外的栈队列，每个元素一出一进，left和right分别进入队，出栈后两两对比
 *
 * 时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。
 * 空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricTow = function (root: TreeNode): boolean {
  const queue: (TreeNode | null)[] = [];
  let left = root && root.left ? root.left : null;
  let right = root && root.right ? root.right : null;

  queue.push(left);
  queue.push(right);

  while (queue.length) {
    left = queue.shift();
    right = queue.shift();

    if(left === null && right === null) {
      continue;
    }

    if(!left || !right || left.val !== right.val) {
      return false;
    }

    queue.push(left.left);
    queue.push(right.right);

    queue.push(left.right);
    queue.push(right.left);

  }
  return true;
};
