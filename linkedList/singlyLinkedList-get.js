function get(index) {
  if (index < 0 || index >= this.length) return null;
  let count = 0;
  let current = this.head;

  while (count !== index) {
    current = current.next;
    count++;
  }
  return current;
}
