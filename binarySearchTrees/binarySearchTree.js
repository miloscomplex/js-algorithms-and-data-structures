class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      // current is null if out of bounds
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
          found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

// simpler version
  // insert(value) {
  //   let newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   }
  //
  //   let current = this.root;
  //
  //   while(true) {
  //     if (value === current.value) return undefined;
  //     if (value < current.value) {
  //       if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         }
  //         current = current.left;
  //       } else if (value > current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           return this;
  //         }
  //         current = current.right;
  //         }
  //     }
  // }

}
