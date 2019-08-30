const areThereDuplicates = (...args) => {
    if (args.length < 2) return false;

    const counter = {};

    for (let val of args) {
        if (counter[val]) return true;
        else counter[val] = true;
    }

    return false;
};


console.log(areThereDuplicates(1, 2, 3));
