// 내가 작성한 코드와 크게 차이는 없지만, index만 관리하면 된다
// 추가로 swap 함수를 구현했고, 초기 인덱스가 그대로 최솟값이면 swap 안함

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([32, 22, 10, 19, 17])); // [ 10, 17, 19, 22, 32 ]
