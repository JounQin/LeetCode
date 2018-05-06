// @ts-check
import { twoSum } from '.'

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2])
  expect(twoSum([2, 7, 11, 15], 22)).toEqual([1, 3])
  expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3])
})
