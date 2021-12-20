import { twoSum } from "./index";

describe.each([
  { array: [2, 7, 11, 15], target: 9, result: [0, 1] },
  { array: [3, 2, 4], target: 6, result: [1, 2] },
  { array: [3, 3], target: 6, result: [0, 1] },
])(
  "From $array find two items who's sum is $target",
  ({ array, target, result }) => {
    test(`result should have indexes ${result}`, () => {
      const answerList = twoSum(array, target);
      expect(answerList.length).toBe(result.length);
      answerList.forEach((value) => {
        expect(result).toContain(value);
      });
    });
  }
);
