const averagePair = (arr, target) => {
    //set left and right pointers
    let left = 0;
    let right = arr.length - 1;

    //set a loop that tells when to stop
    while (left < right) {
        //average left and right
        let average = (arr[left] + arr[right]) / 2;
        //if it equals target return true
        if (average === target) return true;
        //if the average is too small
        if (average < target) {
            //increase left
            left++;
            //if it's too large
        }
        else {
            //decrease right
            right--;
        }
    }
    return false;
};

console.log(averagePair([1, 2, 3], 2.5));
