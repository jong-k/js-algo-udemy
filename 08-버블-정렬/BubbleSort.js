// [5, 3, 4, 1, 2]

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      // 범위 안줄여나가면 undefined랑 비교하게 된다
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

console.log(bubbleSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ]
