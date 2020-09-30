function deepCloneObject(obj) {
  const newObj = {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      let newProperty = value;

      if (value !== null && typeof value === 'object') {
        newProperty = deepCloneObject(obj[key]);
        
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
