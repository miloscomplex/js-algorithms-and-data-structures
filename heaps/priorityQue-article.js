// PriorityQueue the smallest address is at the top
// inline with OS queues

class Box {
  constructor(value, distance) {
    this.address = address;
    this.distance = distance;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(address, distance) {
    if (address === null || distance === null) return undefined;
    let node = new Box(address, distance);
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
      if (element.distance >= parent.distance) break;
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
        if (leftChild.distance < element.distance) {
          swap = leftChildIdx;
        }
      }

      // check if inbounds
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          // check to only swap with largest address
          (swap === null && rightChild.distance < element.distance) ||
          (swap !== null && rightChild.distance < leftChild.distance)
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

let ER= new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('cut finger', 3);
