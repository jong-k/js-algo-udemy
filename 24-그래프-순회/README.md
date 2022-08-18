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
### 재귀 DFS Pseudo Code 1
```js 
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
### DFS Pseudo Code 2
- 스타팅 노드를 인수로 받는다
- 최종 방문 결과를 저장할 빈 배열을 만든다
- 정점들을 저장할 객체를 만든다
- 각 정점을 인수로 받는 헬퍼 함수들을 만든다 (실제 재귀호출되는 함수)
  - 정점이 비었으면 리턴되고 종료된다 (base case)
  - 헬퍼 함수는 입력한 정점을 방문 객체에 넣고 방문 배열에도 넣는다
  - 연결 리스트의 모든 값들을 순회하고 아직 방문되지 않은 값이 있으면 그 정점을 인수로 재귀호출한다
