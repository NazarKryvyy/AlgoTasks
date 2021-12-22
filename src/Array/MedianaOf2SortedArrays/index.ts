/*
*
* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
* The overall run time complexity should be O(log (m+n)).
*
* Example :
*
* Input: nums1 = [1,3], nums2 = []
* Output: 200000
* Explanation: merged array = [1,2,3] and median is .
* Example :

* Input: nums1 = [1,2], nums2 = [3,4]
* Output: 2.50000
* Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*
*
* Constraints:

* nums1.length == m
* nums2.length == n
* 0 <= m <= 1000
* 0 <= n <= 1000
* 1 <= m + n <= 2000
* -106 <= nums1[i], nums2[i] <= 106
*
* */

export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[]
): number => {
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  let medianIndex: number | [number, number];
  if (isEven) {
    medianIndex = [totalLength / 2, totalLength / 2 - 1];
  } else {
    medianIndex = Math.floor(totalLength / 2);
  }

  const reverseArr1 = nums1.reverse();
  const reverseArr2 = nums2.reverse();
  const resultArr: Array<number> = [];
  for (let i = 0; i < totalLength; i++) {
    const candidate1 = reverseArr1[reverseArr1.length - 1];
    const candidate2 = reverseArr2[reverseArr2.length - 1];

    if (
      candidate1 <= candidate2 ||
      (candidate1 !== undefined && candidate2 === undefined)
    ) {
      const currentItem = reverseArr1.pop();
      if (currentItem) {
        resultArr.push(currentItem);
      }
    } else if (
      candidate1 > candidate2 ||
      (candidate2 !== undefined && candidate1 === undefined)
    ) {
      const currentItem = reverseArr2.pop();
      if (currentItem) {
        resultArr.push(currentItem);
      }
    }
  }

  if (Array.isArray(medianIndex)) {
    const result = resultArr[medianIndex[0]] + resultArr[medianIndex[1]];
    return Number((result === 0 ? 0 : result / 2).toFixed(5));
  } else {
    return Number(resultArr[medianIndex].toFixed(5));
  }
};
