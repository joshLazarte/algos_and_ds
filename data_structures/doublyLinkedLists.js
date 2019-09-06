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

    //for demo purposes only
    print() {
        const arr = [];
        let node = this.head;
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
        console.log(arr);
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const last = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = last.prev;
            this.tail.next = null;
            last.prev = null;
        }
        this.length--;
        return last;
    }

    shift() {
        if (!this.head) return undefined;
        const first = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = first.next;
            this.head.prev = null;
            first.next = null;
        }
        this.length--;
        return first;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let foundNode;
        if (idx < this.length / 2) {
            foundNode = this.head;
            for (let i = 0; i < idx; i++) {
                foundNode = foundNode.next;
            }
        }
        else {
            foundNode = this.tail;
            for (let i = this.length - 1; i > idx; i--) {
                foundNode = foundNode.prev;
            }
        }
        return foundNode;
    }

    set(idx, val) {
        const foundNode = this.get(idx);
        if (!foundNode) return false;

        foundNode.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        const oldNode = this.get(idx);
        const newNode = new Node(val);
        newNode.prev = oldNode.prev;
        newNode.prev.next = newNode;
        oldNode.prev = newNode;
        newNode.next = oldNode;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        const foundNode = this.get(idx);

        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;

        foundNode.next = null;
        foundNode.prev = null;
        this.length--;
        return foundNode;
    }
}

const dll = new DoublyLinkedList();
dll.push(0);
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);

console.log(dll.remove(4));

dll.print();
