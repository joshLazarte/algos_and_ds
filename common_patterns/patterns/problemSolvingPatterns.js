//1. frequency counter
//use an object to collect values or frequencies of values
//helps avoid use of nested loops

//example:
//write a function called same that takes two arrays and sees if one array has exactly
//every value squared from other array. order does not matter. returns true or false

//version 1
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false;

//     for (let num of arr1) {
//         const positionInArr2 = arr2.indexOf(num * num);
//         if (positionInArr2 === -1) return false;

//         arr2.splice(positionInArr2, 1);
//     }

//     return true;
// };
//runtime = O(n^2)

//version 2, using frequency counter
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
};

//runtime O(3n) => O(n);

console.log(same([1, 2, 1], [1, 4, 1]));
