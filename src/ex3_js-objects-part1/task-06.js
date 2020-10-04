function deepCloneObject(obj) {
  const newObj = {};
  
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)){
      let value = obj[key];

      if (value !== null && typeof value === 'object') {
        newObj[key] = deepCloneObject(value);

        // Для перевода из объекта в массив нужно поле 'length' - длина массива.
        // Array.from() переводит объект в массив.
        if (Array.isArray(value)) {
          newObj[key].length = value.length;
          Array.from(newObj[key]);
        }
      } else {
        newObj[key] = value;
      }
    }
  }  

  return newObj;
}  

module.exports = deepCloneObject;
