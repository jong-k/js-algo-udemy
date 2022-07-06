// 만약 어느정도 정렬된 배열이 들어온다면?
// 이미 정렬 완료됐는데, 의미없는 비교가 반복적으로 이뤄질 수 있음
// 그래서 어떤 지점에서 더 이상 스왑이 일어나지 않으면 정렬이 완료된 것이므로 종료

// [5, 3, 4, 1, 2]

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ]
