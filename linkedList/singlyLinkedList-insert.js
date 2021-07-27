function insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === this.length) return !!this.push(val);
  if (index === 0) return !!this.unshift(val);
  // double bang makes the return boolean
  let newNode = new Node(val);
  let prev = this.get(index - 1);
  let temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
}
