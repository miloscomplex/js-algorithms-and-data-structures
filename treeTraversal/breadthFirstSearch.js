// BFS traverse a tree by looking at all the values at a particular level
// use a queue FIFO
function breadthFirstSearch(tree) {
  let queue = [],
      data = [],
      node = this.root;

  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    data.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return data;
}
