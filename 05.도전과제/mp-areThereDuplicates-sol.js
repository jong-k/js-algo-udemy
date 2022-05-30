// 중복되는 값들이 있으면 true, 없으면 false
// Restriction: Time - O(N) / Space - O(N)
// Bonus: Time - O(N logN) / Space - O(1)
// Frequency Counter 또는 Multiple Pointers 중 어느것이든 사용 가능
// areThereDuplicates(1, 2, 3)  // false
// areThereDuplicates(1 ,2, 2)  // true
// areThereDuplicates('a', 'b', 'c', 'a')  // true

// multiple pointers 패턴 사용
// O(N logN)의 시간복잡도를 가짐
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b); // 오름차순 정렬
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(123, 312, 333, 333, 332)); // true
