class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let previous = current;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        this.length--;
        this.tail = previous;
        this.tail.next = null;
        if (this.length === 0) this.tail = this.head = null;
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        const head = this.head;
        this.head = head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return head;
    }

    unshift(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === this.length - 1) return this.tail;

        let current = this.head;

        for (let i = 0; i < idx; i++) {
            current = current.next;
        }

        return current;
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

        const node = new Node(val);
        const previous = this.get(idx - 1);
        const next = previous.next;
        previous.next = node;
        node.next = next;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        const previous = this.get(idx - 1);
        const removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

const list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);



console.log(list.reverse());
