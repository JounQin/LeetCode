// @ts-check
import { lengthOfLongestSubstring } from '.'

test('longest-substring-without-repeating-characters', () => {
  expect(lengthOfLongestSubstring('a')).toBe(1)
  expect(lengthOfLongestSubstring('ab')).toBe(2)
  expect(lengthOfLongestSubstring('abc')).toBe(3)
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})
