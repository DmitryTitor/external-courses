function sliceAnalog(array, begin = 0, end = array.length) {
  const newArray = [];
  const endIndex = end >= 0 ? end : array.length + end;
  let beginIndex; 

  if (Math.abs(begin) >= array.length) {
    beginIndex = 0;
  } else {
    beginIndex = begin >= 0 ? begin : array.length + begin;
  }

  for (let i = beginIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

module.exports = sliceAnalog;
