function remove(index) {
  if (index < 0 || index > this.length) return undefined;
  if (index === 0) return this.shift();
  if (index === this.length - 1) this.pop();

  let prevNode = this.get(index - 1);
  let removed = prevNode.next;
  prevNode.next = removed.next;
  this.length--;

  return removed;
}
