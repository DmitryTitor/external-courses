function outputEvenAndOddNumbers(arr) {
    let evenNumbersAmount = 0;
    let oddNumbersAmount = 0;
    let zeroNumbersAmount = 0;
    for(let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === 'number') && !(isNaN(arr[i]))) {
            if (arr[i] === 0) {
                zeroNumbersAmount++;
            } else {
                if (arr[i] % 2 === 0) {
                    evenNumbersAmount++;
                }

                if (arr[i] % 2 === 1) {
                    oddNumbersAmount++;
                }
            }
        }
    }
    console.log(evenNumbersAmount, oddNumbersAmount, zeroNumbersAmount);
    
    return [evenNumbersAmount, oddNumbersAmount, zeroNumbersAmount];
}

module.exports = outputEvenAndOddNumbers;
