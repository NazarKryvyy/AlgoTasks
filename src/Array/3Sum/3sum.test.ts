import { threeSum } from "./3sum";

describe.each([
  {
    array: [-1, 0, 1, 2, -1, -4],
    result: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { array: [], result: [] },
  { array: [0], result: [] },
])("From $array find 3 items who's sum is 0", ({ array, result }) => {
  test(`result should be ${result}`, () => {
    const answerList = threeSum(array);
    expect(answerList.length).toBe(result.length);
    answerList.forEach((valueList, index) => {
      expect(valueList.length).toBe(3);
      valueList.forEach((value) => {
        expect(result[index]).toContain(value);
      });
    });
  });
});
