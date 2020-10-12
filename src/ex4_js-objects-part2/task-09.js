function addStringAfterWordInOtherString(str, inputingStr, wordNumber) {
  const originalArray = str.split(' ');
  const helperArray = originalArray.slice(0, wordNumber + 1);

  helperArray.push(inputingStr);
  
  const arrayWithInputedString = helperArray.concat(originalArray.slice(wordNumber + 1));

  return arrayWithInputedString.join(' ');
}

module.exports = addStringAfterWordInOtherString;
