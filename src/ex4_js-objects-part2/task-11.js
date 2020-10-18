function outputEncounteredAmountOfEachSymbol(str) {
  const result = {};
  const symbolsArray = str.split("");

  for (let i = 0; i < symbolsArray.length; i++) {
    if (result[symbolsArray[i]]) {
      result[symbolsArray[i]] += 1;
    } else {
      result[symbolsArray[i]] = 1;
    }
  }

  Object.entries(result).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

module.exports = outputEncounteredAmountOfEachSymbol;
