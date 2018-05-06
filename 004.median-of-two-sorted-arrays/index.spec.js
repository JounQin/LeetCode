// @ts-check
import { findMedianSortedArrays } from '.'

test('median-of-two-sorted-arrays', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2)
  expect(findMedianSortedArrays([1, 3], [2, 4, 5])).toBe(3)
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5)
  expect(findMedianSortedArrays([2, 3, 4, 5], [2])).toBe(3)
  expect(findMedianSortedArrays([1, 2, 3, 4], [3, 4])).toBe(3)
})
