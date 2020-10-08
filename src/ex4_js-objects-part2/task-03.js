function deleteFirstAndLastSpace(str) {
  let newStr;
  
  if (str.charAt(str.length - 1) === ' ') {
    newStr = str.slice(0, str.length - 1);
  }

  if (str.charAt(0) === ' ') {
    return newStr.slice(1);
  }

  return newStr;
}

module.exports = deleteFirstAndLastSpace;
