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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let curNode = null;
    if (index <= this.length) {
      curNode = this.head;
      while (counter !== index) {
        curNode = curNode.next
        counter++;
      }
    } else  {
      count = this.length - 1;
      curNode = this.tail;
      while (counter !== index) {
        curNode = curNode.prev
        counter--;
      }
    }
    return curNode;
  }

  set(idx, val) {
    let node = get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

}
