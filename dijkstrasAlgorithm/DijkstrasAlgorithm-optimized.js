class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    if (value === null || priority === null) return undefined;
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIdx = Math.floor((index - 1)/2);
      let parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      if (parentIdx === 0) break;
      index = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (idx <= this.values.length) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      // check if inbounds
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      // check if inbounds
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          // check to only swap with largest value
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
      }
  }


}

class WeightedGraph {
 constructor() {
   this.adjacencyList = {};
 }

 addVertex(vertex) {
   if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
 }

 addEdge(vertex1, vertex2, weight) {
   this.adjacencyList[vertex1].push({ node: vertex2, weight});
   this.adjacencyList[vertex2].push({node: vertex1, weight});
 }

 Dijkstra(start, finish) {
   const nodes = new PriorityQueue();
   const distances = {};
   const previous = {};
   let path = []; // returned at the end
   let smallest;

   // build initial state
   for (let vertex in this.adjacencyList) {
     if (vertex === start) {
       distances[vertex] = 0
       nodes.enqueue(vertex, 0)
     } else {
       distances[vertex] = Infinity;
       nodes.enqueue(vertex, Infinity);
     }

     previous[vertex] = null;
   }

   // as long as there something to visit
   while (nodes.values.length) {
     smallest = nodes.dequeue().val;
     if (smallest === finish) {
       //console.log(distances)
       //console.log(previous)
       // we are done so build path to return
       while(previous[smallest]) {
         path.push(smallest);
         smallest = previous[smallest];
       }
       break;
     }

     if (smallest || distances[smallest] !== Infinity) {
       for( let neighbor in this.adjacencyList[smallest]) {
         // find neighbor node
         let nextNode = this.adjacencyList[smallest][neighbor];
         //console.log(nextNode);
         // calculate distance to neighborNode
         let candidate = distances[smallest] + nextNode.weight;
         let nextNeighbor = nextNode.node
         // compare candidate to neighbor to see if it's smaller
         if (candidate < distances[nextNeighbor]) {
           // updating new smallest distance to neighbor
           distances[nextNeighbor] = candidate;
           // updating previous - How we got to neighbor
           previous[nextNeighbor] = smallest;
           // enqueue in priority queue with new priority
           nodes.enqueue(nextNeighbor, candidate);
         }
       }
     }
   }
   return path.concat(smallest).reverse();
 }

}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]
