function deepCloneObject(obj) {
  const newObj = {};
  
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)){
      let value = obj[key];

      if (value !== null && typeof value === 'object') {
        if (Array.isArray(value)) {
          newObj[key] = value.slice();
        } else {
          newObj[key] = deepCloneObject(value);
        } 
      } else {
        newObj[key] = value;
      }
    }
  }  

  return newObj;
}  

module.exports = deepCloneObject;
