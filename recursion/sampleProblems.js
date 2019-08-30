// const collectOddValues = (arr) => {
//     let newArray = [];

//     if (arr.length === 0) return newArray;

//     if (arr[0] % 2 !== 0) newArray.push(arr[0]);

//     newArray = newArray.concat(collectOddValues(arr.slice(1)));
//     return newArray;
// };

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// const productOfArray = (arr) => {
//     if (arr.length === 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1));
// };

// console.log(productOfArray([1, 2, 3, 10]));


// const recursiveRange = (num) => {
//     if (num === 1) return 1;
//     return num + recursiveRange(num - 1);
// };

// console.log(recursiveRange(6));

// const power = (base, exp) => {
//     if (exp === 0) return 1;
//     return base * (power(base, exp - 1));
// };

// console.log(power(2, 3));

// const factorial = (num) => {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// };

// console.log(factorial(8));


//1,1,2,3,5,8,13

const fib = n => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));
