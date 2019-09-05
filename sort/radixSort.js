const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

//console.log(getDigit(12345, 3));

// const digitCount = num => {
//     if (num === 0) return 1;
//     let digitCount = 0;
//     for (let i = 1; i <= num; i *= 10) {
//         digitCount++;
//     }
//     return digitCount;
// };

const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//console.log(digitCount(4655315));


const mostDigits = arr => {
    let max = 0;
    arr.forEach(num => max = Math.max(max, digitCount(num)));
    return max;
};

//console.log(mostDigits([465, 5315, 1, 156, 123456789]));


const radixSort = (nums) => {
    let max = mostDigits(nums);
    for (let i = 0; i < max; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        nums.forEach(num => {
            buckets[getDigit(num, i)].push(num);
        });
        nums = [].concat(...buckets);
    }

    return nums;
};

console.log(radixSort([8, 6, 7, 1587, 95, 54, 135, 984, 8743, 1234]));
