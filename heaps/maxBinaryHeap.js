// MaxBinaryHeap the largest value is at the top

class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12]
  }

  insert(value) {
    if (value === null) return undefined;
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIdx = Math.floor((index - 1)/2);
      let parent = this.values[parentIdx]
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      if (parentIdx === 0) break;
      index = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      // check if inbounds
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          // check to only swap with largest value
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);
