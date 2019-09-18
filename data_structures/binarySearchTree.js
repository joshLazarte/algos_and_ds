class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let compareNode = this.root;
        while (true) {
            if (val === compareNode.value) return undefined;
            if (val > compareNode.value) {
                if (!compareNode.right) {
                    compareNode.right = newNode;
                    return this;
                }
                compareNode = compareNode.right;
            }
            else {
                if (!compareNode.left) {
                    compareNode.left = newNode;
                    return this;
                }
                compareNode = compareNode.left;
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let compareNode = this.root;
        while (true) {
            if (val === compareNode.value) return true;
            if (val > compareNode.value) {
                if (!compareNode.right) return false;
                compareNode = compareNode.right;
            }
            else {
                if (!compareNode.left) return false;
                compareNode = compareNode.left;
            }
        }
    }

    BFS() {
        const queue = [],
            visited = [];
        let current = this.root;

        if (!this.root) return undefined;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            visited.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return visited;
    }

    DFSPre() {
        const data = [];
        if (!this.root) return undefined;

        (function traverse(node) {
            data.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        })(this.root);

        return data;
    }

    DFSPost() {
        const data = [];
        if (!this.root) return undefined;

        (function traverse(node) {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            data.push(node.value);
        })(this.root);

        return data;
    }

    DFSInOrder() {
        const data = [];
        if (!this.root) return undefined;

        (function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        })(this.root);

        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());
