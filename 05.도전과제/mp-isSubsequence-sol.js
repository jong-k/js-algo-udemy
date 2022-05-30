// 부분열인지 확인하기
// 두개의 문자열이 주어진다. 첫 번째 문자열의 문자들이 두 번째 문자열에 포함되면 true를 리턴
// 단, 순서는 그대로 유지되어야 한다
// Time : O(N + M)
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true; // str1 이 빈 값이면 그냥 true 출력
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++; // 같으면 i를 +1
    if (i === str1.length) return true; // str1 모두 돌았으면 true 리턴하고 종료
    j++; // 같은거 없으면 j를 +1
  }
  return false; // j 계속 커지다가 길이 초과하면 false로 종료
}
