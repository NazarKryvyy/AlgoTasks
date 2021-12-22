import { findMedianSortedArrays } from "./index";

describe.skip.each([
  { array1: [1, 3], array2: [], result: 2.00000 },
  { array1: [1, 2], array2: [3, 4], result: 2.5 },
])(
  "Merge $array1 and $array2 and find median",
  ({ array1, array2, result }) => {
    test(`result should have indexes ${result}`, () => {
      const answer = findMedianSortedArrays(array1, array2);
      expect(answer).toBe(result);
    });
  }
);
