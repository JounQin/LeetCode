// @ts-check
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum1 = (nums, target) => {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum2 = (nums, target) => {
  const len = nums.length
  /** @type {{[key:string]: number}} */
  const map = {}
  for (let i = 0; i < len; i++) {
    const curr = nums[i]
    const j = map[target - curr]
    if (j != null) {
      return [j, i]
    }
    map[curr] = i
  }
}
