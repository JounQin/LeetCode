// @ts-check
export class ListNode {
  constructor(val) {
    this.val = val
    /** @type {ListNode} */
    this.next = null
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = (l1, l2) => {
  /** @type {0|1} */
  let carry = 0
  /** @type {ListNode} */
  let result
  /** @type {ListNode} */
  let list
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0

    l1 = l1 && l1.next
    l2 = l2 && l2.next

    const val = val1 + val2 + carry
    carry = val > 9 ? 1 : 0

    const node = new ListNode(val % 10)

    if (list) {
      list.next = node
    }

    list = node

    result = result || list
  }

  if (carry) {
    list.next = {
      val: 1,
      next: null,
    }
  }

  return result
}
