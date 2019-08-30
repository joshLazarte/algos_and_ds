// const reverse = (str) => {
//     if (str === '') return str;
//     return str[str.length - 1] + reverse(str.split('').slice(0, str.length - 1).join(''));
// };

// console.log(reverse('awesome'));

// const isPalindrome = (str) => {
//     if (str === '') return true;
//     return str[0] === str[str.length - 1] &&
//         isPalindrome(str.split('').slice(1, str.length - 1).join(''));
// };

// console.log(isPalindrome('racecar'));

// const isOdd = (num) => {
//     return num % 2 !== 0;
// };


// const someRecursive = (arr, cb) => {
//     if (arr.length === 0) return false;
//     return cb(arr[0]) || someRecursive(arr.splice(1), cb);
// };

// console.log(someRecursive([2, 4, 6, 11], val => val > 10));
// console.log(someRecursive([2, 4, 6], isOdd));


// const flatten = (arr) => {
//     if (arr.length === 0) return [];

//     let newArr = [];

//     if (typeof(arr[0]) === 'object') {
//         arr[0] = flatten(arr[0]);
//         newArr.push(...arr[0]);
//     }
//     else {
//         newArr.push(arr[0]);
//     }


//     return newArr.concat(flatten(arr.splice(1)));
// };

// console.log(flatten([1, 2, [3, 4],
//     [
//         [5]
//     ]
// ]));

// const capitalizeFirst = (arr) => {
//     if (arr.length === 0) return [];
//     const newArr = [];
//     newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
//     return newArr.concat(capitalizeFirst(arr.splice(1)));
// };

// console.log(capitalizeFirst(['car', 'taco', 'banana']));


// const obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// };

// const obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: 'car' }
// };

// const nestedEvenSum = (obj) => {
//     let sum = 0;

//     const addSums = (object) => {
//         let values = Object.values(object);
//         values.forEach(value => {
//             if (typeof(value) === 'object') {
//                 return addSums(value);
//             }
//             else {
//                 if (value % 2 === 0) sum += value;
//             }
//         });
//     };

//     addSums(obj);
//     return sum;
// };

// console.log(nestedEvenSum(obj2));


// const capitalizeWords = (arr) => {
//     if (arr.length === 0) return [];
//     const newArr = [arr[0].toUpperCase()];
//     return newArr.concat(capitalizeWords(arr.splice(1)));
// };

// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

// const obj1 = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// const stringifyNumbers = (obj) => {
//     const newObj = {};
//     let keys = Object.keys(obj);
//     keys.forEach(key => {
//         if (typeof(obj[key]) === 'object' && !Array.isArray(obj[key])) {
//             newObj[key] = stringifyNumbers(obj[key]);
//         }
//         else {
//             if (typeof(obj[key]) === 'number') {
//                 newObj[key] = obj[key].toString();
//             }
//             else {
//                 newObj[key] = obj[key];
//             }
//         }
//     });
//     return newObj;
// };

// console.log(stringifyNumbers(obj1))


const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStrings = (obj) => {
    const newArr = [];
    let keys = Object.keys(obj);
    keys.forEach(key => {
        if (typeof(obj[key]) === 'string') {
            newArr.push(obj[key]);
        }
        else if (typeof(obj[key]) === 'object') {
            return newArr.push(...collectStrings(obj[key]));
        }
    });
    return newArr;
};

console.log(collectStrings(obj1));
