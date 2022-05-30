// 부분열인지 확인하기
// 두개의 문자열이 주어진다. 첫 번째 문자열의 문자들이 두 번째 문자열에 포함되면 true를 리턴
// 단, 순서는 그대로 유지되어야 한다
// Time : O(N + M)
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false

// 재귀를 이용한 풀이법
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1)); // 같으면 앞글자 하나 자르고 재귀
  return isSubsequence(str1, str2.slice(1)); // 다르면 str2만 앞글자 하나 자르고 재귀
  // str2 다 잘라지면 false 리턴하고 종료
}
