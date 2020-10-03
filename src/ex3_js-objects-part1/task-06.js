function deepCloneObject(obj) {
  const newObj = {};
  
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)){
      let value = obj[key];
      let newProperty = value;

      if (value !== null && typeof value === 'object') {
          newProperty = deepCloneObject(value);
          
          if (Array.isArray(value)) {
            newProperty.length = value.length;
            newProperty = Array.from(newProperty);
          }
      }

      newObj[key] = newProperty;
    }
  }  

  return newObj;
}  

module.exports = deepCloneObject;
