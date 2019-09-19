//for binary heap represented as an array
//for parent at index n
//Lchild = 2n+1
//Rchild = 2n+2
//child at index n
// Math.floor((n-1)/2)


//there are some bugs in this code


class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
        this.swap = MaxBinaryHeap.swap.bind(this);
    }

    insert(val) {
        this.values.push(val);
        return this.bubbleUp(val);
    }

    bubbleUp(val) {
        const getParentIndex = (n) => Math.floor((n - 1) / 2);

        let childIndex = this.values.length - 1;
        let parentIndex = getParentIndex(childIndex);

        while (val > this.values[parentIndex] && parentIndex > -1) {
            this.swap(this.values, childIndex, parentIndex);
            childIndex = parentIndex;
            parentIndex = getParentIndex(childIndex);
        }

        return this.values;
    }

    // extractMax() {
    //     this.swap(this.values, 0, this.values.length - 1);
    //     const oldMax = this.values.pop();
    //     this.sinkDown();
    //     return oldMax;
    // }

    // sinkDown() {
    //     let currIdx = 0;

    //     while (currIdx < this.values.length - 1) {
    //         let leftIdx = 2 * currIdx + 1;
    //         let rightIdx = 2 * currIdx + 2;

    //         if (leftIdx > this.values.length - 1) break;
    //         if (rightIdx > this.values.length - 1) {
    //             if (this.values[currIdx] < this.values[leftIdx]) {
    //                 this.swap(this.values, currIdx, leftIdx);
    //             }
    //             break;

    //         }

    //         if (this.values[currIdx] > Math.max(this.values[leftIdx], this.values[rightIdx])) {
    //             break;
    //         }

    //         if (this.values[leftIdx] > this.values[rightIdx]) {
    //             this.swap(this.values, currIdx, leftIdx);
    //             currIdx = leftIdx;
    //         }
    //         else {
    //             this.swap(this.values, currIdx, rightIdx);
    //             currIdx = rightIdx;
    //         }
    //     }
    // }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    static swap(arr, ind1, ind2) {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
    }
}

const heap = new MaxBinaryHeap();


heap.insert(55);


console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);

//[41, 39, 33, 18, 27, 12]
