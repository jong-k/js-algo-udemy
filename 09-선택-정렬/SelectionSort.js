// soution과 똑같지만, index만 관리하면 되고, 굳이 min 값을 만들 필요없다

// 5 3 2 1 4

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]; // 불필요
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(SelectionSort([5, 3, 2, 1, 4])); // [ 1, 2, 3, 4, 5 ]
