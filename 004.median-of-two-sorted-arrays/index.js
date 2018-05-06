// @ts-check
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = nums1.length + nums2.length

  let i = 0
  let j = 0
  let x, y

  for (let k = 0, len = (totalLen >> 1) + 1; k < len; k++) {
    x = y
    if (nums2[j] == null || nums1[i] < nums2[j]) {
      y = nums1[i++]
    } else {
      y = nums2[j++]
    }
  }

  return totalLen % 2 ? y : (x + y) / 2
}
