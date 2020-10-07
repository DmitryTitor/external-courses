function deepCloneObject(obj) {
  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (value !== null && typeof value === 'object') {
        newObj[key] = deepCloneObject(value);
      } else {
        newObj[key] = value;
      }
    }
  }

  return newObj;
}

module.exports = deepCloneObject;
