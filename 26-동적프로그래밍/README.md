# 동적 프로그래밍 (Dynamic Programming)
복잡한 문제를 더 간단한 하위의 문제의 모음으로 쪼개고 각 하위 문제들을 풀어서 그 답을 저장하는 방식으로 문제를 푸는 방법

## 1. 이름의 유래
- 1940년대에 리차드 벨만이 고안한 개념
- 컴퓨터와 관계없는 군대에서의 최적화 계획을 위해서 만든 개념

## 2. 핵심 개념
### 2-1. Overlapping Subproblems (반복되는 하위 문제)
### 피보나치 수열
- 예를 들어 피보나치 수열의 5번째 숫자를 구한다면 아래 처럼 task를 쪼갤 수 있다
```js
/*                             fib(5)

                       fib(4)    +       fib(3)
                
               fib(3)     +     fib(2)    fib(2) + fib(1)
               
       fib(2)   +  fib(1)     
*/
```
### 2-2. Optimal Substructure (최적부분구조)
- 5번째 피보나치 수를 찾는 최적의 해답은 4번째 + 3번째 피보나치 수를 더하는 것이다 
- 또한 빠른 길 찾기 문제의 최적부분구조를 찾으면
  - A -> D 빠른 길은
    - A -> C 빠른 길 + C -> D 빠른 길 합친 것과 똑같다

### 2-3. 기본 재귀 솔루션과 그 문제점

```js
// 재귀적 피보나치
// 1, 1, 2, ...

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```
- 재귀식은 간단하지만 복잡도가 커서 비효율적이다 : O(2^N)
- 실제로는 O(1.6^N) 정도이나 그냥 2의 제곱으로 친다


- fib(40) 정도만 되도 수행 시간이 꽤 오래 걸린다
- fib(3), fib(4) 등의 기초 작업을 한번씩만 풀고 해답을 저장해서 활용하면 복잡도를 낮출 수 있다

## 3. 종류
- 재귀 (Top-down)
- 반복 - tabulation (Bottom-up)

### 3-1. Recursive(재귀) Solution
기본형
```js
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}
```
- 배열 대신 객체를 저장하는 방법도 있다
- 초기 배열에 원소를 미리 저장할 수도 있다


간소화한 방법
```js
function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  const res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}
```

### 재귀 DP의 시간복잡도
- O(N)
- 일반 재귀 : O(2^N) 에 비해 훨씬 발전된 것을 보인다

### 3-2. Tabulation(반복) Solution
- 연산 결과를 테이블(주로 배열)에 저장하기 때문에 tabulation 이라는 이름을 가짐
- 보통 반복문을 사용
- 더 나은 공간 복잡도라는 장점이 있다

```js
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1]; // 0 대신 undefined를 넣어도 됨
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
```