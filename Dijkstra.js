const PriorityQueue = require('./data_structures/priorityQueue');

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }
    shortestPath(start, end) {
        const q = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [end];

        Object.keys(this.adjacencyList).forEach(key => {
            if (key === start) {
                distances[key] = 0;
                q.enqueue(key, 0);
            }
            else {
                distances[key] = Infinity;
                q.enqueue(key, Infinity);
            }
            previous[key] = null;
        });

        let currentVertex;

        while (q.values.length) {

            currentVertex = q.dequeue();

            if (currentVertex.val === end) break;

            this.adjacencyList[currentVertex.val].forEach(neighbor => {
                const totalDistanceFromStart = distances[currentVertex.val] + neighbor.weight;

                if (totalDistanceFromStart < distances[neighbor.node]) {
                    distances[neighbor.node] = totalDistanceFromStart;
                    previous[neighbor.node] = currentVertex.val;
                    q.enqueue(neighbor.node, totalDistanceFromStart);

                }

            })

        }


        let smallest = end;
        while (previous[smallest]) {
            path.push(previous[smallest]);
            smallest = previous[smallest];
        }

        return path.reverse();
    }
}

const g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('B', 'E', 3);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('F', 'E', 1);

//console.log(g.adjacencyList);
console.log(g.shortestPath('A', 'E'));





// shortestPath(start, end) {
//         const q = new PriorityQueue();
//         const distances = {};
//         const previous = {};

//         Object.keys(this.adjacencyList).forEach(key => {
//             if (key === start) {
//                 distances[key] = 0;
//                 q.enqueue(key, 0);
//             }
//             else {
//                 distances[key] = Infinity;
//                 q.enqueue(key, Infinity);
//             }
//             previous[key] = null;
//         });

//         let currentVertex;

//         while (q.values.length) {

//             currentVertex = q.dequeue();

//             if (currentVertex.val === end) break;

//             this.adjacencyList[currentVertex.val].forEach(neighbor => {
//                 const totalDistanceFromStart = distances[currentVertex.val] + neighbor.weight;

//                 if (totalDistanceFromStart < distances[neighbor.node]) {
//                     distances[neighbor.node] = totalDistanceFromStart;
//                     previous[neighbor.node] = currentVertex.val;
//                     q.enqueue(neighbor.node, totalDistanceFromStart);

//                 }

//             })

//         }
//         console.log(q.values)
//         return distances[end];
//     }




// shortestPath(start, finish) {
//     const nodes = new PriorityQueue();
//     const distances = {};
//     const previous = {};
//     let path = [];
//     let smallest;
//     //build up inital state
//     for (let vertex in this.adjacencyList) {
//         if (vertex === start) {
//             distances[vertex] = 0;
//             nodes.enqueue(vertex, 0);
//         }
//         else {
//             distances[vertex] = Infinity;
//             nodes.enqueue(vertex, Infinity);
//         }
//         previous[vertex] = null;
//     }
//     //as long as there is something to visit
//     while (nodes.values.length) {
//         smallest = nodes.dequeue().val;
//         if (smallest === finish) {
//             //We are done
//             //build path to return
//             while (previous[smallest]) {
//                 path.push(smallest);
//                 smallest = previous[smallest];
//             }

//             break;
//         }
//         if (smallest || distances[smallest] !== Infinity) {
//             for (let neighbor in this.adjacencyList[smallest]) {
//                 let nextNode = this.adjacencyList[smallest][neighbor];
//                 let candidate = distances[smallest] + nextNode.weight;
//                 let nextNeighbor = nextNode.node;
//                 if (candidate < distances[nextNeighbor]) {
//                     distances[nextNeighbor] = candidate;
//                     previous[nextNeighbor] = smallest;
//                     nodes.enqueue(nextNeighbor, candidate);
//                 }
//             }
//         }
//     }
//     return path.concat(smallest).reverse();
// }
