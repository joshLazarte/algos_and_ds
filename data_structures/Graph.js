class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v));
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex) {
        const result = [];
        const visited = {};

        const DFS = v => {
            if (!v) return;
            visited[v] = true;
            result.push(v);
            this.adjacencyList[v].forEach(neighbor => {
                if (!visited[neighbor]) return DFS(neighbor);
            });
        };

        DFS(vertex);
        return result;
    }

    DFSIterative(vertex) {
        const stack = [vertex];
        const result = [];
        const visited = {};
        let v;
        visited[vertex] = true;

        while (stack.length) {
            v = stack.pop();
            result.push(v);
            this.adjacencyList[v].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });

        }

        return result;
    }

    BFSIterative(vertex) {
        const queue = [vertex];
        const result = [];
        const visited = {};
        let v;
        visited[vertex] = true;

        while (queue.length) {
            v = queue.shift();
            result.push(v);
            this.adjacencyList[v].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });

        }

        return result;
    }
}

const g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addVertex('Hong Kong');
// g.addVertex('Los Angeles');
// g.addEdge('Tokyo', 'Dallas');
// g.addEdge('Tokyo', 'Hong Kong');
// g.addEdge('Aspen', 'Dallas');
// g.addEdge('Hong Kong', 'Dallas');
// g.addEdge('Hong Kong', 'Los Angeles');
// g.addEdge('Dallas', 'Los Angeles');

// console.log(g.adjacencyList);

// g.removeVertex('Hong Kong');

// console.log(g.adjacencyList);


//traversal
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.adjacencyList);
console.log(g.DFSRecursive('A'));
console.log(g.DFSIterative('A'));
console.log(g.BFSIterative('A'));
