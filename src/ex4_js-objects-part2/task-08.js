function toLowerCamelCase(arr) {
  let str = arr[0];

  for (let i = 1; i < arr.length; i++) {
    str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  
  return str;
}

function remakeStringToLowerCamelCase(str) {
  return toLowerCamelCase(str.toLowerCase().split(' '));
}

module.exports = remakeStringToLowerCamelCase;
