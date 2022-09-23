# 너비 우선 탐색
- 칸 아카데미 너비우선탐색 알고리즘 편 참조

## 1. 조건
### 너비 우선 탐색은 각 정점 v에 다음 2개의 값을 할당
1. 거리 : 루트 정점에서 정점 v에 이르는 아무 경로에 있는 변의 최소 수
2. 이전 정점: 루트 정점에서 가장 짧은 경로 내 v의 이전 정점
   - 루트 정점은 null을 가짐 (이전 정점이 없음)
```js
/* 그래프 예시
0 --------------- 1         2 ---------------------- 3
(4, 1)         (3, 4)   /  (1, 3)                  (0, null)
            /    |    /    /                        |
          /      |  /     |                        /
         /       |       /                       /
        /     /  |      |                      / 
       /   /     |     /                     /
      / /        |   /                     /
    4             5 -------------------- 6          
 (2, 2)        (2, 2)                 (1, 3)     
 */

```
## 2. 예제 해설 (위 그래프)
- 시작할 때 각 정점의 거리와 이전 정점을 null로 초기화
- 루트 정점에서 시작, 정점의 거리에 0을 할당
- 루트 정점 이웃을 모두 방문하고 거리를 1로, 이전 정점을 1로 설정
- 거리가 1인 모든 정점의 방문하지 않은 모든 이웃을 방문
- 방문된 모든 정점의 거리를 2로 설정, 이전 정점을 설정
- 끝날 때까지 반복
  - 거리가 k + 1인 정점을 방문하기 전에 거리가 k인 모든 정점을 먼저 방문해야함
## 3. 구현
```js
// graph
const adjacencyList = {
  0: [1],
  1: [0, 4, 5],
  2: [3, 4, 5],
  3: [2, 6],
  4: [1, 2],
  5: [1, 6],
  6: [3, 5],
  7: []
};

function bfs(graph, start) {
  const queue = [start];
  const bfsInfo = [];
  for (let i = 0; i < Object.keys(graph).length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }
  bfsInfo[start].distance = 0;
  while (queue.length) {
    const currentVertex = queue.shift();
    graph[currentVertex].forEach(neighbor => {
      if (bfsInfo[neighbor].predecessor === null) {
        bfsInfo[neighbor].distance = bfsInfo[currentVertex].distance + 1;
        bfsInfo[neighbor].predecessor = currentVertex;
        queue.push(neighbor);
      }
    });
  }
  return bfsInfo;
}
```