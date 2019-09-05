const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
};

console.log(selectionSort([7, 9, 1, 4, 6, 78, 15, 4, 2]));
