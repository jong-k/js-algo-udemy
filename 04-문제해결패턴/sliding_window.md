# sliding window

## 슬라이딩 윈도우란?

배열이나 문자열과 같은 일련의 데이터셋에서 특정 조건을 만족시키는 하위 집합을 찾을 때 유용하다

`window` 는 어떤 조건을 만족하는지 아닌지를 판별하는 집합 단위라고 생각하면 된다

이 window가 slide하면서 배열이나 문자열에서 특정 집합을 찾는 것이다

## 예시

```js
// 배열에서 n개의 연속하는 수가 최대값인 것을 출력
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17 -> index(1~4) 총합

// 브루트 포스 알고리즘??
```

## 구현 (naive ver.)

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity; // 음의 무한대 (모든 음수들보다 작음) -> 음수만 있는 배열도 가능
  // arr.length - num + 1 : window 수
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    // 개별의 window
    for (let j = 0; j < num; j++) {
      // arr[i + j]를 통해 i++ 될 때마다 연속하는 배열을 구할 수 있다
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

## 구현 (리팩터링)

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; // 우선 첫 번째 합을 maxSum에 저장
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // arr[0] 빼고 arr[num] 더하면 새로운 window.
    // 이것을 반복
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); //
```
