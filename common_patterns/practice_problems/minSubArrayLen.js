const minSubArrayLen = (arr, num) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while (start < arr.length) {
        if (total < num && end < arr.length) {
            total += arr[end];
            end++;
        }
        else if (total >= num) {
            minLength = Math.min(end - start, minLength);
            total -= arr[start];
            start++;
        }
        else {
            break;
        }
    }

    if (minLength > arr.length) return 0;

    return minLength;
};

console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
