function checkAndAddObjectHasProperty(nameProperty, obj) {
  const newObj = Object.assign(obj);
  
  if (!Object.prototype.hasOwnProperty.call(obj, nameProperty)) {
    newObj[nameProperty] = 'new';    
  }

  return newObj;
}

module.exports = checkAndAddObjectHasProperty;
