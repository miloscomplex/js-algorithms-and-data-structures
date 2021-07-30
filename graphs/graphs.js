// you could do a matrix, but if your edges are sparse matrix will be slower

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    // can add verfication statements
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertext2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertext].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function traverse(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        results.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            return traverse(neighbor)
          }
        })
    })(start);

    return results;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const results = [];
    const visited = {};

    visited[start] = true;

    while (stack.length) {
        console.log(stack);
        let curVertex = stack.pop();
        results.push(curVertex);

        this.adjacencyList[curVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        })
    }
    return results;
  }

}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.depthFirstRecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
