import { removeOccurrencesFromArray } from "./index";

describe.each([
  { array: [3, 2, 2, 3], target: 3, expectedArray: [2, 2], result: 2 },
  {
    array: [0, 1, 2, 2, 3, 0, 4, 2],
    target: 2,
    expectedArray: [0, 1, 4, 0, 3],
    result: 5,
  },
])(
  "Remove occurrence of $target from $array",
  ({ array, target, expectedArray, result }) => {
    test(`result should have indexes ${result}`, () => {
      const k = removeOccurrencesFromArray(array, target); // Calls your implementation

      expect(k).toBe(expectedArray.length);
      const sortedArray = array
        .filter((i) => typeof i === "number")
        .sort((a, b) => a - b);
      const sortedExpectedArray = expectedArray.sort((a, b) => a - b);
      for (let i = 0; i < k; i++) {
        expect(sortedArray[i]).toBe(sortedExpectedArray[i]);
      }
    });
  }
);
