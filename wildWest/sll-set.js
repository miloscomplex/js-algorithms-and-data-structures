class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;
    }

    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;

        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        let curr = this.head;
        for(let i = 0; i < idx; i++){
            curr = curr.next;
        }
        return curr;
    }

    set(idx, val){
        let node = this.get(idx);
        if(node === undefined) return false;
        node.val = val;
        return true;
    }
}
