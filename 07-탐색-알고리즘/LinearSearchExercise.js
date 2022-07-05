// 해당 값이 있으면 그 인덱스를, 없으면 -1을 반환

// function linearSearch(array, num) {
//   return array.indexOf(num);
// }

// function linearSearch(array, num) {
//   let index = 0;
//   for (let el of array) {
//     if (el === num) return index;
//     index++;
//   }
//   return -1;
// }

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
