/*******************************************   Bonus Problem  *****************************************************/

/* Link on LeetCode : https://leetcode.com/problems/kth-missing-positive-number/submissions/2088064494 */

var findKthPositive = function (arr, k) {
  const LastNum = arr[arr.length - 1];
  let output = [];
  for (let i = 1; i <= LastNum; i++) {
    if (!arr.includes(i)) output.push(i);
  }
  const len = output.length;
  if (len !== 0) {
    if (len < k) {
      return k - len + LastNum;
    }
    return output[k - 1];
  }
  return LastNum + k;
};

const arr = [5, 6, 7, 8, 9];
const k = 9;
console.log(findKthPositive(arr, k));
