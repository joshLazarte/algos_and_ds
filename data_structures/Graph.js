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
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Hong Kong');
g.addVertex('Los Angeles');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'Hong Kong');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Hong Kong', 'Los Angeles');
g.addEdge('Dallas', 'Los Angeles');

console.log(g.adjacencyList);

g.removeVertex('Hong Kong');

console.log(g.adjacencyList);
