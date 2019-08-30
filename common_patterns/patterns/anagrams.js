// const validAnagram = (str1, str2) => {
//     const freqCounter1 = {};
//     const freqCounter2 = {};

//     for (let char of str1) {
//         freqCounter1[char] = freqCounter1[char] + 1 || 1;
//     }

//     for (let char of str2) {
//         freqCounter2[char] = freqCounter2[char] + 1 || 1;
//     }


//     for (let key in freqCounter1) {
//         if (!(key in freqCounter2)) return false;
//         if (freqCounter1[key] !== freqCounter2[key]) return false;
//     }

//     return true;
// }


const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const freqCounter = {};

    for (let char of str1) {
        freqCounter[char] = freqCounter[char] + 1 || 1;
    }

    for (let char of str2) {
        if (!freqCounter[char] || freqCounter[char] === 0) return false;
        freqCounter[char]--;
    }

    return true;
};

console.log(validAnagram("aaza", "zaaa"));
