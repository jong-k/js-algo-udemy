function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// 4번째 라인에서 str.slice(-1)로 마지막 글자 1개를 추출해냈음
