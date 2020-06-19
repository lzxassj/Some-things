## 二叉树的最小深度
<font color=#999999>标签：树，深度优先，广度优先</font>



给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明:** 叶子节点是指没有子节点的节点



**示例：**
给定二叉树 [3,9,20,null,null,15,7]
```javascript
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最小深度  2.



**提示：**

- <font color=#999999>叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点</font>
- <font color=#999999>当 root 节点左右孩子都为空时，返回 1</font>
- <font color=#999999>当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度</font>
- <font color=#999999>当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值</font>





```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {

};
```
