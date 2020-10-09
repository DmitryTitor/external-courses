function outputEncounteredAmountOfEachSymbol(str) {
  let newStr = str;
  let arr;

  while (newStr.length > 0) {
    arr = newStr.split(newStr.charAt(0));
    console.log(`${newStr.charAt(0)}: ${arr.length - 1}`);
    newStr = arr.join('');
  }
}

module.exports = outputEncounteredAmountOfEachSymbol;
