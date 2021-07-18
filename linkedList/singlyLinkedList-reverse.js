function reverse(list) {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;

  let next;
  let prev = null;


  for (let i=0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node; 
    node = next;
  }

}
