// MaxBinaryHeap the largest value is at the top

class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12]
  }

  insert(value) {
    if (value === null) return undefined;
    this.values.push(value);
    this.bubbleUp();
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

    return this.values;
  }


}

let heap = new MaxBinaryHeap();
heap.insert(55);
