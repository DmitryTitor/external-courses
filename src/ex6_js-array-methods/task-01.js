function sliceAnalog(array, begin = 0, end = array.length) {
  const newArray = [];
  const beginIndex = begin >= 0 ? begin : array.length + begin;  
  const endIndex = end >= 0 ? end : array.length + end;  

  for (let i = beginIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

module.exports = sliceAnalog;
