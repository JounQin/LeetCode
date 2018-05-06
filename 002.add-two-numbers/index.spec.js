// @ts-check
import { ListNode, addTwoNumbers } from '.'

/**
 * transform number array to ListNode instance
 *
 * @param {number[]} arr
 * @return {ListNode}
 */
const numsToList = (...arr) => {
  /** @type {ListNode} */
  let result
  /** @type {ListNode} */
  let list
  arr.forEach(val => {
    const node = new ListNode(val)

    if (list) {
      list.next = node
    }

    list = node

    result = result || list
  })
  return result
}

test('add-two-numbers', () => {
  expect(addTwoNumbers(numsToList(2, 4, 3), numsToList(5, 6, 4))).toEqual(
    numsToList(7, 0, 8),
  )
  expect(addTwoNumbers(numsToList(2, 4, 5), numsToList(5, 6, 4))).toEqual(
    numsToList(7, 0, 0, 1),
  )
  expect(addTwoNumbers(numsToList(2, 4, 5, 8), numsToList(5, 6, 4))).toEqual(
    numsToList(7, 0, 0, 9),
  )
  expect(addTwoNumbers(numsToList(2, 4, 5), numsToList(5, 6, 4, 5))).toEqual(
    numsToList(7, 0, 0, 6),
  )
})
