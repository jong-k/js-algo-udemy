# JavaScript 알고리즘 & 자료구조
[유데미 강의](https://www.udemy.com/course/best-javascript-data-structures/) 를 들으며 만든 공부 자료

백준, 프로그래머스 문제를 풀고 [블로그](https://ggarden.tistory.com/)에 기록을 남김 (1일 1solve 2022.04.17~ )

## 목차
### 1. Intro
- Big-O 표기법
- 시간 복잡도와 공간 복잡도
- 간단한 문제 해결 패턴 소개
  - `sliding window`, `two pointer` ...
### 2. 재귀 (Recursion)
- base case
- 재귀 함수 패턴
- 자주 발생하는 에러
### 3. 탐색 알고리즘
- 이분 탐색 : O(N)
- 선형 탐색 : O(logN)
### 4. 정렬 알고리즘
- 기본 정렬 (비효율적 - O(N^2))
  - 버블
  - 선택
  - 삽입
- 심화 정렬 (효율적 - O(N logN))
  - 합병
  - 퀵
  - 기수 (Radix Sort)
### 5. 연결리스트 (Linked List)
- 배열에 비해 삽입, 제거가 빠름
- 단일 연결 리스트 (Single Linked List)
  - Head에서 Tail까지 한 방향으로만 탐색 가능
- 이중 연결 리스트 (Double Lnked List)
  - 양방향 탐색 가능
### 6. 스택 & 큐
- 배열 대신 단일 연결리스트로 직접 구현하면 시간 복잡도가 훨씬 유리
  - 삽입 : O(1)
  - 제거 : O(1)
  - 탐색 : O(N)
  - 접근 : O(N)
  - 배열에 비해 삽입, 제거가 빠르고 탐색, 접근은 느림
- 스택 : 후입선출(LIFO)
- 큐 : 선입 선출(FIFO)
### 7. 트리
- 일반 트리, 이진 트리, 이진 탐색 트리 등의 종류가 있음
  - 이진 탐색 트리(Binary Search Tree) 를 가장 많이 씀
- 비선형 자료구조 (리스트 : 선형 자료 구조)
- 이진 탐색 트리
  - 값들은 모두 유일한 값(unique)
  - 부모 노드의 왼쪽 자식 노드는 부모 노드보다 작고,
  - 오른쪽 나식 노드는 부모 노드보다 크다

  
- 트리의 모든 노드를 1번씩 방문하는 방법 2가지
  - BFS(Breadth First Search) : 너비 우선 탐색
    - 동일한 depth의 노드를 전부 방문하고 나서야 다음 depth로 넘어감
  - DFS(Depth First Search) : 깊이 우선 탐색
    - leaf까지 쭉내려갔다가 sibling이 있던 노드의 다음 sibling을 탐색하며 반복


- DFS 3가지 방법
  - 전위 탐색 (pre order) : 루트 노드부터 시작해서 제일 왼쪽을 먼저 방문
  - 후위 탐색 (post order) : 맨 왼쪽 리프 노드부터 시작해서 위로 올라가는데, 우측 자식노드가 있으면 방문 후 부모 노드를 방문
  - 중위 탐색 (in order) : 맨 왼쪽 리프 노드부터 시작해서 위로 올라가는데, 부모 노드 방문 후 우측 자식노드 방문