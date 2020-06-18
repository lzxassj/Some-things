function ListNode(val?: string | number, next?: any) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法一： 递归
 * 时间复杂度：O(M+N), M和N分别的是链表的长度
 * 空间复杂度：O(1)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsOne = function (l1, l2) {
  // 初始化链表（哑节点）
  const list = new ListNode();

  // 定义一个临时链表
  let _return = list;

  // 只有当l1和l2都还有值到时候，才不停的递归
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // l1赋值给临时节点的next属性
      _return.next = l1;
      // l1赋值为l1的next，供下一次递归到的时候用，也可以理解成删除当前l1链表的顶级节点
      l1 = l1.next;
    } else {
      // 同l1
      _return.next = l2;
      l2 = l2.next;
    }
    // 一轮完成后，重新将临时链表的指向变更成next节点，供下一轮赋值（子节点）用
    _return = _return.next;
  }
  // 最后，把剩下没有递归完的元素直接拼接到临时链表的next中
  _return.next = l1 ? l1 : l2;

  return list.next;
};

/**
 * 方法二：递归
 * 时间复杂度：O(M+N)
 * 其中 M 和 M 分别为两个链表的长度。因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 O(M+N)
 * 
 * 空间复杂度：O(M+N)
 * 其中 M 和 N 分别为两个链表的长度。递归调用 mergeTwoLists 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 函数最多调用 M+N 次，因此空间复杂度为 O(M+N)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsTwo = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val <= l2.val) {
    l1.next = mergeTwoListsTwo(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsTwo(l1, l2.next);
    return l2;
  }
};

const l11 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l22 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
mergeTwoListsTwo(l11, l22);
