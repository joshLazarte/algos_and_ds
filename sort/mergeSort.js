const getRemainder = (arr, index) => arr.splice(index, arr.length - index);

const merge = (arr1, arr2) => {
    let j, i = j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }

    i === arr1.length ?
        result.push(...getRemainder(arr2, j)) :
        result.push(...getRemainder(arr1, i));

    return result;
};

//console.log(merge([1, 10, 50, 75, 107], [2, 14, 99, 100, 200]));

const mergeSort = arr => {
    let leftHalf = arr.slice(0, Math.floor(arr.length / 2));
    let rightHalf = arr.slice(Math.floor(arr.length / 2));

    if (leftHalf.length > 1) leftHalf = mergeSort(leftHalf);
    if (rightHalf.length > 1) rightHalf = mergeSort(rightHalf);

    return merge(leftHalf, rightHalf);
};

console.log(mergeSort([99, 45, 17, 9, 12, 102, 18, 63,71, 8]));
