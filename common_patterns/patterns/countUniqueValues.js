const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;
    let uniqueCount = 1;

    let first = 0;
    let second = 1;

    while (second < arr.length) {
        if (arr[first] === arr[second]) {
            second++;
        }
        else {
            uniqueCount++;
            first = second;
            second++;
        }
    }

    return uniqueCount;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
