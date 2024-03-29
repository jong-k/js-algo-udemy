# 그래프
## 1. 그래프란?
- 유한하고 변할 수 있는 정점 또는 노드, 점들의 집합으로 구성된 자료구조
- 무방향 그래프
- 방향 그래프
### 1-1. 그래프 소개
- SNS에서 친구 추천 기능 구현을 위해 그래프가 쓰임
- 노드나 노드들의 연결(커넥션)들의 모임
- 트리(Tree)는 최소 2개의 정점이 연결된 그래프
### 1-2. 그래프 활용 예시
- 소셜 네트워크
- 지도 기능, 길 찾기
- 라우팅 알고리즘 (네트워크)
- 파일 시스템 최적화
### 1-3. 그래프 용어 정리
1. 정점 (Vertex) : node의 다른 말
2. 간선 (Edge) : 노드끼리의 연결
3. 방향 그래프 (directed graph)
- 간선이 방향을 가진다
- 인스타그램 팔로우 관계
4. 무방향 그래프 (undirected graph)
- 방향이 없다
- 방향이 없기 때문에 가령 A와 B의 연결이 있을 때, A->B, A<-B 둘 다 가능하다 (A<->B)
- 페이스북 친구 관계
5. 가중 그래프
- 간선에 숫자값이 있음
- 인스타그램 팔로우 관계를 예를 들면, A가 B 관련 게시물에 댓글이나 좋아요를 많이 할수록 A->B 가중치가 높아진다
6. 비가중 그래프
## 2. 그래프 표현 방법
### 2-1. 인접 행렬(Adjacency Matrix) 방법
```js
//   A B C D E F
// A 0 1 0 0 0 1 
// B 1 0 1 0 0 0
// C 0 1 0 1 0 0
// D 0 0 1 0 1 0
// E 0 0 0 1 0 1
// F 1 0 0 0 1 0

// A~B 정점 간의 연결이 있으면 1, 없으면 0
```
- 그래프 관계를 행렬로 나타낼 수 있다
  - boolean 기반 (0, 1)으로 연결 관계를 2차원 배열 형태로 표시
### 2-2. 인접 리스트(c) 방법
```js
[
  [1, 5], // 정점 0과 연결된 정점들
  [0, 2], // 정점 1과 연결된 정점들
  [1, 3],
  [2, 4],
  [3, 5],
  [0, 4]
]
```
- 그래프 관계를 이차원 배열로 나타낼 수 있다
  - 인덱스 0에는 정점 0과 연결된 정점들이 배열에 들어가 있음
- 위 그래프처럼 정점들이 숫자가 아닌 문자열이라면?
  - 해시 테이블을 사용한다!
```js
{
  A: ['B', 'F'],
  B: ['A', 'E'],
  C: ['D', 'E'],
  D: ['C', 'F'],
  E: ['B', 'C'],
  F: ['A', 'D'],
}
```

### 2-3. 인접 리스트 vs 인접 행렬의 시간 복잡도
- V : 정점(Vertex)의 갯수
- E : 간선(Edge)의 갯수
<table>
  <thead>
    <tr>
      <td>작업</td>
      <td>인접 리스트</td>
      <td>인접 행렬</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>정점 추가</td>
      <td>O(1)</td>
      <td>O(V^2)</td>
    </tr>
    <tr>
      <td>간선 추가</td>
      <td>O(1)</td>
      <td>O(1)</td>
    </tr>
    <tr>
      <td>정점 제거</td>
      <td>O(V + E)</td>
      <td>O(V^2)</td>
    </tr>
    <tr>
      <td>간선 제거</td>
      <td>O(E)</td>
      <td>O(1)</td>
    </tr>
    <tr>
      <td>쿼리</td>
      <td>O(V + E)</td>
      <td>O(1)</td>
    </tr>
    <tr>
      <td>저장</td>
      <td>O(V + E)</td>
      <td>O(V^2)</td>
    </tr>
  </tbody>
</table>

### 인접 리스트
- 공간을 덜 차지할 수 있다 (매우 큰 장점)
- 빠르게 모든 간선을 순회할 수 있다
- 특정 간선을 찾는데는 느림
- 현실 세계의 대부분의 데이터들은 밀도가 낮은 큰 그래프 형태이기 때문에 인접 리스트를 깊게 공부한다

### 인접 행렬
- 공간을 더 많이 차지한다
- 간선을 확인하려면 모든 간선 순회 필요 (느림)
- 특정 간선을 찾는 것은 빠르다
- 밀집한 데이터를 다룰 때 좋다

## 3. 인접 리스트 그래프 구현
무방향 그래프를 다룬다 (방향 그래프로 바꾸는 것 용이함)
### 3-1. 메서드
### addVertex : 정점의 이름을 인수로 받아 정점을 생성한다
- name 인수를 받는다 (정점의 이름)
- 인접 리스트에 key: name, value: 빈 배열 형태로 추가한다

### addEdge : 정점 2개를 입력받아 간선을 생성한다
- vertex1, vertex2를 인수로 받는다
- 인접 리스트에서 vertex1 키의 밸류(배열)에 vertex2를 추가한다
- 인접 리스트에서 vertex2 키의 밸류(배열)에 vertex1를 추가한다

### removeEdge : 정점 2개를 입력받아 그 간선을 제거한다
- vertex1, vertex2를 인수로 받는다
- vertex1 키의 밸류값을 vertex2가 존재하지 않는 배열로 재할당한다
- vertex2 키의 밸류값을 vertex1가 존재하지 않는 배열로 재할당한다

### removeVertex : 제거할 정점을 입력받고 정점을 제거한다
- 제거할 정점 이름을 입력받는다
- 정점만 제거하는 걸로 끝나지 않고, 정점과 관련된 모든 간선도 제거해야한다
  - 인접 리스트의 모든 정점을 순회하며 간선이 있는 경우 removeEdge 함수를 실행한다
