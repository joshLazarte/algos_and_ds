//recursive  O(2^n)
const fib = n => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));

//dynamic programming
//memoization
//storing values of expensive function calls and returning 
//the cached values in the future

const memoFib = (n, memo = []) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
    memo[n] = res;
    return res;
};

console.log(memoFib(100))

//tabulation
//starting at the bottom and working up
//better for space complexity

const tabFib = n => {
    if (n <= 2) return 1;
    const fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
};

console.log(tabFib(100))
