function checkSameArrayElements(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1] && !(isNaN(arr[i]) && isNaN(arr[i+1]))) {
            return false;
        }
    }
    return true;
}

module.exports = checkSameArrayElements;