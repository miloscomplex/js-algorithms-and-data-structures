class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail
      this.tail = node;
    }
      this.length++;
      return this;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else{
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) return undefined;
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }


}
