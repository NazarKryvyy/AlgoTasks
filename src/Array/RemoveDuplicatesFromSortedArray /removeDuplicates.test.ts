import { removeDuplicates } from "./index";

describe.skip.each([
  { array: [1, 1, 2], expectedArray: [1, 2], result: 2 },
  {
    array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    expectedArray: [0, 1, 2, 3, 4],
    result: 5,
  },
])("Remove duplicates from $array ", ({ array, expectedArray, result }) => {
  test(`result should have indexes ${result}`, () => {
    const k = removeDuplicates(array); // Calls your implementation

    expect(k).toBe(expectedArray.length);
    for (let i = 0; i < k; i++) {
      expect(array[i]).toBe(expectedArray[i]);
    }
  });
});
