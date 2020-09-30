function outputEvenAndOddNumbers(arr) {
  let evenNumbersAmount = 0;
  let oddNumbersAmount = 0;
  let zeroNumbersAmount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if ((typeof arr[i] === 'number') && !(isNaN(arr[i]))) {
      if (arr[i] === 0) {
        zeroNumbersAmount += 1;
      } else {
        if (arr[i] % 2 === 0) {
          evenNumbersAmount += 1;
        } else {
          oddNumbersAmount += 1;
        }
      }
    }
  }

  console.log(evenNumbersAmount, oddNumbersAmount, zeroNumbersAmount);
    
  return [evenNumbersAmount, oddNumbersAmount, zeroNumbersAmount];
}

module.exports = outputEvenAndOddNumbers;
