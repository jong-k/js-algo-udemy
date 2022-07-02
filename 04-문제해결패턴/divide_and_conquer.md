# Divide and Conquer (분할정복)
## 분할 정복이란?
데이터셋을 작은 조각들로 나누고 그 하위집합을 처리하는 프로세스를 반복한다

시간복잡도를 크게 낮출 수 있다

## 예시
`정렬` 된 숫자 배열에서 특정 숫자의 인덱스를 리턴한다 (없으면 -1 리턴)

```js
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],11) // -1
```

## 선형 탐색 (naive ver.)
시간 복잡도 : O(N)
```js
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]  === val) {
      return i;
    }
  }
  return -1;
}
```

## Binary Search (이진 탐색) (refactor ver.)
시간복잡도 : O(log N)
```js
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if (array[middle] < val) {
      min = middle + 1;
    }
    else if (array[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}
```