function concatStringFromArray(arr) {
  let newStr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    newStr += arr[i];
  }

  return newStr;
}

function outputOneSymbolEncountered(str) {
  const arr = str.split(str.charAt(0));
  console.log(`${str.charAt(0)}: ${arr.length - 1}`);

  return concatStringFromArray(arr);
}

function outputEncounteredAmountOfEachSymbol(str) {
  let newStr = str;

  while (newStr.length > 0) {
    newStr = outputOneSymbolEncountered(newStr);
  }
}

module.exports = outputEncounteredAmountOfEachSymbol;
