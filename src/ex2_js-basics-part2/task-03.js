function outputEvenAndOddNumbers(arr) {
    let evenNumbers = 0;
    let oddNumbers = 0;
    let zeroNumbers = 0;
    for(let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === 'number') && (arr[i] === arr[i])) {
            if (arr[i] === 0) {
                zeroNumbers++;
            } else {
                if (arr[i] % 2 === 0) {
                    evenNumbers++;
                }
                if (arr[i] % 2 === 1) {
                    oddNumbers++;
                }
            }
        }
    }
    console.log(evenNumbers, oddNumbers, zeroNumbers);
    return [evenNumbers, oddNumbers, zeroNumbers];
}

module.exports = outputEvenAndOddNumbers;