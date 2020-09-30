function checkSameArrayElements(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1] && (!(isNaN(arr[i]) && isNaN(arr[i+1])) || (typeof arr[i] === 'object' || typeof arr[i+1] === 'object'))) {
      return false;
    }
  }

  return true;
}

module.exports = checkSameArrayElements;
