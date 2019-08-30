const isSubsequence = (str1, str2) => {
    if (str2.length < str1.length) return false;
    let pointer1 = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1[pointer1] === str2[i]) {
            pointer1++;
            if (pointer1 === str1.length) return true;
        }
    }
    return false;
};

console.log(isSubsequence('sing', 'sting'));
