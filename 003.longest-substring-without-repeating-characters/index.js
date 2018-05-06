// @ts-check
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = s => {
  let result = ''
  const len = s.length

  for (let i = 0; i < len; i++) {
    let temp = s[i]

    for (let j = i + 1; j < len; j++) {
      const char = s[j]
      if (temp.includes(char)) {
        break
      } else {
        temp += char
      }
    }

    if (temp.length > result.length) {
      result = temp
    }
  }

  return result.length
}
