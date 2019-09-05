// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         let minSpot = i;
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[i] < arr[j]) minSpot = j;
//             if (arr[i] > arr[j]) break;
//         }
//         if (minSpot !== i) arr.splice(minSpot, 0, arr.splice(i, 1)[0]);
//     }
//     return arr;
// };

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j, current = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
};

console.log(insertionSort([7, 9, 1, 4, 6, 78, 15, 4, 2]));
