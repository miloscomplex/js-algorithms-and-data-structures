class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    new Node(val)
    if (!this.head) {
      this.head = val;
    }
    this.tail = val;
  }
}
// let first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')

let list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
