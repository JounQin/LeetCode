// @ts-check
import { twoSum1, twoSum2 } from '.'

test('two-sum-1', () => {
  expect(twoSum1([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum1([2, 7, 11, 15], 13)).toEqual([0, 2])
  expect(twoSum1([2, 7, 11, 15], 22)).toEqual([1, 3])
  expect(twoSum1([2, 7, 11, 15], 26)).toEqual([2, 3])
})

test('two-sum-2', () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum2([2, 7, 11, 15], 13)).toEqual([0, 2])
  expect(twoSum2([2, 7, 11, 15], 22)).toEqual([1, 3])
  expect(twoSum2([2, 7, 11, 15], 26)).toEqual([2, 3])
})
