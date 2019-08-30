const maxSubarraySum = (arr, num) => {
    if (num > arr.length) return null;

    let currentSum, maxSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    currentSum = maxSum;


    for (let i = num; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - num];
        maxSum = Math.max(currentSum, maxSum);

    }

    return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
