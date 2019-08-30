const sumZero = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let firstItem = arr[start];
        let lastItem = arr[end];
        let sum = firstItem + lastItem;

        if (sum === 0) {
            return [firstItem, lastItem];
        }
        else if (sum > 0) {
            end--;
        }
        else {
            start++;
        }
    }
};

console.log(sumZero([-4, -3, -2, 0, 1, 5]));
