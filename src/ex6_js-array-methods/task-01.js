function getLoopConvertedIndex(originalIndex, length) {
  if (-originalIndex >= length) {
    return 0;
  } 
  
  if (originalIndex >= length) {
    return length;
  } 
  
  return originalIndex >= 0 ? originalIndex : length + originalIndex;
}

function sliceAnalog(array, begin = 0, end = array.length) {
  const newArray = [];
  const beginIndex = getLoopConvertedIndex(begin, array.length);
  const endIndex = getLoopConvertedIndex(end, array.length);

  for (let i = beginIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

module.exports = sliceAnalog;
