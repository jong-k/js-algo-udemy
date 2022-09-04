# 그래프 순회
## 1. 그래프 순회의 활용
- peer to peer networking
  - 알 수도 있는 친구를 추천할 때
  - 한 다리 건너면 아는 친구면, 그래프로 가는 경로가 짧음
- web crawlers
- finding "closest" matches/recommendations
- shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI (shortest path to win the game)
## 2. DFS
그래프에서는 깊이를 순회하는 것을 눈으로 확인하기 어렵다
### 2-1. 인접 리스트로 DFS 확인하기
```js
// 인접 리스트
{
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'E'],
  'D': ['B', 'E', 'F'],
  'E': ['C', 'D', 'F'],
  'F': ['D', 'E']        
}
/* 순회 순서 (알파벳 순으로 한다고 가정)
1. A를 방문하고 간선들에서 A를 모두 지움 (B,C에 포함된 A 제거) 
2. A에서 가장 빠른 알파벳인 B를 방문하고 제거 (A, D에 포함된 B 제거)

중간 점검
  'A': ['C'],
  'B': ['D'],
  'C': ['E'],
  'D': ['E', 'F'],
  'E': ['C', 'D', 'F'],
  'F': ['D', 'E']   

3. B에서 가장 빠른 알파벳인 D를 방문하고 제거 (B의 D는 이미 제거됨, E의 D 제거)
4. D에서 가장 빠른 알파벳인 E를 방문하고 제거 (C의 E, F의 E)

중간 점검
  'A': ['C'],
  'B': [],
  'C': [],
  'D': ['F'],
  'E': ['C', 'F'],
  'F': []

5. E에서 가장 빠른 C 방문하고 제거 (A의 C, E의 C)
6. C에 남은 원소 없음 (막다른 길) -> 이전의 E로 되돌아감 -> F 방문하고 제거

최종
  'A': [],
  'B': [],
  'C': [],
  'D': [],
  'E': [],
  'F': []
  
 */
```
### 2-2. 재귀를 이용한 DFS 소개
트리와 마찬가지로 그래프 순회에서도 재귀, 반복을 통해 DFS를 구현할 수 있다
### 재귀(Recursive) DFS Pseudo Code 1
```js 
//                A
//              /   \
//            B      C
//            |      |
//            D ---- E
//             \    /
//               F

/* 재귀함수 (헬퍼함수)
DFS(vertex):
  if vertex is empty
    return (this is base case)
  add vertex to results list
  mark vertex as visited
  for each neighbor in vertex's neighbors:
    if neighbor is not visited:
      recursively call DFS on neighbor
 */
```
- 정점을 방문하면 객체에 {정점1: true} 형태로 추가
### 재귀 DFS Pseudo Code 2
- 스타팅 노드를 인수로 받는다
- 최종 방문 결과를 저장할 빈 배열을 만든다
- 정점들을 저장할 빈 객체를 만든다 (방문하면 true)
- 각 정점을 인수로 받는 헬퍼 함수들을 만든다 (실제 재귀호출되는 함수)
  - 정점이 비었으면 리턴되고 종료된다 (base case)
  - 헬퍼 함수는 입력한 정점을 방문 객체에 넣고 방문 배열에도 넣는다
  - 인접 리스트의 모든 값들을 순회하고 아직 방문되지 않은 값이 있으면 그 정점을 인수로 재귀호출한다
- 방문 배열을 리턴한다

### 2-3. 반복을 이용한 DFS 소개
### 반복(Iterative) DFS Pseudo Code 1
```js
/*
DFS-iterative(start):
  let S be a stack
  S.push(start)
  while S is not empty
    vertex = S.pop()
    if vertex is not labeled as discovered:
      visit vertex (add to result list)
      label vertex as discovered
      for each of vertex's neighbors, N do
      S.push(N)
 */
```

### 반복 DFS Pseudo Code 2
- 스타팅 노드를 인수로 받는다
- 정점을 추적할 용도의 스택 (빈 배열) 생성
- 방문결과 저장할 빈 배열 생성
- 방문한 정점 기록할 빈 객체 생성
- 스택에 스타팅 노드를 추가하고 방문했다고 표시한다 (객체에)
- 스택이 비지 않는 한 아래가 반복된다
  - 다음 정점을 스택에서 pop한다
  - 이 정점이 아직 방문되지 않았으면
    - 방문되었다고 표시한다
    - 방문결과 배열에 추가한다
    - 인접한 정점들을 스택에 추가한다

## 3. BFS
- 레벨 순으로 수평으로 방문해 나감
- 반복 DFS과 거의 유사 (큐를 사용)
### 3-1. BFS Pseudo Code
- 스타팅 노드를 인수로 받는다
- 큐를 만들고 스타팅 노드를 넣는다 (Array 사용)
- 방문결과 저장할 빈 배열 생성
- 방문한 정점 기록할 빈 객체 생성
- 스타팅 노드를 방문했다고 표시
- 큐에 원소가 있는한 아래를 반복
  - 큐에서 첫번째 원소를 제거하고 방문결과 배열에 추가
  - 이 정점의 인접 정점을 순회
  - 방문하지 않았다면 방문 표시하고 큐에 추가