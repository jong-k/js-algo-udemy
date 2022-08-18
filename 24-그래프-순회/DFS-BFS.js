class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2) {
    // 방향 그래프로 만드려면 아래중 1개만 실행하면 됨
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => {
      return v !== v2;
    });
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => {
      return v !== v1;
    });
  }
  removeVertex(name) {
    while (this.adjacencyList[name].length) {
      const adjacentVertex = this.adjacencyList[name].pop();
      this.removeEdge(adjacentVertex, name);
    }
    delete this.adjacencyList[name];
  }
  DFSR(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    })(start)

    return result;
  }
}



const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');