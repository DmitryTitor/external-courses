function reduceAnalog(array, callback, initialValue) {
  let previousValue;
  let i = 0;

  if (initialValue !== undefined) {
    previousValue = initialValue;
  } else {
    previousValue = array[0];
    i++;
  }

  for (i; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduceAnalog;
