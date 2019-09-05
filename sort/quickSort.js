const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
    let swapIndex = start;
    let pivot = arr[swapIndex];

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
};


//console.log(pivotHelper(([5, 9, 72, 106, 2, 1, 31, 2, 19, 3])));


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
};

console.log(quickSort([5, 9, 72, 106, 2, 1, 31, 2, 19, 3]));
