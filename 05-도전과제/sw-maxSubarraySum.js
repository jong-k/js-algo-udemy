// sliding window 패턴
// 정수 배열과 정수가 주어진다. 정수 배열에서 정수 만큼 연속된 수의 최대 합을 구하라
// Time : O(N)
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
// maxSubarraySum([2,3], 3) // null

// 앞에서 배운 sliding window 패턴과 동일 코드
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum += tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
