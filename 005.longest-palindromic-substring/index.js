// @ts-check
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const totalLen = s.length
  for (let i = 0, len = totalLen >> 1; i < len; i++) {
    if (s[i] !== s[totalLen - i - 1]) {
      return false
    }
  }

  return true
}

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = s => {
  /** @type {string} */
  let result = ''
  const len = s.length
  for (let i = 0; i < len; i++) {
    let temp = s[i]
    for (let j = i; j < len; j++) {
      if (j > i) {
        temp = temp + s[j]
      }

      if (temp.length > result.length && isPalindrome(temp)) {
        result = temp
      }
    }
  }
  return result
}
