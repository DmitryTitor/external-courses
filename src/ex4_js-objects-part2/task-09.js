function addStringAfterWordInOtherString(str, inputingStr, wordNumber) {
  const arr = str.split(' ');
  let newStr = '';

  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i] + ' ';

    if (wordNumber === i) {
      newStr += inputingStr + ' ';
    }
  }

  return newStr.slice(0, newStr.length - 1);
}

module.exports = addStringAfterWordInOtherString;
