//write a function that determines if two integers have the same frequency of digits

const sameFrequency = (int1, int2) => {
    //make both ints itterable
    const firstInt = String(int1);
    const secondInt = String(int2);

    //break if lenghths do not match
    if (firstInt.length !== secondInt.length) return false;

    //init frequency counter for int1
    const counter = {};

    //loop through first int and build counter
    for (let num of firstInt) {
        counter[num] = counter[num] + 1 || 1;
    }

    //loop through second int
    for (let num of secondInt) {
        //if it's not in the counter object, return false
        if (!counter[num]) return false;
        //else subtract one from the count of first int
        counter[num]--;
    }
    return true;
};

console.log(sameFrequency(22, 222));
