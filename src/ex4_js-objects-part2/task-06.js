function upFirstWordSymbolAndConcatToString(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
  }
  
  return str.slice(0, str.length - 1);
}

function upFirstWordsSymbol(str) {
  return upFirstWordSymbolAndConcatToString(str.split(' '));
}

module.exports = upFirstWordsSymbol;
