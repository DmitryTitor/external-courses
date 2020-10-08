function reverseString(str) {
  let reverseStr = '';

  for (let i = 0; i < str.length; i++) {
    reverseStr += str.charAt(str.length - 1 - i);
  }

  return reverseStr;
}

module.exports = reverseString;
